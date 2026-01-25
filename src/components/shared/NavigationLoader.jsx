// src/components/shared/NavigationLoader.jsx
"use client";

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // On utilise une icône de chargement de lucide-react

export default function NavigationLoader() {
    return (
        // Conteneur principal qui prend tout l'écran et applique l'effet de flou
        <div className="fixed inset-0 bg-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <motion.div
                // Animation d'apparition
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center space-x-4 p-4 bg-white bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 border-gray-700"
            >
                {/* Le spinner qui tourne */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <Loader2 className="w-8 h-8 text-blue-500" />
                </motion.div>

                {/* Le texte "Loading..." avec une animation de points */}
                <div className="text-xl font-semibold text-gray-700 text-gray-300">
                    Loading
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                </div>
            </motion.div>

        </div>
    );
}