// src/app/layout.jsx
"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import I18nProvider from '@/components/I18nProvider';
import ToastProvider from '@/components/shared/ToastProvider';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import i18nConfig from '../../i18nextConfig.js';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params: { locale } }) {
    const GOOGLE_CLIENT_ID = "VOTRE_CLIENT_ID_GOOGLE.apps.googleusercontent.com";

    return (
        <html lang={locale} suppressHydrationWarning>
        {/*
        CORRECTION : Il n'y a plus d'espace ou de retour à la ligne
        entre la balise <html> et la balise <body>.
        Tout est sur la même "ligne logique".
      */}
        <body className={`${inter.className} bg-white dark:bg-black transition-colors duration-300`}>
        <ThemeProvider
            enableSystem={true}
            defaultTheme="system"
        >
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <I18nProvider
                    locale={locale}
                    namespaces={[i18nConfig.defaultNS]}
                >
                    <ToastProvider />
                    {children}
                </I18nProvider>
            </GoogleOAuthProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}