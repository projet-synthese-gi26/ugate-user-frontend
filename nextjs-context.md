# Contexte de l'application Next.js

## Informations générales

- **Date de génération**: 20/07/2025 11:35:16

## Structure du projet

```
📁 .idea/
  📁 inspectionProfiles/
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
📝 README.md
📁 src/
  📁 app/
    📁 [locale]/
      📁 (auth)/
        ⚛️ layout.jsx
        ⚛️ loading.jsx
        📁 login/
          📜 page.js
        📁 register/
          ⚛️ page.jsx
      📁 (main)/
        📁 explorer/
          ⚛️ page.jsx
          📁 [syndicatId]/
            ⚛️ page.jsx
        📁 home/
          ⚛️ page.jsx
        ⚛️ layout.jsx
        ⚛️ loading.jsx
        📁 parametres/
          ⚛️ page.jsx
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
            ⚛️ layout.jsx
            ⚛️ page.jsx
            ⚛️ SyndicateSpaceClientLayout.jsx
      🎨 globals.css
      📜 layout.js
      ⚛️ loading.jsx
  📁 components/
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
      📜 navItems.js
      ⚛️ NotificationsPanel.jsx
      ⚛️ WelcomeSection.jsx
    📁 explorer/
      ⚛️ AdhesionModal.jsx
      ⚛️ ExploreCard.jsx
      ⚛️ ExploreHeader.jsx
      ⚛️ ExplorerClient.jsx
    📁 forms/
      📁 adhesion/
        ⚛️ AdhereSyndicatForm.jsx
        ⚛️ AntenneSelection.jsx
        ⚛️ file-uploader.jsx
        ⚛️ IndividualMembershipForm.jsx
        ⚛️ MembershipConfirmation.jsx
        ⚛️ UserTypeSelection.jsx
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
    ⚛️ Providers.jsx
    ⚛️ SearchSystem.jsx
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
      ⚛️ SyndicateProfileClient.jsx
    📁 syndicate-space/
      ⚛️ NotificationCard.jsx
      📁 section-chat/
        ⚛️ ChatClient.jsx
      📁 section-evenements/
        ⚛️ CreateEventModal.jsx
        ⚛️ EventCard.jsx
        ⚛️ EventForm.jsx
        ⚛️ EventsFeed.jsx
        ⚛️ ParticipantsModal.jsx
      📁 section-exprimer/
        ⚛️ CommentModal.jsx
        📁 comments/
          ⚛️ Comment.jsx
          ⚛️ EmojiPicker.jsx
          ⚛️ Reply.jsx
        ⚛️ NewPostModal.jsx
        ⚛️ Post.jsx
        ⚛️ PublicationsFeed.jsx
      📁 section-membres/
        ⚛️ MembersClient.jsx
        ⚛️ StatCard.jsx
        ⚛️ TabButton.jsx
      ⚛️ SyndicateHeader.jsx
      ⚛️ SyndicateNotificationsPanel.jsx
      ⚛️ SyndicateSidebar.jsx
    📁 syndicats/
      ⚛️ CreateSyndicateModal.jsx
      ⚛️ MySyndicatesPage.jsx
      ⚛️ SyndicateCard.jsx
      ⚛️ SyndicateHeader.jsx
      ⚛️ SyndicateList.jsx
  📁 context/
    📜 UserContext.js
  📁 i18n/
    ⚛️ navigation.jsx
    ⚛️ request.jsx
    ⚛️ routing.jsx
  📜 i18n.js
  📁 lib/
    📁 api/
      📜 auth.js
      📜 event.js
      📜 helpers.js
      📜 index.js
      📜 instance.js
      📜 membership.js
      📜 posts.js
      📜 search.js
      📜 syndicate.js
      📜 syndicates.js
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
      📜 timeAgo.js
  📜 navigation.js
  📁 [locale]/
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
- next: 15.3.4
- next-intl: ^4.3.4
- next-themes: ^0.4.6
- react: ^19.0.0
- react-dom: ^19.0.0
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
    "dev": "next dev --turbopack",
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
    "next": "15.3.4",
    "next-intl": "^4.3.4",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
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
    reactStrictMode: true,
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
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*',
            },
        ]
    },
};

export default createNextIntlPlugin(i18nConfig)(nextConfig);
```

### tailwind.config.js

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Active le mode sombre basé sur une classe
    darkMode: 'class',

    // Indique à Tailwind où trouver les classes qu'il doit générer
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## Pages, Layouts & Routes

### /\:locale\(auth)\layout (layout)

- **Fichier**: `src\app\[locale]\(auth)\layout.jsx`
- **Type**: App Router, Composant Serveur

```jsx

export default function AuthLayout({ children }) {

    return <>{children}</>;
}
```

### /\:locale\(auth)\loading (loading)

- **Fichier**: `src\app\[locale]\(auth)\loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

### /\:locale\(auth)\login\page (page)

- **Fichier**: `src\app\[locale]\(auth)\login\page.js`
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
                            <Link href="/register" className="text-blue-500 hover:underline">
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

### /\:locale\(auth)\register\page (page)

- **Fichier**: `src\app\[locale]\(auth)\register\page.jsx`
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
                            <Link href="/login" className="text-blue-500 hover:underline">
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

### /\:locale\(main)\explorer\page (page)

- **Fichier**: `src\app\[locale]\(main)\explorer\page.jsx`
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
    const { t } = useTranslation();

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
                setSyndicates(data.content);
            } else {
                setSyndicates(prev => [...prev, ...data.content]);
            }
            setHasNextPage(data.hasNext);
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <ExploreHeader syndicatesCount={totalElements} t={t} />

                <ExplorerClient initialSyndicates={syndicates} />

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

### /\:locale\(main)\explorer\:syndicatId\page (page)

- **Fichier**: `src\app\[locale]\(main)\explorer\[syndicatId]\page.jsx`
- **Type**: App Router, Composant Serveur
- **Metadata**: Oui

```jsx
import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import { ChevronLeft } from 'lucide-react';
import {getTranslations} from 'next-intl/server'; // L'import correct pour la traduction côté serveur
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates'; // L'appel API réel
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';

// Fonction pour récupérer les données d'un seul syndicat via l'API
async function getSyndicateDetails(id) {
    try {
        const syndicate = await getSyndicateDetailsAPI(id);
        return syndicate;
    } catch (error) {
        if (error.response?.status === 404) {
            return null; // Le syndicat n'a pas été trouvé, on gèrera le notFound() plus bas
        }
        // Pour les autres erreurs, on peut logger et renvoyer null aussi
        console.error(`Erreur lors de la récupération du syndicat ${id}`, error.message);
        return null;
    }
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }) {
    const syndicate = await getSyndicateDetails(params.syndicatId);
    if (!syndicate) {
        return { title: 'Syndicat non trouvé' };
    }
    return {
        title: `${syndicate.name} | U-Gate`,
        description: syndicate.description,
    };
}

export default async function SyndicateProfilePage({ params }) {
    const { syndicatId, locale } = params;
    const t = await getTranslations();

    const syndicateData = await getSyndicateDetails(syndicatId);

    // Si aucune donnée n'est retournée, on affiche la page 404 de Next.js
    if (!syndicateData) {
        notFound();
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-semibold">{t('profile_page.back_to_explorer', 'Retour à l\'exploration')}</span>
                </Link>

                {/* On délègue tout l'affichage au composant client en lui passant les vraies données */}
                <SyndicateProfileClient syndicate={syndicateData} />
            </div>
        </div>
    );
}
```

### /\:locale\(main)\home\page (page)

- **Fichier**: `src\app\[locale]\(main)\home\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Feed from "@/components/dashboard/Feed"; // On réutilise le Feed existant
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { homeFeedFakeData } from "@/lib/fakeData/homeFeedFake";


async function getDashboardData() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        feed: homeFeedFakeData
    };
}

export default async function HomePage({ params }) {
    const { locale } = await params;
    const { feed } = await getDashboardData();
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WelcomeSection />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    {t("dashboard.news_and_events")}
                </h2>
                {/* Le composant Feed existant fonctionnera parfaitement avec le FeedCard amélioré */}
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}
```

### /\:locale\(main)\layout (layout)

- **Fichier**: `src\app\[locale]\(main)\layout.jsx`
- **Type**: App Router, Composant Client

```jsx
"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import { getAuthenticatedUserProfile } from "@/lib/api/user";
import { toast } from 'react-hot-toast';
import UserContext from "@/context/UserContext";
import NavigationLoader from "@/components/shared/NavigationLoader";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getAuthenticatedUserProfile();
                setUserData(profile);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                toast.error("Impossible de charger les données de votre session.");
                // La redirection vers /login est gérée par l'intercepteur Axios
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loadingUser) {
        return <NavigationLoader />;
    }

    return (
        <UserContext.Provider value={{ user: userData, isLoading: loadingUser, setUser: setUserData }}>
            <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/5">
                <AppHeader
                    isSidebarOpen={isSidebarOpen}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                />

                <div className="flex flex-1 overflow-hidden">
                    <AppSidebar isOpen={isSidebarOpen} />
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        {children}
                    </main>
                    <NotificationsPanel
                        isOpen={isNotificationOpen}
                        onClose={() => setIsNotificationOpen(false)}
                    />
                </div>
            </div>
        </UserContext.Provider>
    );
}
```

### /\:locale\(main)\loading (loading)

- **Fichier**: `src\app\[locale]\(main)\loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

### /\:locale\(main)\parametres\page (page)

- **Fichier**: `src\app\[locale]\(main)\parametres\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(main)/parametres/page.jsx
import {getTranslations} from 'next-intl/server';
import UserProfileForm from "@/components/settings/UserProfileForm";
import { getFirstNameToken, getLastNameToken, getEmailToken, getProfilFromToken } from "@/lib/auth/accountService"; // On supposera que ce service est côté serveur

// Simule la récupération des données de l'utilisateur connecté côté serveur
async function getAuthenticatedUserData() {
    // Dans une vraie application, vous décoderiez un token JWT depuis un cookie ici
    await new Promise(resolve => setTimeout(resolve, 200)); // Simule la latence
    return {
        firstName: getFirstNameToken() || 'John',
        lastName: getLastNameToken() || 'Doe',
        email: getEmailToken() || 'john.doe@example.com',
        phone: "+237 679 39 04 71", // Donnée factice pour l'exemple
        profilePicture: getProfilFromToken(),
        formations: ["Master en Génie Logiciel", "Certification React Avancé"], // Données initiales
        cvUrl: "/path/to/existing/cv.pdf" // Donnée initiale
    };
}

export default async function SettingsPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();
    const userData = await getAuthenticatedUserData();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('settings_page.title')}
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        {t('settings_page.subtitle')}
                    </p>
                </div>

                {/* On passe les données utilisateur au composant client */}
                <UserProfileForm initialData={userData} />
            </div>
        </div>
    );
}
```

### /\:locale\(main)\syndicats\page (page)

- **Fichier**: `src\app\[locale]\(main)\syndicats\page.jsx`
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
    const { t } = useTranslation();
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
                    <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        {t('syndicats_page.loading_text') || "Chargement de vos syndicats..."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                <SyndicateList initialSyndicates={syndicates} />
            </div>
        </div>
    );
}
```

### /\:locale\(marketing)\layout (layout)

- **Fichier**: `src\app\[locale]\(marketing)\layout.js`
- **Type**: App Router, Composant Serveur

```jsx

import LandingPageHeader from '@/components/layout/LandingPageHeader';
import LandingPageFooter from '@/components/layout/LandingPageFooter';

export default function MarketingLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#6BAED6] to-indigo-200">
            <LandingPageHeader />
            <main className="flex-grow">{children}</main>
            <LandingPageFooter />
        </div>
    );
}
```

### /\:locale\(marketing)\page (page)

- **Fichier**: `src\app\[locale]\(marketing)\page.js`
- **Type**: App Router, Composant Serveur

```jsx
import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import {getTranslations} from 'next-intl/server';

export default async function LandingPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();

    const heroData = {
        title_part1: t('heroComponent.title_part1'),
        title_highlighted: t('heroComponent.title_highlighted'),
        subtitle: t('heroComponent.subtitle'),
        cta_main: t('heroComponent.cta_main'),
        cta_secondary: t('heroComponent.cta_secondary'),
        image_alt: t('heroComponent.image_alt')
    };

    return (
        <div className="scroll-smooth">
            <HeroSection heroData={heroData} />
            <FeaturesSection />
            <ActivityFeed />
            <PopularSyndicates />
            <StatsSection />
        </div>
    );
}
```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\(sections)\chat\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\(sections)\chat\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/chat/page.jsx
import {getTranslations} from 'next-intl/server';
import ChatClient from "@/components/syndicate-space/section-chat/ChatClient";
import { fakeChats, fakeMessages, fakeSyndicateMembers } from '@/lib/fakeData/syndicateDetailsFake';

async function getChatData(syndicatId) {
    console.log(`Récupération des données de chat pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 200));
    return { 
        chats: fakeChats, 
        messages: fakeMessages,
        members: fakeSyndicateMembers
    };
}

export default async function ChatPage({ params }) {
    const { locale, syndicatId } = params;
    const t = await getTranslations();
    const chatData = await getChatData(syndicatId);

    return (
        // Le layout de l'espace syndicat a déjà un padding, on enlève celui du composant principal
        <div className="h-full">
            <ChatClient 
                initialChats={chatData.chats}
                initialMessages={chatData.messages}
                initialMembers={chatData.members}
            />
        </div>
    );
}
```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\(sections)\evenements\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\(sections)\evenements\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(main)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import {getTranslations} from 'next-intl/server';
import { fakeEvents } from "@/lib/fakeData/syndicateDetailsFake"; 
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";

async function getEvents(syndicatId) {
    console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 300));
    const eventsWithDates = fakeEvents.map(event => ({
        ...event,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate)
    }));
    return eventsWithDates;
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId } = params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t('events_page.title')}
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{t('events_page.subtitle')}</p>
            </div>
            
            <EventsFeed initialEvents={initialEvents} />
        </div>
    );
}
```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\(sections)\exprimer\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\(sections)\exprimer\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import {getTranslations} from 'next-intl/server'; // CORRECTION : On importe le bon helper
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";

async function getPublications(syndicatId) {
    try {
        const posts = await getPostsAPI(syndicatId);
        return posts;
    } catch (error) {
        console.error(`Failed to fetch posts for syndicate ${syndicatId}:`, error);
        return [];
    }
}

export default async function ExprimerPage({ params }) {
    const { locale, syndicatId } = params;
    // CORRECTION : On utilise `initTranslations`
    const t = await getTranslations();
    const initialPosts = await getPublications(syndicatId);

    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    {t("express_page.title")}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {t("express_page.subtitle")}
                </p>
            </div>
            <PublicationsFeed initialPosts={initialPosts} syndicatId={syndicatId} />
        </div>
    );
}
```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\(sections)\membres\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\(sections)\membres\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
import {getTranslations} from 'next-intl/server'; // CORRECTION : On importe le bon helper
import { getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId) {
    try {
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails || !syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            // Dans le cas où il n'y a pas de branche, on ne peut rien récupérer.
            // On renvoie un état vide et gérable.
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }
        
        // On prend la première branche comme référence pour les membres et les demandes.
        // C'est une simplification, une logique plus complexe pourrait être nécessaire si un syndicat a plusieurs branches gérables.
        const mainBranchId = syndicateDetails.branches[0].id; 

        const [members, requests] = await Promise.all([
            getBranchMembersAPI(mainBranchId),
            getAdhesionRequestsAPI(syndicateId, mainBranchId)
        ]);

        const stats = {
            total: members.length + requests.length,
            active: members.length,
            pending: requests.length
        };

        return { members, requests, branches: syndicateDetails.branches, stats };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        // En cas d'erreur API, on renvoie également un état vide pour éviter un crash.
        return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId } = params;
    // CORRECTION : On utilise `initTranslations` au lieu de `getTranslations`
    const t = await getTranslations();
    const data = await getMembersData(syndicatId);

    // Bien que getMembersData soit robuste, on garde le notFound au cas où
    // une logique future déciderait de le lancer (par ex. si syndicateDetails est null).
    if (!data) {
        notFound();
    }
    
    return (
        <div className="space-y-8">
            <MembersClient 
                initialMembers={data.members}
                initialRequests={data.requests}
                branches={data.branches}
                stats={data.stats}
                syndicatId={syndicatId}
            />
        </div>
    );
}
```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\(sections)\votes\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\(sections)\votes\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx

```

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\layout (layout)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\layout.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx

import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout';

async function getSyndicateData(syndicateId) {
    try {
        const data = await getSyndicateDetailsAPI(syndicateId);
        return data;
    } catch (error) {
        console.error(`Failed to fetch syndicate data for ID ${syndicateId}:`, error);
        if (error.response && error.response.status === 404) {
            notFound();
        }
        throw new Error("Impossible de charger les données du syndicat.");
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = params;
    const syndicateData = await getSyndicateData(syndicatId);

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

### /\:locale\(syndicate-space)\syndicat-space\:syndicatId\page (page)

- **Fichier**: `src\app\[locale]\(syndicate-space)\syndicat-space\[syndicatId]\page.jsx`
- **Type**: App Router, Composant Serveur

```jsx
// src/app/(syndicate-space)/syndicat-space/[syndicatId]/page.jsx
import { redirect } from 'next/navigation';

/**
 * C'est la page d'accueil pour un espace syndicat.
 * Son seul rôle est de rediriger l'utilisateur vers la première section par défaut,
 * par exemple, la page "membres".
 */
export default function SyndicateRootPage({ params }) {
    const { syndicatId } = params;

    // Redirige de /syndicat-space/1 vers /syndicat-space/1/membres
    redirect(`/syndicat-space/${syndicatId}/membres`);

    // Comme redirect() lance une erreur spéciale, le code ci-dessous ne sera jamais exécuté.
    // Mais il est bon de retourner null pour la complétude.
    return null;
}
```

### /\:locale\layout (layout)

- **Fichier**: `src\app\[locale]\layout.js`
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
    title: 'UGate',
    description: 'Votre application UGate',
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

### /\:locale\loading (loading)

- **Fichier**: `src\app\[locale]\loading.jsx`
- **Type**: App Router, Composant Serveur

```jsx

import NavigationLoader from '@/components/shared/NavigationLoader';

export default function Loading() {

    return <NavigationLoader />;
}
```

## Routes & Logique API

### `/api/src\lib\api\auth`

- **Fichier**: `src\lib\api\auth.js`
- **Fonctions/Méthodes exportées**: loginWithEmail, registerWithEmail, logout, loginWithGoogle, loginWithApple

```typescript
import axios from './instance';

export const loginWithEmail = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

export const registerWithEmail = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    // Optionnel : rediriger l'utilisateur
    if (typeof window !== 'undefined') {
        window.location.href = '/login';
    }
};

export const loginWithGoogle = async (authCode) => {
    return Promise.reject(new Error("Login Google non implémenté."));
};

export const loginWithApple = async (authCode) => {
    return Promise.reject(new Error("Login Apple non implémenté."));
};
```

### `/api/src\lib\api\event`

- **Fichier**: `src\lib\api\event.js`
- **Fonctions/Méthodes exportées**: getEventsAPI, createEventAPI

```typescript
import axios from './instance';

/**
 * Récupère les événements d'un syndicat avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec événements
 */
export const getEventsAPI = async (syndicateId, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get(`/syndicates/${syndicateId}/events`, {
        params: { page, size, sortBy, sortDirection }
    });
    return response.data;
};

export const createEventAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/events`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};
```

### `/api/src\lib\api\helpers`

- **Fichier**: `src\lib\api\helpers.js`
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

### `/api/src\lib\api\index`

- **Fichier**: `src\lib\api\index.js`
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

// Membres
export * from './member';

// Utilisateur
export * from './user';

// Votes
export * from './vote';

// Recherche
export * from './search';

// Utilitaires
export * from './helpers';

// Instance Axios
export { default as apiClient } from './instance';
```

### `/api/src\lib\api\instance`

- **Fichier**: `src\lib\api\instance.js`
- **Fonctions/Méthodes exportées**: (fonctions exportées)

```typescript
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'http://167.235.62.116:7014/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (typeof window !== 'undefined' && error.response && (error.response.status === 401 || error.response.status === 403)) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
```

### `/api/src\lib\api\membership`

- **Fichier**: `src\lib\api\membership.js`
- **Fonctions/Méthodes exportées**: requestAdhesionAPI, getAdhesionRequestsAPI, respondToAdhesionAPI, getBranchMembersAPI

```typescript
import axios from './instance';

export const requestAdhesionAPI = async (adhesionData) => {
    const response = await axios.post('/memberships/request', adhesionData);
    return response.data;
};

export const getAdhesionRequestsAPI = async (syndicateId, branchId) => {
    const response = await axios.get(`/memberships/requests/${syndicateId}/${branchId}`);
    return response.data;
};

export const respondToAdhesionAPI = async (syndicateId, branchId, userId, approved) => {
    const response = await axios.post(`/memberships/requests/${syndicateId}/${branchId}/${userId}/respond`, { approved });
    return response.data;
};

export const getBranchMembersAPI = async (branchId) => {
    const response = await axios.get(`/memberships/members/${branchId}`);
    return response.data;
};
```

### `/api/src\lib\api\posts`

- **Fichier**: `src\lib\api\posts.js`
- **Fonctions/Méthodes exportées**: getPostsAPI, createPostAPI, likePostAPI, addCommentAPI, getCommentsAPI, likeCommentAPI

```typescript
import axios from './instance';

/**
 * Récupère les publications d'un syndicat avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec publications
 */
export const getPostsAPI = async (syndicateId, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get(`/syndicates/${syndicateId}/posts`, {
        params: { page, size, sortBy, sortDirection }
    });
    return response.data;
};

export const createPostAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const likePostAPI = async (syndicateId, postId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/like?liked=${liked}`);
};

export const addCommentAPI = async (syndicateId, postId, content) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments`, content, {
         headers: { 'Content-Type': 'text/plain' },
    });
    return response.data;
};

/**
 * Récupère les commentaires d'une publication avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {string} postId - ID de la publication
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @returns {Promise<Array>} Liste des commentaires
 */
export const getCommentsAPI = async (syndicateId, postId, page = 0, size = 20) => {
    const response = await axios.get(`/syndicates/${syndicateId}/posts/${postId}/comments`, {
        params: { page, size }
    });
    return response.data;
};

export const likeCommentAPI = async (syndicateId, postId, commentId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments/${commentId}/like?liked=${liked}`);
};
```

### `/api/src\lib\api\search`

- **Fichier**: `src\lib\api\search.js`
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

### `/api/src\lib\api\syndicate`

- **Fichier**: `src\lib\api\syndicate.js`
- **Fonctions/Méthodes exportées**: createSyndicateAPI, getMySyndicatesAPI, getAllSyndicatesAPI, getSyndicateDetailsAPI

```typescript
import axios from './instance';

export const createSyndicateAPI = async (formData) => {
    const response = await axios.post('/syndicates', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const getMySyndicatesAPI = async () => {
    const response = await axios.get('/syndicates/my-syndicates');
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

### `/api/src\lib\api\syndicates`

- **Fichier**: `src\lib\api\syndicates.js`
- **Fonctions/Méthodes exportées**: createSyndicateAPI, getMySyndicatesAPI, getAllSyndicatesAPI, getSyndicateDetailsAPI

```typescript
import axios from './instance';

export const createSyndicateAPI = async (formData) => {
    try {
        const response = await axios.post('/syndicates', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du syndicat :", error.response?.data || error.message);
        throw error;
    }
};

export const getMySyndicatesAPI = async () => {
    const userEmail = localStorage.getItem('email');
    if (!userEmail) {
        return Promise.reject(new Error("Utilisateur non connecté."));
    }
    try {
        const response = await axios.get('/syndicates/my-syndicates', {
            params: { userEmail }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'appel Axios:", error);
        throw error;
    }
};

export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    try {
        const response = await axios.get('/syndicates', {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des syndicats paginés :", error);
        throw error;
    }
};


export const getSyndicateDetailsAPI = async (syndicateId) => {
    if (!syndicateId) {
        return Promise.reject(new Error("L'ID du syndicat est requis."));
    }
    try {
        // Note: L'endpoint exact côté backend devra peut-être être créé.
        // Je suppose qu'il s'appellera /api/syndicates/{id}
        const response = await axios.get(`/syndicates/${syndicateId}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des détails du syndicat ${syndicateId}:`, error);
        throw error;
    }
};
```

### `/api/src\lib\api\user`

- **Fichier**: `src\lib\api\user.js`
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

### `/api/src\lib\api\vote`

- **Fichier**: `src\lib\api\vote.js`
- **Fonctions/Méthodes exportées**: getVotesAPI, submitVoteAPI

```typescript
import axios from './instance';

export const getVotesAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}/votes`);
    return response.data;
};

export const submitVoteAPI = async (syndicateId, voteId, choiceId) => {
    await axios.post(`/syndicates/${syndicateId}/votes/${voteId}/submit`, { choiceId });
};
```

## Composants

### LoginAside

- **Fichier**: `src\components\auth\LoginAside.jsx`
- **Props**: `texts`
- **Hooks**: useState, useEffect
```jsx

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building } from 'lucide-react';

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
    return (
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex-col justify-center items-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-700 opacity-20">
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
                <div className="flex justify-center mb-8">
                    <Building size={80} className="text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-8">SyndicManager</h1>
                <AnimatedText texts={animatedTexts} />
            </motion.div>
        </div>
    );
}
```

### LoginForm

- **Fichier**: `src\components\auth\LoginForm.jsx`
- **Props**: `children, ...props`
- **Hooks**: useState, useForm, useTranslations, useRouter
```jsx
// src/components/auth/LoginForm.jsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Link } from '@/navigation';
import { loginWithEmail } from '@/lib/api/auth'; // Importe la fonction API de login

// Composant Input réutilisable avec icône
const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative mb-4">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-400'
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
        className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all duration-200"
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

    // Gestionnaire de soumission du formulaire
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await loginWithEmail(data.email, data.password);

            await Swal.fire({
                icon: 'success',
                title: t("login_page.success_title"),
                text: t("login_page.success_text"),
                timer: 1500,
                showConfirmButton: false,
            });
            router.push('/home'); // Redirige vers la page d'accueil de l'utilisateur connecté

        } catch (error) {
            console.error("Erreur de connexion:", error);
            let errorMessage = t('login_page.generic_error');

            if (error.response) {
                // Erreurs HTTP spécifiques de l'API (401 BadCredentialsException, 403 DisabledException)
                if (error.response.status === 401) {
                    errorMessage = t('login_page.invalid_credentials');
                } else if (error.response.status === 403) {
                    errorMessage = t('login_page.account_disabled');
                } else if (error.response.data && error.response.data.message) {
                    // Si le backend renvoie un DTO d'erreur avec un message spécifique
                    errorMessage = error.response.data.message;
                }
            } else if (error.message === "Token expiré" || error.message === "Token invalide") {
                // Erreur de token détectée côté client par l'intercepteur de requête
                errorMessage = t('login_page.token_invalid_expired');
            }

            Swal.fire({
                icon: 'error',
                title: t('login_page.error_title'),
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
                    placeholder={t('login_page.email_placeholder')}
                    error={errors.email}
                    {...register("email", {
                        required: t('login_page.email_required'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('login_page.email_invalid'),
                        }
                    })}
                />
            </div>

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t('login_page.password_placeholder')}
                    error={errors.password}
                    {...register("password", {
                        required: t('login_page.password_required'),
                    })}
                />
            </div>

            <div className="flex items-center justify-between mb-4">
                {/* Checkbox "Se souvenir de moi" (logique non implémentée côté client/server pour le moment) */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        {...register("remember")}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                        {t("login_page.remember_me")}
                    </label>
                </div>
                {/* Lien "Mot de passe oublié ?" */}
                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-600 hover:underline">
                        {t("login_page.forgot_password")} ?
                    </Link>
                </div>
            </div>

            {/* Bouton de soumission */}
            <Button type="submit" disabled={isLoading}>
                {isLoading ? t('login_page.login_button_loading') : t("login_page.login_button")}
            </Button>
        </form>
    );
}
```

### PasswordStrengthIndicator

- **Fichier**: `src\components\auth\PasswordStrength.jsx`
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
        if (strength === 3) return 'bg-blue-500';
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

- **Fichier**: `src\components\auth\RegisterForm.jsx`
- **Props**: `children`
- **Hooks**: useState, useForm, useTranslations, useRouter
```jsx
// src/components/auth/RegisterForm.jsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Calendar, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { registerWithEmail } from '@/lib/api/auth';
import PasswordStrengthIndicator from './PasswordStrength';
import { Link } from '@/navigation'; // Ajouté pour le lien "Déjà enregistré ?"

// Composant Alert pour les messages d'erreur de validation
const Alert = ({ children }) => (
    <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>{children}</span>
    </div>
);

// Composant Input réutilisable avec icône et gestion des erreurs
const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-400'
            }`} size={20} />
        </div>
        {error && <Alert>{error.message}</Alert>}
    </div>
));
Input.displayName = 'Input';

// Composant Button avec animations Framer Motion
const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
        {...props}
    >
        {children}
    </motion.button>
);

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: 'onTouched' // Validation au blur
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('register_page');
    const password = watch('password', ''); // Surveille le champ password pour l'indicateur de force

    // Valide la complexité du mot de passe
    const validatePassword = (value) => {
        const passwordErrors = [];
        if (value.length < 8) passwordErrors.push(t('register_page.password_strength_8_chars'));
        if (!/[A-Z]/.test(value)) passwordErrors.push(t('register_page.password_strength_uppercase'));
        if (!/[0-9]/.test(value)) passwordErrors.push(t('register_page.password_strength_number'));
        if (!/[^A-Za-z0-9]/.test(value)) passwordErrors.push(t('register_page.password_strength_special'));

        return passwordErrors.length === 0 || passwordErrors.join(', ');
    };

    // Soumission du formulaire
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            // Le backend attend "dateOfBirth" au format YYYY-MM-DD,
            // ce qui est le format par défaut des inputs type="date".
            await registerWithEmail(data);

            await Swal.fire({
                icon: 'success',
                title: t('register_page.success_title'),
                text: t('register_page.success_text', { name: `${data.firstName} ${data.lastName}` }),
            });
            router.push('/login');

        } catch (error) {
            console.error("Erreur d'inscription:", error);
            let errorMessage = t('register_page.generic_error');

            if (error.response) {
                // Si le backend renvoie un message d'erreur spécifique (ex: email déjà utilisé)
                if (error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response.status === 400) {
                    errorMessage = t('register_page.validation_error');
                }
            }
            
            Swal.fire({
                icon: 'error',
                title: t('register_page.error_title'),
                text: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("register_page.last_name_placeholder")}
                    error={errors.lastName}
                    {...register("lastName", {
                        required: t("register_page.last_name_required"),
                        minLength: { value: 2, message: t("register_page.last_name_min_length") }
                    })}
                />
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("register_page.first_name_placeholder")}
                    error={errors.firstName}
                    {...register("firstName", {
                        required: t("register_page.first_name_required"),
                        minLength: { value: 2, message: t("register_page.first_name_min_length") }
                    })}
                />
            </div>

            <Input
                icon={Mail}
                type="email"
                placeholder={t("login_page.email_placeholder")}
                error={errors.email}
                {...register("email", {
                    required: t("login_page.email_required"),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("login_page.email_invalid"),
                    }
                })}
            />

            <Input
                icon={Calendar}
                type="date"
                placeholder={t("register_page.dob_placeholder")}
                error={errors.dateOfBirth}
                {...register("dateOfBirth", {
                    required: t("register_page.dob_required"),
                    validate: value => {
                        const age = new Date().getFullYear() - new Date(value).getFullYear();
                        return age >= 18 || t("register_page.dob_age_validation");
                    }
                })}
            />

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t("login_page.password_placeholder")}
                    error={errors.password}
                    {...register("password", {
                        required: t("login_page.password_required"),
                        validate: validatePassword
                    })}
                />
                <PasswordStrengthIndicator password={password} />
            </div>

            <Input
                icon={Lock}
                type="password"
                placeholder={t("register_page.password_confirm_placeholder")}
                error={errors.passwordConfirm}
                {...register("passwordConfirm", {
                    required: t("register_page.password_confirm_required"),
                    validate: value => value === password || t("register_page.password_mismatch")
                })}
            />

            <div className="pt-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? t('register_page.register_button_loading') : t('register_page.register_button')}
                </Button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-600">
                    {t("register_page.already_registered")}{' '}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        {t("register_page.login_here")}
                    </Link>
                </p>
            </div>
        </form>
    );
}
```

### SocialLogins

- **Fichier**: `src\components\auth\SocialLogins.jsx`
- **Props**: `children, ...props`
- **Hooks**: useEffect, useState, useGoogleLogin, useTranslations, useRouter, usePopup
```jsx

"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();
    const [isAppleSDKLoaded, setIsAppleSDKLoaded] = useState(false);

    // --- Logique Google ---
    const googleLogin = useGoogleLogin({
        // La meilleure approche est "auth-code" pour la sécurité
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            toast.loading(t('common.loading'));
            try {
                // On envoie le code au backend via notre fonction API
                await loginWithGoogle(codeResponse.code);
                toast.dismiss();
                toast.success(t('login_page.success_title'));
                router.push('/dashboard');
            } catch (error) {
                toast.dismiss();
                toast.error(error.response?.data?.message || 'Erreur de connexion avec Google.');
            }
        },
        onError: () => {
            toast.error('La connexion Google a échoué. Veuillez réessayer.');
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
            toast.error("Le SDK Apple n'est pas encore chargé.");
            return;
        }
        try {
            const data = await window.AppleID.auth.signIn();
            toast.loading(t('common.loading'));
            await loginWithApple(data.authorization.code);
            toast.dismiss();
            toast.success(t('login_page.success_title'));
            router.push('/dashboard');
        } catch (error) {
            toast.dismiss();
            // Ne pas montrer d'erreur si l'utilisateur annule manuellement
            if (error.error !== "popup_closed_by_user") {
                toast.error(error.response?.data?.message || 'Erreur de connexion avec Apple.');
            }
        }
    };

    return (
        <div className="w-full">
            <SocialButton onClick={() => googleLogin()}>
                <img src="/google-logo.svg" alt="Google" className="w-5 h-5 mr-3" />
                {t("login_page.with_google")}
            </SocialButton>

            <SocialButton onClick={handleAppleSignIn} disabled={!isAppleSDKLoaded}>
                <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5 mr-3" />
                {isAppleSDKLoaded ? 'Se connecter avec Apple' : 'Chargement...'}
            </SocialButton>
        </div>
    );
}
```

### AppHeader

- **Fichier**: `src\components\dashboard\AppHeader.jsx`
- **Props**: `isSidebarOpen, onSidebarToggle, onNotificationToggle`
- **Hooks**: useTranslations, useUser
```jsx
"use client";

import { motion } from "framer-motion";
import { Bell, Building, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';
import ThemeSwitcher from '../layout/ThemeSwitcher';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import { useUser } from "@/context/UserContext";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function AppHeader({ isSidebarOpen, onSidebarToggle, onNotificationToggle }) {
    const { user, isLoading } = useUser();
    const t = useTranslations('dashboard');

    const profileImageSrc = !isLoading && user?.profilePictureUrl
        ? `${STATIC_FILES_URL}${user.profilePictureUrl}`
        : null;
        
    const displayUserName = isLoading ? "..." : user?.firstName || "Invité";

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-30 sticky top-0 border-b border-gray-200/80 dark:border-white/10">
            <div className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <button onClick={onSidebarToggle} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                    </button>
                    <div className="hidden md:flex items-center">
                        <Building className="h-8 w-8 text-blue-600" />
                        <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-200">SyndicManager</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="relative hidden sm:block">
                        <input type="text" placeholder={t("rechercherPlaceholder1")} className="w-40 md:w-64 pl-10 pr-4 py-2 rounded-full border bg-gray-100 dark:bg-gray-800 dark:border-gray-700" />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                    <button onClick={onNotificationToggle} className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Bell size={22} />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" />
                    </button>
                    <Link href="/parametres" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                            {profileImageSrc ? (
                                <img src={profileImageSrc} alt="Profil" className="w-9 h-9 rounded-full object-cover" />
                            ) : (
                                <SyndicatDefaultAvatar name={displayUserName} size={36} className="w-9 h-9" />
                            )}
                            <span className="hidden lg:inline font-semibold text-gray-700 dark:text-gray-300">{displayUserName}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
```

### AppSidebar

- **Fichier**: `src\components\dashboard\AppSidebar.jsx`
- **Props**: `isOpen`
- **Hooks**: useRouter, usePathname, useTranslations
```jsx
// src/components/dashboard/AppSidebar.jsx
"use client";

import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { Link } from '@/navigation';
import { useRouter, usePathname } from 'next/navigation';
import { navItems } from "./navItems.js";
import { useTranslations } from "next-intl";

export default function AppSidebar({ isOpen }) {
    const router = useRouter();
    const pathname = usePathname(); // Hook pour obtenir la route actuelle
    const t = useTranslations('dashboard');

    const handleLogout = () => {
        // Idéalement, appeler une fonction API de déconnexion ici
        // logout();
        router.push('/login');
    };

    // La route active est déterminée par rapport au chemin actuel
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
                            title={isOpen ? '' : item.label} // Tooltip quand la sidebar est fermée
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
                    title={isOpen ? '' : "Déconnexion"}
                >
                    <LogOut className="h-6 w-6" />
                    {isOpen && <span className="font-medium ml-2">Déconnexion</span>}
                </motion.button>
            </div>
        </motion.nav>
    );
}
```

### Feed

- **Fichier**: `src\components\dashboard\Feed.jsx`
- **Props**: `initialFeed`
- **Hooks**: 
```jsx
// src/components/dashboard/Feed.jsx
"use client";

import FeedCard from './FeedCard';

/**
 * Affiche le fil d'actualité en mappant chaque item à un composant FeedCard.
 * @param {Array} initialFeed - Le tableau des publications et événements.
 */
export default function Feed({ initialFeed }) {
    if (!initialFeed || initialFeed.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                <p>Le fil d'actualité est vide pour le moment.</p>
                <p>Revenez plus tard pour voir les dernières publications et événements.</p>
            </div>
        );
    }

    return (
        <div>
            {initialFeed.map(item => (
                <FeedCard key={`${item.id}-${item.createdAt}`} item={item} />
            ))}
        </div>
    );
}
```

### FeedCard

- **Fichier**: `src\components\dashboard\FeedCard.jsx`
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
    <motion.button onClick={onClick} className={`flex items-center justify-center w-full gap-2 py-2.5 rounded-lg transition-all duration-200 ${ active ? `${activeColor.replace('text-', 'bg-').replace('-500', '-100')} dark:${activeColor.replace('text-', 'bg-').replace('-500', '-900/50')} ${activeColor}` : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700' }`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Icon size={18} fill={active ? 'currentColor' : 'none'} />
        <span className="font-medium text-sm">{text}</span>
    </motion.button>
);

export default function FeedCard({ item }) {
    const t = useTranslations('dashboard');
    const [liked, setLiked] = useState(false);

    const dateToUse = item.createdAt || item.startDate;
    const timeAgo = dateToUse ? formatDistanceToNow(new Date(dateToUse), { addSuffix: true, locale: fr }) : t('common.unknown_date');
    const imageUrl = item.image && item.image.startsWith('/') ? `${STATIC_FILES_URL}${item.image}` : item.image;

    if (item.type === 'publication') {
        const authorAvatarUrl = item.author.avatar && item.author.avatar.startsWith('/') ? `${STATIC_FILES_URL}${item.author.avatar}` : item.author.avatar;

        return (
            <div className="bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4 mb-4">
                        {authorAvatarUrl ? <Image src={authorAvatarUrl} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/10" /> : <SyndicatDefaultAvatar name={item.author.name} size={48} />}
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{item.author.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><Clock size={12}/> {timeAgo}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-5 whitespace-pre-wrap text-base leading-relaxed">{item.content}</p>
                    {imageUrl && <div className="rounded-xl overflow-hidden shadow-lg"><Image src={imageUrl} alt="Contenu" width={800} height={500} className="w-full h-auto"/></div>}
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 my-4">
                        <span>{item.likes} {t('common.like', {count: item.likes})}</span>
                        <span>{item.comments?.length || 0} {t('common.comment', {count: item.comments?.length || 0})}</span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700/50 pt-3 gap-2">
                        <ActionButton icon={Heart} text={t('common.like')} onClick={() => setLiked(!liked)} active={liked} activeColor="text-red-500" />
                        <ActionButton icon={MessageCircle} text={t('common.comment')} activeColor="text-blue-500" />
                        <ActionButton icon={Share2} text={t('common.share')} activeColor="text-green-500" />
                    </div>
                </div>
            </div>
        );
    } 

    if (item.type === 'event') {
        const startDate = new Date(dateToUse);
        return (
             <div className="bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden">
                <FeedItemHeader syndicat={item.syndicat} branch={item.branch} />
                {imageUrl && <div className="relative h-52 group">
                    <Image src={imageUrl} alt={item.title} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-5">
                         <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                         <p className="text-sm text-white/90 drop-shadow-md">{item.description}</p>
                    </div>
                </div>}
                <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-4 text-center mb-5">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
                            <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{format(startDate, 'dd')}</p>
                            <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase">{format(startDate, 'MMM', { locale: fr })}</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/40 rounded-lg col-span-2">
                            <p className="font-semibold text-green-700 dark:text-green-300">{format(startDate, 'EEEE', { locale: fr })}</p>
                            <p className="text-xs text-green-600 dark:text-green-400">{format(startDate, 'HH:mm')}</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                        <p className="flex items-center gap-2"><MapPin size={16} className="text-purple-500"/> {item.location}</p>
                        <p className="flex items-center gap-2"><User size={16} className="text-purple-500"/> Organisé par <strong>{item.author.name}</strong></p>
                    </div>
                    <motion.button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        {t('events.see_and_join')} ({item.participants?.length || 0} {t('participants')})
                    </motion.button>
                </div>
            </div>
        );
    }
    return null;
}
```

### FeedItem

- **Fichier**: `src\components\dashboard\FeedItem.jsx`
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

- **Fichier**: `src\components\dashboard\FeedItemHeader.jsx`
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
        <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/80 border-b border-gray-200/80 dark:border-white/10">
            {logoUrl ? (
                <Image src={logoUrl} alt={syndicat.name} width={40} height={40} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            ) : (
                <SyndicatDefaultAvatar name={syndicat.name} size={40} className="rounded-lg shadow-sm" />
            )}
            <div className="ml-3">
                <Link href={`/syndicat-space/${syndicat.id}`} className="font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 transition-colors">
                    {syndicat.name}
                </Link>
                {branch && <p className="text-xs text-gray-500 dark:text-gray-400">{branch.name}</p>}
            </div>
        </div>
    );
};
```

### navItems

- **Fichier**: `src\components\dashboard\navItems.js`
- **Props**: `N/A`
- **Hooks**: 
```jsx

import { Compass, Home, Settings, Users } from "lucide-react";

export const navItems = [
    { id: "dashboard", icon: Home, label: "Accueil", gradient: "from-blue-500 to-indigo-600", description: "Actualité", route: "/home" },
    { id: "syndicats", icon: Users, label: "Mes Syndicats", gradient: "from-green-500 to-teal-600", description: "Gérer vos organisations", route: "/syndicats" },
    { id: "explorer", icon: Compass, label: "Explorer", gradient: "from-purple-500 to-pink-600", description: "Découvrir de nouveaux syndicats", route: "/explorer" },
    { id: "parametres", icon: Settings, label: "Paramètres", gradient: "from-gray-500 to-slate-600", description: "Configuration du compte", route: "/parametres" },
];
```

### NotificationsPanel

- **Fichier**: `src\components\dashboard\NotificationsPanel.jsx`
- **Props**: `title, description, time, icon: Icon, gradient`
- **Hooks**: useTranslations
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


import { notificationsData } from '@/lib/fakeData';

export default function NotificationsPanel({ isOpen, onClose }) {
    const t = useTranslations('dashboard');

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
                            <p className="text-sm text-gray-500">{t("notifications.subtitle", { count: notificationsData.length })}</p>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-3">
                            {notificationsData.map((notification) => (
                                <NotificationItem key={notification.id} {...notification} />
                            ))}
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

- **Fichier**: `src\components\dashboard\WelcomeSection.jsx`
- **Props**: `N/A`
- **Hooks**: useState, useTranslations, useUser
```jsx
"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import CreateSyndicateModal from "@/components/syndicats/CreateSyndicateModal";
import { useUser } from "@/context/UserContext"; // Importe notre hook

export default function WelcomeSection() { // Plus besoin de props
    const { user, isLoading } = useUser(); // Récupère les données depuis le contexte
    const t = useTranslations('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Construit le nom complet. Gère le cas où `user` n'est pas encore chargé.
    const fullName = isLoading ? "..." : `${user?.firstName || ''} ${user?.lastName || ''}`.trim();

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('dashboard.welcome', { name: fullName || t('dashboard.dear_user') })}
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    {t("dashboard.portal_description")}
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto"
                >
                    <Zap className="w-6 h-6 inline-block mr-2" />
                    {t("dashboard.launch_syndicate")}
                </button>
            </div>

            <CreateSyndicateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
```

### AdhesionModal

- **Fichier**: `src\components\explorer\AdhesionModal.jsx`
- **Props**: `isOpen, onClose, syndicat`
- **Hooks**: useTranslations
```jsx
// src/components/explorer/AdhesionModal.jsx
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
                    // Permet de fermer la modale en cliquant sur le fond
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
                        className="bg-gray-50 dark:bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl"
                        // Empêche la propagation du clic pour ne pas fermer la modale en cliquant dessus
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header de la Modale */}
                        <div className="sticky top-0 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded-t-2xl z-10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('adhesion_modal.title', { syndicatName: syndicat.name })}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t('adhesion_modal.subtitle')}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                aria-label="Fermer la modale"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Contenu de la Modale (le wizard) */}
                        <div className="flex-grow overflow-y-auto">
                            <AdhereSyndicatForm
                                syndicat={syndicat}
                                // La fonction `onClose` est passée au wizard pour qu'il puisse
                                // fermer la modale lui-même une fois le processus terminé.
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

- **Fichier**: `src\components\explorer\ExploreCard.jsx`
- **Props**: `syndicat, itemVariants, onDetails, onAdhere`
- **Hooks**: 
```jsx
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronRight, UserPlus, Users, Star, ShieldCheck } from "lucide-react";
import { SyndicatDefaultAvatar } from "../shared/SyndicatDefaultAvatar";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {
    const formatMemberCount = (count) => {
        if (!count) return '0';
        if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
        return count.toString();
    };

    const logoUrl = syndicat.logoUrl ? `${STATIC_FILES_URL}${syndicat.logoUrl}` : null;
    const bannerUrl = syndicat.bannerUrl ? `${STATIC_FILES_URL}${syndicat.bannerUrl}` : "/placeholder-cover.jpg";

    // Données factices pour les champs non gérés par le backend
    const rating = syndicat.rating || '4.5'; // fallback
    const certified = syndicat.certified || false; // fallback
    const specialties = syndicat.specialties || ['Tech', 'Formation', 'Innovation']; // fallback
    
    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute -bottom-8 left-6">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border-4 border-white dark:border-gray-800">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
                {certified && <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg" title="Syndicat Certifié"><ShieldCheck className="w-4 h-4" /></div>}
            </div>
            <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2 h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <div className="flex items-center" title="Nombre de membres"><Users className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0"/><span className="font-medium">{formatMemberCount(syndicat.memberCount)} membres</span></div>
                    <div className="flex items-center" title="Note moyenne"><Star className="h-4 w-4 mr-1 text-yellow-400 fill-current"/><span className="font-medium">{rating}</span></div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                    {specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">{specialty}</span>
                    ))}
                </div>
                <div className="mt-auto pt-4 flex gap-3">
                    <motion.button className="flex-1 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 py-2.5 rounded-lg border-2 border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center font-semibold" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onDetails(syndicat)}>
                        <span>Détails</span>
                        <ChevronRight className="ml-1 h-4 w-4"/>
                    </motion.button>
                    <motion.button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => onAdhere(syndicat)}>
                        <UserPlus className="mr-2 h-4 w-4"/>
                        <span>Adhérer</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
```

### ExploreHeader

- **Fichier**: `src\components\explorer\ExploreHeader.jsx`
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
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-100 dark:bg-blue-900/50 rounded-full blur-3xl opacity-30 -z-10"></div>

                {/* Titre principal */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 relative z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {t('explorer_page.title')}
                    </span>
                    <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {t('explorer_page.description')}
                    <span className="block mt-2 text-blue-600 dark:text-blue-400 flex items-center justify-center">
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

- **Fichier**: `src\components\explorer\ExplorerClient.jsx`
- **Props**: `initialSyndicates, initialHasNextPage`
- **Hooks**: useState, useMemo, useTranslations, useRouter
```jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Search, Filter, AlertCircle, RefreshCw, Loader2 } from "lucide-react";
import ExploreCard from "./ExploreCard";
import AdhesionModal from "./AdhesionModal";
import { getAllSyndicatesAPI } from "@/lib/api/syndicates";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ExplorerClient({ initialSyndicates, initialHasNextPage }) {
    const t = useTranslations('explorer_page');
    const router = useRouter();

    const [syndicates, setSyndicates] = useState(initialSyndicates);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("members");
    const [selectedSyndicat, setSelectedSyndicat] = useState(null);
    const [isAdhesionModalOpen, setIsAdhesionModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const filteredAndSortedSyndicates = useMemo(() => {
        let filtered = syndicates.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filterType !== "all") {
            filtered = filtered.filter(s => s.type === filterType);
        }
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name": return a.name.localeCompare(b.name);
                case "members": default: return (b.memberCount || 0) - (a.memberCount || 0);
            }
        });
    }, [syndicates, searchTerm, filterType, sortBy]);

    const handleLoadMore = async () => {
        if (!hasNextPage || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const data = await getAllSyndicatesAPI(page, 12);
            setSyndicates(prev => [...prev, ...data.content]);
            setHasNextPage(data.hasNext);
            setPage(prev => prev + 1);
        } catch (error) {
            toast.error("Impossible de charger plus de syndicats.");
        } finally {
            setIsLoadingMore(false);
        }
    };

    const handleAdhesion = (syndicat) => {
        setSelectedSyndicat(syndicat);
        setIsAdhesionModalOpen(true);
    };

    const handleDetails = (syndicat) => {
        router.push(`/explorer/${syndicat.id}`);
    };

    return (
        <>
            <motion.div className="mb-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="relative mb-4">
                    <input type="text" placeholder={t("explorer_page.search_placeholder")} className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 transition-all text-lg" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6"/>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    {/* Filtres... */}
                </div>
            </motion.div>
            <AnimatePresence>
                {filteredAndSortedSyndicates.length > 0 ? (
                    <motion.div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" variants={containerVariants} initial="hidden" animate="visible">
                        {filteredAndSortedSyndicates.map((syndicat) => (
                            <ExploreCard key={syndicat.id} syndicat={syndicat} itemVariants={itemVariants} onDetails={handleDetails} onAdhere={handleAdhesion} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div key="empty-state" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6"><Search className="w-12 h-12 text-gray-400 dark:text-gray-500" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("explorer_page.no_results_title")}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{t("explorer_page.no_results_description")}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="text-center mt-12">
                {hasNextPage && (
                    <motion.button onClick={handleLoadMore} disabled={isLoadingMore} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors" whileHover={{ scale: 1.05 }}>
                        {isLoadingMore ? <span className="flex items-center"><Loader2 className="w-5 h-5 mr-2 animate-spin" />Chargement...</span> : "Charger plus"}
                    </motion.button>
                )}
            </div>

            <AdhesionModal isOpen={isAdhesionModalOpen} onClose={() => setIsAdhesionModalOpen(false)} syndicat={selectedSyndicat} />
        </>
    );
}
```

### AdhereSyndicatForm

- **Fichier**: `src\components\forms\adhesion\AdhereSyndicatForm.jsx`
- **Props**: `syndicat, onComplete`
- **Hooks**: useState, useTranslations
```jsx
// src/components/forms/adhesion/AdhereSyndicatForm.jsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { AntenneSelection } from "./AntenneSelection.jsx";
import { UserTypeSelection } from "./UserTypeSelection.jsx";
import { IndividualForm } from "./IndividualMembershipForm.jsx";
import { Confirmation } from "./MembershipConfirmation.jsx";
import { antennesData } from "@/lib/fakeData/antenne.js";

export const AdhereSyndicatForm = ({ syndicat, onComplete }) => {
    const t = useTranslations('adhesion_form');
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAntenne, setSelectedAntenne] = useState(null);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [formData, setFormData] = useState({});
    const [membershipId, setMembershipId] = useState(null);

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
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${ currentStep >= step ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300' }`}>
                                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                                </div>
                                {step < steps.length && ( <div className={`w-12 sm:w-20 lg:w-32 h-1 mx-2 transition-colors duration-500 ${ currentStep > step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700' }`} /> )}
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-3">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{steps[currentStep - 1]}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('adhesion_wizard.step_of', { current: currentStep, total: steps.length })}</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    {currentStep === 1 && <AntenneSelection antennes={antennesData} onSelect={setSelectedAntenne} selectedAntenne={selectedAntenne} />}
                    {currentStep === 2 && <UserTypeSelection onSelect={setSelectedUserType} selectedType={selectedUserType} />}
                    {currentStep === 3 && <IndividualForm onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />}
                    {currentStep === 4 && <Confirmation membershipId={membershipId} antenne={selectedAntenne} onComplete={onComplete} />}
                </motion.div>
            </AnimatePresence>

            {currentStep < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <motion.button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-lg flex items-center font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={currentStep > 1 ? { scale: 1.05 } : {}}>
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

- **Fichier**: `src\components\forms\adhesion\AntenneSelection.jsx`
- **Props**: `antennes, onSelect, selectedAntenne`
- **Hooks**: 
```jsx
// src/components/forms/adhesion/AntenneSelection.jsx
"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle, MapPin, Navigation, Users, Award, Zap } from "lucide-react";

export const AntenneSelection = ({ antennes, onSelect, selectedAntenne }) => {
    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg"><Building2 className="w-8 h-8 text-white" /></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">Choisissez votre antenne</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Sélectionnez l'antenne la plus proche ou celle qui correspond à votre secteur.</p>
                <div className="mt-4 inline-flex items-center bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"><Navigation className="w-4 h-4 mr-2" /> {antennes.length} antennes disponibles</div>
            </motion.div>

            <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                {antennes.map((antenne) => {
                    const isSelected = selectedAntenne?.id === antenne.id;
                    return (
                        <motion.div key={antenne.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -5 }} onClick={() => onSelect(antenne)}
                                    className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 ${ isSelected ? 'ring-4 ring-blue-500 shadow-2xl' : 'shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700' }`}>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{antenne.nom}</h3>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"><MapPin className="w-4 h-4 mr-2 flex-shrink-0" /><span className="truncate">{antenne.localisation}</span></div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm"><Users className="w-4 h-4 mr-2 text-blue-500" />{antenne.membres} membres</div>
                                    <div className="flex items-center text-sm"><Award className="w-4 h-4 mr-2 text-orange-500" />{antenne.specialites.length} spécialités</div>
                                </div>
                            </div>
                            {isSelected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><CheckCircle className="w-5 h-5 text-white" /></motion.div>}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};
```

### FileUploader

- **Fichier**: `src\components\forms\adhesion\file-uploader.jsx`
- **Props**: `label, icon, accept = "image/*", onFileSelect, required = false`
- **Hooks**: useState, useRef
```jsx
// src/components/forms/adhesion/file-uploader.jsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, AlertCircle, X, FileImage, Eye } from "lucide-react";

export const FileUploader = ({ label, icon, accept = "image/*", onFileSelect, required = false }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    const processFile = (selectedFile) => {
        // Validation basique
        if (selectedFile.size > 5 * 1024 * 1024) { setError('Fichier trop volumineux (max 5Mo)'); return; }
        setFile(selectedFile); setError(null); onFileSelect(selectedFile);
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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <motion.div onClick={() => fileInputRef.current?.click()} className={`relative cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all duration-300 ${file ? 'border-green-400 bg-green-50 dark:bg-green-900/50' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/50 hover:border-blue-400'}`}>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept={accept} className="hidden" />
                {file ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><CheckCircle className="w-6 h-6 text-green-500" /><p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{file.name}</p></div>
                        <button type="button" onClick={(e) => { e.stopPropagation(); removeFile(); }} className="p-1 text-red-500 hover:bg-red-100 rounded-full"><X className="w-4 h-4" /></button>
                    </div>
                ) : (
                    <div className="space-y-1 text-gray-500 dark:text-gray-400"><Upload className="mx-auto h-8 w-8" /><p className="text-sm font-semibold">Cliquer ou glisser un fichier</p><p className="text-xs">PNG, JPG, PDF (max 5Mo)</p></div>
                )}
            </motion.div>
            <AnimatePresence>{error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1">{error}</motion.p>}</AnimatePresence>
        </div>
    );
};
```

### IndividualForm

- **Fichier**: `src\components\forms\adhesion\IndividualMembershipForm.jsx`
- **Props**: `onSubmit, formData, setFormData`
- **Hooks**: useForm, useTranslations
```jsx
// src/components/forms/adhesion/IndividualMembershipForm.jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import { motion } from "framer-motion";
import { FileText, Camera, CreditCard, Send, ArrowRight, User, Phone, Mail, Home, Briefcase, MessageSquare } from "lucide-react";
import { FileUploader } from "./file-uploader.jsx";
import { useTranslations } from 'next-intl';

export const IndividualForm = ({ onSubmit, formData, setFormData }) => {
    const t = useTranslations('adhesion_form');
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        // Pré-remplit le formulaire avec les données existantes s'il y en a
        defaultValues: formData
    });

    const handleFormSubmit = (data) => {
        // Met à jour l'état centralisé dans le wizard parent
        setFormData(data);
        // Déclenche la soumission finale (qui passera à l'étape de confirmation)
        onSubmit(data);
    };

    // Constante pour les classes CSS des champs de formulaire
    const inputClasses = "w-full px-3 py-2 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <motion.form
            onSubmit={handleSubmit(handleFormSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
                    {t('adhesion_form.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    {t('adhesion_form.subtitle')}
                </p>
            </div>

            {/* Section Informations personnelles */}
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-500" />
                    {t('adhesion_form.personal_info_title')}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.last_name')} *</label>
                        <input type="text" {...register("nom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.last_name_placeholder')} />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.first_name')} *</label>
                        <input type="text" {...register("prenom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.first_name_placeholder')} />
                        {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.cni_number')} *</label>
                        <input type="text" {...register("numeroCNI", { required: t('errors.required_field') })} className={inputClasses} placeholder="Ex: 123456789" />
                        {errors.numeroCNI && <p className="text-red-500 text-xs mt-1">{errors.numeroCNI.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.dob')} *</label>
                        <input type="date" {...register("dateNaissance", { required: t('errors.required_field') })} className={inputClasses} />
                        {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.phone')} *</label>
                        <input type="tel" {...register("telephone", { required: t('errors.required_field') })} className={inputClasses} placeholder="+237 6XX XX XX XX" />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.email')} *</label>
                        <input type="email" {...register("email", { required: t('errors.required_field'), pattern: { value: /^\S+@\S+$/i, message: t('errors.invalid_email') } })} className={inputClasses} placeholder="votre.email@exemple.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.address')} *</label>
                    <textarea rows={3} {...register("adresse", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.address_placeholder')} />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.profession')} *</label>
                    <input type="text" {...register("profession", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.profession_placeholder')} />
                    {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.motivation')} *</label>
                    <textarea rows={4} {...register("motivation", { required: t('errors.required_field'), minLength: { value: 20, message: t('errors.min_length', { count: 20 }) } })} className={inputClasses} placeholder={t('adhesion_form.motivation_placeholder')} />
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>
            </div>

            {/* Section Documents requis */}
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Camera className="w-5 h-5 mr-3 text-blue-500" />
                    {t('adhesion_form.documents_title')}
                </h3>
                <div className="space-y-6">
                    <Controller name="photoIdentite" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                        <FileUploader label={t('adhesion_form.id_photo')} icon={<User />} onFileSelect={field.onChange} required />
                        {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                    </>)} />
                    <div className="grid gap-6 md:grid-cols-2">
                        <Controller name="pieceIdentiteFace" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('adhesion_form.id_card_front')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                        <Controller name="pieceIdentiteDos" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('adhesion_form.id_card_back')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                    </div>
                </div>
            </div>

            <motion.button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Send className="w-5 h-5 mr-2" /> {t('adhesion_form.submit_button')} <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
        </motion.form>
    );
};
```

### Confirmation

- **Fichier**: `src\components\forms\adhesion\MembershipConfirmation.jsx`
- **Props**: `membershipId, antenne, onComplete`
- **Hooks**: useState, useTranslations
```jsx
// src/components/forms/adhesion/MembershipConfirmation.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Copy, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export const Confirmation = ({ membershipId, antenne, onComplete }) => {
    const t = useTranslations('confirmation');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(membershipId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 p-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" /></motion.div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('confirmation.title')}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{t('confirmation.subtitle', { antenneName: antenne.nom })}</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('confirmation.ref_number')}</h3>
                <div className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 rounded-lg p-4 border border-blue-200 dark:border-blue-600"><code className="text-xl font-mono font-bold text-blue-600 dark:text-blue-300">{membershipId}</code><motion.button onClick={copyToClipboard} className="p-2 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}</motion.button></div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t('confirmation.next_steps_title')}</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">{[1, 2, 3].map(step => (<li key={step} className="flex items-start"><span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">{step}</span><span>{t(`confirmation.step_${step}`)}</span></li>))}</ul>
            </div>
            <div className="flex gap-3 justify-center">
                <motion.button onClick={onComplete} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" whileHover={{ scale: 1.05 }}>{t('confirmation.back_to_home')}</motion.button>
            </div>
        </motion.div>
    );
};
```

### UserTypeSelection

- **Fichier**: `src\components\forms\adhesion\UserTypeSelection.jsx`
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
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">Type d'adhésion</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Choisissez le type d'adhésion qui vous correspond.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {userTypes.map((type) => (
                    <motion.div key={type.id} onClick={() => type.available && onSelect(type.id)}
                                className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${!type.available ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed opacity-60' : selectedType === type.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50 shadow-lg cursor-pointer' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md cursor-pointer'}`}
                                whileHover={type.available ? { y: -5 } : {}} whileTap={type.available ? { scale: 0.98 } : {}}>
                        {!type.available && <div className="absolute top-4 right-4 px-2 py-1 bg-gray-400 text-white text-xs rounded-full">Bientôt disponible</div>}
                        {selectedType === type.id && type.available && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></motion.div>}
                        <div className="text-center"><div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${type.available ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-gray-200 dark:bg-gray-700'}`}><type.icon className={`w-8 h-8 ${type.available ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} /></div><h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{type.title}</h3><p className="text-gray-600 dark:text-gray-400 text-sm">{type.description}</p></div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
```

### CreateSyndicateWizard

- **Fichier**: `src\components\forms\create-syndicate\CreateSyndicateWizard.jsx`
- **Props**: `goBackToStep1`
- **Hooks**: useState, useUser
```jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import { createSyndicateAPI } from '@/lib/api/syndicates';
import { useUser } from '@/context/UserContext';

import Step1_TypeSelection from './Step1_TypeSelection';
import Step2_AnonymousForm from './Step2_AnonymousForm';
import Step3_Antennes from './Step3_Antennes';

const Step2Accredited = ({ goBackToStep1 }) => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalité à venir</h2>
        <p className="text-gray-600 mb-6">Le processus de création pour les syndicats accrédités est en cours de développement.</p>
        <button onClick={goBackToStep1} className="text-blue-600 font-semibold">Retour</button>
    </div>
);

export function CreateSyndicateWizard({ onSuccess }) {
    const { user } = useUser();
    const [currentStep, setCurrentStep] = useState(1);
    const [syndicatType, setSyndicatType] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        email: "",
        description: "",
        type: "SOLE_PROPRIETORSHIP",
        foundedDate: new Date().toISOString().split('T')[0],
        logoFile: null,
    });

    const [antennes, setAntennes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleTypeSelection = (type) => {
        setSyndicatType(type);
        setCurrentStep(2);
    };

    const goBackToStep1 = () => setCurrentStep(1);
    const goToStep3 = (dataFromStep2) => {
        setFormData(prev => ({ ...prev, ...dataFromStep2 }));
        setCurrentStep(3);
    };
    const goBackToStep2 = () => setCurrentStep(2);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const submissionFormData = new FormData();

            const syndicateData = {
                name: formData.name,
                shortName: formData.shortName,
                email: formData.email,
                description: formData.description,
                type: formData.type,
                foundedDate: formData.foundedDate,
                creatorEmail: user.email,
                branches: antennes.map(antenne => ({
                    name: antenne.name,
                    locationText: antenne.name,
                    latitude: antenne.latitude,
                    longitude: antenne.longitude
                }))
            };

            submissionFormData.append(
                'syndicateData', 
                new Blob([JSON.stringify(syndicateData)], { type: 'application/json' })
            );

            if (formData.logoFile) {
                submissionFormData.append('logoFile', formData.logoFile);
            } else {
                throw new Error("Le logo est obligatoire.");
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
                text: err.response?.data?.message || "Une erreur est survenue lors de la création.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const animationProps = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.4, ease: "easeInOut" }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div key="step1" {...animationProps}>
                        <Step1_TypeSelection handleTypeSelection={handleTypeSelection} />
                    </motion.div>
                );
            case 2:
                if (syndicatType === "anonymous") {
                    return (
                        <motion.div key="step2-anon" {...animationProps}>
                            <Step2_AnonymousForm
                                initialData={formData}
                                onNext={goToStep3}
                                onBack={goBackToStep1}
                                setFormData={setFormData}
                            />
                        </motion.div>
                    );
                }
                if (syndicatType === "accredited") {
                    return <Step2Accredited goBackToStep1={goBackToStep1} />;
                }
                return goBackToStep1();
            case 3:
                return (
                    <motion.div key="step3-antennes" {...animationProps}>
                        <Step3_Antennes
                            onBack={goBackToStep2}
                            onSubmit={handleSubmit}
                            antennes={antennes}
                            setAntennes={setAntennes}
                            isLoading={isLoading}
                        />
                    </motion.div>
                );
            default:
                return <Step1_TypeSelection handleTypeSelection={handleTypeSelection} />;
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
                {renderStep()}
            </AnimatePresence>
        </div>
    );
};
```

### FileUploader

- **Fichier**: `src\components\forms\create-syndicate\FileUploader.jsx`
- **Props**: `label, onFileSelect`
- **Hooks**: useState, useRef
```jsx

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function FileUploader({ label, onFileSelect }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > 5 * 1024 * 1024) { // 5MB
                setError("Le fichier est trop volumineux (max 5 Mo).");
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
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                {file ? (
                    <div className="flex items-center justify-center text-green-600">
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

- **Fichier**: `src\components\forms\create-syndicate\InteractiveMap.jsx`
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

- **Fichier**: `src\components\forms\create-syndicate\Step1_TypeSelection.jsx`
- **Props**: `handleTypeSelection`
- **Hooks**: 
```jsx
// src/components/forms/create-syndicate/Step1_TypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { Eye, Award, Shield, ChevronRight, CheckCircle, Users, Lock } from "lucide-react";

export default function Step1_TypeSelection({ handleTypeSelection }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">Créer votre syndicat</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">Choisissez le type de syndicat qui correspond à vos besoins.</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"><Shield className="w-4 h-4 mr-2" />Étape 1 sur 3</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div onClick={() => handleTypeSelection("anonymous")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-xl border border-emerald-100 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-emerald-500 rounded-2xl shadow-lg"><Eye className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-emerald-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-emerald-800 mb-4">Syndicat Anonyme</h3>
                        <p className="text-emerald-700 mb-6 leading-relaxed">Créez rapidement un syndicat sans vérification. Idéal pour commencer et rassembler vos collègues.</p>
                        <div className="space-y-3"><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Création immédiate</span></div><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Aucune vérification requise</span></div><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Fonctionnalités de base</span></div></div>
                        <div className="mt-6 pt-4 border-t border-emerald-200"><span className="inline-flex items-center text-sm font-medium text-emerald-700"><Users className="w-4 h-4 mr-2" />Parfait pour débuter</span></div>
                    </div>
                </div>
                <div onClick={() => handleTypeSelection("accredited")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-xl border border-violet-100 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-violet-500 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-violet-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-violet-800 mb-4">Syndicat Accrédité</h3>
                        <p className="text-violet-700 mb-6 leading-relaxed">Processus de vérification complet pour un syndicat officiel avec toutes les fonctionnalités.</p>
                        <div className="space-y-3"><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Vérification complète</span></div><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Statut officiel</span></div><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Fonctionnalités avancées</span></div></div>
                        <div className="mt-6 pt-4 border-t border-violet-200"><span className="inline-flex items-center text-sm font-medium text-violet-700"><Lock className="w-4 h-4 mr-2" />Reconnaissance officielle</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Step2_AnonymousForm

- **Fichier**: `src\components\forms\create-syndicate\Step2_AnonymousForm.jsx`
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
    { id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "Technologie" },
    { id: "4fa85f64-5717-4562-b3fc-2c963f66afa7", name: "Santé" },
    { id: "5fa85f64-5717-4562-b3fc-2c963f66afa8", name: "Éducation" }
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

    const inputClasses = "w-full p-3 border rounded-xl bg-white text-gray-900 border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition";
    const selectClasses = `${inputClasses} appearance-none`;

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-5xl mx-auto space-y-8">
            <div className="mb-8">
                <button type="button" onClick={onBack} className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />Retour au choix du type
                </button>
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Informations du syndicat</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Remplissez les informations de base pour créer votre syndicat anonyme.</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><Building2 className="w-6 h-6 mr-3 text-emerald-500" />Informations principales</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><TextCursorInput className="w-4 h-4 mr-2 text-emerald-500" />Nom complet du syndicat *</label>
                        <input {...register("name", { required: "Le nom complet est requis" })} placeholder="Ex: Syndicat National des Développeurs" className={inputClasses} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Type className="w-4 h-4 mr-2 text-emerald-500" />Nom court / Acronyme *</label>
                        <input {...register("shortName", { required: "L'acronyme est requis" })} placeholder="Ex: SND" className={inputClasses} />
                        {errors.shortName && <p className="text-red-500 text-xs mt-1">{errors.shortName.message}</p>}
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><AtSign className="w-4 h-4 mr-2 text-emerald-500" />Email de contact *</label>
                        <input type="email" {...register("email", { required: "L'email est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })} placeholder="contact@syndicat.com" className={inputClasses} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Building2 className="w-4 h-4 mr-2 text-emerald-500" />Type d'organisation *</label>
                        <select {...register("type", { required: true })} className={selectClasses}>
                            {syndicatTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                        </select>
                    </div>
                </div>
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><History className="w-4 h-4 mr-2 text-emerald-500" />Date de fondation *</label>
                    <input type="date" {...register("foundedDate", { required: "La date de fondation est requise" })} className={inputClasses} />
                    {errors.foundedDate && <p className="text-red-500 text-xs mt-1">{errors.foundedDate.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Palette className="w-4 h-4 mr-2 text-emerald-500" />Description *</label>
                    <textarea {...register("description", { required: "La description est requise" })} rows={4} placeholder="Décrivez les objectifs et la mission de votre syndicat..." className={inputClasses}></textarea>
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><ImageIcon className="w-6 h-6 mr-3 text-emerald-500" />Logo du syndicat</h2>
                <Controller
                    name="logoFile"
                    control={control}
                    rules={{ required: "Le logo est obligatoire" }}
                    render={({ field: { onChange }, fieldState: { error } }) => (
                        <>
                            <FileUploader
                                label="Télécharger le logo"
                                onFileSelect={onChange}
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Format recommandé : carré, 512x512 pixels minimum, JPG ou PNG (max 5 Mo).</p>
            </div>

            <div className="text-center mt-8">
                <button type="submit" className="w-full md:w-auto py-4 px-8 rounded-2xl font-bold text-white text-lg shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl hover:from-emerald-600 hover:to-teal-600 transition-transform transform hover:scale-105">
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

- **Fichier**: `src\components\forms\create-syndicate\Step3_Antennes.jsx`
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

- **Fichier**: `src\components\landing\ActivityFeed.jsx`
- **Props**: `activity, index`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';
import { Clock, Heart, MessageCircle, Share2, Users, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

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
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image
                                src={activity.author.avatar}
                                alt={activity.author.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            {activity.syndicate.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 text-base">{activity.author.name}</h3>
                                <span className="text-slate-500 text-sm">•</span>
                                <span className="text-slate-600 text-sm">{activity.author.role}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                <span>{activity.syndicate.name}</span>
                                <span>•</span>
                                <Clock className="h-4 w-4" />
                                <span>{activity.timestamp}</span>
                            </div>
                        </div>
                    </div>
                    {isEvent && (
                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Événement
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6">
                {isEvent && activity.event && (
                    <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 mb-2">{activity.event.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 text-sm gap-4">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {activity.event.date}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {activity.event.location}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {activity.event.participants} participants
                            </div>
                        </div>
                    </div>
                )}
                
                <p className="text-slate-700 mb-4 leading-relaxed text-base">{activity.content}</p>
                
                {activity.image && (
                    <div className="-mx-6 mb-4">
                        <Image
                            src={activity.image}
                            alt="Publication"
                            width={800}
                            height={400}
                            className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors">
                            <Share2 className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.shares}</span>
                        </button>
                    </div>
                    {isEvent && (
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                            Participer
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ActivityFeed() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Au cœur de l'actualité syndicale
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Découvrez les initiatives, événements et succès qui façonnent 
                        l'avenir du mouvement syndical
                    </p>
                </div>

                <div className="max-w-xl mx-auto space-y-6">
                    {activities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="group relative bg-blue-800 text-white px-14 py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 shadow-md transform hover:scale-105">
                        <span className="flex items-center space-x-3">
                            <span>Découvrir plus d'actualités</span>
                            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-blue-700 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-slate-600 mt-4 text-sm">
                        Restez connecté avec la communauté syndicale
                    </p>
                </div>
            </div>
        </section>
    );
}
```

### FeaturesSection

- **Fichier**: `src\components\landing\FeaturesSection.jsx`
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

- **Fichier**: `src\components\landing\HeroSection.jsx`
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

### HeroSection

- **Fichier**: `src\components\landing\ModernLandingPage.jsx`
- **Props**: `N/A`
- **Hooks**: 
```jsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, Building, MessageSquare, Calendar, BarChart3, Heart, Share2, Clock, MapPin, MessageCircle } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";

// Hero Section Component
export function HeroSection() {
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
                                Révolutionnez la{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    gestion syndicale
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                                Plateforme moderne pour optimiser la communication, la transparence et l'efficacité 
                                de votre organisation syndicale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <motion.button
                                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Commencer maintenant
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </motion.button>
                                </Link>
                                <Link href="/explorer">
                                    <motion.button
                                        className="border border-slate-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Explorer les syndicats
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
                                alt="Gestion syndicale moderne"
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

// Features Section Component
export function FeaturesSection() {
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
        <section className="py-20 bg-slate-50 relative">
            {/* Ligne de séparation décorative */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
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
                                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                )}
                                <span>•</span>
                                <span>{activity.timestamp}</span>
                                {isEvent && (
                                    <>
                                        <span>•</span>
                                        <span className="text-blue-600 font-medium">Événement</span>
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
                                {activity.event.participants} participants
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
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                                <Heart className="w-2 h-2 text-white fill-current" />
                            </div>
                            <span>{activity.likes}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>{activity.comments} commentaires</span>
                        <span>{activity.shares} partages</span>
                    </div>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="px-4 py-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-full">
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">J'aime</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Commenter</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm font-medium">Partager</span>
                        </button>
                        {isEvent && (
                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ml-2">
                                Participer
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ActivityFeed() {
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
                        Fil d'actualité des syndicats
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Restez informé des dernières actualités, événements et réalisations 
                        de la communauté syndicale
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {activities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Voir plus d'actualités
                    </button>
                </div>
            </div>
        </section>
    );
}

// Stats Section Component
export function StatsSection() {
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
```

### PopularSyndicates

- **Fichier**: `src\components\landing\PopularSyndicates.jsx`
- **Props**: `key`
- **Hooks**: useState, useEffect, useRef, useEnter, useLeave
```jsx

'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import { SyndicateCard } from './SyndicateCard'; // On importe la carte client
import { useState, useEffect, useRef } from 'react';

const popularSyndicats = [
    { id: 1, name: "Syndicat National de l'Éducation", members: 250000, image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, name: "Union des Travailleurs de la Santé", members: 180000, image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, name: "Fédération des Employés du Commerce", members: 150000, image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 4, name: "Syndicat des Transporteurs", members: 120000, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1350&q=80" },
    { id: 5, name: "Alliance des Agriculteurs", members: 95000, image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1350&q=80" },
    { id: 6, name: "Syndicat des Artisans", members: 85000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1350&q=80" },
    { id: 7, name: "Union des Techniciens", members: 110000, image: "https://images.unsplash.com/photo-1581092795442-4c93f4c7b3f1?w=1350&q=80" },
    { id: 8, name: "Fédération des Cuisiniers", members: 75000, image: "https://images.unsplash.com/photo-1556909114-b0d0c76b91b8?w=1350&q=80" },
    { id: 9, name: "Syndicat des Ingénieurs", members: 135000, image: "https://images.unsplash.com/photo-1581092795442-4c93f4c7b3f1?w=1350&q=80" },
    { id: 10, name: "Alliance des Commerçants", members: 90000, image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1350&q=80" },
];

const t = (key) => key.replace(/_/g, ' ');

export default function PopularSyndicates() {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

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

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
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
    }, [isAutoScrolling]);

    return (
        <ClientMotionWrapper delay={0.6} className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Les syndicats les plus actifs
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Rejoignez des milliers de membres dans les organisations syndicales 
                        les plus dynamiques et influentes
                    </p>
                </div>
                
                <div className="relative">
                    {/* Bouton gauche */}
                    <button
                        onClick={scrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 border border-black/20 ${
                            canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!canScrollLeft}
                    >
                        <ChevronLeft className="w-6 h-6 text-blue-900" />
                    </button>

                    {/* Bouton droit */}
                    <button
                        onClick={scrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 border border-black/20 ${
                            canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!canScrollRight}
                    >
                        <ChevronRight className="w-6 h-6 text-blue-900" />
                    </button>

                    {/* Container de défilement */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsAutoScrolling(false)}
                        onMouseLeave={() => setIsAutoScrolling(true)}
                    >
                        {popularSyndicats.map((syndicat) => (
                            <div key={syndicat.id} className="flex-shrink-0 w-80">
                                <SyndicateCard syndicat={syndicat} />
                            </div>
                        ))}
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

- **Fichier**: `src\components\landing\StatsSection.jsx`
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

- **Fichier**: `src\components\landing\SyndicateCard.jsx`
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

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={syndicat.image}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{formatMembers(syndicat.members)} membres</span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">
                    {syndicat.name}
                </h3>
                
                <Link
                    href={`/syndicats/${syndicat.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
                >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
```

### AppFooter

- **Fichier**: `src\components\layout\AppFooter.jsx`
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
        { icon: Mail, href: 'mailto:contact@syndicmanager.com', label: 'Email' },
    ];
    
    return (
        <footer className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200/80 dark:border-white/10 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} SyndicManager. {t('footer.all_rights_reserved')}
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
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

- **Fichier**: `src\components\layout\LandingPageFooter.jsx`
- **Props**: `N/A`
- **Hooks**: useTranslations
```jsx

"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building } from 'lucide-react';
import { Link } from '@/navigation';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function LandingPageFooter() {
    const t = useTranslations('footer');

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white py-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Building className="h-6 w-6" />
                            <span className="text-xl font-semibold">SyndicManager</span>
                        </div>
                        <p className="text-indigo-100">{t("description_plateforme")}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("liens_rapides")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("a_propos")}</Link></li>
                            <li><Link href="/services" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("services")}</Link></li>
                            <li><Link href="/contact" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("contact")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("suivez_nous")}</h4>
                        {/* Social links here */}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
```

### LandingPageHeader

- **Fichier**: `src\components\layout\LandingPageHeader.jsx`
- **Props**: `N/A`
- **Hooks**: useState, usePathname, useTranslations
```jsx

"use client";

import { useState } from 'react';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building, LogIn, UserPlus, Home, Globe } from 'lucide-react';


export default function LandingPageHeader() {
    const t = useTranslations('header');
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpenDropdown(false);
    };

    return (
        <header className="bg-white shadow-md py-3 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 text-blue-600">
                    <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <span className="text-2xl font-bold">U-Gate</span>
                </Link>
                <div className="flex space-x-4 items-center">
                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(prev => !prev)}
                            className="flex items-center space-x-1 px-3 py-2 rounded-full border text-gray-700 hover:bg-blue-100 transition duration-300"
                        >
                            <Globe className="h-5 w-5" />
                            <span>Langue</span>
                        </button>
                        {openDropdown && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                                <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">Français</button>
                                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">English</button>
                                <button onClick={() => changeLanguage('de')} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left">Deutsch</button>
                            </div>
                        )}
                    </div>
                    <Link href="/login" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full border border-blue-300 flex items-center hover:bg-blue-200 transition duration-300">
                            <LogIn className="mr-2 h-4 w-4" /> {t("seConnecter")}
                        </motion.button>
                    </Link>
                    <Link href="/register" passHref>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300">
                            <UserPlus className="mr-2 h-4 w-4" /> {t("sinscrire")}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
```

### LanguageSwitcher

- **Fichier**: `src\components\layout\LanguageSwitcher.jsx`
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
```

### ThemeProvider

- **Fichier**: `src\components\layout\ThemeProvider.jsx`
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

- **Fichier**: `src\components\layout\ThemeSwitcher.jsx`
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
```

### Providers

- **Fichier**: `src\components\Providers.jsx`
- **Props**: `children`
- **Hooks**: 
```jsx
// src/components/Providers.jsx
"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ToastProvider from '@/components/shared/ToastProvider';


export function Providers({ children }) {
  const GOOGLE_CLIENT_ID = "137734019377-nnq12325retn9n23nfnis326j008u2pm.apps.googleusercontent.com";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ToastProvider />
        
        
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
          {children}
        </div>
        
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}
```

### SearchSystem

- **Fichier**: `src\components\SearchSystem.jsx`
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

### DynamicFieldArray

- **Fichier**: `src\components\settings\DynamicFieldArray.jsx`
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
    const inputClasses = "flex-grow p-3 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

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
                                    className="p-3 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-lg transition-colors mt-px"
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
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm mt-4 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Plus size={16} className="mr-2" />
                {t('settings_page.add_formation_button')}
            </motion.button>
        </div>
    );
}
```

### FormSection

- **Fichier**: `src\components\settings\FormSection.jsx`
- **Props**: `title, icon: Icon, children`
- **Hooks**: 
```jsx
// src/components/settings/FormSection.jsx
"use client";

import { motion } from 'framer-motion';

export default function FormSection({ title, icon: Icon, children }) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
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

- **Fichier**: `src\components\settings\ProfileHeader.jsx`
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
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8"
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
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700"
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
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {firstName} {lastName}
                    </h2>
                    <div className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
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

- **Fichier**: `src\components\settings\UserProfileForm.jsx`
- **Props**: `initialData`
- **Hooks**: useForm, useTranslations, useFieldArray
```jsx
// src/components/settings/UserProfileForm.jsx
"use client";

import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { User, Phone, Mail, Camera, FileText, GraduationCap, Save } from 'lucide-react';
import FormSection from './FormSection';
import ProfileHeader from './ProfileHeader';
import DynamicFieldArray from './DynamicFieldArray';
import { FileUploader } from '../forms/adhesion/file-uploader'; // On réutilise ce composant

export default function UserProfileForm({ initialData }) {
    const t = useTranslations('settings_page');

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
            ...data,
            formations: data.formations.map(f => f.value)
        };
        console.log("Données soumises :", payload);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simule un appel API
        toast.success(t('settings_page.success_toast'));
    };

    return (
        // FormProvider permet aux composants enfants d'accéder aux méthodes du formulaire
        <FormProvider {...methods}>
            <ProfileHeader onAvatarClick={() => document.getElementById('profilePictureInput')?.click()} />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <FormSection title={t('settings_page.personal_info_title')} icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.first_name')}*</label>
                            <input {...register("firstName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.last_name')}*</label>
                            <input {...register("lastName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.phone')}*</label>
                            <input type="tel" {...register("phone", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.email')}*</label>
                            <input type="email" {...register("email", { required: true })} className="w-full ..." disabled />
                            <p className="text-xs text-gray-500 mt-1">{t('settings_page.email_disabled_info')}</p>
                        </div>
                    </div>
                </FormSection>

                <FormSection title={t('settings_page.professional_info_title')} icon={FileText}>
                    <div id="profilePictureInput">
                        <Controller name="profilePicture" control={control} render={({ field }) => <FileUploader label={t('adhesion_form.id_photo')} onFileSelect={field.onChange} />} />
                    </div>
                    <Controller name="cv" control={control} render={({ field }) => <FileUploader label="CV (.pdf, .doc)" onFileSelect={field.onChange} accept=".pdf,.doc,.docx" />} />
                </FormSection>

                <FormSection title={t('settings_page.formations_title')} icon={GraduationCap}>
                    <DynamicFieldArray name="formations" placeholder="Ex: Licence en Informatique" t={t} />
                </FormSection>

                <div className="flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                        <Save size={18} />
                        {isSubmitting ? t('settings_page.saving_button') : t('settings_page.save_button')}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
```

### ClientMotionWrapper

- **Fichier**: `src\components\shared\ClientMotionWrapper.jsx`
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

- **Fichier**: `src\components\shared\EventCard.jsx`
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
    <div className={`flex items-center px-3 py-1.5 bg-${colorClass}-50 dark:bg-${colorClass}-900/50 rounded-full`}>
        <Icon className={`w-4 h-4 mr-2 text-${colorClass}-500 dark:text-${colorClass}-400`} />
        <span className={`text-xs font-semibold text-${colorClass}-800 dark:text-${colorClass}-200`}>{text}</span>
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
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/20 overflow-hidden mb-8 w-full max-w-xl mx-auto border border-gray-200/80 dark:border-white/10"
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
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{event.author?.name || "Utilisateur inconnu"}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Organisateur</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <InfoPill icon={Clock} text={formattedTime} colorClass="blue" />
                    <InfoPill icon={MapPin} text={event.location} colorClass="purple" />
                </div>

                <motion.p layout className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm">
                    {isExpanded ? event.description : `${(event.description || '').slice(0, 120)}...`}
                    {(event.description || '').length > 120 && (
                        <button onClick={() => setIsExpanded(!isExpanded)} className="ml-1 text-blue-500 hover:underline font-semibold text-sm">
                            {isExpanded ? t("events_page.see_less") : t("events_page.see_more")}
                        </button>
                    )}
                </motion.p>
                
                <button onClick={() => onShowParticipants(event)} className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-400 mb-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {/* Utilise participantsCount pour la fiabilité */}
                        <span className="font-medium">{participantsCount} {t("participants", { count: participantsCount })}</span>
                    </div>
                    <div className="flex -space-x-3">
                        {/* Utilise participantsToDisplay qui est garanti être un tableau */}
                        {participantsToDisplay.slice(0, 4).map((p, i) => (
                             <div key={i} className="w-7 h-7 bg-gray-300 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold text-gray-600">
                                {p.name.charAt(0)}
                             </div>
                        ))}
                        {participantsCount > 4 && 
                            <div className="w-7 h-7 bg-gray-200 text-gray-600 text-xs font-bold rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">+{participantsCount - 4}</div>
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

- **Fichier**: `src\components\shared\EventsList.jsx`
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

- **Fichier**: `src\components\shared\NavigationLoader.jsx`
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
        <div className="fixed inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <motion.div
                // Animation d'apparition
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
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
                <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
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

- **Fichier**: `src\components\shared\PublicationCard.jsx`
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

- **Fichier**: `src\components\shared\PublicationsList.jsx`
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

- **Fichier**: `src\components\shared\SearchModal.jsx`
- **Props**: `isOpen, onClose`
- **Hooks**: useState, useCallback, useEffect, useRouter, useTranslations, useNavigate
```jsx

"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter, Building } from "lucide-react";
import { useRouter } from 'next/navigation'; // Utiliser useRouter de next/navigation
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
                                    className="flex-grow text-lg focus:outline-none border-b-2 border-blue-500 pb-2"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
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
                                                    ? "bg-blue-600 text-white"
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
                                                    className="flex items-center p-4 bg-gray-50 hover:bg-blue-100 rounded-lg transition duration-300 ease-in-out cursor-pointer"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    onClick={() => handleSyndicatClick(syndicat)}
                                                >
                                                    <Building className="h-10 w-10 text-blue-600 mr-4" />
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

- **Fichier**: `src\components\shared\SyndicatDefaultAvatar.jsx`
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

- **Fichier**: `src\components\shared\ToastProvider.jsx`
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

### ProfileActivities

- **Fichier**: `src\components\syndicate-profile\ProfileActivities.jsx`
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
        return <p className="text-gray-500 dark:text-gray-400">Aucune activité récente à afficher.</p>;
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

- **Fichier**: `src\components\syndicate-profile\ProfileContactCard.jsx`
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
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={variants}
        >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('profile_page.contact_title')}
            </h3>
            <div className="space-y-4">
                {syndicate.email && (
                    <motion.a href={`mailto:${syndicate.email}`} className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Mail className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{syndicate.email}</span>
                    </motion.a>
                )}
                {syndicate.web_site_url && (
                    <motion.a href={formatUrl(syndicate.web_site_url)} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Globe className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{syndicate.web_site_url}</span>
                    </motion.a>
                )}
                {syndicate.social_network && (
                    <motion.div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50" whileHover={{ x: 5 }}>
                        <Share2 className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{syndicate.social_network}</span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
```

### ProfileHeader

- **Fichier**: `src\components\syndicate-profile\ProfileHeader.jsx`
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
                    <span>{t('profile_page.join_button')}</span>
                </motion.button>
            </div>
        </motion.div>
    );
}
```

### ProfileKeyInfoCard

- **Fichier**: `src\components\syndicate-profile\ProfileKeyInfoCard.jsx`
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
        { label: t('profile_page.members'), value: syndicate.memberCount?.toLocaleString() || '0', icon: Users },
        { label: t('profile_page.founded'), value: getYearFromDate(syndicate.foundedDate), icon: Clock },
        { label: t('profile_page.type'), value: syndicate.type, icon: Briefcase },
    ];

    return (
        <motion.div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700" variants={variants}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('profile_page.key_info_title')}</h3>
            <div className="space-y-4 text-sm">
                {keyInfo.map((info) => (
                    <div key={info.label} className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 flex items-center">
                            <info.icon size={16} className="mr-2" />
                            {info.label}
                        </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{info.value}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
```

### ProfileMap

- **Fichier**: `src\components\syndicate-profile\ProfileMap.jsx`
- **Props**: `antennes = []`
- **Hooks**: 
```jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function ProfileMap({ antennes = [] }) {
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);
    
    if (validAntennes.length === 0) {
        return <div>Aucune antenne géolocalisée.</div>;
    }
    
    const bounds = L.latLngBounds(validAntennes.map(a => [a.latitude, a.longitude]));
    const center = bounds.getCenter();
    
    return (
        <MapContainer
            center={center}
            bounds={bounds}
            style={{ height: '400px', width: '100%' }}
            className="rounded-lg"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {validAntennes.map((office) => (
                <Marker
                    key={office.id}
                    position={[office.latitude, office.longitude]}
                    icon={customIcon}
                >
                    <Tooltip>{office.name}</Tooltip>
                    <Popup>
                        <div>{office.name}</div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
```

### ProfileMembers

- **Fichier**: `src\components\syndicate-profile\ProfileMembers.jsx`
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
        return <p className="text-gray-500 dark:text-gray-400">Aucun membre de l'équipe à afficher.</p>;
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
                            className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
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
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                                />
                            ) : (
                                <SyndicatDefaultAvatar name={member.userName || '?'} size={56} className="w-14 h-14" />
                            )}
                            <div className="ml-4">
                                {/* CORRECTION : On utilise userName pour le nom. */}
                                <p className="font-semibold text-gray-900 dark:text-gray-100">{member.userName}</p>
                                {/* CORRECTION : On nettoie le nom du rôle pour l'affichage. */}
                                <p className="text-sm text-blue-600 dark:text-blue-400">{member.role.replace('ROLE_', '')}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center items-center space-x-4">
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page précédente"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </motion.button>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Page {currentPage} / {totalPages}
                    </span>
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page suivante"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </motion.button>
                </div>
            )}
        </div>
    );
}
```

### ProfileSectionCard

- **Fichier**: `src\components\syndicate-profile\ProfileSectionCard.jsx`
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
            className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            variants={variants}
        >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                {Icon && <Icon className="text-blue-500 mr-3" size={28} />}
                {title}
            </h2>
            {children}
        </motion.section>
    );
}
```

### ProfileServices

- **Fichier**: `src\components\syndicate-profile\ProfileServices.jsx`
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
        return <p className="text-gray-500 dark:text-gray-400">Aucun service n'est actuellement proposé.</p>;
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
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
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

- **Fichier**: `src\components\syndicate-profile\ProfileShop.jsx`
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
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">
                {t('profile_page.no_products')}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product.id || index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700 overflow-hidden flex flex-col"
                    whileHover={{ y: -5, scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Image du produit */}
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
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
                                <ShoppingCart className="w-12 h-12 text-gray-300 dark:text-gray-500" />
                            </div>
                        )}
                    </div>

                    {/* Contenu de la carte produit */}
                    <div className="p-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2">
                            {product.name}
                        </h4>

                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-4 flex-grow line-clamp-3">
                            {product.description}
                        </p>

                        {/* Pied de carte avec prix et bouton */}
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                {product.price ? `${product.price.toFixed(2)} €` : 'Prix sur demande'}
                            </span>
                            <motion.button
                                className="px-3 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-semibold hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors flex items-center gap-1.5"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleOrderClick(product.name)}
                            >
                                <ShoppingCart size={14} />
                                <span>{t('profile_page.order_button')}</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
```

### SyndicateProfileClient

- **Fichier**: `src\components\syndicate-profile\SyndicateProfileClient.jsx`
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

const DynamicProfileMap = dynamic(() => import('./ProfileMap'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-[350px] bg-gray-100 dark:bg-gray-700 rounded-lg"><p>Chargement de la carte...</p></div>
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
    
    // Données factices pour les champs non gérés
    const fakeData = {
        activities: syndicate.activities || [{id: 1, title: "Assemblée Générale", date: "15/06", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"}],
        services: syndicate.services || [{id: 1, name: "Conseil Juridique", description: "Assistance pour les litiges."}],
        products: syndicate.products || [{id: 1, name: "T-shirt Officiel", price: 15.00, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"}],
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <ProfileHeader syndicate={syndicate} variants={itemVariants} />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 pt-28">
                <div className="lg:col-span-2 space-y-8">
                    <ProfileSectionCard title={t('profile_page.mission_title')} icon={HeartHandshake} variants={itemVariants}>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {syndicate.description || t('profile_page.no_description')}
                        </p>
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.activities_title')} icon={Calendar} variants={itemVariants}>
                        <ProfileActivities activities={fakeData.activities} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.shop_title')} icon={ShoppingBag} variants={itemVariants}>
                        <ProfileShop products={fakeData.products} />
                    </ProfileSectionCard>
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <ProfileKeyInfoCard syndicate={syndicate} variants={itemVariants} />
                    <ProfileContactCard syndicate={syndicate} variants={itemVariants} />
                    <ProfileSectionCard title={t('profile_page.locations_title')} icon={MapPin} variants={itemVariants}>
                        <DynamicProfileMap antennes={syndicate.branches} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.services_title')} icon={Package} variants={itemVariants}>
                        <ProfileServices services={fakeData.services} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.team_title')} icon={Users} variants={itemVariants}>
                        <ProfileMembers members={syndicate.members} />
                    </ProfileSectionCard>
                </div>
            </div>
        </motion.div>
    );
}
```

### NotificationCard

- **Fichier**: `src\components\syndicate-space\NotificationCard.jsx`
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
        info: 'bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800/50',
        success: 'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-800/50',
        warning: 'bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-800/50',
    };

    const iconBgColors = {
        info: 'bg-blue-100 dark:bg-blue-800/50',
        success: 'bg-green-100 dark:bg-green-800/50',
        warning: 'bg-yellow-100 dark:bg-yellow-800/50',
    };
    
    const iconTextColors = {
        info: 'text-blue-600 dark:text-blue-300',
        success: 'text-green-600 dark:text-green-300',
        warning: 'text-yellow-600 dark:text-yellow-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`p-4 rounded-xl border ${bgColors[type] || bgColors.info} transition-all duration-300 hover:shadow-md hover:border-transparent`}
        >
            <div className="flex items-start">
                <div className={`flex-shrink-0 p-2 rounded-full ${iconBgColors[type] || iconBgColors.info}`}>
                    <Icon className={`w-5 h-5 ${iconTextColors[type] || iconTextColors.info}`} />
                </div>
                <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{message}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">{time}</span>
                </div>
            </div>
        </motion.div>
    );
};
```

### ChatClient

- **Fichier**: `src\components\syndicate-space\section-chat\ChatClient.jsx`
- **Props**: `chat, onClick, isActive`
- **Hooks**: useState, useRef, useEffect, useTranslations
```jsx
// src/components/syndicate-space/section-chat/ChatClient.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Paperclip, Mic, ArrowLeft, MoreVertical, Plus, Phone, Video, Lock, Users, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// --- SOUS-COMPOSANTS DE STYLE AMÉLIORÉS ---

const ChatListItem = ({ chat, onClick, isActive }) => {
    // Distinction visuelle pour le chat de groupe
    const isGroup = chat.isGroup;
    const activeClasses = 'bg-blue-100 dark:bg-blue-900/50';
    const hoverClasses = 'hover:bg-gray-100 dark:hover:bg-gray-700/50';

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
                        {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>}
                    </>
                )}
            </div>
            <div className="ml-3 flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                    <h3 className={`font-semibold truncate ${isGroup ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-white'}`}>{chat.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">{chat.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
        </div>
    );
};

const Message = ({ msg, isSent, isGroup }) => (
    <div className={`flex items-end gap-2 my-2 ${isSent ? 'justify-end' : 'justify-start'}`}>
        {!isSent && <Image src={msg.avatar} alt={msg.sender} width={32} height={32} className="w-8 h-8 rounded-full object-cover self-start" />}
        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${isSent ? 'bg-blue-600 text-white rounded-br-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-lg'}`}>
            {!isSent && isGroup && <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-1">{msg.sender}</p>}
            <p className="whitespace-pre-wrap">{msg.text}</p>
            <div className={`text-xs mt-1 text-right ${isSent ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>{msg.time}</div>
        </div>
    </div>
);


// --- COMPOSANT PRINCIPAL ---
export default function ChatClient({ initialChats, initialMessages, initialMembers }) {
    const t = useTranslations('chat');
    const [view, setView] = useState('list');
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);
    const [activeChat, setActiveChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, activeChat]);
    
    const handleSendMessage = () => { /* ... */ };
    const startNewChat = (member) => { /* ... */ };

    const filteredChats = chats.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredMembers = initialMembers.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) && !chats.some(c => c.id === m.id));

    // Styles pour les bordures subtiles
    const borderStyle = "border-gray-200/80 dark:border-white/10";

    return (
        <div className={`flex h-[calc(100vh-150px)] bg-white dark:bg-gray-800/60 rounded-2xl shadow-2xl border ${borderStyle} overflow-hidden`}>
            
            {/* --- COLONNE DE GAUCHE (LISTE DES CHATS) --- */}
            <div className={`w-full md:w-1/3 xl:w-1/4 border-r ${borderStyle} flex-col transition-transform duration-300 ${view === 'chat' && !activeChat ? 'flex' : view === 'list' ? 'flex' : 'hidden md:flex'}`}>
                <div className={`p-4 border-b ${borderStyle}`}><div className="relative"><input type="text" placeholder={t("chat.search_placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /></div></div>
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
                        <motion.div key={activeChat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col bg-white dark:bg-gray-800">
                            <header className={`flex items-center justify-between p-3 border-b ${borderStyle} flex-shrink-0`}>
                                <div className="flex items-center gap-3"><button onClick={() => setActiveChat(null)} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><ArrowLeft /></button>{activeChat.isGroup ? <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"><Users size={20} className="text-white"/></div> : <Image src={activeChat.avatar} alt={activeChat.name} width={40} height={40} className="w-10 h-10 rounded-full" />}<div><h2 className="font-semibold text-lg">{activeChat.name}</h2>{activeChat.online && <p className="text-xs text-green-500">En ligne</p>}</div></div>
                                <div className="flex items-center gap-1"><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Phone size={20}/></button><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Video size={20}/></button><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><MoreVertical size={20}/></button></div>
                            </header>
                            <div className="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800/50">{messages[activeChat.id]?.map(msg => <Message key={msg.id} msg={msg} isSent={msg.sender === 'Vous'} isGroup={activeChat.isGroup} />)}<div ref={messagesEndRef} /></div>
                            <footer className={`p-3 border-t ${borderStyle} bg-white dark:bg-gray-800 flex-shrink-0`}><div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-2"><input type="text" placeholder={t("chat.message_placeholder")} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} className="flex-grow px-2 py-2 bg-transparent focus:outline-none" /><button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"><Paperclip size={20}/></button><button onClick={handleSendMessage} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400" disabled={!newMessage.trim()}><Send size={18} /></button></div></footer>
                        </motion.div>
                    ) : view === 'search' ? (
                        <motion.div key="search-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col p-4 bg-white dark:bg-gray-800">
                           {/* ... Vue de recherche ... */}
                        </motion.div>
                    ) : (
                        <motion.div key="placeholder-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50">
                            <div className="flex flex-col items-center gap-2"><MessageCircle size={48} className="text-gray-300 dark:text-gray-600" /><p className="font-medium">{t("chat.select_conversation")}</p></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
```

### CreateEventModal

- **Fichier**: `src\components\syndicate-space\section-evenements\CreateEventModal.jsx`
- **Props**: `isOpen, onClose, onCreateEvent`
- **Hooks**: useTranslations
```jsx
// src/components/syndicate-space/section-evenements/CreateEventModal.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import EventForm from './EventForm';

export default function CreateEventModal({ isOpen, onClose, onCreateEvent }) {
    const t = useTranslations('event_form');

    const handleFormSubmit = async (data) => {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        onCreateEvent(data); // Appelle la fonction du parent pour ajouter l'événement
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('event_form.modal_title')}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <EventForm onSubmit={handleFormSubmit} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### EventCard

- **Fichier**: `src\components\syndicate-space\section-evenements\EventCard.jsx`
- **Props**: `event, onShowParticipants, onUpdateEvent`
- **Hooks**: useState, useTranslations
```jsx
// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { Calendar, MapPin, Clock, User, Users, Heart, Share2 } from 'lucide-react';

export default function EventCard({ event, onShowParticipants, onUpdateEvent }) {
    const t = useTranslations('common');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isParticipating, setIsParticipating] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleParticipate = () => {
        const newParticipationState = !isParticipating;
        setIsParticipating(newParticipationState);
        // On met à jour l'événement parent pour refléter le changement de participants
        const updatedParticipants = newParticipationState
            ? [...event.participants, { name: "Vous" }]
            : event.participants.filter(p => p.name !== "Vous");
        
        onUpdateEvent({ ...event, participants: updatedParticipants });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div layout variants={cardVariants} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 w-full mx-auto transform transition-all duration-300 hover:shadow-2xl dark:shadow-black/20">
            {event.isUpcoming && <div className="absolute top-4 right-4 z-10"><span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">{t("events_page.upcoming")}</span></div>}
            
            <div className="p-6 sm:p-8">
                {/* ... (Header avec auteur, titre, date) ... */}
                 <div className="flex items-start mb-6">
                    <Image src={event.author.profileImage} alt={event.author.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50" />
                    <div className="ml-4 flex-grow"><h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400"><User className="w-4 h-4 mr-1.5 text-blue-500"/><span className="font-medium">{event.author.name}</span><span className="mx-2">•</span><Calendar className="w-4 h-4 mr-1.5 text-blue-500"/><span>{event.startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span></div>
                    </div>
                 </div>

                {/* Description extensible */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{isExpanded ? event.description : `${event.description.slice(0, 150)}...`}
                    <button onClick={() => setIsExpanded(!isExpanded)} className="ml-2 text-blue-500 hover:underline font-medium">{isExpanded ? t("events_page.see_less") : t("events_page.see_more")}</button>
                </p>

                {/* ... (Infos: Heure, Lieu) ... */}
                
                {event.images && event.images[0] && <div className="relative rounded-xl overflow-hidden mb-6 h-64"><Image src={event.images[0]} alt="Event" fill style={{ objectFit: 'cover' }} /></div>}

                {/* Barre d'actions */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={() => onShowParticipants(event)} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600"><Users className="w-5 h-5 mr-2"/> <span className="font-medium">{event.participants.length} {t("participants")}</span></button>
                    <div className="flex items-center gap-2"><motion.button onClick={() => setIsLiked(!isLiked)} className={`p-2 rounded-full ${isLiked ? 'text-red-500 bg-red-100' : 'text-gray-400 hover:text-red-500 hover:bg-red-100'}`}><Heart fill={isLiked ? "currentColor" : "none"} /></motion.button><motion.button className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-100"><Share2 /></motion.button></div>
                </div>

                {/* Bouton Participer */}
                <motion.button onClick={handleParticipate} className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2 ${isParticipating ? 'bg-green-600' : 'bg-blue-600'}`} whileHover={{ scale: 1.02 }}><Calendar/>{isParticipating ? t("events_page.participating") : t("events_page.participate_button")}</motion.button>
            </div>
        </motion.div>
    );
};
```

### EventForm

- **Fichier**: `src\components\syndicate-space\section-evenements\EventForm.jsx`
- **Props**: `onSubmit, initialData =`
- **Hooks**: useForm, useTranslations
```jsx
// src/components/syndicate-space/section-evenements/EventForm.jsx
"use client";

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, Type, FileText, Image as ImageIcon, Send } from 'lucide-react';
import { FileUploader } from '@/components/forms/adhesion/file-uploader';

export default function EventForm({ onSubmit, initialData = {}, isLoading }) {
    const t = useTranslations('event_form');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: initialData.title || '',
            description: initialData.description || '',
            location: initialData.location || '',
            // Les dates doivent être au format YYYY-MM-DDTHH:mm pour les inputs datetime-local
            startDate: initialData.startDate ? new Date(initialData.startDate).toISOString().slice(0, 16) : '',
            endDate: initialData.endDate ? new Date(initialData.endDate).toISOString().slice(0, 16) : '',
        }
    });

    const inputClasses = "w-full p-3 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4 sm:p-6">
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
                    <input type="datetime-local" {...register("startDate", { required: t('errors.required_field') })} className={inputClasses} />
                    {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>}
                </div>
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Clock className="mr-2"/>{t('event_form.end_date')} *</label>
                    <input type="datetime-local" {...register("endDate", { required: t('errors.required_field') })} className={inputClasses} />
                    {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>}
                </div>
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><MapPin className="mr-2"/>{t('event_form.location')} *</label>
                <input {...register("location", { required: t('errors.required_field') })} placeholder={t('event_form.location_placeholder')} className={inputClasses} />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>

            <div>
                <FileUploader label={t('event_form.image')} icon={<ImageIcon />} onFileSelect={(file) => console.log(file)} />
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

- **Fichier**: `src\components\syndicate-space\section-evenements\EventsFeed.jsx`
- **Props**: `initialEvents`
- **Hooks**: useState, useTranslations
```jsx
// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus } from 'lucide-react';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';
import CreateEventModal from './CreateEventModal';

export default function EventsFeed({ initialEvents }) {
    const t = useTranslations('common');
    const [events, setEvents] = useState(initialEvents);
    const [selectedEventForParticipants, setSelectedEventForParticipants] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    const handleCreateEvent = (newEventData) => {
        const newEvent = {
            id: Date.now(),
            ...newEventData,
            author: { name: "Vous", profileImage: "https://i.pravatar.cc/150?img=1" },
            isUpcoming: new Date(newEventData.startDate) > new Date(),
            participants: [{ name: "Vous" }],
            images: newEventData.image ? [newEventData.image] : [],
        };
        setEvents([newEvent, ...events]);
        setIsCreateModalOpen(false);
        toast.success(t('event_form.success_toast'));
    };

    return (
        <div>
            {/* === LE BOUTON EST MAINTENANT ICI === */}
            <div className="mb-8 flex justify-end">
                <button 
                    onClick={() => setIsCreateModalOpen(true)} 
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 flex items-center gap-2 transition-transform transform hover:scale-105"
                >
                    <Plus size={20} />
                    {t('events_page.create_button')}
                </button>
            </div>
            {/* === FIN DU BOUTON === */}

            <AnimatePresence>
                {events.map((event) => (
                    <EventCard 
                        key={event.id} 
                        event={event} 
                        onShowParticipants={setSelectedEventForParticipants}
                        onUpdateEvent={handleUpdateEvent}
                    />
                ))}
            </AnimatePresence>

            <ParticipantsModal 
                event={selectedEventForParticipants} 
                onClose={() => setSelectedEventForParticipants(null)} 
            />
            
            <CreateEventModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreateEvent={handleCreateEvent}
            />
        </div>
    );
}
```

### ParticipantsModal

- **Fichier**: `src\components\syndicate-space\section-evenements\ParticipantsModal.jsx`
- **Props**: `event, onClose`
- **Hooks**: useTranslations
```jsx
// src/components/syndicate-space/section-evenements/ParticipantsModal.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from "next-intl";
import { X, Users } from 'lucide-react';

export default function ParticipantsModal({ event, onClose }) {
    const t = useTranslations('events_page');

    return (
        <AnimatePresence>
            {event && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2"><Users />{t("events_page.participants_title")}</h3>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                            {event.participants.map((participant, index) => (
                                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">{participant.name.charAt(0)}</div>
                                    <span className="ml-3 font-medium text-gray-700 dark:text-gray-200">{participant.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### CommentModal

- **Fichier**: `src\components\syndicate-space\section-exprimer\CommentModal.jsx`
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
                        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center flex-shrink-0">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Publication de {post.author.name}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div>
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{post.content}</p>
                                {post.image && <div className="mt-4 rounded-lg overflow-hidden"><Image src={post.image} alt="Post content" width={600} height={400} className="w-full h-auto" /></div>}
                            </div>
                            <hr className="dark:border-gray-700"/>
                            <div className="space-y-6">
                                {comments.map(comment => <Comment key={comment.id} comment={comment} onReply={handleReply} />)}
                            </div>
                        </div>

                        <div className="relative p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl flex-shrink-0">
                            {replyTo && (
                                <div className="mb-2 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex justify-between items-center text-xs">
                                    <span className="text-blue-600 dark:text-blue-400">Répondre à <strong>{replyTo.author.name}</strong></span>
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
                                        className="w-full p-3 pr-28 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-200"
                                        onKeyPress={(e) => { if (e.key === 'Enter') handleSubmitComment(); }}
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                        <button onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full"><Smile className="w-5 h-5 text-yellow-500" /></button>
                                        <button onClick={() => fileInputRef.current?.click()} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full"><ImageIcon className="w-5 h-5 text-green-500" /></button>
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

### Comment

- **Fichier**: `src\components\syndicate-space\section-exprimer\comments\Comment.jsx`
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
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">{comment.author.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 whitespace-pre-wrap">{comment.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400 px-2">
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
                            className="ml-4 mt-4 space-y-4 border-l-2 border-gray-200 dark:border-gray-600 pl-4"
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

- **Fichier**: `src\components\syndicate-space\section-exprimer\comments\EmojiPicker.jsx`
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
            className="absolute bottom-14 left-0 bg-white dark:bg-gray-700 shadow-xl rounded-2xl p-2 grid grid-cols-4 gap-1 border dark:border-gray-600 z-10"
        >
            {emojis.map((emoji) => (
                <motion.button
                    key={emoji}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onEmojiClick(emoji)}
                    className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg transition-colors"
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

- **Fichier**: `src\components\syndicate-space\section-exprimer\comments\Reply.jsx`
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
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-3 py-2">
                    <p className="font-semibold text-xs text-gray-800 dark:text-gray-100">{reply.author.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-0.5 whitespace-pre-wrap">{reply.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400 px-2">
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

### NewPostModal

- **Fichier**: `src\components\syndicate-space\section-exprimer\NewPostModal.jsx`
- **Props**: `isOpen, onClose, onNewPost`
- **Hooks**: useState, useRef, useTranslations
```jsx
"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, X, Camera } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from 'next/image';

export default function NewPostModal({ isOpen, onClose, onNewPost }) {
    const t = useTranslations('express_page');
    const [content, setContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);

    const handlePublish = () => {
        if (content.trim() || imageFile) {
            onNewPost({ content, imageFile });
            resetAndClose();
        }
    };

    const resetAndClose = () => {
        setContent('');
        setImagePreview(null);
        setImageFile(null);
        onClose();
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={resetAndClose}>
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4"><h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('express_page.new_post_modal_title')}</h2><button onClick={resetAndClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X /></button></div>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder={t('express_page.post_placeholder')} className="w-full h-32 p-3 border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 rounded-xl focus:outline-none resize-none transition-all"></textarea>
                        {imagePreview && (<div className="mt-4 relative rounded-xl overflow-hidden"><Image src={imagePreview} alt="Aperçu" width={500} height={300} className="w-full h-auto object-cover" /><button onClick={() => setImagePreview(null)} className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"><X size={16} /></button></div>)}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-1"><button onClick={() => fileInputRef.current?.click()} className="p-2 text-green-500 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-full"><ImageIcon /></button><input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" /></div>
                            <div className="flex space-x-3"><button onClick={resetAndClose} className="px-5 py-2 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">{t('express_page.cancel_button')}</button><button onClick={handlePublish} disabled={!content.trim() && !imageFile} className="px-5 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"><Send size={16} /> {t('express_page.publish_button')}</button></div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

### Post

- **Fichier**: `src\components\syndicate-space\section-exprimer\Post.jsx`
- **Props**: `post, onUpdatePost`
- **Hooks**: useEffect, useState, useTranslations
```jsx
// src/components/syndicate-space/section-exprimer/Post.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Flag, Heart, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import CommentModal from "./CommentModal";
import timeAgo from "@/lib/utils/timeAgo"; // On supposera un utilitaire pour le temps

/**
 * Affiche une publication complète avec ses actions et gère sa modale de commentaires.
 * @param {object} post - L'objet de la publication.
 * @param {function} onUpdatePost - Callback pour mettre à jour le post dans la liste parente.
 */
export default function Post({ post, onUpdatePost }) {
    const t = useTranslations('express_page');
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    
    // Pour que le timestamp se mette à jour sans re-render de toute la page
    const [displayTimestamp, setDisplayTimestamp] = useState(() => timeAgo(post.createdAt));
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTimestamp(timeAgo(post.createdAt));
        }, 60000); // Met à jour chaque minute
        return () => clearInterval(interval);
    }, [post.createdAt]);

    const handleLike = () => {
        setLiked(!liked);
        // Simule la mise à jour des données
        onUpdatePost({
            ...post,
            likes: post.likes + (liked ? -1 : 1),
        });
    };

    const handleAddComment = (newComment) => {
        onUpdatePost({
            ...post,
            comments: [...post.comments, newComment],
        });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden mb-8 hover:shadow-2xl dark:shadow-black/20 transition-all duration-300 transform hover:scale-[1.01]"
            >
                <div className="p-6">
                    {/* --- Header du Post --- */}
                    <div className="flex items-center mb-6">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={48} height={48}
                            className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50"
                        />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{post.author.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-1.5 text-blue-500" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-full transition-colors duration-200 ${bookmarked ? 'text-blue-500 bg-blue-100 dark:bg-blue-900' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'}`}>
                            <Bookmark className="w-6 h-6" fill={bookmarked ? "currentColor" : "none"} />
                        </motion.button>
                    </div>

                    {/* --- Contenu du Post --- */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>

                    {post.image && (
                        <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                            <Image src={post.image} alt="Contenu de la publication" width={800} height={600} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    {/* --- Stats (Likes/Commentaires) --- */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2"><Heart className="w-4 h-4 text-red-500" /><span>{post.likes} {t('common.like', {count: post.likes})}</span></div>
                        <span>{post.comments.length} {t('common.comment', {count: post.comments.length})}</span>
                    </div>

                    {/* --- Barre d'actions --- */}
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700 pt-4">
                        <motion.button whileHover={{ scale: 1.05 }} onClick={handleLike} className={`flex items-center px-4 py-2 rounded-xl w-full justify-center ${liked ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-all`}>
                            <Heart className="w-5 h-5 mr-2" fill={liked ? "currentColor" : "none"} />{t('common.like')}
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsCommentModalOpen(true)} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                            <MessageCircle className="w-5 h-5 mr-2" />{t('common.comment')}
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                            <Flag className="w-5 h-5 mr-2" />{t('common.report')}
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <CommentModal
                post={post}
                isOpen={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                onAddComment={handleAddComment}
            />
        </>
    );
}
```

### Post

- **Fichier**: `src\components\syndicate-space\section-exprimer\PublicationsFeed.jsx`
- **Props**: `post, onUpdatePost, syndicatId`
- **Hooks**: useEffect, useState, useTranslations
```jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Flag, Heart, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from 'react-hot-toast';
import CommentModal from "./CommentModal";
import timeAgo from "@/lib/utils/timeAgo";
import { likePostAPI, addCommentAPI } from "@/lib/api/posts";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function Post({ post, onUpdatePost, syndicatId }) {
    const t = useTranslations('express_page');
    const [liked, setLiked] = useState(false); // A améliorer avec l'état réel de l'utilisateur
    const [bookmarked, setBookmarked] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [displayTimestamp, setDisplayTimestamp] = useState(() => timeAgo(post.createdAt));

    useEffect(() => {
        const interval = setInterval(() => setDisplayTimestamp(timeAgo(post.createdAt)), 60000);
        return () => clearInterval(interval);
    }, [post.createdAt]);

    const handleLike = async () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        onUpdatePost({ ...post, likes: post.likes + (newLikedState ? 1 : -1) });
        try {
            await likePostAPI(syndicatId, post.postId, newLikedState);
        } catch (error) {
            toast.error("L'action a échoué.");
            setLiked(!newLikedState);
            onUpdatePost({ ...post, likes: post.likes });
        }
    };

    const handleAddComment = async (commentData) => {
        try {
            await addCommentAPI(syndicatId, post.postId, commentData.content);
            // Idéalement, l'API devrait renvoyer le nouveau post mis à jour.
            // Pour l'instant, on met à jour l'UI de manière optimiste.
            onUpdatePost({ ...post, comments: [...post.comments, commentData] });
            toast.success("Commentaire ajouté !");
        } catch (error) {
            toast.error("Impossible d'ajouter le commentaire.");
        }
    };
    
    const imageUrl = post.imageUrl ? `${STATIC_FILES_URL}${post.imageUrl}` : null;
    const authorAvatarUrl = post.authorAvatarUrl ? `${STATIC_FILES_URL}${post.authorAvatarUrl}` : "https://i.pravatar.cc/150";

    return (
        <>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden mb-8 hover:shadow-2xl dark:shadow-black/20">
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <Image src={authorAvatarUrl} alt={post.authorName} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50" />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{post.authorName}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-1.5 text-blue-500" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                        <motion.button onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-full transition-colors ${bookmarked ? 'text-blue-500 bg-blue-100 dark:bg-blue-900' : 'text-gray-400 hover:bg-blue-50'}`}><Bookmark fill={bookmarked ? "currentColor" : "none"} /></motion.button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>
                    {imageUrl && <div className="rounded-xl overflow-hidden mb-6 shadow-lg"><Image src={imageUrl} alt="Contenu" width={800} height={600} className="w-full h-auto object-cover" /></div>}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{post.likes} {t('common.like', {count: post.likes})}</span>
                        <span>{post.comments.length} {t('common.comment', {count: post.comments.length})}</span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700 pt-4">
                        <button onClick={handleLike} className={`flex items-center px-4 py-2 rounded-xl w-full justify-center ${liked ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'}`}><Heart className="w-5 h-5 mr-2" fill={liked ? "currentColor" : "none"} />{t('common.like')}</button>
                        <button onClick={() => setIsCommentModalOpen(true)} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100"><MessageCircle className="w-5 h-5 mr-2" />{t('common.comment')}</button>
                        <button className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100"><Flag className="w-5 h-5 mr-2" />{t('common.report')}</button>
                    </div>
                </div>
            </motion.div>
            <CommentModal post={post} isOpen={isCommentModalOpen} onClose={() => setIsCommentModalOpen(false)} onAddComment={handleAddComment} />
        </>
    );
}
```

### MembersClient

- **Fichier**: `src\components\syndicate-space\section-membres\MembersClient.jsx`
- **Props**: `initialMembers, initialRequests, branches, stats, syndicatId`
- **Hooks**: useState, useMemo, useTranslations
```jsx
"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Users, UserPlus, Search, Filter, Check, X, AlertTriangle, UserX, Shield, UserCheck } from 'lucide-react';
import StatCard from './StatCard';
import TabButton from './TabButton';
import { respondToAdhesionAPI } from '@/lib/api/membership';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import Image from 'next/image';

export default function MembersClient({ initialMembers, initialRequests, branches, stats, syndicatId }) {
    const t = useTranslations('members_page');
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState(initialMembers);
    const [requests, setRequests] = useState(initialRequests);
    
    const filteredMembers = useMemo(() => members.filter(member => member.userName.toLowerCase().includes(searchTerm.toLowerCase())), [members, searchTerm]);
    const filteredRequests = useMemo(() => requests.filter(req => req.userName.toLowerCase().includes(searchTerm.toLowerCase())), [requests, searchTerm]);

    const handleResponse = async (userId, branchId, isApproved) => {
        const action = isApproved ? "d'approuver" : "de rejeter";
        const result = await Swal.fire({
            title: `Êtes-vous sûr de vouloir ${action} cette demande ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, continuer !',
            cancelButtonText: 'Annuler'
        });

        if (result.isConfirmed) {
            const toastId = toast.loading("Traitement en cours...");
            try {
                await respondToAdhesionAPI(syndicatId, branchId, userId, isApproved);
                setRequests(prev => prev.filter(req => req.userId !== userId));
                toast.success("La demande a été traitée.", { id: toastId });
                // Idéalement, on rechargerait la liste des membres pour voir le nouveau membre
            } catch (error) {
                toast.error("Une erreur est survenue.", { id: toastId });
            }
        }
    };
    
    const MembersList = ({ data }) => (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Membre</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Rôle</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Statut</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <AnimatePresence>
                            {data.map(member => (
                                <motion.tr key={member.userId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <td className="px-6 py-4 whitespace-nowrap"><div className="flex items-center">
                                        {member.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${member.userAvatarUrl}`} alt={member.userName} width={44} height={44} className="w-11 h-11 rounded-full object-cover"/> : <SyndicatDefaultAvatar name={member.userName} size={44}/>}
                                        <div className="ml-4"><div className="text-sm font-medium text-gray-900 dark:text-white">{member.userName}</div></div>
                                    </div></td>
                                    <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-medium rounded-full ${member.role === 'ROLE_PRESIDENT' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}>{member.role.replace('ROLE_', '')}</span></td>
                                    <td className="px-6 py-4"><span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${member.status === 'ACTIVE' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-yellow-100 text-yellow-800'}`}>{member.status}</span></td>
                                    <td className="px-6 py-4"><button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"><UserX size={16}/></button></td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const MembershipRequestsList = ({ data }) => (
        <div className="space-y-6">
            <AnimatePresence>
                {data.map(req => (
                    <motion.div key={req.userId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="flex items-center"><div className="w-16 h-16 flex-shrink-0">{req.userAvatarUrl ? <Image src={`${STATIC_FILES_URL}${req.userAvatarUrl}`} alt={req.userName} width={64} height={64} className="rounded-xl object-cover"/> : <SyndicatDefaultAvatar name={req.userName} size={64} className="rounded-xl"/>}</div><div className="ml-4"><h3 className="text-xl font-semibold text-gray-800 dark:text-white">{req.userName}</h3><p className="text-sm text-gray-500 dark:text-gray-400">Demande le {new Date(req.requestTimestamp).toLocaleDateString('fr-FR')}</p></div></div>
                            <div className="flex space-x-3 self-start sm:self-center flex-shrink-0">
                                <motion.button onClick={() => handleResponse(req.userId, branches[0].id, true)} className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"><Check className="w-5 h-5"/></motion.button>
                                <motion.button onClick={() => handleResponse(req.userId, branches[0].id, false)} className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"><X className="w-5 h-5"/></motion.button>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-l-4 border-blue-400"><p className="text-gray-600 dark:text-gray-300 italic">"{req.motivation}"</p></div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{t('members_page.title')}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{t('members_page.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={Users} value={stats.total.toLocaleString()} label="Membres au total" color="border-blue-500"/>
                <StatCard icon={UserCheck} value={stats.active.toLocaleString()} label="Membres actifs" color="border-green-500"/>
                <StatCard icon={UserPlus} value={stats.pending.toLocaleString()} label="Demandes en attente" color="border-yellow-500"/>
            </div>

            <div>
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div className="flex space-x-2 border border-gray-200 dark:border-gray-700 rounded-xl p-1 bg-gray-50 dark:bg-gray-800">
                        <TabButton active={activeTab === 'members'} icon={Users} label={t('members_page.tab_members')} onClick={() => setActiveTab('members')}/>
                        <TabButton active={activeTab === 'requests'} icon={UserPlus} label={`${t('members_page.tab_requests')} (${requests.length})`} onClick={() => setActiveTab('requests')}/>
                    </div>
                    <div className="relative flex-1 min-w-[250px]"><input type="text" placeholder={t("members_page.search_placeholder")} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /></div>
                </div>
                <AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{activeTab === 'members' ? <MembersList data={filteredMembers} /> : <MembershipRequestsList data={filteredRequests} />}</motion.div></AnimatePresence>
            </div>
        </div>
    );
}
```

### StatCard

- **Fichier**: `src\components\syndicate-space\section-membres\StatCard.jsx`
- **Props**: `icon: Icon, value, label, color`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label, color }) {
    return (
        <motion.div
            className={`bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border-l-4 ${color}`}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center">
                <div className={`p-3 rounded-xl ${color.replace('border-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
                    <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
                </div>
                <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </div>
            </div>
        </motion.div>
    );
}
```

### TabButton

- **Fichier**: `src\components\syndicate-space\section-membres\TabButton.jsx`
- **Props**: `active, icon: Icon, label, onClick`
- **Hooks**: 
```jsx
"use client";

import { motion } from 'framer-motion';

export default function TabButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm ${
                active 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-900/60'
            }`}
            whileHover={{ scale: 1.03 }}
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

### SyndicateHeader

- **Fichier**: `src\components\syndicate-space\SyndicateHeader.jsx`
- **Props**: `syndicateData, onSidebarToggle, onNotificationToggle`
- **Hooks**: 
```jsx
"use client";

import { Bell, LogOut, Menu } from 'lucide-react';
import { Link } from '@/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '../shared/SyndicatDefaultAvatar';
import Image from 'next/image';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle }) {
    
    const imageUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-30 sticky top-0 border-b border-gray-200/80 dark:border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4">
                        <button onClick={onSidebarToggle} className="text-gray-600 dark:text-gray-300 lg:hidden">
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center">
                            {imageUrl ? (
                                <Image src={imageUrl} alt={`${syndicateData.name} logo`} width={32} height={32} className="h-8 w-8 rounded-md object-cover" />
                            ) : (
                                <SyndicatDefaultAvatar name={syndicateData.name} size={32} className="rounded-md"/>
                            )}
                            
                            <h1 className="ml-3 text-xl font-bold text-gray-800 dark:text-white truncate">
                                {syndicateData.name}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={onNotificationToggle} className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50">
                            <Bell size={22} className="text-gray-600 dark:text-gray-300" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800" />
                        </button>
                        <Link href="/home" className="p-2 rounded-full text-red-500 bg-red-100/60 dark:bg-red-900/50 hover:bg-red-100 dark:hover:bg-red-900" aria-label="Quitter l'espace syndicat">
                            <LogOut size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
```

### SyndicateNotificationsPanel

- **Fichier**: `src\components\syndicate-space\SyndicateNotificationsPanel.jsx`
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
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-800 shadow-2xl z-40 border-l dark:border-gray-700 flex flex-col"
                        aria-modal="true" role="dialog" aria-labelledby="notification-panel-title"
                    >
                        <div className="p-4 sm:p-6 border-b dark:border-gray-700 flex justify-between items-center flex-shrink-0">
                            <h3 id="notification-panel-title" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Bell /> {t('notifications.title')}
                            </h3>
                            <motion.button onClick={onClose} className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Fermer">
                                <X size={20} />
                            </motion.button>
                        </div>

                        {notifications.length > 0 ? (
                            <div className="flex-grow p-4 sm:p-6 space-y-4 overflow-y-auto">
                                {notifications.map((notification, index) => (
                                    <NotificationCard key={index} {...notification} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                                <Bell className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Aucune notification</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vous êtes à jour.</p>
                            </div>
                        )}
                        
                        <div className="p-4 sm:p-6 border-t dark:border-gray-700 flex-shrink-0">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
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

- **Fichier**: `src\components\syndicate-space\SyndicateSidebar.jsx`
- **Props**: `isCollapsed, onToggle, syndicateData`
- **Hooks**: useTranslations, usePathname, useParams
```jsx
"use client";

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { 
    Users, Calendar, MessageCircle, Vote,
    Home, ChevronLeft, ChevronRight, MessageSquare 
} from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import { usePathname, useParams } from 'next/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import Image from 'next/image';

export default function SyndicateSidebar({ isCollapsed, onToggle, syndicateData }) {
    const t = useTranslations('syndicate_space');
    const pathname = usePathname();
    const params = useParams();
    const { syndicatId } = params;

    if (!syndicateData) {
        return (
            <motion.nav
                animate={{ width: isCollapsed ? 80 : 280 }}
                className="hidden lg:flex bg-white/80 dark:bg-gray-800/50 flex-col z-10 border-r"
            >
                <div className="p-4 border-b animate-pulse">
                    <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                </div>
                <div className="flex-grow p-4 space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </motion.nav>
        );
    }
    
    const imageUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    const navItems = [
        { id: 'accueil', icon: Home, label: t('syndicate_space.sidebar.home'), route: '' },
        { id: 'membres', icon: Users, label: t('syndicate_space.sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('syndicate_space.sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('syndicate_space.sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('syndicate_space.sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('syndicate_space.sidebar.votes'), route: 'votes' },
    ];

    const buildLink = (route) => `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:flex bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm flex-col z-10 border-r border-gray-200/80 dark:border-white/10"
        >
            <div className={`p-4 flex items-center gap-4 border-b border-gray-200/80 dark:border-white/10 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center gap-2 overflow-hidden">
                        {imageUrl ? (
                             <Image src={imageUrl} alt={`${syndicateData.name} logo`} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                            <SyndicatDefaultAvatar name={syndicateData.name} size={40} />
                        )}
                        <span className="font-bold text-lg text-gray-800 dark:text-white truncate">Espace Membre</span>
                    </div>
                )}
                <motion.button onClick={onToggle} className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" aria-label={isCollapsed ? "Déplier" : "Replier"}>
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || (item.route !== '' && pathname.startsWith(fullPath));
                    
                    return (
                        <Link href={fullPath} key={item.id} passHref>
                            <motion.div
                                className={`relative group flex items-center w-full px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                                    isCollapsed ? 'justify-center' : ''
                                } ${
                                    isActive 
                                        ? 'text-blue-600 dark:text-blue-300' 
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                }`}
                                title={isCollapsed ? item.label : ''}
                            >
                                {isActive && (
                                    <motion.div layoutId="active-sidebar-indicator" className="absolute inset-0 bg-blue-50 dark:bg-blue-900/50 rounded-xl" transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
                                )}
                                
                                <div className="relative z-10 flex items-center">
                                    <item.icon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && (
                                        <span className="font-semibold truncate ml-3">{item.label}</span>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
```

### CreateSyndicateModal

- **Fichier**: `src\components\syndicats\CreateSyndicateModal.jsx`
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

- **Fichier**: `src\components\syndicats\MySyndicatesPage.jsx`
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
                        placeholder={t("syndicats.search_placeholder")}
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
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t("syndicats.empty_title")}</h3>
                        <p className="text-gray-600 mb-6">{t("syndicats.empty_description")}</p>
                        <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            {t("syndicats.create_button")}
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

- **Fichier**: `src\components\syndicats\SyndicateCard.jsx`
- **Props**: `syndicat`
- **Hooks**: useRouter, useTranslations
```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
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
        router.push(`/syndicat-space/${syndicatId}`);
    };

    const bannerUrl = syndicat.bannerUrl && syndicat.bannerUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.bannerUrl}` : "/placeholder-cover.jpg";
    const logoUrl = syndicat.logoUrl && syndicat.logoUrl.startsWith('/') ? `${STATIC_FILES_URL}${syndicat.logoUrl}` : null;

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
        >
            <div className="relative aspect-video">
                <Image src={bannerUrl} alt={syndicat.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.src = "/placeholder-cover.jpg"; }}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border-4 border-white dark:border-gray-800">
                        {logoUrl ? <Image src={logoUrl} alt={`${syndicat.name} logo`} width={80} height={80} className="rounded-full object-cover w-full h-full" /> : <SyndicatDefaultAvatar name={syndicat.name} size={72} />}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-12 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug h-14">
                    {syndicat.name}
                </h2>
                <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 my-4">
                    <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">{(syndicat.memberCount || 0).toLocaleString()} membres</span>
                    </div>
                    <BarChart2 className="h-5 w-5 text-gray-400 dark:text-gray-500" title="Tendance stable" />
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center font-semibold group-hover:from-blue-700 group-hover:to-indigo-700"
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccessSpace(syndicat.id)}
                    >
                        <span>{t("syndicats_page.access_space")}</span>
                        <ArrowRightCircle className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
```

### SyndicateHeader

- **Fichier**: `src\components\syndicats\SyndicateHeader.jsx`
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

- **Fichier**: `src\components\syndicats\SyndicateList.jsx`
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
                        placeholder={t("syndicats_page.search_placeholder")}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 transition-all text-lg"
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
                            <AlertCircle className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {searchTerm ? t("syndicats_page.empty_search_title") : t("syndicats_page.empty_list_title")}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {searchTerm ? t("syndicats_page.empty_search_desc") : t("syndicats_page.empty_list_desc")}
                            </p>
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <PlusCircle className="h-5 w-5 mr-2" />
                                {t("syndicats_page.create_button")}
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

