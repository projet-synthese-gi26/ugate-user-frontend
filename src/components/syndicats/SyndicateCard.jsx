
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ArrowRightCircle, Users, BarChart2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function SyndicateCard({ syndicat }) {
    const router = useRouter();
    const { t } = useTranslation();

    const handleJoin = () => {
        // Redirige vers la page de détail ou d'adhésion du syndicat
        router.push(`/syndicat/${syndicat.id}`);
    };

    return (
        <motion.div
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden"
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={syndicat.image} alt={syndicat.name} fill style={{ objectFit: 'cover' }} className="transition-transform group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-sm font-semibold text-white bg-blue-600/90 rounded-lg px-3 py-1.5">{syndicat.type}</span>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 h-14">{syndicat.name}</h2>
                <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">{syndicat.members.toLocaleString()} membres</span>
                </div>
            </div>
            <div className="px-6 pb-6">
                <button onClick={handleJoin} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center group-hover:bg-blue-700 transition">
                    <span>{t("syndicats.access_space")}</span>
                    <ArrowRightCircle className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}