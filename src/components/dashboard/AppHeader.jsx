// src/components/dashboard/AppHeader.jsx
"use client";

import { motion } from "framer-motion";
import { Bell, Building, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import ThemeSwitcher from '../layout/ThemeSwitcher'; // <-- Importer le sélecteur de thème
import LanguageSwitcher from '../layout/LanguageSwitcher'; // <-- Importer le sélecteur de langue

export default function AppHeader({ isSidebarOpen, userData, onSidebarToggle, onNotificationToggle }) {
    const { t } = useTranslation();

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md z-30 sticky top-0 border-b dark:border-gray-700">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                {/* Left Side */}
                <div className="flex items-center space-x-4">
                    <button onClick={onSidebarToggle} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                    </button>
                    <div className="hidden md:flex items-center">
                        <Building className="h-8 w-8 text-blue-600" />
                        <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-200">SyndicManager</h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Le champ de recherche peut être masqué sur les petits écrans */}
                    <div className="relative hidden sm:block">
                        <input type="text" placeholder={t("rechercherPlaceholder1")} className="w-40 md:w-64 pl-10 pr-4 py-2 rounded-full border bg-gray-100 dark:bg-gray-800 dark:border-gray-700" />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* --- NOUVEAUX COMPOSANTS AJOUTÉS ICI --- */}
                    <ThemeSwitcher />
                    <LanguageSwitcher />

                    <button onClick={onNotificationToggle} className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Bell size={22} />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    </button>

                    <Link href="/parametres" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                            <img src={userData?.profile} alt="Profil" className="w-9 h-9 rounded-full object-cover" />
                            <span className="hidden lg:inline font-semibold text-gray-700 dark:text-gray-300">{userData?.firstName}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};