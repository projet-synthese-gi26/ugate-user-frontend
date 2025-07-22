"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LogIn } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { STATIC_FILES_URL } from '@/lib/constants';

export default function ProfileHeader({ syndicate, variants }) {
    const t = useTranslations('profile_page');
    const bannerUrl = syndicate.bannerUrl ? `${STATIC_FILES_URL}${syndicate.bannerUrl}` : "/placeholder-cover.jpg";

    return (
        <motion.div variants={variants} className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-[-80px] md:mb-[-60px]">
            <Image src={bannerUrl} alt={`${syndicate.name} cover image`} fill style={{ objectFit: 'cover' }} priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full flex justify-between items-end text-white">
                <div className="max-w-[70%]">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">{syndicate.name}</h1>
                    <p className="text-base md:text-lg opacity-90 mt-1">{syndicate.shortName}</p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 font-semibold text-sm sm:text-base">
                    <LogIn size={18} />
                    <span>{t('join_button')}</span>
                </motion.button>
            </div>
        </motion.div>
    );
}