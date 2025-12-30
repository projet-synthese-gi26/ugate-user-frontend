"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronRight, UserPlus, Users, Star, ShieldCheck } from "lucide-react";
import { SyndicatDefaultAvatar } from "../shared/SyndicatDefaultAvatar";
import { STATIC_FILES_URL } from '@/lib/constants';
import { useTranslations } from "next-intl";

export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {
    const t = useTranslations('explorer_page');

    const formatMemberCount = (count) => {
        if (!count) return '0';
        if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
        return count.toString();
    };

    // Si l'URL commence déjà par http, l'utiliser directement, sinon ajouter le préfixe
    const getFullUrl = (url) => {
        if (!url) return null;
        return url.startsWith('http') ? url : `${STATIC_FILES_URL}${url}`;
    };
    const logoUrl = getFullUrl(syndicat.logoUrl);
    const bannerUrl = syndicat.bannerUrl ? getFullUrl(syndicat.bannerUrl) : "/placeholder-cover.jpg";
    const rating = syndicat.rating || '4.5';
    const isApproved = syndicat.isApproved || false;
    // Utiliser le domaine d'activité de l'API comme tag
    const domain = syndicat.domain;

    return (
        <motion.div
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute -bottom-8 left-6">
                    <div className="w-20 h-20 bg-white rounded-full p-1 shadow-lg border-4 border-white">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
                {isApproved && <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg" title={t('certified')}><ShieldCheck className="w-4 h-4" /></div>}
            </div>
            <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-snug line-clamp-2 h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                    <div className="flex items-center" title={t('members')}>
                        <Users className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0"/>
                        <span className="font-medium">{formatMemberCount(syndicat.memberCount)} {t('members')}</span>
                    </div>
                    <div className="flex items-center" title="Note moyenne">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current"/>
                        <span className="font-medium">{rating}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                    {domain && (
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">{domain}</span>
                    )}
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                    <motion.button
                        className="flex-1 bg-white text-blue-600 py-2.5 rounded-lg border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center font-semibold"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onDetails(syndicat)}
                    >
                        <span>{t('details')}</span>
                        <ChevronRight className="ml-1 h-4 w-4"/>
                    </motion.button>
                    <motion.button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onAdhere(syndicat)}
                    >
                        <UserPlus className="mr-2 h-4 w-4"/>
                        <span>{t('join')}</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
