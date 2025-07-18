
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building, LogIn, UserPlus, Home, Globe } from 'lucide-react';


export default function LandingPageHeader() {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpenDropdown(false);
    };

    return (
        <header className="bg-white shadow-md py-3 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 text-blue-600">
                    <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ugate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1E40AF" />
                                <stop offset="100%" stopColor="#3B82F6" />
                            </linearGradient>
                        </defs>
                        <rect width="40" height="40" rx="8" fill="url(#ugate-gradient)" />
                        <path d="M8 12h24v16H8z" fill="#ffffff" fillOpacity="0.1" />
                        <path d="M12 8v8h4V8h4v8h4V8h4v24H8V8h4z" fill="#ffffff" fillOpacity="0.9" />
                        <path d="M16 20h8v8h-8z" fill="#1E40AF" />
                        <circle cx="20" cy="24" r="2" fill="#ffffff" />
                        <path d="M10 30h20v2H10z" fill="#ffffff" />
                        <text x="20" y="36" textAnchor="middle" fontSize="6" fill="#ffffff" fontWeight="bold">U</text>
                    </svg>
                    <span className="text-2xl font-bold">U-Gate</span>
                </Link>
                <div className="flex space-x-4 items-center">
                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(prev => !prev)}
                            className="flex items-center space-x-1 px-3 py-2 rounded-full border text-gray-700 hover:bg-blue-100 transition duration-300"
                        >
                            <Globe className="h-5 w-5" />
                            <span>Langue</span>
                        </button>
                        {openDropdown && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                                <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">Français</button>
                                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">English</button>
                                <button onClick={() => changeLanguage('de')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">Deutsch</button>
                            </div>
                        )}
                    </div>
                    <Link href="/login" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full border border-blue-300 flex items-center hover:bg-blue-200 transition duration-300">
                            <LogIn className="mr-2 h-4 w-4" /> {t("seConnecter")}
                        </motion.button>
                    </Link>
                    <Link href="/register" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300">
                            <UserPlus className="mr-2 h-4 w-4" /> {t("sinscrire")}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </header>
    );
}