// src/components/layout/ThemeSwitcher.jsx
"use client";

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect uniquement pour s'assurer que le composant est monté côté client avant de rendre l'UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Pour éviter les mismatches d'hydratation, on ne rend rien ou un placeholder sur le serveur
        return <div className="w-9 h-9" />;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Changer de thème"
        >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
    );
}