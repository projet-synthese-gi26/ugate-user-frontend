// src/components/syndicate-space/section-membres/MembersClient.jsx
"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import {
    Users, UserPlus, Search, Check, X, UserX, RefreshCw,
    UserCheck, Plus, Eye, Mail, Phone, Ban, Undo2, Trash2
} from 'lucide-react';
import Image from 'next/image';
import MemberDetailsModal from './MemberDetailsModal';


// Composants internes
import StatCard from './StatCard';
import TabButton from './TabButton';
import AddMemberModal from './AddMemberModal';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { MemberRowSkeleton, CardSkeleton } from '../SyndicateSpaceLoader';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';

// API et Hooks
import { respondToAdhesionAPI, getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';

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
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // <-- NOUVEL ÉTAT POUR LA MODALE
    const [selectedMemberDetails, setSelectedMemberDetails] = useState(null); // <-- AJOUTER CECI

    // Filtrage dynamique
    const filteredMembers = useMemo(() =>
        (members || []).filter(member =>
            member?.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member?.email?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [members, searchTerm]);

    const filteredRequests = useMemo(() =>
        (requests || []).filter(req =>
            req?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [requests, searchTerm]);

    const refreshData = async (force = false) => {
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
                clearError('members');
                clearError('requests');
            }, 'refresh-data', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) toast.success(t('data_refreshed'));
                }
            });
        } catch (error) { }
    };

    useEffect(() => {
        if (syndicatId !== 'test-id' && (!initialMembers || initialMembers.length === 0) && branches && branches.length > 0) {
            refreshData(false);
        }
    }, [branches, syndicatId]);


    // --- ACTIONS MEMBRES ---

    const handleSuspend = async (member) => {
        const isSuspended = member.status === 'SUSPENDED';
        const actionText = isSuspended ? t('unsuspend_confirmation') : t('suspend_confirmation');

        const result = await Swal.fire({
            title: actionText,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: isSuspended ? '#10b981' : '#f59e0b',
            cancelButtonColor: '#6b7280',
            confirmButtonText: t('yes_continue'),
            cancelButtonText: t('cancel')
        });

        if (result.isConfirmed) {
            const newStatus = isSuspended ? 'ACTIVE' : 'SUSPENDED';
            setMembers(prev => prev.map(m => m.userId === member.userId ? { ...m, status: newStatus } : m));
            toast.success(isSuspended ? t('member_activated') : t('member_suspended'));
        }
    };

    const handleRemove = async (member) => {
        const result = await Swal.fire({
            title: t('remove_confirmation'),
            text: `Le membre ${member.userName} perdra l'accès au syndicat.`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: t('yes_continue'),
            cancelButtonText: t('cancel')
        });

        if (result.isConfirmed) {
            setMembers(prev => prev.filter(m => m.userId !== member.userId));
            toast.success(t('member_removed'));
        }
    };

    const handleViewDetails = (member) => {
        // Au lieu de Swal, on ouvre notre belle modale
        setSelectedMemberDetails(member);
    };

    // --- LOGIQUE D'AJOUT DE MEMBRE ---

    const handleAddButtonClick = () => {
        setIsAddModalOpen(true);
    };

    const handleConfirmAddMember = (newMemberData) => {
        // Simulation d'ajout pour la démo
        const newMember = {
            userId: Date.now().toString(), // ID temporaire
            userName: newMemberData.userName,
            email: newMemberData.email,
            phone: newMemberData.phone,
            role: newMemberData.role,
            status: "ACTIVE",
            userAvatarUrl: null
        };

        // Ajout en haut de la liste
        setMembers(prev => [newMember, ...prev]);
        setIsAddModalOpen(false);
        toast.success("Membre ajouté avec succès !");
    };

    const handleResponse = async (userId, branchId, isApproved) => {
        if (syndicatId === 'test-id') {
            setRequests(prev => prev.filter(req => req.userId !== userId));
            if (isApproved) {
                const req = requests.find(r => r.userId === userId);
                if (req) setMembers(prev => [...prev, { ...req, role: 'ROLE_MEMBER', status: 'ACTIVE' }]);
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
            cancelButtonText: t('cancel')
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
                        if (isApproved) setTimeout(() => refreshData(false), 1000);
                    }
                });
            } catch (error) { }
        }
    };

    // --- RENDERERS ---

    const getStatusBadge = (status) => {
        const styles = {
            ACTIVE: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
            PENDING: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
            SUSPENDED: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
            INACTIVE: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        };
        return (
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[status] || styles.INACTIVE}`}>
                {status}
            </span>
        );
    };

    const MembersList = ({ data }) => {
        if (hasError('members')) return <ErrorState error={getError('members')} onRetry={() => refreshData(true)} />;

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Users}
                    title={t('no_members_found')}
                    description={searchTerm ? t('no_members_description_search') : t('no_members_description')}
                    action={!searchTerm && (
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => refreshData(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" /> {t('refresh')}
                        </motion.button>
                    )}
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
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('contact')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('role')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase">{t('status')}</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-neutral-500 uppercase">{t('actions')}</th>
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
                                                    <Image src={getAvatarUrl(member.userAvatarUrl)} alt={member.userName} width={44} height={44} className="w-11 h-11 rounded-xl object-cover shadow-soft" />
                                                ) : <SyndicatDefaultAvatar name={member.userName} size={44} className="rounded-xl" />}
                                                <div className="ml-4">
                                                    <div className="text-sm font-bold text-neutral-800 dark:text-white">{member.userName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col space-y-1">
                                                {member.email && <div className="flex items-center text-xs text-neutral-600 dark:text-neutral-300"><Mail className="w-3 h-3 mr-1.5 text-blue-500" /> {member.email}</div>}
                                                {member.phone && <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400"><Phone className="w-3 h-3 mr-1.5 text-green-500" /> {member.phone}</div>}
                                                {!member.email && !member.phone && <span className="text-xs text-neutral-400">-</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">{member.role.replace('ROLE_', '')}</span></td>
                                        <td className="px-6 py-4">{getStatusBadge(member.status)}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => handleViewDetails(member)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 rounded-lg transition-colors" title={t('details')}><Eye size={18} /></button>
                                                <button onClick={() => handleSuspend(member)} className={`p-2 rounded-lg transition-colors ${member.status === 'SUSPENDED' ? 'text-green-600 bg-green-50 hover:bg-green-100' : 'text-orange-600 bg-orange-50 hover:bg-orange-100'}`} title={member.status === 'SUSPENDED' ? t('unsuspend') : t('suspend')}>{member.status === 'SUSPENDED' ? <Undo2 size={18} /> : <Ban size={18} />}</button>
                                                <button onClick={() => handleRemove(member)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 rounded-lg transition-colors" title={t('remove')}><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const MembershipRequestsList = ({ data }) => {
        // ... (Pas de changement ici, gardez la logique existante)
        if (hasError('requests')) return <ErrorState error={getError('requests')} onRetry={() => refreshData(true)} />;
        if (!data || data.length === 0) return <EmptyState icon={UserPlus} title={t('no_requests_found')} description={t('no_requests_description')} />;

        return (
            <div className="space-y-5">
                {data.map(req => (
                    <motion.div key={req.userId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white dark:bg-neutral-800/50 rounded-2xl shadow-soft p-5 border border-neutral-200 dark:border-neutral-700/80">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="flex items-center flex-grow">
                                <div className="w-16 h-16 flex-shrink-0">
                                    {req.userAvatarUrl ? <Image src={getAvatarUrl(req.userAvatarUrl)} alt={req.userName} width={64} height={64} className="rounded-xl object-cover" /> : <SyndicatDefaultAvatar name={req.userName} size={64} className="rounded-xl" />}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{req.userName}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{t('request_date', { date: new Date(req.requestTimestamp).toLocaleDateString('fr-FR') })}</p>
                                </div>
                            </div>
                            <div className="flex space-x-3 self-start sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleResponse(req.userId, branches[0]?.id || 'mock-branch', true)} className="p-2.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"><Check className="w-5 h-5" /></motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleResponse(req.userId, branches[0]?.id || 'mock-branch', false)} className="p-2.5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"><X className="w-5 h-5" /></motion.button>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl border-l-4 border-blue-500"><p className="text-neutral-600 dark:text-neutral-300 italic">"{req.motivation}"</p></div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-1">{t('title')}</h1>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">{t('subtitle')}</p>
                    </div>

                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAddButtonClick} // <-- MODIFICATION ICI
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            {t('add_member')}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            disabled={apiLoading}
                            className="px-4 py-2.5 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all flex items-center gap-2"
                        >
                            <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                            {t('refresh')}
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {hasError('refresh-data') && <InlineError error={getError('refresh-data')} className="mb-6" />}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <StatCard icon={Users} value={(stats?.total || members.length + requests.length).toLocaleString()} label={t('total_members')} />
                <StatCard icon={UserCheck} value={(stats?.active || members.filter(m => m.status === 'ACTIVE').length).toLocaleString()} label={t('active_members')} />
                <StatCard icon={UserPlus} value={(stats?.pending || requests.length).toLocaleString()} label={t('pending_requests')} />
            </div>

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

            {/* MODAL D'AJOUT */}
            <AddMemberModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleConfirmAddMember}
            />
            <AddMemberModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleConfirmAddMember}
            />

            {/* MODAL DE DÉTAILS (NOUVEAU) */}
            {selectedMemberDetails && (
                <MemberDetailsModal
                    member={selectedMemberDetails}
                    onClose={() => setSelectedMemberDetails(null)}
                />
            )}
        </div>
    );
}

export default function MembersClient(props) {
    return (
        <ErrorBoundary title="Erreur dans la section Membres">
            <MembersClientInner {...props} />
        </ErrorBoundary>
    );
}