"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronRight, UserPlus, Users, Star, ShieldCheck } from "lucide-react";
import { SyndicatDefaultAvatar } from "../shared/SyndicatDefaultAvatar";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {
    const formatMemberCount = (count) => {
        if (!count) return '0';
        if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
        return count.toString();
    };

    const logoUrl = syndicat.logoUrl ? `${STATIC_FILES_URL}${syndicat.logoUrl}` : null;
    const bannerUrl = syndicat.bannerUrl ? `${STATIC_FILES_URL}${syndicat.bannerUrl}` : "/placeholder-cover.jpg";

    // Données factices pour les champs non gérés par le backend
    const rating = syndicat.rating || '4.5'; // fallback
    const certified = syndicat.certified || false; // fallback
    const specialties = syndicat.specialties || ['Tech', 'Formation', 'Innovation']; // fallback
    
    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute -bottom-8 left-6">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border-4 border-white dark:border-gray-800">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
                {certified && <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg" title="Syndicat Certifié"><ShieldCheck className="w-4 h-4" /></div>}
            </div>
            <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <div className="flex items-center" title="Nombre de membres"><Users className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0"/><span className="font-medium">{formatMemberCount(syndicat.memberCount)} membres</span></div>
                    <div className="flex items-center" title="Note moyenne"><Star className="h-4 w-4 mr-1 text-yellow-400 fill-current"/><span className="font-medium">{rating}</span></div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                    {specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">{specialty}</span>
                    ))}
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                    <motion.button className="flex-1 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 py-2.5 rounded-lg border-2 border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center font-semibold" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onDetails(syndicat)}>
                        <span>Détails</span>
                        <ChevronRight className="ml-1 h-4 w-4"/>
                    </motion.button>
                    <motion.button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onAdhere(syndicat)}>
                        <UserPlus className="mr-2 h-4 w-4"/>
                        <span>Adhérer</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}