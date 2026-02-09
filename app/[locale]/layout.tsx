import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';
import '../globals.css';
import { ReactNode } from 'react';

import QueryProvider from '@/components/providers/QueryProvider';
// ✅ IMPORT DU SETTINGS PROVIDER
import { SettingsProvider } from '@/lib/context/SettingsContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: 'U-Gate | Plateforme Syndicale',
    description: 'Gestion syndicale, votes, événements et communauté.',
};

interface RootLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <NextIntlClientProvider messages={messages}>
            <QueryProvider>
                {/* ✅ ACTIVATION DU CONTEXTE DATA SAVER */}
                <SettingsProvider>
                    <Toaster position="top-right" />
                    {children}
                </SettingsProvider>
            </QueryProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}