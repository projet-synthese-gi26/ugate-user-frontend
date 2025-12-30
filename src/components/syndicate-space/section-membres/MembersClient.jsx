// src/components/syndicate-space/section-membres/MembersClient.jsx
"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Users, UserPlus, Search, Check, X, UserX, RefreshCw, UserCheck } from 'lucide-react';
import Image from 'next/image';

// Composants internes
import StatCard from './StatCard';
import TabButton from './TabButton';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { MemberRowSkeleton, CardSkeleton } from '../SyndicateSpaceLoader';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';

// API et Hooks
import { respondToAdhesionAPI, getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';

/**
 * Fonction utilitaire pour gérer intelligemment les URLs d'images.
 * Évite le crash "Invalid URL" en ne concaténant pas STATIC_FILES_URL si l'URL est déjà absolue.
 */
const getAvatarUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${STATIC_FILES_URL}${url}`;
};

function MembersClientInner({ initialMembers = [], initialRequests = [], branches = [], stats = {}, syndicatId }) {
    const t = useTranslations('members_page');
    const { clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();

    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState(initialMembers || []);
    const [requests, setRequests] = useState(initialRequests || []);
    // eslint-disable-next-line no-unused-vars
    const [lastRefresh, setLastRefresh] = useState(Date.now());

    // Filtrage dynamique
    const filteredMembers = useMemo(() =>
        (members || []).filter(member =>
            member?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [members, searchTerm]);

    const filteredRequests = useMemo(() =>
        (requests || []).filter(req =>
            req?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [requests, searchTerm]);

    // Fonction de rafraîchissement des données
    const refreshData = async (force = false) => {
        // Protection pour le mode test : ne pas appeler l'API
        if (syndicatId === 'test-id') {
            if (force) toast.success("Données de test rechargées (simulation)");
            return;
        }

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
                        toast.success(t('data_refreshed'));
                    }
                }
            });
        } catch (error) {
            // L'erreur est gérée par le hook useErrorHandler
        }
    };

    // Chargement initial si nécessaire (sauf pour le mock qui est injecté via props)
    useEffect(() => {
        if (syndicatId !== 'test-id' &&
            (!initialMembers || initialMembers.length === 0) &&
            branches && branches.length > 0) {
            refreshData(false);
        }
    }, [branches, syndicatId]);

    // Gestion de l'approbation/rejet
    const handleResponse = async (userId, branchId, isApproved) => {
        // En mode test, on simule l'action
        if (syndicatId === 'test-id') {
            setRequests(prev => prev.filter(req => req.userId !== userId));
            if (isApproved) {
                // Simuler l'ajout aux membres
                const req = requests.find(r => r.userId === userId);
                if (req) {
                    setMembers(prev => [...prev, { ...req, role: 'ROLE_MEMBER', status: 'ACTIVE' }]);
                }
            }
            toast.success(t(isApproved ? 'request_approved' : 'request_rejected'));
            return;
        }

        const result = await Swal.fire({
            title: t(isApproved ? 'approve_confirmation' : 'reject_confirmation'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2563eb',
            cancelButtonColor: '#6b7280',
            confirmButtonText: t('yes_continue'),
            cancelButtonText: t('cancel'),
            customClass: {
                popup: 'dark:bg-neutral-800 dark:text-white',
            }
        });

        if (result.isConfirmed) {
            try {
                await executeWithRetry(async () => {
                    await respondToAdhesionAPI(syndicatId, branchId, userId, isApproved);
                }, `respond-adhesion-${userId}`, {
                    maxRetries: 2,
                    onSuccess: () => {
                        setRequests(prev => prev.filter(req => req.userId !== userId));
                        toast.success(t(isApproved ? 'request_approved' : 'request_rejected'));
                        if (isApproved) {
                            setTimeout(() => refreshData(false), 1000);
                        }
                    }
                });
            } catch (error) { }
        }
    };

    // Sous-composant : Liste des membres
    const MembersList = ({ data }) => {
        if (hasError('members')) return <ErrorState error={getError('members')} onRetry={() => refreshData(true)} />;

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Users}
                    title={t('no_members_found')}
                    description={searchTerm ? t('no_members_description_search') : t('no_members_description')}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {t('refresh')}
                        </motion.button>
                    )}
                    className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700/80 p-8"
                />
            );
        }

        return (
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl shadow-soft overflow-hidden border border-neutral-200 dark:border-neutral-700/80">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                        <thead className="bg-neutral-50 dark:bg-neutral-900/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('member')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('role')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('status')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                            {apiLoading && data.length === 0 ? (
                                Array.from({ length: 5 }).map((_, index) => <MemberRowSkeleton key={`skeleton-${index}`} />)
                            ) : (
                                data.map(member => (
                                    <motion.tr key={member.userId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {member.userAvatarUrl ? (
                                                    <Image
                                                        src={getAvatarUrl(member.userAvatarUrl)}
                                                        alt={member.userName}
                                                        width={44} height={44}
                                                        className="w-11 h-11 rounded-xl object-cover shadow-soft"
                                                    />
                                                ) : (
                                                    <SyndicatDefaultAvatar name={member.userName} size={44} className="rounded-xl" />
                                                )}
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-neutral-800 dark:text-white">{member.userName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">{member.role.replace('ROLE_', '')}</span></td>
                                        <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{member.status}</span></td>
                                        <td className="px-6 py-4"><button className="p-2 text-neutral-500 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 rounded-xl transition-colors"><UserX size={16} /></button></td>
                                    </motion.tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Sous-composant : Liste des demandes
    const MembershipRequestsList = ({ data }) => {
        if (hasError('requests')) return <ErrorState error={getError('requests')} onRetry={() => refreshData(true)} />;

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={UserPlus}
                    title={t('no_requests_found')}
                    description={searchTerm ? t('no_requests_description_search') : t('no_requests_description')}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {t('refresh')}
                        </motion.button>
                    )}
                    className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700/80 p-8"
                />
            );
        }

        return (
            <div className="space-y-5">
                {apiLoading && data.length === 0 ? (
                    Array.from({ length: 3 }).map((_, index) => <CardSkeleton key={`request-skeleton-${index}`} />)
                ) : (
                    <AnimatePresence>
                        {data.map(req => (
                            <motion.div key={req.userId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white dark:bg-neutral-800/50 rounded-2xl shadow-soft p-5 border border-neutral-200 dark:border-neutral-700/80">
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                                    <div className="flex items-center flex-grow">
                                        <div className="w-16 h-16 flex-shrink-0">
                                            {req.userAvatarUrl ? (
                                                <Image
                                                    src={getAvatarUrl(req.userAvatarUrl)}
                                                    alt={req.userName}
                                                    width={64} height={64}
                                                    className="rounded-xl object-cover"
                                                />
                                            ) : (
                                                <SyndicatDefaultAvatar name={req.userName} size={64} className="rounded-xl" />
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{req.userName}</h3>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{t('request_date', { date: new Date(req.requestTimestamp).toLocaleDateString('fr-FR') })}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 self-start sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                                        {(branches && branches.length > 0) || syndicatId === 'test-id' ? (
                                            <>
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleResponse(req.userId, branches[0]?.id || 'mock-branch', true)} className="p-2.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"><Check className="w-5 h-5" /></motion.button>
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleResponse(req.userId, branches[0]?.id || 'mock-branch', false)} className="p-2.5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"><X className="w-5 h-5" /></motion.button>
                                            </>
                                        ) : (
                                            <div className="text-sm text-neutral-500 dark:text-neutral-400">{t('actions_unavailable')}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl border-l-4 border-blue-500">
                                    <p className="text-neutral-600 dark:text-neutral-300 italic">"{req.motivation}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {/* En-tête de page */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-1">{t('title')}</h1>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">{t('subtitle')}</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => refreshData(true)}
                        disabled={apiLoading}
                        className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
                    >
                        <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                        {t('refresh')}
                    </motion.button>
                </div>
            </motion.div>

            <AnimatePresence>
                {hasError('refresh-data') && <InlineError error={getError('refresh-data')} className="mb-6" />}
            </AnimatePresence>

            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <StatCard icon={Users} value={(stats?.total || members.length + requests.length).toLocaleString()} label={t('total_members')} />
                <StatCard icon={UserCheck} value={(stats?.active || members.length).toLocaleString()} label={t('active_members')} />
                <StatCard icon={UserPlus} value={(stats?.pending || requests.length).toLocaleString()} label={t('pending_requests')} />
            </div>

            {/* Zone principale (Onglets + Recherche + Liste) */}
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700/80">
                <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex space-x-1 bg-neutral-100 dark:bg-neutral-900/50 rounded-xl p-1">
                            <TabButton active={activeTab === 'members'} icon={Users} label={`${t('tab_members')} (${filteredMembers.length})`} onClick={() => setActiveTab('members')} />
                            <TabButton active={activeTab === 'requests'} icon={UserPlus} label={`${t('tab_requests')} (${filteredRequests.length})`} onClick={() => setActiveTab('requests')} />
                        </div>
                        <div className="relative flex-1 min-w-[200px] max-w-xs">
                            <input
                                type="text"
                                placeholder={t("search_placeholder")}
                                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-700 rounded-xl border border-neutral-300 dark:border-neutral-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div className="p-2 sm:p-4">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                            {activeTab === 'members' ? <MembersList data={filteredMembers} /> : <MembershipRequestsList data={filteredRequests} />}
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