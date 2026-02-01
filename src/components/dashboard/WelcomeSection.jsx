"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Users, Sparkles, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import CreateSyndicateModal from "@/components/syndicats/CreateSyndicateModal";
import { useUser } from "@/context/UserContext";
import { Link } from "@/navigation";

export default function WelcomeSection() {
    const { user, isLoading } = useUser();
    const t = useTranslations('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Gestion du nom pour les visiteurs
    const firstName = isLoading ? "..." : user?.firstName || "";

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 pt-4"
            >
                {/* Badge contextuel */}
                {!user && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                            {t('platform_tagline', "Plateforme de gestion syndicale")}
                        </span>
                    </motion.div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {user ? (
                        // Message personnalisé pour utilisateur connecté
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('welcome', { name: firstName })}
                        </span>
                    ) : (
                        // Message pour visiteur
                        <>
                            <span className="text-gray-800">{t('public_welcome_line1', "Bienvenue sur")}</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                U-Gate
                            </span>
                        </>
                    )}
                </h1>

                {/* Sous-titre */}
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {user
                        ? t("portal_description", "Gérez vos syndicats, connectez-vous avec vos membres et restez informé.")
                        : t("public_description", "L'union fait la force. Rejoignez la plateforme centrale pour vos activités syndicales et citoyennes.")}
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {user ? (
                        // Bouton pour utilisateur connecté
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            {t("launch_syndicate", "Créer un syndicat")}
                        </motion.button>
                    ) : (
                        // Boutons pour visiteur
                        <>
                            <Link href="/register">
                                <motion.button
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    {t("join_us", "Nous rejoindre")}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link href="/explorer">
                                <motion.button
                                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {t("explore_public", "Explorer les syndicats")}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Indicateurs de confiance pour visiteurs */}
                {!user && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>{t('trust_secure', "Sécurisé")}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>{t('trust_members', "+50 000 membres")}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span>{t('trust_syndicates', "+1 500 syndicats")}</span>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Modale de création de syndicat (uniquement pour utilisateurs connectés) */}
            {user && (
                <CreateSyndicateModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}