// src/components/syndicate-space/SyndicateSidebar.jsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Import des icônes de lucide-react
import { 
    Users, Calendar, MessageCircle, Vote, CreditCard, 
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
            animate={{ width: isCollapsed ? 80 : 256 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Cachée sur mobile, affichée en flex sur les écrans plus grands
            className="hidden lg:flex bg-white dark:bg-gray-800 shadow-xl flex-col z-10 border-r dark:border-gray-700"
        >
            {/* Bouton pour replier/déplier la sidebar */}
            <div className={`p-4 flex ${isCollapsed ? 'justify-center' : 'justify-end'} border-b dark:border-gray-700`}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onToggle}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                    aria-label={isCollapsed ? "Déplier la barre latérale" : "Replier la barre latérale"}
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </motion.button>
            </div>

            {/* Liste des liens de navigation */}
            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => {
                    const active = isActive(item.route);
                    return (
                        <Link href={buildLink(item.route)} key={item.id} passHref>
                            <motion.div
                                className={`group flex items-center w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                    isCollapsed ? 'justify-center' : ''
                                } ${
                                    active 
                                        ? 'bg-blue-500 text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.98 }}
                                title={isCollapsed ? item.label : ''} // Affiche le nom au survol en mode replié
                            >
                                <item.icon 
                                    className={`h-6 w-6 flex-shrink-0 ${isCollapsed ? '' : 'mr-3'}`} 
                                />
                                {!isCollapsed && (
                                    <span className="font-semibold truncate">{item.label}</span>
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}