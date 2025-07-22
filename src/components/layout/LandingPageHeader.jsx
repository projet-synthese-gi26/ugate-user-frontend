
"use client";

import { useState } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Home, Globe } from 'lucide-react';
import UGateIcon from '@/components/shared/UGateIcon';


export default function LandingPageHeader() {
    const t = useTranslations('header');
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpenDropdown(false);
    };

    return (
        <header className="bg-white shadow-md py-3 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 text-blue-700">
                    <UGateIcon className="h-8 w-8" showText={true} />
                </Link>
                <div className="flex space-x-4 items-center">
                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(prev => !prev)}
                            className="flex items-center space-x-1 px-3 py-2 rounded-full border text-gray-700 hover:bg-blue-50 transition duration-300"
                        >
                            <Globe className="h-5 w-5" />
                            <span>Langue</span>
                        </button>
                        {openDropdown && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                                <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 w-full text-left">Français</button>
                                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 w-full text-left">English</button>
                                <button onClick={() => changeLanguage('de')} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 w-full text-left">Deutsch</button>
                            </div>
                        )}
                    </div>
                    <Link href="/login" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-700 flex items-center hover:bg-blue-100 transition duration-300">
                            <LogIn className="mr-2 h-4 w-4" /> {t("seConnecter")}
                        </motion.button>
                    </Link>
                    <Link href="/register" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-800 transition duration-300">
                            <UserPlus className="mr-2 h-4 w-4" /> {t("sinscrire")}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </header>
    );
}