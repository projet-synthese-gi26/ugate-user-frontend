// src/components/syndicate-profile/ProfileHeader.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Affiche l'en-tête de la page de profil avec image de couverture et logo.
 * @param {object} syndicate - L'objet syndicat.
 * @param {object} variants - Les variantes d'animation framer-motion.
 */
export default function ProfileHeader({ syndicate, variants }) {
    const { t } = useTranslation();

    return (
        <motion.div
            variants={variants}
            className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-[-80px] md:mb-[-60px]" // Marge négative pour superposer
        >
            <Image
                src={syndicate.image || "/placeholder-cover.jpg"}
                alt={`${syndicate.name} cover image`}
                fill
                style={{ objectFit: 'cover' }}
                priority // L'image principale doit se charger en priorité
            />
            {/* Superposition de dégradé pour la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full flex justify-between items-end text-white">
                <div className="max-w-[70%]">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
                        {syndicate.name}
                    </h1>
                    <p className="text-base md:text-lg opacity-90 mt-1">
                        {syndicate.location}
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 font-semibold text-sm sm:text-base"
                >
                    <LogIn size={18} />
                    <span>{t('profile_page.join_button')}</span>
                </motion.button>
            </div>
        </motion.div>
    );
}