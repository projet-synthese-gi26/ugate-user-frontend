"use client";
import { motion } from "framer-motion";
import { Bell, ChevronLeft, ChevronRight, Search, LogIn, UserPlus, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import UGateIcon from '@/components/shared/UGateIcon';
import { useUser } from "@/context/UserContext";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function AppHeader({ isSidebarOpen, onSidebarToggle, onNotificationToggle, isAuthenticated }) {
    const { user, isLoading } = useUser();
    const t = useTranslations('header');

    const profileImageSrc = !isLoading && user?.profilePictureUrl
        ? `${STATIC_FILES_URL}${user.profilePictureUrl}`
        : null;

    const displayUserName = isLoading ? "..." : user?.firstName || "Invité";

    return (
        <header className="bg-white/95 backdrop-blur-md z-30 sticky top-0 border-b border-gray-200/80 shadow-sm">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                {/* Logo et toggle sidebar */}
                <div className="flex items-center space-x-4">
                    {/* Toggle sidebar uniquement pour utilisateurs connectés */}
                    {isAuthenticated && (
                        <button onClick={onSidebarToggle} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                    <Link href={isAuthenticated ? "/home" : "/"} className="flex items-center">
                        <UGateIcon className="h-8 w-8 text-blue-700" />
                        <span className="text-2xl font-bold text-blue-700 ml-2 hidden md:inline">U-Gate</span>
                    </Link>
                </div>

                {/* Actions à droite */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Barre de recherche */}
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder={t("rechercherPlaceholder1")}
                            className="w-40 md:w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>

                    {/* Sélecteur de langue */}
                    <LanguageSwitcher />

                    {/* Contenu conditionnel selon l'état de connexion */}
                    {isAuthenticated ? (
                        <>
                            {/* Bouton notifications - Uniquement pour utilisateurs connectés */}
                            <motion.button
                                onClick={onNotificationToggle}
                                className="relative p-2.5 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Bell size={22} />
                                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                            </motion.button>

                            {/* Avatar et nom utilisateur - Uniquement pour utilisateurs connectés */}
                            <Link href="/parametres" passHref>
                                <motion.div
                                    className="flex items-center space-x-2 cursor-pointer p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {profileImageSrc ? (
                                        <img src={profileImageSrc} alt="Profil" className="w-9 h-9 rounded-xl object-cover border-2 border-blue-100" />
                                    ) : (
                                        <SyndicatDefaultAvatar name={displayUserName} size={36} className="w-9 h-9 rounded-xl" />
                                    )}
                                    <span className="hidden lg:inline font-semibold text-gray-700">{displayUserName}</span>
                                </motion.div>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* Boutons Connexion et Inscription - Uniquement pour visiteurs */}
                            <Link href="/login">
                                <motion.button
                                    className="px-4 py-2 text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all flex items-center space-x-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <LogIn size={18} />
                                    <span className="hidden sm:inline">{t("seConnecter")}</span>
                                </motion.button>
                            </Link>
                            <Link href="/register">
                                <motion.button
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <UserPlus size={18} />
                                    <span className="hidden sm:inline">{t("sinscrire")}</span>
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
