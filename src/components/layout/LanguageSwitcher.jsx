// src/components/layout/LanguageSwitcher.jsx
"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import i18nConfig from '../../../i18nConfig';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (newLocale) => {
        // ex: pathname is /fr/dashboard
        // currentLocale is 'fr'
        // newLocale is 'en'
        // newPathname will be /en/dashboard
        const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

        // On utilise le routeur de Next pour changer de page, ce qui conserve l'état client
        router.push(newPathname);
        setIsOpen(false);
    };

    const languages = {
        fr: 'Français',
        en: 'English',
        de: 'Deutsch',
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                <Globe size={22} />
                <span className="font-semibold uppercase">{currentLocale}</span>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border dark:border-gray-700">
                    {i18nConfig.locales.map((locale) => (
                        <button
                            key={locale}
                            onClick={() => handleChange(locale)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {languages[locale]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}