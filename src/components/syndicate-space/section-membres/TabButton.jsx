// src/components/syndicate-space/section-membres/TabButton.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Affiche un bouton d'onglet cliquable pour la navigation par onglets.
 * @param {boolean} active - Indique si l'onglet est actuellement sélectionné.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} label - Le texte à afficher sur le bouton.
 * @param {function} onClick - La fonction à exécuter lors du clic.
 */
export default function TabButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                active 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <Icon className={`w-5 h-5 mr-2 ${active ? 'text-white' : 'text-blue-500'}`} />
            {label}

            {/* Le petit cercle animé qui se déplace sous l'onglet actif */}
            {active && (
                <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"
                    layoutId="activeTabIndicator" // Cet ID est partagé entre tous les TabButton
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
            )}
        </motion.button>
    );
}