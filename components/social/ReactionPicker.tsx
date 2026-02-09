"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Vos types de réactions
export const REACTION_TYPES = [
    { label: 'LIKE', emoji: '👍', color: 'text-blue-600', name: 'J\'aime' },
    { label: 'LOVE', emoji: '❤️', color: 'text-red-600', name: 'J\'adore' },
    { label: 'HAHA', emoji: '😂', color: 'text-yellow-500', name: 'Haha' },
    { label: 'WOW', emoji: '😮', color: 'text-amber-500', name: 'Wouah' },
    { label: 'SAD', emoji: '😢', color: 'text-blue-400', name: 'Triste' },
    { label: 'ANGRY', emoji: '😡', color: 'text-orange-600', name: 'Grrr' },
];

interface ReactionPickerProps {
    onSelect: (type: string) => void;
}

export default function ReactionPicker({ onSelect }: ReactionPickerProps) {
    // On suit quel émoji est survolé pour afficher son label
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10, transition: { duration: 0.2 } }}
            className="absolute bottom-full left-0 mb-3 z-50"
            // Important : on empêche le clic de se propager au post en dessous
            onClick={(e) => e.stopPropagation()}
        >
            {/* Conteneur Blanc (La "Dock") */}
            <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-1.5 flex gap-2 items-center">
                {REACTION_TYPES.map((reaction, i) => (
                    <div key={reaction.label} className="relative group">

                        {/* 1. Le Label (Tooltip) qui apparaît au survol */}
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -45, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap backdrop-blur-sm pointer-events-none"
                                >
                                    {reaction.name}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 2. Le Bouton Emoji Animé */}
                        <motion.button
                            // Animation d'entrée en cascade (stagger)
                            initial={{ opacity: 0, y: 20, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { delay: i * 0.05, type: "spring", stiffness: 400, damping: 15 }
                            }}

                            // Animation au survol (Gros zoom + oscillation)
                            whileHover={{
                                scale: 1.5,
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.9 }}

                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            onClick={() => onSelect(reaction.label)}

                            className="w-10 h-10 flex items-center justify-center text-3xl transition-colors relative"
                            style={{
                                // Permet aux emojis de ne pas être flous lors du scale
                                willChange: "transform",
                                filter: hoveredIndex === i ? "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" : "none"
                            }}
                        >
                            {/* L'Emoji */}
                            {reaction.emoji}
                        </motion.button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}