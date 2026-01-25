"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Search, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Link } from "@/navigation";
import { STATIC_FILES_URL } from "@/lib/constants";
import { SyndicatDefaultAvatar } from "@/components/shared/SyndicatDefaultAvatar";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function SyndicateCardPublic({ syndicat }) {
    const t = useTranslations('syndicats_page');

    const bannerUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/')
        ? `${STATIC_FILES_URL}${syndicat.bannerUrl}`
        : "/placeholder-cover.jpg";
    const logoUrl = syndicat.logoUrl && syndicat.logoUrl.startsWith('/')
        ? `${STATIC_FILES_URL}${syndicat.logoUrl}`
        : null;

    return (
        <motion.div
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image
                    src={bannerUrl}
                    alt={syndicat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "/placeholder-cover.png"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white rounded-full p-1 shadow-lg border-4 border-white">
                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt={`${syndicat.name} logo`}
                                width={80}
                                height={80}
                                className="rounded-full object-cover w-full h-full"
                            />
                        ) : (
                            <SyndicatDefaultAvatar name={syndicat.name} size={72} />
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-12 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {syndicat.description || t("no_description")}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={`/explorer/${syndicat.id}`}
                        className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-600 group-hover:to-blue-700"
                    >
                        {t("view_details") || "Voir les détails"}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function LoginSyndicatsPage() {
    const t = useTranslations();
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SYNDICATES_API_URL || 'https://ugate.pynfi.com'}/syndicates?page=0&size=50`
                );
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des syndicats");
                }
                const data = await response.json();
                setSyndicates(data.content || data || []);
            } catch (err) {
                console.error("Erreur:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, []);

    const filteredSyndicates = useMemo(() => {
        if (!searchTerm) return syndicates;
        return syndicates.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [syndicates, searchTerm]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600">
                        {t('syndicats_page.loading_text') || "Chargement des syndicats..."}
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600">{error}</p>
                    <Link href="/login" className="mt-4 inline-block text-blue-600 hover:underline">
                        {t('common.back_to_login') || "Retour à la connexion"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/login"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        {t('common.back_to_login') || "Retour à la connexion"}
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {t('syndicats_page.title') || "Découvrez nos syndicats"}
                    </h1>
                    <p className="text-gray-600">
                        {t('syndicats_page.subtitle') || "Explorez les syndicats disponibles et rejoignez celui qui vous correspond"}
                    </p>
                </div>

                {/* Search */}
                <motion.div
                    className="mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder={t("syndicats_page.search_placeholder") || "Rechercher un syndicat..."}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6 transition-colors group-focus-within:text-blue-500" />
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence>
                    {filteredSyndicates.length > 0 ? (
                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredSyndicates.map((syndicat) => (
                                <SyndicateCardPublic key={syndicat.id} syndicat={syndicat} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="max-w-md mx-auto">
                                <AlertCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {t("syndicats_page.empty_search_title") || "Aucun syndicat trouvé"}
                                </h3>
                                <p className="text-gray-600">
                                    {t("syndicats_page.empty_search_desc") || "Essayez avec d'autres mots-clés"}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
