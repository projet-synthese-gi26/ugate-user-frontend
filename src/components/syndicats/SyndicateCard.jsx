"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from '@/navigation'; // Utilisation du router typé de next-intl
import { ArrowRightCircle, Users, BarChart2, Bell, Calendar, TrendingUp } from "lucide-react";
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

    const handleAccessSpace = () => {
        // Redirection vers l'espace syndicat
        router.push(`/syndicat-space/${syndicat.id}/membres`);
    };

    // Gestion des URLs d'images
    const bannerUrl = syndicat.bannerUrl
        ? (syndicat.bannerUrl.startsWith('http') ? syndicat.bannerUrl : `${STATIC_FILES_URL}${syndicat.bannerUrl}`)
        : "/placeholder-cover.jpg"; // Assurez-vous d'avoir cette image dans public/

    const logoUrl = syndicat.logoUrl
        ? (syndicat.logoUrl.startsWith('http') ? syndicat.logoUrl : `${STATIC_FILES_URL}${syndicat.logoUrl}`)
        : null;

    // Simulation de données pour le design (à remplacer par de vraies données API si disponibles)
    const nextEventDate = new Date(); // Date du jour pour l'exemple
    const notificationsCount = Math.floor(Math.random() * 5); // Nombre aléatoire
    const trend = "up"; // "up", "down", "stable"

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/40 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            {/* Zone Image Header */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={bannerUrl}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badges sur l'image */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <span className="text-xs font-medium text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20">
                        {syndicat.address || 'Localisation N/A'}
                    </span>
                </div>

                {/* Type de syndicat (Haut gauche) */}
                <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-white bg-blue-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                        {syndicat.type || 'Organisation'}
                    </span>
                </div>
            </div>

            {/* Corps de la carte */}
            <div className="p-6 pt-12 relative flex flex-col flex-grow">
                {/* Logo Flottant */}
                <div className="absolute -top-10 left-6">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl p-1 shadow-lg border-4 border-white dark:border-gray-800 overflow-hidden">
                        {logoUrl ? (
                            <Image src={logoUrl} alt="Logo" width={80} height={80} className="w-full h-full object-cover rounded-xl" />
                        ) : (
                            <SyndicatDefaultAvatar name={syndicat.name} size={72} className="w-full h-full rounded-xl" />
                        )}
                    </div>
                </div>

                {/* Titre */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug mb-4 min-h-[3.5rem]">
                    {syndicat.name}
                </h2>

                {/* Statistiques principales */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {(syndicat.memberCount || 0).toLocaleString()} <span className="text-gray-500 dark:text-gray-500 font-normal">membres</span>
                        </span>
                    </div>

                    {/* Indicateur de tendance (simulé) */}
                    <div className="flex items-center space-x-1">
                        {trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {trend === "stable" && <BarChart2 className="h-4 w-4 text-gray-400" />}
                    </div>
                </div>

                {/* Informations contextuelles */}
                <div className="space-y-3 text-sm mb-6 flex-grow">
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>Prochain événement</span>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-200">
                            {nextEventDate.toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' })}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                            <Bell className="h-4 w-4" />
                            <span>Notifications</span>
                        </div>
                        {notificationsCount > 0 ? (
                            <span className="font-bold text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full">
                                {notificationsCount} nouveaux
                            </span>
                        ) : (
                            <span className="text-gray-400">Rien à signaler</span>
                        )}
                    </div>
                </div>

                {/* Bouton d'action */}
                <div className="mt-auto">
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center font-semibold group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAccessSpace}
                    >
                        <span>{t('access_space', 'Accéder à l\'espace')}</span>
                        <ArrowRightCircle className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}