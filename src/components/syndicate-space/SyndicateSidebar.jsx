// src/components/syndicate-space/SyndicateSidebar.jsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Import des icônes de lucide-react
import { 
    Users, Calendar, MessageCircle, Vote, CreditCard, MessageSquare,
    Handshake, Info, Home, ChevronLeft, ChevronRight, Menu
} from 'lucide-react';

/**
 * La barre de navigation latérale pour un espace syndicat spécifique.
 * @param {boolean} isCollapsed - Indique si la sidebar est repliée.
 * @param {function} onToggle - Fonction pour changer l'état de la sidebar.
 * @param {string} activeRoute - Le chemin de l'URL actuelle pour la mise en surbrillance.
 * @param {string} syndicatId - L'ID du syndicat actuel pour construire les liens.
 */
export default function SyndicateSidebar({ isCollapsed, onToggle, activeRoute, syndicatId }) {
    const { t } = useTranslation();

    // Configuration des éléments de navigation
    const navItems = [
        { id: 'accueil', icon: Home, label: t('syndicate_space.sidebar.home'), route: '' }, // Route de base
        { id: 'membres', icon: Users, label: t('syndicate_space.sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('syndicate_space.sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('syndicate_space.sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('syndicate_space.sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('syndicate_space.sidebar.votes'), route: 'votes' },
        { id: 'contributions', icon: CreditCard, label: t('syndicate_space.sidebar.contributions'), route: 'contributions' },
        { id: 'partnerships', icon: Handshake, label: t('syndicate_space.sidebar.partnerships'), route: 'partenariats' },
        { id: 'about', icon: Info, label: t('syndicate_space.sidebar.about'), route: 'a-propos' },
    ];
    
    // Fonction pour construire l'URL complète pour chaque lien
    const buildLink = (route) => `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

    // Fonction pour déterminer si un lien est actif
    const isActive = (route) => {
        const fullPath = buildLink(route);
        // La page d'accueil (route vide) est active seulement si le chemin est exactement celui de la base
        if (route === '') {
            return activeRoute === fullPath;
        }
        return activeRoute.startsWith(fullPath);
    };

    return (
        <motion.nav
            // Anime la largeur de la sidebar
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            // Cachée sur mobile, affichée en flex sur les écrans plus grands
            className="hidden lg:flex bg-gradient-to-b from-white via-gray-50/80 to-white dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-900 backdrop-blur-xl shadow-2xl flex-col z-10 border-r border-gray-200/60 dark:border-gray-700/50 relative overflow-hidden"
        >
            {/* Effet de brillance subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 pointer-events-none" />
            
            {/* Bouton pour replier/déplier la sidebar */}
            <div className={`relative p-5 flex ${isCollapsed ? 'justify-center' : 'justify-end'} border-b border-gray-200/50 dark:border-gray-700/50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm`}>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onToggle}
                    className="group relative p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 bg-white/60 dark:bg-gray-800/60 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/40 dark:border-gray-700/40"
                    aria-label={isCollapsed ? "Déplier la barre latérale" : "Replier la barre latérale"}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-xl transition-all duration-300" />
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </motion.button>
            </div>

            {/* Liste des liens de navigation */}
            <div className="relative flex-grow overflow-y-auto p-5 space-y-1.5 scrollbar-hide">
                {navItems.map((item, index) => {
                    const active = isActive(item.route);
                    return (
                        <Link href={buildLink(item.route)} key={item.id} passHref>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.05,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className={`group relative flex items-center w-full px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                                    isCollapsed ? 'justify-center' : ''
                                } ${
                                    active 
                                        ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transform scale-[1.02]' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 bg-white/40 dark:bg-gray-800/40 hover:bg-gradient-to-r hover:from-blue-50 hover:via-indigo-50 hover:to-blue-50 dark:hover:from-blue-900/20 dark:hover:via-indigo-900/20 dark:hover:to-blue-900/20 hover:shadow-md border border-gray-200/30 dark:border-gray-700/30 hover:border-blue-200/50 dark:hover:border-blue-700/50'
                                }`}
                                whileHover={{ 
                                    scale: active ? 1.02 : 1.05,
                                    y: -1 
                                }} 
                                whileTap={{ scale: 0.98 }}
                                title={isCollapsed ? item.label : ''} // Affiche le nom au survol en mode replié
                            >
                                {/* Effet de brillance pour l'élément actif */}
                                {active && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
                                )}
                                
                                {/* Effet de survol */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-300 ${active ? 'opacity-0' : 'opacity-100'}`} />
                                
                                <div className="relative z-10 flex items-center w-full">
                                    <div className={`relative ${isCollapsed ? '' : 'mr-4'}`}>
                                        <item.icon 
                                            className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                                                active ? 'drop-shadow-sm' : 'group-hover:scale-110'
                                            }`} 
                                        />
                                        {/* Point indicateur pour l'élément actif en mode replié */}
                                        {active && isCollapsed && (
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full shadow-md" />
                                        )}
                                    </div>
                                    
                                    {!isCollapsed && (
                                        <motion.span 
                                            className="font-semibold text-sm tracking-wide truncate relative z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                    
                                    {/* Indicateur visuel pour l'élément actif */}
                                    {active && !isCollapsed && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="ml-auto w-2 h-2 bg-white rounded-full shadow-md"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
            
            {/* Ligne décorative en bas */}
            <div className="relative h-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/40 to-blue-500/20 dark:from-blue-400/20 dark:via-indigo-400/40 dark:to-blue-400/20" />
        </motion.nav>
    );
}