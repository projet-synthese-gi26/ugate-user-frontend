// src/components/syndicate-space/section-membres/StatCard.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Affiche une carte de statistique avec une icône, une valeur et un label.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} value - La valeur à afficher (ex: "1,250", "95%").
 * @param {string} label - Le nom de la statistique (ex: "Membres actifs").
 * @param {string} color - La classe de couleur Tailwind pour la bordure et l'icône (ex: "border-blue-500").
 */
export default function StatCard({ icon: Icon, value, label, color }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 ${color}`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center">
                <div className={`p-3 rounded-xl ${color.replace('border-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
                    <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
                </div>
                <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </div>
            </div>
        </motion.div>
    );
}