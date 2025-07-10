// src/components/explorer/ExploreCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronRight, UserPlus, Users, Star, Building2, MapPin, ShieldCheck } from "lucide-react";

/**
 * Carte d'affichage pour un seul syndicat dans la page d'exploration.
 * C'est un Client Component pour gérer les animations et les interactions.
 * @param {object} syndicat - L'objet contenant les données du syndicat.
 * @param {object} itemVariants - Les variantes d'animation pour framer-motion.
 * @param {function} onDetails - Callback pour voir les détails du syndicat.
 * @param {function} onAdhere - Callback pour démarrer le processus d'adhésion.
 */
export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {

    // Fonctions utilitaires locales
    const formatMemberCount = (count) => {
        if (!count) return '0';
        if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
        return count.toString();
    };

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            {/* --- Image Header --- */}
            <div className="relative aspect-video">
                <Image
                    src={syndicat.image}
                    alt={syndicat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-sm font-semibold text-white bg-blue-600/90 rounded-lg px-3 py-1.5">{syndicat.type}</span>
                    {syndicat.recommended && (
                        <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" /> Recommandé
                        </span>
                    )}
                </div>

                {syndicat.certified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg" title="Syndicat Certifié">
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                )}
            </div>

            {/* --- Contenu Principal --- */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 h-14">
                    {syndicat.name}
                </h2>

                <div className="space-y-3 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center" title="Nombre de membres">
                            <Users className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0"/>
                            <span className="text-sm font-medium">{formatMemberCount(syndicat.members)} membres</span>
                        </div>
                        <div className="flex items-center" title="Note moyenne">
                            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current"/>
                            <span className="text-sm font-medium">{syndicat.rating || 'N/A'}</span>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5"/>
                        <span className="text-sm line-clamp-2">{syndicat.location}</span>
                    </div>
                </div>

                {syndicat.specialties?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {syndicat.specialties.slice(0, 3).map((specialty, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                                {specialty}
                            </span>
                        ))}
                    </div>
                )}

                {/* mt-auto pousse les boutons vers le bas pour aligner les cartes */}
                <div className="mt-auto pt-4 flex gap-3">
                    <motion.button
                        className="flex-1 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 py-2.5 rounded-lg border-2 border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center font-semibold"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={() => onDetails(syndicat)}
                    >
                        <span>Détails</span>
                        <ChevronRight className="ml-1 h-4 w-4"/>
                    </motion.button>

                    <motion.button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={() => onAdhere(syndicat)}
                    >
                        <UserPlus className="mr-2 h-4 w-4"/>
                        <span>Adhérer</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}