// src/components/shared/SyndicatDefaultAvatar.jsx
"use client"; // Ce composant n'a pas besoin d'état, mais il est préférable de le marquer comme client car il sera souvent utilisé dans des contextes interactifs.

import { motion } from 'framer-motion';

/**
 * Calcule une couleur de fond basée sur le hash du nom du syndicat pour un affichage cohérent.
 * @param {string} name - Le nom du syndicat.
 * @returns {string} Une classe de couleur Tailwind CSS.
 */
const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
        'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-orange-500', 
        'bg-red-500', 'bg-teal-500', 'bg-indigo-500', 'bg-pink-500'
    ];
    return colors[Math.abs(hash % colors.length)];
};

/**
 * Extrait les initiales d'un nom de syndicat (jusqu'à 2 lettres).
 * @param {string} name - Le nom du syndicat.
 * @returns {string} Les initiales en majuscules.
 */
const getInitials = (name) => {
    if (!name) return '?';
    const words = name.trim().split(/\s+/);
    if (words.length > 1) {
        return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};

/**
 * Affiche un avatar par défaut pour un syndicat, avec ses initiales et une couleur de fond déterministe.
 * @param {string} name - Le nom du syndicat.
 * @param {number} [size=40] - La taille de l'avatar en pixels.
 * @param {string} [className=""] - Classes CSS additionnelles.
 */
export function SyndicatDefaultAvatar({ name, size = 40, className = "" }) {
    const initials = getInitials(name);
    const bgColorClass = stringToColor(name || "default");

    const fontSize = size / 2.5; // Calcule une taille de police proportionnelle

    return (
        <motion.div
            className={`flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold ${bgColorClass} ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                fontSize: `${fontSize}px`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {initials}
        </motion.div>
    );
}