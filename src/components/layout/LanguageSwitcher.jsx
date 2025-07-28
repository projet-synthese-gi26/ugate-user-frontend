// src/components/layout/LanguageSwitcher.jsx
"use client";

import { useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (newLocale) => {
        // Utilise next-intl navigation pour changer de locale
        router.push(pathname, { locale: newLocale });
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
                    {['fr', 'en', 'de'].map((locale) => (
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