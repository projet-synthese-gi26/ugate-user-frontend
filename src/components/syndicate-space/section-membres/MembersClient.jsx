"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Users, UserPlus, Search, Filter, Check, X, AlertTriangle, UserX, Shield, UserCheck, RefreshCw } from 'lucide-react';
import StatCard from './StatCard';
import TabButton from './TabButton';
import { respondToAdhesionAPI, getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { MemberRowSkeleton, CardSkeleton } from '../SyndicateSpaceLoader';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import Image from 'next/image';

function MembersClientInner({ initialMembers = [], initialRequests = [], branches = [], stats = {}, syndicatId }) {
    const t = useTranslations('members_page');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState(initialMembers || []);
    const [requests, setRequests] = useState(initialRequests || []);
    const [isLoadingMembers, setIsLoadingMembers] = useState(false);
    const [isLoadingRequests, setIsLoadingRequests] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    
    const filteredMembers = useMemo(() => 
        (members || []).filter(member => 
            member?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [members, searchTerm]);
    
    const filteredRequests = useMemo(() => 
        (requests || []).filter(req => 
            req?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [requests, searchTerm]);

    // Fonction pour recharger les données
    const refreshData = async (force = false) => {
        if (!branches || branches.length === 0) return;
        
        const mainBranchId = branches[0].id;
        
        try {
            await executeWithRetry(async () => {
                const [membersData, requestsData] = await Promise.all([
                    getBranchMembersAPI(mainBranchId),
                    getAdhesionRequestsAPI(syndicatId, mainBranchId)
                ]);
                
                setMembers(membersData || []);
                setRequests(requestsData || []);
                setLastRefresh(Date.now());
                
                clearError('members');
                clearError('requests');
            }, 'refresh-data', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) {
                        toast.success("Données mises à jour !");
                    }
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    // Charger les données au montage si pas de données initiales
    useEffect(() => {
        if ((!initialMembers || initialMembers.length === 0) && 
            (!initialRequests || initialRequests.length === 0) &&
            branches && branches.length > 0) {
            refreshData(false);
        }
    }, [branches]);

    const handleResponse = async (userId, branchId, isApproved) => {
        const action = isApproved ? "d'approuver" : "de rejeter";
        const result = await Swal.fire({
            title: `Êtes-vous sûr de vouloir ${action} cette demande ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1e40af',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Oui, continuer !',
            cancelButtonText: 'Annuler'
        });

        if (result.isConfirmed) {
            try {
                await executeWithRetry(async () => {
                    await respondToAdhesionAPI(syndicatId, branchId, userId, isApproved);
                }, `respond-adhesion-${userId}`, {
                    maxRetries: 2,
                    onSuccess: () => {
                        setRequests(prev => prev.filter(req => req.userId !== userId));
                        toast.success(`Demande ${isApproved ? 'approuvée' : 'rejetée'} avec succès !`);
                        // Recharger les membres pour voir le nouveau membre si approuvé
                        if (isApproved) {
                            setTimeout(() => refreshData(false), 1000);
                        }
                    }
                });
            } catch (error) {
                // L'erreur est déjà gérée par executeWithRetry
            }
        }
    };
    
    const MembersList = ({ data }) => {
        // Gestion des erreurs
        if (hasError('members')) {
            return (
                <ErrorState 
                    error={getError('members')}
                    onRetry={() => refreshData(true)}
                    onDismiss={() => clearError('members')}
                />
            );
        }

        // État vide amélioré
        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Users}
                    title="Aucun membre trouvé"
                    description={searchTerm ? "Aucun membre ne correspond à votre recherche." : "Ce syndicat n'a pas encore de membres actifs."}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Actualiser
                        </motion.button>
                    )}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700"
                />
            );
        }

        return (
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                        <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Membre</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Rôle</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Statut</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                            {isLoadingMembers ? (
                                // Afficher des skeletons pendant le chargement
                                Array.from({ length: 5 }).map((_, index) => (
                                    <MemberRowSkeleton key={`skeleton-${index}`} />
                                ))
                            ) : (
                                <AnimatePresence>
                                    {data.map(member => (
                                    <motion.tr key={member.userId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center">
                                            {member.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${member.userAvatarUrl}`} alt={member.userName} width={44} height={44} className="w-11 h-11 rounded-xl object-cover shadow-soft"/> : <SyndicatDefaultAvatar name={member.userName} size={44} className="rounded-xl"/>}
                                            <div className="ml-4"><div className="text-sm font-medium text-neutral-800 dark:text-white">{member.userName}</div></div>
                                        </div></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-medium rounded-full ${member.role === 'ROLE_PRESIDENT' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-300' : 'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300'}`}>{member.role.replace('ROLE_', '')}</span></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${member.status === 'ACTIVE' ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300' : 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300'}`}>{member.status}</span></td>
                                        <td className="px-6 py-4"><button className="p-2 text-neutral-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200"><UserX size={16}/></button></td>
                                    </motion.tr>
                                    ))}
                                </AnimatePresence>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const MembershipRequestsList = ({ data }) => {
        // Gestion des erreurs
        if (hasError('requests')) {
            return (
                <ErrorState 
                    error={getError('requests')}
                    onRetry={() => refreshData(true)}
                    onDismiss={() => clearError('requests')}
                />
            );
        }

        // État vide amélioré
        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={UserPlus}
                    title="Aucune demande d'adhésion"
                    description={searchTerm ? "Aucune demande ne correspond à votre recherche." : "Il n'y a pas de demandes d'adhésion en attente."}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Actualiser
                        </motion.button>
                    )}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700"
                />
            );
        }

        return (
            <div className="space-y-6">
                {isLoadingRequests ? (
                    // Afficher des skeletons pendant le chargement des demandes
                    Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={`request-skeleton-${index}`} />
                    ))
                ) : (
                    <AnimatePresence>
                        {data.map(req => (
                    <motion.div key={req.userId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="flex items-center"><div className="w-16 h-16 flex-shrink-0">{req.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${req.userAvatarUrl}`} alt={req.userName} width={64} height={64} className="rounded-xl object-cover"/> : <SyndicatDefaultAvatar name={req.userName} size={64} className="rounded-xl"/>}</div><div className="ml-4"><h3 className="text-xl font-semibold text-gray-800 dark:text-white">{req.userName}</h3><p className="text-sm text-gray-500 dark:text-gray-400">Demande le {new Date(req.requestTimestamp).toLocaleDateString('fr-FR')}</p></div></div>
                            <div className="flex space-x-3 self-start sm:self-center flex-shrink-0">
                                {branches && branches.length > 0 ? (
                                    <>
                                        <motion.button onClick={() => handleResponse(req.userId, branches[0].id, true)} className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"><Check className="w-5 h-5"/></motion.button>
                                        <motion.button onClick={() => handleResponse(req.userId, branches[0].id, false)} className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"><X className="w-5 h-5"/></motion.button>
                                    </>
                                ) : (
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Actions indisponibles
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-l-4 border-blue-400"><p className="text-gray-600 dark:text-gray-300 italic">"{req.motivation}"</p></div>
                    </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-8">
            {/* Header avec bouton de refresh */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-2">
                            {t('members_page.title')}
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {t('members_page.subtitle')}
                        </p>
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => refreshData(true)}
                        disabled={apiLoading}
                        className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
                    >
                        <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                        Actualiser
                    </motion.button>
                </div>
            </motion.div>

            {/* Affichage des erreurs globales */}
            <AnimatePresence>
                {hasError('refresh-data') && (
                    <InlineError 
                        error={getError('refresh-data')}
                        className="mb-6"
                    />
                )}
            </AnimatePresence>

            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                    icon={Users} 
                    value={(stats?.total || members.length + requests.length).toLocaleString()} 
                    label="Membres au total" 
                    color="border-primary-200"
                />
                <StatCard 
                    icon={UserCheck} 
                    value={(stats?.active || members.length).toLocaleString()} 
                    label="Membres actifs" 
                    color="border-emerald-200"
                />
                <StatCard 
                    icon={UserPlus} 
                    value={(stats?.pending || requests.length).toLocaleString()} 
                    label="Demandes en attente" 
                    color="border-amber-200"
                />
            </div>

            {/* Navigation et contenu */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                {/* Header avec tabs et recherche */}
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex space-x-1 bg-neutral-100 dark:bg-neutral-700 rounded-xl p-1">
                            <TabButton 
                                active={activeTab === 'members'} 
                                icon={Users} 
                                label={`${t('members_page.tab_members')} (${filteredMembers.length})`}
                                onClick={() => setActiveTab('members')}
                            />
                            <TabButton 
                                active={activeTab === 'requests'} 
                                icon={UserPlus} 
                                label={`${t('members_page.tab_requests')} (${filteredRequests.length})`}
                                onClick={() => setActiveTab('requests')}
                            />
                        </div>
                        
                        <div className="relative flex-1 max-w-xs">
                            <input 
                                type="text" 
                                placeholder={t("members_page.search_placeholder")} 
                                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 text-sm" 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab} 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'members' ? 
                                <MembersList data={filteredMembers} /> : 
                                <MembershipRequestsList data={filteredRequests} />
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Wrapper avec ErrorBoundary
export default function MembersClient(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Membres"
            subtitle="Une erreur s'est produite lors du chargement de la gestion des membres."
        >
            <MembersClientInner {...props} />
        </ErrorBoundary>
    );
}