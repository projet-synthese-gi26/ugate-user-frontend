// src/components/syndicate-profile/ProfileSectionCard.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Un conteneur de carte réutilisable pour les sections de la page de profil.
 * Fournit un style cohérent avec un titre, une icône et une animation.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} title - Le titre de la section.
 * @param {React.ReactNode} children - Le contenu à afficher à l'intérieur de la carte.
 * @param {object} variants - Les variantes d'animation pour framer-motion.
 */
export default function ProfileSectionCard({ icon: Icon, title, children, variants }) {
    return (
        <motion.section
            className="bg-white bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 border-gray-700"
            variants={variants}
        >
            <h2 className="text-2xl font-bold text-gray-900 text-white mb-6 flex items-center">
                {Icon && <Icon className="text-blue-500 mr-3" size={28} />}
                {title}
            </h2>
            {children}
        </motion.section>
    );
}