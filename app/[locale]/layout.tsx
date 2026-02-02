import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';
import '../globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: 'U-Gate | Plateforme Syndicale',
    description: 'Gestion syndicale, votes, événements et communauté.',
};

interface RootLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>; // Promise obligatoire en Next 15
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    // On await les params avant de les utiliser
    const { locale } = await params;

    // Récupération des messages côté serveur
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
    <NextIntlClientProvider messages={messages}>
    <Toaster position="top-right" />
        {children}
        </NextIntlClientProvider>
        </body>
        </html>
);
}