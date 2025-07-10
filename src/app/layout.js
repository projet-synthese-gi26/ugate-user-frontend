// src/app/layout.jsx
"use client";

import { Inter } from 'next/font/google';
import './globals.css';

// Import des Providers
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import I18nProvider from '@/components/I18nProvider';
import ToastProvider from '@/components/shared/ToastProvider';

// Import de la configuration
import i18nConfig from '../../i18nConfig';

const inter = Inter({ subsets: ['latin'] });

// Note : On ne peut pas exporter de `metadata` depuis un Client Component.
// Le SEO doit être géré dans les pages ou des layouts serveur enfants.

export default function RootLayout({ children, params: { locale } }) {
  // Remplacez par votre vrai Client ID Google
  const GOOGLE_CLIENT_ID = "137734019377-nnq12325retn9n23nfnis326j008u2pm.apps.googleusercontent.com";

  return (
    // `suppressHydrationWarning` est recommandé par next-themes pour éviter les erreurs
    // liées au fait que le thème sur le serveur peut différer de celui du client au premier rendu.
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {/* Le ThemeProvider doit englober tous les autres providers et le contenu */}
        <ThemeProvider
          attribute="class" // Indique à next-themes de modifier la classe sur la balise <html>
          defaultTheme="system" // Le thème par défaut suit les préférences du système d'exploitation
          enableSystem // Permet à l'utilisateur de choisir "Système" en plus de "Clair" ou "Sombre"
          disableTransitionOnChange={false} // Permet des transitions douces
        >
          {/* Les autres providers sont à l'intérieur du ThemeProvider */}
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <I18nProvider
              locale={locale}
              namespaces={[i18nConfig.defaultNS]}
            >
              <ToastProvider />
              
              {/* Ce div reçoit les couleurs de fond et de texte de base, que la classe .dark sur <html> modifiera */}
              <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
                {children}
              </div>

            </I18nProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}