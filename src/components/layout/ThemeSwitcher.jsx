// src/components/layout/ThemeSwitcher.jsx
"use client";

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ce hook garantit que le code ne s'exécute que côté client,
  // après que le composant a été "monté", évitant les erreurs d'hydratation.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Si le composant n'est pas encore monté, on affiche un placeholder
  // pour éviter un "saut" de layout et des erreurs de rendu.
  if (!mounted) {
    return (
      <button className="p-2 rounded-full" disabled>
        <div className="w-[22px] h-[22px] bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </button>
    );
  }

  // La fonction qui inverse le thème actuel.
  // On se base sur `resolvedTheme` pour savoir si le thème "system" est actuellement clair ou sombre.
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Changer de thème"
    >
      {resolvedTheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}