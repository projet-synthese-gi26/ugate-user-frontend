// src/components/syndicate-space/section-membres/MembersClient.jsx
"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

// Import des icônes
import { 
    Users, UserPlus, Search, Filter, Check, X, AlertTriangle, 
    Eye, Edit, UserX, Mail, Phone, Calendar, Shield
} from 'lucide-react';

// Import des sous-composants que nous allons créer
import StatCard from './StatCard';
import TabButton from './TabButton';

/**
 * Le composant client principal pour la page de gestion des membres.
 * Gère les onglets, la recherche, les filtres et les actions sur les membres.
 * @param {Array} initialMembers - La liste initiale des membres, passée par le serveur.
 * @param {Array} initialRequests - La liste initiale des demandes d'adhésion.
 */
export default function MembersClient({ initialMembers, initialRequests }) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    // Action de confirmation
    const [actionToConfirm, setActionToConfirm] = useState(null); // { action: 'suspend', member: {...} }

    // Logique de filtrage et de recherche
    const filteredMembers = useMemo(() => {
        return initialMembers.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === 'all' || member.status === filterStatus)
        );
    }, [initialMembers, searchTerm, filterStatus]);

    // Ouvre la modale de confirmation
    const handleAction = (action, member) => {
        setActionToConfirm({ action, member });
    };

    // Exécute l'action après confirmation
    const confirmAction = () => {
        if (!actionToConfirm) return;
        
        console.log(`Action confirmée: ${actionToConfirm.action} pour ${actionToConfirm.member.name}`);
        // Ici, vous appelleriez une fonction API pour effectuer l'action
        // Ex: suspendMember(actionToConfirm.member.id)
        
        Swal.fire({
            icon: 'success',
            title: 'Action effectuée',
            text: `Le membre ${actionToConfirm.member.name} a été ${actionToConfirm.action === 'suspend' ? 'suspendu' : 'retiré'}.`,
            timer: 2000,
            showConfirmButton: false
        });
        
        setActionToConfirm(null); // Ferme la modale
    };

    // Composant pour la liste des membres
    const MembersList = () => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Membre</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Statut</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <AnimatePresence>
                            {filteredMembers.map(member => (
                                <motion.tr key={member.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center"><div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0 flex items-center justify-center font-bold text-blue-600 dark:text-blue-300">{member.name.charAt(0)}</div><div className="ml-4"><div className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</div><div className="text-sm text-gray-500 dark:text-gray-400">{member.role}</div></div></div></td>
                                    <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900 dark:text-gray-300">{member.email}</div><div className="text-sm text-gray-500 dark:text-gray-400">{member.phone}</div></td>
                                    <td className="px-6 py-4 whitespace-nowrap"><span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'active' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300'}`}>{member.status === 'active' ? 'Actif' : 'Suspendu'}</span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"><div className="flex space-x-2">{/* ... boutons d'action ... */}</div></td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );

    // Composant pour les demandes d'adhésion
    const MembershipRequestsList = () => (
        <div className="space-y-6">
            <AnimatePresence>
                {initialRequests.map(request => (
                    <motion.div key={request.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                             <div className="flex flex-col sm:flex-row items-start justify-between">
                                <div className="flex items-center mb-4 sm:mb-0"><div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">{request.name.charAt(0)}</div><div className="ml-4"><h3 className="text-xl font-semibold text-gray-800 dark:text-white">{request.name}</h3><p className="text-sm text-gray-500 dark:text-gray-400">Demande le {request.requestDate}</p></div></div>
                                <div className="flex space-x-3 self-start sm:self-center"><motion.button className="px-4 py-2 bg-green-500 text-white rounded-xl shadow-lg"><Check className="w-5 h-5" /></motion.button><motion.button className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-lg"><X className="w-5 h-5" /></motion.button></div>
                             </div>
                             <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"><p className="text-gray-600 dark:text-gray-300 italic">"{request.motivation}"</p></div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div><h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('members_page.title')}</h1><p className="text-gray-600 dark:text-gray-400 mt-1">{t('members_page.subtitle')}</p></div>
                    <motion.button whileHover={{ scale: 1.05 }} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow-lg flex items-center"><UserPlus className="w-5 h-5 mr-2" />{t('members_page.add_member')}</motion.button>
                </div>
                <div className="flex space-x-2"><TabButton active={activeTab === 'members'} icon={Users} label={t('members_page.tab_members')} onClick={() => setActiveTab('members')} /><TabButton active={activeTab === 'requests'} icon={UserPlus} label={t('members_page.tab_requests')} onClick={() => setActiveTab('requests')} /></div>
            </motion.div>

            {/* Barre de recherche et filtres pour l'onglet membres */}
            <AnimatePresence>{activeTab === 'members' && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col sm:flex-row gap-4"><div className="relative flex-1"><input type="text" placeholder={t("members_page.search_placeholder")} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /></div><div className="relative w-full sm:w-64"><select className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 appearance-none" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}><option value="all">Tous les statuts</option><option value="active">Actif</option><option value="suspended">Suspendu</option></select><Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /></div></motion.div>)}</AnimatePresence>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{/* ...StatCards... */}</div>

            {/* Contenu de l'onglet actif */}
            <AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{activeTab === 'members' ? <MembersList /> : <MembershipRequestsList />}</motion.div></AnimatePresence>

            {/* Modale de confirmation */}
            <AnimatePresence>{actionToConfirm && (<motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"><motion.div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full m-4 shadow-2xl"><div className="flex items-center mb-6"><div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-red-600" /></div><div className="ml-4"><h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('members_page.confirm_action_title')}</h2><p className="text-gray-600 dark:text-gray-400">{t('members_page.confirm_action_subtitle')}</p></div></div><p className="text-gray-700 dark:text-gray-300 mb-8">{t('members_page.confirm_action_text', { action: actionToConfirm.action === 'suspend' ? 'suspendre' : 'retirer', memberName: actionToConfirm.member.name })}</p><div className="flex justify-end space-x-4"><button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl" onClick={() => setActionToConfirm(null)}>{t('common.back')}</button><button className="px-6 py-2 bg-red-600 text-white rounded-xl" onClick={confirmAction}>{t('common.confirm')}</button></div></motion.div></motion.div>)}</AnimatePresence>
        </div>
    );
}