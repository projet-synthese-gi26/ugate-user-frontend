"use client";
import { motion } from "framer-motion";
import { Bell, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import UGateIcon from '@/components/shared/UGateIcon';
import { useUser } from "@/context/UserContext";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function AppHeader({ isSidebarOpen, onSidebarToggle, onNotificationToggle }) {
    const { user, isLoading } = useUser();
    const t = useTranslations('header');

    const profileImageSrc = !isLoading && user?.profilePictureUrl
        ? `${STATIC_FILES_URL}${user.profilePictureUrl}`
        : null;

    const displayUserName = isLoading ? "..." : user?.firstName || "Invité";

    return (
        <header className="bg-white/80 backdrop-blur-sm z-30 sticky top-0 border-b border-gray-200/80">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <button onClick={onSidebarToggle} className="text-gray-600 hover:text-blue-600">
                        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                    </button>
                    <div className="hidden md:flex items-center">
                        <UGateIcon className="h-8 w-8 text-blue-800" />
                        <span className="text-2xl font-bold text-blue-800 ml-2">U-Gate</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="relative hidden sm:block">
                        <input type="text" placeholder={t("rechercherPlaceholder1")} className="w-40 md:w-64 pl-10 pr-4 py-2 rounded-full border bg-gray-100" />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <LanguageSwitcher />
                    <button onClick={onNotificationToggle} className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                        <Bell size={22} />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    </button>
                    <Link href="/parametres" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100">
                            {profileImageSrc ? (
                                <img src={profileImageSrc} alt="Profil" className="w-9 h-9 rounded-full object-cover" />
                            ) : (
                                <SyndicatDefaultAvatar name={displayUserName} size={36} className="w-9 h-9" />
                            )}
                            <span className="hidden lg:inline font-semibold text-gray-700">{displayUserName}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
