"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Users, UserPlus, Search, Filter, Check, X, AlertTriangle, UserX, Shield, UserCheck } from 'lucide-react';
import StatCard from './StatCard';
import TabButton from './TabButton';
import { respondToAdhesionAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import Image from 'next/image';

export default function MembersClient({ initialMembers = [], initialRequests = [], branches = [], stats = {}, syndicatId }) {
    const t = useTranslations('members_page');
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState(initialMembers || []);
    const [requests, setRequests] = useState(initialRequests || []);
    
    const filteredMembers = useMemo(() => 
        (members || []).filter(member => 
            member?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [members, searchTerm]);
    
    const filteredRequests = useMemo(() => 
        (requests || []).filter(req => 
            req?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [requests, searchTerm]);

    const handleResponse = async (userId, branchId, isApproved) => {
        const action = isApproved ? "d'approuver" : "de rejeter";
        const result = await Swal.fire({
            title: `Êtes-vous sûr de vouloir ${action} cette demande ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, continuer !',
            cancelButtonText: 'Annuler'
        });

        if (result.isConfirmed) {
            const toastId = toast.loading("Traitement en cours...");
            try {
                await respondToAdhesionAPI(syndicatId, branchId, userId, isApproved);
                setRequests(prev => prev.filter(req => req.userId !== userId));
                toast.success("La demande a été traitée.", { id: toastId });
                // Idéalement, on rechargerait la liste des membres pour voir le nouveau membre
            } catch (error) {
                toast.error("Une erreur est survenue.", { id: toastId });
            }
        }
    };
    
    const MembersList = ({ data }) => {
        if (!data || data.length === 0) {
            return (
                <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-12 text-center border border-gray-200 dark:border-gray-700">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Aucun membre trouvé</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        {searchTerm ? "Aucun membre ne correspond à votre recherche." : "Ce syndicat n'a pas encore de membres actifs."}
                    </p>
                </div>
            );
        }

        return (
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-900/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Membre</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Rôle</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Statut</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <AnimatePresence>
                                {data.map(member => (
                                    <motion.tr key={member.userId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center">
                                            {member.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${member.userAvatarUrl}`} alt={member.userName} width={44} height={44} className="w-11 h-11 rounded-full object-cover"/> : <SyndicatDefaultAvatar name={member.userName} size={44}/>}
                                            <div className="ml-4"><div className="text-sm font-medium text-gray-900 dark:text-white">{member.userName}</div></div>
                                        </div></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-medium rounded-full ${member.role === 'ROLE_PRESIDENT' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}>{member.role.replace('ROLE_', '')}</span></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${member.status === 'ACTIVE' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-yellow-100 text-yellow-800'}`}>{member.status}</span></td>
                                        <td className="px-6 py-4"><button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"><UserX size={16}/></button></td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const MembershipRequestsList = ({ data }) => {
        if (!data || data.length === 0) {
            return (
                <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg p-12 text-center border border-gray-200 dark:border-gray-700">
                    <UserPlus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Aucune demande d'adhésion</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        {searchTerm ? "Aucune demande ne correspond à votre recherche." : "Il n'y a pas de demandes d'adhésion en attente."}
                    </p>
                </div>
            );
        }

        return (
            <div className="space-y-6">
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
            </div>
        );
    };

    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{t('members_page.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{t('members_page.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={Users} value={(stats?.total || 0).toLocaleString()} label="Membres au total" color="border-blue-500"/>
                <StatCard icon={UserCheck} value={(stats?.active || 0).toLocaleString()} label="Membres actifs" color="border-green-500"/>
                <StatCard icon={UserPlus} value={(stats?.pending || 0).toLocaleString()} label="Demandes en attente" color="border-yellow-500"/>
            </div>

            <div>
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div className="flex space-x-2 border border-gray-200 dark:border-gray-700 rounded-xl p-1 bg-gray-50 dark:bg-gray-800">
                        <TabButton active={activeTab === 'members'} icon={Users} label={t('members_page.tab_members')} onClick={() => setActiveTab('members')}/>
                        <TabButton active={activeTab === 'requests'} icon={UserPlus} label={`${t('members_page.tab_requests')} (${requests?.length || 0})`} onClick={() => setActiveTab('requests')}/>
                    </div>
                    <div className="relative flex-1 min-w-[250px]"><input type="text" placeholder={t("members_page.search_placeholder")} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /></div>
                </div>
                <AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{activeTab === 'members' ? <MembersList data={filteredMembers} /> : <MembershipRequestsList data={filteredRequests} />}</motion.div></AnimatePresence>
            </div>
        </div>
    );
}