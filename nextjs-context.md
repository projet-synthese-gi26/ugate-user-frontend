# Contexte de l'application Next.js

## Informations générales

- **Date de génération**: 31/01/2026 15:39:30

## Structure du projet

```
📁 .claude/
  📋 settings.local.json
📄 .env.local
📁 .idea/
  📁 inspectionProfiles/
📝 README.md
📜 i18nConfig.js
📋 jsconfig.json
📁 messages/
  📋 de.json
  📋 en.json
  📋 fr.json
📜 middleware.js
📝 nextjs-context.md
📋 package.json
📁 public/
📁 src/
  📁 app/
    📁 [locale]/
      📁 (auth)/
        ⚛️ layout.jsx
        ⚛️ loading.jsx
        📁 login/
          📜 page.js
          📁 syndicats/
            ⚛️ page.jsx
        📁 register/
          ⚛️ page.jsx
      📁 (main)/
        📁 explorer/
          📁 [syndicatId]/
            ⚛️ page.jsx
          ⚛️ page.jsx
        📁 home/
          ⚛️ page.jsx
        ⚛️ layout.jsx
        ⚛️ loading.jsx
        📁 parametres/
          ⚛️ page1.jsx
        📁 syndicats/
          ⚛️ page.jsx
      📁 (marketing)/
        📜 layout.js
        📜 page.js
      📁 (syndicate-space)/
        📁 syndicat-space/
          📁 [syndicatId]/
            📁 (sections)/
              📁 chat/
                ⚛️ page.jsx
              📁 evenements/
                ⚛️ page.jsx
              📁 exprimer/
                ⚛️ page.jsx
              📁 membres/
                ⚛️ page.jsx
              📁 votes/
                ⚛️ page.jsx
            ⚛️ SyndicateSpaceClientLayout.jsx
            📁 [branchId]/
              📁 (sections)/
                📁 chat/
                  ⚛️ page.jsx
                📁 evenements/
                  ⚛️ page.jsx
                📁 exprimer/
                  ⚛️ page.jsx
                📁 membres/
                  ⚛️ page.jsx
                📁 votes/
              ⚛️ layout.jsx
            ⚛️ layout.jsx
            ⚛️ page.jsx
      🎨 globals.css
      📜 layout.js
      ⚛️ loading.jsx
    📜 layout.js
    📜 page.js
  📁 components/
    ⚛️ Providers.jsx
    ⚛️ SearchSystem.jsx
    📁 auth/
      ⚛️ LoginAside.jsx
      ⚛️ LoginForm.jsx
      ⚛️ PasswordStrength.jsx
      ⚛️ RegisterForm.jsx
      ⚛️ SocialLogins.jsx
    📁 dashboard/
      ⚛️ AppHeader.jsx
      ⚛️ AppSidebar.jsx
      ⚛️ Feed.jsx
      ⚛️ FeedCard.jsx
      ⚛️ FeedItem.jsx
      ⚛️ FeedItemHeader.jsx
      ⚛️ NotificationsPanel.jsx
      ⚛️ WelcomeSection.jsx
      ⚛️ navItems.jsx
    📁 explorer/
      ⚛️ AdhesionModal.jsx
      ⚛️ ExploreCard.jsx
      ⚛️ ExploreHeader.jsx
      ⚛️ ExplorerClient.jsx
    📁 forms/
      📁 adhesion/
        ⚛️ AdhereSyndicatForm.jsx
        ⚛️ AntenneSelection.jsx
        ⚛️ IndividualMembershipForm.jsx
        ⚛️ MembershipConfirmation.jsx
        ⚛️ UserTypeSelection.jsx
        ⚛️ file-uploader.jsx
      📁 create-syndicate/
        ⚛️ CreateSyndicateWizard.jsx
        ⚛️ FileUploader.jsx
        ⚛️ InteractiveMap.jsx
        ⚛️ Step1_TypeSelection.jsx
        ⚛️ Step2_AnonymousForm.jsx
        ⚛️ Step3_Antennes.jsx
    📁 landing/
      ⚛️ ActivityFeed.jsx
      ⚛️ FeaturesSection.jsx
      ⚛️ HeroSection.jsx
      ⚛️ ModernLandingPage.jsx
      ⚛️ PopularSyndicates.jsx
      ⚛️ StatsSection.jsx
      ⚛️ SyndicateCard.jsx
    📁 layout/
      ⚛️ AppFooter.jsx
      ⚛️ LandingPageFooter.jsx
      ⚛️ LandingPageHeader.jsx
      ⚛️ LanguageSwitcher.jsx
      ⚛️ ThemeProvider.jsx
      ⚛️ ThemeSwitcher.jsx
    📁 settings/
      ⚛️ DynamicFieldArray.jsx
      ⚛️ FormSection.jsx
      ⚛️ ProfileHeader.jsx
      ⚛️ UserProfileForm.jsx
    📁 shared/
      ⚛️ ClientMotionWrapper.jsx
      ⚛️ EventCard.jsx
      ⚛️ EventsList.jsx
      ⚛️ NavigationLoader.jsx
      ⚛️ PublicationCard.jsx
      ⚛️ PublicationsList.jsx
      ⚛️ SearchModal.jsx
      ⚛️ SyndicatDefaultAvatar.jsx
      ⚛️ ToastProvider.jsx
      ⚛️ UGateIcon.jsx
      ⚛️ UnifiedPostCard.jsx
    📁 syndicate-profile/
      ⚛️ ProfileActivities.jsx
      ⚛️ ProfileContactCard.jsx
      ⚛️ ProfileHeader.jsx
      ⚛️ ProfileKeyInfoCard.jsx
      ⚛️ ProfileMap.jsx
      ⚛️ ProfileMembers.jsx
      ⚛️ ProfileSectionCard.jsx
      ⚛️ ProfileServices.jsx
      ⚛️ ProfileShop.jsx
      ⚛️ SyndicateMap.jsx
      ⚛️ SyndicateProfileClient.jsx
    📁 syndicate-space/
      ⚛️ ErrorBoundary.jsx
      ⚛️ ErrorStates.jsx
      ⚛️ LoadingErrorPage.jsx
      ⚛️ NotificationCard.jsx
      ⚛️ SyndicateHeader.jsx
      ⚛️ SyndicateNotificationsPanel.jsx
      ⚛️ SyndicateSidebar.jsx
      ⚛️ SyndicateSpaceLoader.jsx
      📁 section-chat/
        ⚛️ ChatClient.jsx
        ⚛️ ChatClientV2.jsx
      📁 section-evenements/
        ⚛️ CreateEventModal.jsx
        ⚛️ EventCard.jsx
        ⚛️ EventForm.jsx
        ⚛️ EventsFeed.jsx
        ⚛️ ParticipantsModal.jsx
      📁 section-exprimer/
        ⚛️ CommentModal.jsx
        ⚛️ NewPostModal.jsx
        ⚛️ Post.jsx
        ⚛️ PublicationsFeed.jsx
        📁 comments/
          ⚛️ Comment.jsx
          ⚛️ EmojiPicker.jsx
          ⚛️ Reply.jsx
      📁 section-membres/
        ⚛️ MembersClient.jsx
        ⚛️ StatCard.jsx
        ⚛️ TabButton.jsx
    📁 syndicats/
      ⚛️ CreateSyndicateModal.jsx
      ⚛️ MySyndicatesPage.jsx
      ⚛️ SyndicateCard.jsx
      ⚛️ SyndicateHeader.jsx
      ⚛️ SyndicateList.jsx
  📁 context/
    📜 UserContext.js
    📜 UserProvider.js
  📁 hooks/
    📜 useErrorHandler.js
    📜 usePermissions.js
    📜 useRouteLoading.js
  📁 i18n/
    ⚛️ navigation.jsx
    ⚛️ request.jsx
    ⚛️ routing.jsx
  📜 i18n.js
  📁 lib/
    📁 api/
      📜 auth.js
      📜 chat.js
      📜 event.js
      📜 feed.js
      📜 helpers.js
      📜 index.js
      📜 instance.js
      📜 membership.js
      📜 notifications.js
      📜 posts.js
      📜 products.js
      📜 search.js
      📜 services.js
      📜 syndicate.js
      📜 syndicates.js
      📜 syndicatesInstance.js
      📜 user.js
      📜 vote.js
    📁 auth/
      📜 accountService.js
    📜 constants.js
    📁 fakeData/
      📜 antenne.js
      ⚛️ exploreSyndicatFake.jsx
      ⚛️ homeFeedFake.jsx
      📜 mySyndicatFake.js
      📜 syndicateDetailsFake.js
    ⚛️ fakeData.jsx
    📁 utils/
      📜 cookies.js
      📜 timeAgo.js
  📜 navigation.js
📜 tailwind.config.js
```

## Dépendances

### Dependencies
- @react-oauth/google: ^0.12.2
- axios: ^1.10.0
- continue: ^0.1.0
- date-fns: ^4.1.0
- framer-motion: ^12.23.0
- js-cookie: ^3.0.5
- jwt-decode: ^4.0.0
- leaflet: ^1.9.4
- lucide-react: ^0.525.0
- next: ^16.1.5
- next-intl: ^4.3.4
- next-themes: ^0.4.6
- react: ^19.2.4
- react-dom: ^19.2.4
- react-hook-form: ^7.59.0
- react-hot-toast: ^2.5.2
- react-leaflet: ^5.0.0
- sweetalert2: ^11.22.2

### Dev Dependencies
- @eslint/eslintrc: ^3
- @tailwindcss/postcss: ^4
- eslint: ^9
- eslint-config-next: 15.3.4
- tailwindcss: ^4

## Fichiers de configuration

### package.json

```json
{
  "name": "u-gate2",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@react-oauth/google": "^0.12.2",
    "axios": "^1.10.0",
    "continue": "^0.1.0",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.23.0",
    "js-cookie": "^3.0.5",
    "jwt-decode": "^4.0.0",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.525.0",
    "next": "^16.1.5",
    "next-intl": "^4.3.4",
    "next-themes": "^0.4.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hook-form": "^7.59.0",
    "react-hot-toast": "^2.5.2",
    "react-leaflet": "^5.0.0",
    "sweetalert2": "^11.22.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.4",
    "tailwindcss": "^4"
  }
}

```

### next.config.mjs

```json
import createNextIntlPlugin from 'next-intl/plugin';
import i18nConfig from './src/i18n.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mode strict React
    reactStrictMode: true,
    
    output: 'standalone',
      // Optimise le tracing des fichiers pour Docker
        outputFileTracingRoot: process.cwd(), 

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '167.235.62.116',
                port: '7014',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media-service.pynfi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    
    // Réécriture des URLs pour l'API (proxy pour éviter CORS)
    async rewrites() {
        return [
            // Proxy pour le service d'authentification
            {
                source: '/api/auth/:path*',
                destination: 'https://auth-service.pynfi.com/api/auth/:path*',
            },
            // Proxy pour le service des syndicats
            {
                source: '/api/syndicates/:path*',
                destination: 'https://ugate.pynfi.com/syndicates/:path*',
            },
            // Proxy pour les publications
            {
                source: '/api/publications/:path*',
                destination: 'https://ugate.pynfi.com/publications/:path*',
            },
            // Proxy pour les événements
            {
                source: '/api/events/:path*',
                destination: 'https://ugate.pynfi.com/events/:path*',
            },
            // Proxy pour le feed
            {
                source: '/api/feed/:path*',
                destination: 'https://ugate.pynfi.com/feed/:path*',
            },
            // Proxy pour les utilisateurs
            {
                source: '/api/users/:path*',
                destination: 'https://auth-service.pynfi.com/api/users/:path*',
            },
            // Fallback pour les autres APIs
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*',
            },
        ]
    },
    
    // Optimisations pour Docker
    experimental: {
      
    },
};

export default createNextIntlPlugin(i18nConfig)(nextConfig);
```

### tailwind.config.js

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {

    // Indique à Tailwind où trouver les classes qu'il doit générer
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Système de couleurs professionnel - Blanc principal, Bleu foncé secondaire
                primary: {
                    50: '#f8faff',
                    100: '#f0f6ff', 
                    200: '#e1ecff',
                    300: '#c7ddff',
                    400: '#a8c5ff',
                    500: '#85a8ff',
                    600: '#6584ff',
                    700: '#4c63e8',
                    800: '#1e40af', // Bleu foncé principal
                    900: '#1e3a8a',
                    950: '#172554'
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717'
                },
                accent: {
                    blue: '#1e40af',
                    lightBlue: '#3b82f6',
                    gray: '#6b7280'
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Inter', 'system-ui', 'sans-serif']
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem'
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem'
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
                'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
                'blue': '0 4px 16px rgba(30, 64, 175, 0.15)'
            },
            backdropBlur: {
                'xs': '2px'
            }
        },
    },
    plugins: [],
};

export default config;

```

## Pages, Layouts & Routes

### /:locale (layout)

- **Fichier**: `src/app/[locale]/(auth)/layout.jsx`
- **Type**: App Router, Composant Serveur

```jsx

export default function AuthLayout({ children }) {

    return <>{children}</>;
}
```

### /:locale/loading (loading)

- **Fichier**: `src/app/[locale]/(auth)/loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

### /:locale/login (page)

- **Fichier**: `src/app/[locale]/(auth)/login/page.js`
- **Type**: App Router, Composant Serveur

```jsx

import LoginAside from "@/components/auth/LoginAside";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";
import {getTranslations} from 'next-intl/server';
import { Link } from '@/navigation';

export default async function LoginPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();

    const animatedTexts = [
        t("login_page.welcome_message"),
        t("login_page.tagline_1"),
        t("login_page.tagline_2"),
        t("login_page.tagline_3"),
        t("login_page.tagline_4")
    ];

    return (
        <div className="min-h-screen flex bg-white">
            <LoginAside animatedTexts={animatedTexts} />

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        {t("login_page.title")}
                    </h2>

                    <LoginForm />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-4">{t("login_page.or_with")}</p>
                        <SocialLogins />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            {t("login_page.no_account")}{' '}
                            <Link href="/register" className="text-blue-900 hover:underline">
                                {t("login_page.register_here")}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### /:locale/login/syndicats (page)

- **Fichier**: `src/app/[locale]/(auth)/login/syndicats/page.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Search, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Link } from "@/navigation";
import { STATIC_FILES_URL } from "@/lib/constants";
import { SyndicatDefaultAvatar } from "@/components/shared/SyndicatDefaultAvatar";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function SyndicateCardPublic({ syndicat }) {
    const t = useTranslations('syndicats_page');

    const bannerUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/')
        ? `${STATIC_FILES_URL}${syndicat.bannerUrl}`
        : "/placeholder-cover.jpg";
    const logoUrl = syndicat.logoUrl && syndicat.logoUrl.startsWith('/')
        ? `${STATIC_FILES_URL}${syndicat.logoUrl}`
        : null;

    return (
        <motion.div
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image
                    src={bannerUrl}
                    alt={syndicat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "/placeholder-cover.png"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white rounded-full p-1 shadow-lg border-4 border-white">
                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt={`${syndicat.name} logo`}
                                width={80}
                                height={80}
                                className="rounded-full object-cover w-full h-full"
                            />
                        ) : (
                            <SyndicatDefaultAvatar name={syndicat.name} size={72} />
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-12 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {syndicat.description || t("no_description")}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={`/explorer/${syndicat.id}`}
                        className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-600 group-hover:to-blue-700"
                    >
                        {t("view_details") || "Voir les détails"}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function LoginSyndicatsPage() {
    const t = useTranslations();
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SYNDICATES_API_URL || 'https://ugate.pynfi.com'}/syndicates?page=0&size=50`
                );
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des syndicats");
                }
                const data = await response.json();
                setSyndicates(data.content || data || []);
            } catch (err) {
                console.error("Erreur:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, []);

    const filteredSyndicates = useMemo(() => {
        if (!searchTerm) return syndicates;
        return syndicates.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [syndicates, searchTerm]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600">
                        {t('syndicats_page.loading_text') || "Chargement des syndicats..."}
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600">{error}</p>
                    <Link href="/login" className="mt-4 inline-block text-blue-600 hover:underline">
                        {t('common.back_to_login') || "Retour à la connexion"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/login"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        {t('common.back_to_login') || "Retour à la connexion"}
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {t('syndicats_page.title') || "Découvrez nos syndicats"}
                    </h1>
                    <p className="text-gray-600">
                        {t('syndicats_page.subtitle') || "Explorez les syndicats disponibles et rejoignez celui qui vous correspond"}
                    </p>
                </div>

                {/* Search */}
                <motion.div
                    className="mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder={t("syndicats_page.search_placeholder") || "Rechercher un syndicat..."}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6 transition-colors group-focus-within:text-blue-500" />
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence>
                    {filteredSyndicates.length > 0 ? (
                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredSyndicates.map((syndicat) => (
                                <SyndicateCardPublic key={syndicat.id} syndicat={syndicat} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="max-w-md mx-auto">
                                <AlertCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {t("syndicats_page.empty_search_title") || "Aucun syndicat trouvé"}
                                </h3>
                                <p className="text-gray-600">
                                    {t("syndicats_page.empty_search_desc") || "Essayez avec d'autres mots-clés"}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

```

### /:locale/register (page)

- **Fichier**: `src/app/[locale]/(auth)/register/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import LoginAside from "@/components/auth/LoginAside";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogins from "@/components/auth/SocialLogins";
import {getTranslations} from 'next-intl/server';
import { Link } from '@/navigation';

export default async function RegisterPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();

    const animatedTexts = [
        t("register_page.tagline_1"),
        t("register_page.tagline_2"),
        t("register_page.tagline_3"),
        t("register_page.tagline_4")
    ];

    return (
        <div className="min-h-screen flex bg-white">
            <LoginAside animatedTexts={animatedTexts} />

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        {t("register_page.title")}
                    </h2>

                    <RegisterForm />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-4">{t("register_page.or_with")}</p>
                        <SocialLogins />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            {t("register_page.already_registered")}{' '}
                            <Link href="/login" className="text-blue-900 hover:underline">
                                {t("register_page.login_here")}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### /:locale/explorer/:syndicatId (page)

- **Fichier**: `src/app/[locale]/(main)/explorer/[syndicatId]/page.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useEffect, useState } from 'react';
import { Link } from '@/navigation';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';
import { useParams } from 'next/navigation';

export default function SyndicateProfilePage() {
    const params = useParams();
    const syndicatId = params.syndicatId;
    const t = useTranslations('profile_page');

    const [syndicate, setSyndicate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSyndicate = async () => {
            if (!syndicatId) return;
            try {
                setLoading(true);
                const data = await getSyndicateDetailsAPI(syndicatId);
                setSyndicate(data);
            } catch (err) {
                console.error("Erreur:", err);
                setError("Impossible de charger les détails.");
            } finally {
                setLoading(false);
            }
        };
        fetchSyndicate();
    }, [syndicatId]);

    if (loading) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error || !syndicate) {
        return (
            <div className="bg-gray-50 min-h-screen p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Syndicat non trouvé</h2>
            </div>
        );
    }

    return (
        // Suppression des classes bg-gray-900
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 hover:underline mb-6 group font-semibold">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span>{t('back_to_explorer')}</span>
                </Link>

                {/* Ici on appelle le client qui contient tout le design */}
                <SyndicateProfileClient syndicate={syndicate} />
            </div>
        </div>
    );
}
```

### /:locale/explorer (page)

- **Fichier**: `src/app/[locale]/(main)/explorer/page.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { getAllSyndicatesAPI } from "@/lib/api/syndicates";
import ExplorerClient from "@/components/explorer/ExplorerClient";
import ExploreHeader from "@/components/explorer/ExploreHeader";

export default function ExplorerPage() {
    const t = useTranslations();

    const [syndicates, setSyndicates] = useState([]);
    const [page, setPage] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [totalElements, setTotalElements] = useState(0);

    const loadSyndicates = async (pageNum) => {
        if (isLoading) return;

        if (pageNum > 0 && !hasNextPage) {
            toast.success(t('explorer_page.end_of_list_toast', "Vous avez atteint la fin de la liste !"));
            return;
        }

        setIsLoading(true);

        try {
            const data = await getAllSyndicatesAPI(pageNum, 12);
            if (pageNum === 0) {
                setSyndicates(data.content || []);
            } else {
                setSyndicates(prev => [...prev, ...(data.content || [])]);
            }
            // Vérifie s'il y a une page suivante basé sur totalPages et page actuelle
            const hasMore = (pageNum + 1) < (data.totalPages || 0);
            setHasNextPage(hasMore);
            setTotalElements(data.totalElements || 0);
            setPage(pageNum + 1);
        } catch (error) {
            console.error("Impossible de charger plus de syndicats", error);
            toast.error(t('explorer_page.load_more_error_toast', "Une erreur est survenue lors du chargement."));
        } finally {
            setIsLoading(false);
            if (isInitialLoad) setIsInitialLoad(false);
        }
    };

    useEffect(() => {
        loadSyndicates(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isInitialLoad) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <ExploreHeader syndicatesCount={totalElements} t={t} />

                <ExplorerClient syndicates={syndicates} />

                <div className="text-center mt-12">
                    {hasNextPage ? (
                        <motion.button
                            onClick={() => loadSyndicates(page)}
                            disabled={isLoading}
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    {t('common.loading_dots', "Chargement...")}
                                </span>
                            ) : (
                                t('explorer_page.load_more_button', "Charger plus")
                            )}
                        </motion.button>
                    ) : (
                        syndicates.length > 0 && <p className="text-gray-500">{t('explorer_page.end_of_list_message', "Vous avez atteint la fin de la liste.")}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
```

### /:locale/home (page)

- **Fichier**: `src/app/[locale]/(main)/home/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import Feed from "@/components/dashboard/Feed";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { getGlobalFeedAPI } from "@/lib/api/feed";
import { getToken } from "@/lib/auth/accountService";

async function getDashboardData() {
    try {
        // On essaie de récupérer le token, mais on ne bloque pas si c'est nul
        const token = await getToken().catch(() => null);

        // On appelle le feed global (qui est public, fonctionne avec ou sans token)
        const feedData = await getGlobalFeedAPI(0, 50, 'createdAt', 'desc', token);

        return {
            feed: feedData?.content || []
        };
    } catch (error) {
        console.error("Erreur lors du chargement du feed:", error);
        return { feed: [] };
    }
}

export default async function HomePage({ params }) {
    const { feed } = await getDashboardData();
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* WelcomeSection utilise le contexte utilisateur côté client */}
            <WelcomeSection />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("dashboard.news_and_events")}
                </h2>
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}
```

### /:locale (layout)

- **Fichier**: `src/app/[locale]/(main)/layout.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import UserContext from "@/context/UserContext";
import NavigationLoader from "@/components/shared/NavigationLoader";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        // Lire les données utilisateur depuis le localStorage (si disponibles)
        try {
            const userJson = localStorage.getItem('user');
            if (userJson) {
                setUserData(JSON.parse(userJson));
            }
            // Si pas de données utilisateur, on reste en mode visiteur (userData = null)
            // On ne redirige PAS vers login pour permettre l'accès public
        } catch (error) {
            console.error("Erreur de chargement de la session utilisateur:", error);
            // En cas d'erreur, on continue en mode visiteur
        } finally {
            setLoadingUser(false);
        }
    }, []);

    if (loadingUser) {
        return <NavigationLoader />;
    }

    // On rend la page même sans userData (mode visiteur)
    return (
        <UserContext.Provider value={{ user: userData, isLoading: loadingUser, setUser: setUserData }}>
            <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <AppHeader
                    isSidebarOpen={isSidebarOpen}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                    isAuthenticated={!!userData}
                />

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar visible uniquement pour les utilisateurs connectés */}
                    {userData && <AppSidebar isOpen={isSidebarOpen} />}
                    <main className={`flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 ${!userData ? 'w-full' : ''}`}>
                        {children}
                    </main>
                    {/* Notifications uniquement pour les utilisateurs connectés */}
                    {userData && (
                        <NotificationsPanel
                            isOpen={isNotificationOpen}
                            onClose={() => setIsNotificationOpen(false)}
                        />
                    )}
                </div>
            </div>
        </UserContext.Provider>
    );
}
```

### /:locale/loading (loading)

- **Fichier**: `src/app/[locale]/(main)/loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

### /:locale/syndicats (page)

- **Fichier**: `src/app/[locale]/(main)/syndicats/page.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import MySyndicatesHeader from "@/components/syndicats/SyndicateHeader";
import SyndicateList from "@/components/syndicats/SyndicateList";
import { getMySyndicatesAPI } from "@/lib/api/syndicates";

export default function MySyndicatesPage() {
    const t = useTranslations();
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const data = await getMySyndicatesAPI();
                setSyndicates(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des syndicats :", error);
                toast.error(t('syndicats_page.load_error') || "Impossible de charger vos syndicats.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, [t]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600 text-gray-300">
                        {t('syndicats_page.loading_text') || "Chargement de vos syndicats..."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 from-gray-900 via-blue-900/20 to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                <SyndicateList initialSyndicates={syndicates} />
            </div>
        </div>
    );
}
```

### /:locale (layout)

- **Fichier**: `src/app/[locale]/(marketing)/layout.js`
- **Type**: App Router, Composant Serveur

```jsx

import LandingPageHeader from '@/components/layout/LandingPageHeader';
import LandingPageFooter from '@/components/layout/LandingPageFooter';

export default function MarketingLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <LandingPageHeader />
            <main className="flex-grow">{children}</main>
            <LandingPageFooter />
        </div>
    );
}
```

### /:locale (page)

- **Fichier**: `src/app/[locale]/(marketing)/page.js`
- **Type**: App Router, Composant Serveur

```jsx
import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';

export default async function LandingPage({ params }) {
    const { locale } = await params;

    return (
        <div className="scroll-smooth">
            <HeroSection />
            <FeaturesSection />
            <ActivityFeed />
            <PopularSyndicates />
            <StatsSection />
        </div>
    );
}
```

### /:locale/syndicat-space/:syndicatId/chat (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/chat/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/chat/page.jsx
import {getTranslations} from 'next-intl/server';
import ChatClientV2 from "@/components/syndicate-space/section-chat/ChatClientV2";
import { getChatRoomsAPI, getChatRoomMembersAPI } from "@/lib/api/chat";

async function getChatData(syndicatId) {
    try {
        console.log(`Récupération des données de chat pour le syndicat ${syndicatId}...`);
        
        // Récupérer les salles de chat du syndicat
        const chatRooms = await getChatRoomsAPI(syndicatId);
        
        // Pour l'instant, créer une salle par défaut si aucune n'existe
        let rooms = chatRooms || [];
        if (rooms.length === 0) {
            rooms = [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: null,
                hasNotifications: true
            }];
        }
        
        // Récupérer les membres de la première salle pour l'affichage initial
        let members = [];
        if (rooms.length > 0) {
            try {
                members = await getChatRoomMembersAPI(syndicatId, rooms[0].id);
            } catch (error) {
                console.warn('Impossible de récupérer les membres:', error);
                members = [];
            }
        }
        
        return { 
            chats: rooms,
            messages: [], // Les messages seront chargés dynamiquement par room
            members: members
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de chat pour ${syndicatId}:`, error);
        
        // Fallback vers une salle par défaut en cas d'erreur
        return {
            chats: [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: 'Aucun message pour le moment',
                hasNotifications: true
            }],
            messages: [],
            members: []
        };
    }
}

export default async function ChatPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    const chatData = await getChatData(syndicatId);

    return (
        // Le layout de l'espace syndicat a déjà un padding, on enlève celui du composant principal
        <div className="h-full">
            <ChatClientV2 
                initialChats={chatData.chats}
                initialMembers={chatData.members}
            />
        </div>
    );
}
```

### /:locale/syndicat-space/:syndicatId/evenements (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(main)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import {getTranslations} from 'next-intl/server';
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";
import { getEventsAPI } from "@/lib/api/event";

async function getEvents(syndicatId) {
    try {
        console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);
        
        const eventsData = await getEventsAPI(syndicatId, 0, 20);
        
        // Vérifier si eventsData et eventsData.content existent
        if (!eventsData || !eventsData.content) {
            console.log('Aucun événement trouvé (réponse vide)');
            return [];
        }
        
        // Convertir les dates string en objets Date si nécessaire
        // L'API renvoie: date, startTime, endTime (pas startDate/endDate)
        const eventsWithDates = eventsData.content.map(event => ({
            ...event,
            // Mapper 'date' vers 'startDate' et 'endDate' pour compatibilité frontend
            startDate: event.date ? new Date(event.date) : new Date(),
            endDate: event.date ? new Date(event.date) : new Date(),
            createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
        }));
        
        console.log(`${eventsWithDates.length} événements récupérés`);
        return eventsWithDates;
    } catch (error) {
        console.error(`Erreur lors de la récupération des événements pour ${syndicatId}:`, error);
        
        // Si c'est une 404, c'est normal (pas d'événements)
        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé (404)');
            return [];
        }
        
        // Si c'est une 401, c'est un problème d'auth - on la laisse remonter
        if (error.response?.status === 401) {
            throw error;
        }
        
        // Pour les autres erreurs, fallback vers un tableau vide
        return [];
    }
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId);

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t('events_page.title')}
                    </h1>
                    <p className="text-lg text-gray-600 text-gray-400 max-w-2xl mx-auto">{t('events_page.subtitle')}</p>
                </div>
            </div>
            
            <EventsFeed initialEvents={initialEvents} syndicatId={syndicatId} />
        </div>
    );
}
```

### /:locale/syndicat-space/:syndicatId/exprimer (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/exprimer/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";
import { serverFetch } from "@/lib/api/instance";

async function getPublicationsData(syndicatId) {
    // BLINDAGE TOTAL : Aucun crash ne doit sortir de cette fonction
    try {
        // 1. Récupérer la branche
        const branchesRes = await serverFetch('get', `/syndicates/${syndicatId}/branches`).catch(() => null);
        const branches = branchesRes?.data || [];

        if (branches.length === 0) return [];

        const activeBranchId = branches[0].id;

        // 2. Récupérer les posts
        const postsData = await getPostsAPI(activeBranchId).catch(() => ({ content: [] }));
        return postsData?.content || [];

    } catch (error) {
        console.error("Erreur silencieuse sur le serveur (401 ou autre)");
        return []; // On renvoie un tableau vide, JAMAIS d'erreur
    }
}

export default async function ExprimerPage({ params }) {
    const { syndicatId } = await params;
    
    // On attend les données mais on sait qu'elles renverront au pire un []
    const initialPosts = await getPublicationsData(syndicatId);

    return (
        <div className="w-full">
            <PublicationsFeed 
                initialPosts={initialPosts} 
                syndicatId={syndicatId} 
            />
        </div>
    );
}
```

### /:locale/syndicat-space/:syndicatId/membres (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/membres/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import {getTranslations} from 'next-intl/server'; // CORRECTION : On importe le bon helper
import { getSyndicateMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId) {
    try {
        // Récupérer les détails du syndicat
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails) {
            console.warn(`Syndicate ${syndicateId} not found`);
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }

        // Gérer le cas où il n'y a pas de branches définies
        if (!syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            console.warn(`No branches found for syndicate ${syndicateId}`);
            return { 
                members: [], 
                requests: [], 
                branches: [], 
                stats: { total: 0, active: 0, pending: 0 },
                syndicateDetails 
            };
        }
        
        // Prendre la première branche comme référence
        const mainBranchId = syndicateDetails.branches[0].id;

        // Essayer de récupérer les membres et demandes, avec gestion d'erreur individuelle
        let members = [];
        let requests = [];

        try {
            // Utilise syndicateId au lieu de branchId (nouvelle route API)
            members = await getSyndicateMembersAPI(syndicateId);
        } catch (error) {
            console.warn(`Failed to fetch members for syndicate ${syndicateId}:`, error.message);
            // L'API peut ne pas être implémentée, on continue avec un tableau vide
            members = [];
        }

        try {
            requests = await getAdhesionRequestsAPI(syndicateId, mainBranchId);
        } catch (error) {
            console.warn(`Failed to fetch adhesion requests for branch ${mainBranchId}:`, error.message);
            // L'API peut ne pas être implémentée, on continue avec un tableau vide
            requests = [];
        }

        const stats = {
            total: (members?.length || 0) + (requests?.length || 0),
            active: members?.length || 0,
            pending: requests?.length || 0
        };

        return { 
            members: members || [], 
            requests: requests || [], 
            branches: syndicateDetails.branches || [], 
            stats,
            syndicateDetails 
        };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        // En cas d'erreur critique, retourner un état vide mais valide
        return { 
            members: [], 
            requests: [], 
            branches: [], 
            stats: { total: 0, active: 0, pending: 0 },
            error: error.message 
        };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    
    // Récupérer les données avec gestion d'erreur robuste
    const data = await getMembersData(syndicatId);

    // Si on n'arrive pas à récupérer les données de base du syndicat, alors 404
    // Mais si c'est juste les APIs membres qui échouent, on affiche quand même la page
    if (!data || (data.error && !data.syndicateDetails)) {
        notFound();
    }
    
    return (
        <div className="space-y-8">
            {data.error && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-sm text-blue-800 font-medium">
                            Chargement en cours... Certaines données peuvent apparaître progressivement.
                        </p>
                    </div>
                </div>
            )}
            
            <MembersClient 
                initialMembers={data.members || []}
                initialRequests={data.requests || []}
                branches={data.branches || []}
                stats={data.stats || { total: 0, active: 0, pending: 0 }}
                syndicatId={syndicatId}
            />
        </div>
    );
}
```

### /:locale/syndicat-space/:syndicatId/votes (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/votes/page.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Vote, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

export default function VotesPage({ params }) {
    const t = useTranslations('votes_page');
    const [votes, setVotes] = useState([]);

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-1">
                        Votes & Sondages
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Participez aux décisions de votre syndicat
                    </p>
                </div>
            </motion.div>

            {/* État vide */}
            {votes.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-12 text-center"
                >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Vote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                        Aucun vote en cours
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                        Les sondages et votes créés par les administrateurs apparaîtront ici.
                    </p>
                </motion.div>
            )}
        </div>
    );
}

```

### /:locale/syndicat-space/:syndicatId/:branchId/chat (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/chat/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/chat/page.jsx
import { getTranslations } from 'next-intl/server';
import ChatClientV2 from "@/components/syndicate-space/section-chat/ChatClientV2";
import { getChatRoomsAPI, getChatRoomMembersAPI } from "@/lib/api/chat";

async function getChatData(syndicatId, branchId) {
    try {
        console.log(`Récupération des données de chat pour le syndicat ${syndicatId}, branche ${branchId}...`);

        // Récupérer les salles de chat du syndicat
        const chatRooms = await getChatRoomsAPI(syndicatId);

        // Pour l'instant, créer une salle par défaut si aucune n'existe
        let rooms = chatRooms || [];
        if (rooms.length === 0) {
            rooms = [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: null,
                hasNotifications: true
            }];
        }

        // Récupérer les membres de la première salle pour l'affichage initial
        let members = [];
        if (rooms.length > 0) {
            try {
                members = await getChatRoomMembersAPI(syndicatId, rooms[0].id);
            } catch (error) {
                console.warn('Impossible de récupérer les membres:', error);
                members = [];
            }
        }

        return {
            chats: rooms,
            messages: [], // Les messages seront chargés dynamiquement par room
            members: members
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de chat pour ${syndicatId}:`, error);

        // Fallback vers une salle par défaut en cas d'erreur
        return {
            chats: [{
                id: 'general',
                name: 'Général',
                description: 'Discussion générale du syndicat',
                type: 'GENERAL',
                isPrivate: false,
                memberCount: 0,
                unreadCount: 0,
                lastMessageAt: null,
                lastMessagePreview: 'Aucun message pour le moment',
                hasNotifications: true
            }],
            messages: [],
            members: []
        };
    }
}

export default async function ChatPage({ params }) {
    const { locale, syndicatId, branchId } = await params;
    const t = await getTranslations();
    const chatData = await getChatData(syndicatId, branchId);

    return (
        <div className="h-full">
            <ChatClientV2
                initialChats={chatData.chats}
                initialMembers={chatData.members}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}

```

### /:locale/syndicat-space/:syndicatId/:branchId/evenements (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/evenements/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/evenements/page.jsx
import { getTranslations } from 'next-intl/server';
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";
import { getEventsAPI } from "@/lib/api/event";

async function getEvents(syndicatId, branchId) {
    try {
        console.log(`Récupération des événements pour le syndicat ${syndicatId}, branche ${branchId}...`);

        // On peut utiliser branchId pour filtrer les événements si l'API le supporte
        const eventsData = await getEventsAPI(syndicatId, 0, 20);

        if (!eventsData || !eventsData.content) {
            console.log('Aucun événement trouvé (réponse vide)');
            return [];
        }

        // Convertir les dates string en objets Date si nécessaire
        const eventsWithDates = eventsData.content.map(event => ({
            ...event,
            startDate: event.date ? new Date(event.date) : new Date(),
            endDate: event.date ? new Date(event.date) : new Date(),
            createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
        }));

        console.log(`${eventsWithDates.length} événements récupérés`);
        return eventsWithDates;
    } catch (error) {
        console.error(`Erreur lors de la récupération des événements pour ${syndicatId}:`, error);

        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé (404)');
            return [];
        }

        if (error.response?.status === 401) {
            throw error;
        }

        return [];
    }
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId, branchId } = await params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId, branchId);

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t('events_page.title')}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('events_page.subtitle')}
                    </p>
                </div>
            </div>

            <EventsFeed
                initialEvents={initialEvents}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}

```

### /:locale/syndicat-space/:syndicatId/:branchId/exprimer (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/exprimer/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/exprimer/page.jsx
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";

async function getPublicationsData(syndicatId, branchId) {
    // BLINDAGE TOTAL : Aucun crash ne doit sortir de cette fonction
    try {
        // Utiliser directement le branchId passé en paramètre
        if (!branchId) {
            console.warn('No branchId provided for publications');
            return [];
        }

        // Récupérer les posts pour cette branche
        const postsData = await getPostsAPI(branchId).catch(() => ({ content: [] }));
        return postsData?.content || [];

    } catch (error) {
        console.error("Erreur silencieuse sur le serveur (401 ou autre):", error);
        return []; // On renvoie un tableau vide, JAMAIS d'erreur
    }
}

export default async function ExprimerPage({ params }) {
    const { syndicatId, branchId } = await params;

    // On attend les données mais on sait qu'elles renverront au pire un []
    const initialPosts = await getPublicationsData(syndicatId, branchId);

    return (
        <div className="w-full">
            <PublicationsFeed
                initialPosts={initialPosts}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}

```

### /:locale/syndicat-space/:syndicatId/:branchId/membres (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/membres/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/membres/page.jsx
import { getTranslations } from 'next-intl/server';
import { getSyndicateMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId, branchId) {
    try {
        // Récupérer les détails du syndicat
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails) {
            console.warn(`Syndicate ${syndicateId} not found`);
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }

        // Gérer le cas où il n'y a pas de branches définies
        if (!syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            console.warn(`No branches found for syndicate ${syndicateId}`);
            return {
                members: [],
                requests: [],
                branches: [],
                stats: { total: 0, active: 0, pending: 0 },
                syndicateDetails
            };
        }

        // Utiliser le branchId passé en paramètre, ou la première branche par défaut
        const activeBranchId = branchId || syndicateDetails.branches[0].id;

        // Vérifier que la branche existe dans le syndicat
        const branchExists = syndicateDetails.branches.some(b => b.id === activeBranchId);
        if (!branchExists && branchId) {
            console.warn(`Branch ${branchId} not found in syndicate ${syndicateId}`);
        }

        // Essayer de récupérer les membres et demandes, avec gestion d'erreur individuelle
        let members = [];
        let requests = [];

        try {
            members = await getSyndicateMembersAPI(syndicateId);
        } catch (error) {
            console.warn(`Failed to fetch members for syndicate ${syndicateId}:`, error.message);
            members = [];
        }

        try {
            requests = await getAdhesionRequestsAPI(syndicateId, activeBranchId);
        } catch (error) {
            console.warn(`Failed to fetch adhesion requests for branch ${activeBranchId}:`, error.message);
            requests = [];
        }

        const stats = {
            total: (members?.length || 0) + (requests?.length || 0),
            active: members?.length || 0,
            pending: requests?.length || 0
        };

        return {
            members: members || [],
            requests: requests || [],
            branches: syndicateDetails.branches || [],
            stats,
            syndicateDetails,
            activeBranchId
        };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        return {
            members: [],
            requests: [],
            branches: [],
            stats: { total: 0, active: 0, pending: 0 },
            error: error.message
        };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId, branchId } = await params;
    const t = await getTranslations();

    // Récupérer les données avec gestion d'erreur robuste
    const data = await getMembersData(syndicatId, branchId);

    // Si on n'arrive pas à récupérer les données de base du syndicat, alors 404
    if (!data || (data.error && !data.syndicateDetails)) {
        notFound();
    }

    return (
        <div className="space-y-8">
            {data.error && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-sm text-blue-800 font-medium">
                            Chargement en cours... Certaines données peuvent apparaître progressivement.
                        </p>
                    </div>
                </div>
            )}

            <MembersClient
                initialMembers={data.members || []}
                initialRequests={data.requests || []}
                branches={data.branches || []}
                stats={data.stats || { total: 0, active: 0, pending: 0 }}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}

```

### /:locale/syndicat-space/:syndicatId/:branchId (layout)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/layout.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/layout.jsx

/**
 * Layout pour une branche spécifique d'un syndicat.
 * Ce layout passe simplement les enfants, car le layout parent [syndicatId]
 * gère déjà l'affichage global (sidebar, header, etc.)
 *
 * Les paramètres syndicatId et branchId sont disponibles via params
 * pour les pages enfants.
 */
export default async function BranchLayout({ children, params }) {
    const { syndicatId, branchId } = await params;

    // On peut ajouter ici une validation du branchId si nécessaire
    // Pour l'instant, on passe simplement les enfants

    return children;
}

```

### /:locale/syndicat-space/:syndicatId (layout)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx

import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout';
import LoadingErrorPage from '@/components/syndicate-space/LoadingErrorPage';

async function getSyndicateData(syndicateId) {
    try {
        const data = await getSyndicateDetailsAPI(syndicateId);
        return { data, error: null };
    } catch (error) {
        console.error(`Failed to fetch syndicate data for ID ${syndicateId}:`, error);
        
        // 404 = syndicat n'existe pas
        if (error.response && error.response.status === 404) {
            notFound();
        }
        
        // Toutes les autres erreurs (timeout, réseau, etc.) = page d'erreur élégante
        return { data: null, error: 'loading_error' };
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = await params;
    const { data: syndicateData, error } = await getSyndicateData(syndicatId);

    // Erreur de chargement = page d'erreur élégante
    if (error === 'loading_error') {
        return <LoadingErrorPage />;
    }

    // Pas de données = 404
    if (!syndicateData) {
        notFound();
    }

    return (
        <SyndicateSpaceClientLayout syndicateData={syndicateData}>
            {children}
        </SyndicateSpaceClientLayout>
    );
}
```

### /:locale/syndicat-space/:syndicatId (page)

- **Fichier**: `src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/page.jsx
import { redirect } from 'next/navigation';

/**
 * C'est la page d'accueil pour un espace syndicat.
 * Son seul rôle est de rediriger l'utilisateur vers la première section par défaut,
 * par exemple, la page "membres".
 */
export default async function SyndicateRootPage({ params }) {
    const { syndicatId } = await params;

    // Redirige de /syndicat-space/1 vers /syndicat-space/1/membres
    redirect(`/syndicat-space/${syndicatId}/membres`);

    // Comme redirect() lance une erreur spéciale, le code ci-dessous ne sera jamais exécuté.
    // Mais il est bon de retourner null pour la complétude.
    return null;
}
```

### /:locale (layout)

- **Fichier**: `src/app/[locale]/layout.js`
- **Type**: App Router, Composant Serveur
- **Metadata**: Oui

```jsx
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

async function getMessages(locale) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { locale } = await params; // Ajout d'await ici
  return {
    title: 'U-Gate',
    description: 'Votre application U-Gate',
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // Ajout d'await ici
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### /:locale/loading (loading)

- **Fichier**: `src/app/[locale]/loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

### /layout (layout)

- **Fichier**: `src/app/layout.js`
- **Type**: App Router, Composant Serveur

```jsx
export default function RootLayout({ children }) {
  return children;
}
```

### /page (page)

- **Fichier**: `src/app/page.js`
- **Type**: App Router, Composant Serveur

```jsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/fr');
}
```

## Routes & Logique API

### `/api/auth`

- **Fichier**: `src/lib/api/auth.js`
- **Fonctions/Méthodes exportées**: loginWithIdentifier, registerWithEmail, updateUser, logout, loginWithGoogle, loginWithApple

```typescript
import axios from './instance';
//import axios from 'axios';
import { getUserSyndicatesAPI } from './syndicates';
import { getMySyndicatesAPI } from './syndicates';
import { setCookie, deleteCookie } from '../utils/cookies';

export const loginWithIdentifier = async (identifier, password) => {
   // const response = await axios.post('/auth/login', { identifier, password });
   const response = await axios.post('https://auth-service.pynfi.com/api/auth/login', { 
    identifier, 
    password 
});
if (response.data?.accessToken) {
        const token = response.data.accessToken;
        
        // 2. STOCKAGE IMMÉDIAT
        localStorage.setItem('accessToken', token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setCookie('accessToken', token, 7);

        // 3. RÉCUPÉRATION DU SYNDICAT (OPTIONNEL ET SÉCURISÉ)
        try {
            const mySyndicates = await getMySyndicatesAPI();
            if (mySyndicates && mySyndicates.length > 0) {
                const assignedId = mySyndicates[0].id;
                localStorage.setItem('syndicatId', assignedId);
                response.data.assignedSyndicatId = assignedId;
            }
        } catch (e) {
            console.warn("L'utilisateur n'a pas encore de syndicat assigné.");
        }
    }
    return response.data;
};
export const registerWithEmail = async (userData, profileFile = null) => {
    const formData = new FormData();

    // 1. On prépare l'objet 'data' tel que demandé par Swagger
    // On le transforme en Blob JSON pour que le backend le reconnaisse comme du JSON
    const dataBlob = new Blob([JSON.stringify(userData)], {
        type: 'application/json'
    });
    
    formData.append('data', dataBlob);

    // 2. On ajoute le fichier s'il existe
    if (profileFile) {
        formData.append('file', profileFile);
    }

    // 3. Envoi avec axios
    const response = await axios.post('/auth/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    // Logique des cookies (inchangée)
    if (response.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setCookie('accessToken', response.data.accessToken, 7);
        setCookie('refreshToken', response.data.refreshToken, 30);
    }
    
    return response.data;
};

export const updateUser = async (userId, userData) => {
    // L'intercepteur Axios injectera automatiquement le token Bearer
    const response = await axios.put(`/users/${userId}`, userData);
    
    // Mettre à jour les informations utilisateur dans le localStorage si la réponse contient des données
    if (response.data) {
        // Récupérer l'objet utilisateur existant pour conserver les infos non modifiées (rôles, etc.)
        const existingUser = JSON.parse(localStorage.getItem('user')) || {};
        const updatedUser = { ...existingUser, ...response.data };
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    return response.data;
};

// Fonction utilitaire pour obtenir la langue courante
const getCurrentLocale = () => {
    if (typeof window === 'undefined') return 'fr'; // défaut côté serveur
    
    const path = window.location.pathname;
    const locale = path.split('/')[1];
    
    // Vérifier si c'est une langue supportée
    if (['fr', 'en', 'de'].includes(locale)) {
        return locale;
    }
    return 'fr'; // défaut
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('syndicatId');
    localStorage.removeItem('email'); // Nettoyage de l'ancienne clé
    // Supprimer aussi les cookies
    deleteCookie('accessToken');
    deleteCookie('refreshToken');

    // Rediriger l'utilisateur en préservant la langue
    if (typeof window !== 'undefined') {
        const locale = getCurrentLocale();
        window.location.href = `/${locale}/login`;
    }
};

export const loginWithGoogle = async (authCode) => {
    return Promise.reject(new Error("Login Google non implémenté."));
};

export const loginWithApple = async (authCode) => {
    return Promise.reject(new Error("Login Apple non implémenté."));
};
```

### `/api/chat`

- **Fichier**: `src/lib/api/chat.js`
- **Fonctions/Méthodes exportées**: getChatRoomsAPI, createChatRoomAPI, getChatRoomDetailsAPI, deleteChatRoomAPI, getChatRoomMembersAPI, joinChatRoomAPI, leaveChatRoomAPI, addMemberToChatRoomAPI, removeMemberFromChatRoomAPI, getChatMessagesAPI, sendChatMessageAPI, editChatMessageAPI, deleteChatMessageAPI, addReactionToChatMessageAPI, removeReactionFromChatMessageAPI, markChatMessagesAsReadAPI, updateTypingStatusAPI

```typescript
// src/lib/api/chat.js
import apiInstance from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

// ===== GESTION DES SALLES =====

/**
 * Récupère toutes les salles de chat d'un syndicat
 * @param {string} syndicateId - ID du syndicat
 * @returns {Promise} Promesse contenant la liste des salles
 */
export const getChatRoomsAPI = async (syndicateId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les salles de chat');
    }
};

/**
 * Crée une nouvelle salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {Object} roomData - Données de la salle
 * @returns {Promise} Promesse contenant la salle créée
 */
export const createChatRoomAPI = async (syndicateId, roomData) => {
    try {
        const response = await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms`, roomData);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de créer la salle de chat');
    }
};

/**
 * Récupère les détails d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse contenant les détails de la salle
 */
export const getChatRoomDetailsAPI = async (syndicateId, roomId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les détails de la salle');
    }
};

/**
 * Supprime une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const deleteChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la salle de chat');
    }
};

// ===== GESTION DES MEMBRES =====

/**
 * Récupère les membres d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse contenant la liste des membres
 */
export const getChatRoomMembersAPI = async (syndicateId, roomId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les membres de la salle');
    }
};

/**
 * Rejoint une salle de chat publique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const joinChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/join`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de rejoindre la salle de chat');
    }
};

/**
 * Quitte une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const leaveChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/leave`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de quitter la salle de chat');
    }
};

/**
 * Ajoute un membre à une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} userId - ID de l'utilisateur à ajouter
 * @returns {Promise} Promesse vide
 */
export const addMemberToChatRoomAPI = async (syndicateId, roomId, userId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members/${userId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'ajouter le membre à la salle');
    }
};

/**
 * Supprime un membre d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} userId - ID de l'utilisateur à supprimer
 * @returns {Promise} Promesse vide
 */
export const removeMemberFromChatRoomAPI = async (syndicateId, roomId, userId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members/${userId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer le membre de la salle');
    }
};

// ===== GESTION DES MESSAGES =====

/**
 * Récupère les messages d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getChatMessagesAPI = async (syndicateId, roomId, page = 0, size = 50) => {
    try {
        const params = { page, size };
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages`, { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les messages');
    }
};

/**
 * Envoie un message dans une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {Object} messageData - Données du message
 * @returns {Promise} Promesse contenant le message envoyé
 */
export const sendChatMessageAPI = async (syndicateId, roomId, messageData) => {
    try {
        const response = await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages`, messageData);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'envoyer le message');
    }
};

/**
 * Édite un message existant
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} newContent - Nouveau contenu du message
 * @returns {Promise} Promesse contenant le message modifié
 */
export const editChatMessageAPI = async (syndicateId, roomId, messageId, newContent) => {
    try {
        const response = await apiInstance.put(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}`, newContent);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de modifier le message');
    }
};

/**
 * Supprime un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @returns {Promise} Promesse vide
 */
export const deleteChatMessageAPI = async (syndicateId, roomId, messageId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer le message');
    }
};

// ===== RÉACTIONS ET STATUTS =====

/**
 * Ajoute une réaction à un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} reaction - Emoji de réaction
 * @returns {Promise} Promesse vide
 */
export const addReactionToChatMessageAPI = async (syndicateId, roomId, messageId, reaction) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}/reactions`, null, {
            params: { reaction }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'ajouter la réaction');
    }
};

/**
 * Supprime une réaction d'un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} reaction - Emoji de réaction
 * @returns {Promise} Promesse vide
 */
export const removeReactionFromChatMessageAPI = async (syndicateId, roomId, messageId, reaction) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}/reactions`, {
            params: { reaction }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la réaction');
    }
};

/**
 * Marque les messages comme lus
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} lastMessageId - ID du dernier message lu
 * @returns {Promise} Promesse vide
 */
export const markChatMessagesAsReadAPI = async (syndicateId, roomId, lastMessageId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/read`, null, {
            params: { lastMessageId }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer les messages comme lus');
    }
};

/**
 * Met à jour le statut "en train d'écrire"
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {boolean} isTyping - Statut en train d'écrire
 * @returns {Promise} Promesse vide
 */
export const updateTypingStatusAPI = async (syndicateId, roomId, isTyping) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/typing`, null, {
            params: { isTyping }
        });
    } catch (error) {
        // Ne pas lancer d'erreur pour le statut typing (non critique)
        console.warn('Impossible de mettre à jour le statut typing:', error);
    }
};
```

### `/api/event`

- **Fichier**: `src/lib/api/event.js`
- **Fonctions/Méthodes exportées**: getEventsAPI, createEventAPI, joinEventAPI, leaveEventAPI, getEventParticipantsAPI, getRecentPublicEventsAPI

```typescript
// src/lib/api/event.js
import { ugateInstance, serverFetch } from './instance'; // BIEN UTILISER ugateInstance

/**
 * Récupère les événements d'une branche avec pagination
 */
export const getEventsAPI = async (branchId, page = 0, size = 20, sortBy = 'date', sortDirection = 'ASC') => {
    try {
        if (typeof window === 'undefined') {
            const response = await serverFetch('get', `/events/branch/${branchId}`, null, {
                params: { page, size, sortBy, sortDirection },
                timeout: 15000 
            });
            const events = Array.isArray(response.data) ? response.data : [];
            return { content: events, totalElements: events.length, totalPages: 1, size, number: page };
        }

        const response = await ugateInstance.get(`/events/branch/${branchId}`, {
            params: { page, size, sortBy, sortDirection }
        });

        const events = Array.isArray(response.data) ? response.data : [];
        return { content: events, totalElements: events.length, totalPages: 1, size, number: page };

    } catch (error) {
        console.error(`⚠️ Erreur Events pour la branche ${branchId}:`, error.message);
        return { content: [], totalElements: 0, totalPages: 0, size, number: page };
    }
};

/**
 * Crée un nouvel événement (MULTIPART/FORM-DATA)
 */
export const createEventAPI = async (branchId, eventData, imageFiles = []) => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        // --- SÉCURITÉ : VÉRIFICATION DES IDS ---
        if (!user.id || !branchId) {
            throw new Error(`Identifiants manquants: creatorId=${user.id}, branchId=${branchId}`);
        }

        const formData = new FormData();

        // Ajout des champs en s'assurant qu'ils ne sont pas "null"
        formData.append('creatorId', user.id);
        formData.append('branchId', branchId);
        formData.append('title', eventData.title || "Sans titre");
        formData.append('description', eventData.description || "");
        formData.append('location', eventData.location || "Non spécifié");

        // Format Date (YYYY-MM-DD)
        const dateObj = new Date(eventData.startDate);
        const formattedDate = isNaN(dateObj) ? new Date().toISOString().split('T')[0] : dateObj.toISOString().split('T')[0];
        formData.append('eventDate', formattedDate);

        // Format Heure (HH:MM)
        const formatTime = (time) => {
            if (!time) return "09:00";
            const parts = time.split(':');
            return `${parts[0].padStart(2, '0')}:${(parts[1] || '00').padStart(2, '0')}`;
        };
        formData.append('startTime', formatTime(eventData.startTime));
        formData.append('endTime', formatTime(eventData.endTime));

        // Ajout des images (le champ doit s'appeler "images" selon ton Swagger)
        if (imageFiles && imageFiles.length > 0) {
            imageFiles.forEach(file => {
                if (file) formData.append('images', file);
            });
        }

        // --- APPEL DIRECT AU SERVEUR SANS PASSER PAR LE PROXY ---
        // On utilise ugateInstance mais on force l'URL complète pour tester
        const response = await ugateInstance.post('https://ugate.pynfi.com/events', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        return response.data;
    } catch (error) {
        console.error("Détail complet de l'erreur reçue du serveur :");
        console.error(error.response?.data); // C'est ici que tu verras le vrai message
        throw error;
    }
};

/**
 * Permet à l'utilisateur connecté de rejoindre un événement
 * @param {string} eventId - UUID de l'événement
 */
export const joinEventAPI = async (eventId) => {
    try {
        const response = await ugateInstance.post(`/events/${eventId}/join`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la participation à l'événement:", error.response?.data || error.message);
        throw error;
    }
};

/**
 * Quitter un événement
 */
export const leaveEventAPI = async (eventId) => {
    await ugateInstance.delete(`/events/${eventId}/leave`);
};

/**
 * Récupère les participants
 */
export const getEventParticipantsAPI = async (eventId) => {
    const response = await ugateInstance.get(`/events/${eventId}/participants`);
    return response.data;
};

/**
 * Feed global pour la landing page
 */
export const getRecentPublicEventsAPI = async (size = 5) => {
    try {
        const response = await ugateInstance.get('/feed/global', {
            params: { page: 0, size: size, sortBy: 'createdAt', sortDirection: 'desc' }
        });
        
        if (response.data?.content) {
            return response.data.content.filter(item => item.eventId && !item.postId);
        }
        return [];
    } catch (error) {
        return [];
    }
};


```

### `/api/feed`

- **Fichier**: `src/lib/api/feed.js`
- **Fonctions/Méthodes exportées**: getUserFeedAPI, getGlobalFeedAPI, getSyndicateFeedAPI

```typescript
// src/lib/api/feed.js
import { ugateInstance }  from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

/**
 * Récupère le feed personnalisé de l'utilisateur connecté
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getUserFeedAPI = async (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc') => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const response = await ugateInstance.get('/feed', { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer le feed personnalisé');
    }
};

/**
 * Récupère le feed global public
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getGlobalFeedAPI = async (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc', token = null) => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const config = { 
            params,
            // On augmente le timeout spécifiquement pour cet appel
            timeout: 20000 
        };

        if (token) {
            config.headers = { 'Authorization': `Bearer ${token}` };
        }

        const response = await ugateInstance.get('/feed/global', config);
        return processPaginatedResponse(response);

    } catch (error) {
        // ICI : On log l'erreur proprement au lieu de faire "throw"
        // Cela empêche l'apparition du gros bloc d'erreur rouge AggregateError
        console.error('⚠️ Le serveur API est injoignable par votre PC (Timeout).');
        
        // On renvoie une structure vide pour que le dashboard s'affiche quand même
        return { 
            content: [], 
            totalPages: 0, 
            totalElements: 0 
        };
    }
};

/**
 * Récupère le feed d'un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getSyndicateFeedAPI = async (syndicateId, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc') => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const response = await ugateInstance.get(`/syndicates/${syndicateId}/feed`, { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, `Impossible de récupérer le feed du syndicat ${syndicateId}`);
    }
};
```

### `/api/helpers`

- **Fichier**: `src/lib/api/helpers.js`
- **Fonctions/Méthodes exportées**: handleAPIError, safeAPICall, createPaginationParams, processPaginatedResponse, validateData, apiCache, cachedAPICall, debounce, retryAPICall

```typescript
/**
 * Utilitaires pour les appels API et la gestion des erreurs
 */

/**
 * Gère les erreurs d'API de manière standardisée
 * @param {Error} error - Erreur capturée
 * @param {string} context - Contexte de l'erreur pour le debug
 * @returns {Object} Objet d'erreur formaté
 */
export const handleAPIError = (error, context = 'API Call') => {
    console.error(`[${context}] Error:`, error);
    
    if (error.response) {
        // Erreur avec réponse du serveur
        const { status, data } = error.response;
        
        switch (status) {
            case 400:
                return {
                    type: 'VALIDATION_ERROR',
                    message: data.message || 'Données invalides',
                    details: data.errors || null
                };
            case 401:
                return {
                    type: 'UNAUTHORIZED',
                    message: 'Session expirée. Veuillez vous reconnecter.',
                    shouldRedirect: true
                };
            case 403:
                return {
                    type: 'FORBIDDEN',
                    message: 'Vous n\'avez pas les permissions nécessaires'
                };
            case 404:
                return {
                    type: 'NOT_FOUND',
                    message: 'Ressource non trouvée'
                };
            case 429:
                return {
                    type: 'RATE_LIMITED',
                    message: 'Trop de requêtes. Veuillez patienter.'
                };
            case 500:
                return {
                    type: 'SERVER_ERROR',
                    message: 'Erreur serveur. Veuillez réessayer.'
                };
            default:
                return {
                    type: 'UNKNOWN_ERROR',
                    message: data.message || 'Une erreur inattendue s\'est produite'
                };
        }
    } else if (error.request) {
        // Erreur réseau
        return {
            type: 'NETWORK_ERROR',
            message: 'Problème de connexion. Vérifiez votre connexion internet.'
        };
    } else {
        // Erreur dans la configuration de la requête
        return {
            type: 'REQUEST_ERROR',
            message: 'Erreur dans la requête'
        };
    }
};

/**
 * Wrapper pour les appels API avec gestion d'erreur standardisée
 * @param {Function} apiCall - Fonction d'appel API
 * @param {string} context - Contexte pour le debug
 * @returns {Promise} Résultat de l'API ou erreur formatée
 */
export const safeAPICall = async (apiCall, context) => {
    try {
        return await apiCall();
    } catch (error) {
        throw handleAPIError(error, context);
    }
};

/**
 * Crée des paramètres de pagination standardisés
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri
 * @returns {Object} Paramètres de pagination
 */
export const createPaginationParams = (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    return {
        page: Math.max(0, page),
        size: Math.min(Math.max(1, size), 100), // Limiter entre 1 et 100
        sortBy,
        sortDirection: ['ASC', 'DESC'].includes(sortDirection) ? sortDirection : 'DESC'
    };
};

/**
 * Traite les résultats paginés pour assurer la cohérence
 * @param {Object} response - Réponse de l'API
 * @returns {Object} Résultats paginés formatés
 */
export const processPaginatedResponse = (response) => {
    return {
        content: response.content || [],
        page: response.page || 0,
        size: response.size || 20,
        totalElements: response.totalElements || 0,
        totalPages: response.totalPages || Math.ceil((response.totalElements || 0) / (response.size || 20)),
        hasNext: response.hasNext || false,
        hasPrevious: response.hasPrevious || false,
        isFirst: response.isFirst !== undefined ? response.isFirst : response.page === 0,
        isLast: response.isLast !== undefined ? response.isLast : !response.hasNext
    };
};

/**
 * Valide les données avant envoi à l'API
 * @param {Object} data - Données à valider
 * @param {Object} schema - Schema de validation
 * @returns {Object} Résultat de validation
 */
export const validateData = (data, schema) => {
    const errors = {};
    
    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];
        
        if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
            errors[field] = `${field} est requis`;
            continue;
        }
        
        if (value && rules.minLength && value.length < rules.minLength) {
            errors[field] = `${field} doit contenir au moins ${rules.minLength} caractères`;
        }
        
        if (value && rules.maxLength && value.length > rules.maxLength) {
            errors[field] = `${field} ne peut pas dépasser ${rules.maxLength} caractères`;
        }
        
        if (value && rules.pattern && !rules.pattern.test(value)) {
            errors[field] = rules.message || `${field} n'est pas valide`;
        }
        
        if (value && rules.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors[field] = `${field} doit être un email valide`;
        }
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Cache simple pour les appels API
 */
class APICache {
    constructor(ttl = 5 * 60 * 1000) { // 5 minutes par défaut
        this.cache = new Map();
        this.ttl = ttl;
    }
    
    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        
        return item.data;
    }
    
    set(key, data) {
        this.cache.set(key, {
            data,
            expiry: Date.now() + this.ttl
        });
    }
    
    clear() {
        this.cache.clear();
    }
    
    delete(key) {
        this.cache.delete(key);
    }
}

export const apiCache = new APICache();

/**
 * Wrapper pour les appels API avec cache
 * @param {string} key - Clé de cache
 * @param {Function} apiCall - Fonction d'appel API
 * @param {number} ttl - Durée de vie du cache en ms
 * @returns {Promise} Résultat de l'API (depuis le cache ou frais)
 */
export const cachedAPICall = async (key, apiCall, ttl) => {
    const cached = apiCache.get(key);
    if (cached) {
        return cached;
    }
    
    const result = await apiCall();
    apiCache.set(key, result);
    return result;
};

/**
 * Debounce pour les appels API de recherche
 * @param {Function} func - Fonction à debouncer
 * @param {number} delay - Délai en ms
 * @returns {Function} Fonction debouncée
 */
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};

/**
 * Retry automatique pour les appels API qui échouent
 * @param {Function} apiCall - Fonction d'appel API
 * @param {number} maxRetries - Nombre maximum de tentatives
 * @param {number} delay - Délai entre les tentatives en ms
 * @returns {Promise} Résultat de l'API ou erreur finale
 */
export const retryAPICall = async (apiCall, maxRetries = 3, delay = 1000) => {
    let lastError;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await apiCall();
        } catch (error) {
            lastError = error;
            
            // Ne pas réessayer pour certains types d'erreurs
            if (error.response && [400, 401, 403, 404].includes(error.response.status)) {
                break;
            }
            
            if (i < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i))); // Backoff exponentiel
            }
        }
    }
    
    throw lastError;
};
```

### `/api/index`

- **Fichier**: `src/lib/api/index.js`
- **Fonctions/Méthodes exportées**: (fonctions exportées)

```typescript
/**
 * Index centralisé pour tous les appels API
 * Facilite l'importation et la maintenance des endpoints
 */

// Authentification
export * from './auth';

// Syndicats
export * from './syndicate';

// Publications
export * from './posts';

// Événements
export * from './event';

// Adhésions/Membres
export * from './membership';

// Utilisateur
export * from './user';

// Votes
export * from './vote';

// Feed
export * from './feed';

// Marketplace - Produits
export * from './products';

// Marketplace - Services
export * from './services';

// Recherche
export * from './search';

// Utilitaires
export * from './helpers';

// Instance Axios
export { default as apiClient } from './instance';
```

### `/api/instance`

- **Fichier**: `src/lib/api/instance.js`
- **Fonctions/Méthodes exportées**: ugateInstance, serverFetch

```typescript
import axios from 'axios';

const UGATE_URL = 'https://ugate.pynfi.com';
const AUTH_URL = 'https://auth-service.pynfi.com/api';

export const ugateInstance = axios.create({
    baseURL: UGATE_URL,
    timeout: 15000,
});

// Intercepteur unique et simple
ugateInstance.interceptors.request.use(async (config) => {
    let token = null;
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        token = (await cookies()).get('accessToken')?.value;
    } else {
        token = localStorage.getItem('accessToken');
    }
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const serverFetch = (method, url, data = null, config = {}) => {
    return ugateInstance.request({ method, url, data, ...config });
};

export default axios.create({ baseURL: AUTH_URL });
```

### `/api/membership`

- **Fichier**: `src/lib/api/membership.js`
- **Fonctions/Méthodes exportées**: requestAdhesionAPI, getSyndicateMembersAPI, getBranchMembersAPI, getAdhesionRequestsAPI, respondToAdhesionAPI, processAdhesionRequestAPI, getAdhesionRequestDetailsAPI, addMemberToBranchAPI, updateMemberRoleAPI

```typescript
// src/lib/api/membership.js
import { ugateInstance, serverFetch } from './instance';

/**
 * Demande d'adhésion à un syndicat (Route USER)
 * POST /syndicates/{syndicatId}/memberships/request
 */
export const requestAdhesionAPI = async (syndicatId, requestData) => {
    try {
        const response = await ugateInstance.post(
            `/syndicates/${syndicatId}/memberships/request`,
            requestData
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la demande d'adhésion:", error.message);
        throw error;
    }
};

// ============================================================
// ROUTES ADMIN (compatibles avec le code existant)
// ============================================================

/**
 * Récupère tous les membres d'un syndicat
 * GET /admin/syndicates/{syndicatId}/members
 *
 * Note: L'ancienne route /memberships/members/{branchId} n'existe plus
 * Cette fonction utilise syndicatId au lieu de branchId
 */
export const getSyndicateMembersAPI = async (syndicatId) => {
    try {
        const response = await serverFetch('get', `/admin/syndicates/${syndicatId}/members`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération membres:", error.message);
        return [];
    }
};

/**
 * @deprecated Compatibilité - utilise getSyndicateMembersAPI en interne
 * L'ancienne route /memberships/members/{branchId} n'existe plus
 */
export const getBranchMembersAPI = async (branchId) => {
    // Cette route n'existe plus, on retourne un tableau vide
    // Le code doit migrer vers getSyndicateMembersAPI(syndicatId)
    console.warn('getBranchMembersAPI: Route obsolète. Utilisez getSyndicateMembersAPI(syndicatId)');
    return [];
};

/**
 * Récupère les demandes d'adhésion d'une branche
 * GET /admin/syndicates/{syndicatId}/branches/{branchId}/requests
 */
export const getAdhesionRequestsAPI = async (syndicatId, branchId) => {
    try {
        const response = await serverFetch(
            'get',
            `/admin/syndicates/${syndicatId}/branches/${branchId}/requests`
        );
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération demandes:", error.message);
        return [];
    }
};

/**
 * Traite une demande d'adhésion (approuver/rejeter)
 * POST /admin/syndicates/requests/{requestId}/process
 *
 * Signature compatible avec l'ancien code:
 * respondToAdhesionAPI(syndicatId, branchId, userId, approved)
 *
 * Note: Le Swagger attend un requestId, pas syndicatId/branchId/userId
 * Pour l'instant on garde l'ancienne signature mais il faudra adapter
 */
export const respondToAdhesionAPI = async (syndicatId, branchId, userId, approved) => {
    try {
        // L'API attend maintenant un requestId et non pas syndicatId/branchId/userId
        // On construit un requestId fictif ou on utilise userId comme requestId temporairement
        // TODO: Adapter quand on aura le vrai requestId depuis getAdhesionRequestsAPI
        const response = await ugateInstance.post(
            `/admin/syndicates/requests/${userId}/process`,
            { approved: approved }
        );
        return response.data;
    } catch (error) {
        console.error("Erreur traitement demande:", error.message);
        throw error;
    }
};

/**
 * Nouvelle signature pour respondToAdhesion (recommandée)
 * POST /admin/syndicates/requests/{requestId}/process
 */
export const processAdhesionRequestAPI = async (requestId, approvalData) => {
    const response = await ugateInstance.post(
        `/admin/syndicates/requests/${requestId}/process`,
        approvalData
    );
    return response.data;
};

/**
 * Récupère les détails d'une demande spécifique
 * GET /admin/syndicates/requests/{requestId}
 */
export const getAdhesionRequestDetailsAPI = async (requestId) => {
    const response = await ugateInstance.get(`/admin/syndicates/requests/${requestId}`);
    return response.data;
};

/**
 * Ajoute un membre à une branche
 * POST /admin/syndicates/{syndicatId}/branches/{branchId}/members/add
 */
export const addMemberToBranchAPI = async (syndicatId, branchId, memberData) => {
    const response = await ugateInstance.post(
        `/admin/syndicates/${syndicatId}/branches/${branchId}/members/add`,
        memberData
    );
    return response.data;
};

/**
 * Change le rôle d'un membre
 * PATCH /admin/syndicates/{syndicatId}/members/{userId}/role
 */
export const updateMemberRoleAPI = async (syndicatId, userId, roleData) => {
    const response = await ugateInstance.patch(
        `/admin/syndicates/${syndicatId}/members/${userId}/role`,
        roleData
    );
    return response.data;
};

```

### `/api/notifications`

- **Fichier**: `src/lib/api/notifications.js`
- **Fonctions/Méthodes exportées**: getNotificationsAPI, markNotificationAsReadAPI, markAllNotificationsAsReadAPI, getUnreadNotificationsCountAPI, deleteNotificationAPI

```typescript
// src/lib/api/notifications.js
import apiInstance from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

/**
 * Récupère les notifications de l'utilisateur connecté
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {boolean} unreadOnly - Filtrer uniquement les notifications non lues
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getNotificationsAPI = async (page = 0, size = 20, unreadOnly = false) => {
    try {
        const params = {
            page,
            size,
            unreadOnly
        };
        
        const response = await apiInstance.get('/notifications', { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les notifications');
    }
};

/**
 * Marque une notification comme lue
 * @param {string} notificationId - ID de la notification
 * @returns {Promise} Promesse vide
 */
export const markNotificationAsReadAPI = async (notificationId) => {
    try {
        await apiInstance.post(`/notifications/${notificationId}/mark-read`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer la notification comme lue');
    }
};

/**
 * Marque toutes les notifications comme lues
 * @returns {Promise} Promesse vide
 */
export const markAllNotificationsAsReadAPI = async () => {
    try {
        await apiInstance.post('/notifications/mark-all-read');
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer toutes les notifications comme lues');
    }
};

/**
 * Obtient le nombre de notifications non lues
 * @returns {Promise} Promesse contenant le nombre
 */
export const getUnreadNotificationsCountAPI = async () => {
    try {
        const response = await apiInstance.get('/notifications/unread-count');
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer le nombre de notifications non lues');
    }
};

/**
 * Supprime une notification
 * @param {string} notificationId - ID de la notification
 * @returns {Promise} Promesse vide
 */
export const deleteNotificationAPI = async (notificationId) => {
    try {
        await apiInstance.delete(`/notifications/${notificationId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la notification');
    }
};
```

### `/api/posts`

- **Fichier**: `src/lib/api/posts.js`
- **Fonctions/Méthodes exportées**: getPostsAPI, createPostAPI, likePostAPI, addCommentAPI, getCommentsAPI, getRecentPublicPostsAPI, addReactionAPI

```typescript
// src/lib/api/posts.js
import { ugateInstance, serverFetch } from './instance'; 

/**
 * Récupérer les posts d'une branche
 */
export const getPostsAPI = async (branchId, page = 0, size = 20) => {
    try {
        if (!branchId) return { content: [] };

        if (typeof window === 'undefined') {
            const res = await serverFetch('get', `/publications/branch/${branchId}`, null, { params: { page, size } });
            return res.data || { content: [] };
        }
        const res = await ugateInstance.get(`/publications/branch/${branchId}`, { params: { page, size } });
        return res.data || { content: [] };
    } catch (error) {
        console.error("Erreur API Posts");
        return { content: [] };
    }
};

/**
 * Créer une publication
 */
export const createPostAPI = async (formData) => {
    // Utilise explicitement ugateInstance
    const res = await ugateInstance.post('/publications', formData, { 
        headers: { 'Content-Type': 'multipart/form-data' } 
    });
    return res.data;
};

/**
 * Like / Unlike
 */
export const likePostAPI = async (branchId, postId, liked) => {
    // Changé 'axios' par 'ugateInstance'
    return await ugateInstance.post(`/publications/${postId}/like?liked=${liked}`);
};

/**
 * Ajouter un commentaire (Format Multipart/Form-Data selon Swagger)
 */
export const addCommentAPI = async (publicationId, content, imageFile = null, parentId = null) => {
    try {
        const formData = new FormData();
        formData.append('content', content);

        // On n'ajoute parentId QUE s'il existe vraiment (réponse à un message)
        // Surtout ne pas envoyer "string" ou ""
        if (parentId) {
            formData.append('parentId', parentId);
        }

        // Ajout de l'image optionnelle
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const response = await ugateInstance.post(
            `/publications/${publicationId}/comments`, 
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        
        return response.data;
    } catch (error) {
        console.error("Erreur ajout commentaire:", error.message);
        throw error;
    }
};
/**
 * Récupérer les commentaires
 */
export const getCommentsAPI = async (branchId, publicationId, page = 0, size = 20) => {
    // Changé 'axios' par 'ugateInstance'
    const response = await ugateInstance.get(`/publications/${publicationId}/comments`, { 
        params: { page, size } 
    });
    return response.data;
};

/**
 * Posts récents pour la landing
 */
export const getRecentPublicPostsAPI = async (size = 5) => {
    try {
        const res = await ugateInstance.get('/feed/global', { 
            params: { page: 0, size, sortBy: 'createdAt', sortDirection: 'desc' } 
        });
        return res.data?.content?.filter(item => !item.eventId && item.postId) || [];
    } catch (error) {
        return [];
    }
};

/**
 * Ajoute une réaction de type LIKE à une publication
 * @param {string} publicationId - UUID de la publication
 * @param {string} userId - UUID de l'utilisateur qui like
 */
export const addReactionAPI = async (publicationId, userId) => {
    try {
        const response = await ugateInstance.post(`/publications/${publicationId}/reactions`, {
            userId: userId,
            reactionType: "LIKE" // Valeur attendue par le schéma Swagger
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la réaction:", error.response?.data || error.message);
        throw error;
    }
};
```

### `/api/products`

- **Fichier**: `src/lib/api/products.js`
- **Fonctions/Méthodes exportées**: getProductDetailsAPI, getSyndicateProductsAPI

```typescript
// src/lib/api/products.js
import { ugateInstance } from './instance';

/**
 * Récupérer les détails d'un produit
 * GET /products/{id}
 *
 * @param {string} productId - ID du produit
 */
export const getProductDetailsAPI = async (productId) => {
    try {
        const response = await ugateInstance.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération produit:", error.message);
        throw error;
    }
};

/**
 * Récupérer tous les produits d'un syndicat
 * GET /products/syndicates/{syndicatId}
 *
 * @param {string} syndicatId - ID du syndicat
 */
export const getSyndicateProductsAPI = async (syndicatId) => {
    try {
        const response = await ugateInstance.get(`/products/syndicates/${syndicatId}`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération produits du syndicat:", error.message);
        return [];
    }
};

```

### `/api/search`

- **Fichier**: `src/lib/api/search.js`
- **Fonctions/Méthodes exportées**: searchSyndicatesAPI, searchPostsInSyndicateAPI, searchEventsInSyndicateAPI, searchAllPostsAPI, searchAllEventsAPI, buildSearchParams, universalSearchAPI

```typescript
import axios from './instance';

/**
 * Recherche de syndicats avec filtres avancés
 * @param {string} query - Terme de recherche
 * @param {string} category - Catégorie de syndicate
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchSyndicatesAPI = async (query, category, location, page = 0, size = 12, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get('/search/syndicates', {
        params: { 
            query: query || '', 
            category: category || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche de publications dans un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} query - Terme de recherche
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchPostsInSyndicateAPI = async (syndicateId, query, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get(`/search/syndicates/${syndicateId}/posts`, {
        params: { 
            query: query || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche d'événements dans un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} query - Terme de recherche
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchEventsInSyndicateAPI = async (syndicateId, query, location, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get(`/search/syndicates/${syndicateId}/events`, {
        params: { 
            query: query || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche globale de publications dans tous les syndicats accessibles
 * @param {string} query - Terme de recherche
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchAllPostsAPI = async (query, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get('/search/posts', {
        params: { 
            query: query || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche globale d'événements dans tous les syndicats accessibles
 * @param {string} query - Terme de recherche
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchAllEventsAPI = async (query, location, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get('/search/events', {
        params: { 
            query: query || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Utilitaire pour construire des paramètres de recherche avancée
 * @param {Object} filters - Filtres de recherche
 * @returns {Object} Paramètres formatés pour l'API
 */
export const buildSearchParams = (filters) => {
    const params = {};
    
    if (filters.query && filters.query.trim()) {
        params.query = filters.query.trim();
    }
    
    if (filters.category && filters.category !== 'Tous') {
        params.category = filters.category;
    }
    
    if (filters.location && filters.location.trim()) {
        params.location = filters.location.trim();
    }
    
    if (filters.dateRange) {
        if (filters.dateRange.start) {
            params.startDate = filters.dateRange.start;
        }
        if (filters.dateRange.end) {
            params.endDate = filters.dateRange.end;
        }
    }
    
    // Pagination
    params.page = filters.page || 0;
    params.size = filters.size || 20;
    params.sortBy = filters.sortBy || 'createdAt';
    params.sortDirection = filters.sortDirection || 'DESC';
    
    return params;
};

/**
 * Recherche universelle qui combine tous les types de contenu
 * @param {string} query - Terme de recherche
 * @param {Object} options - Options de recherche
 * @returns {Promise<Object>} Résultats agrégés
 */
export const universalSearchAPI = async (query, options = {}) => {
    const {
        includeSyndicates = true,
        includePosts = true,
        includeEvents = true,
        page = 0,
        size = 10
    } = options;
    
    const promises = [];
    
    if (includeSyndicates) {
        promises.push(
            searchSyndicatesAPI(query, '', '', page, size)
                .then(data => ({ type: 'syndicates', ...data }))
                .catch(() => ({ type: 'syndicates', content: [], totalElements: 0 }))
        );
    }
    
    if (includePosts) {
        promises.push(
            searchAllPostsAPI(query, page, size)
                .then(data => ({ type: 'posts', ...data }))
                .catch(() => ({ type: 'posts', content: [], totalElements: 0 }))
        );
    }
    
    if (includeEvents) {
        promises.push(
            searchAllEventsAPI(query, '', page, size)
                .then(data => ({ type: 'events', ...data }))
                .catch(() => ({ type: 'events', content: [], totalElements: 0 }))
        );
    }
    
    const results = await Promise.all(promises);
    
    return {
        query,
        results: results.reduce((acc, result) => {
            acc[result.type] = {
                content: result.content || [],
                totalElements: result.totalElements || 0,
                page: result.page || 0,
                size: result.size || size
            };
            return acc;
        }, {}),
        totalResults: results.reduce((sum, result) => sum + (result.totalElements || 0), 0)
    };
};
```

### `/api/services`

- **Fichier**: `src/lib/api/services.js`
- **Fonctions/Méthodes exportées**: getServiceDetailsAPI, getActiveServicesAPI

```typescript
// src/lib/api/services.js
import { ugateInstance } from './instance';

/**
 * Récupérer les détails d'un service
 * GET /service-offerings/{id}
 *
 * @param {string} serviceId - ID du service
 */
export const getServiceDetailsAPI = async (serviceId) => {
    try {
        const response = await ugateInstance.get(`/service-offerings/${serviceId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération service:", error.message);
        throw error;
    }
};

/**
 * Récupérer tous les services actifs
 * GET /service-offerings/active
 */
export const getActiveServicesAPI = async () => {
    try {
        const response = await ugateInstance.get('/service-offerings/active');
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération services actifs:", error.message);
        return [];
    }
};

```

### `/api/syndicate`

- **Fichier**: `src/lib/api/syndicate.js`
- **Fonctions/Méthodes exportées**: createSyndicateAPI, getMySyndicatesAPI, getAllSyndicatesAPI, getSyndicateDetailsAPI

```typescript
import axios from './instance';

export const createSyndicateAPI = async (formData) => {
    const response = await axios.post('/syndicates', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

/**
 * Récupère les syndicats de l'utilisateur connecté
 * @returns {Promise<Array>} Liste des syndicats de l'utilisateur
 */
export const getMySyndicatesAPI = async () => {
    const response = await axios.get('/syndicates/mine');
    return response.data;
};

export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    const response = await axios.get('/syndicates', { params: { page, size } });
    return response.data;
};

export const getSyndicateDetailsAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}`);
    return response.data;
};
```

### `/api/syndicates`

- **Fichier**: `src/lib/api/syndicates.js`
- **Fonctions/Méthodes exportées**: createSyndicateAPI, getMySyndicatesAPI, getAllSyndicatesAPI, getUserSyndicatesAPI, getSyndicateDetailsAPI, getSyndicateBranchesAPI

```typescript
// src/lib/api/syndicates.js

// On importe ugateInstance (pour le client) et serverFetch (pour le serveur)
import { ugateInstance, serverFetch } from './instance';

/**
 * Création d'un syndicat
 */
export const createSyndicateAPI = async (formData) => {
    try {
        const response = await ugateInstance.post('/syndicates', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur création syndicat :", error.message);
        throw error;
    }
};

/**
 * Récupère le syndicat lié à l'utilisateur connecté (Route /mine)
 * C'est cette fonction qui permet de rediriger JUDE vers son propre syndicat.
 */
export const getMySyndicatesAPI = async () => {
    try {
        // Cette requête partira avec "Authorization: Bearer <ton_token>"
        const response = await ugateInstance.get('/syndicates/mine');
        return response.data || []; 
    } catch (error) {
        console.error("Erreur lors de la récupération de mon syndicat (mine):", error);
        return [];
    }
};

/**
 * Récupère tous les syndicats (pour la page Explorer)
 */
export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    try {
        const response = await ugateInstance.get('/syndicates', {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des syndicats paginés :", error);
        throw error;
    }
};

/**
 * Récupère les syndicats d'un utilisateur spécifique par son ID
 */
export const getUserSyndicatesAPI = async (userId) => {
    if (!userId) return [];
    try {
        const response = await ugateInstance.get(`/syndicates/user/${userId}`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur getUserSyndicatesAPI:", error.message);
        return [];
    }
};

/**
 * Récupère les détails d'un syndicat (utilisé dans le Layout)
 * Gère le cas Serveur (Next.js 15) et Client
 */
export const getSyndicateDetailsAPI = async (syndicateId) => {
    if (!syndicateId) return null;
    try {
        // 1. Essayer d'abord dans /mine (via serverFetch pour le serveur)
        try {
            const mineResponse = await serverFetch('get', '/syndicates/mine');
            const mySyndicates = mineResponse.data || [];
            const syndicate = mySyndicates.find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {
            // Ignorer l'erreur et tenter la recherche globale
        }

        // 2. Chercher globalement
        try {
            const allResponse = await serverFetch('get', '/syndicates', null, { 
                params: { page: 0, size: 100 } 
            });
            const allData = allResponse.data?.content || allResponse.data || [];
            const syndicate = allData.find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {}

        return null;
    } catch (error) {
        console.error(`Erreur critique récupération syndicat ${syndicateId}:`, error.message);
        return null; 
    }
};

/**
 * Récupère les branches (antennes) d'un syndicat
 */
export const getSyndicateBranchesAPI = async (syndicateId) => {
    try {
        const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
        return response.data || []; 
    } catch (error) {
        console.error("Erreur lors de la récupération des branches:", error);
        return [];
    }
};
```

### `/api/syndicatesInstance`

- **Fichier**: `src/lib/api/syndicatesInstance.js`
- **Fonctions/Méthodes exportées**: serverFetch

```typescript
import axios from 'axios';
import { getCookie, getServerCookie } from '../utils/cookies';

// Côté serveur, on utilise les URLs complètes directement (pas de proxy)
// Côté client, on utilise /api qui passe par le proxy Next.js
const getBaseURL = () => {
    if (typeof window === 'undefined') {
        // Côté serveur - URL complète
        return 'https://ugate.pynfi.com';
    }
    // Côté client - proxy Next.js
    return '/api';
};

const syndicatesInstance = axios.create({
    baseURL: 'https://ugate.pynfi.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fonction pour obtenir le token (côté client ou serveur)
const getToken = async () => {
    if (typeof window !== 'undefined') {
        // Côté client: localStorage d'abord, puis cookie
        return localStorage.getItem('accessToken') || getCookie('accessToken');
    } else {
        // Côté serveur: lire depuis les cookies
        return await getServerCookie('accessToken');
    }
};

// Intercepteur pour injecter le token dans chaque requête (côté client uniquement)
syndicatesInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken') || getCookie('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Fonction wrapper pour les appels côté serveur
export const serverFetch = async (method, url, data = null, config = {}) => {
    const token = await getToken();
    const headers = {
        ...config.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    return syndicatesInstance.request({
        method,
        url,
        data,
        ...config,
        headers,
    });
};

syndicatesInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            if (typeof window !== 'undefined' && !window.location.pathname.endsWith('/login')) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                localStorage.removeItem('email');
                localStorage.removeItem('userId');

                const path = window.location.pathname;
                const locale = path.split('/')[1] || 'fr';
                window.location.href = `/${locale}/login`;
            }
        }
        return Promise.reject(error);
    }
);

export default syndicatesInstance;

```

### `/api/user`

- **Fichier**: `src/lib/api/user.js`
- **Fonctions/Méthodes exportées**: getAuthenticatedUserProfile, updateUserProfileAPI, updateUserAvatarAPI

```typescript
import axios from './instance';

/**
 * Récupère le profil de l'utilisateur actuellement authentifié en appelant l'endpoint /api/profile.
 * L'identité de l'utilisateur est déterminée par le token JWT qui est automatiquement
 * ajouté à la requête par l'intercepteur Axios.
 * @returns {Promise<object>} Le DTO UserProfileResponse.
 */
export const getAuthenticatedUserProfile = async () => {
    // Appel de la route GET /api/profile, comme convenu.
    // L'endpoint est sécurisé côté backend et utilisera le Principal du token.
    const response = await axios.get('/profile');
    return response.data;
};

/**
 * Met à jour le profil de l'utilisateur authentifié via l'endpoint PUT /api/profile.
 * @param {object} profileData - Les données du profil à mettre à jour.
 * @returns {Promise<object>} Le DTO UserProfileResponse mis à jour.
 */
export const updateUserProfileAPI = async (profileData) => {
    // Appel de la route PUT /api/profile.
    const response = await axios.put('/profile', profileData);
    return response.data;
};

/**
 * Met à jour l'avatar de l'utilisateur authentifié via l'endpoint POST /api/profile/avatar.
 * @param {FormData} formData - L'objet FormData contenant le fichier de l'avatar.
 * @returns {Promise<string>} L'URL du nouvel avatar.
 */
export const updateUserAvatarAPI = async (formData) => {
    // Appel de la route POST /api/profile/avatar.
    const response = await axios.post('/profile/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};
```

### `/api/vote`

- **Fichier**: `src/lib/api/vote.js`
- **Fonctions/Méthodes exportées**: createVoteAPI, castVoteAPI, getVoteResultsAPI, getVotesAPI, submitVoteAPI

```typescript
// src/lib/api/vote.js
import { ugateInstance } from './instance';

/**
 * Créer un nouveau sondage/vote
 * POST /publication-votes
 *
 * @param {object} voteData - Données du sondage
 * @param {string} voteData.branchId - ID de la branche
 * @param {string} voteData.question - Question du sondage
 * @param {string[]} voteData.options - Options de réponse
 * @param {string} voteData.voteType - Type: "SINGLE_CHOICE" ou "MULTIPLE_CHOICE"
 * @param {string} [voteData.endDate] - Date de fin (optionnel)
 */
export const createVoteAPI = async (voteData) => {
    try {
        const response = await ugateInstance.post('/publication-votes', voteData);
        return response.data;
    } catch (error) {
        console.error("Erreur création sondage:", error.message);
        throw error;
    }
};

/**
 * Voter dans un sondage
 * POST /publication-votes/{publicationVoteId}/cast
 *
 * @param {string} voteId - ID du sondage
 * @param {object} castData - Données du vote
 * @param {string} castData.odtionId - ID de l'option choisie
 * @param {string} castData.odtionId - ID de l'option choisie (pour SINGLE_CHOICE)
 * @param {string[]} [castData.optionIds] - IDs des options choisies (pour MULTIPLE_CHOICE)
 */
export const castVoteAPI = async (voteId, castData) => {
    try {
        const response = await ugateInstance.post(
            `/publication-votes/${voteId}/cast`,
            castData
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors du vote:", error.message);
        throw error;
    }
};

/**
 * Récupérer les résultats d'un sondage
 * GET /publication-votes/{publicationVoteId}/results
 *
 * @param {string} voteId - ID du sondage
 */
export const getVoteResultsAPI = async (voteId) => {
    try {
        const response = await ugateInstance.get(`/publication-votes/${voteId}/results`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération résultats:", error.message);
        throw error;
    }
};

// ============================================================
// ANCIENNES FONCTIONS (pour compatibilité temporaire)
// ============================================================

/**
 * @deprecated Les routes /syndicates/{id}/votes n'existent pas dans l'API
 */
export const getVotesAPI = async (syndicateId) => {
    console.warn('getVotesAPI est déprécié. Utiliser getVoteResultsAPI avec un voteId.');
    return [];
};

/**
 * @deprecated Utiliser castVoteAPI à la place
 */
export const submitVoteAPI = async (syndicateId, voteId, choiceId) => {
    console.warn('submitVoteAPI est déprécié. Utiliser castVoteAPI.');
    return castVoteAPI(voteId, { optionId: choiceId });
};

```

## Composants

### Providers

- **Fichier**: `src/components/Providers.jsx`
- **Props**: `children`
- **Hooks**: 
```jsx
// src/components/Providers.jsx
"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import ToastProvider from '@/components/shared/ToastProvider';
import { UserProvider } from '@/context/UserProvider';

export function Providers({ children }) {
  const GOOGLE_CLIENT_ID = "137734019377-nnq12325retn9n23nfnis326j008u2pm.apps.googleusercontent.com";

  return (
    <UserProvider>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ToastProvider />


      <div className="bg-white text-gray-900 min-h-screen">
        {children}
      </div>

    </GoogleOAuthProvider>
     </UserProvider>
  );
}
```

### SearchSystem

- **Fichier**: `src/components/SearchSystem.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useCallback, useEffect
```jsx
import React, { useState, useCallback, useEffect } from 'react';
import { Search, Filter, X, ChevronDown, Loader2 } from 'lucide-react';
import { 
    searchSyndicatesAPI, 
    searchAllPostsAPI, 
    searchAllEventsAPI,
    universalSearchAPI,
    debounce
} from '../lib/api/search';

const SearchSystem = () => {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('all'); // all, syndicates, posts, events
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        category: '',
        location: '',
        page: 0,
        size: 20,
        sortBy: 'createdAt',
        sortDirection: 'DESC'
    });

    // Debounced search function
    const debouncedSearch = useCallback(
        debounce(async (searchQuery, searchFilters) => {
            if (!searchQuery.trim()) {
                setResults(null);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                let data;
                
                switch (searchType) {
                    case 'syndicates':
                        data = await searchSyndicatesAPI(
                            searchQuery,
                            searchFilters.category,
                            searchFilters.location,
                            searchFilters.page,
                            searchFilters.size,
                            searchFilters.sortBy,
                            searchFilters.sortDirection
                        );
                        break;
                    case 'posts':
                        data = await searchAllPostsAPI(
                            searchQuery,
                            searchFilters.page,
                            searchFilters.size,
                            searchFilters.sortBy,
                            searchFilters.sortDirection
                        );
                        break;
                    case 'events':
                        data = await searchAllEventsAPI(
                            searchQuery,
                            searchFilters.location,
                            searchFilters.page,
                            searchFilters.size,
                            'startDate',
                            'ASC'
                        );
                        break;
                    default:
                        data = await universalSearchAPI(searchQuery, {
                            page: searchFilters.page,
                            size: searchFilters.size
                        });
                }
                
                setResults(data);
            } catch (err) {
                setError(err.message || 'Erreur lors de la recherche');
                console.error('Search error:', err);
            } finally {
                setLoading(false);
            }
        }, 500),
        [searchType]
    );

    // Effect to trigger search when query or filters change
    useEffect(() => {
        debouncedSearch(query, filters);
    }, [query, filters, debouncedSearch]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
            page: 0 // Reset page when filters change
        }));
    };

    const clearFilters = () => {
        setFilters({
            category: '',
            location: '',
            page: 0,
            size: 20,
            sortBy: 'createdAt',
            sortDirection: 'DESC'
        });
    };

    const renderResults = () => {
        if (!results) return null;

        if (searchType === 'all') {
            return (
                <div className="space-y-6">
                    {Object.entries(results.results).map(([type, data]) => (
                        <div key={type} className="bg-white rounded-lg shadow p-4">
                            <h3 className="text-lg font-semibold mb-3 capitalize">
                                {type} ({data.totalElements} résultats)
                            </h3>
                            <div className="space-y-2">
                                {data.content.slice(0, 3).map((item, index) => (
                                    <div key={index} className="p-3 border rounded hover:bg-gray-50">
                                        <h4 className="font-medium">
                                            {item.name || item.title || item.content?.substring(0, 100)}
                                        </h4>
                                        {item.description && (
                                            <p className="text-sm text-gray-600 mt-1">
                                                {item.description.substring(0, 150)}...
                                            </p>
                                        )}
                                    </div>
                                ))}
                                {data.totalElements > 3 && (
                                    <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                                        Voir tous les {data.totalElements} résultats
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">
                        {results.totalElements || results.content?.length || 0} résultats trouvés
                    </h3>
                </div>
                <div className="divide-y">
                    {(results.content || []).map((item, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50">
                            <h4 className="font-medium text-blue-600">
                                {item.name || item.title || 'Sans titre'}
                            </h4>
                            {item.description && (
                                <p className="text-gray-600 mt-1">
                                    {item.description.substring(0, 200)}
                                    {item.description.length > 200 && '...'}
                                </p>
                            )}
                            {item.content && (
                                <p className="text-gray-600 mt-1">
                                    {item.content.substring(0, 200)}
                                    {item.content.length > 200 && '...'}
                                </p>
                            )}
                            <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                {item.location && <span>📍 {item.location}</span>}
                                {item.category && <span>🏷️ {item.category}</span>}
                                {item.authorName && <span>👤 {item.authorName}</span>}
                                {item.startDate && <span>📅 {new Date(item.startDate).toLocaleDateString()}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Système de Recherche UGate
                </h1>
                
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Rechercher des syndicats, publications, événements..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {loading && (
                        <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-spin" />
                    )}
                </div>

                {/* Search Type Tabs */}
                <div className="flex gap-2 mt-4">
                    {[
                        { key: 'all', label: 'Tout' },
                        { key: 'syndicates', label: 'Syndicats' },
                        { key: 'posts', label: 'Publications' },
                        { key: 'events', label: 'Événements' }
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setSearchType(key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                searchType === key
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Filters Toggle */}
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                    <Filter className="h-4 w-4" />
                    Filtres
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(searchType === 'syndicates' || searchType === 'all') && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Catégorie
                                    </label>
                                    <select
                                        value={filters.category}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Toutes les catégories</option>
                                        <option value="Résidentiel">Résidentiel</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Mixte">Mixte</option>
                                    </select>
                                </div>
                            )}
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Localisation
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ville, quartier..."
                                    value={filters.location}
                                    onChange={(e) => handleFilterChange('location', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Trier par
                                </label>
                                <select
                                    value={`${filters.sortBy}-${filters.sortDirection}`}
                                    onChange={(e) => {
                                        const [sortBy, sortDirection] = e.target.value.split('-');
                                        handleFilterChange('sortBy', sortBy);
                                        handleFilterChange('sortDirection', sortDirection);
                                    }}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="createdAt-DESC">Plus récent</option>
                                    <option value="createdAt-ASC">Plus ancien</option>
                                    <option value="name-ASC">Nom A-Z</option>
                                    <option value="name-DESC">Nom Z-A</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={clearFilters}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                <X className="h-4 w-4" />
                                Effacer les filtres
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{error}</p>
                </div>
            )}

            {/* Results */}
            {renderResults()}

            {/* No Results */}
            {!loading && query && results && !results.content?.length && searchType !== 'all' && (
                <div className="text-center py-12">
                    <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-gray-600">
                        Essayez d'ajuster vos critères de recherche ou explorez d'autres catégories.
                    </p>
                </div>
            )}

            {/* Development Info */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Informations de développement</h4>
                <div className="text-sm text-blue-800 space-y-1">
                    <p>• Toutes les API de recherche sont maintenant implémentées</p>
                    <p>• Pagination automatique avec {filters.size} résultats par page</p>
                    <p>• Cache automatique avec TTL de 5 minutes</p>
                    <p>• Debounce de 500ms pour optimiser les performances</p>
                    <p>• Gestion d'erreur robuste avec retry automatique</p>
                </div>
            </div>
        </div>
    );
};

export default SearchSystem;
```

### LoginAside

- **Fichier**: `src/components/auth/LoginAside.jsx`
- **Props**: `texts`
- **Hooks**: useState, useEffect, useTranslations
```jsx

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import UGateIcon from '@/components/shared/UGateIcon';

const AnimatedText = ({ texts }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [texts]);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-light text-white text-center"
            >
                {texts[index]}
            </motion.p>
        </AnimatePresence>
    );
};

export default function LoginAside({ animatedTexts }) {
    const t = useTranslations();
    return (
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-900 to-blue-950 flex-col justify-center items-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                    <path d="M0,50 Q50,0 100,50 Q50,100 0,50 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center relative z-10"
            >
                <Link href="/">
                    <div className="flex justify-center mb-8">
                        <UGateIcon className="h-20 w-20" />
                    </div>
                </Link>
                <h1 className="text-5xl font-bold mb-8">{t('app_name')}</h1>
                <AnimatedText texts={animatedTexts} />
            </motion.div>
        </div>
    );
}
```

### LoginForm

- **Fichier**: `src/components/auth/LoginForm.jsx`
- **Props**: `children, ...props`
- **Hooks**: useState, useForm, useTranslations, useRouter
```jsx
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { Link, useRouter } from '@/navigation';
import { loginWithIdentifier } from '@/lib/api/auth';

// Composant Input réutilisable avec icône
const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative mb-4">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-800 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-800'
            }`} size={20} />
        </div>
        {error && (
            <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{error.message}</span>
            </div>
        )}
    </div>
));

Input.displayName = 'Input';

// Composant Button avec animations Framer Motion
const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 disabled:bg-blue-700 disabled:cursor-not-allowed transition-all duration-200"
        {...props}
    >
        {children}
    </motion.button>
);

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('login_page');
    const tErrors = useTranslations('errors');

    // Gestionnaire de soumission du formulaire
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await loginWithIdentifier(data.email, data.password);
            await Swal.fire({
                icon: 'success',
                title: t("success_title"),
                text: t("success_text"),
                timer: 1500,
                showConfirmButton: false,
            });

            // Rediriger vers l'espace syndicat si syndicatId présent, sinon vers home
            // Note: router.push de next-intl ajoute automatiquement la locale
            if (response.assignedSyndicatId) {
                // Si l'admin a fait son travail, l'user arrive direct dans SON espace
                router.push(`/syndicat-space/${response.assignedSyndicatId}/membres`);
            } else {
                // Si c'est un compte vide (pas de syndicat lié), on va sur la home
                router.push(`/home`);
            }
        } catch (error) {
            console.error("Erreur de connexion:", error);
            let errorMessage = t('generic_error');
            if (error.response) {
                // Erreurs HTTP spécifiques de l'API (401 BadCredentialsException, 403 DisabledException)
                if (error.response.status === 401) {
                    errorMessage = t('invalid_credentials');
                } else if (error.response.status === 403) {
                    errorMessage = t('account_disabled');
                } else if (error.response.data && error.response.data.message) {
                    // Si le backend renvoie un DTO d'erreur avec un message spécifique
                    errorMessage = error.response.data.message;
                }
            } else if (error.message === tErrors('token_expired') || error.message === tErrors('token_invalid')) {
                // Erreur de token détectée côté client par l'intercepteur de requête
                errorMessage = t('token_invalid_expired');
            }
            Swal.fire({
                icon: 'error',
                title: t('error_title'),
                text: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input
                    icon={Mail}
                    type="email"
                    placeholder={t('email_placeholder')}
                    error={errors.email}
                    {...register("email", {
                        required: t('email_required'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('email_invalid'),
                        }
                    })}
                />
            </div>
            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t('password_placeholder')}
                    error={errors.password}
                    {...register("password", {
                        required: t('password_required'),
                    })}
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                {/* Checkbox "Se souvenir de moi" (logique non implémentée côté client/server pour le moment) */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                        {...register("remember")}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                        {t("remember_me")}
                    </label>
                </div>
                {/* Lien "Mot de passe oublié ?" */}
                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-900 hover:underline">
                        {t("forgot_password")}
                    </Link>
                </div>
            </div>
            {/* Bouton de soumission */}
            <Button type="submit" disabled={isLoading}>
                {isLoading ? t('login_button_loading') : t("login_button")}
            </Button>
        </form>
    );
}

```

### PasswordStrengthIndicator

- **Fichier**: `src/components/auth/PasswordStrength.jsx`
- **Props**: `password = ''`
- **Hooks**: 
```jsx

"use client";

export default function PasswordStrengthIndicator({ password = '' }) {
    const getStrength = (pwd) => {
        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (/[A-Z]/.test(pwd)) strength++;
        if (/[0-9]/.test(pwd)) strength++;
        if (/[^A-Za-z0-9]/.test(pwd)) strength++;
        return strength;
    };

    const strength = getStrength(password);
    const width = `${(strength / 4) * 100}%`;

    const getColor = () => {
        if (strength <= 1) return 'bg-red-500';
        if (strength === 2) return 'bg-yellow-500';
        if (strength === 3) return 'bg-blue-900';
        return 'bg-green-500';
    };

    return (
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
                className={`h-full rounded-full transition-all duration-300 ${getColor()}`}
                style={{ width }}
            />
        </div>
    );
}
```

### RegisterForm

- **Fichier**: `src/components/auth/RegisterForm.jsx`
- **Props**: `children`
- **Hooks**: useState, useRef, useForm, useTranslations, useRouter
```jsx
"use client";

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, AlertCircle, Camera, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { registerWithEmail } from '@/lib/api/auth';
import PasswordStrengthIndicator from './PasswordStrength';
import { Link, useRouter } from '@/navigation';
import Image from 'next/image';

const Alert = ({ children }) => (
    <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>{children}</span>
    </div>
);

const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-800 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-800'
            }`} size={20} />
        </div>
        {error && <Alert>{error.message}</Alert>}
    </div>
));
Input.displayName = 'Input';

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onTouched' });
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const fileInputRef = useRef(null);
    
    const router = useRouter();
    const t = useTranslations('register_page');
    const password = watch('password', '');

    // Gestion de la photo
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const validatePassword = (value) => {
        const passwordErrors = [];
        if (value.length < 8) passwordErrors.push(t('password_strength_8_chars'));
        if (!/[A-Z]/.test(value)) passwordErrors.push(t('password_strength_uppercase'));
        if (!/[0-9]/.test(value)) passwordErrors.push(t('password_strength_number'));
        if (!/[^A-Za-z0-9]/.test(value)) passwordErrors.push(t('password_strength_special'));
        return passwordErrors.length === 0 || passwordErrors.join(', ');
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const { passwordConfirm, ...rest } = data;
            const userData = {
                username: rest.username,
                password: rest.password,
                email: rest.email,
                phone: rest.phone,
                firstName: rest.firstName,
                lastName: rest.lastName,
                service: "SYNDICAT", // Adapté au nouveau Swagger
                roles: ["USER"]
            };

            // On envoie les données ET le fichier
            await registerWithEmail(userData, profileFile);

            await Swal.fire({
                icon: 'success',
                title: t('success_title'),
                text: t('success_text', { name: `${data.firstName} ${data.lastName}` }),
            });
            router.push('/login');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: t('error_title'),
                text: error.response?.data?.message || t('generic_error'),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* --- SECTION PHOTO DE PROFIL --- */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative group">
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-24 h-24 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition-all bg-gray-50"
                    >
                        {imagePreview ? (
                            <Image src={imagePreview} alt="Aperçu" fill className="object-cover" />
                        ) : (
                            <Camera className="text-gray-400 group-hover:text-blue-500" size={32} />
                        )}
                    </div>
                    {imagePreview && (
                        <button 
                            type="button"
                            onClick={() => {setImagePreview(null); setProfileFile(null);}}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
                <p className="text-xs text-gray-500 mt-2">Photo de profil (optionnelle)</p>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageChange} 
                    className="hidden" 
                    accept="image/*" 
                />
            </div>

            {/* --- RESTE DES CHAMPS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    icon={User}
                    placeholder={t("last_name_placeholder")}
                    error={errors.lastName}
                    {...register("lastName", { required: t("last_name_required") })}
                />
                <Input
                    icon={User}
                    placeholder={t("first_name_placeholder")}
                    error={errors.firstName}
                    {...register("firstName", { required: t("first_name_required") })}
                />
            </div>
            
            <Input
                icon={User}
                placeholder={t("username_placeholder")}
                error={errors.username}
                {...register("username", { required: t("username_required") })}
            />

            <Input
                icon={Mail}
                type="email"
                placeholder={t("email_placeholder")}
                error={errors.email}
                {...register("email", { required: t("email_required") })}
            />

            <Input
                icon={Phone}
                type="tel"
                placeholder={t("phone_placeholder")}
                error={errors.phone}
                {...register("phone", { required: t("phone_required") })}
            />

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t("password_placeholder")}
                    error={errors.password}
                    {...register("password", { required: t("password_required"), validate: validatePassword })}
                />
                <PasswordStrengthIndicator password={password} />
            </div>

            <Input
                icon={Lock}
                type="password"
                placeholder={t("password_confirm_placeholder")}
                error={errors.passwordConfirm}
                {...register("passwordConfirm", {
                    required: t("password_confirm_required"),
                    validate: value => value === password || t("password_mismatch")
                })}
            />

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-lg text-white bg-blue-900 hover:bg-blue-950 transition-all disabled:bg-blue-300 flex justify-center items-center"
                >
                    {isLoading ? "Inscription..." : t('register_button')}
                </button>
            </div>
        </form>
    );
}
```

### SocialLogins

- **Fichier**: `src/components/auth/SocialLogins.jsx`
- **Props**: `children, ...props`
- **Hooks**: useEffect, useState, useGoogleLogin, useTranslations, useRouter, usePopup
```jsx
"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import toast from 'react-hot-toast';
import { loginWithGoogle, loginWithApple } from '@/lib/api/auth';

// Le bouton de base pour les réseaux sociaux
const SocialButton = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-4 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center"
        {...props}
    >
        {children}
    </motion.button>
);

export default function SocialLogins() {
    const t = useTranslations('login_page');
    const tCommon = useTranslations('common');
    const router = useRouter();
    const [isAppleSDKLoaded, setIsAppleSDKLoaded] = useState(false);

    // --- Logique Google ---
    const googleLogin = useGoogleLogin({
        // La meilleure approche est "auth-code" pour la sécurité
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            toast.loading(tCommon('loading'));
            try {
                // On envoie le code au backend via notre fonction API
                const response = await loginWithGoogle(codeResponse.code);
                toast.dismiss();
                toast.success(t('success_title'));
                // Rediriger vers l'espace syndicat si syndicatId présent
                const syndicatId = response?.syndicatId || localStorage.getItem('syndicatId');
                if (syndicatId) {
                    router.push(`/syndicat-space/${syndicatId}/membres`);
                } else {
                    router.push('/explorer');
                }
            } catch (error) {
                toast.dismiss();
                toast.error(error.response?.data?.message || t('generic_error'));
            }
        },
        onError: () => {
            toast.error(t('generic_error'));
        }
    });

    // --- Logique Apple ---
    useEffect(() => {
        // Charger le SDK Apple uniquement côté client
        const script = document.createElement('script');
        script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
        script.async = true;
        script.onload = () => {
            window.AppleID.auth.init({
                clientId: 'com.bandesoft.dev-gloswitch', // Votre Client ID Apple
                scope: 'name email',
                redirectURI: window.location.origin + '/login', // Doit correspondre à votre config Apple Dev
                usePopup: true
            });
            setIsAppleSDKLoaded(true);
        };
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    const handleAppleSignIn = async () => {
        if (!isAppleSDKLoaded) {
            toast.error(tCommon('loading'));
            return;
        }
        try {
            const data = await window.AppleID.auth.signIn();
            toast.loading(tCommon('loading'));
            const response = await loginWithApple(data.authorization.code);
            toast.dismiss();
            toast.success(t('success_title'));
            // Rediriger vers l'espace syndicat si syndicatId présent
            const syndicatId = response?.syndicatId || localStorage.getItem('syndicatId');
            if (syndicatId) {
                router.push(`/syndicat-space/${syndicatId}/membres`);
            } else {
                router.push('/explorer');
            }
        } catch (error) {
            toast.dismiss();
            // Ne pas montrer d'erreur si l'utilisateur annule manuellement
            if (error.error !== "popup_closed_by_user") {
                toast.error(error.response?.data?.message || t('generic_error'));
            }
        }
    };

    return (
        <div className="w-full">
            <SocialButton onClick={() => googleLogin()}>
                <img src="/google-logo.svg" alt="Google" className="w-5 h-5 mr-3" />
                {t("with_google")}
            </SocialButton>
            <SocialButton onClick={handleAppleSignIn} disabled={!isAppleSDKLoaded}>
                <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5 mr-3" />
                {isAppleSDKLoaded ? t('with_apple') : tCommon('loading_dots')}
            </SocialButton>
        </div>
    );
}

```

### AppHeader

- **Fichier**: `src/components/dashboard/AppHeader.jsx`
- **Props**: `isSidebarOpen, onSidebarToggle, onNotificationToggle, isAuthenticated`
- **Hooks**: useTranslations, useUser
```jsx
"use client";
import { motion } from "framer-motion";
import { Bell, ChevronLeft, ChevronRight, Search, LogIn, UserPlus, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import UGateIcon from '@/components/shared/UGateIcon';
import { useUser } from "@/context/UserContext";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function AppHeader({ isSidebarOpen, onSidebarToggle, onNotificationToggle, isAuthenticated }) {
    const { user, isLoading } = useUser();
    const t = useTranslations('header');

    const profileImageSrc = !isLoading && user?.profilePictureUrl
        ? `${STATIC_FILES_URL}${user.profilePictureUrl}`
        : null;

    const displayUserName = isLoading ? "..." : user?.firstName || "Invité";

    return (
        <header className="bg-white/95 backdrop-blur-md z-30 sticky top-0 border-b border-gray-200/80 shadow-sm">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                {/* Logo et toggle sidebar */}
                <div className="flex items-center space-x-4">
                    {/* Toggle sidebar uniquement pour utilisateurs connectés */}
                    {isAuthenticated && (
                        <button onClick={onSidebarToggle} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                    <Link href={isAuthenticated ? "/home" : "/"} className="flex items-center">
                        <UGateIcon className="h-8 w-8 text-blue-700" />
                        <span className="text-2xl font-bold text-blue-700 ml-2 hidden md:inline">U-Gate</span>
                    </Link>
                </div>

                {/* Actions à droite */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Barre de recherche */}
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder={t("rechercherPlaceholder1")}
                            className="w-40 md:w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>

                    {/* Sélecteur de langue */}
                    <LanguageSwitcher />

                    {/* Contenu conditionnel selon l'état de connexion */}
                    {isAuthenticated ? (
                        <>
                            {/* Bouton notifications - Uniquement pour utilisateurs connectés */}
                            <motion.button
                                onClick={onNotificationToggle}
                                className="relative p-2.5 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Bell size={22} />
                                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                            </motion.button>

                            {/* Avatar et nom utilisateur - Uniquement pour utilisateurs connectés */}
                            <Link href="/parametres" passHref>
                                <motion.div
                                    className="flex items-center space-x-2 cursor-pointer p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {profileImageSrc ? (
                                        <img src={profileImageSrc} alt="Profil" className="w-9 h-9 rounded-xl object-cover border-2 border-blue-100" />
                                    ) : (
                                        <SyndicatDefaultAvatar name={displayUserName} size={36} className="w-9 h-9 rounded-xl" />
                                    )}
                                    <span className="hidden lg:inline font-semibold text-gray-700">{displayUserName}</span>
                                </motion.div>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* Boutons Connexion et Inscription - Uniquement pour visiteurs */}
                            <Link href="/login">
                                <motion.button
                                    className="px-4 py-2 text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all flex items-center space-x-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <LogIn size={18} />
                                    <span className="hidden sm:inline">{t("seConnecter")}</span>
                                </motion.button>
                            </Link>
                            <Link href="/register">
                                <motion.button
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <UserPlus size={18} />
                                    <span className="hidden sm:inline">{t("sinscrire")}</span>
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

```

### AppSidebar

- **Fichier**: `src/components/dashboard/AppSidebar.jsx`
- **Props**: `isOpen`
- **Hooks**: useRouter, usePathname, useTranslations
```jsx
"use client";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { Link, useRouter, usePathname } from '@/navigation';
import { useTranslations } from "next-intl";
import { getNavItems } from "./navItems.jsx";

export default function AppSidebar({ isOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('dashboard.sidebar');
    const navItems = getNavItems();

    const handleLogout = () => {
        router.push('/login');
    };

    const isActive = (route) => pathname.startsWith(route);

    return (
        <motion.nav
            animate={{ width: isOpen ? 256 : 80 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white shadow-xl flex flex-col z-20 h-full"
        >
            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => (
                    <Link href={item.route} key={item.id} passHref>
                        <motion.div
                            whileHover={{ scale: isOpen ? 1.02 : 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full p-3 rounded-xl transition-all duration-300 group cursor-pointer ${
                                isActive(item.route)
                                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                                    : "bg-white text-gray-600 hover:bg-gray-50"
                            } ${isOpen ? "flex items-center" : "flex justify-center"}`}
                            title={isOpen ? '' : item.label}
                        >
                            <item.icon className={`h-6 w-6 flex-shrink-0 ${isOpen ? "mr-3" : ""}`} />
                            {isOpen && (
                                <div className="text-left overflow-hidden w-full">
                                    <p className="font-semibold truncate">{item.label}</p>
                                    <p className={`text-xs truncate ${isActive(item.route) ? "text-white/80" : "text-gray-500"}`}>{item.description}</p>
                                </div>
                            )}
                        </motion.div>
                    </Link>
                ))}
            </div>
            <div className="p-4 border-t border-gray-100">
                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: isOpen ? 1.02 : 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-lg flex items-center justify-center"
                    title={isOpen ? '' : t("logout")}
                >
                    <LogOut className="h-6 w-6" />
                    {isOpen && <span className="font-medium ml-2">{t("logout")}</span>}
                </motion.button>
            </div>
        </motion.nav>
    );
}

```

### Feed

- **Fichier**: `src/components/dashboard/Feed.jsx`
- **Props**: `initialFeed`
- **Hooks**: useTranslations
```jsx
"use client";
import UnifiedPostCard from '@/components/shared/UnifiedPostCard';
import { useTranslations } from 'next-intl';

/**
 * Affiche le fil d'actualité en mappant chaque item à un composant FeedCard.
 * @param {Array} initialFeed - Le tableau des publications et événements.
 */
export default function Feed({ initialFeed }) {
    const t = useTranslations('feed');

    if (!initialFeed || initialFeed.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500">
                <p>{t('empty_feed')}</p>
                <p>{t('come_back_later')}</p>
            </div>
        );
    }
    return (
        <div className="space-y-6">
            {initialFeed.map(item => (
                <UnifiedPostCard 
                    key={`${item.id || item.postId || item.eventId}-${item.createdAt || item.startDate}`} 
                    item={item}
                    type={item.type || (item.postId ? 'publication' : 'event')}
                    variant="landing"
                    showActions={true}
                />
            ))}
        </div>
    );
}

```

### FeedCard

- **Fichier**: `src/components/dashboard/FeedCard.jsx`
- **Props**: `icon: Icon, text, onClick, active, activeColor = 'text-red-500'`
- **Hooks**: useState, useTranslations
```jsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDistanceToNow, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Clock, Heart, MessageCircle, Share2, MapPin, User } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FeedItemHeader from './FeedItemHeader';
import { SyndicatDefaultAvatar } from '../shared/SyndicatDefaultAvatar';
import { STATIC_FILES_URL } from '@/lib/constants';

const ActionButton = ({ icon: Icon, text, onClick, active, activeColor = 'text-red-500' }) => (
    <motion.button
        onClick={onClick}
        className={`flex items-center justify-center w-full gap-2 py-2.5 rounded-lg transition-all duration-200 ${
            active
                ? `${activeColor.replace('text-', 'bg-').replace('-500', '-100')} ${activeColor.replace('text-', 'bg-').replace('-500', '-900/50')} ${activeColor}`
                : 'text-gray-500 text-gray-400 hover:bg-gray-100 hover:bg-gray-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={18} fill={active ? 'currentColor' : 'none'} />
        <span className="font-medium text-sm">{text}</span>
    </motion.button>
);

export default function FeedCard({ item }) {
    const t = useTranslations('common');
    const [liked, setLiked] = useState(false);
    const dateToUse = item.createdAt || item.startDate;
    const timeAgo = dateToUse ? formatDistanceToNow(new Date(dateToUse), { addSuffix: true, locale: fr }) : t('unknown_date');
    const imageUrl = item.image && item.image.startsWith('/') ? `${STATIC_FILES_URL}${item.image}` : item.image;

    if (item.type === 'publication') {
        const authorAvatarUrl = item.author.avatar && item.author.avatar.startsWith('/') ? `${STATIC_FILES_URL}${item.author.avatar}` : item.author.avatar;
        return (
            <div className="bg-white bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4 mb-4">
                        {authorAvatarUrl ? (
                            <Image src={authorAvatarUrl} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/50 ring-white/10" />
                        ) : (
                            <SyndicatDefaultAvatar name={item.author.name} size={48} />
                        )}
                        <div>
                            <p className="font-bold text-gray-900 text-white">{item.author.name}</p>
                            <p className="text-xs text-gray-500 text-gray-400 flex items-center gap-1.5">
                                <Clock size={12} /> {timeAgo}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700 text-gray-300 mb-5 whitespace-pre-wrap text-base leading-relaxed">{item.content}</p>
                    {imageUrl && (
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image src={imageUrl} alt="Contenu" width={800} height={500} className="w-full h-auto" />
                        </div>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-500 text-gray-400 my-4">
                        <span>
                            {item.likes} {t('likes__one', { count: item.likes })}
                        </span>
                        <span>
                            {item.comments?.length || 0} {t('comments_one', { count: item.comments?.length || 0 })}
                        </span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-100 border-gray-700/50 pt-3 gap-2">
                        <ActionButton icon={Heart} text={t('like')} onClick={() => setLiked(!liked)} active={liked} activeColor="text-red-500" />
                        <ActionButton icon={MessageCircle} text={t('comment')} activeColor="text-blue-500" />
                        <ActionButton icon={Share2} text={t('share')} activeColor="text-green-500" />
                    </div>
                </div>
            </div>
        );
    }

    if (item.type === 'event') {
        const startDate = new Date(dateToUse);
        return (
            <div className="bg-white bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                {imageUrl && (
                    <div className="relative h-52 group">
                        <Image src={imageUrl} alt={item.title} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-5">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                            <p className="text-sm text-white/90 drop-shadow-md">{item.description}</p>
                        </div>
                    </div>
                )}
                <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-4 text-center mb-5">
                        <div className="p-3 bg-blue-50 bg-blue-900/40 rounded-lg">
                            <p className="text-xl font-bold text-blue-600 text-blue-300">{format(startDate, 'dd')}</p>
                            <p className="text-xs font-semibold text-blue-500 text-blue-400 uppercase">{format(startDate, 'MMM', { locale: fr })}</p>
                        </div>
                        <div className="p-3 bg-green-50 bg-green-900/40 rounded-lg col-span-2">
                            <p className="font-semibold text-green-700 text-green-300">{format(startDate, 'EEEE', { locale: fr })}</p>
                            <p className="text-xs text-green-600 text-green-400">{format(startDate, 'HH:mm')}</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 text-gray-400 space-y-2 mb-6">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-purple-500" /> {item.location}
                        </p>
                        <p className="flex items-center gap-2">
                            <User size={16} className="text-purple-500" /> Organisé par <strong>{item.author.name}</strong>
                        </p>
                    </div>
                    <motion.button
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t('see_and_join')} ({item.participants?.length || 0} {t('participants')})
                    </motion.button>
                </div>
            </div>
        );
    }

    return null;
}

```

### FeedItem

- **Fichier**: `src/components/dashboard/FeedItem.jsx`
- **Props**: `date`
- **Hooks**: useState, useTranslations
```jsx
// src/components/dashboard/FeedItem.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart, Share2, MessageCircle, Clock, User, Bookmark, Send, X,
    Calendar, MapPin, Users
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';

// Fonction utilitaire pour formater la date
const formatRelativeTime = (date) => {
    // Dans un vrai projet, utilisez une librairie comme date-fns
    return new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(date));
};

export default function FeedItem({ item }) {
    const t = useTranslations('dashboard');
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [comments, setComments] = useState(item.comments || []);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            // Idéalement, cet appel serait une requête API.
            // await api.post(`/publications/${item.id}/comments`, { content: newComment });
            const newCommentObj = {
                author: { name: "Vous", avatar: "/default-avatar.png" }, // Utiliser l'avatar de l'utilisateur connecté
                content: newComment.trim(),
            };
            setComments(prev => [...prev, newCommentObj]);
            setNewComment("");
        }
    };

    const isPublication = "content" in item;

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    if (isPublication) {
        // --- AFFICHAGE POUR UNE PUBLICATION ---
        return (
            <>
                <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl mx-auto"
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <Image src={item.author.avatar} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h3 className="font-bold text-gray-800">{item.author.name}</h3>
                                <p className="text-sm text-gray-500">{item.syndicat.name}</p>
                                <div className="flex items-center text-xs text-gray-400 mt-1">
                                    <Clock size={14} className="mr-1" />
                                    <span>{item.timestamp}</span>
                                </div>
                            </div>
                            <button onClick={() => setBookmarked(!bookmarked)} className="ml-auto p-2 rounded-full hover:bg-gray-100">
                                <Bookmark size={20} className={bookmarked ? "text-blue-500 fill-current" : "text-gray-500"} />
                            </button>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">{item.content}</p>

                        {item.image && (
                            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                                <Image src={item.image} alt="Publication" fill style={{ objectFit: 'cover' }} />
                            </div>
                        )}

                        <div className="flex items-center justify-between border-t pt-4">
                            <motion.button onClick={() => setLiked(!liked)} className={`flex items-center space-x-2 text-gray-600 hover:text-red-500 p-2 rounded-lg transition-colors ${liked ? "text-red-500" : ""}`}>
                                <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                                <span className="font-medium">{item.likes + (liked ? 1 : 0)}</span>
                            </motion.button>
                            <button onClick={() => setShowCommentModal(true)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg transition-colors">
                                <MessageCircle size={20} />
                                <span className="font-medium">{comments.length}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 p-2 rounded-lg transition-colors">
                                <Share2 size={20} />
                                <span className="font-medium">{t("common.share")}</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* --- MODALE DE COMMENTAIRES (PARTIE COMPLÈTE) --- */}
                <AnimatePresence>
                    {showCommentModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowCommentModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-4 border-b flex justify-between items-center">
                                    <h3 className="text-xl font-bold">{t("comments.title")}</h3>
                                    <button onClick={() => setShowCommentModal(false)} className="p-2 rounded-full hover:bg-gray-100">
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                                    {comments.length > 0 ? comments.map((comment, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Image src={comment.author.avatar} alt={comment.author.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                                            <div className="flex-1 bg-gray-100 rounded-lg p-3">
                                                <p className="font-semibold text-sm">{comment.author.name}</p>
                                                <p className="text-gray-700">{comment.content}</p>
                                            </div>
                                        </div>
                                    )) : (
                                        <p className="text-center text-gray-500 py-8">{t("comments.no_comments")}</p>
                                    )}
                                </div>
                                <div className="p-4 border-t bg-gray-50 flex items-center space-x-3">
                                    <Image src="/default-avatar.png" alt="Votre avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                                            placeholder={t("comments.placeholder")}
                                            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <button
                                            onClick={handleAddComment}
                                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
                                            aria-label="Envoyer le commentaire"
                                        >
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    } else {
        // --- AFFICHAGE POUR UN ÉVÉNEMENT ---
        return (
            <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl mx-auto"
            >
                <div className="relative w-full h-48">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                        <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                        <p className="text-sm text-white/90">{item.syndicat.name}</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center"><Calendar size={16} className="mr-2 text-blue-500" /> <span>{formatRelativeTime(item.startDate)}</span></div>
                        <div className="flex items-center"><MapPin size={16} className="mr-2 text-blue-500" /> <span>{item.location}</span></div>
                        <div className="flex items-center"><Users size={16} className="mr-2 text-blue-500" /> <span>{item.participants.length} participants</span></div>
                    </div>
                    <Link href={`/events/${item.id}`} passHref>
                        <div className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center cursor-pointer">
                            {t('events.see_and_join')}
                        </div>
                    </Link>
                </div>
            </motion.div>
        );
    }
}
```

### FeedItemHeader

- **Fichier**: `src/components/dashboard/FeedItemHeader.jsx`
- **Props**: `syndicat, branch`
- **Hooks**: 
```jsx
"use client";

import { Link } from '@/navigation';
import Image from 'next/image';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';

export default function FeedItemHeader({ syndicat, branch }) {
    if (!syndicat) return null;
    
    const staticFilesUrl = 'http://167.235.62.116:7014';
    const logoUrl = syndicat.logoUrl ? `${staticFilesUrl}${syndicat.logoUrl}` : null;

    return (
        <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 from-gray-800 to-gray-800/80 border-b border-gray-200/80 border-white/10">
            {logoUrl ? (
                <Image src={logoUrl} alt={syndicat.name} width={40} height={40} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            ) : (
                <SyndicatDefaultAvatar name={syndicat.name} size={40} className="rounded-lg shadow-sm" />
            )}
            <div className="ml-3">
                <Link href={`/syndicat-space/${syndicat.id}`} className="font-semibold text-gray-800 text-gray-100 hover:text-blue-600 transition-colors">
                    {syndicat.name}
                </Link>
                {branch && <p className="text-xs text-gray-500 text-gray-400">{branch.name}</p>}
            </div>
        </div>
    );
};
```

### NotificationsPanel

- **Fichier**: `src/components/dashboard/NotificationsPanel.jsx`
- **Props**: `title, description, time, icon: Icon, gradient`
- **Hooks**: useTranslations, useState, useEffect
```jsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';


function NotificationItem({ title, description, time, icon: Icon, gradient }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, x: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group"
        >
            <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
            <div className="p-4">
                <div className="flex items-start mb-2">
                    <div className={`p-2 mr-3 rounded-lg bg-gradient-to-br ${gradient} text-white`}>
                        <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800 leading-tight">{title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                    </div>
                    <span className="ml-auto text-xs text-gray-500 flex-shrink-0 pl-2">{time}</span>
                </div>
            </div>
        </motion.div>
    );
}


import { getNotificationsAPI, markNotificationAsReadAPI, markAllNotificationsAsReadAPI } from '@/lib/api/notifications';
import { useState, useEffect } from 'react';

export default function NotificationsPanel({ isOpen, onClose }) {
    const t = useTranslations('dashboard');
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Charger les notifications quand le panel s'ouvre
    useEffect(() => {
        if (isOpen) {
            loadNotifications();
        }
    }, [isOpen]);

    const loadNotifications = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const notificationsData = await getNotificationsAPI(0, 20, false);
            setNotifications(notificationsData.content || []);
        } catch (error) {
            console.error('Erreur lors du chargement des notifications:', error);
            setError('Impossible de charger les notifications');
            setNotifications([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMarkAsRead = async (notificationId) => {
        try {
            await markNotificationAsReadAPI(notificationId);
            setNotifications(prev => 
                prev.map(notif => 
                    notif.id === notificationId 
                        ? { ...notif, isRead: true }
                        : notif
                )
            );
        } catch (error) {
            console.error('Erreur lors du marquage comme lu:', error);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            await markAllNotificationsAsReadAPI();
            setNotifications(prev => 
                prev.map(notif => ({ ...notif, isRead: true }))
            );
        } catch (error) {
            console.error('Erreur lors du marquage global:', error);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay pour fermer en cliquant à côté */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 z-30"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-gray-50 shadow-2xl z-40 flex flex-col"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="p-4 border-b bg-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-800">{t("notifications.title")}</h3>
                                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Fermer le panneau de notifications">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                {t("notifications.subtitle", { count: notifications.length })}
                            </p>
                            {notifications.filter(n => !n.isRead).length > 0 && (
                                <button
                                    onClick={handleMarkAllAsRead}
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Tout marquer comme lu
                                </button>
                            )}
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-3">
                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <p className="text-gray-500">Chargement...</p>
                                </div>
                            ) : error ? (
                                <div className="text-center py-8 text-red-500">
                                    <p>{error}</p>
                                    <button
                                        onClick={loadNotifications}
                                        className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Réessayer
                                    </button>
                                </div>
                            ) : notifications.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Aucune notification</p>
                                </div>
                            ) : (
                                notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        onClick={() => !notification.isRead && handleMarkAsRead(notification.id)}
                                        className={`cursor-pointer ${notification.isRead ? 'opacity-60' : ''}`}
                                    >
                                        <NotificationItem 
                                            title={notification.title}
                                            description={notification.message}
                                            time={new Date(notification.createdAt).toLocaleString('fr-FR', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                            icon={notification.type === 'POST_LIKE' ? () => '👍' : 
                                                  notification.type === 'COMMENT' ? () => '💬' : 
                                                  notification.type === 'EVENT_REMINDER' ? () => '📅' : 
                                                  () => '🔔'}
                                            gradient="from-blue-500 to-indigo-600"
                                        />
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-4 border-t bg-white">
                            <Link href="/notifications" passHref>
                                <div className="w-full py-3 text-center bg-blue-600 text-white rounded-xl font-medium cursor-pointer transition hover:bg-blue-700">
                                    {t("notifications.see_all")}
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
```

### WelcomeSection

- **Fichier**: `src/components/dashboard/WelcomeSection.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useTranslations, useUser
```jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Users, Sparkles, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import CreateSyndicateModal from "@/components/syndicats/CreateSyndicateModal";
import { useUser } from "@/context/UserContext";
import { Link } from "@/navigation";

export default function WelcomeSection() {
    const { user, isLoading } = useUser();
    const t = useTranslations('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Gestion du nom pour les visiteurs
    const firstName = isLoading ? "..." : user?.firstName || "";

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 pt-4"
            >
                {/* Badge contextuel */}
                {!user && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                            {t('platform_tagline', "Plateforme de gestion syndicale")}
                        </span>
                    </motion.div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {user ? (
                        // Message personnalisé pour utilisateur connecté
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t('welcome', { name: firstName })}
                        </span>
                    ) : (
                        // Message pour visiteur
                        <>
                            <span className="text-gray-800">{t('public_welcome_line1', "Bienvenue sur")}</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                U-Gate
                            </span>
                        </>
                    )}
                </h1>

                {/* Sous-titre */}
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {user
                        ? t("portal_description", "Gérez vos syndicats, connectez-vous avec vos membres et restez informé.")
                        : t("public_description", "L'union fait la force. Rejoignez la plateforme centrale pour vos activités syndicales et citoyennes.")}
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {user ? (
                        // Bouton pour utilisateur connecté
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            {t("launch_syndicate", "Créer un syndicat")}
                        </motion.button>
                    ) : (
                        // Boutons pour visiteur
                        <>
                            <Link href="/register">
                                <motion.button
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    {t("join_us", "Nous rejoindre")}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link href="/explorer">
                                <motion.button
                                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {t("explore_public", "Explorer les syndicats")}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Indicateurs de confiance pour visiteurs */}
                {!user && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span>{t('trust_secure', "Sécurisé")}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>{t('trust_members', "+50 000 membres")}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span>{t('trust_syndicates', "+1 500 syndicats")}</span>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Modale de création de syndicat (uniquement pour utilisateurs connectés) */}
            {user && (
                <CreateSyndicateModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}
```

### navItems

- **Fichier**: `src/components/dashboard/navItems.jsx`
- **Props**: `N/A`
- **Hooks**: useTranslations
```jsx
import { Compass, Home } from "lucide-react";
import { useTranslations } from "next-intl";

export const getNavItems = () => {
    const t = useTranslations('dashboard.nav_items');

    return [
        {
            id: "dashboard",
            icon: Home,
            label: t('dashboard.label'),
            gradient: "from-blue-700 to-blue-800",
            description: t('dashboard.description'),
            route: "/home"
        },
        {
            id: "explorer",
            icon: Compass,
            label: t('explorer.label'),
            gradient: "from-purple-500 to-pink-600",
            description: t('explorer.description'),
            route: "/explorer"
        }
    ];
};

```

### AdhesionModal

- **Fichier**: `src/components/explorer/AdhesionModal.jsx`
- **Props**: `isOpen, onClose, syndicat`
- **Hooks**: useTranslations
```jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { AdhereSyndicatForm } from "../forms/adhesion/AdhereSyndicatForm"; // Assurez-vous que le chemin est correct

/**
 * AdhesionModal est le composant "wrapper" qui affiche le wizard d'adhésion
 * dans une fenêtre modale.
 * @param {boolean} isOpen - État pour contrôler la visibilité de la modale.
 * @param {function} onClose - Fonction pour fermer la modale.
 * @param {object} syndicat - L'objet syndicat auquel l'utilisateur souhaite adhérer.
 */
export default function AdhesionModal({ isOpen, onClose, syndicat }) {
    const t = useTranslations('adhesion_modal');

    return (
        <AnimatePresence>
            {isOpen && syndicat && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header de la Modale */}
                        <div className="sticky top-0 p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-2xl z-10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {t('title', { syndicatName: syndicat.name })}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {t('subtitle')}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Fermer la modale"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        {/* Contenu de la Modale (le wizard) */}
                        <div className="flex-grow overflow-y-auto">
                            <AdhereSyndicatForm
                                syndicat={syndicat}
                                onComplete={onClose}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

```

### ExploreCard

- **Fichier**: `src/components/explorer/ExploreCard.jsx`
- **Props**: `syndicat, itemVariants, onDetails, onAdhere`
- **Hooks**: useTranslations
```jsx
"use client";

import { motion } from "framer-motion";
import { Users, MapPin, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {
    const t = useTranslations('explorer_page');

    // On utilise le logoUrl comme image de couverture, sinon un placeholder
    const coverImage = syndicat.logoUrl || "/placeholder-cover.png";

    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
            {/* SECTION IMAGE (COVER) */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={coverImage}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized // Pour éviter les erreurs 500 de timeout en local
                />
                
                {/* Overlay dégradé pour que le badge ressorte bien */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Badge du Domaine (ex: Technologie) */}
                {syndicat.domain && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                            {syndicat.domain}
                        </span>
                    </div>
                )}

                {/* Badge de certification ou statut (optionnel) */}
                {syndicat.isApproved && (
                    <div className="absolute top-3 right-3 bg-green-500 p-1.5 rounded-full shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                )}
            </div>

            {/* SECTION CONTENU */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Titre du Syndicat */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {syndicat.name}
                </h3>

                {/* Description courte (si besoin) */}
                {syndicat.description && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                        {syndicat.description}
                    </p>
                )}

                {/* INFOS (Membres & Localisation) */}
                <div className="flex flex-col gap-2 mb-6">
                    {/* Membres */}
                    <div className="flex items-center text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                            <Users className="w-4 h-4 text-blue-500" />
                        </div>
                        <span className="text-sm font-medium">
                            {syndicat.memberCount || 0} {t('card.members', 'membres')}
                        </span>
                    </div>

                    {/* LOCALISATION (À activer quand l'API sera prête) */}
                    {/* 
                    <div className="flex items-center text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-orange-500" />
                        </div>
                        <span className="text-sm font-medium">
                            {syndicat.location || "Cameroun, Centre"}
                        </span>
                    </div> 
                    */}
                </div>

                {/* BOUTONS D'ACTION */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onDetails(syndicat)}
                        className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                    >
                        {t('card.details', 'Détails')}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <button
                        onClick={() => onAdhere(syndicat)}
                        className="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-200 transition-all active:scale-95"
                    >
                        {t('card.adhere', 'Adhérer')}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
```

### ExploreHeader

- **Fichier**: `src/components/explorer/ExploreHeader.jsx`
- **Props**: `syndicatesCount, t`
- **Hooks**: 
```jsx
// src/components/explorer/ExploreHeader.jsx
import { Sparkles } from "lucide-react";

/**
 * Le header de la page Explorer.
 * C'est un Server Component qui affiche des informations statiques.
 * @param {number} syndicatesCount - Le nombre total de syndicats à afficher.
 * @param {function} t - La fonction de traduction initialisée côté serveur.
 */
export default function ExploreHeader({ syndicatesCount, t }) {
    return (
        <header className="text-center mb-16 relative">
            <div className="max-w-4xl mx-auto relative">
                {/* Effet de lumière décoratif */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10"></div>

                {/* Titre principal */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 relative z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {t('explorer_page.title')}
                    </span>
                    <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {t('explorer_page.description')}
                    <span className="block mt-2 text-blue-600 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 mr-2"/>
                        {t('explorer_page.count', { count: syndicatesCount })}
                    </span>
                </p>
            </div>
        </header>
    );
}
```

### ExplorerClient

- **Fichier**: `src/components/explorer/ExplorerClient.jsx`
- **Props**: `syndicates = []`
- **Hooks**: useState, useMemo, useTranslations, useRouter
```jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from '@/navigation';
import { Search } from "lucide-react";
import ExploreCard from "./ExploreCard";
import AdhesionModal from "./AdhesionModal";

// Variantes d'animation pour la grille
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ExplorerClient({ syndicates = [] }) {
    const t = useTranslations('explorer_page');
    const router = useRouter();

    // --- ÉTATS LOCAUX (Uniquement pour le filtrage et l'UI) ---
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("members");
    const [selectedSyndicat, setSelectedSyndicat] = useState(null);
    const [isAdhesionModalOpen, setIsAdhesionModalOpen] = useState(false);

    // --- LOGIQUE DE FILTRAGE ET TRI ---
    // On utilise directement "syndicates" provenant des props pour être toujours à jour
    const filteredAndSortedSyndicates = useMemo(() => {
        if (!syndicates) return [];

        // 1. Filtrage par recherche
        let filtered = syndicates.filter(s =>
            s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // 2. Filtrage par domaine
        if (filterType !== "all") {
            filtered = filtered.filter(s => s.domain === filterType);
        }

        // 3. Tri
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name": 
                    return (a.name || '').localeCompare(b.name || '');
                case "date": 
                    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
                case "members": 
                default: 
                    return (b.memberCount || 0) - (a.memberCount || 0);
            }
        });
    }, [syndicates, searchTerm, filterType, sortBy]);

    // --- ACTIONS ---
    const handleAdhesion = (syndicat) => {
        setSelectedSyndicat(syndicat);
        setIsAdhesionModalOpen(true);
    };

    const handleDetails = (syndicat) => {
        router.push(`/explorer/${syndicat.id}`);
    };

    return (
        <>
            {/* BARRE DE RECHERCHE ET FILTRES */}
            <motion.div 
                className="mb-12 max-w-4xl mx-auto" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative mb-4">
                    <input 
                        type="text" 
                        placeholder={t("search_placeholder")} 
                        className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg shadow-sm" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6"/>
                </div>

                {/* Tu peux remettre ici tes sélecteurs de Filtre et de Tri si nécessaire */}
            </motion.div>

            {/* GRILLE DES SYNDICATS */}
            <AnimatePresence mode="wait">
                {filteredAndSortedSyndicates.length > 0 ? (
                    <motion.div 
                        key="grid"
                        className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" 
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible"
                    >
                        {filteredAndSortedSyndicates.map((syndicat) => (
                            <ExploreCard 
                                key={syndicat.id} 
                                syndicat={syndicat} 
                                itemVariants={itemVariants} 
                                onDetails={handleDetails} 
                                onAdhere={handleAdhesion} 
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div 
                        key="empty-state" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {searchTerm ? t("no_results_title") : "Aucun syndicat disponible"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm ? t("no_results_description") : "La liste est actuellement vide."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MODALE D'ADHÉSION */}
            <AdhesionModal 
                isOpen={isAdhesionModalOpen} 
                onClose={() => setIsAdhesionModalOpen(false)} 
                syndicat={selectedSyndicat} 
            />
        </>
    );
}
```

### AdhereSyndicatForm

- **Fichier**: `src/components/forms/adhesion/AdhereSyndicatForm.jsx`
- **Props**: `syndicat, onComplete`
- **Hooks**: useState, useEffect, useTranslations
```jsx
// src/components/forms/adhesion/AdhereSyndicatForm.jsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { AntenneSelection } from "./AntenneSelection.jsx";
import { UserTypeSelection } from "./UserTypeSelection.jsx";
import { IndividualForm } from "./IndividualMembershipForm.jsx";
import { Confirmation } from "./MembershipConfirmation.jsx";
import { getSyndicateBranchesAPI } from "@/lib/api/syndicates";

export const AdhereSyndicatForm = ({ syndicat, onComplete }) => {
    const t = useTranslations('adhesion_form');
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAntenne, setSelectedAntenne] = useState(null);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [formData, setFormData] = useState({});
    const [membershipId, setMembershipId] = useState(null);

    // États pour les branches dynamiques
    const [branches, setBranches] = useState([]);
    const [isLoadingBranches, setIsLoadingBranches] = useState(true);
    const [branchesError, setBranchesError] = useState(null);

    // Charger les branches du syndicat
    useEffect(() => {
        const loadBranches = async () => {
            if (!syndicat?.id) return;

            setIsLoadingBranches(true);
            setBranchesError(null);

            try {
                // D'abord vérifier si le syndicat a déjà ses branches
                if (syndicat.branches && syndicat.branches.length > 0) {
                    setBranches(syndicat.branches);
                } else {
                    // Sinon, les charger depuis l'API
                    const data = await getSyndicateBranchesAPI(syndicat.id);
                    setBranches(data || []);
                }
            } catch (error) {
                console.error("Erreur chargement branches:", error);
                setBranchesError("Impossible de charger les antennes");
            } finally {
                setIsLoadingBranches(false);
            }
        };

        loadBranches();
    }, [syndicat]);

    const generateMembershipId = () => {
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substr(2, 4).toUpperCase();
        return `ADH-${syndicat?.short_name || 'SYN'}-${timestamp}-${random}`;
    };

    const handleFormSubmit = (data) => {
        const id = generateMembershipId();
        setMembershipId(id);
        setCurrentStep(4);
    };

    const nextStep = () => { if (currentStep < 4) setCurrentStep(currentStep + 1); };
    const prevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

    const canProceed = () => {
        if (currentStep === 1) return selectedAntenne !== null;
        if (currentStep === 2) return selectedUserType !== null;
        return false;
    };

    const steps = [ t('adhesion_wizard.step1_name'), t('adhesion_wizard.step2_name'), t('adhesion_wizard.step3_name'), t('adhesion_wizard.step4_name') ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    {steps.map((name, index) => {
                        const step = index + 1;
                        return (
                            <div key={step} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${ currentStep >= step ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600' }`}>
                                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                                </div>
                                {step < steps.length && ( <div className={`w-12 sm:w-20 lg:w-32 h-1 mx-2 transition-colors duration-500 ${ currentStep > step ? 'bg-blue-600' : 'bg-gray-200' }`} /> )}
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-3">
                    <p className="font-semibold text-gray-800">{steps[currentStep - 1]}</p>
                    <p className="text-sm text-gray-500">{t('adhesion_wizard.step_of', { current: currentStep, total: steps.length })}</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    {currentStep === 1 && (
                        isLoadingBranches ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
                                <p className="text-gray-600">{t('adhesion_wizard.loading_branches')}</p>
                            </div>
                        ) : branchesError ? (
                            <div className="text-center py-12">
                                <p className="text-red-600 mb-4">{branchesError}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    {t('adhesion_wizard.retry')}
                                </button>
                            </div>
                        ) : branches.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-600">{t('adhesion_wizard.no_branches')}</p>
                            </div>
                        ) : (
                            <AntenneSelection antennes={branches} onSelect={setSelectedAntenne} selectedAntenne={selectedAntenne} />
                        )
                    )}
                    {currentStep === 2 && <UserTypeSelection onSelect={setSelectedUserType} selectedType={selectedUserType} />}
                    {currentStep === 3 && <IndividualForm onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />}
                    {currentStep === 4 && <Confirmation membershipId={membershipId} antenne={selectedAntenne} onComplete={onComplete} />}
                </motion.div>
            </AnimatePresence>

            {currentStep < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <motion.button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-lg flex items-center font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={currentStep > 1 ? { scale: 1.05 } : {}}>
                        <ChevronLeft className="w-5 h-5 mr-2" /> {t('adhesion_wizard.previous')}
                    </motion.button>
                    {currentStep < 3 && (
                        <motion.button onClick={nextStep} disabled={!canProceed()} className="px-6 py-2 rounded-lg flex items-center font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed" whileHover={canProceed() ? { scale: 1.05 } : {}}>
                            {t('adhesion_wizard.next')} <ChevronRight className="w-5 h-5 ml-2" />
                        </motion.button>
                    )}
                </div>
            )}
        </div>
    );
};
```

### AntenneSelection

- **Fichier**: `src/components/forms/adhesion/AntenneSelection.jsx`
- **Props**: `antennes, onSelect, selectedAntenne`
- **Hooks**: 
```jsx
// src/components/forms/adhesion/AntenneSelection.jsx
"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle, MapPin, Navigation, Users, Award } from "lucide-react";

export const AntenneSelection = ({ antennes, onSelect, selectedAntenne }) => {
    // Helper function to handle both API and fake data field names
    const getBranchName = (branch) => branch.nom || branch.name || 'Antenne';
    const getBranchLocation = (branch) => branch.localisation || branch.location || branch.address || '';
    const getBranchMemberCount = (branch) => branch.membres || branch.membersCount || branch.memberCount || 0;
    const getBranchSpecialties = (branch) => branch.specialites || branch.specialties || [];

    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    Choisissez votre antenne
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Sélectionnez l'antenne la plus proche ou celle qui correspond à votre secteur.
                </p>
                <div className="mt-4 inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Navigation className="w-4 h-4 mr-2" /> {antennes.length} antennes disponibles
                </div>
            </motion.div>

            <motion.div
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                {antennes.map((antenne) => {
                    const isSelected = selectedAntenne?.id === antenne.id;
                    const memberCount = getBranchMemberCount(antenne);
                    const specialties = getBranchSpecialties(antenne);

                    return (
                        <motion.div
                            key={antenne.id}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ y: -5 }}
                            onClick={() => onSelect(antenne)}
                            className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                                isSelected
                                    ? 'ring-4 ring-blue-500 shadow-2xl'
                                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                            }`}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{getBranchName(antenne)}</h3>
                                {getBranchLocation(antenne) && (
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                        <span className="truncate">{getBranchLocation(antenne)}</span>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    {memberCount > 0 && (
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Users className="w-4 h-4 mr-2 text-blue-500" />{memberCount} membres
                                        </div>
                                    )}
                                    {specialties.length > 0 && (
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Award className="w-4 h-4 mr-2 text-orange-500" />{specialties.length} spécialités
                                        </div>
                                    )}
                                </div>
                            </div>
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                >
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

```

### IndividualForm

- **Fichier**: `src/components/forms/adhesion/IndividualMembershipForm.jsx`
- **Props**: `onSubmit, formData, setFormData`
- **Hooks**: useForm, useTranslations
```jsx
// src/components/forms/adhesion/IndividualMembershipForm.jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import { motion } from "framer-motion";
import { FileText, Camera, CreditCard, Send, ArrowRight, User } from "lucide-react";
import { FileUploader } from "./file-uploader.jsx";
import { useTranslations } from 'next-intl';

export const IndividualForm = ({ onSubmit, formData, setFormData }) => {
    const t = useTranslations('adhesion_form');
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: formData
    });

    const handleFormSubmit = (data) => {
        setFormData(data);
        onSubmit(data);
    };

    const inputClasses = "w-full px-3 py-2 border rounded-lg bg-white text-gray-900 border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <motion.form
            onSubmit={handleSubmit(handleFormSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    {t('title')}
                </h2>
                <p className="text-lg text-gray-600">
                    {t('subtitle')}
                </p>
            </div>

            {/* Section Informations personnelles */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-500" />
                    {t('personal_info_title')}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('last_name')} *</label>
                        <input type="text" {...register("nom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('last_name_placeholder')} />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('first_name')} *</label>
                        <input type="text" {...register("prenom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('first_name_placeholder')} />
                        {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('cni_number')} *</label>
                        <input type="text" {...register("numeroCNI", { required: t('errors.required_field') })} className={inputClasses} placeholder="Ex: 123456789" />
                        {errors.numeroCNI && <p className="text-red-500 text-xs mt-1">{errors.numeroCNI.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('dob')} *</label>
                        <input type="date" {...register("dateNaissance", { required: t('errors.required_field') })} className={inputClasses} />
                        {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('phone')} *</label>
                        <input type="tel" {...register("telephone", { required: t('errors.required_field') })} className={inputClasses} placeholder="+237 6XX XX XX XX" />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')} *</label>
                        <input type="email" {...register("email", { required: t('errors.required_field'), pattern: { value: /^\S+@\S+$/i, message: t('errors.invalid_email') } })} className={inputClasses} placeholder="votre.email@exemple.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('address')} *</label>
                    <textarea rows={3} {...register("adresse", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('address_placeholder')} />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profession')} *</label>
                    <input type="text" {...register("profession", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('profession_placeholder')} />
                    {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('motivation')} *</label>
                    <textarea rows={4} {...register("motivation", { required: t('errors.required_field'), minLength: { value: 20, message: t('errors.min_length', { count: 20 }) } })} className={inputClasses} placeholder={t('motivation_placeholder')} />
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>
            </div>

            {/* Section Documents requis */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <Camera className="w-5 h-5 mr-3 text-blue-500" />
                    {t('documents_title')}
                </h3>
                <div className="space-y-6">
                    <Controller name="photoIdentite" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                        <FileUploader label={t('id_photo')} icon={<User />} onFileSelect={field.onChange} required />
                        {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                    </>)} />
                    <div className="grid gap-6 md:grid-cols-2">
                        <Controller name="pieceIdentiteFace" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('id_card_front')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                        <Controller name="pieceIdentiteDos" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('id_card_back')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                    </div>
                </div>
            </div>

            <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Send className="w-5 h-5 mr-2" /> {t('submit_button')} <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
        </motion.form>
    );
};

```

### Confirmation

- **Fichier**: `src/components/forms/adhesion/MembershipConfirmation.jsx`
- **Props**: `membershipId, antenne, onComplete`
- **Hooks**: useState, useTranslations
```jsx
// src/components/forms/adhesion/MembershipConfirmation.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Copy } from "lucide-react";
import { useTranslations } from "next-intl";

export const Confirmation = ({ membershipId, antenne, onComplete }) => {
    const t = useTranslations('adhesion_form');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(membershipId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 p-4"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
                <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('confirmation.title')}</h2>
                <p className="text-gray-600 text-lg">{t('confirmation.subtitle', { antenneName: antenne?.nom || antenne?.name || 'Antenne' })}</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('confirmation.ref_number')}</h3>
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 border border-blue-200">
                    <code className="text-xl font-mono font-bold text-blue-600">{membershipId}</code>
                    <motion.button
                        onClick={copyToClipboard}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </motion.button>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left">
                <h4 className="font-semibold text-gray-900 mb-3">{t('confirmation.next_steps_title')}</h4>
                <ul className="space-y-2 text-gray-600">
                    {[1, 2, 3].map(step => (
                        <li key={step} className="flex items-start">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                                {step}
                            </span>
                            <span>{t(`confirmation.step_${step}`)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-3 justify-center">
                <motion.button
                    onClick={onComplete}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                >
                    {t('confirmation.back_to_home')}
                </motion.button>
            </div>
        </motion.div>
    );
};

```

### UserTypeSelection

- **Fichier**: `src/components/forms/adhesion/UserTypeSelection.jsx`
- **Props**: `onSelect, selectedType`
- **Hooks**: 
```jsx
// src/components/forms/adhesion/UserTypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { User, Building2, CheckCircle } from "lucide-react";

export const UserTypeSelection = ({ onSelect, selectedType }) => {
    const userTypes = [
        { id: 'individual', title: 'Personne physique', description: 'Je souhaite adhérer en tant que personne individuelle.', icon: User, available: true },
        { id: 'organization', title: 'Organisation', description: 'Je représente une organisation ou une entreprise.', icon: Building2, available: false }
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    Type d'adhésion
                </h2>
                <p className="text-lg text-gray-600">Choisissez le type d'adhésion qui vous correspond.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {userTypes.map((type) => (
                    <motion.div
                        key={type.id}
                        onClick={() => type.available && onSelect(type.id)}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                            !type.available
                                ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                                : selectedType === type.id
                                    ? 'border-blue-500 bg-blue-50 shadow-lg cursor-pointer'
                                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md cursor-pointer'
                        }`}
                        whileHover={type.available ? { y: -5 } : {}}
                        whileTap={type.available ? { scale: 0.98 } : {}}
                    >
                        {!type.available && (
                            <div className="absolute top-4 right-4 px-2 py-1 bg-gray-400 text-white text-xs rounded-full">
                                Bientôt disponible
                            </div>
                        )}
                        {selectedType === type.id && type.available && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                                <CheckCircle className="w-4 h-4 text-white" />
                            </motion.div>
                        )}
                        <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                type.available ? 'bg-blue-100' : 'bg-gray-200'
                            }`}>
                                <type.icon className={`w-8 h-8 ${type.available ? 'text-blue-600' : 'text-gray-400'}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                            <p className="text-gray-600 text-sm">{type.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

```

### FileUploader

- **Fichier**: `src/components/forms/adhesion/file-uploader.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useRef
```jsx
// src/components/forms/adhesion/file-uploader.jsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, AlertCircle, X, FileImage, Eye } from "lucide-react";

export const FileUploader = ({ 
    label, 
    icon, 
    accept = "image/*", 
    acceptedFileTypes = "image/*",
    onFileSelect, 
    required = false,
    maxSizeInMB = 5 
}) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    const processFile = (selectedFile) => {
        // Validation de la taille
        if (selectedFile.size > maxSizeInMB * 1024 * 1024) { 
            setError(`Fichier trop volumineux (max ${maxSizeInMB}Mo)`); 
            return; 
        }
        
        // Validation du type de fichier
        const fileType = acceptedFileTypes || accept;
        if (fileType !== "*/*" && !selectedFile.type.match(fileType.replace("/*", "/.*"))) {
            setError(`Type de fichier non supporté. Formats acceptés: ${fileType}`);
            return;
        }
        
        setFile(selectedFile); 
        setError(null); 
        onFileSelect(selectedFile);
        
        // Prévisualisation pour les images
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewUrl(e.target.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) processFile(selectedFile);
    };

    const removeFile = () => { setFile(null); setPreviewUrl(null); onFileSelect(null); if (fileInputRef.current) fileInputRef.current.value = ''; };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-gray-300">
                {label} {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <motion.div onClick={() => fileInputRef.current?.click()} className={`relative cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all duration-300 ${file ? 'border-green-400 bg-green-50 bg-green-900/50' : 'border-gray-300 border-gray-600 bg-white bg-gray-800/50 hover:border-blue-400'}`}>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept={acceptedFileTypes || accept} 
                    className="hidden" 
                />
                {file ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><CheckCircle className="w-6 h-6 text-green-500" /><p className="text-sm font-medium text-gray-900 text-gray-200 truncate">{file.name}</p></div>
                        <button type="button" onClick={(e) => { e.stopPropagation(); removeFile(); }} className="p-1 text-red-500 hover:bg-red-100 rounded-full"><X className="w-4 h-4" /></button>
                    </div>
                ) : (
                    <div className="space-y-1 text-gray-500 text-gray-400">
                        {icon || <Upload className="mx-auto h-8 w-8" />}
                        <p className="text-sm font-semibold">Cliquer ou glisser un fichier</p>
                        <p className="text-xs">
                            {acceptedFileTypes === "image/*" ? "PNG, JPG, GIF" : acceptedFileTypes} (max {maxSizeInMB}Mo)
                        </p>
                    </div>
                )}
            </motion.div>
            <AnimatePresence>{error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1">{error}</motion.p>}</AnimatePresence>
        </div>
    );
};
```

### CreateSyndicateWizard

- **Fichier**: `src/components/forms/create-syndicate/CreateSyndicateWizard.jsx`
- **Props**: `onSuccess`
- **Hooks**: useState, useTranslations, useUser
```jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import { useTranslations } from 'next-intl';
import { createSyndicateAPI } from '@/lib/api/syndicates';
import { useUser } from '@/context/UserContext';

// On garde uniquement les composants nécessaires
import Step2_AnonymousForm from './Step2_AnonymousForm';
import Step3_Antennes from './Step3_Antennes';

export function CreateSyndicateWizard({ onSuccess }) {
    const { user } = useUser();
    const t = useTranslations('create_syndicate');
    
    // MODIFICATION : On commence directement à l'étape 1 (qui est maintenant le formulaire)
    const [currentStep, setCurrentStep] = useState(1);
    
    // On force le type à "anonymous" par défaut
    const [syndicatType] = useState("anonymous");

    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        email: "",
        description: "",
        type: "SOLE_PROPRIETORSHIP",
        domain: "",
        foundedDate: new Date().toISOString().split('T')[0],
        logoFile: null,
        documentFile: null,
    });

    const [antennes, setAntennes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Navigation entre les étapes simplifiée
    const goToStep2 = (dataFromStep1) => {
        setFormData(prev => ({ ...prev, ...dataFromStep1 }));
        setCurrentStep(2);
    };
    
    const goBackToStep1 = () => setCurrentStep(1);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const submissionFormData = new FormData();

            submissionFormData.append('name', formData.name);
            submissionFormData.append('description', formData.description);
            submissionFormData.append('domain', formData.domain);

            if (formData.logoFile) {
                submissionFormData.append('logo', formData.logoFile);
            } else {
                throw new Error("Le logo est obligatoire.");
            }

            if (formData.documentFile) {
                submissionFormData.append('document', formData.documentFile);
            } else {
                throw new Error("Le document des statuts est obligatoire.");
            }

            const result = await createSyndicateAPI(submissionFormData);

            await Swal.fire({
                icon: 'success',
                title: 'Syndicat créé !',
                text: `Le syndicat "${result.name}" a été créé avec succès.`,
                timer: 2000,
                showConfirmButton: false,
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: err.response?.data?.message || err.message || "Une erreur est survenue.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const animationProps = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3, ease: "easeInOut" }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div key="step-form" {...animationProps}>
                        <Step2_AnonymousForm
                            initialData={formData}
                            onNext={goToStep2}
                            onBack={null} // Pas de retour possible car c'est la première étape
                            setFormData={setFormData}
                        />
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div key="step-antennes" {...animationProps}>
                        <Step3_Antennes
                            onBack={goBackToStep1}
                            onSubmit={handleSubmit}
                            antennes={antennes}
                            setAntennes={setAntennes}
                            isLoading={isLoading}
                        />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-2 sm:p-4 bg-white"> {/* Forcé en blanc */}
            <AnimatePresence mode="wait">
                {renderStep()}
            </AnimatePresence>
        </div>
    );
};
```

### FileUploader

- **Fichier**: `src/components/forms/create-syndicate/FileUploader.jsx`
- **Props**: `label, onFileSelect, accept = "image/*", maxSize = 5`
- **Hooks**: useState, useRef
```jsx

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function FileUploader({ label, onFileSelect, accept = "image/*", maxSize = 5 }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > maxSize * 1024 * 1024) {
                setError(`Le fichier est trop volumineux (max ${maxSize} Mo).`);
                setFile(null); onFileSelect(null);
            } else {
                setFile(selectedFile); setError(null); onFileSelect(selectedFile);
            }
        }
    };

    return (
        <div>
            <label className="mb-2 block text-lg font-semibold text-gray-700">{label}</label>
            <motion.div
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="bg-gray-50 border-gray-200 cursor-pointer rounded-lg border-2 border-dashed p-8 text-center"
                onClick={() => fileInputRef.current?.click()}
            >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept={accept} className="hidden" />
                {file ? (
                    <div className="flex items-center justify-center text-blue-800">
                        <CheckCircle className="mr-2" /><span>{file.name}</span>
                    </div>
                ) : (
                    <div>
                        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                        <p>Glissez un fichier ou cliquez pour sélectionner</p>
                    </div>
                )}
            </motion.div>
            {error && <p className="mt-2 flex items-center text-red-500"><AlertCircle className="mr-2" size={16} />{error}</p>}
        </div>
    );
}
```

### InteractiveMap

- **Fichier**: `src/components/forms/create-syndicate/InteractiveMap.jsx`
- **Props**: `onLocationSelect, selectedLocation, height = "400px"`
- **Hooks**: useState, useEffect
```jsx
// src/components/forms/create-syndicate/InteractiveMap.jsx
"use client";

import { useState, useEffect } from "react";
import { Loader2 } from 'lucide-react';

export default function InteractiveMap({ onLocationSelect, selectedLocation, height = "400px" }) {
    const [isMapReady, setIsMapReady] = useState(false);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'locationSelected') {
                onLocationSelect({ lat: event.data.lat, lng: event.data.lng });
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onLocationSelect]);

    const mapHTML = `
        <!DOCTYPE html><html><head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <style>body{margin:0}#map{height:100vh}</style></head>
        <body><div id="map"></div><script>
        var map = L.map('map').setView([3.848, 11.502], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        var marker=null;
        map.on('click',function(e){var lat=e.latlng.lat;var lng=e.latlng.lng;if(marker){map.removeLayer(marker);}marker=L.marker([lat,lng]).addTo(map);window.parent.postMessage({type:'locationSelected',lat:lat,lng:lng},'*');});
        ${selectedLocation ? `marker=L.marker([${selectedLocation.lat},${selectedLocation.lng}]).addTo(map);map.setView([${selectedLocation.lat},${selectedLocation.lng}],10);` : ''}
        </script></body></html>`;

    return (
        <div className="relative w-full rounded-xl overflow-hidden border-2 border-dashed border-blue-300 bg-blue-50" style={{ height }}>
            <iframe srcDoc={mapHTML} className="w-full h-full border-0" onLoad={() => setIsMapReady(true)} title="Carte interactive" />
            {!isMapReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded-xl">
                    <div className="text-center"><Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" /><p>Chargement...</p></div>
                </div>
            )}
        </div>
    );
};
```

### Step1_TypeSelection

- **Fichier**: `src/components/forms/create-syndicate/Step1_TypeSelection.jsx`
- **Props**: `handleTypeSelection`
- **Hooks**: useTranslations
```jsx
// src/components/forms/create-syndicate/Step1_TypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Eye, Award, Shield, ChevronRight, CheckCircle, Users, Lock } from "lucide-react";

export default function Step1_TypeSelection({ handleTypeSelection }) {
    const t = useTranslations('create_syndicate');
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-6">{t('create_your_syndicate')}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">{t('choose_syndicate_type')}</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"><Shield className="w-4 h-4 mr-2" />{t('step_1_of_3')}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div onClick={() => handleTypeSelection("anonymous")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-xl border border-blue-200 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-blue-800 rounded-2xl shadow-lg">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <ChevronRight className="w-6 h-6 text-blue-800 group-hover:translate-x-2 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('anonymous_syndicate')}</h3>
                        <p className="text-blue-800 mb-6 leading-relaxed">{t('anonymous_description')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('immediate_creation')}</span>
                            </div>
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('no_verification_required')}</span>
                            </div>
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('basic_features')}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blue-300">
                            <span className="inline-flex items-center text-sm font-medium text-blue-800">
                                <Users className="w-4 h-4 mr-2" />
                                {t('perfect_to_start')}
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleTypeSelection("accredited")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-xl border border-gray-200 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-blue-500 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">{t('accredited_syndicate')}</h3>
                        <p className="text-blue-700 mb-6 leading-relaxed">{t('accredited_description')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('complete_verification')}</span>
                            </div>
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('official_status')}</span>
                            </div>
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('advanced_features')}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blue-200">
                            <span className="inline-flex items-center text-sm font-medium text-blue-700">
                                <Lock className="w-4 h-4 mr-2" />
                                {t('official_recognition')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Step2_AnonymousForm

- **Fichier**: `src/components/forms/create-syndicate/Step2_AnonymousForm.jsx`
- **Props**: `onNext, onBack, initialData, setFormData`
- **Hooks**: useForm
```jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import {
    ArrowLeft, Building2, Palette, TextCursorInput, Type, LayoutGrid,
    Globe, Share2, UserRound, Image as ImageIcon, Map, AtSign, CalendarCheck, History, ChevronRight
} from 'lucide-react';
import FileUploader from './FileUploader';

const activityDomains = [
    { value: "Transport", label: "Transport" },
    { value: "Commerce", label: "Commerce" },
    { value: "Technologie", label: "Technologie" },
    { value: "Santé", label: "Santé" },
    { value: "Éducation", label: "Éducation" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Industrie", label: "Industrie" },
    { value: "Services", label: "Services" },
    { value: "Autre", label: "Autre" }
];
const syndicatTypes = [
    { value: "SOLE_PROPRIETORSHIP", label: "Entreprise individuelle" },
    { value: "CORPORATION", label: "Société anonyme" }
];

export default function Step2_AnonymousForm({ onNext, onBack, initialData, setFormData }) {
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: initialData
    });

    const handleFormSubmit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        onNext(data);
    };

    const inputClasses = "w-full p-3 border rounded-xl bg-white text-gray-900 border-gray-300 placeholder-gray-400 bg-gray-800 text-gray-200 border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition";
    const selectClasses = `${inputClasses} appearance-none`;

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-5xl mx-auto space-y-8">
            <div className="mb-8">
                <button type="button" onClick={onBack} className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />Retour au choix du type
                </button>
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4">Informations du syndicat</h1>
                    <p className="text-gray-600 text-gray-400 text-lg">Remplissez les informations de base pour créer votre syndicat anonyme.</p>
                </div>
            </div>

            <div className="bg-white bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 text-gray-200 mb-6 flex items-center"><Building2 className="w-6 h-6 mr-3 text-blue-800" />Informations principales</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><TextCursorInput className="w-4 h-4 mr-2 text-blue-800" />Nom complet du syndicat *</label>
                        <input {...register("name", { required: "Le nom complet est requis" })} placeholder="Ex: Syndicat National des Développeurs" className={inputClasses} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><Type className="w-4 h-4 mr-2 text-blue-800" />Nom court / Acronyme *</label>
                        <input {...register("shortName", { required: "L'acronyme est requis" })} placeholder="Ex: SND" className={inputClasses} />
                        {errors.shortName && <p className="text-red-500 text-xs mt-1">{errors.shortName.message}</p>}
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><AtSign className="w-4 h-4 mr-2 text-blue-800" />Email de contact *</label>
                        <input type="email" {...register("email", { required: "L'email est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })} placeholder="contact@syndicat.com" className={inputClasses} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><Building2 className="w-4 h-4 mr-2 text-blue-800" />Type d'organisation *</label>
                        <select {...register("type", { required: true })} className={selectClasses}>
                            {syndicatTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                        </select>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><LayoutGrid className="w-4 h-4 mr-2 text-blue-800" />Domaine d'activité *</label>
                        <select {...register("domain", { required: "Le domaine d'activité est requis" })} className={selectClasses}>
                            <option value="">Sélectionner un domaine</option>
                            {activityDomains.map((domain) => (<option key={domain.value} value={domain.value}>{domain.label}</option>))}
                        </select>
                        {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><History className="w-4 h-4 mr-2 text-blue-800" />Date de fondation *</label>
                        <input type="date" {...register("foundedDate", { required: "La date de fondation est requise" })} className={inputClasses} />
                        {errors.foundedDate && <p className="text-red-500 text-xs mt-1">{errors.foundedDate.message}</p>}
                    </div>
                </div>
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 text-gray-300 mb-2"><Palette className="w-4 h-4 mr-2 text-blue-800" />Description *</label>
                    <textarea {...register("description", { required: "La description est requise" })} rows={4} placeholder="Décrivez les objectifs et la mission de votre syndicat..." className={inputClasses}></textarea>
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                </div>
            </div>

            <div className="bg-white bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 text-gray-200 mb-6 flex items-center"><ImageIcon className="w-6 h-6 mr-3 text-blue-800" />Logo du syndicat</h2>
                <Controller
                    name="logoFile"
                    control={control}
                    rules={{ required: "Le logo est obligatoire" }}
                    render={({ field: { onChange }, fieldState: { error } }) => (
                        <>
                            <FileUploader
                                label="Télécharger le logo"
                                onFileSelect={onChange}
                                accept="image/png,image/jpeg,image/jpg"
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
                <p className="mt-3 text-sm text-gray-500 text-gray-400">Format recommandé : carré, 512x512 pixels minimum, JPG ou PNG (max 5 Mo).</p>
            </div>

            <div className="bg-white bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 text-gray-200 mb-6 flex items-center"><Globe className="w-6 h-6 mr-3 text-blue-800" />Document des statuts</h2>
                <Controller
                    name="documentFile"
                    control={control}
                    rules={{ required: "Le document des statuts est obligatoire" }}
                    render={({ field: { onChange }, fieldState: { error } }) => (
                        <>
                            <FileUploader
                                label="Télécharger les statuts (PDF)"
                                onFileSelect={onChange}
                                accept="application/pdf"
                                maxSize={10}
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
                <p className="mt-3 text-sm text-gray-500 text-gray-400">Document officiel des statuts du syndicat au format PDF (max 10 Mo).</p>
            </div>

            <div className="text-center mt-8">
                <button type="submit" className="w-full md:w-auto py-4 px-8 rounded-2xl font-bold text-white text-lg shadow-lg bg-gradient-to-r from-blue-800 to-blue-900 hover:shadow-xl hover:from-blue-900 hover:to-blue-950 transition-transform transform hover:scale-105">
                    <span className="flex items-center justify-center">
                        <Map className="w-5 h-5 mr-3" />
                        Continuer vers les antennes
                        <ChevronRight className="w-5 h-5 ml-3" />
                    </span>
                </button>
            </div>
        </form>
    );
}
```

### Step3_Antennes

- **Fichier**: `src/components/forms/create-syndicate/Step3_Antennes.jsx`
- **Props**: `onBack, onSubmit, antennes, setAntennes, isLoading`
- **Hooks**: useState
```jsx
// src/components/forms/create-syndicate/Step3_Antennes.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Voiçi la correction : on importe MapPin et on le renomme en MapIcon pour éviter tout conflit.
import { ArrowLeft, Loader2, Rocket, MapPin as MapIcon, Plus, Edit3, Trash2 } from "lucide-react";
import InteractiveMap from './InteractiveMap';

export default function Step3_Antennes({ onBack, onSubmit, antennes, setAntennes, isLoading }) {
    const [currentAntenne, setCurrentAntenne] = useState({ name: "", latitude: null, longitude: null });
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setCurrentAntenne(prev => ({ ...prev, latitude: location.lat, longitude: location.lng }));
    };

    const resetAntenneForm = () => {
        setCurrentAntenne({ name: "", latitude: null, longitude: null });
        setSelectedLocation(null);
        setEditingIndex(null);
    };

    const addOrUpdateAntenne = () => {
        if (!currentAntenne.name || currentAntenne.latitude === null) return;
        if (editingIndex !== null) {
            const updated = [...antennes];
            updated[editingIndex] = currentAntenne;
            setAntennes(updated);
        } else {
            setAntennes([...antennes, currentAntenne]);
        }
        resetAntenneForm();
    };

    const editAntenne = (index) => {
        const antenneToEdit = antennes[index];
        setCurrentAntenne(antenneToEdit);
        if (antenneToEdit.latitude !== null && antenneToEdit.longitude !== null) {
            setSelectedLocation({ lat: antenneToEdit.latitude, lng: antenneToEdit.longitude });
        }
        setEditingIndex(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const deleteAntenne = (index) => {
        if (editingIndex === index) {
            resetAntenneForm();
        }
        setAntennes(antennes.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <button type="button" onClick={onBack} className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />Retour aux informations
                </button>
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Antennes du syndicat</h1>
                    <p className="text-gray-600 text-lg">Ajoutez les différentes localisations de votre syndicat.</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            {/* On utilise notre alias MapIcon ici */}
                            <MapIcon className="w-5 h-5 mr-2 text-blue-500" />
                            Sélectionnez l'emplacement sur la carte
                        </h2>
                        <InteractiveMap onLocationSelect={handleLocationSelect} selectedLocation={selectedLocation} height="450px" />
                    </div>
                    <div className="space-y-4 pt-12">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                            <Plus className="w-5 h-5 mr-2 text-blue-500" />
                            {editingIndex !== null ? 'Modifier l\'antenne' : 'Nouvelle antenne'}
                        </h2>
                        <div>
                            <label htmlFor="antenne-name" className="text-sm font-medium text-gray-700">Nom de l'antenne *</label>
                            <input
                                id="antenne-name"
                                value={currentAntenne.name}
                                onChange={(e) => setCurrentAntenne({ ...currentAntenne, name: e.target.value })}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Ex: Siège social Yaoundé"
                            />
                        </div>
                        <div className="text-sm text-gray-600">
                            <p>Latitude: {currentAntenne.latitude ? currentAntenne.latitude.toFixed(4) : 'N/A'}</p>
                            <p>Longitude: {currentAntenne.longitude ? currentAntenne.longitude.toFixed(4) : 'N/A'}</p>
                        </div>
                        <button
                            onClick={addOrUpdateAntenne}
                            disabled={!currentAntenne.name || currentAntenne.latitude === null}
                            className="w-full py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            {editingIndex !== null ? '✓ Mettre à jour l\'antenne' : '+ Ajouter l\'antenne'}
                        </button>
                        {editingIndex !== null && (
                            <button onClick={resetAntenneForm} className="w-full py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                Annuler la modification
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {antennes.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        {/* On utilise notre alias MapIcon ici aussi pour la cohérence */}
                        <MapIcon className="w-5 h-5 mr-2 text-green-500" />
                        Vos antennes ({antennes.length})
                    </h2>
                    <div className="space-y-3">
                        <AnimatePresence>
                            {antennes.map((antenne, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                    className="p-4 rounded-xl border flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{antenne.name}</h3>
                                        <p className="text-sm text-gray-600">Lat: {antenne.latitude?.toFixed(4)}, Lng: {antenne.longitude?.toFixed(4)}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <button onClick={() => editAntenne(index)} className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg" aria-label="Modifier l'antenne">
                                            <Edit3 size={16} />
                                        </button>
                                        <button onClick={() => deleteAntenne(index)} className="p-2 text-red-500 hover:bg-red-100 rounded-lg" aria-label="Supprimer l'antenne">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}

            <div className="text-center mt-12">
                <button
                    onClick={onSubmit}
                    disabled={isLoading}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg text-white shadow-lg transition transform hover:scale-105 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl'}`}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                            Création en cours...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <Rocket className="w-6 h-6 mr-3" />
                            Finaliser et Créer le syndicat
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}
```

### ActivityFeed

- **Fichier**: `src/components/landing/ActivityFeed.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useEffect, useTranslations
```jsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getRecentPublicPostsAPI } from '@/lib/api/posts';
import { getRecentPublicEventsAPI } from '@/lib/api/event';
import UnifiedPostCard from '@/components/shared/UnifiedPostCard';

// Données de fallback (fake data)
const fakeActivities = [
    {
        id: 1,
        type: 'publication',
        author: {
            name: "Marie Dubois",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            role: "Secrétaire Générale"
        },
        syndicate: {
            name: "Syndicat National des Enseignants",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Nous avons organisé une formation sur les nouveaux outils numériques pour l'enseignement. Plus de 200 enseignants ont participé à cette initiative.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
        timestamp: "Il y a 2 heures",
        likes: 156,
        comments: 23,
        shares: 12
    },
    {
        id: 2,
        type: 'event',
        author: {
            name: "Jean-Pierre Martin",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            role: "Président"
        },
        syndicate: {
            name: "Syndicat des Transporteurs",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        event: {
            title: "Forum sur la Sécurité Routière",
            date: "25 Mars 2025",
            location: "Palais des Congrès, Yaoundé",
            participants: 180
        },
        content: "Rejoignez-nous pour une journée de discussions sur l'amélioration de la sécurité routière. Inscription gratuite pour tous les membres.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
        timestamp: "Il y a 4 heures",
        likes: 89,
        comments: 15,
        shares: 8
    },
    {
        id: 3,
        type: 'publication',
        author: {
            name: "Sophie Kameni",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            role: "Déléguée Régionale"
        },
        syndicate: {
            name: "Syndicat des Agents de Santé",
            avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Lancement de notre campagne de vaccination gratuite dans les quartiers défavorisés. Nos équipes médicales seront présentes dans 15 centres de santé communautaires.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
        timestamp: "Il y a 6 heures",
        likes: 234,
        comments: 31,
        shares: 18
    },
    {
        id: 4,
        type: 'event',
        author: {
            name: "Paul Ngono",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            role: "Coordinateur"
        },
        syndicate: {
            name: "Syndicat des Agriculteurs",
            avatar: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        event: {
            title: "Salon de l'Agriculture Moderne",
            date: "15 Avril 2025",
            location: "Centre Expo, Douala",
            participants: 350
        },
        content: "Découvrez les dernières innovations en matière d'agriculture durable et de techniques modernes. Rencontrez des experts et échangez avec vos pairs.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop",
        timestamp: "Il y a 8 heures",
        likes: 127,
        comments: 22,
        shares: 14
    },
    {
        id: 5,
        type: 'publication',
        author: {
            name: "Aminata Diallo",
            avatar: "https://images.unsplash.com/photo-1594736797933-d0fb6c025b4e?w=100&h=100&fit=crop&crop=face",
            role: "Présidente"
        },
        syndicate: {
            name: "Syndicat des Commerçants",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Félicitations à nos membres qui ont remporté le prix de la meilleure coopérative de l'année ! Leurs efforts pour promouvoir le commerce équitable sont remarquables.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=400&fit=crop",
        timestamp: "Il y a 1 jour",
        likes: 178,
        comments: 19,
        shares: 9
    }
];

export default function ActivityFeed() {
    const t = useTranslations('landing_page');
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les données réelles
    const fetchRealData = async () => {
        try {
            setLoading(true);
            setError(null);

            // Récupérer séparément les publications et événements (max 5 de chaque)
            const [recentPosts, recentEvents] = await Promise.all([
                getRecentPublicPostsAPI(5),
                getRecentPublicEventsAPI(5)
            ]);

            // Convertir les données en format uniforme
            const publications = recentPosts.map(post => ({
                ...post,
                type: 'publication',
                id: post.postId || post.id
            }));

            const events = recentEvents.map(event => ({
                ...event,
                type: 'event',
                id: event.eventId || event.id
            }));

            // Combiner publications et événements
            const allActivities = [...publications, ...events];

            // Si aucune publication ET aucun événement, utiliser fake data
            if (allActivities.length === 0) {
                console.log('Aucune donnée réelle trouvée, utilisation des données factices');
                setActivities(fakeActivities);
            } else {
                // Trier par date de création (les plus récents en premier)
                const sortedActivities = allActivities.sort((a, b) => {
                    const dateA = new Date(a.createdAt || a.startDate);
                    const dateB = new Date(b.createdAt || b.startDate);
                    return dateB - dateA;
                });

                console.log(`Chargement de ${publications.length} publications et ${events.length} événements`);
                setActivities(sortedActivities);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du feed:', error);
            setError(error.message);
            // En cas d'erreur, utiliser les fake data
            setActivities(fakeActivities);
        } finally {
            setLoading(false);
        }
    };

    // Charger les données au montage
    useEffect(() => {
        fetchRealData();
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Actualités
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {t('activity_feed_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('activity_feed_subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-8">
                    {loading ? (
                        // Skeleton loading with improved design
                        [...Array(3)].map((_, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 overflow-hidden animate-pulse border border-slate-100">
                                <div className="p-6 border-b border-slate-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-2 w-32"></div>
                                            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-48"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-3"></div>
                                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-4 w-3/4"></div>
                                    <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl"></div>
                                </div>
                            </div>
                        ))
                    ) : activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="transform hover:scale-[1.01] transition-transform duration-300"
                            >
                                <UnifiedPostCard
                                    item={activity}
                                    type={activity.type}
                                    variant="landing"
                                    showActions={false}
                                />
                            </motion.div>
                        ))
                    ) : (
                        // Message d'erreur ou pas de données avec meilleur design
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 bg-white rounded-3xl shadow-lg border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <p className="text-slate-600 text-lg font-medium">
                                {error ? 'Erreur lors du chargement des activités' : 'Aucune activité disponible pour le moment'}
                            </p>
                            <p className="text-slate-400 text-sm mt-2">Revenez bientôt pour des nouvelles</p>
                        </motion.div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center space-x-3">
                            <span>{t('view_more_news')}</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                    <p className="text-slate-500 mt-4 text-sm">
                        {t('stay_connected_message')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
```

### FeaturesSection

- **Fichier**: `src/components/landing/FeaturesSection.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
"use client";

import { motion } from "framer-motion";
import { Shield, Users, Building, MessageSquare, Calendar, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "Sécurité & Conformité",
            description: "Plateforme sécurisée avec chiffrement des données et respect des réglementations."
        },
        {
            icon: Users,
            title: "Gestion des Membres",
            description: "Outils complets pour gérer les adhésions, cotisations et profils des membres."
        },
        {
            icon: Building,
            title: "Gouvernance Transparente",
            description: "Système de votes électroniques et tableaux de bord pour une gouvernance moderne."
        },
        {
            icon: MessageSquare,
            title: "Communication Intégrée",
            description: "Messagerie instantanée, forums et notifications pour une communication fluide."
        },
        {
            icon: Calendar,
            title: "Événements & Assemblées",
            description: "Organisation simplifiée d'événements avec gestion des inscriptions et rappels."
        },
        {
            icon: BarChart3,
            title: "Analyses & Reporting",
            description: "Tableaux de bord analytiques pour piloter votre organisation avec précision."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Une plateforme complète pour votre syndicat
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Découvrez les fonctionnalités qui transformeront la façon dont vous gérez 
                        votre organisation syndicale
                    </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
                        >
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6">
                                <feature.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

### HeroSection

- **Fichier**: `src/components/landing/HeroSection.jsx`
- **Props**: `heroData`
- **Hooks**: 
```jsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";
export default function HeroSection({ heroData }) {

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {heroData?.title_part1}{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    {heroData?.title_highlighted}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                                {heroData?.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <motion.button
                                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {heroData?.cta_main}
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </motion.button>
                                </Link>
                                <Link href="/explorer">
                                    <motion.button
                                        className="border border-slate-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {heroData?.cta_secondary}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt={heroData?.image_alt}
                                width={1350}
                                height={900}
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

### ModernLandingPage

- **Fichier**: `src/components/landing/ModernLandingPage.jsx`
- **Props**: `N/A`
- **Hooks**: useTranslations
```jsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, Building, MessageSquare, Calendar, BarChart3, Heart, Share2, Clock, MapPin, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Floating animated shapes component
function FloatingShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Cercles animés */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Petits points lumineux */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 12}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                    }}
                />
            ))}
        </div>
    );
}

// Hero Section Component
function HeroSection() {
    const t = useTranslations('heroComponent');

    return (
        <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

            <FloatingShapes />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

            <div className="container relative mx-auto px-4 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-blue-100">Plateforme de gestion syndicale #1</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                                {t('title_part1')}{' '}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                        {t('title_highlighted')}
                                    </span>
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    />
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {t('subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <motion.button
                                        className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {t('cta_main')}
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                </Link>
                                <Link href="/explorer">
                                    <motion.button
                                        className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="flex items-center">
                                            {t('cta_secondary')}
                                            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold"
                                            >
                                                {i}K
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-blue-200 ml-2">+50K membres actifs</span>
                                </div>
                                <div className="h-6 w-px bg-white/20 hidden sm:block" />
                                <div className="flex items-center gap-2 text-sm text-blue-200">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span>Sécurisé & Fiable</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex-1 max-w-2xl z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: -10 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

                            {/* Main image with decorative frame */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt={t('image_alt')}
                                    width={1350}
                                    height={900}
                                    className="rounded-xl shadow-2xl"
                                    priority
                                />

                                {/* Floating card 1 */}
                                <motion.div
                                    className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Nouveaux membres</p>
                                            <p className="text-lg font-bold text-gray-800">+2,847</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating card 2 */}
                                <motion.div
                                    className="absolute -right-6 bottom-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.4, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Événements ce mois</p>
                                            <p className="text-lg font-bold text-gray-800">127</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
                </svg>
            </div>
        </section>
    );
}

// Features Section Component
function FeaturesSection() {
    const t = useTranslations('landing_page');
    const features = [
        {
            icon: Shield,
            title: t('feature_security_title'),
            description: t('feature_security_desc'),
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50"
        },
        {
            icon: Users,
            title: t('feature_members_title'),
            description: t('feature_members_desc'),
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            icon: Building,
            title: t('feature_governance_title'),
            description: t('feature_governance_desc'),
            gradient: "from-violet-500 to-purple-600",
            bgGradient: "from-violet-50 to-purple-50"
        },
        {
            icon: MessageSquare,
            title: t('feature_communication_title'),
            description: t('feature_communication_desc'),
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            icon: Calendar,
            title: t('feature_events_title'),
            description: t('feature_events_desc'),
            gradient: "from-pink-500 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            icon: BarChart3,
            title: t('feature_analytics_title'),
            description: t('feature_analytics_desc'),
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-50 to-blue-50"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container relative mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        Fonctionnalités
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {t('features_section_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('features_section_subtitle')}
                    </p>
                </motion.div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
                        >
                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                                    {feature.description}
                                </p>

                                {/* Arrow indicator on hover */}
                                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-sm">En savoir plus</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Activity Feed Component
function ActivityCard({ activity, index }) {
    const isEvent = activity.type === 'event';
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="p-4 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image
                                src={activity.author.avatar}
                                alt={activity.author.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 text-sm">{activity.author.name}</h3>
                                <span className="text-slate-500 text-xs">•</span>
                                <span className="text-slate-600 text-xs">{activity.author.role}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 text-xs">
                                <span>{activity.syndicate.name}</span>
                                {activity.syndicate.verified && (
                                    <div className="w-3 h-3 bg-blue-700 rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                )}
                                <span>•</span>
                                <span>{activity.timestamp}</span>
                                {isEvent && (
                                    <>
                                        <span>•</span>
                                        <span className="text-blue-700 font-medium">{t('event_label')}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="px-4 pb-0">
                <p className="text-slate-900 text-sm leading-relaxed mb-3">{activity.content}</p>
                
                {isEvent && activity.event && (
                    <div className="mb-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 mb-2 text-sm">{activity.event.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 text-xs gap-3">
                            <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {activity.event.date}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {activity.event.location}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {activity.event.participants} {t('participants')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {activity.image && (
                <div className="px-0 pb-0">
                    <div className="relative overflow-hidden">
                        <Image
                            src={activity.image}
                            alt="Publication"
                            width={800}
                            height={400}
                            className="w-full h-80 object-cover cursor-pointer hover:opacity-95 transition-opacity duration-200"
                        />
                    </div>
                </div>
            )}

            {/* Reactions summary */}
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-slate-500 text-xs">
                    <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-700 rounded-full flex items-center justify-center mr-1">
                                <Heart className="w-2 h-2 text-white fill-current" />
                            </div>
                            <span>{activity.likes}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>{activity.comments} {t('comments')}</span>
                        <span>{activity.shares} {t('shares')}</span>
                    </div>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="px-4 py-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-full">
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('like_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('comment_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('share_button')}</span>
                        </button>
                        {isEvent && (
                            <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ml-2">
                                {t('participate_button')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ActivityFeed() {
    const t = useTranslations('landing_page');
    const activities = [
        {
            id: 1,
            type: 'publication',
            author: {
                name: "Marie Dubois",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                role: "Secrétaire Générale"
            },
            syndicate: {
                name: "Syndicat National des Enseignants",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                verified: true
            },
            content: "Nous avons organisé une formation sur les nouveaux outils numériques pour l'enseignement. Plus de 200 enseignants ont participé à cette initiative.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
            timestamp: "Il y a 2 heures",
            likes: 156,
            comments: 23,
            shares: 12
        },
        {
            id: 2,
            type: 'event',
            author: {
                name: "Jean-Pierre Martin",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                role: "Président"
            },
            syndicate: {
                name: "Syndicat des Transporteurs",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                verified: true
            },
            event: {
                title: "Forum sur la Sécurité Routière",
                date: "25 Mars 2025",
                location: "Palais des Congrès, Yaoundé",
                participants: 180
            },
            content: "Rejoignez-nous pour une journée de discussions sur l'amélioration de la sécurité routière. Inscription gratuite pour tous les membres.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
            timestamp: "Il y a 4 heures",
            likes: 89,
            comments: 15,
            shares: 8
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('activity_feed_title')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {t('activity_feed_subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {activities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        {t('view_more_news')}
                    </button>
                </div>
            </div>
        </section>
    );
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            {value}{suffix}
        </motion.span>
    );
}

// Stats Section Component
function StatsSection() {
    const t = useTranslations('landing_page');
    const stats = [
        { label: t('stats_syndicates'), value: "1,500", suffix: "+", icon: Building },
        { label: t('stats_members'), value: "50,000", suffix: "+", icon: Users },
        { label: t('stats_satisfaction'), value: "98", suffix: "%", icon: Heart },
        { label: t('stats_events'), value: "3,200", suffix: "+", icon: Calendar }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Animated background shapes */}
            <motion.div
                className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container relative mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-white/10">
                        Nos Chiffres
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('stats_section_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
                        {t('stats_section_subtitle')}
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Icon background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Value */}
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </h3>

                            {/* Label */}
                            <p className="text-blue-200 font-medium">{stat.label}</p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Main Landing Page Component
export default function ModernLandingPage() {
    return (
        <div className="scroll-smooth">
            <HeroSection />
            <FeaturesSection />
            <ActivityFeed />
            <StatsSection />
        </div>
    );
}

// Export des composants individuels pour réutilisation
export { HeroSection, FeaturesSection, ActivityFeed, StatsSection };
```

### PopularSyndicates

- **Fichier**: `src/components/landing/PopularSyndicates.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useEffect, useRef, useTranslations, useEnter, useLeave
```jsx

'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import { SyndicateCard } from './SyndicateCard'; // On importe la carte client
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { getAllSyndicatesAPI } from '@/lib/api/syndicate';

export default function PopularSyndicates() {
    const t = useTranslations('landing_page');
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [syndicates, setSyndicates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les syndicats
    const fetchSyndicates = async () => {
        try {
            setLoading(true);
            const response = await getAllSyndicatesAPI(0, 10); // Récupérer 10 syndicats
            setSyndicates(response.content || response || []);
            setError(null);
        } catch (err) {
            console.error('Erreur lors du chargement des syndicats:', err);
            setError(err.message);
            // En cas d'erreur, on garde un tableau vide
            setSyndicates([]);
        } finally {
            setLoading(false);
        }
    };

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
        }
    };

    // Effect pour charger les syndicats au montage du composant
    useEffect(() => {
        fetchSyndicates();
    }, []);

    // Effect pour gérer le scroll et l'auto-scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container && syndicates.length > 0) {
            container.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();

            // Auto-scroll effect
            let autoScrollInterval;
            if (isAutoScrolling) {
                autoScrollInterval = setInterval(() => {
                    const { scrollLeft, scrollWidth, clientWidth } = container;
                    if (scrollLeft >= scrollWidth - clientWidth - 1) {
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: 1, behavior: 'smooth' });
                    }
                }, 30);
            }

            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
                if (autoScrollInterval) clearInterval(autoScrollInterval);
            };
        }
    }, [isAutoScrolling, syndicates.length]);

    return (
        <ClientMotionWrapper delay={0.6} className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Animated decorations */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative mx-auto px-4 z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-white/10">
                        Découvrir
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('syndicats_populaires')}
                    </h2>
                    <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
                        {t('popular_syndicates_subtitle')}
                    </p>
                </div>

                <div className="relative">
                    {/* Bouton gauche */}
                    <button
                        onClick={scrollLeft}
                        className={`absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl rounded-2xl p-3 md:p-4 transition-all duration-300 border border-white/50 ${
                            canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
                        }`}
                        disabled={!canScrollLeft}
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
                    </button>

                    {/* Bouton droit */}
                    <button
                        onClick={scrollRight}
                        className={`absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl rounded-2xl p-3 md:p-4 transition-all duration-300 border border-white/50 ${
                            canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
                        }`}
                        disabled={!canScrollRight}
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
                    </button>

                    {/* Gradient fades on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

                    {/* Container de défilement */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsAutoScrolling(false)}
                        onMouseLeave={() => setIsAutoScrolling(true)}
                    >
                        {loading ? (
                            // Skeleton loading avec meilleur design
                            [...Array(4)].map((_, index) => (
                                <div key={index} className="flex-shrink-0 w-80">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 animate-pulse">
                                        <div className="h-48 bg-gradient-to-br from-white/10 to-white/5"></div>
                                        <div className="p-6">
                                            <div className="h-6 bg-white/10 rounded-lg mb-4"></div>
                                            <div className="h-4 bg-white/10 rounded-lg w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : syndicates.length > 0 ? (
                            syndicates.map((syndicat, index) => (
                                <div
                                    key={syndicat.id}
                                    className="flex-shrink-0 w-80 transform transition-transform duration-300 hover:scale-105"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <SyndicateCard syndicat={syndicat} />
                                </div>
                            ))
                        ) : (
                            // Message si aucun syndicat avec meilleur design
                            <div className="flex-shrink-0 w-full text-center py-16">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white/50" />
                                </div>
                                <p className="text-white/80 text-lg font-medium">
                                    {error ? 'Erreur lors du chargement des syndicats' : 'Aucun syndicat disponible pour le moment'}
                                </p>
                                <p className="text-white/50 text-sm mt-2">Revenez bientôt pour découvrir nos syndicats</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </ClientMotionWrapper>
    );
}
```

### StatsSection

- **Fichier**: `src/components/landing/StatsSection.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
    const stats = [
        { label: "Syndicats partenaires", value: "1,500+" },
        { label: "Membres actifs", value: "50,000+" },
        { label: "Satisfaction client", value: "98%" },
        { label: "Événements organisés", value: "3,200+" }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Une plateforme de confiance
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Rejoignez des milliers d'organisations qui nous font confiance
                    </p>
                </div>
                
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

### SyndicateCard

- **Fichier**: `src/components/landing/SyndicateCard.jsx`
- **Props**: `syndicat`
- **Hooks**: 
```jsx
'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight } from 'lucide-react';

export function SyndicateCard({ syndicat }) {
    const formatMembers = (count) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        } else if (count >= 1000) {
            return `${(count / 1000).toFixed(0)}k`;
        }
        return count.toString();
    };

    // Gestion de la compatibilité entre les données fake et les données réelles de l'API
    const imageUrl = syndicat.bannerUrl || syndicat.image || '/placeholder-image.jpg';
    const memberCount = syndicat.memberCount || syndicat.members || 0;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{formatMembers(memberCount)} membres</span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">
                    {syndicat.name}
                </h3>
                
                <Link href={`/explorer/${syndicat.id}`}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
                        En savoir plus
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
```

### AppFooter

- **Fichier**: `src/components/layout/AppFooter.jsx`
- **Props**: `N/A`
- **Hooks**: useTranslations
```jsx
// src/components/layout/AppFooter.jsx
"use client";

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AppFooter() {
    const t = useTranslations('footer');

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:contact@u-gate.com', label: 'Email' },
    ];
    
    return (
        <footer className="bg-white/50 bg-gray-800/50 backdrop-blur-sm border-t border-gray-200/80 border-white/10 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 text-gray-400">
                        © {new Date().getFullYear()} U-Gate. {t('footer.all_rights_reserved')}
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="p-2 text-gray-500 text-gray-400 hover:text-blue-600 hover:text-blue-400 hover:bg-gray-100 hover:bg-gray-700 rounded-full transition-colors"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                <link.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
```

### LandingPageFooter

- **Fichier**: `src/components/layout/LandingPageFooter.jsx`
- **Props**: `N/A`
- **Hooks**: useTranslations
```jsx

"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import UGateIcon from '@/components/shared/UGateIcon';
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

export default function LandingPageFooter() {
    const t = useTranslations('footer');

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { href: '/about', label: t("a_propos") },
        { href: '/services', label: t("services") },
        { href: '/contact', label: t("contact") },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Decorative gradient blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top section with CTA */}
                <div className="border-b border-white/10">
                    <div className="container mx-auto px-4 py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                        >
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Prêt à transformer votre syndicat ?
                                </h3>
                                <p className="text-blue-200">
                                    Rejoignez des milliers d'organisations qui nous font confiance.
                                </p>
                            </div>
                            <Link href="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                                >
                                    Commencer gratuitement
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Middle section with links */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-2 mb-6">
                                <UGateIcon className="h-8 w-8 text-white" showText={true} />
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {t("description_plateforme")}
                            </p>
                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">{t("liens_rapides")}</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-cyan-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">Ressources</h4>
                            <ul className="space-y-4">
                                {['Documentation', 'Guide d\'utilisation', 'FAQ', 'Support'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-cyan-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">{t("suivez_nous")}</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 text-slate-400">
                                    <MapPin className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                                    <span>Yaoundé, Cameroun</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-400">
                                    <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span>contact@ugate.cm</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-400">
                                    <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span>+237 6XX XXX XXX</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-slate-500 text-sm text-center md:text-left">
                                © {new Date().getFullYear()} UGate. Tous droits réservés.
                            </p>
                            <p className="text-slate-500 text-sm flex items-center">
                                Fait avec <Heart className="w-4 h-4 mx-1 text-red-500" /> au Cameroun
                            </p>
                            <div className="flex items-center space-x-6 text-sm">
                                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                                    Politique de confidentialité
                                </Link>
                                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                                    Conditions d'utilisation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
```

### LandingPageHeader

- **Fichier**: `src/components/layout/LandingPageHeader.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useEffect, usePathname, useRouter, useTranslations, useLocale
```jsx

"use client";

import { useState, useEffect } from 'react';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, Globe, ChevronDown, Menu, X } from 'lucide-react';
import UGateIcon from '@/components/shared/UGateIcon';


export default function LandingPageHeader() {
    const t = useTranslations('header');
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Detect scroll for header background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (newLocale) => {
        router.push(pathname, { locale: newLocale });
        setOpenDropdown(false);
    };

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'}`}
                        >
                            <UGateIcon className="h-9 w-9" showText={true} />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <motion.button
                                onClick={() => setOpenDropdown(prev => !prev)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                                        : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
                                }`}
                            >
                                <Globe className="h-4 w-4" />
                                <span className="font-medium">{locale.toUpperCase()}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                            </motion.button>

                            <AnimatePresence>
                                {openDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl py-2 w-48 z-50 border border-slate-100 overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-blue-50 w-full text-left transition-colors duration-200 ${
                                                    locale === lang.code ? 'bg-blue-50 text-blue-700 font-semibold' : ''
                                                }`}
                                            >
                                                <span className="text-lg">{lang.flag}</span>
                                                <span>{lang.name}</span>
                                                {locale === lang.code && (
                                                    <motion.div
                                                        layoutId="activeLanguage"
                                                        className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Login Button */}
                        <Link href="/login">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-5 py-2.5 rounded-xl font-semibold flex items-center transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                                }`}
                            >
                                <LogIn className="mr-2 h-4 w-4" />
                                {t("seConnecter")}
                            </motion.button>
                        </Link>

                        {/* Register Button */}
                        <Link href="/register">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                            >
                                <UserPlus className="mr-2 h-4 w-4" />
                                {t("sinscrire")}
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-xl transition-colors ${
                            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                        }`}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-slate-100"
                        >
                            {/* Mobile Language Selector */}
                            <div className="mb-4 pb-4 border-b border-slate-100">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Langue</p>
                                <div className="flex space-x-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                                locale === lang.code
                                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.code.toUpperCase()}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Buttons */}
                            <div className="space-y-3">
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full px-4 py-3 rounded-xl font-semibold flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                                        <LogIn className="mr-2 h-4 w-4" />
                                        {t("seConnecter")}
                                    </button>
                                </Link>
                                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        {t("sinscrire")}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
```

### LanguageSwitcher

- **Fichier**: `src/components/layout/LanguageSwitcher.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useRouter, usePathname, useLocale
```jsx
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
                className="flex items-center space-x-1 p-2 rounded-full text-gray-600 text-gray-300 hover:bg-gray-100 hover:bg-gray-800 transition-colors"
            >
                <Globe size={22} />
                <span className="font-semibold uppercase">{currentLocale}</span>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-700">
                    {['fr', 'en', 'de'].map((locale) => (
                        <button
                            key={locale}
                            onClick={() => handleChange(locale)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 text-gray-200 hover:bg-gray-100 hover:bg-gray-700"
                        >
                            {languages[locale]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
```

### ThemeProvider

- **Fichier**: `src/components/layout/ThemeProvider.jsx`
- **Props**: `children, ...props`
- **Hooks**: 
```jsx

"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
    // On utilise l'attribut "class" pour que Tailwind (darkMode: 'class') fonctionne
    return <NextThemesProvider attribute="class" {...props}>{children}</NextThemesProvider>;
}
```

### ThemeSwitcher

- **Fichier**: `src/components/layout/ThemeSwitcher.jsx`
- **Props**: `N/A`
- **Hooks**: useTheme, useEffect, useState
```jsx
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
        <div className="w-[22px] h-[22px] bg-gray-200 bg-gray-700 rounded-full animate-pulse"></div>
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
      className="p-2 rounded-full text-gray-600 text-gray-300 hover:bg-gray-100 hover:bg-gray-700 transition-colors"
      aria-label="Changer de thème"
    >
      {resolvedTheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
```

### DynamicFieldArray

- **Fichier**: `src/components/settings/DynamicFieldArray.jsx`
- **Props**: `name, placeholder, t`
- **Hooks**: useFieldArray, useFormContext
```jsx
// src/components/settings/DynamicFieldArray.jsx
"use client";

import { useFieldArray, useFormContext } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

/**
 * Un composant réutilisable pour gérer un tableau de champs de formulaire dynamiques.
 * Doit être utilisé à l'intérieur d'un composant <FormProvider>.
 *
 * @param {string} name - Le nom du champ dans les données du formulaire (ex: "formations").
 * @param {string} placeholder - Le texte d'exemple pour les champs input.
 * @param {function} t - La fonction de traduction passée en prop.
 */
export default function DynamicFieldArray({ name, placeholder, t }) {
    // Récupère les méthodes du formulaire depuis le contexte fourni par <FormProvider>
    const { control, register, formState: { errors } } = useFormContext();

    // Le hook magique de react-hook-form pour gérer les tableaux de champs
    const { fields, append, remove } = useFieldArray({
        control, // Lie le tableau au contrôle du formulaire
        name: name  // Spécifie quel champ du formulaire est un tableau
    });

    // Constante pour les styles des inputs pour la cohérence
    const inputClasses = "flex-grow p-3 border rounded-lg bg-white text-gray-900 border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

    return (
        <div>
            <div className="space-y-3">
                <AnimatePresence>
                    {fields.map((field, index) => {
                        // Accède aux erreurs spécifiques pour ce champ dans le tableau
                        const fieldError = errors[name]?.[index]?.value;

                        return (
                            <motion.div
                                key={field.id} // react-hook-form fournit un 'id' stable pour chaque champ
                                layout // Permet une animation fluide lors de la suppression d'un élément
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                className="flex items-start gap-3"
                            >
                                <div className="flex-grow">
                                    <input
                                        // Enregistre le champ avec un nom indexé, ex: "formations.0.value"
                                        {...register(`${name}.${index}.value`, {
                                            required: t('errors.field_cant_be_empty')
                                        })}
                                        placeholder={`${placeholder} #${index + 1}`}
                                        className={`${inputClasses} ${fieldError ? 'border-red-500' : ''}`}
                                    />
                                    {fieldError && <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>}
                                </div>
                                <motion.button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="p-3 text-red-500 hover:bg-red-100 rounded-lg transition-colors mt-px"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Supprimer la formation ${index + 1}`}
                                >
                                    <Trash2 size={20} />
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <motion.button
                type="button"
                onClick={() => append({ value: "" })}
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm mt-4 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Plus size={16} className="mr-2" />
                {t('add_formation_button')}
            </motion.button>
        </div>
    );
}
```

### FormSection

- **Fichier**: `src/components/settings/FormSection.jsx`
- **Props**: `title, icon: Icon, children`
- **Hooks**: 
```jsx
// src/components/settings/FormSection.jsx
"use client";

import { motion } from 'framer-motion';

export default function FormSection({ title, icon: Icon, children }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon className="w-6 h-6 mr-3 text-blue-500" />
                {title}
            </h3>
            <div className="space-y-6">
                {children}
            </div>
        </motion.div>
    );
}
```

### ProfileHeader

- **Fichier**: `src/components/settings/ProfileHeader.jsx`
- **Props**: `onAvatarClick`
- **Hooks**: useFormContext
```jsx
// src/components/settings/ProfileHeader.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Edit, Mail, Phone } from 'lucide-react';
import { useFormContext } from 'react-hook-form'; // Pour interagir avec le formulaire

export default function ProfileHeader({ onAvatarClick }) {
    const { watch } = useFormContext(); // Récupère les données du formulaire en temps réel

    // On "watch" les champs pour que le header se mette à jour pendant la saisie
    const firstName = watch("firstName");
    const lastName = watch("lastName");
    const email = watch("email");
    const phone = watch("phone");
    const profilePicture = watch("profilePicture"); // La nouvelle image uploadée
    const initialProfilePicture = watch("initialProfilePicture"); // L'image initiale

    // Affiche l'aperçu de la nouvelle image ou l'image initiale
    const displayPicture = profilePicture instanceof File
        ? URL.createObjectURL(profilePicture)
        : initialProfilePicture;

    return (
        <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                    <Image
                        src={displayPicture || "/default-avatar.png"}
                        alt="Photo de profil"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
                    />
                    <button
                        type="button"
                        onClick={onAvatarClick}
                        className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-110"
                        aria-label="Changer la photo de profil"
                    >
                        <Edit size={16} />
                    </button>
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {firstName} {lastName}
                    </h2>
                    <div className="mt-2 space-y-1 text-gray-600">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Mail size={16} className="text-blue-500" />
                            {email}
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Phone size={16} className="text-green-500" />
                            {phone}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
```

### UserProfileForm

- **Fichier**: `src/components/settings/UserProfileForm.jsx`
- **Props**: `initialData`
- **Hooks**: useForm, useTranslations, useFieldArray
```jsx
// src/components/settings/UserProfileForm.jsx
"use client";

import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { User, Phone, Mail, Camera, FileText, GraduationCap, Save } from 'lucide-react';
import FormSection from './FormSection';
import ProfileHeader from './ProfileHeader';
import DynamicFieldArray from './DynamicFieldArray';
import { FileUploader } from '../forms/adhesion/file-uploader'; // On réutilise ce composant
import { updateUser } from "@/lib/api/auth";

export default function UserProfileForm({ initialData }) {
    const t = useTranslations('settings_page');
    const t_adhesion = useTranslations('adhesion_form');

    // On transforme la liste de strings en objets pour `useFieldArray`
    const transformedData = {
        ...initialData,
        formations: initialData.formations.map(f => ({ value: f })),
        initialProfilePicture: initialData.profilePicture // On sauvegarde l'URL initiale
    };

    const methods = useForm({ defaultValues: transformedData });
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = methods;

    const onSubmit = async (data) => {
        // On re-transforme les données avant de les envoyer
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            formations: data.formations.map(f => f.value).filter(f => f) // On garde que les valeurs non-vides
        };
        
        try {
            await updateUser(initialData.id, payload);
            Swal.fire({
                icon: "success",
                title: t("success_title"),
                text: t("success_message"),
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil:", error);
            const errorMessage = error.response?.data?.message || t("error_message");
            Swal.fire({
                icon: "error",
                title: t("error_title"),
                text: errorMessage,
            });
        }
    };

    return (
        // FormProvider permet aux composants enfants d'accéder aux méthodes du formulaire
        <FormProvider {...methods}>
            <ProfileHeader onAvatarClick={() => document.getElementById('profilePictureInput')?.click()} />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <FormSection title={t('personal_info_title')} icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('first_name')}*</label>
                            <input {...register("firstName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('last_name')}*</label>
                            <input {...register("lastName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('phone')}*</label>
                            <input type="tel" {...register("phone", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('email')}*</label>
                            <input type="email" {...register("email", { required: true })} className="w-full ..." disabled />
                            <p className="text-xs text-gray-500 mt-1">{t('email_disabled_info')}</p>
                        </div>
                    </div>
                </FormSection>

                <FormSection title={t('professional_info_title')} icon={FileText}>
                    <div id="profilePictureInput">
                        <Controller name="profilePicture" control={control} render={({ field }) => <FileUploader label={t_adhesion('id_photo')} onFileSelect={field.onChange} />} />
                    </div>
                    <Controller name="cv" control={control} render={({ field }) => <FileUploader label="CV (.pdf, .doc)" onFileSelect={field.onChange} accept=".pdf,.doc,.docx" />} />
                </FormSection>

                <FormSection title={t('formations_title')} icon={GraduationCap}>
                    <DynamicFieldArray name="formations" placeholder="Ex: Licence en Informatique" t={t} />
                </FormSection>

                <div className="flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                        <Save size={18} />
                        {isSubmitting ? t('saving_button') : t('save_button')}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
```

### ClientMotionWrapper

- **Fichier**: `src/components/shared/ClientMotionWrapper.jsx`
- **Props**: `children, delay = 0, className = ""`
- **Hooks**: 
```jsx

"use client";

import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function ClientMotionWrapper({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
```

### EventCard

- **Fichier**: `src/components/shared/EventCard.jsx`
- **Props**: `icon: Icon, text, colorClass = 'blue'`
- **Hooks**: useState, useTranslations
```jsx
// src/components/shared/EventCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, MapPin, Clock, Users, User, CheckCircle } from "lucide-react";
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';

// Composant InfoPill (inchangé)
const InfoPill = ({ icon: Icon, text, colorClass = 'blue' }) => (
    <div className={`flex items-center px-3 py-1.5 bg-${colorClass}-50 bg-${colorClass}-900/50 rounded-full`}>
        <Icon className={`w-4 h-4 mr-2 text-${colorClass}-500 text-${colorClass}-400`} />
        <span className={`text-xs font-semibold text-${colorClass}-800 text-${colorClass}-200`}>{text}</span>
    </div>
);

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isParticipating, setIsParticipating] = useState(false);
    const t = useTranslations('common');

    // S'assurer que event.startDate et event.endDate sont des objets Date valides
    const startDate = event.startDate ? new Date(event.startDate) : new Date();
    const endDate = event.endDate ? new Date(event.endDate) : new Date();

    const formattedDate = startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    const formattedTime = `${startDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;

    const handleParticipate = () => {
        const newParticipationState = !isParticipating;
        setIsParticipating(newParticipationState);
        
        // S'assurer que event.participants est un tableau avant de le manipuler
        const currentParticipants = Array.isArray(event.participants) ? [...event.participants] : [];
        const updatedParticipants = newParticipationState
            ? [...currentParticipants, { name: "Vous" }]
            : currentParticipants.filter(p => p.name !== "Vous");
        
        if (onUpdateEvent) {
            onUpdateEvent({ ...event, participants: updatedParticipants });
        }
    };

    // Utilisation de Array.isArray pour la robustesse sur le nombre de participants
    const participantsCount = Array.isArray(event.participants) ? event.participants.length : 0;
    const participantsToDisplay = Array.isArray(event.participants) ? event.participants : [];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl shadow-black/20 overflow-hidden mb-8 w-full max-w-xl mx-auto border border-gray-200/80 border-white/10"
        >
            <div className="relative h-56 group">
                <Image
                    src={event.image || "/placeholder-cover.jpg"}
                    alt={event.title}
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {event.isUpcoming && (
                    <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                        {t('events_page.upcoming')}
                    </div>
                )}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-2xl font-bold drop-shadow-lg">{event.title}</h2>
                    <div className="flex items-center text-sm opacity-90 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formattedDate}</span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center mb-5">
                    {event.author && event.author.profileImage ? (
                        <Image 
                            src={event.author.profileImage || "/default-avatar.png"} 
                            alt={event.author.name || "Auteur"} 
                            width={40} height={40} 
                            className="w-10 h-10 rounded-full object-cover" 
                        />
                    ) : (
                        <SyndicatDefaultAvatar 
                            name={event.author?.name || "User"}
                            size={40} 
                            className="w-10 h-10" 
                        />
                    )}
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-800 text-gray-100">{event.author?.name || "Utilisateur inconnu"}</p>
                        <p className="text-xs text-gray-500 text-gray-400">Organisateur</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <InfoPill icon={Clock} text={formattedTime} colorClass="blue" />
                    <InfoPill icon={MapPin} text={event.location} colorClass="purple" />
                </div>

                <motion.p layout className="text-gray-700 text-gray-300 mb-5 leading-relaxed text-sm">
                    {isExpanded ? event.description : `${(event.description || '').slice(0, 120)}...`}
                    {(event.description || '').length > 120 && (
                        <button onClick={() => setIsExpanded(!isExpanded)} className="ml-1 text-blue-500 hover:underline font-semibold text-sm">
                            {isExpanded ? t("events_page.see_less") : t("events_page.see_more")}
                        </button>
                    )}
                </motion.p>
                
                <button onClick={() => onShowParticipants(event)} className="flex items-center justify-between w-full text-sm text-gray-600 text-gray-400 mb-6 p-2 rounded-lg hover:bg-gray-100 hover:bg-gray-700/50">
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {/* Utilise participantsCount pour la fiabilité */}
                        <span className="font-medium">{participantsCount} {t("participants", { count: participantsCount })}</span>
                    </div>
                    <div className="flex -space-x-3">
                        {/* Utilise participantsToDisplay qui est garanti être un tableau */}
                        {participantsToDisplay.slice(0, 4).map((p, i) => (
                             <div key={i} className="w-7 h-7 bg-gray-300 rounded-full border-2 border-white border-gray-800 flex items-center justify-center text-xs font-bold text-gray-600">
                                {p.name.charAt(0)}
                             </div>
                        ))}
                        {participantsCount > 4 && 
                            <div className="w-7 h-7 bg-gray-200 text-gray-600 text-xs font-bold rounded-full border-2 border-white border-gray-800 flex items-center justify-center">+{participantsCount - 4}</div>
                        }
                    </div>
                </button>

                <motion.button
                    onClick={handleParticipate}
                    className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${isParticipating ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'}`}
                    whileHover={{ scale: 1.02 }}
                >
                    {isParticipating ? <CheckCircle /> : <Calendar />}
                    {isParticipating ? t("events_page.participating") : t("events_page.participate_button")}
                </motion.button>
            </div>
        </motion.div>
    );
}
```

### EventsList

- **Fichier**: `src/components/shared/EventsList.jsx`
- **Props**: `limit = 3, events = eventsData`
- **Hooks**: 
```jsx
// src/components/shared/EventsList.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";

// Les données peuvent venir de props ou être définies ici pour la démo
const eventsData = [
    {
        id: "1",
        title: "Forum sur la Sécurité Routière",
        date: "15 Juillet 2023",
        time: "09:00 - 17:00",
        location: "Palais des Congrès, Yaoundé",
        description:
            "Rejoignez-nous pour une journée de discussions et d'ateliers sur l'amélioration de la sécurité routière au Cameroun...",
        image:
            "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        participants: 250,
    },
    // ... autres événements
];

export default function EventsList({ limit = 3, events = eventsData }) {
    return (
        <div className="max-w-full mx-auto py-6 px-4">
            <AnimatePresence>
                {events.slice(0, limit).map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </AnimatePresence>
        </div>
    );
}
```

### NavigationLoader

- **Fichier**: `src/components/shared/NavigationLoader.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
// src/components/shared/NavigationLoader.jsx
"use client";

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // On utilise une icône de chargement de lucide-react

export default function NavigationLoader() {
    return (
        // Conteneur principal qui prend tout l'écran et applique l'effet de flou
        <div className="fixed inset-0 bg-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <motion.div
                // Animation d'apparition
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center space-x-4 p-4 bg-white bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 border-gray-700"
            >
                {/* Le spinner qui tourne */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <Loader2 className="w-8 h-8 text-blue-500" />
                </motion.div>

                {/* Le texte "Loading..." avec une animation de points */}
                <div className="text-xl font-semibold text-gray-700 text-gray-300">
                    Loading
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    >.</motion.span>
                </div>
            </motion.div>

        </div>
    );
}
```

### PublicationCard

- **Fichier**: `src/components/shared/PublicationCard.jsx`
- **Props**: `publication`
- **Hooks**: useTranslations
```jsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heart, MessageCircle, Clock, Share2 } from "lucide-react";

export default function PublicationCard({ publication }) {
    const t = useTranslations('common');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-md p-6 mb-6 relative w-full max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-lg"
        >
            <div className="flex items-center mb-4">
                <Image
                    src={publication.author.avatar || "/placeholder.svg"}
                    alt={publication.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                    <h4 className="font-semibold text-lg text-gray-800">{publication.author.name}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{publication.timestamp}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{publication.content}</p>
            {publication.image && (
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={publication.image}
                        alt="Publication content"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                    />
                </div>
            )}
            <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    {publication.likes} {t("jaime")}
                </span>
                <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                    {publication.comments} {t("commentaires")}
                </span>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-blue-600"
                >
                    <Share2 className="w-4 h-4 mr-1" />
                    {t("partager")}
                </motion.button>
            </div>
        </motion.div>
    );
};
```

### PublicationsList

- **Fichier**: `src/components/shared/PublicationsList.jsx`
- **Props**: `limit = 3, publications = publicationsData`
- **Hooks**: 
```jsx

import PublicationCard from "./PublicationCard";

const publicationsData = [
    {
        id: 1,
        author: {
            name: "Syndicat National des Transporteurs Routiers du Cameroun",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        },
        content: "Nous sommes heureux d'annoncer que suite à nos négociations...",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        timestamp: "Il y a 2 heures",
        likes: 245,
        comments: 37,
    },
    // ... autres publications
];


export default function PublicationsList({ limit = 3, publications = publicationsData }) {
    return (
        <div className="space-y-6">
            {publications.slice(0, limit).map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
            ))}
        </div>
    );
}
```

### SearchModal

- **Fichier**: `src/components/shared/SearchModal.jsx`
- **Props**: `isOpen, onClose`
- **Hooks**: useState, useCallback, useEffect, useRouter, useTranslations, useNavigate
```jsx

"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter, Building } from "lucide-react";
import { useRouter } from '@/navigation';
import { useTranslations } from "next-intl";

const allSyndicats = [
    { id: 1, name: "Syndicat National de l'Éducation", members: 250000, category: "Éducation" },
    { id: 2, name: "Union des Travailleurs de la Santé", members: 180000, category: "Santé" },
    { id: 3, name: "Fédération des Employés du Commerce", members: 150000, category: "Commerce" },
    { id: 4, name: "Syndicat des Transports Publics", members: 120000, category: "Transport" },
    { id: 5, name: "Association des Ingénieurs", members: 90000, category: "Ingénierie" },
];

export default function SearchModal({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSyndicats, setFilteredSyndicats] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [hasSearched, setHasSearched] = useState(false);
    const router = useRouter(); // Remplacement de useNavigate
    const t = useTranslations('common');

    const handleSearch = useCallback(() => {
        const filtered = allSyndicats.filter(
            (syndicat) =>
                syndicat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory === "Tous" || syndicat.category === selectedCategory)
        );
        setFilteredSyndicats(filtered);
        setHasSearched(true);
    }, [searchTerm, selectedCategory]);

    const handleSyndicatClick = (syndicat) => {
        // Naviguer vers une page de profil dynamique
        router.push(`/syndicat/${syndicat.id}`);
        onClose(); // Fermer la modale après la navigation
    };

    // Ajout d'un useEffect pour gérer la touche "Echap"
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);


    const categories = ["Tous", ...new Set(allSyndicats.map((s) => s.category))];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-start pt-20 px-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <input
                                    type="text"
                                    placeholder={t("rechercher_syndicat")}
                                    className="flex-grow text-lg focus:outline-none border-b-2 border-blue-700 pb-2"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    className="ml-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                                >
                                    {t("rechercher")}
                                </button>
                                <button onClick={onClose} className="ml-4 text-gray-400 hover:text-gray-600">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2 flex items-center">
                                    <Filter className="h-4 w-4 mr-1" /> Filtrer par catégorie
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                selectedCategory === category
                                                    ? "bg-blue-700 text-white"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            } transition duration-300`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {hasSearched && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700 mb-4">{t("resultats_recherche")}</h3>
                                    {filteredSyndicats.length > 0 ? (
                                        <ul className="space-y-4">
                                            {filteredSyndicats.map((syndicat) => (
                                                <motion.li
                                                    key={syndicat.id}
                                                    className="flex items-center p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition duration-300 ease-in-out cursor-pointer"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    onClick={() => handleSyndicatClick(syndicat)}
                                                >
                                                    <Building className="h-10 w-10 text-blue-700 mr-4" />
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-gray-800">{syndicat.name}</h4>
                                                        <p className="text-sm text-gray-500">
                                                            {syndicat.members.toLocaleString()} membres • {syndicat.category}
                                                        </p>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500 text-center py-4">{t("aucun_resultat_trouve")} "{searchTerm}"</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### SyndicatDefaultAvatar

- **Fichier**: `src/components/shared/SyndicatDefaultAvatar.jsx`
- **Props**: `str`
- **Hooks**: 
```jsx
// src/components/shared/SyndicatDefaultAvatar.jsx
"use client"; // Ce composant n'a pas besoin d'état, mais il est préférable de le marquer comme client car il sera souvent utilisé dans des contextes interactifs.

import { motion } from 'framer-motion';

/**
 * Calcule une couleur de fond basée sur le hash du nom du syndicat pour un affichage cohérent.
 * @param {string} name - Le nom du syndicat.
 * @returns {string} Une classe de couleur Tailwind CSS.
 */
const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
        'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-orange-500', 
        'bg-red-500', 'bg-teal-500', 'bg-indigo-500', 'bg-pink-500'
    ];
    return colors[Math.abs(hash % colors.length)];
};

/**
 * Extrait les initiales d'un nom de syndicat (jusqu'à 2 lettres).
 * @param {string} name - Le nom du syndicat.
 * @returns {string} Les initiales en majuscules.
 */
const getInitials = (name) => {
    if (!name) return '?';
    const words = name.trim().split(/\s+/);
    if (words.length > 1) {
        return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};

/**
 * Affiche un avatar par défaut pour un syndicat, avec ses initiales et une couleur de fond déterministe.
 * @param {string} name - Le nom du syndicat.
 * @param {number} [size=40] - La taille de l'avatar en pixels.
 * @param {string} [className=""] - Classes CSS additionnelles.
 */
export function SyndicatDefaultAvatar({ name, size = 40, className = "" }) {
    const initials = getInitials(name);
    const bgColorClass = stringToColor(name || "default");

    const fontSize = size / 2.5; // Calcule une taille de police proportionnelle

    return (
        <motion.div
            className={`flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold ${bgColorClass} ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                fontSize: `${fontSize}px`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {initials}
        </motion.div>
    );
}
```

### ToastProvider

- **Fichier**: `src/components/shared/ToastProvider.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
// src/components/shared/ToastProvider.jsx
"use client"; // Cette directive est la raison d'être de ce composant.

import { Toaster } from 'react-hot-toast';

/**
 * Ce composant est un simple wrapper pour le <Toaster /> de react-hot-toast.
 * En l'isolant dans un Client Component, on peut l'utiliser dans le layout racine
 * sans forcer tout l'arbre de composants à devenir un client component.
 * Il centralise également la configuration du style des toasts pour toute l'application.
 */
export default function ToastProvider() {
    return (
        <Toaster
            position="top-right" // Position des notifications à l'écran
            gutter={8} // Espace entre les notifications
            toastOptions={{
                // Durée par défaut pour tous les toasts
                duration: 4000,

                // Style de base pour tous les toasts
                style: {
                    background: '#ffffff',
                    color: '#111827',
                    border: '1px solid #e5e7eb',
                },

                // Style spécifique pour chaque type de toast
                success: {
                    duration: 3000,
                    theme: {
                        primary: '#10b981', // Vert
                        secondary: '#ffffff',
                    },
                    iconTheme: {
                        primary: '#10b981',
                        secondary: '#ffffff',
                    },
                    style: {
                        background: '#f0fdf4', // Fond vert très clair
                        color: '#14532d', // Texte vert foncé
                        border: '1px solid #bbf7d0', // Bordure verte claire
                    },
                },
                error: {
                    duration: 5000,
                    theme: {
                        primary: '#ef4444', // Rouge
                        secondary: '#ffffff',
                    },
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#ffffff',
                    },
                    style: {
                        background: '#fef2f2', // Fond rouge très clair
                        color: '#991b1b', // Texte rouge foncé
                        border: '1px solid #fecaca', // Bordure rouge claire
                    },
                },
                // Vous pouvez ajouter des styles pour `toast.loading`, `toast.promise`, etc.
            }}
        />
    );
}
```

### UGateIcon

- **Fichier**: `src/components/shared/UGateIcon.jsx`
- **Props**: `className = "h-8 w-8", showText = false, size = 8`
- **Hooks**: 
```jsx
// src/components/shared/UGateIcon.jsx
"use client";

export default function UGateIcon({ className = "h-8 w-8", showText = false, size = 8 }) {
    const iconSize = `${size * 5}`;
    
    return (
        <div className={`flex items-center space-x-2 ${showText ? '' : 'justify-center'}`}>
            <svg 
                className={className} 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ugate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E40AF" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
                <rect width="40" height="40" rx="8" fill="url(#ugate-gradient)" />
                <path d="M8 12h24v16H8z" fill="#ffffff" fillOpacity="0.1" />
                <path d="M12 8v8h4V8h4v8h4V8h4v24H8V8h4z" fill="#ffffff" fillOpacity="0.9" />
                <path d="M16 20h8v8h-8z" fill="#1E40AF" />
                <circle cx="20" cy="24" r="2" fill="#ffffff" />
                <path d="M10 30h20v2H10z" fill="#ffffff" />
                <text x="20" y="36" textAnchor="middle" fontSize="6" fill="#ffffff" fontWeight="bold">U</text>
            </svg>
            {showText && (
                <span className="text-2xl font-bold text-blue-600">U-Gate</span>
            )}
        </div>
    );
}
```

### UnifiedPostCard

- **Fichier**: `src/components/shared/UnifiedPostCard.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useEffect, useTranslations
```jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Heart, MessageCircle, Share2, Flag, Calendar, MapPin, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import timeAgo from "@/lib/utils/timeAgo";
import { STATIC_FILES_URL } from '@/lib/constants';

/**
 * Composant de carte unifié pour les publications et événements
 * Utilisable à la fois dans l'espace syndicat et la landing page
 * 
 * @param {Object} item - L'objet publication ou événement
 * @param {string} type - 'publication' ou 'event'
 * @param {string} variant - 'syndicate' ou 'landing' pour adapter le style
 * @param {Function} onLike - Callback pour le like (optionnel)
 * @param {Function} onComment - Callback pour les commentaires (optionnel)
 * @param {Function} onBookmark - Callback pour bookmark (optionnel)
 * @param {boolean} showActions - Afficher ou non les actions (défaut: true)
 */
export default function UnifiedPostCard({ 
    item, 
    type = 'publication', 
    variant = 'landing',
    onLike,
    onComment,
    onBookmark,
    onShare,
    showActions = true,
    syndicatId
}) {
    const t = useTranslations(variant === 'syndicate' ? 'express_page' : 'landing_page');
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [displayTimestamp, setDisplayTimestamp] = useState(() => 
        timeAgo(item.createdAt || item.startDate || item.timestamp)
    );

    const isEvent = type === 'event';

    // Mise à jour du timestamp
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTimestamp(timeAgo(item.createdAt || item.startDate || item.timestamp));
        }, 60000);
        return () => clearInterval(interval);
    }, [item.createdAt, item.startDate, item.timestamp]);

    // Gestion des actions
    const handleLike = async () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        if (onLike) {
            await onLike(item, newLikedState);
        }
    };

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        if (onBookmark) {
            onBookmark(item, !bookmarked);
        }
    };

    const handleComment = () => {
        if (onComment) {
            onComment(item);
        }
    };

    const handleShare = () => {
        if (onShare) {
            onShare(item);
        }
    };

    // Récupération des données selon le format
    const getAuthorInfo = () => {
        if (item.author) {
            return {
                name: item.author.name,
                avatar: item.author.avatar,
                role: item.author.role
            };
        }
        return {
            name: item.authorName,
            avatar: item.authorAvatarUrl,
            role: item.authorRole || ''
        };
    };

    const getSyndicateInfo = () => {
        if (item.syndicate) {
            return {
                name: item.syndicate.name,
                verified: item.syndicate.verified || false
            };
        }
        return {
            name: item.syndicateName || '',
            verified: false
        };
    };

    const getStats = () => {
        return {
            likes: item.likes || 0,
            comments: item.comments?.length || item.comments || 0,
            shares: item.shares || 0
        };
    };

    const getImageUrl = () => {
        if (item.imageUrl) {
            return item.imageUrl.startsWith('http') ? item.imageUrl : `${STATIC_FILES_URL}${item.imageUrl}`;
        }
        return item.image;
    };

    const getAvatarUrl = () => {
        const authorInfo = getAuthorInfo();
        if (authorInfo.avatar) {
            return authorInfo.avatar.startsWith('http') ? authorInfo.avatar : `${STATIC_FILES_URL}${authorInfo.avatar}`;
        }
        return "https://i.pravatar.cc/150";
    };

    const authorInfo = getAuthorInfo();
    const syndicateInfo = getSyndicateInfo();
    const stats = getStats();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Header */}
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image 
                                src={getAvatarUrl()} 
                                alt={authorInfo.name} 
                                width={48} 
                                height={48} 
                                className="w-12 h-12 rounded-full object-cover" 
                            />
                            {syndicateInfo.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 text-base">{authorInfo.name}</h3>
                                {authorInfo.role && (
                                    <>
                                        <span className="text-slate-500 text-sm">•</span>
                                        <span className="text-slate-600 text-sm">{authorInfo.role}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                {syndicateInfo.name && (
                                    <>
                                        <span>{syndicateInfo.name}</span>
                                        <span>•</span>
                                    </>
                                )}
                                <Clock className="h-4 w-4" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {isEvent && (
                            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                {t('event_label')}
                            </div>
                        )}
                        {variant === 'syndicate' && onBookmark && (
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleBookmark}
                                className={`p-2 rounded-xl transition-colors ${
                                    bookmarked
                                        ? 'text-blue-600 bg-blue-100'
                                        : 'text-gray-400 hover:bg-gray-100'
                                }`}
                            >
                                <Bookmark fill={bookmarked ? "currentColor" : "none"} className="w-5 h-5" />
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                {/* Informations événement */}
                {isEvent && item.event && (
                    <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 mb-2">{item.event.title || item.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 text-sm gap-4">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {item.event.date || item.startDate}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {item.event.location || item.location}
                            </div>
                            {(item.event.participants || item.participants) && (
                                <div className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {item.event.participants || item.participants} {t('participants')}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Contenu texte */}
                <p className="text-slate-700 mb-4 leading-relaxed text-base whitespace-pre-wrap">
                    {item.content || item.description}
                </p>
                
                {/* Image */}
                {getImageUrl() && (
                    <div className="-mx-6 mb-4">
                        <Image 
                            src={getImageUrl()} 
                            alt="Contenu" 
                            width={800} 
                            height={400} 
                            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                )}
            </div>

            {/* Actions */}
            {showActions && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLike}
                                className={`flex items-center space-x-2 transition-colors ${
                                    liked
                                        ? 'text-red-500'
                                        : 'text-slate-600 hover:text-red-500'
                                }`}
                            >
                                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                                <span className="text-base font-medium">{stats.likes}</span>
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleComment}
                                className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span className="text-base font-medium">{stats.comments}</span>
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleShare}
                                className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors"
                            >
                                <Share2 className="h-5 w-5" />
                                <span className="text-base font-medium">{stats.shares}</span>
                            </motion.button>
                            
                            {variant === 'syndicate' && (
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center space-x-2 text-slate-600 hover:text-orange-500 transition-colors"
                                >
                                    <Flag className="h-5 w-5" />
                                    <span className="text-base font-medium">{t('common.report')}</span>
                                </motion.button>
                            )}
                        </div>
                        
                        {isEvent && (
                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                                {t('participate_button') || 'Participer'}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
```

### ProfileActivities

- **Fichier**: `src/components/syndicate-profile/ProfileActivities.jsx`
- **Props**: `activities`
- **Hooks**: 
```jsx
// src/components/syndicate-profile/ProfileActivities.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";

/**
 * Affiche la section des activités récentes sous forme de grille d'images.
 * @param {Array} activities - Le tableau des objets d'activité.
 */
export default function ProfileActivities({ activities }) {
    if (!activities || activities.length === 0) {
        return <p className="text-gray-500 text-gray-400">Aucune activité récente à afficher.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
                <motion.div
                    key={activity.id || index}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                >
                    <Image
                        src={activity.image || "/placeholder-image.jpg"}
                        alt={activity.title}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                        <h3 className="font-semibold text-base text-white drop-shadow-md">
                            {activity.title}
                        </h3>
                        <div className="flex items-center mt-1 text-xs text-white/80">
                            <Calendar className="h-3 w-3 mr-1.5" />
                            {activity.date}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
```

### ProfileContactCard

- **Fichier**: `src/components/syndicate-profile/ProfileContactCard.jsx`
- **Props**: `syndicate, variants`
- **Hooks**: useTranslations
```jsx
// src/components/syndicate-profile/ProfileContactCard.jsx
"use client";

import { motion } from 'framer-motion';
import { Mail, Globe, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * Carte affichant les informations de contact d'un syndicat.
 * @param {object} syndicate - L'objet syndicat.
 * @param {object} variants - Les variantes d'animation framer-motion.
 */
export default function ProfileContactCard({ syndicate, variants }) {
    const t = useTranslations('profile_page');

    const formatUrl = (url) => {
        if (!url) return null;
        if (url.startsWith('http')) return url;
        return `https://${url}`;
    };

    return (
        <motion.div
            className="bg-white bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 border-gray-700"
            variants={variants}
        >
            <h3 className="text-xl font-bold text-gray-900 text-white mb-4">
                {t('contact_title')}
            </h3>
            <div className="space-y-4">
                {syndicate.email && (
                    <motion.a href={`mailto:${syndicate.email}`} className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Mail className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.email}</span>
                    </motion.a>
                )}
                {syndicate.web_site_url && (
                    <motion.a href={formatUrl(syndicate.web_site_url)} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Globe className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.web_site_url}</span>
                    </motion.a>
                )}
                {syndicate.social_network && (
                    <motion.div className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50" whileHover={{ x: 5 }}>
                        <Share2 className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.social_network}</span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
```

### ProfileHeader

- **Fichier**: `src/components/syndicate-profile/ProfileHeader.jsx`
- **Props**: `syndicate, variants`
- **Hooks**: useTranslations
```jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LogIn } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { STATIC_FILES_URL } from '@/lib/constants';

export default function ProfileHeader({ syndicate, variants }) {
    const t = useTranslations('profile_page');
    const bannerUrl = syndicate.bannerUrl ? `${STATIC_FILES_URL}${syndicate.bannerUrl}` : "/placeholder-cover.jpg";

    return (
        <motion.div variants={variants} className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-[-80px] md:mb-[-60px]">
            <Image src={bannerUrl} alt={`${syndicate.name} cover image`} fill style={{ objectFit: 'cover' }} priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full flex justify-between items-end text-white">
                <div className="max-w-[70%]">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">{syndicate.name}</h1>
                    <p className="text-base md:text-lg opacity-90 mt-1">{syndicate.shortName}</p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 font-semibold text-sm sm:text-base">
                    <LogIn size={18} />
                    <span>{t('join_button')}</span>
                </motion.button>
            </div>
        </motion.div>
    );
}
```

### ProfileKeyInfoCard

- **Fichier**: `src/components/syndicate-profile/ProfileKeyInfoCard.jsx`
- **Props**: `syndicate, variants`
- **Hooks**: useTranslations
```jsx
"use client";

import { motion } from 'framer-motion';
import { Users, Clock, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProfileKeyInfoCard({ syndicate, variants }) {
    const t = useTranslations('profile_page');

    const getYearFromDate = (isoDate) => isoDate ? new Date(isoDate).getFullYear() : "N/A";

    const keyInfo = [
        { label: t('members'), value: syndicate.memberCount?.toLocaleString() || '0', icon: Users },
        { label: t('founded'), value: getYearFromDate(syndicate.foundedDate), icon: Clock },
        { label: t('type'), value: syndicate.type, icon: Briefcase },
    ];

    return (
        <motion.div className="bg-white bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 border-gray-700" variants={variants}>
            <h3 className="text-xl font-bold text-gray-900 text-white mb-4">{t('key_info_title')}</h3>
            <div className="space-y-4 text-sm">
                {keyInfo.map((info) => (
                    <div key={info.label} className="flex justify-between items-center">
                        <span className="text-gray-500 text-gray-400 flex items-center">
                            <info.icon size={16} className="mr-2" />
                            {info.label}
                        </span>
                        <span className="font-semibold text-gray-800 text-gray-200">{info.value}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
```

### ProfileMap

- **Fichier**: `src/components/syndicate-profile/ProfileMap.jsx`
- **Props**: `antennes = []`
- **Hooks**: 
```jsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes Leaflet dans Next.js
const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function ProfileMap({ antennes = [] }) {
    // Position par défaut (Cameroun / Yaoundé)
    const center = [3.848, 11.502];

    return (
        <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-inner mt-4">
            <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Version "Light" de la carte pour rester dans le design blanc
                    attribution='&copy; OpenStreetMap contributors'
                />
                
                {/* Exemple de marqueur - À dynamiser avec syndicate.branches */}
                <Marker position={center} icon={customIcon}>
                    <Popup>Siège National</Popup>
                </Marker>

                {antennes?.map((antenne, idx) => (
                    antenne.lat && antenne.lng && (
                        <Marker key={idx} position={[antenne.lat, antenne.lng]} icon={customIcon}>
                            <Popup>{antenne.name}</Popup>
                        </Marker>
                    )
                ))}
            </MapContainer>
        </div>
    );
}
```

### ProfileMembers

- **Fichier**: `src/components/syndicate-profile/ProfileMembers.jsx`
- **Props**: `members`
- **Hooks**: useState
```jsx
"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { STATIC_FILES_URL } from '@/lib/constants';

/**
 * Affiche les membres de l'équipe directrice avec pagination.
 * @param {Array} members - Le tableau des objets membres.
 */
export default function ProfileMembers({ members }) {
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 4;

    if (!members || members.length === 0) {
        return <p className="text-gray-500 text-gray-400">Aucun membre de l'équipe à afficher.</p>;
    }

    const totalPages = Math.ceil(members.length / membersPerPage);
    const paginatedMembers = members.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginatedMembers.map((member, index) => {
                    // CORRECTION : On s'assure que l'URL est complète.
                    const avatarUrl = member.userAvatarUrl ? `${STATIC_FILES_URL}${member.userAvatarUrl}` : null;
                    
                    return (
                        <motion.div
                            key={member.userId || index}
                            className="flex items-center p-3 rounded-xl bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* CORRECTION : On utilise avatarUrl et on ajoute un fallback robuste avec le composant SyndicatDefaultAvatar */}
                            {avatarUrl ? (
                                <Image
                                    src={avatarUrl}
                                    // CORRECTION : On utilise `userName` et on ajoute un fallback pour l'attribut alt.
                                    alt={member.userName || 'Avatar du membre'}
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white border-gray-600 shadow-sm"
                                />
                            ) : (
                                <SyndicatDefaultAvatar name={member.userName || '?'} size={56} className="w-14 h-14" />
                            )}
                            <div className="ml-4">
                                {/* CORRECTION : On utilise userName pour le nom. */}
                                <p className="font-semibold text-gray-900 text-gray-100">{member.userName}</p>
                                {/* CORRECTION : On nettoie le nom du rôle pour l'affichage. */}
                                <p className="text-sm text-blue-600 text-blue-400">{member.role.replace('ROLE_', '')}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center items-center space-x-4">
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page précédente"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600 text-gray-400" />
                    </motion.button>
                    <span className="text-sm font-medium text-gray-600 text-gray-400">
                        Page {currentPage} / {totalPages}
                    </span>
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page suivante"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600 text-gray-400" />
                    </motion.button>
                </div>
            )}
        </div>
    );
}
```

### ProfileSectionCard

- **Fichier**: `src/components/syndicate-profile/ProfileSectionCard.jsx`
- **Props**: `icon: Icon, title, children, variants`
- **Hooks**: 
```jsx
// src/components/syndicate-profile/ProfileSectionCard.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Un conteneur de carte réutilisable pour les sections de la page de profil.
 * Fournit un style cohérent avec un titre, une icône et une animation.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} title - Le titre de la section.
 * @param {React.ReactNode} children - Le contenu à afficher à l'intérieur de la carte.
 * @param {object} variants - Les variantes d'animation pour framer-motion.
 */
export default function ProfileSectionCard({ icon: Icon, title, children, variants }) {
    return (
        <motion.section
            className="bg-white bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 border-gray-700"
            variants={variants}
        >
            <h2 className="text-2xl font-bold text-gray-900 text-white mb-6 flex items-center">
                {Icon && <Icon className="text-blue-500 mr-3" size={28} />}
                {title}
            </h2>
            {children}
        </motion.section>
    );
}
```

### ProfileServices

- **Fichier**: `src/components/syndicate-profile/ProfileServices.jsx`
- **Props**: `services`
- **Hooks**: 
```jsx
// src/components/syndicate-profile/ProfileServices.jsx
"use client";

import { motion } from 'framer-motion';
import { Package } from 'lucide-react'; // Utilisation d'une icône pertinente

/**
 * Affiche la liste des services offerts par le syndicat.
 * @param {Array} services - Le tableau des objets de service.
 */
export default function ProfileServices({ services }) {
    if (!services || services.length === 0) {
        return <p className="text-gray-500 text-gray-400">Aucun service n'est actuellement proposé.</p>;
    }

    return (
        <ul className="space-y-4">
            {services.map((service, index) => (
                <motion.li
                    key={service.id || index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 bg-blue-900/50 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Package className="w-4 h-4 text-blue-600 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 text-gray-200">
                            {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-gray-400">
                            {service.description}
                        </p>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}
```

### ProfileShop

- **Fichier**: `src/components/syndicate-profile/ProfileShop.jsx`
- **Props**: `products = []`
- **Hooks**: useTranslations
```jsx
// src/components/syndicate-profile/ProfileShop.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast'; // Pour une notification à l'utilisateur

/**
 * Affiche une grille de produits pour la boutique du syndicat.
 * @param {Array} [products=[]] - Le tableau des objets produits.
 */
export default function ProfileShop({ products = [] }) {
    const t = useTranslations('profile_page');

    const handleOrderClick = (productName) => {
        // Logique de commande future (ex: ajouter au panier, ouvrir une modale de paiement)
        // Pour l'instant, on affiche une notification.
        toast.success(`"${productName}" a été ajouté à votre panier ! (simulation)`);
    };

    if (!products || products.length === 0) {
        return (
            <p className="text-sm text-center text-gray-500 text-gray-400 py-8">
                {t('no_products')}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product.id || index}
                    className="bg-white bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 overflow-hidden flex flex-col"
                    whileHover={{ y: -5, scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Image du produit */}
                    <div className="relative w-full h-48 bg-gray-100 bg-gray-700">
                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <ShoppingCart className="w-12 h-12 text-gray-300 text-gray-500" />
                            </div>
                        )}
                    </div>

                    {/* Contenu de la carte produit */}
                    <div className="p-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-base text-gray-900 text-white line-clamp-2">
                            {product.name}
                        </h4>

                        <p className="text-xs text-gray-600 text-gray-400 mt-1 mb-4 flex-grow line-clamp-3">
                            {product.description}
                        </p>

                        {/* Pied de carte avec prix et bouton */}
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 border-gray-700">
                            <span className="text-lg font-bold text-blue-600 text-blue-400">
                                {product.price ? `${product.price.toFixed(2)} €` : 'Prix sur demande'}
                            </span>
                            <motion.button
                                className="px-3 py-1.5 bg-blue-100 text-blue-700 bg-blue-900/50 text-blue-300 rounded-full text-xs font-semibold hover:bg-blue-200 hover:bg-blue-900 transition-colors flex items-center gap-1.5"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleOrderClick(product.name)}
                            >
                                <ShoppingCart size={14} />
                                <span>{t('order_button')}</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
```

### SyndicateMap

- **Fichier**: `src/components/syndicate-profile/SyndicateMap.jsx`
- **Props**: `positions = []`
- **Hooks**: 
```jsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction pour les icônes Leaflet qui ne s'affichent pas par défaut dans Next.js
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function SyndicateMap({ positions = [] }) {
  // Position par défaut sur le Cameroun si aucune position n'est fournie
  const defaultCenter = [3.848, 11.502]; 

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-inner border border-gray-100">
      <MapContainer center={defaultCenter} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {/* Exemple de marqueur - À dynamiser avec tes données */}
        <Marker position={defaultCenter} icon={icon}>
          <Popup>Siège social du Syndicat</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
```

### SyndicateProfileClient

- **Fichier**: `src/components/syndicate-profile/SyndicateProfileClient.jsx`
- **Props**: `syndicate`
- **Hooks**: useTranslations
```jsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import ProfileHeader from './ProfileHeader';
import ProfileKeyInfoCard from './ProfileKeyInfoCard';
import ProfileContactCard from './ProfileContactCard';
import ProfileSectionCard from './ProfileSectionCard';
import ProfileActivities from './ProfileActivities';
import ProfileServices from './ProfileServices';
import ProfileMembers from './ProfileMembers';
import ProfileShop from './ProfileShop';
import { HeartHandshake, Calendar, Package, Users, ShoppingBag, MapPin } from 'lucide-react';

// Chargement dynamique de la carte pour éviter les erreurs SSR
const DynamicProfileMap = dynamic(() => import('./ProfileMap'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-[350px] bg-gray-50 rounded-2xl border border-dashed border-gray-300"><p className="text-gray-400">Chargement de la carte...</p></div>
});

export default function SyndicateProfileClient({ syndicate }) {
    const t = useTranslations('profile_page');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };
    
    const fakeData = {
        activities: syndicate.activities || [{id: 1, title: "Assemblée Générale", date: "15/06", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"}],
        services: syndicate.services || [{id: 1, name: "Conseil Juridique", description: "Assistance pour les litiges."}],
        products: syndicate.products || [{id: 1, name: "T-shirt Officiel", price: 15.0, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"}],
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="bg-gray-50 pb-20">
            {/* Header avec forçage du blanc à l'intérieur via CSS global ou props si possible */}
            <ProfileHeader syndicate={syndicate} variants={itemVariants} />

            <div className="container mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-8 pt-28 px-4">
                
                {/* COLONNE GAUCHE & CENTRE (Main Content) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Mission */}
                    <ProfileSectionCard title={t('mission_title')} icon={HeartHandshake} variants={itemVariants}>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {syndicate.description || t('no_description')}
                        </p>
                    </ProfileSectionCard>

                    {/* CARTE : Nos Implantations (Positionnée au centre comme sur l'image) */}
                    <ProfileSectionCard title={t('locations_title') || "Nos Implantations"} icon={MapPin} variants={itemVariants}>
                        <div className="space-y-4">
                            <DynamicProfileMap antennes={syndicate.branches} />
                            <div className="flex justify-end">
                                <button className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                                    Voir toutes les antennes
                                </button>
                            </div>
                        </div>
                    </ProfileSectionCard>

                    {/* Activités */}
                    <ProfileSectionCard title={t('activities_title')} icon={Calendar} variants={itemVariants}>
                        <ProfileActivities activities={fakeData.activities} />
                    </ProfileSectionCard>
                </div>

                {/* COLONNE DROITE (Sidebar) */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Infos clés */}
                    <ProfileKeyInfoCard syndicate={syndicate} variants={itemVariants} />
                    
                    {/* Services */}
                    <ProfileSectionCard title={t('services_title')} icon={Package} variants={itemVariants}>
                        <ProfileServices services={fakeData.services} />
                    </ProfileSectionCard>

                    {/* Boutique */}
                    <ProfileSectionCard title={t('shop_title')} icon={ShoppingBag} variants={itemVariants}>
                        <ProfileShop products={fakeData.products} />
                    </ProfileSectionCard>

                    {/* Contact */}
                    <ProfileContactCard syndicate={syndicate} variants={itemVariants} />
                </div>
            </div>
        </motion.div>
    );
}
```

### WrappedComponent

- **Fichier**: `src/components/syndicate-space/ErrorBoundary.jsx`
- **Props**: `Component, errorBoundaryProps =`
- **Hooks**: 
```jsx
"use client";

import React from 'react';
import { ErrorFallback } from './ErrorStates';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Logger l'erreur (remplacer par votre service de logging)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        // Optionnel: envoyer l'erreur à un service de monitoring
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'exception', {
                description: error.toString(),
                fatal: false
            });
        }
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            const { fallback: CustomFallback, title, subtitle } = this.props;
            
            if (CustomFallback) {
                return <CustomFallback 
                    error={this.state.error} 
                    resetError={this.handleReset}
                    errorInfo={this.state.errorInfo}
                />;
            }

            return (
                <ErrorFallback
                    error={this.state.error}
                    resetError={this.handleReset}
                    title={title}
                    subtitle={subtitle}
                />
            );
        }

        return this.props.children;
    }
}

// HOC pour wrapper les composants facilement
export const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
    const WrappedComponent = (props) => (
        <ErrorBoundary {...errorBoundaryProps}>
            <Component {...props} />
        </ErrorBoundary>
    );
    
    WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
    
    return WrappedComponent;
};

export default ErrorBoundary;
```

### ErrorState

- **Fichier**: `src/components/syndicate-space/ErrorStates.jsx`
- **Props**: `errorType`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';
import { 
    AlertTriangle, 
    Wifi, 
    Shield, 
    RefreshCw, 
    Home, 
    AlertCircle,
    Lock,
    Clock,
    Bug,
    CheckCircle2
} from 'lucide-react';

const getErrorIcon = (errorType) => {
    switch (errorType) {
        case 'NETWORK':
            return Wifi;
        case 'AUTH':
            return Lock;
        case 'PERMISSION':
            return Shield;
        case 'NOT_FOUND':
            return AlertTriangle;
        case 'RATE_LIMIT':
            return Clock;
        case 'SERVER':
            return AlertCircle;
        case 'VALIDATION':
            return AlertTriangle;
        default:
            return Bug;
    }
};

const getErrorColor = (errorType) => {
    switch (errorType) {
        case 'NETWORK':
            return 'text-orange-600 bg-orange-50 border-orange-200 text-orange-400 bg-orange-950 border-orange-800';
        case 'AUTH':
            return 'text-red-600 bg-red-50 border-red-200 text-red-400 bg-red-950 border-red-800';
        case 'PERMISSION':
            return 'text-yellow-600 bg-yellow-50 border-yellow-200 text-yellow-400 bg-yellow-950 border-yellow-800';
        case 'SERVER':
            return 'text-red-600 bg-red-50 border-red-200 text-red-400 bg-red-950 border-red-800';
        case 'RATE_LIMIT':
            return 'text-purple-600 bg-purple-50 border-purple-200 text-purple-400 bg-purple-950 border-purple-800';
        default:
            return 'text-neutral-600 bg-neutral-50 border-neutral-200 text-neutral-400 bg-neutral-900 border-neutral-700';
    }
};

// Composant d'erreur complet pour les sections
export const ErrorState = ({ 
    error, 
    onRetry, 
    onDismiss,
    variant = 'default',
    className = '' 
}) => {
    if (!error) return null;

    const Icon = getErrorIcon(error.type);
    const colorClasses = getErrorColor(error.type);

    const variants = {
        default: 'p-8 rounded-2xl border',
        compact: 'p-4 rounded-xl border',
        minimal: 'p-3 rounded-lg border'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${variants[variant]} ${colorClasses} ${className}`}
        >
            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-current/10">
                        <Icon className="w-8 h-8" />
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">
                    {error.title}
                </h3>
                
                <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
                    {error.message}
                </p>

                <div className="flex justify-center gap-3">
                    {onRetry && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onRetry}
                            className="px-4 py-2 bg-current/10 hover:bg-current/20 text-current rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {error.action || 'Réessayer'}
                        </motion.button>
                    )}
                    
                    {onDismiss && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onDismiss}
                            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 bg-neutral-800 hover:bg-neutral-700 text-neutral-700 text-neutral-300 rounded-xl font-medium transition-all duration-200"
                        >
                            Fermer
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Composant d'erreur inline pour les formulaires
export const InlineError = ({ error, className = '' }) => {
    if (!error) return null;

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`flex items-center gap-2 p-3 bg-red-50 bg-red-950 border border-red-200 border-red-800 rounded-xl text-red-600 text-red-400 text-sm ${className}`}
        >
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error.message}</span>
        </motion.div>
    );
};

// Composant de fallback pour les erreurs critiques
export const ErrorFallback = ({ 
    error, 
    resetError, 
    title = "Quelque chose s'est mal passé",
    subtitle = "Une erreur inattendue s'est produite. Vous pouvez réessayer ou retourner à l'accueil."
}) => {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
            <div className="text-center max-w-md">
                <div className="mb-6">
                    <div className="w-20 h-20 bg-red-100 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-10 h-10 text-red-600 text-red-400" />
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold text-neutral-800 text-white mb-3">
                    {title}
                </h2>
                
                <p className="text-neutral-600 text-neutral-400 mb-8">
                    {subtitle}
                </p>

                <div className="flex justify-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetError}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Réessayer
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/home'}
                        className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 bg-neutral-800 hover:bg-neutral-700 text-neutral-700 text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Accueil
                    </motion.button>
                </div>

                {process.env.NODE_ENV === 'development' && error && (
                    <details className="mt-8 p-4 bg-neutral-100 bg-neutral-800 rounded-xl text-left">
                        <summary className="cursor-pointer text-sm font-medium text-neutral-700 text-neutral-300">
                            Détails de l'erreur (dev)
                        </summary>
                        <pre className="mt-2 text-xs text-neutral-600 text-neutral-400 overflow-auto">
                            {error?.stack || error?.toString()}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    );
};

// Composant d'état vide avec design amélioré
export const EmptyState = ({ 
    icon: Icon = CheckCircle2,
    title = "Aucune donnée",
    description = "Il n'y a rien à afficher pour le moment.",
    action = null,
    className = ''
}) => {
    return (
        <div className={`text-center p-12 ${className}`}>
            <div className="mb-6">
                <div className="w-16 h-16 bg-neutral-100 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-neutral-400 text-neutral-500" />
                </div>
            </div>
            
            <h3 className="text-lg font-semibold text-neutral-800 text-white mb-2">
                {title}
            </h3>
            
            <p className="text-neutral-600 text-neutral-400 mb-6 max-w-sm mx-auto">
                {description}
            </p>

            {action && (
                <div className="flex justify-center">
                    {action}
                </div>
            )}
        </div>
    );
};

// Composant de notification de succès
export const SuccessState = ({ 
    title = "Succès !",
    message,
    onDismiss,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-4 bg-emerald-50 bg-emerald-950 border border-emerald-200 border-emerald-800 rounded-xl ${className}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-emerald-800 text-emerald-200">
                        {title}
                    </h4>
                    {message && (
                        <p className="text-sm text-emerald-700 text-emerald-300 mt-1">
                            {message}
                        </p>
                    )}
                </div>
                {onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="flex-shrink-0 text-emerald-600 hover:text-emerald-800 text-emerald-400 hover:text-emerald-200"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
        </motion.div>
    );
};
```

### LoadingErrorPage

- **Fichier**: `src/components/syndicate-space/LoadingErrorPage.jsx`
- **Props**: `onRetry`
- **Hooks**: useRouter, useTranslations
```jsx
"use client";

import { motion } from 'framer-motion';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function LoadingErrorPage({ onRetry }) {
    const router = useRouter();
    const t = useTranslations('common');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <AlertCircle className="w-8 h-8 text-blue-700" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                >
                    Chargement en cours...
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-8"
                >
                    Nous chargeons les données du syndicat. Cela peut prendre quelques instants.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                >
                    {onRetry && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onRetry}
                            className="w-full bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all duration-200"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Réessayer
                        </motion.button>
                    )}
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/home')}
                        className="w-full bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-200"
                    >
                        <Home className="w-4 h-4" />
                        Retour à l'accueil
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}
```

### NotificationCard

- **Fichier**: `src/components/syndicate-space/NotificationCard.jsx`
- **Props**: `icon: Icon, title, message, time, type`
- **Hooks**: 
```jsx
// src/components/syndicate-space/notifications/NotificationCard.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Affiche une carte pour une seule notification avec un style adapté à son type.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} title - Le titre de la notification.
 * @param {string} message - Le corps du message.
 * @param {string} time - L'horodatage (ex: "Il y a 5 minutes").
 * @param {string} type - Le type de notification ('info', 'success', 'warning').
 */
export default function NotificationCard({ icon: Icon, title, message, time, type }) {
    const bgColors = {
        info: 'bg-primary-50 bg-primary-900/20 border-primary-100 border-primary-800/30',
        success: 'bg-emerald-50 bg-emerald-900/20 border-emerald-100 border-emerald-800/30',
        warning: 'bg-amber-50 bg-amber-900/20 border-amber-100 border-amber-800/30',
    };

    const iconBgColors = {
        info: 'bg-primary-100 bg-primary-800/30',
        success: 'bg-emerald-100 bg-emerald-800/30',
        warning: 'bg-amber-100 bg-amber-800/30',
    };
    
    const iconTextColors = {
        info: 'text-primary-600 text-primary-400',
        success: 'text-emerald-600 text-emerald-400',
        warning: 'text-amber-600 text-amber-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`p-4 rounded-xl border ${bgColors[type] || bgColors.info} transition-all duration-200 hover:shadow-soft cursor-pointer group`}
        >
            <div className="flex items-start">
                <div className={`flex-shrink-0 p-2.5 rounded-xl ${iconBgColors[type] || iconBgColors.info} group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className={`w-4 h-4 ${iconTextColors[type] || iconTextColors.info}`} />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-neutral-800 text-neutral-100 group-hover:text-neutral-900 group-hover:text-white transition-colors duration-200">
                        {title}
                    </h4>
                    <p className="text-sm text-neutral-600 text-neutral-300 mt-1 leading-relaxed">
                        {message}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-medium text-neutral-500 text-neutral-400">
                            {time}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-current opacity-20"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
```

### SyndicateHeader

- **Fichier**: `src/components/syndicate-space/SyndicateHeader.jsx`
- **Props**: `syndicateData, onSidebarToggle, onNotificationToggle, isCollapsed, isSidebarOpen`
- **Hooks**: useTranslations
```jsx
"use client";

import { Bell, LogOut, Menu, Users } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle, isCollapsed, isSidebarOpen }) {
    const t = useTranslations();

    return (
        <header 
            className="fixed top-0 right-0 z-40 bg-white shadow-sm transition-all duration-300 ease-in-out"
            style={{ 
                // On ajuste la largeur en fonction de la sidebar
                left: typeof window !== 'undefined' && window.innerWidth > 1024 
                    ? (isSidebarOpen ? '280px' : '80px') 
                    : '0px' 
            }}
        >
            {/* Bannière (Hauteur 160px) */}
            <motion.div 
                className="relative bg-blue-700 overflow-hidden"
                animate={{ height: isCollapsed ? 0 : 160 }}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 p-6 flex flex-col justify-end">
                    <h1 className="text-2xl font-bold text-white">{syndicateData.name}</h1>
                    <div className="flex items-center text-blue-100 text-sm mt-1">
                        <Users className="w-4 h-4 mr-1" />
                        {syndicateData.memberCount || 0} membres
                    </div>
                </div>
            </motion.div>
            
            {/* Barre de navigation (Hauteur 64px) */}
            <div className="h-16 px-6 border-b flex items-center justify-between bg-white">
                <div className="flex items-center gap-4">
                    <button onClick={onSidebarToggle} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                        <Menu size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="font-bold text-gray-800">
                            {isCollapsed ? syndicateData.name : "Espace Membre"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={onNotificationToggle} className="relative p-2 hover:bg-gray-100 rounded-lg">
                        <Bell size={20} className="text-gray-600" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <Link href="/home" className="p-2 hover:bg-red-50 rounded-lg">
                        <LogOut size={20} className="text-gray-600" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
```

### SyndicateNotificationsPanel

- **Fichier**: `src/components/syndicate-space/SyndicateNotificationsPanel.jsx`
- **Props**: `isOpen, onClose`
- **Hooks**: useTranslations
```jsx
// src/components/syndicate-space/SyndicateNotificationsPanel.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import NotificationCard from './NotificationCard'; // <-- Importation du composant isolé

/**
 * Le panneau latéral qui affiche les notifications.
 * @param {boolean} isOpen - Contrôle la visibilité du panneau.
 * @param {function} onClose - Fonction pour fermer le panneau.
 */
export default function SyndicateNotificationsPanel({ isOpen, onClose }) {
    const t = useTranslations('notifications');

    const notifications = [
        { icon: Calendar, title: 'Nouvelle réunion', message: 'Réunion mensuelle prévue pour demain à 10h', time: 'Il y a 5 minutes', type: 'info' },
        { icon: CheckCircle, title: 'Cotisation reçue', message: 'Votre cotisation du mois a été validée avec succès.', time: 'Il y a 30 minutes', type: 'success' },
        { icon: AlertCircle, title: 'Rappel important', message: 'N\'oubliez pas de voter pour les nouvelles propositions.', time: 'Il y a 1 heure', type: 'warning' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/30 z-30" />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white bg-neutral-900 shadow-strong z-40 border-l border-neutral-200 border-neutral-700 flex flex-col transition-colors duration-300"
                        aria-modal="true" role="dialog" aria-labelledby="notification-panel-title"
                    >
                        <div className="p-6 border-b border-neutral-200 border-neutral-700 flex justify-between items-center flex-shrink-0">
                            <h3 id="notification-panel-title" className="text-lg font-bold text-neutral-800 text-white flex items-center gap-3">
                                <div className="p-2 bg-primary-50 bg-primary-900/20 rounded-xl">
                                    <Bell size={18} className="text-primary-600 text-primary-400" />
                                </div>
                                {t('notifications.title')}
                            </h3>
                            <motion.button 
                                onClick={onClose} 
                                className="p-2 text-neutral-500 text-neutral-400 hover:bg-neutral-100 hover:bg-neutral-800 rounded-xl transition-all duration-200" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                aria-label="Fermer"
                            >
                                <X size={18} />
                            </motion.button>
                        </div>

                        {notifications.length > 0 ? (
                            <div className="flex-grow p-6 space-y-3 overflow-y-auto">
                                {notifications.map((notification, index) => (
                                    <NotificationCard key={index} {...notification} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                                <div className="p-4 bg-neutral-100 bg-neutral-800 rounded-2xl mb-4">
                                    <Bell className="w-12 h-12 text-neutral-400 text-neutral-500" />
                                </div>
                                <h4 className="font-semibold text-neutral-700 text-neutral-300">Aucune notification</h4>
                                <p className="text-sm text-neutral-500 text-neutral-400 mt-1">Vous êtes à jour.</p>
                            </div>
                        )}
                        
                        <div className="p-6 border-t border-neutral-200 border-neutral-700 flex-shrink-0">
                            <motion.button 
                                whileHover={{ scale: 1.02 }} 
                                whileTap={{ scale: 0.98 }} 
                                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium shadow-soft hover:shadow-blue transition-all duration-200"
                            >
                                {t('notifications.see_all')}
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
```

### SyndicateSidebar

- **Fichier**: `src/components/syndicate-space/SyndicateSidebar.jsx`
- **Props**: `isCollapsed, onToggle, syndicateData`
- **Hooks**: useState, useEffect, usePathname, useRouter, useTranslations, useParams
```jsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, MessageCircle, Vote,
    Home, ChevronLeft, ChevronRight, MessageSquare
} from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import { useParams } from 'next/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import Image from 'next/image';

export default function SyndicateSidebar({ isCollapsed, onToggle, syndicateData }) {
    const t = useTranslations('syndicate_space');
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const { syndicatId } = params;

    const handleNavigation = (route) => {
        const path = `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

        // Ne pas naviguer si on est déjà sur cette route
        if (pathname === path) return;

        router.push(path);
    };

    if (!syndicateData) {
        return (
            <motion.nav
                animate={{ width: isCollapsed ? 80 : 280 }}
                className="hidden lg:flex bg-white/80 bg-gray-800/50 flex-col z-10 border-r"
            >
                <div className="p-4 border-b animate-pulse">
                    <div className="w-full h-10 bg-gray-200 bg-gray-700 rounded-md"></div>
                </div>
                <div className="flex-grow p-4 space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-12 bg-gray-200 bg-gray-700 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </motion.nav>
        );
    }
    
    const imageUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    const navItems = [
        { id: 'membres', icon: Users, label: t('sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('sidebar.votes'), route: 'votes' },
    ];

    const buildLink = (route) => `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:flex bg-white bg-neutral-900 flex-col z-10 border-r border-blue-100 border-neutral-700 shadow-lg transition-colors duration-300"
        >
            <div className={`p-4 flex items-center gap-4 border-b border-blue-100 bg-white transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center shadow-soft">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                            <span className="font-bold text-base text-blue-900 truncate block">
                                {t('member_space')}
                            </span>
                            <span className="text-xs text-blue-600 truncate block">
                                Navigation
                            </span>
                        </div>
                    </div>
                )}
                <motion.button 
                    onClick={onToggle} 
                    className="p-2 text-neutral-500 text-neutral-400 hover:bg-neutral-100 hover:bg-neutral-800 rounded-xl transition-all duration-200" 
                    aria-label={isCollapsed ? t('expand') : t('collapse')}
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || (item.route && pathname.startsWith(fullPath));
                    
                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => handleNavigation(item.route)}
                            className={`relative group flex items-center w-full px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                                isCollapsed ? 'justify-center' : ''
                            } ${
                                isActive
                                    ? 'text-blue-700 text-blue-300 bg-blue-50 bg-blue-900/20'
                                    : 'text-neutral-600 text-neutral-400 hover:bg-blue-50 hover:bg-neutral-800 hover:text-blue-800 hover:text-white'
                            }`}
                            title={isCollapsed ? item.label : ''}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-sidebar-indicator"
                                    className="absolute inset-0 bg-blue-50 bg-blue-900/20 rounded-xl border border-blue-200 border-blue-800"
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                />
                            )}

                            <div className="relative z-10 flex items-center">
                                <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-blue-600 text-blue-400' : ''}`} />
                                {!isCollapsed && (
                                    <span className="font-medium truncate ml-3">{item.label}</span>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.nav>
    );
}
```

### SectionLoader

- **Fichier**: `src/components/syndicate-space/SyndicateSpaceLoader.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';

const SyndicateSpaceLoader = ({ 
    variant = 'full', 
    text = 'Chargement...',
    size = 'medium' 
}) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-6 h-6', 
        large: 'w-8 h-8'
    };

    const containerClasses = {
        full: 'fixed inset-0 bg-white bg-neutral-900 flex items-center justify-center z-50',
        inline: 'flex items-center justify-center py-12',
        compact: 'flex items-center justify-center py-6'
    };

    const SpinnerDots = () => (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className={`${sizeClasses[size]} bg-primary-600 rounded-full`}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );

    const SpinnerCircle = () => (
        <motion.div
            className={`${sizeClasses[size]} border-3 border-neutral-200 border-neutral-700 border-t-primary-600 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );

    const PulseLoader = () => (
        <motion.div
            className={`${sizeClasses[size]} bg-primary-600 rounded-full`}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={containerClasses[variant]}
        >
            <div className="flex flex-col items-center space-y-4">
                {variant === 'full' && (
                    <div className="p-4 bg-white bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 border-neutral-700">
                        <SpinnerDots />
                    </div>
                )}
                {variant === 'inline' && <SpinnerCircle />}
                {variant === 'compact' && <PulseLoader />}
                
                {text && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm font-medium text-neutral-600 text-neutral-400"
                    >
                        {text}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

export default SyndicateSpaceLoader;

// Variations spécifiques pour différents contextes
export const SectionLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="inline" text={text} size="medium" />
);

export const CompactLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="compact" text={text} size="small" />
);

export const FullPageLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="full" text={text} size="large" />
);

// Loader spécifique pour les cartes
export const CardSkeleton = ({ className = "" }) => (
    <div className={`bg-white bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 border-neutral-700 p-6 ${className}`}>
        <div className="animate-pulse">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-neutral-200 bg-neutral-700 rounded-xl"></div>
                <div className="flex-1 space-y-3">
                    <div className="h-4 bg-neutral-200 bg-neutral-700 rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-200 bg-neutral-700 rounded w-1/2"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-200 bg-neutral-700 rounded"></div>
                        <div className="h-3 bg-neutral-200 bg-neutral-700 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Loader pour les listes de membres
export const MemberRowSkeleton = () => (
    <tr className="animate-pulse">
        <td className="px-6 py-4">
            <div className="flex items-center">
                <div className="w-11 h-11 bg-neutral-200 bg-neutral-700 rounded-xl"></div>
                <div className="ml-4">
                    <div className="h-4 bg-neutral-200 bg-neutral-700 rounded w-24"></div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="h-6 bg-neutral-200 bg-neutral-700 rounded-full w-16"></div>
        </td>
        <td className="px-6 py-4">
            <div className="h-6 bg-neutral-200 bg-neutral-700 rounded-full w-20"></div>
        </td>
        <td className="px-6 py-4">
            <div className="h-8 bg-neutral-200 bg-neutral-700 rounded-xl w-8"></div>
        </td>
    </tr>
);
```

### ChatClient

- **Fichier**: `src/components/syndicate-space/section-chat/ChatClient.jsx`
- **Props**: `chat, onClick, isActive`
- **Hooks**: useState, useRef, useEffect, useTranslations, useErrorHandler, useApiWithRetry
```jsx
// src/components/syndicate-space/section-chat/ChatClient.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Lock, Users, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import { sendMessageAPI, getChatMessagesAPI } from '@/lib/api/chat';

// --- SOUS-COMPOSANTS DE STYLE AMÉLIORÉS ---

const ChatListItem = ({ chat, onClick, isActive }) => {
    // Distinction visuelle pour le chat de groupe
    const isGroup = chat.isGroup;
    const activeClasses = 'bg-blue-100 bg-blue-900/50';
    const hoverClasses = 'hover:bg-gray-100 hover:bg-gray-700/50';

    return (
        <div onClick={onClick} className={`flex items-center p-3 cursor-pointer rounded-xl mb-1 transition-colors duration-200 ${isActive ? activeClasses : hoverClasses}`}>
            <div className="relative flex-shrink-0">
                {isGroup ? (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Users className="text-white" />
                    </div>
                ) : (
                    <>
                        <Image src={chat.avatar} alt={chat.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                        {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white border-gray-800"></div>}
                    </>
                )}
            </div>
            <div className="ml-3 flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                    <h3 className={`font-semibold truncate ${isGroup ? 'text-blue-600 text-blue-400' : 'text-gray-800 text-white'}`}>{chat.name}</h3>
                    <span className="text-xs text-gray-500 text-gray-400 flex-shrink-0 ml-2">{chat.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600 text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
        </div>
    );
};

const Message = ({ msg, isSent, isGroup }) => (
    <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
        {!isSent && <Image src={msg.avatar} alt={msg.sender} width={32} height={32} className="w-8 h-8 rounded-full object-cover self-start" />}
        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${isSent ? 'bg-blue-600 text-white rounded-br-lg' : 'bg-gray-200 bg-gray-700 text-gray-800 text-gray-200 rounded-bl-lg'}`}>
            {!isSent && isGroup && <p className="text-xs font-semibold text-blue-500 text-blue-400 mb-1">{msg.sender}</p>}
            <p className="whitespace-pre-wrap">{msg.text}</p>
            <div className={`text-xs mt-1 text-right ${isSent ? 'text-blue-200' : 'text-gray-500 text-gray-400'}`}>{msg.time}</div>
        </div>
    </div>
);


// --- COMPOSANT PRINCIPAL ---
function ChatClientInner({ initialChats = [], initialMessages = {}, initialMembers = [], syndicatId }) {
    const t = useTranslations('chat');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [view, setView] = useState('list');
    const [chats, setChats] = useState(initialChats || []);
    const [messages, setMessages] = useState(initialMessages || {});
    const [activeChat, setActiveChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMessages, setIsLoadingMessages] = useState(false);
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => { 
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    }, [messages, activeChat]);
    
    // Charger les messages d'un chat
    const loadChatMessages = async (chatId) => {
        if (messages[chatId]) return; // Déjà chargé
        
        setIsLoadingMessages(true);
        try {
            await executeWithRetry(async () => {
                const chatMessages = await getChatMessagesAPI(syndicatId, chatId);
                setMessages(prev => ({
                    ...prev,
                    [chatId]: chatMessages || []
                }));
                clearError(`messages-${chatId}`);
            }, `load-messages-${chatId}`, {
                maxRetries: 2
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsLoadingMessages(false);
        }
    };
    
    const handleSendMessage = async () => {
        if (!newMessage.trim() || !activeChat || isSendingMessage) return;
        
        const messageText = newMessage.trim();
        setNewMessage('');
        setIsSendingMessage(true);
        
        // Message optimiste
        const tempMessage = {
            id: Date.now(),
            text: messageText,
            sender: 'Vous',
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            avatar: 'https://i.pravatar.cc/150?img=1'
        };
        
        setMessages(prev => ({
            ...prev,
            [activeChat.id]: [...(prev[activeChat.id] || []), tempMessage]
        }));
        
        try {
            await executeWithRetry(async () => {
                await sendMessageAPI(syndicatId, activeChat.id, messageText);
                clearError(`send-message-${activeChat.id}`);
            }, `send-message-${activeChat.id}`, {
                maxRetries: 2,
                onError: () => {
                    // Supprimer le message optimiste en cas d'échec
                    setMessages(prev => ({
                        ...prev,
                        [activeChat.id]: (prev[activeChat.id] || []).filter(msg => msg.id !== tempMessage.id)
                    }));
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsSendingMessage(false);
        }
    };
    
    const startNewChat = (member) => {
        // Implémentation pour créer un nouveau chat
        console.log('Starting new chat with:', member);
    };
    
    // Charger les messages quand on sélectionne un chat
    useEffect(() => {
        if (activeChat) {
            loadChatMessages(activeChat.id);
        }
    }, [activeChat]);

    const filteredChats = chats.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredMembers = initialMembers.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) && !chats.some(c => c.id === m.id));

    // Styles pour les bordures subtiles
    const borderStyle = "border-gray-200/80 border-white/10";

    const renderChatMessages = () => {
        if (hasError(`messages-${activeChat.id}`)) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <ErrorState 
                        error={getError(`messages-${activeChat.id}`)}
                        onRetry={() => loadChatMessages(activeChat.id)}
                        onDismiss={() => clearError(`messages-${activeChat.id}`)}
                        variant="compact"
                    />
                </div>
            );
        }
        
        if (isLoadingMessages) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <div className="flex items-center gap-3 text-neutral-500">
                        <RefreshCw className="w-6 h-6 animate-spin" />
                        <span>Chargement des messages...</span>
                    </div>
                </div>
            );
        }
        
        const chatMessages = messages[activeChat.id] || [];
        
        if (chatMessages.length === 0) {
            return (
                <div className="flex-grow flex items-center justify-center p-8">
                    <EmptyState
                        icon={MessageCircle}
                        title="Aucun message"
                        description="Commencez la conversation !"
                        className="bg-transparent"
                    />
                </div>
            );
        }
        
        return (
            <div className="flex-grow overflow-y-auto p-4 bg-neutral-50 bg-neutral-800/50">
                {chatMessages.map(msg => (
                    <Message 
                        key={msg.id} 
                        msg={msg} 
                        isSent={msg.sender === 'Vous'} 
                        isGroup={activeChat.isGroup} 
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {/* Header avec gestion d'erreurs globales */}
            <AnimatePresence>
                {hasError('send-message') && (
                    <InlineError 
                        error={getError('send-message')}
                        className="mb-4"
                    />
                )}
            </AnimatePresence>
            
            <div className={`flex h-[calc(100vh-200px)] bg-white bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 border-neutral-700 overflow-hidden`}>
            
            {/* --- COLONNE DE GAUCHE (LISTE DES CHATS) --- */}
            <div className={`w-full md:w-1/3 xl:w-1/4 border-r ${borderStyle} flex-col transition-transform duration-300 ${view === 'chat' && !activeChat ? 'flex' : view === 'list' ? 'flex' : 'hidden md:flex'}`}>
                <div className={`p-4 border-b ${borderStyle}`}><div className="relative"><input type="text" placeholder={t("chat.search_placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 bg-gray-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div></div>
                <div className="flex-grow overflow-y-auto p-2">
                    {/* Chat de Groupe mis en avant */}
                    {filteredChats.filter(c => c.isGroup).map(chat => <ChatListItem key={chat.id} chat={chat} onClick={() => { setActiveChat(chat); setView('chat'); }} isActive={activeChat?.id === chat.id} />)}
                    {filteredChats.filter(c => c.isGroup).length > 0 && <hr className={`my-2 ${borderStyle}`} />}
                    {/* Chats privés */}
                    {filteredChats.filter(c => !c.isGroup).map(chat => <ChatListItem key={chat.id} chat={chat} onClick={() => { setActiveChat(chat); setView('chat'); }} isActive={activeChat?.id === chat.id} />)}
                </div>
                <div className={`p-4 border-t ${borderStyle}`}><button onClick={() => setView('search')} className="w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"><Plus size={20} />{t("chat.new_discussion")}</button></div>
            </div>

            {/* --- COLONNE DE DROITE (FENÊTRE DE CHAT OU DE RECHERCHE) --- */}
            <div className={`w-full md:w-2/3 xl:w-3/4 flex flex-col transition-transform duration-300 ${view === 'list' ? 'hidden md:flex' : 'flex'}`}>
                <AnimatePresence mode="wait">
                    {view === 'chat' && activeChat ? (
                        <motion.div key={activeChat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col bg-white bg-gray-800">
                            <header className={`flex items-center justify-between p-3 border-b ${borderStyle} flex-shrink-0`}>
                                <div className="flex items-center gap-3"><button onClick={() => setActiveChat(null)} className="md:hidden p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><ArrowLeft /></button>{activeChat.isGroup ? <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"><Users size={20} className="text-white"/></div> : <Image src={activeChat.avatar} alt={activeChat.name} width={40} height={40} className="w-10 h-10 rounded-full" />}<div><h2 className="font-semibold text-lg">{activeChat.name}</h2>{activeChat.online && <p className="text-xs text-green-500">En ligne</p>}</div></div>
                                <div className="flex items-center gap-1"><button className="p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><Phone size={20}/></button><button className="p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><Video size={20}/></button><button className="p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><MoreVertical size={20}/></button></div>
                            </header>
                            {renderChatMessages()}
                            <footer className={`p-3 border-t ${borderStyle} bg-white bg-neutral-800 flex-shrink-0`}>
                                <div className="flex items-center gap-2 bg-neutral-100 bg-neutral-700 rounded-full px-2">
                                    <input 
                                        type="text" 
                                        placeholder={t("chat.message_placeholder")} 
                                        value={newMessage} 
                                        onChange={(e) => setNewMessage(e.target.value)} 
                                        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                                        className="flex-grow px-2 py-2 bg-transparent focus:outline-none disabled:opacity-50" 
                                        disabled={isSendingMessage}
                                    />
                                    <button 
                                        className="p-2 hover:bg-neutral-200 hover:bg-neutral-600 rounded-full transition-colors"
                                        disabled={isSendingMessage}
                                    >
                                        <Paperclip size={20}/>
                                    </button>
                                    <button 
                                        onClick={handleSendMessage} 
                                        className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:bg-neutral-400 transition-colors flex items-center justify-center" 
                                        disabled={!newMessage.trim() || isSendingMessage}
                                    >
                                        {isSendingMessage ? (
                                            <RefreshCw size={18} className="animate-spin" />
                                        ) : (
                                            <Send size={18} />
                                        )}
                                    </button>
                                </div>
                            </footer>
                        </motion.div>
                    ) : view === 'search' ? (
                        <motion.div key="search-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col p-4 bg-white bg-gray-800">
                           {/* ... Vue de recherche ... */}
                        </motion.div>
                    ) : (
                        <motion.div key="placeholder-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center text-center text-neutral-500 text-neutral-400 bg-neutral-50 bg-neutral-800/50">
                            <EmptyState
                                icon={MessageCircle}
                                title="Sélectionnez une conversation"
                                description="Choisissez un contact ou un groupe pour commencer à discuter"
                                className="bg-transparent"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Wrapper avec ErrorBoundary
export default function ChatClient(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Chat"
            subtitle="Une erreur s'est produite lors du chargement du chat."
        >
            <ChatClientInner {...props} />
        </ErrorBoundary>
    );
}
```

### ChatClientV2

- **Fichier**: `src/components/syndicate-space/section-chat/ChatClientV2.jsx`
- **Props**: `initialChats = [], initialMembers = []`
- **Hooks**: useState, useRef, useEffect, useTranslations, useParams
```jsx
// src/components/syndicate-space/section-chat/ChatClientV2.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Users, MessageCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
    getChatMessagesAPI, 
    sendChatMessageAPI, 
    createChatRoomAPI, 
    joinChatRoomAPI,
    markChatMessagesAsReadAPI,
    updateTypingStatusAPI 
} from '@/lib/api/chat';

const ChatClientV2 = ({ initialChats = [], initialMembers = [] }) => {
    const params = useParams();
    const syndicateId = params.syndicatId;
    const t = useTranslations();
    
    // États principaux
    const [chats, setChats] = useState(initialChats);
    const [selectedChat, setSelectedChat] = useState(initialChats[0] || null);
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState(initialMembers);
    const [messageInput, setMessageInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // États UI
    const [searchTerm, setSearchTerm] = useState('');
    const [showMembersList, setShowMembersList] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [typingUsers, setTypingUsers] = useState([]);
    
    // Références
    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // Charger les messages quand une salle est sélectionnée
    useEffect(() => {
        if (selectedChat && selectedChat.id && selectedChat.id !== 'general') {
            loadMessages(selectedChat.id);
        }
    }, [selectedChat]);

    // Faire défiler vers le bas quand de nouveaux messages arrivent
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const loadMessages = async (roomId) => {
        if (!syndicateId || !roomId) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const messagesData = await getChatMessagesAPI(syndicateId, roomId, 0, 50);
            setMessages(messagesData.content || []);
        } catch (error) {
            console.error('Erreur lors du chargement des messages:', error);
            setError('Impossible de charger les messages');
            setMessages([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!messageInput.trim() || !selectedChat || !syndicateId) return;
        
        const messageData = {
            content: messageInput.trim(),
            messageType: 'TEXT'
        };
        
        setIsLoading(true);
        
        try {
            const newMessage = await sendChatMessageAPI(syndicateId, selectedChat.id, messageData);
            
            // Ajouter le nouveau message à la liste
            setMessages(prev => [...prev, newMessage]);
            
            // Vider l'input
            setMessageInput('');
            
            // Marquer comme lu
            if (newMessage.id) {
                await markChatMessagesAsReadAPI(syndicateId, selectedChat.id, newMessage.id);
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            setError('Impossible d\'envoyer le message');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateRoom = async () => {
        if (!syndicateId) return;
        
        const roomData = {
            name: 'Nouvelle Discussion',
            description: 'Salle créée automatiquement',
            type: 'GENERAL',
            isPrivate: false
        };
        
        try {
            const newRoom = await createChatRoomAPI(syndicateId, roomData);
            setChats(prev => [...prev, newRoom]);
            setSelectedChat(newRoom);
        } catch (error) {
            console.error('Erreur lors de la création de la salle:', error);
            setError('Impossible de créer la salle');
        }
    };

    const handleJoinRoom = async (roomId) => {
        if (!syndicateId || !roomId) return;
        
        try {
            await joinChatRoomAPI(syndicateId, roomId);
            // Recharger les salles
            // TODO: Implémenter le refresh des salles
        } catch (error) {
            console.error('Erreur lors de la jonction à la salle:', error);
            setError('Impossible de rejoindre la salle');
        }
    };

    const handleTyping = () => {
        if (!selectedChat || !syndicateId) return;
        
        // Mettre à jour le statut typing local
        if (!isTyping) {
            setIsTyping(true);
            updateTypingStatusAPI(syndicateId, selectedChat.id, true);
        }
        
        // Réinitialiser le timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        
        typingTimeoutRef.current = setTimeout(() => {
            setIsTyping(false);
            updateTypingStatusAPI(syndicateId, selectedChat.id, false);
        }, 2000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        } else {
            handleTyping();
        }
    };

    const formatMessageTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    const ChatListItem = ({ chat, onClick, isActive }) => {
        const isGroup = chat.type !== 'PRIVATE';
        const activeClasses = 'bg-blue-100 bg-blue-900/50';
        const hoverClasses = 'hover:bg-gray-100 hover:bg-gray-700/50';

        return (
            <div 
                onClick={onClick} 
                className={`flex items-center p-3 cursor-pointer rounded-xl mb-1 transition-colors duration-200 ${
                    isActive ? activeClasses : hoverClasses
                }`}
            >
                <div className="relative flex-shrink-0">
                    {isGroup ? (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <Users className="text-white w-6 h-6" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-300 bg-gray-600 flex items-center justify-center">
                            <MessageCircle className="text-gray-600 text-gray-300 w-6 h-6" />
                        </div>
                    )}
                    {chat.unreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                                {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
                            </span>
                        </div>
                    )}
                </div>
                <div className="ml-3 flex-grow overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold truncate text-gray-800 text-white">
                            {chat.name}
                        </h3>
                        <span className="text-xs text-gray-500 text-gray-400 flex-shrink-0 ml-2">
                            {chat.lastMessageAt ? formatMessageTime(chat.lastMessageAt) : ''}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 text-gray-400 truncate">
                        {chat.lastMessagePreview || 'Aucun message'}
                    </p>
                </div>
            </div>
        );
    };

    const Message = ({ message }) => {
        const isSent = message.sender?.id === 'current-user'; // TODO: Utiliser l'ID utilisateur réel
        
        return (
            <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
                {!isSent && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 bg-gray-600 flex items-center justify-center flex-shrink-0">
                        {message.sender?.avatar ? (
                            <Image 
                                src={message.sender.avatar} 
                                alt={message.sender.name} 
                                width={32} 
                                height={32} 
                                className="w-8 h-8 rounded-full object-cover" 
                            />
                        ) : (
                            <span className="text-xs font-bold text-gray-600 text-gray-300">
                                {message.sender?.name?.charAt(0) || 'U'}
                            </span>
                        )}
                    </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    isSent 
                        ? 'bg-blue-600 text-white rounded-br-lg' 
                        : 'bg-gray-200 bg-gray-700 text-gray-800 text-gray-200 rounded-bl-lg'
                }`}>
                    {!isSent && (
                        <p className="text-xs font-semibold text-blue-500 text-blue-400 mb-1">
                            {message.sender?.name || 'Utilisateur'}
                        </p>
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <div className={`text-xs mt-1 text-right ${
                        isSent ? 'text-blue-200' : 'text-gray-500 text-gray-400'
                    }`}>
                        {formatMessageTime(message.sentAt)}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full flex bg-white bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Liste des chats */}
            <div className="w-1/3 border-r border-gray-200 border-gray-700 flex flex-col">
                {/* Header avec recherche */}
                <div className="p-4 border-b border-gray-200 border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800 text-white">
                            {t('chat.title')}
                        </h2>
                        <button
                            onClick={handleCreateRoom}
                            className="p-2 text-blue-600 hover:bg-blue-100 hover:bg-blue-900/50 rounded-lg transition-colors"
                            title="Créer une nouvelle salle"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder={t('chat.search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 border-gray-600 rounded-lg bg-white bg-gray-800 text-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto p-2">
                    {chats.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 text-gray-400">
                            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Aucune conversation</p>
                            <button
                                onClick={handleCreateRoom}
                                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Créer une salle
                            </button>
                        </div>
                    ) : (
                        chats
                            .filter(chat => 
                                chat.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((chat) => (
                                <ChatListItem
                                    key={chat.id}
                                    chat={chat}
                                    onClick={() => setSelectedChat(chat)}
                                    isActive={selectedChat?.id === chat.id}
                                />
                            ))
                    )}
                </div>
            </div>

            {/* Zone de conversation */}
            <div className="flex-1 flex flex-col">
                {selectedChat ? (
                    <>
                        {/* Header de la conversation */}
                        <div className="p-4 border-b border-gray-200 border-gray-700 bg-gray-50 bg-gray-800">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                                        <Users className="text-white w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-white">
                                            {selectedChat.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 text-gray-400">
                                            {selectedChat.memberCount} membre(s)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setShowMembersList(!showMembersList)}
                                        className="p-2 text-gray-600 text-gray-400 hover:bg-gray-200 hover:bg-gray-700 rounded-lg transition-colors"
                                        title="Voir les membres"
                                    >
                                        <Users className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 text-gray-400 hover:bg-gray-200 hover:bg-gray-700 rounded-lg transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Zone d'erreur */}
                        {error && (
                            <div className="p-3 bg-red-100 bg-red-900/50 border-b border-red-200 border-red-800">
                                <div className="flex items-center text-red-800 text-red-200">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{error}</span>
                                    <button
                                        onClick={() => setError(null)}
                                        className="ml-auto text-red-600 text-red-400 hover:text-red-800 hover:text-red-200"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <p className="text-gray-500 text-gray-400">Chargement des messages...</p>
                                </div>
                            ) : messages.length === 0 ? (
                                <div className="text-center py-8 text-gray-500 text-gray-400">
                                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Aucun message dans cette conversation</p>
                                    <p className="text-sm mt-2">Soyez le premier à écrire !</p>
                                </div>
                            ) : (
                                messages.map((message) => (
                                    <Message key={message.id} message={message} />
                                ))
                            )}
                            
                            {/* Indicateur de saisie */}
                            {typingUsers.length > 0 && (
                                <div className="flex items-center text-gray-500 text-gray-400 text-sm">
                                    <div className="flex space-x-1 mr-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                    {typingUsers.join(', ')} {typingUsers.length === 1 ? 'est en train d\'écrire...' : 'sont en train d\'écrire...'}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Zone de saisie */}
                        <div className="p-4 border-t border-gray-200 border-gray-700 bg-gray-50 bg-gray-800">
                            <div className="flex items-end space-x-2">
                                <button className="p-2 text-gray-600 text-gray-400 hover:bg-gray-200 hover:bg-gray-700 rounded-lg transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <div className="flex-1 relative">
                                    <textarea
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder={t('chat.message_placeholder')}
                                        className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-lg bg-white bg-gray-900 text-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32"
                                        rows="1"
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim() || isLoading}
                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    /* État vide */
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center text-gray-500 text-gray-400">
                            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <h3 className="text-lg font-medium mb-2">Sélectionnez une conversation</h3>
                            <p>Choisissez une conversation dans la liste pour commencer à discuter</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatClientV2;
```

### CreateEventModal

- **Fichier**: `src/components/syndicate-space/section-evenements/CreateEventModal.jsx`
- **Props**: `isOpen, onClose, onRefresh`
- **Hooks**: useState, useEffect, useTranslations, useParams, useUser
```jsx
// src/components/syndicate-space/section-evenements/CreateEventModal.jsx

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { createEventAPI } from '@/lib/api/event';
import { ugateInstance } from '@/lib/api/instance'; // Pour récupérer les branches
import EventForm from './EventForm';

export default function CreateEventModal({ isOpen, onClose, onRefresh }) {
    const { user } = useUser(); 
    const params = useParams();
    const syndicatId = params.syndicatId; // ID global du syndicat depuis l'URL
    
    const t = useTranslations('create_event_modal');
    
    const [isLoading, setIsLoading] = useState(false);
    const [branches, setBranches] = useState([]);
    const [selectedBranchId, setSelectedBranchId] = useState(null);
    const [isLoadingBranches, setIsLoadingBranches] = useState(true);

    // 1. CHARGER LES BRANCHES AU DÉMARRAGE
    useEffect(() => {
        if (isOpen && syndicatId) {
            const fetchBranches = async () => {
                setIsLoadingBranches(true);
                try {
                    // On récupère les branches via l'API ugate
                    const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
                    const data = response.data || [];
                    setBranches(data);
                    
                    // Si des branches existent, on sélectionne la première par défaut
                    if (data.length > 0) {
                        setSelectedBranchId(data[0].id);
                    }
                } catch (error) {
                    console.error("Erreur branches:", error);
                    toast.error("Impossible de récupérer les antennes du syndicat.");
                } finally {
                    setIsLoadingBranches(false);
                }
            };
            fetchBranches();
        }
    }, [isOpen, syndicatId]);

    // 2. SOUMISSION DU FORMULAIRE
    const handleSubmit = async (formValues) => {
        if (!user?.id) {
            toast.error("Vous devez être connecté");
            return;
        }

        if (!selectedBranchId) {
            toast.error("Veuillez d'abord créer une antenne (branche) pour ce syndicat.");
            return;
        }

        setIsLoading(true);
        try {
            // On envoie le selectedBranchId au lieu du syndicatId
            await createEventAPI(
                selectedBranchId, 
                formValues, 
                formValues.imageFile ? [formValues.imageFile] : []
            );
            
            toast.success("Événement créé avec succès !");
            onClose();
            if (onRefresh) onRefresh();
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Erreur lors de la création";
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ scale: 0.9 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0.9 }} 
                        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-2xl">
                            <h2 className="text-xl font-bold text-gray-900">
                                {t('modal_title', "Créer un événement")}
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Contenu */}
                        <div className="flex-grow overflow-y-auto p-6">
                            {isLoadingBranches ? (
                                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                                    <Loader2 className="w-8 h-8 animate-spin mb-4 text-blue-600" />
                                    <p>Vérification des antennes du syndicat...</p>
                                </div>
                            ) : branches.length === 0 ? (
                                // Cas où aucune branche n'existe
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <AlertCircle className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Aucune antenne trouvée</h3>
                                    <p className="text-gray-600 mb-6 px-4">
                                        Vous devez créer au moins une implantation (branche) pour ce syndicat dans les paramètres avant de pouvoir organiser des événements.
                                    </p>
                                    <button 
                                        onClick={onClose}
                                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
                                    >
                                        Fermer
                                    </button>
                                </div>
                            ) : (
                                // Tout est OK, on affiche le formulaire
                                <EventForm 
                                    onSubmit={handleSubmit} 
                                    isLoading={isLoading} 
                                />
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### EventCard

- **Fichier**: `src/components/syndicate-space/section-evenements/EventCard.jsx`
- **Props**: `event, onUpdateEvent, onShowParticipants`
- **Hooks**: useState, useTranslations
```jsx
// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
    Heart, 
    MessageCircle, 
    Share2, 
    Bookmark, 
    MoreHorizontal, 
    Calendar, 
    MapPin,
    Users
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { joinEventAPI, leaveEventAPI } from '@/lib/api/event';

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const [isJoining, setIsJoining] = useState(false);
    const [hasJoined, setHasJoined] = useState(event.hasJoined || false);
    const t = useTranslations('common');
    
    // Logique Image & Date
    const imageUrl = event.imageUrl && event.imageUrl.startsWith('/') 
        ? `${STATIC_FILES_URL}${event.imageUrl}` 
        : event.imageUrl || (event.imageUrls && event.imageUrls[0]);
    
    const startDate = event.startDate ? new Date(event.startDate) : new Date();
    const formattedDate = startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });

    // Fonction de participation liée au bouton "J'aime" (ou à adapter selon ton besoin)
    const handleLikeClick = async () => {
        setIsJoining(true);
        try {
            if (hasJoined) {
                await leaveEventAPI(event.id);
                setHasJoined(false);
            } else {
                await joinEventAPI(event.id);
                setHasJoined(true);
                toast.success('Inscrit à l\'événement !');
            }
            if (onUpdateEvent) onUpdateEvent({ ...event, hasJoined: !hasJoined });
        } catch (error) {
            toast.error('Erreur de connexion');
        } finally {
            setIsJoining(false);
        }
    };
            // À l'intérieur du composant EventCard
const handleJoinEvent = async () => {
    setIsJoining(true);
    try {
        // Appel conforme au Swagger (URL seule, authentifiée)
        await joinEventAPI(event.id);
        
        setHasJoined(true);
        toast.success("Inscription réussie !");
    } catch (error) {
        toast.error("Erreur lors de l'inscription");
    } finally {
        setIsJoining(false);
    }
};


    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-2 w-full mx-auto"
        >
            {/* 1. BANDEAU SYNDICAT (Gradient Mauve/Bleu) */}
            <div className="bg-gradient-to-r from-[#8E54E9] to-[#4776E6] px-4 py-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border border-white/50 overflow-hidden bg-white/20 flex items-center justify-center">
                    <Users size={14} className="text-white" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">
                    {event.branchName || "Syndicat National"}
                </span>
            </div>

            {/* 2. INFOS AUTEUR / ORGANISATEUR */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        {event.author?.profileImage ? (
                            <Image src={event.author.profileImage} alt="" width={40} height={40} className="rounded-full object-cover" />
                        ) : (
                            <SyndicatDefaultAvatar name={event.author?.name || "U"} size={40} />
                        )}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{event.author?.name || "Marie Dubois"}</h4>
                        <p className="text-[11px] text-gray-500 flex items-center gap-1">
                            <span className="text-blue-500">🕒</span> Il y a 6 heures
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><Bookmark size={20} /></button>
            </div>

            {/* 3. TEXTE DE L'ÉVÉNEMENT */}
            <div className="px-4 pb-3">
                <p className="text-[14px] text-gray-800 leading-relaxed">
                    <span className="font-bold block mb-1 text-indigo-700">{event.title}</span>
                    {event.description}
                </p>
            </div>

            {/* 4. IMAGE PRINCIPALE (Bords arrondis) */}
              {imageUrl && (
        <div className="px-4 mb-3">
            {/* aspect-[16/9] rend l'image plus large et moins "carrée" */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-100">
                <Image src={imageUrl} alt={event.title} fill className="object-cover" unoptimized />
            </div>
        </div>
    )}

            {/* 5. COMPTEURS RÉACTIONS & COMMENTAIRES */}
            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-white">
                            <Heart size={10} className="text-white fill-current" />
                        </div>
                        <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center border border-white">
                            <Heart size={10} className="text-white fill-current" />
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">42 réactions</span>
                </div>
                <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                    {event.commentsCount || 1} commentaires
                </div>
            </div>

            {/* 6. BARRE D'ACTIONS SOCIALES (J'aime, Commenter, Partager) */}
            <div className="px-2 py-1 flex items-center justify-between">
                <button 
                    onClick={handleLikeClick}
                    disabled={isJoining}
                    className={`flex-1 py-2 flex items-center justify-center gap-2 rounded-lg transition-colors ${hasJoined ? 'text-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Heart size={18} className={hasJoined ? "fill-current" : ""} />
                    <span className="text-sm font-medium">J'aime</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">Commenter</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm font-medium">Partager</span>
                </button>
            </div>

            {/* BLOC INFOS COMPLÉMENTAIRES (Date/Lieu - Très discret) */}
            <div className="px-4 py-2 bg-gray-50/50 flex gap-4 text-[10px] text-gray-400 font-semibold uppercase">
                <div className="flex items-center gap-1"><Calendar size={12}/> {formattedDate}</div>
                <div className="flex items-center gap-1"><MapPin size={12}/> {event.location || "Yaoundé"}</div>
            </div>
        </motion.div>
    );
}
```

### EventForm

- **Fichier**: `src/components/syndicate-space/section-evenements/EventForm.jsx`
- **Props**: `date`
- **Hooks**: useForm, useTranslations, useState
```jsx
// src/components/syndicate-space/section-evenements/EventForm.jsx
"use client";

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, Type, FileText, Image as ImageIcon, Send } from 'lucide-react';
import { FileUploader } from '@/components/forms/adhesion/file-uploader';
import { useState } from 'react';

// Utilitaire pour formater les dates pour les inputs datetime-local
const formatDateForInput = (date) => {
    if (!date) return '';
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return '';
        
        // Ajuster pour le timezone local
        const offset = d.getTimezoneOffset() * 60000;
        const localDate = new Date(d.getTime() - offset);
        return localDate.toISOString().slice(0, 16);
    } catch (error) {
        console.warn('Erreur lors du formatage de la date:', error);
        return '';
    }
};

// Validation personnalisée des dates
const validateDates = (startDate, endDate) => {
    const errors = {};
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start < now) {
        errors.startDate = "La date de début ne peut pas être dans le passé";
    }
    
    if (end <= start) {
        errors.endDate = "La date de fin doit être postérieure à la date de début";
    }
    
    return errors;
};

export default function EventForm({ onSubmit, initialData = {}, isLoading }) {
    const t = useTranslations();
    const [selectedImage, setSelectedImage] = useState(null);
    const [dateErrors, setDateErrors] = useState({});
    
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        defaultValues: {
            title: initialData.title || '',
            description: initialData.description || '',
            location: initialData.location || '',
            startDate: formatDateForInput(initialData.startDate),
            endDate: formatDateForInput(initialData.endDate),
        }
    });
    
    // Observer les changements de dates
    const watchedStartDate = watch('startDate');
    const watchedEndDate = watch('endDate');

    const inputClasses = "w-full p-3 border rounded-lg bg-white text-gray-900 border-gray-300 bg-gray-800 text-gray-200 border-gray-600 placeholder-gray-400 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";
    
    // Gestionnaire de soumission avec validation des dates
    const handleFormSubmit = (data) => {
        const dateValidationErrors = validateDates(data.startDate, data.endDate);
        
        if (Object.keys(dateValidationErrors).length > 0) {
            setDateErrors(dateValidationErrors);
            return;
        }
        
        setDateErrors({});
        
        // Ajouter l'image sélectionnée aux données
        const formData = {
            ...data,
            imageFile: selectedImage
        };
        
        onSubmit(formData);
    };
    
    // Gestionnaire de sélection d'image
    const handleImageSelect = (file) => {
        setSelectedImage(file);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 p-4 sm:p-6">
            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><Type className="mr-2"/>{t('event_form.title')} *</label>
                <input {...register("title", { required: t('errors.required_field') })} placeholder={t('event_form.title_placeholder')} className={inputClasses} />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><FileText className="mr-2"/>{t('event_form.description')} *</label>
                <textarea {...register("description", { required: t('errors.required_field') })} rows={5} placeholder={t('event_form.description_placeholder')} className={`${inputClasses} resize-none`}></textarea>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Calendar className="mr-2"/>{t('event_form.start_date')} *</label>
                    <input 
                        type="datetime-local" 
                        {...register("startDate", { required: t('errors.required_field') })} 
                        className={`${inputClasses} ${(errors.startDate || dateErrors.startDate) ? 'border-red-500' : ''}`}
                        min={new Date().toISOString().slice(0, 16)}
                    />
                    {(errors.startDate || dateErrors.startDate) && 
                        <p className="text-red-500 text-xs mt-1">{errors.startDate?.message || dateErrors.startDate}</p>
                    }
                </div>
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Clock className="mr-2"/>{t('event_form.end_date')} *</label>
                    <input 
                        type="datetime-local" 
                        {...register("endDate", { required: t('errors.required_field') })} 
                        className={`${inputClasses} ${(errors.endDate || dateErrors.endDate) ? 'border-red-500' : ''}`}
                        min={watchedStartDate || new Date().toISOString().slice(0, 16)}
                    />
                    {(errors.endDate || dateErrors.endDate) && 
                        <p className="text-red-500 text-xs mt-1">{errors.endDate?.message || dateErrors.endDate}</p>
                    }
                </div>
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><MapPin className="mr-2"/>{t('event_form.location')} *</label>
                <input {...register("location", { required: t('errors.required_field') })} placeholder={t('event_form.location_placeholder')} className={inputClasses} />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>

            <div>
                <FileUploader 
                    label={t('event_form.image')} 
                    icon={<ImageIcon />} 
                    onFileSelect={handleImageSelect}
                    acceptedFileTypes="image/*"
                    maxSizeInMB={5}
                />
                {selectedImage && (
                    <p className="text-sm text-green-600 mt-2">
                        Image sélectionnée: {selectedImage.name}
                    </p>
                )}
            </div>

            <div className="pt-4 flex justify-end">
                <button type="submit" disabled={isLoading} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                    <Send size={18} />
                    {isLoading ? t('common.loading') : t('event_form.submit_button')}
                </button>
            </div>
        </form>
    );
}
```

### EventsFeed

- **Fichier**: `src/components/syndicate-space/section-evenements/EventsFeed.jsx`
- **Props**: `initialEvents = [], syndicatId`
- **Hooks**: useState, useEffect, useMemo, useTranslations, useErrorHandler, useApiWithRetry
```jsx
// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus, RefreshCw, Calendar, Search } from 'lucide-react';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';
import CreateEventModal from './CreateEventModal';
import { CardSkeleton } from '../SyndicateSpaceLoader';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import { getEventsAPI } from '@/lib/api/event';
import { ugateInstance } from '@/lib/api/instance'; // IMPORT AJOUTÉ

function EventsFeedInner({ initialEvents = [], syndicatId }) {
    const t = useTranslations('common');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [events, setEvents] = useState(initialEvents || []);
    const [selectedEventForParticipants, setSelectedEventForParticipants] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [lastRefresh, setLastRefresh] = useState(Date.now());

    const [activeBranchId, setActiveBranchId] = useState(null);
    
    const filteredEvents = useMemo(() => 
        (events || []).filter(event => 
            event?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event?.description?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);

    // --- FONCTION REFRESH MODIFIÉE POUR UTILISER LA BRANCHE ---
    const refreshEvents = async (force = false, page = 0, size = 20, branchIdOverride = null) => {
        // On utilise l'ID passé en paramètre ou l'ID stocké dans l'état
        const targetId = branchIdOverride || activeBranchId;

        if (!targetId) {
            console.warn("Impossible de rafraîchir : ID de branche manquant");
            return;
        }

        try {
            await executeWithRetry(async () => {
                // APPEL API AVEC targetId (L'ID DE LA BRANCHE)
                const eventsData = await getEventsAPI(targetId, page, size, 'startDate', 'DESC');
                
                let fetchedEvents = [];
                if (eventsData && eventsData.content) {
                    fetchedEvents = eventsData.content;
                } else if (Array.isArray(eventsData)) {
                    fetchedEvents = eventsData;
                }
                
                const eventsWithDates = fetchedEvents.map(event => ({
                    ...event,
                    startDate: event.date ? new Date(event.date) : new Date(),
                    endDate: event.date ? new Date(event.date) : new Date(),
                    createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
                }));
                
                setEvents(eventsWithDates);
                setLastRefresh(Date.now());
                clearError('events');
            }, 'refresh-events', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) toast.success("Événements mis à jour !");
                }
            });
        } catch (error) {
            console.error("Erreur refreshEvents:", error);
        }
    };

    // --- CHARGEMENT INITIAL DES BRANCHES ---
    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
                const branches = response.data || [];
                
                if (branches.length > 0) {
                    const bId = branches[0].id;
                    setActiveBranchId(bId);
                    // On charge les événements de CETTE branche spécifiquement
                    refreshEvents(false, 0, 20, bId); 
                }
            } catch (err) {
                console.error("Erreur chargement branche pour le feed", err);
            }
        };
        if (syndicatId) loadInitialData();
    }, [syndicatId]);

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    const handleCreateEvent = async (newEventData) => {
        if (!activeBranchId) return;
        setIsCreatingEvent(true);
        
        try {
            await executeWithRetry(async () => {
                const { createEventAPI } = await import('@/lib/api/event');
                // Utilisation de activeBranchId pour la création
                const createdEvent = await createEventAPI(activeBranchId, newEventData, newEventData.imageFile ? [newEventData.imageFile] : []);
                
                const eventWithDates = {
                    ...createdEvent,
                    startDate: createdEvent.date ? new Date(createdEvent.date) : new Date(),
                    endDate: createdEvent.date ? new Date(createdEvent.date) : new Date(),
                    createdAt: createdEvent.createdAt ? new Date(createdEvent.createdAt) : new Date()
                };
                
                setEvents(prevEvents => [eventWithDates, ...prevEvents]);
                setIsCreateModalOpen(false);
                clearError('create-event');
            }, 'create-event', {
                maxRetries: 2,
                onSuccess: () => {
                    toast.success(t('event_form.success_toast') || 'Événement créé avec succès !');
                }
            });
        } catch (error) {
            // Géré par executeWithRetry
        } finally {
            setIsCreatingEvent(false);
        }
    };

    const EventsList = ({ data }) => {
        if (hasError('events')) {
            return <ErrorState error={getError('events')} onRetry={() => refreshEvents(true)} />;
        }

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Calendar}
                    title={searchTerm ? "Aucun résultat" : "Aucun événement"}
                    description={searchTerm ? "Essayez d'autres mots-clés." : "Le fil d'actualité est vide."}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12"
                />
            );
        }

        return (
         // Remplacer grid-cols-2 par max-w-2xl mx-auto
       <div className="max-w-3xl mx-auto flex flex-col gap-8"> 
            {data.map((event) => (
                <EventCard 
                    key={event.id} 
                    event={event} 
                    onShowParticipants={setSelectedEventForParticipants}
                    onUpdateEvent={handleUpdateEvent}
                />
            ))}
        </div>

        );
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Événements</h1>
                    <p className="text-gray-500">Planifiez et gérez les activités de votre syndicat</p>
                </div>
                <button
                    onClick={() => refreshEvents(true)}
                    className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                    disabled={apiLoading}
                >
                    <RefreshCw className={`w-5 h-5 ${apiLoading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <EventsList data={filteredEvents} />

            <button
                onClick={() => setIsCreateModalOpen(true)}
                className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-40"
            >
                <Plus size={24} />
            </button>

            <ParticipantsModal event={selectedEventForParticipants} onClose={() => setSelectedEventForParticipants(null)} />
            
            <CreateEventModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onRefresh={() => refreshEvents(true)}
                isLoading={isCreatingEvent}
            />
        </div>
    );
}

export default function EventsFeed(props) {
    return (
        <ErrorBoundary title="Erreur section Événements">
            <EventsFeedInner {...props} />
        </ErrorBoundary>
    );
}
```

### ParticipantsModal

- **Fichier**: `src/components/syndicate-space/section-evenements/ParticipantsModal.jsx`
- **Props**: `event, onClose`
- **Hooks**: useState, useEffect, useTranslations
```jsx
// src/components/syndicate-space/section-evenements/ParticipantsModal.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from "next-intl";
import { X, Users, Loader2 } from 'lucide-react';
import { getEventParticipantsAPI } from '@/lib/api/event';

export default function ParticipantsModal({ event, onClose }) {
    const t = useTranslations('events_page');
    const [participants, setParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Charger les participants quand l'événement change
    useEffect(() => {
        if (event?.id) {
            loadParticipants();
        }
    }, [event?.id]);

    const loadParticipants = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getEventParticipantsAPI(event.id);
            setParticipants(data || []);
        } catch (err) {
            console.error('Erreur chargement participants:', err);
            setError('Impossible de charger les participants');
            // Fallback sur les participants locaux si disponibles
            setParticipants(event.participants || []);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {event && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 text-white flex items-center gap-2">
                                <Users />
                                Participants ({participants.length})
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:bg-gray-100 hover:bg-gray-700 rounded-full"
                            >
                                <X />
                            </button>
                        </div>

                        {isLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-8 text-red-500">
                                {error}
                            </div>
                        ) : participants.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                Aucun participant pour le moment
                            </div>
                        ) : (
                            <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                                {participants.map((participant, index) => (
                                    <motion.div
                                        key={participant.userId || index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center p-3 bg-gray-50 bg-gray-700/50 rounded-lg"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                                            {(participant.fullName || participant.name || 'U').charAt(0).toUpperCase()}
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700 text-gray-200">
                                            {participant.fullName || participant.name || 'Utilisateur'}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### CommentModal

- **Fichier**: `src/components/syndicate-space/section-exprimer/CommentModal.jsx`
- **Props**: `post, isOpen, onClose, onAddComment`
- **Hooks**: useState, useRef, useEffect, useTranslations
```jsx
// src/components/syndicate-space/section-exprimer/CommentModal.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Image as ImageIcon, Send, X, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Comment from './comments/Comment';
import EmojiPicker from './comments/EmojiPicker';

export default function CommentModal({ post, isOpen, onClose, onAddComment }) {
    const t = useTranslations('comments');
    
    // Initialise l'état des commentaires avec les données du post
    // On ajoute 'showReplies' pour contrôler l'affichage des réponses localement
    const [comments, setComments] = useState(post.comments.map(c => ({ ...c, showReplies: false })));
    
    // États pour la saisie d'un nouveau commentaire
    const [newComment, setNewComment] = useState('');
    const [commentImage, setCommentImage] = useState(null);
    const [commentImagePreview, setCommentImagePreview] = useState(null);
    const [replyTo, setReplyTo] = useState(null); // Pour savoir à quel commentaire on répond
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
    
    const commentInputRef = useRef(null);
    const fileInputRef = useRef(null);

    // Synchronise les commentaires si le post parent est mis à jour
    useEffect(() => {
        setComments(post.comments.map(c => ({ ...c, showReplies: c.showReplies || false })));
    }, [post.comments]);

    const handleSubmitComment = () => {
        if (!newComment.trim() && !commentImage) return;

        const newCommentObj = {
            id: Date.now(),
            author: { name: 'Vous', avatar: 'https://i.pravatar.cc/150?img=1' },
            content: newComment,
            image: commentImagePreview,
            timestamp: "À l'instant",
            liked: false,
            likes: 0,
            replies: []
        };
        
        onAddComment(newCommentObj);
        setNewComment('');
        setCommentImage(null);
        setCommentImagePreview(null);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCommentImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setCommentImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleEmojiClick = (emoji) => {
        setNewComment((prev) => prev + emoji);
        setIsEmojiPickerVisible(false);
    };

    const handleReply = (comment) => {
        setReplyTo(comment);
        commentInputRef.current?.focus();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white bg-gray-800 rounded-2xl w-full max-w-2xl h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                            <h2 className="text-xl font-bold text-gray-800 text-white">Publication de {post.author.name}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div>
                                <p className="text-gray-700 text-gray-300 whitespace-pre-wrap">{post.content}</p>
                                {post.image && <div className="mt-4 rounded-lg overflow-hidden"><Image src={post.image} alt="Post content" width={600} height={400} className="w-full h-auto" /></div>}
                            </div>
                            <hr className="border-gray-700"/>
                            <div className="space-y-6">
                                {comments.map(comment => <Comment key={comment.id} comment={comment} onReply={handleReply} />)}
                            </div>
                        </div>

                        <div className="relative p-4 border-t border-gray-700 bg-gray-50 bg-gray-900/50 rounded-b-2xl flex-shrink-0">
                            {replyTo && (
                                <div className="mb-2 p-2 bg-blue-100 bg-blue-900/50 rounded-lg flex justify-between items-center text-xs">
                                    <span className="text-blue-600 text-blue-400">Répondre à <strong>{replyTo.author.name}</strong></span>
                                    <button onClick={() => setReplyTo(null)} className="font-bold p-1"><X size={14} /></button>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <Image src="https://i.pravatar.cc/150?img=1" alt="Votre avatar" width={40} height={40} className="w-10 h-10 rounded-full" />
                                <div className="relative flex-1">
                                    <input
                                        ref={commentInputRef}
                                        type="text"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder={t('comments.placeholder')}
                                        className="w-full p-3 pr-28 rounded-full bg-white bg-gray-700 border-2 border-gray-200 border-gray-600 text-gray-900 text-gray-200"
                                        onKeyPress={(e) => { if (e.key === 'Enter') handleSubmitComment(); }}
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                        <button onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)} className="p-2 hover:bg-gray-100 hover:bg-gray-600 rounded-full"><Smile className="w-5 h-5 text-yellow-500" /></button>
                                        <button onClick={() => fileInputRef.current?.click()} className="p-2 hover:bg-gray-100 hover:bg-gray-600 rounded-full"><ImageIcon className="w-5 h-5 text-green-500" /></button>
                                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                                        <button onClick={handleSubmitComment} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-400" disabled={!newComment.trim()}><Send size={16} /></button>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {isEmojiPickerVisible && <EmojiPicker onEmojiClick={handleEmojiClick} />}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### NewPostModal

- **Fichier**: `src/components/syndicate-space/section-exprimer/NewPostModal.jsx`
- **Props**: `isOpen, onClose, onNewPost, isLoading, userName, authorId, branchId`
- **Hooks**: useState, useRef, useEffect, useTranslations
```jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, X } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { toast } from 'react-hot-toast';

export default function NewPostModal({ isOpen, onClose, onNewPost, isLoading, userName, authorId, branchId }) {
    const t = useTranslations('express_page');
    const [content, setContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            setContent('');
            setImagePreview(null);
            setImageFile(null);
        }
    }, [isOpen]);

    const handlePublish = () => {
        // --- VÉRIFICATION TECHNIQUE ---
        console.log("Vérification avant publication :", { authorId, branchId, hasContent: !!content.trim() });

        if (!authorId) {
            toast.error("Erreur : Votre session a expiré. Reconnectez-vous.");
            return;
        }
        if (!branchId) {
            toast.error("Erreur : Impossible d'identifier l'antenne du syndicat.");
            return;
        }
        if (!content.trim() && !imageFile) {
            toast.error("Votre message est vide.");
            return;
        }

        const formData = new FormData();
        formData.append('content', content.trim());
        formData.append('authorId', authorId);
        formData.append('branchId', branchId);
        
        // N'ajouter l'image que si elle existe vraiment
        if (imageFile) {
            formData.append('images', imageFile);
        }
        
        onNewPost(formData);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4 text-gray-900">
                            <h2 className="text-2xl font-bold">Créer une publication</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder={`Quoi de neuf, ${userName || 'Jude'} ?`}  
                            className="w-full h-32 p-3 border-2 border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-600 resize-none transition-all text-gray-900"
                        ></textarea>

                        {imagePreview && (
                            <div className="mt-4 relative rounded-xl overflow-hidden border border-gray-200">
                                <Image src={imagePreview} alt="Aperçu" width={500} height={300} className="w-full h-auto object-cover" />
                                <button onClick={() => {setImagePreview(null); setImageFile(null);}} className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"><X size={16} /></button>
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-6">
                            <button 
                                onClick={() => fileInputRef.current?.click()} 
                                className="p-3 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            >
                                <ImageIcon size={24} />
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                            
                            <div className="flex gap-3">
                                <button onClick={onClose} className="px-6 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-all">
                                    Annuler
                                </button>
                                <button 
                                    onClick={handlePublish} 
                                    disabled={(!content.trim() && !imageFile) || isLoading} 
                                    className="px-8 py-2 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 shadow-lg shadow-blue-100 transition-all flex items-center gap-2"
                                >
                                    {isLoading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send size={18} />}
                                    Publier
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### Post

- **Fichier**: `src/components/syndicate-space/section-exprimer/Post.jsx`
- **Props**: `post`
- **Hooks**: useState, useUser
```jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, Send, Clock, Bookmark, MoreHorizontal } from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { getCommentsAPI, addCommentAPI } from '@/lib/api/posts';
import { toast } from 'react-hot-toast';
import { useUser } from '@/context/UserContext';

export default function Post({ post }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // 1. EXTRACTION SÉCURISÉE DES DONNÉES
    const author = post.authorFullName || "Utilisateur";
    const content = post.content || "";
    
    // Récupération de l'image (Expert Mapping)
    const imageInfo = post.fileUrlAndType?.find(f => f.type === "IMAGE");
    const imageUrl = imageInfo?.url;

    const { user } = useUser();

    const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
    }) : "À l'instant";

    // 2. GESTION DES COMMENTAIRES
    const toggleComments = async () => {
        if (!showComments) {
            setIsLoadingComments(true);
            try {
                const data = await getCommentsAPI(null, post.id);
                setComments(Array.isArray(data) ? data : []);
            } catch (e) {
                console.error("Erreur chargement commentaires", e);
            } finally {
                setIsLoadingComments(false);
            }
        }
        setShowComments(!showComments);
    };

    const handleLike = async () => {
    if (!user?.id) return toast.error("Connectez-vous pour réagir");

    try {
        // Appel conforme au Swagger (URL + JSON Body)
        await addReactionAPI(post.id, user.id);
        
        setIsLiked(true);
        // Optionnel : incrémenter le compteur localement pour l'UI
        post.nlikes = (post.nlikes || 0) + 1;
        
        toast.success("Vous aimez cette publication");
    } catch (error) {
        toast.error("Impossible d'ajouter la réaction");
    }
};


    const handleAddComment = async (e) => {
    e.preventDefault();
    const commentText = newComment.trim();
    if (!commentText) return;

    try {
        // 1. Appel API
        const created = await addCommentAPI(post.id, commentText);

        // 2. ENRICHISSEMENT (C'est ici que ça se joue)
        // On crée un objet "propre" pour l'affichage immédiat
        // en utilisant les données de l'utilisateur connecté (user)
        const commentForUI = {
            ...created,
            // Si le serveur ne renvoie pas le nom tout de suite, on utilise le nôtre
            authorFullName: created.authorFullName || `${user?.firstName} ${user?.lastName}`.trim() || "Moi",
            content: created.content || commentText,
            createdAt: created.createdAt || new Date().toISOString(),
            id: created.id || Date.now() // Sécurité pour la clé (key)
        };

        // 3. Mise à jour de l'état
        // On l'ajoute en haut de la liste (index 0)
        setComments(prev => [commentForUI, ...prev]);
        
        // 4. Nettoyage du champ
        setNewComment("");
        toast.success("Commentaire publié !");
        
    } catch (error) {
        console.error(error);
        toast.error("Erreur lors de la publication du commentaire");
    }
};

    return (
        <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 w-full max-w-2xl mx-auto"
        >
            {/* HEADER */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <SyndicatDefaultAvatar name={author} size={42} />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">{author}</h4>
                        <p className="text-[11px] text-gray-400 flex items-center gap-1">
                            <Clock size={10} /> {formattedDate}
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 hover:bg-gray-50 p-2 rounded-full"><MoreHorizontal size={18}/></button>
            </div>

            {/* TEXTE */}
            <div className="px-4 pb-3 text-[15px] text-gray-800 leading-relaxed">
                {content}
            </div>

            {/* IMAGE (Correction Photo) */}
            {imageUrl && (
                <div className="px-4 mb-3">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                        <Image 
                            src={imageUrl} 
                            alt="Publication" 
                            fill 
                            className="object-cover" 
                            unoptimized // Evite les erreurs de proxy local
                        />
                    </div>
                </div>
            )}

            {/* ACTIONS */}
            <div className="px-2 py-1 flex items-center border-t border-gray-50">
                <button onClick={() => setIsLiked(!isLiked)} className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${isLiked ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                    <Heart size={18} className={isLiked ? "fill-current" : ""} /> J'aime
                </button>
                <button onClick={toggleComments} className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${showComments ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                    <MessageCircle size={18} /> Commenter
                </button>
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-sm text-gray-600"><Share2 size={18} /> Partager</button>
            </div>

            {/* SECTION COMMENTAIRES (Correction Unique Key) */}
            <AnimatePresence>
                {showComments && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="bg-gray-50 border-t border-gray-100 overflow-hidden">
                        <div className="p-4 flex gap-3">
                            <SyndicatDefaultAvatar name="Moi" size={32} />
                            <form onSubmit={handleAddComment} className="flex-1 relative">
                                <input 
                                    value={newComment} 
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Écrivez un commentaire..."
                                    className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:border-blue-400 outline-none"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600"><Send size={16}/></button>
                            </form>
                        </div>

                        <div className="px-4 pb-4 space-y-4">
                            {isLoadingComments ? (
                                <div className="text-center py-4 text-xs text-gray-400">Chargement...</div>
                            ) : (
                                comments
                                .filter(comment => comment.content && comment.content !== "string") 
                                .map((comment) => (
                                    // LA CORRECTION DE LA KEY EST ICI
                                    <div key={comment.id || `comment-${Math.random()}`} className="flex gap-3 animate-fade-in">
                                        <SyndicatDefaultAvatar name={comment.authorFullName} size={32} />
                                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-xs text-gray-900">{comment.authorFullName|| "Utilisateur"}</span>
                                                <span className="text-[10px] text-gray-400">
                                                    {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "Maintenant"}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700">{comment.content}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                                {/* Petit message si après filtrage il n'y a plus rien */}
    {!isLoadingComments && comments.filter(c => c.content && c.content !== "string").length === 0 && (
        <p className="text-center text-[10px] text-gray-400 py-2">Aucun commentaire valide.</p>
    )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
```

### PublicationsFeed

- **Fichier**: `src/components/syndicate-space/section-exprimer/PublicationsFeed.jsx`
- **Props**: `syndicatId`
- **Hooks**: useState, useEffect, useUser
```jsx
"use client";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { ugateInstance } from '@/lib/api/instance';
import { getPostsAPI, createPostAPI } from '@/lib/api/posts';
import Post from './Post';
import NewPostModal from './NewPostModal';
import { useUser } from '@/context/UserContext';
import { Plus, RefreshCw } from 'lucide-react';

export default function PublicationsFeed({ syndicatId }) {
    const { user } = useUser();
    const [posts, setPosts] = useState([]);
    const [activeBranchId, setActiveBranchId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // 1. Charger la branche ET les posts existants
    const loadData = async () => {
        setLoading(true);
        try {
            const resBranch = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
            if (resBranch.data && resBranch.data.length > 0) {
                const bId = resBranch.data[0].id;
                setActiveBranchId(bId);
                
                // On récupère les publications
                const resPosts = await getPostsAPI(bId);
                // On gère le fait que l'API renvoie un tableau direct
                const postsArray = Array.isArray(resPosts) ? resPosts : (resPosts.content || []);
                setPosts(postsArray);
            }
        } catch (e) {
            console.error("Erreur de chargement", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (syndicatId) loadData();
    }, [syndicatId]);

    const handleCreatePost = async (formData) => {
        try {
            const newPost = await createPostAPI(formData);
            // On ajoute le nouveau post en haut de la liste
            setPosts(prev => [newPost, ...prev]);
            setIsModalOpen(false);
            toast.success("Publication réussie !");
        } catch (e) {
            toast.error("Erreur lors de la publication");
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight text-white">Publications</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all active:scale-90"
                >
                    <Plus size={28} />
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20"><RefreshCw className="animate-spin text-blue-500" /></div>
            ) : posts.length > 0 ? (
                <div className="space-y-4">
                    {posts.map(p => <Post key={p.id} post={p} />)}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-400 font-medium">Aucune publication pour le moment.</p>
                </div>
            )}

            <NewPostModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                onNewPost={handleCreatePost}
                authorId={user?.id}
                branchId={activeBranchId}
                userName={user?.firstName}
            />
        </div>
    );
}
```

### Comment

- **Fichier**: `src/components/syndicate-space/section-exprimer/comments/Comment.jsx`
- **Props**: `comment, onReply`
- **Hooks**: useState, useTranslations
```jsx
// src/components/syndicate-space/section-exprimer/comments/Comment.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Eye, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Reply from './Reply';

export default function Comment({ comment, onReply }) {
    const t = useTranslations('comments');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(comment.likes || 0);
    const [showReplies, setShowReplies] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Image
                src={comment.author.avatar}
                alt={comment.author.name}
                width={40} height={40}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
                <div className="bg-gray-100 bg-gray-700 rounded-2xl px-4 py-3">
                    <p className="font-semibold text-sm text-gray-800 text-gray-100">{comment.author.name}</p>
                    <p className="text-gray-600 text-gray-300 text-sm mt-1 whitespace-pre-wrap">{comment.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 text-gray-400 px-2">
                    <button onClick={handleLike} className={`flex items-center space-x-1 hover:text-blue-500 ${liked ? 'text-blue-500 font-medium' : ''}`}>
                        <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
                        <span>{t('common.like')} {likes > 0 && `(${likes})`}</span>
                    </button>
                    <button onClick={() => onReply(comment)} className="flex items-center space-x-1 hover:text-blue-500">
                        <MessageCircle size={14} />
                        <span>Répondre</span>
                    </button>
                    {comment.replies?.length > 0 && (
                        <button onClick={() => setShowReplies(!showReplies)} className="flex items-center space-x-1 hover:text-blue-500">
                            {showReplies ? <X size={14} /> : <Eye size={14} />}
                            <span>{showReplies ? 'Masquer' : `${comment.replies.length} réponse(s)`}</span>
                        </button>
                    )}
                </div>
                <AnimatePresence>
                    {showReplies && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-4 space-y-4 border-l-2 border-gray-200 border-gray-600 pl-4"
                        >
                            {comment.replies.map((reply) => (
                                <Reply key={reply.id} reply={reply} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
```

### EmojiPicker

- **Fichier**: `src/components/syndicate-space/section-exprimer/comments/EmojiPicker.jsx`
- **Props**: `onEmojiClick`
- **Hooks**: 
```jsx
// src/components/syndicate-space/section-exprimer/comments/EmojiPicker.jsx
"use client";

import { motion } from 'framer-motion';

export default function EmojiPicker({ onEmojiClick }) {
    const emojis = ['😊', '😂', '❤️', '👍', '🤔', '🎉', '🔥', '👏'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 left-0 bg-white bg-gray-700 shadow-xl rounded-2xl p-2 grid grid-cols-4 gap-1 border border-gray-600 z-10"
        >
            {emojis.map((emoji) => (
                <motion.button
                    key={emoji}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onEmojiClick(emoji)}
                    className="text-2xl hover:bg-gray-100 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                    aria-label={`Insérer l'emoji ${emoji}`}
                >
                    {emoji}
                </motion.button>
            ))}
        </motion.div>
    );
};
```

### Reply

- **Fichier**: `src/components/syndicate-space/section-exprimer/comments/Reply.jsx`
- **Props**: `reply`
- **Hooks**: useState, useTranslations
```jsx
// src/components/syndicate-space/section-exprimer/comments/Reply.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Reply({ reply }) {
    const t = useTranslations('comments');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(reply.likes || 0);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-2"
        >
            <Image
                src={reply.author.avatar}
                alt={reply.author.name}
                width={32} height={32}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
                <div className="bg-gray-100 bg-gray-700 rounded-2xl px-3 py-2">
                    <p className="font-semibold text-xs text-gray-800 text-gray-100">{reply.author.name}</p>
                    <p className="text-gray-600 text-gray-300 text-sm mt-0.5 whitespace-pre-wrap">{reply.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 text-gray-400 px-2">
                    <button onClick={handleLike} className={`flex items-center space-x-1 hover:text-blue-500 ${liked ? 'text-blue-500 font-medium' : ''}`}>
                        <Heart size={12} fill={liked ? 'currentColor' : 'none'} />
                        <span>{t('common.like')} {likes > 0 && `(${likes})`}</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
```

### MembersClient

- **Fichier**: `src/components/syndicate-space/section-membres/MembersClient.jsx`
- **Props**: `initialMembers = [], initialRequests = [], branches = [], stats =`
- **Hooks**: useState, useMemo, useEffect, useTranslations, useErrorHandler, useApiWithRetry
```jsx
"use client";

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Users, UserPlus, Search, Filter, Check, X, AlertTriangle, UserX, Shield, UserCheck, RefreshCw } from 'lucide-react';
import StatCard from './StatCard';
import TabButton from './TabButton';
import { respondToAdhesionAPI, getSyndicateMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { MemberRowSkeleton, CardSkeleton } from '../SyndicateSpaceLoader';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import Image from 'next/image';

function MembersClientInner({ initialMembers = [], initialRequests = [], branches = [], stats = {}, syndicatId }) {
    const t = useTranslations('members_page');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState(initialMembers || []);
    const [requests, setRequests] = useState(initialRequests || []);
    const [isLoadingMembers, setIsLoadingMembers] = useState(false);
    const [isLoadingRequests, setIsLoadingRequests] = useState(false);
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    
    const filteredMembers = useMemo(() => 
        (members || []).filter(member => 
            member?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [members, searchTerm]);
    
    const filteredRequests = useMemo(() => 
        (requests || []).filter(req => 
            req?.userName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [requests, searchTerm]);

    const refreshData = async (force = false) => {
        if (!branches || branches.length === 0) return;

        const mainBranchId = branches[0].id;

        try {
            await executeWithRetry(async () => {
                const [membersData, requestsData] = await Promise.all([
                    getSyndicateMembersAPI(syndicatId),
                    getAdhesionRequestsAPI(syndicatId, mainBranchId)
                ]);
                
                setMembers(membersData || []);
                setRequests(requestsData || []);
                setLastRefresh(Date.now());
                
                clearError('members');
                clearError('requests');
            }, 'refresh-data', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) {
                        toast.success(t('data_refreshed'));
                    }
                }
            });
        } catch (error) {}
    };

    useEffect(() => {
        if ((!initialMembers || initialMembers.length === 0) && 
            (!initialRequests || initialRequests.length === 0) &&
            branches && branches.length > 0) {
            refreshData(false);
        }
    }, [branches]);

    const handleResponse = async (userId, branchId, isApproved) => {
        const action = isApproved ? t('approve') : t('reject');
        const result = await Swal.fire({
            title: t(isApproved ? 'approve_confirmation' : 'reject_confirmation'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2563eb', // blue-600
            cancelButtonColor: '#6b7280', // gray-500
            confirmButtonText: t('yes_continue'),
            cancelButtonText: t('cancel'),
            customClass: {
                popup: 'bg-neutral-800 text-white',
            }
        });

        if (result.isConfirmed) {
            try {
                await executeWithRetry(async () => {
                    await respondToAdhesionAPI(syndicatId, branchId, userId, isApproved);
                }, `respond-adhesion-${userId}`, {
                    maxRetries: 2,
                    onSuccess: () => {
                        setRequests(prev => prev.filter(req => req.userId !== userId));
                        toast.success(t(isApproved ? 'request_approved' : 'request_rejected'));
                        if (isApproved) {
                            setTimeout(() => refreshData(false), 1000);
                        }
                    }
                });
            } catch (error) {}
        }
    };
    
    const MembersList = ({ data }) => {
        if (hasError('members')) {
            return <ErrorState error={getError('members')} onRetry={() => refreshData(true)} onDismiss={() => clearError('members')} />;
        }

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Users}
                    title={t('no_members_found')}
                    description={searchTerm ? t('no_members_description_search') : t('no_members_description')}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {t('refresh')}
                        </motion.button>
                    )}
                    className="bg-white bg-neutral-800/50 rounded-2xl border border-neutral-200 border-neutral-700/80 p-8"
                />
            );
        }

        return (
            <div className="bg-white bg-neutral-800/50 rounded-2xl shadow-soft overflow-hidden border border-neutral-200 border-neutral-700/80">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200 divide-neutral-700">
                        <thead className="bg-neutral-50 bg-neutral-900/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 text-neutral-400 uppercase tracking-wider">{t('member')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 text-neutral-400 uppercase tracking-wider">{t('role')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 text-neutral-400 uppercase tracking-wider">{t('status')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 text-neutral-400 uppercase tracking-wider">{t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 divide-neutral-700">
                            {apiLoading && data.length === 0 ? (
                                Array.from({ length: 5 }).map((_, index) => <MemberRowSkeleton key={`skeleton-${index}`} />)
                            ) : (
                                <AnimatePresence>
                                    {data.map(member => (
                                    <motion.tr key={member.userId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-neutral-50 hover:bg-neutral-700/50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center">
                                            {member.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${member.userAvatarUrl}`} alt={member.userName} width={44} height={44} className="w-11 h-11 rounded-xl object-cover shadow-soft"/> : <SyndicatDefaultAvatar name={member.userName} size={44} className="rounded-xl"/>}
                                            <div className="ml-4"><div className="text-sm font-medium text-neutral-800 text-white">{member.userName}</div></div>
                                        </div></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-medium rounded-full ${member.role === 'ROLE_PRESIDENT' ? 'bg-blue-100 text-blue-800 bg-blue-900/20 text-blue-300' : 'bg-neutral-100 text-neutral-700 bg-neutral-700 text-neutral-300'}`}>{member.role.replace('ROLE_', '')}</span></td>
                                        <td className="px-6 py-4"><span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${member.status === 'ACTIVE' ? 'bg-emerald-100 bg-emerald-900/20 text-emerald-800 text-emerald-300' : 'bg-amber-100 bg-amber-900/20 text-amber-700 text-amber-300'}`}>{member.status}</span></td>
                                        <td className="px-6 py-4"><button className="p-2 text-neutral-500 hover:text-red-600 hover:bg-red-100 hover:bg-red-900/20 rounded-xl transition-all duration-200"><UserX size={16}/></button></td>
                                    </motion.tr>
                                    ))}
                                </AnimatePresence>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const MembershipRequestsList = ({ data }) => {
        if (hasError('requests')) {
            return <ErrorState error={getError('requests')} onRetry={() => refreshData(true)} onDismiss={() => clearError('requests')} />;
        }

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={UserPlus}
                    title={t('no_requests_found')}
                    description={searchTerm ? t('no_requests_description_search') : t('no_requests_description')}
                    action={!searchTerm && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshData(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {t('refresh')}
                        </motion.button>
                    )}
                    className="bg-white bg-neutral-800/50 rounded-2xl border border-neutral-200 border-neutral-700/80 p-8"
                />
            );
        }

        return (
            <div className="space-y-5">
                {apiLoading && data.length === 0 ? (
                    Array.from({ length: 3 }).map((_, index) => <CardSkeleton key={`request-skeleton-${index}`} />)
                ) : (
                    <AnimatePresence>
                        {data.map(req => (
                    <motion.div key={req.userId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white bg-neutral-800/50 rounded-2xl shadow-soft p-5 border border-neutral-200 border-neutral-700/80">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="flex items-center flex-grow"><div className="w-16 h-16 flex-shrink-0">{req.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${req.userAvatarUrl}`} alt={req.userName} width={64} height={64} className="rounded-xl object-cover"/> : <SyndicatDefaultAvatar name={req.userName} size={64} className="rounded-xl"/>}</div><div className="ml-4"><h3 className="text-lg font-semibold text-neutral-800 text-white">{req.userName}</h3><p className="text-sm text-neutral-500 text-neutral-400">{t('request_date', {date: new Date(req.requestTimestamp).toLocaleDateString('fr-FR')})}</p></div></div>
                            <div className="flex space-x-3 self-start sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                                {branches && branches.length > 0 ? (
                                    <>
                                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} onClick={() => handleResponse(req.userId, branches[0].id, true)} className="p-2.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"><Check className="w-5 h-5"/></motion.button>
                                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} onClick={() => handleResponse(req.userId, branches[0].id, false)} className="p-2.5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"><X className="w-5 h-5"/></motion.button>
                                    </>
                                ) : (
                                    <div className="text-sm text-neutral-500 text-neutral-400">{t('actions_unavailable')}</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-neutral-50 bg-neutral-700/50 rounded-xl border-l-4 border-blue-500"><p className="text-neutral-600 text-neutral-300 italic">"{req.motivation}"</p></div>
                    </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 text-white mb-1">{t('title')}</h1>
                        <p className="text-neutral-600 text-neutral-400 max-w-2xl">{t('subtitle')}</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => refreshData(true)}
                        disabled={apiLoading}
                        className="px-4 py-2 bg-white bg-neutral-800 hover:bg-neutral-50 hover:bg-neutral-700 border border-neutral-200 border-neutral-700 text-neutral-700 text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
                    >
                        <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                        {t('refresh')}
                    </motion.button>
                </div>
            </motion.div>

            <AnimatePresence>
                {hasError('refresh-data') && <InlineError error={getError('refresh-data')} className="mb-6" />}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <StatCard icon={Users} value={(stats?.total || members.length + requests.length).toLocaleString()} label={t('total_members')} />
                <StatCard icon={UserCheck} value={(stats?.active || members.length).toLocaleString()} label={t('active_members')} />
                <StatCard icon={UserPlus} value={(stats?.pending || requests.length).toLocaleString()} label={t('pending_requests')} />
            </div>

            <div className="bg-white bg-neutral-800/50 rounded-2xl shadow-soft border border-neutral-200 border-neutral-700/80">
                <div className="p-4 sm:p-5 border-b border-neutral-200 border-neutral-700">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex space-x-1 bg-neutral-100 bg-neutral-900/50 rounded-xl p-1">
                            <TabButton active={activeTab === 'members'} icon={Users} label={`${t('tab_members')} (${filteredMembers.length})`} onClick={() => setActiveTab('members')} />
                            <TabButton active={activeTab === 'requests'} icon={UserPlus} label={`${t('tab_requests')} (${filteredRequests.length})`} onClick={() => setActiveTab('requests')} />
                        </div>
                        <div className="relative flex-1 min-w-[200px] max-w-xs">
                            <input type="text" placeholder={t("search_placeholder")} className="w-full pl-10 pr-4 py-2.5 bg-white bg-neutral-700 rounded-xl border border-neutral-300 border-neutral-600 focus:border-blue-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div className="p-2 sm:p-4">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                            {activeTab === 'members' ? <MembersList data={filteredMembers} /> : <MembershipRequestsList data={filteredRequests} />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Wrapper avec ErrorBoundary
export default function MembersClient(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Membres"
            subtitle="Une erreur s'est produite lors du chargement de la gestion des membres."
        >
            <MembersClientInner {...props} />
        </ErrorBoundary>
    );
}
```

### StatCard

- **Fichier**: `src/components/syndicate-space/section-membres/StatCard.jsx`
- **Props**: `icon: Icon, value, label, color`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label, color }) {
    // We'll use a more consistent and professional color scheme based on blue.
    const blueColor = "blue";

    return (
        <motion.div
            className={`bg-white bg-neutral-800 p-5 rounded-xl shadow-soft border border-neutral-200/80 border-neutral-700/60 flex items-center gap-5`}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <div className={`p-3 rounded-lg bg-${blueColor}-100 bg-${blueColor}-900/20`}>
                <Icon className={`w-6 h-6 text-${blueColor}-600 text-${blueColor}-400`} />
            </div>
            <div>
                <div className="text-2xl font-bold text-neutral-800 text-white">{value}</div>
                <div className="text-sm text-neutral-500 text-neutral-400">{label}</div>
            </div>
        </motion.div>
    );
}
```

### TabButton

- **Fichier**: `src/components/syndicate-space/section-membres/TabButton.jsx`
- **Props**: `active, icon: Icon, label, onClick`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';

export default function TabButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center px-4 sm:px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 ${
                active 
                    ? 'text-white' 
                    : 'text-neutral-600 text-neutral-300 hover:bg-neutral-100 hover:bg-neutral-700/50'
            }`}
            whileHover={{ scale: active ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            {active && (
                <motion.div
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-md"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
            )}
            <span className="relative z-10 flex items-center">
                <Icon className="w-5 h-5 mr-2" />
                {label}
            </span>
        </motion.button>
    );
}
```

### CreateSyndicateModal

- **Fichier**: `src/components/syndicats/CreateSyndicateModal.jsx`
- **Props**: `isOpen, onClose`
- **Hooks**: useTranslations
```jsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CreateSyndicateWizard } from '../forms/create-syndicate/CreateSyndicateWizard';
import { useTranslations } from "next-intl";

export default function CreateSyndicateModal({ isOpen, onClose }) {
    const t = useTranslations('syndicats_page');

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-50 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b flex justify-between items-center bg-white rounded-t-2xl">
                            <h3 className="text-xl font-bold">{t("syndicats.create_modal_title")}</h3>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {/* Le wizard est maintenant responsable de tout le contenu */}
                            <CreateSyndicateWizard onSuccess={onClose} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### MySyndicatesPage

- **Fichier**: `src/components/syndicats/MySyndicatesPage.jsx`
- **Props**: `initialSyndicates`
- **Hooks**: useState, useMemo, useTranslations
```jsx

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, AlertCircle, PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import SyndicateList from "./SyndicateList";
import CreateSyndicateModal from "./CreateSyndicateModal";

export default function MySyndicatesPage({ initialSyndicates }) {
    const t = useTranslations('syndicats_page');
    const [searchTerm, setSearchTerm] = useState("");
    const [syndicats, setSyndicats] = useState(initialSyndicates);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredSyndicats = useMemo(() => {
        return syndicats.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [syndicats, searchTerm]);

    return (
        <>

            <div className="mb-12 max-w-4xl mx-auto">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t("search_placeholder")}
                        className="w-full pl-16 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
                </div>
            </div>


            <SyndicateList syndicats={filteredSyndicats} />


            {filteredSyndicats.length === 0 && (
                <div className="text-center py-20">
                    <div className="max-w-md mx-auto">
                        <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t("empty_list_title")}</h3>
                        <p className="text-gray-600 mb-6">{t("empty_list_desc")}</p>
                        <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            {t("create_button")}
                        </button>
                    </div>
                </div>
            )}


            <CreateSyndicateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
```

### SyndicateCard

- **Fichier**: `src/components/syndicats/SyndicateCard.jsx`
- **Props**: `syndicat`
- **Hooks**: useRouter, useTranslations
```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from '@/navigation';
import { ArrowRightCircle, Users, BarChart2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { STATIC_FILES_URL } from "@/lib/constants";
import { SyndicatDefaultAvatar } from "../shared/SyndicatDefaultAvatar";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function SyndicateCard({ syndicat }) {
    const router = useRouter();
    const t = useTranslations('syndicats_page');

    const handleAccessSpace = (syndicatId) => {
        router.push(`/syndicat-space/${syndicatId}/membres`);
    };

    const bannerUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.bannerUrl}` : "/placeholder-cover.jpg";
    const logoUrl = syndicat.logoUrl && syndicat.logoUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.logoUrl}` : null;

    return (
        <motion.div
            className="group bg-white bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl shadow-black/20 transition-all duration-300 border border-gray-100 border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.src = "/placeholder-cover.jpg"; }}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white bg-gray-800 rounded-full p-1 shadow-lg border-4 border-white border-gray-800">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-12 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 text-white line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 text-gray-400 my-4">
                    <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-700" />
                        <span className="text-sm font-medium">{(syndicat.memberCount || 0).toLocaleString()} membres</span>
                    </div>
                    <BarChart2 className="h-5 w-5 text-gray-400 text-gray-500" title="Tendance stable" />
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 border-gray-700">
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-600 group-hover:to-blue-700"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccessSpace(syndicat.id)}
                    >
                        <span>{t("access_space")}</span>
                        <ArrowRightCircle className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
```

### SyndicateHeader

- **Fichier**: `src/components/syndicats/SyndicateHeader.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx

import { Sparkles } from "lucide-react";


export default function SyndicateHeader() {


    return (
        <header className="text-center mb-16 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-20 blur-3xl h-32 -z-10"></div>
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-4">
                    <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-600">Gestion Syndicale</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">
                    Mes Syndicats
                </h1>
                <div className="mt-4 w-16 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Votre hub central pour toutes vos affiliations syndicales.
                </p>
            </div>
        </header>
    );
}
```

### SyndicateList

- **Fichier**: `src/components/syndicats/SyndicateList.jsx`
- **Props**: `initialSyndicates = []`
- **Hooks**: useState, useMemo, useTranslations
```jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Search, AlertCircle, PlusCircle } from "lucide-react";
import SyndicateCard from "./SyndicateCard";
import CreateSyndicateModal from "./CreateSyndicateModal";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function SyndicateList({ initialSyndicates = [] }) {
    const t = useTranslations('syndicats_page');
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredSyndicates = useMemo(() => {
        if (!searchTerm) {
            return initialSyndicates;
        }
        return initialSyndicates.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [initialSyndicates, searchTerm]);

    return (
        <>
            <motion.div 
                className="mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t("search_placeholder")}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 border-gray-700 bg-white bg-gray-800 text-gray-900 text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:ring-blue-900/50 transition-all text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6 transition-colors group-focus-within:text-blue-500" />
                </div>
            </motion.div>

            <AnimatePresence>
                {filteredSyndicates.length > 0 ? (
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredSyndicates.map((syndicat) => (
                            <SyndicateCard key={syndicat.id} syndicat={syndicat} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty-state"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className="max-w-md mx-auto">
                            <AlertCircle className="h-12 w-12 text-blue-500 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-900 text-white mb-2">
                                {searchTerm ? t("empty_search_title") : t("empty_list_title")}
                            </h3>
                            <p className="text-gray-600 text-gray-400 mb-6">
                                {searchTerm ? t("empty_search_desc") : t("empty_list_desc")}
                            </p>
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <PlusCircle className="h-5 w-5 mr-2" />
                                {t("create_button")}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <CreateSyndicateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
```

## Hooks personnalisés

### useErrorHandler

- **Fichier**: `src/hooks/useErrorHandler.js`
```javascript
"use client";

import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

export const ERROR_TYPES = {
    NETWORK: 'NETWORK',
    AUTH: 'AUTH', 
    VALIDATION: 'VALIDATION',
    SERVER: 'SERVER',
    NOT_FOUND: 'NOT_FOUND',
    PERMISSION: 'PERMISSION',
    RATE_LIMIT: 'RATE_LIMIT',
    UNKNOWN: 'UNKNOWN'
};

export const ERROR_MESSAGES = {
    [ERROR_TYPES.NETWORK]: {
        title: 'Problème de connexion',
        message: 'Vérifiez votre connexion internet et réessayez.',
        action: 'Réessayer'
    },
    [ERROR_TYPES.AUTH]: {
        title: 'Session expirée',
        message: 'Votre session a expiré. Veuillez vous reconnecter.',
        action: 'Se reconnecter'
    },
    [ERROR_TYPES.VALIDATION]: {
        title: 'Données invalides',
        message: 'Certaines informations sont incorrectes. Vérifiez vos données.',
        action: 'Corriger'
    },
    [ERROR_TYPES.SERVER]: {
        title: 'Erreur serveur',
        message: 'Une erreur temporaire est survenue. Réessayez dans quelques instants.',
        action: 'Réessayer'
    },
    [ERROR_TYPES.NOT_FOUND]: {
        title: 'Ressource introuvable',
        message: 'La ressource demandée n\'existe pas ou a été supprimée.',
        action: 'Retour'
    },
    [ERROR_TYPES.PERMISSION]: {
        title: 'Accès refusé',
        message: 'Vous n\'avez pas les permissions nécessaires pour cette action.',
        action: 'Comprendre'
    },
    [ERROR_TYPES.RATE_LIMIT]: {
        title: 'Trop de requêtes',
        message: 'Vous faites trop de requêtes. Attendez un moment avant de réessayer.',
        action: 'Attendre'
    },
    [ERROR_TYPES.UNKNOWN]: {
        title: 'Erreur inattendue',
        message: 'Une erreur inattendue s\'est produite. Contactez le support si le problème persiste.',
        action: 'Signaler'
    }
};

const getErrorType = (error) => {
    if (!error?.response) {
        return ERROR_TYPES.NETWORK;
    }

    const status = error.response.status;
    
    switch (status) {
        case 400:
            return ERROR_TYPES.VALIDATION;
        case 401:
            return ERROR_TYPES.AUTH;
        case 403:
            return ERROR_TYPES.PERMISSION;
        case 404:
            return ERROR_TYPES.NOT_FOUND;
        case 429:
            return ERROR_TYPES.RATE_LIMIT;
        case 500:
        case 502:
        case 503:
        case 504:
            return ERROR_TYPES.SERVER;
        default:
            return ERROR_TYPES.UNKNOWN;
    }
};

const getErrorMessage = (error) => {
    const errorType = getErrorType(error);
    const baseMessage = ERROR_MESSAGES[errorType];
    
    // Essayer d'extraire un message plus spécifique du backend
    let specificMessage = baseMessage.message;
    
    if (error?.response?.data) {
        const data = error.response.data;
        if (typeof data === 'string') {
            specificMessage = data;
        } else if (data.message) {
            specificMessage = data.message;
        } else if (data.error) {
            specificMessage = data.error;
        } else if (data.details) {
            specificMessage = data.details;
        }
    }

    return {
        ...baseMessage,
        message: specificMessage,
        type: errorType,
        originalError: error
    };
};

export const useErrorHandler = () => {
    const [errors, setErrors] = useState({});
    const [retryCount, setRetryCount] = useState({});

    const handleError = useCallback((error, context = 'general', options = {}) => {
        const {
            showToast = true,
            showError = true,
            maxRetries = 3,
            onRetry = null,
            silent = false
        } = options;

        const errorInfo = getErrorMessage(error);
        
        // Enregistrer l'erreur dans l'état
        if (showError) {
            setErrors(prev => ({
                ...prev,
                [context]: errorInfo
            }));
        }

        // Afficher un toast si demandé
        if (showToast && !silent) {
            const toastMessage = `${errorInfo.title}: ${errorInfo.message}`;
            
            if (errorInfo.type === ERROR_TYPES.AUTH) {
                toast.error(toastMessage, { duration: 6000 });
                // Rediriger vers la page de login
                if (typeof window !== 'undefined') {
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 2000);
                }
            } else if (errorInfo.type === ERROR_TYPES.NETWORK && onRetry) {
                // Pour les erreurs réseau, proposer un retry
                const currentRetries = retryCount[context] || 0;
                if (currentRetries < maxRetries) {
                    toast.error(`${toastMessage}\nTentative ${currentRetries + 1}/${maxRetries}`, {
                        duration: 4000,
                        action: {
                            label: 'Réessayer',
                            onClick: () => {
                                setRetryCount(prev => ({
                                    ...prev,
                                    [context]: currentRetries + 1
                                }));
                                onRetry();
                            }
                        }
                    });
                } else {
                    toast.error(`${toastMessage}\nNombre maximum de tentatives atteint.`, { 
                        duration: 6000 
                    });
                }
            } else {
                toast.error(toastMessage, { duration: 4000 });
            }
        }

        // Logger l'erreur pour le debugging
        console.error(`[${context.toUpperCase()}] Error:`, {
            type: errorInfo.type,
            message: errorInfo.message,
            originalError: error,
            status: error?.response?.status, // Ajoute ça
             detail: error?.message,    
            context
        });

        return errorInfo;
    }, [retryCount]);

    const clearError = useCallback((context) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[context];
            return newErrors;
        });
        setRetryCount(prev => {
            const newRetries = { ...prev };
            delete newRetries[context];
            return newRetries;
        });
    }, []);

    const clearAllErrors = useCallback(() => {
        setErrors({});
        setRetryCount({});
    }, []);

    const hasError = useCallback((context) => {
        return !!errors[context];
    }, [errors]);

    const getError = useCallback((context) => {
        return errors[context] || null;
    }, [errors]);

    return {
        handleError,
        clearError,
        clearAllErrors,
        hasError,
        getError,
        errors
    };
};

// Hook pour les requêtes avec retry automatique
export const useApiWithRetry = () => {
    const { handleError } = useErrorHandler();
    const [loading, setLoading] = useState(false);

    const executeWithRetry = useCallback(async (apiCall, context, options = {}) => {
        const {
            maxRetries = 3,
            retryDelay = 1000,
            backoffMultiplier = 2,
            onSuccess = null,
            onError = null
        } = options;

        setLoading(true);
        let lastError = null;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const result = await apiCall();
                
                if (onSuccess) {
                    onSuccess(result);
                }
                
                setLoading(false);
                return result;
            } catch (error) {
                lastError = error;
                
                // Ne pas retry pour certains types d'erreurs
                const shouldRetry = attempt < maxRetries && 
                    error?.response?.status !== 401 && 
                    error?.response?.status !== 403 && 
                    error?.response?.status !== 404 && 
                    error?.response?.status !== 422;

                if (!shouldRetry) {
                    break;
                }

                // Attendre avant le prochain essai
                const delay = retryDelay * Math.pow(backoffMultiplier, attempt);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        // Gérer l'erreur finale
        const errorInfo = handleError(lastError, context, {
            showToast: true,
            showError: false // On gère l'affichage nous-mêmes
        });

        if (onError) {
            onError(errorInfo);
        }

        setLoading(false);
        throw lastError;
    }, [handleError]);

    return {
        executeWithRetry,
        loading
    };
};
```

### usePermissions

- **Fichier**: `src/hooks/usePermissions.js`
```javascript
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

export const usePermissions = () => {
    const { user, loading } = useContext(UserContext);

    const hasPermission = (permissionName) => {
        if (loading || !user || !user.permissions) {
            return false;
        }
        // Allows for wildcard permissions like 'syndicat:*'
        const userPermissions = user.permissions;
        if (userPermissions.includes(permissionName)) {
            return true;
        }
        const parts = permissionName.split(':');
        if (parts.length === 3) {
            const [service, object] = parts;
            if (userPermissions.includes(`${service}:${object}:*`) || userPermissions.includes(`${service}:*:*`)) {
                return true;
            }
        }
        return false;
    };

    const hasRole = (roleName) => {
        if (loading || !user || !user.roles) {
            return false;
        }
        return user.roles.includes(roleName);
    };

    return { user, loading, hasPermission, hasRole };
};

```

### useRouteLoading

- **Fichier**: `src/hooks/useRouteLoading.js`
```javascript
"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useRouteLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(false);
    }, [pathname]);

    const startLoading = () => {
        setIsLoading(true);
    };

    return { isLoading, startLoading };
};
```

