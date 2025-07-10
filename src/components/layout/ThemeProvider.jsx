
"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
    // On utilise l'attribut "class" pour que Tailwind (darkMode: 'class') fonctionne
    return <NextThemesProvider attribute="class" {...props}>{children}</NextThemesProvider>;
}