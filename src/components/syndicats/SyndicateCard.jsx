"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from '@/navigation';
import { ArrowRightCircle, Users, BarChart2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { STATIC_FILES_URL } from "@/lib/constants";
import { SyndicatDefaultAvatar } from "../shared/SyndicatDefaultAvatar";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function SyndicateCard({ syndicat }) {
    const router = useRouter();
    const t = useTranslations('syndicats_page');

    const handleAccessSpace = (syndicatId) => {
        router.push(`/syndicat-space/${syndicatId}`);
    };

    const bannerUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.bannerUrl}` : "/placeholder-cover.jpg";
    const logoUrl = syndicat.logoUrl && syndicat.logoUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.logoUrl}` : null;

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.src = "/placeholder-cover.jpg"; }}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border-4 border-white dark:border-gray-800">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-12 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 my-4">
                    <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">{(syndicat.memberCount || 0).toLocaleString()} membres</span>
                    </div>
                    <BarChart2 className="h-5 w-5 text-gray-400 dark:text-gray-500" title="Tendance stable" />
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-700 group-hover:to-indigo-700"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccessSpace(syndicat.id)}
                    >
                        <span>{t("access_space")}</span>
                        <ArrowRightCircle className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}