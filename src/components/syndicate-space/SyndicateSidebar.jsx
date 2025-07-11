// src/components/syndicate-space/SyndicateSidebar.jsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { 
    Users, Calendar, MessageCircle, Vote, CreditCard, Handshake, 
    Info, Home, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx'; // Réutilisation pour le logo
import { usePathname, useParams } from 'next/navigation';

/**
 * La barre de navigation latérale, améliorée pour un design professionnel et une UX fluide.
 * @param {boolean} isCollapsed - Indique si la sidebar est repliée.
 * @param {function} onToggle - Fonction pour changer l'état de la sidebar.
 */
export default function SyndicateSidebar({ isCollapsed, onToggle }) {
    const { t } = useTranslation();
    const pathname = usePathname(); // Hook pour obtenir le chemin actuel
    const params = useParams();   // Hook pour obtenir les paramètres de la route
    const { syndicatId } = params;

    const navItems = [
        { id: 'accueil', icon: Home, label: t('syndicate_space.sidebar.home'), route: '' },
        { id: 'membres', icon: Users, label: t('syndicate_space.sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('syndicate_space.sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('syndicate_space.sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('syndicate_space.sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('syndicate_space.sidebar.votes'), route: 'votes' },
        { id: 'contributions', icon: CreditCard, label: t('syndicate_space.sidebar.contributions'), route: 'contributions' },
        { id: 'partnerships', icon: Handshake, label: t('syndicate_space.sidebar.partnerships'), route: 'partenariats' },
        { id: 'about', icon: Info, label: t('syndicate_space.sidebar.about'), route: 'a-propos' },
    ];

    const buildLink = (route) => `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 96 : 280 }} // Largeurs ajustées pour un meilleur look
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:flex bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm flex-col z-10 border-r border-gray-200/80 dark:border-white/10"
        >
            {/* Header de la Sidebar */}
            <div className={`p-4 flex items-center gap-4 border-b border-gray-200/80 dark:border-white/10 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center gap-2 overflow-hidden">
                        <SyndicatDefaultAvatar name="Syndicat" size={40} />
                        <span className="font-bold text-lg text-gray-800 dark:text-white truncate">Espace Membre</span>
                    </div>
                )}
                <motion.button
                    onClick={onToggle}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                    aria-label={isCollapsed ? "Déplier" : "Replier"}
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </motion.button>
            </div>

            {/* Liste des liens de navigation */}
            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || (item.route !== '' && pathname.startsWith(fullPath));
                    
                    return (
                        <Link href={fullPath} key={item.id} passHref>
                            <motion.div
                                className={`relative group flex items-center w-full px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                                    isCollapsed ? 'justify-center' : ''
                                } ${
                                    isActive 
                                        ? 'text-blue-600 dark:text-blue-300' 
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                }`}
                                title={isCollapsed ? item.label : ''}
                            >
                                {/* Indicateur d'activité animé */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-sidebar-indicator"
                                        className="absolute inset-0 bg-blue-50 dark:bg-blue-900/50 rounded-xl"
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    />
                                )}
                                
                                <div className="relative z-10 flex items-center">
                                    <item.icon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && (
                                        <span className="font-semibold truncate ml-3">{item.label}</span>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}