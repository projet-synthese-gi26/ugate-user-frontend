"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ArrowRightCircle, Users, BarChart2, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function SyndicateCard({ syndicat }) {
    const router = useRouter();
    const { t } = useTranslation();

    const staticFilesUrl = 'http://167.235.62.116:7014'; // URL en dur comme demandé

    const handleAccessSpace = (syndicatId) => {
        router.push(`/syndicat-space/${syndicatId}`);
    };

    const TrendIndicator = ({ trend }) => {
        return <BarChart2 className="h-5 w-5 text-gray-400 dark:text-gray-500" title="Tendance stable" />;
    };

    const memberDisplayCount = (syndicat.memberCount || 0).toLocaleString();

    const bannerCompleteUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/')
        ? `${staticFilesUrl}${syndicat.bannerUrl}`
        : "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&q=80&w=1200";

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image
                    src={bannerCompleteUrl}
                    alt={syndicat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&q=80&w=1200'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-semibold text-white bg-blue-600/90 rounded-lg px-3 py-1.5 shadow-md">
                        {syndicat.type || 'Syndicat'}
                    </span>
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>

                <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 my-4">
                    <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">
                            {memberDisplayCount} membres
                        </span>
                    </div>
                    <TrendIndicator trend={syndicat.trend} />
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-700 group-hover:to-indigo-700"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccessSpace(syndicat.id)}
                    >
                        <span>{t("syndicats_page.access_space")}</span>
                        <ArrowRightCircle
                            className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}