# 📦 Contexte Complet du Projet U-Gate Premium

> Généré automatiquement le 09/02/2026 08:15:06

---

## 📊 Informations Générales

- **Nom du projet**: U-Gate Premium
- **Type**: Application Next.js
- **Emplacement**: `D:\Projets\Scolaire\Reseau\New Version\ugate-user-frontend2\u-gate-premium`

---

## 🌳 Structure du Projet

```
D:\Projets\Scolaire\Reseau\New Version\ugate-user-frontend2\u-gate-premium
├── .gitignore
├── app/
│   ├──  api/
│   │   └── not-found.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── [locale]/
│       ├── (auth)/
│       │   ├── layout.tsx
│       │   ├── login/
│       │   │   └── page.tsx
│       │   └── register/
│       │       └── page.tsx
│       ├── (dashboard)/
│       │   ├── dashboard/
│       │   │   └── page.tsx
│       │   ├── join/
│       │   │   └── page.tsx
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── profile/
│       │   │   └── page.tsx
│       │   └── syndicate/
│       │       ├── compliance/
│       │       │   └── page.tsx
│       │       └── [id]/
│       │           ├── branch/
│       │           │   └── [branchId]/
│       │           │       ├── events/
│       │           │       │   └── page.tsx
│       │           │       ├── layout.tsx
│       │           │       ├── members/
│       │           │       │   └── page.tsx
│       │           │       ├── page.tsx
│       │           │       ├── publications/
│       │           │       │   └── page.tsx
│       │           │       └── votes/
│       │           │           └── page.tsx
│       │           ├── layout.tsx
│       │           ├── page.tsx
│       │           ├── profile/
│       │           │   └── page.tsx
│       │           └── select-branch/
│       │               └── page.tsx
│       ├── (public)/
│       │   ├── explorer/
│       │   │   ├── page.tsx
│       │   │   └── [id]/
│       │   │       └── page.tsx
│       │   └── layout.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── partner/
│           └── entry/
│               └── page.tsx
├── components/
│   ├── auth/
│   │   └── AuthLayout.tsx
│   ├── AuthAside.tsx
│   ├── dashboard/
│   │   ├── MemberSidebar.tsx
│   │   └── widgets/
│   │       ├── EventsWidget.tsx
│   │       └── NetworkWidget.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── profile/
│   │   └── DocumentCard.tsx
│   ├── providers/
│   │   └── QueryProvider.tsx
│   ├── sections/
│   │   ├── auth/
│   │   ├── Hero.tsx
│   │   └── landing/
│   │       ├── CallToAction.tsx
│   │       ├── Features.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Stats.tsx
│   │       └── TrustedPartners.tsx
│   ├── social/
│   │   ├── CommentInput.tsx
│   │   ├── CommentItem.tsx
│   │   ├── CreateEventModal.tsx
│   │   ├── CreatePost.tsx
│   │   ├── CreateVoteModal.tsx
│   │   ├── EventCard.tsx
│   │   ├── HorizontalPDFReader.tsx
│   │   ├── InfiniteFeed.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   ├── ReactionPicker.tsx
│   │   └── VoteCard.tsx
│   ├── syndicate/
│   │   ├── BranchSelector.tsx
│   │   └── SyndicateCard.tsx
│   └── ui/
│       ├── AdaptiveImage.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── FileUpload.tsx
│       ├── GlassCard.tsx
│       ├── Input.tsx
│       ├── Label.tsx
│       ├── Logo.tsx
│       ├── PDFViewer.tsx
│       └── UserAvatar.tsx
├── eslint.config.mjs
├── generate.js
├── i18n.ts
├── lib/
│   ├──  utils.ts
│   ├── axios.ts
│   ├── context/
│   │   └── SettingsContext.tsx
│   ├── hooks/
│   │   ├── useFeed.ts
│   │   └── useReaction.ts
│   ├── schemas.ts
│   ├── store/
│   │   └── authStore.ts
│   ├── store.ts
│   └── types/
│       └── api.ts
├── messages/
│   ├── de.json
│   ├── en.json
│   └── fr.json
├── middleware.ts
├── navigation.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── PROJECT_CONTEXT.md
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── routing.ts
├── tsconfig.json
└── types/
```

---

## 📋 Fichiers de Configuration


## 📄 `package.json`

```json
{
  "name": "u-gate-premium",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-label": "^2.1.8",
    "@tanstack/react-query": "^5.90.20",
    "@tanstack/react-query-devtools": "^5.91.3",
    "axios": "^1.13.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "emoji-picker-react": "^4.18.0",
    "framer-motion": "^12.29.2",
    "lucide-react": "^0.563.0",
    "next": "16.1.6",
    "next-intl": "^4.8.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "react-hot-toast": "^2.6.0",
    "react-intersection-observer": "^10.0.2",
    "tailwind-merge": "^3.4.0",
    "zod": "^4.3.6",
    "zustand": "^5.0.11"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

## 📄 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

## 📄 `README.md`

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

## 📄 `middleware.ts`

```typescript
import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';

export default createMiddleware(routing);

export const config = {
    // Matcher pour ignorer les fichiers API, _next, images, etc.
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

---

## 📂 Code Source

## 📄 `app\ api\not-found.ts`

```typescript

```

## 📄 `app\[locale]\(auth)\layout.tsx`

```tsx
import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import AuthAside from '@/components/AuthAside';
import { Link } from '@/navigation';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function AuthLayout({ children, params }: AuthLayoutProps) {
    // On attend les params (Next.js 15)
    await params;
    const t = await getTranslations('Auth');

    const animatedTexts = [
        t('aside.tagline1'),
        t('aside.tagline2'),
        t('aside.tagline3'),
        t('aside.tagline4'),
    ];

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-navy-950 overflow-hidden">
            {/* Colonne Gauche : Visuel & Animations (C'est ton AuthAside) */}
            <AuthAside animatedTexts={animatedTexts} />

            {/* Colonne Droite : Formulaire */}
            <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative z-10 bg-navy-950">
                {/* Bouton Retour Accueil */}
                <Link href="/" className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Retour
                </Link>

                {/* Conteneur du formulaire */}
                <div className="w-full max-w-md mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(auth)\login\page.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { toast } from 'react-hot-toast';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Link } from '@/navigation';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { LoginSchema, LoginInput } from '@/lib/schemas';
import { authApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';

// NOTE: Plus d'import de AuthLayout ici !

export default function LoginPage() {
    const t = useTranslations('Auth');
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit = async (data: LoginInput) => {
        setIsLoading(true);
        try {
            const response = await authApi.post('/api/auth/login', data);
            login(response.data);
            toast.success(t('login_success'));
            router.push('/dashboard'); // Redirection vers le futur dashboard
        } catch (error: any) {
            toast.error(error.response?.data?.message || t('login_error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* En-tête du formulaire */}
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                    {t('login_title')}
                </h1>
                <p className="text-slate-400">
                    {t('login_subtitle')}
                </p>
            </div>

            {/* Le Formulaire */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <Label htmlFor="identifier">{t('email_label')}</Label>
                    <Input
                        id="identifier"
                        type="text"
                        placeholder="email@example.com"
                        icon={Mail}
                        error={errors.identifier && t('errors.required')}
                        {...register('identifier')}
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="password" classname="mb-0">{t('password_label')}</Label>
                        <Link href="/forgot-password" classname="text-xs text-primary-400 hover:text-primary-300 transition-colors">
                            {t('forgot_password')}
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        icon={Lock}
                        error={errors.password && t('errors.required')}
                        {...register('password')}
                    />
                </div>

                <Button type="submit" className="w-full h-12 text-base" size="lg" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    {t('submit_login')}
                </Button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-800" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-navy-950 px-2 text-slate-500">
                            {t('or_continue_with')}
                        </span>
                    </div>
                </div>

                {/* Bouton Social (Exemple) */}
                <button type="button" className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 h-12 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Google
                </button>

                <div className="text-center text-sm text-slate-500 mt-8">
                    {t('no_account')}{' '}
                    <Link href="/register" className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                        {t('submit_register')}
                    </Link>
                </div>
            </form>
        </div>
    );
}
```

## 📄 `app\[locale]\(auth)\register\page.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { toast } from 'react-hot-toast';
import { Mail, Lock, User, Phone, Loader2 } from 'lucide-react';
import { Link } from '@/navigation';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RegisterSchema, RegisterInput } from '@/lib/schemas';
import { authApi } from '@/lib/axios';

export default function RegisterPage() {
    const t = useTranslations('Auth');
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: zodResolver(RegisterSchema)
    });

    const onSubmit = async (data: RegisterInput) => {
        setIsLoading(true);
        try {
            const apiData = {
                data: {
                    username: data.username,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    password: data.password,
                    service: "SYNDICAT",
                    roles: ["USER"]
                }
            };

            const formData = new FormData();
            formData.append('data', new Blob([JSON.stringify(apiData.data)], { type: 'application/json' }));

            await authApi.post('/api/auth/register', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success(t('register_success'));
            router.push('/login');
        } catch (error: any) {
            toast.error(error.response?.data?.message || t('register_error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{t('register_title')}</h1>
                <p className="text-slate-400">{t('register_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="firstName">{t('firstname_label')}</Label>
                        <Input id="firstName" icon={User} error={errors.firstName?.message} {...register('firstName')} />
                    </div>
                    <div>
                        <Label htmlFor="lastName">{t('lastname_label')}</Label>
                        <Input id="lastName" icon={User} error={errors.lastName?.message} {...register('lastName')} />
                    </div>
                </div>

                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" icon={User} error={errors.username?.message} {...register('username')} />
                </div>

                <div>
                    <Label htmlFor="email">{t('email_label')}</Label>
                    <Input id="email" type="email" icon={Mail} error={errors.email?.message} {...register('email')} />
                </div>

                <div>
                    <Label htmlFor="phone">{t('phone_label')}</Label>
                    <Input id="phone" icon={Phone} error={errors.phone?.message} {...register('phone')} />
                </div>

                <div>
                    <Label htmlFor="password">{t('password_label')}</Label>
                    <Input id="password" type="password" icon={Lock} error={errors.password?.message} {...register('password')} />
                </div>

                <div>
                    <Label htmlFor="confirmPassword">{t('confirm_password_label')}</Label>
                    <Input id="confirmPassword" type="password" icon={Lock} error={errors.confirmPassword?.message} {...register('confirmPassword')} />
                </div>

                <Button type="submit" className="w-full mt-4 h-12" size="lg" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    {t('submit_register')}
                </Button>

                <div className="text-center text-sm text-slate-500 mt-6">
                    {t('already_account')}{' '}
                    <Link href="/login" className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                        {t('submit_login')}
                    </Link>
                </div>
            </form>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\dashboard\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { Syndicate } from '@/lib/types/api';
import { useAuthStore } from '@/lib/store'; // Pour récupérer le nom de l'user
import { Link } from '@/navigation';
import {
    Loader2, ArrowRight, Building2, PlusCircle,
    ShieldCheck, User, Sparkles, Bell, Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardHomePage() {
    const t = useTranslations('Dashboard');
    const { user } = useAuthStore(); // Récupération de l'utilisateur
    const [mySyndicates, setMySyndicates] = useState<Syndicate[]>([]);
    const [loading, setLoading] = useState(true);

    // Date du jour formatée
    const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    useEffect(() => {
        const fetchMine = async () => {
            try {
                const response = await ugateApi.get('/syndicates/mine');
                setMySyndicates(response.data);
            } catch (error) {
                console.error("Erreur chargement syndicats", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMine();
    }, []);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-slate-50">
            <Loader2 className="animate-spin text-primary-800 w-12 h-12" />
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50/50">

            {/* --- 1. WELCOME HEADER (COCKPIT) --- */}
            <div className="bg-[#0f172a] pt-32 pb-24 relative overflow-hidden rounded-b-[3rem] shadow-2xl">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">
                            <Calendar size={14} /> {today}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                            Bonjour, {user?.firstName} !
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Voici ce qui se passe dans vos réseaux professionnels aujourd'hui.
                        </p>
                    </motion.div>

                    {/* Quick Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4"
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[120px]">
                            <div className="text-3xl font-black text-white mb-1">{mySyndicates.length}</div>
                            <div className="text-xs text-blue-200 font-bold uppercase">Adhésions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[120px]">
                            <div className="text-3xl font-black text-emerald-400 mb-1">OK</div>
                            <div className="text-xs text-emerald-200 font-bold uppercase">Statut</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- 2. CONTENU PRINCIPAL --- */}
            <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20 relative z-20">

                <div className="flex items-center gap-3 mb-8 ml-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
                        <Building2 size={18} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{t('my_syndicates')}</h2>
                </div>

                {mySyndicates.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mySyndicates.map((syndicate, index) => {
                            const userRole = syndicate.userRole || 'MEMBER';
                            const isAdmin = ['ADMIN', 'PRESIDENT', 'MODERATOR'].includes(userRole);
                            const targetUrl = isAdmin
                                ? `/syndicate/${syndicate.id}/select-branch`
                                : syndicate.userBranchId
                                    ? `/syndicate/${syndicate.id}/branch/${syndicate.userBranchId}`
                                    : `/syndicate/${syndicate.id}/select-branch`;

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={syndicate.id}
                                >
                                    <Link href={targetUrl} className="block h-full">
                                        <div className="group bg-white h-full rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col">

                                            {/* Header Card (Banner) */}
                                            <div className="h-24 bg-slate-50 relative overflow-hidden">
                                                {/* Pattern décoratif */}
                                                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                                                <div className="absolute top-4 right-4">
                                                     <span className={`text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm ${isAdmin ? 'bg-purple-100 text-purple-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                                        {isAdmin ? <ShieldCheck size={12} /> : <User size={12} />}
                                                         {userRole}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Logo Flottant */}
                                            <div className="px-8 -mt-10 relative z-10">
                                                <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-3xl font-black text-slate-900 shrink-0">
                                                    {syndicate.documents?.logoUrl ? (
                                                        <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover rounded-2xl" alt="Logo" />
                                                    ) : (
                                                        syndicate.name.charAt(0)
                                                    )}
                                                </div>
                                            </div>

                                            {/* Info Syndicat */}
                                            <div className="p-8 pt-4 flex-1 flex flex-col">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1">
                                                    {syndicate.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 mb-6 line-clamp-2 font-medium leading-relaxed">
                                                    {syndicate.description || "Espace membre actif et sécurisé."}
                                                </p>

                                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accéder</span>
                                                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-lg">
                                                        <ArrowRight size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}

                        {/* Card "Explorer" Premium */}
                        <Link href="/explorer" className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="h-full min-h-[300px] border-2 border-dashed border-slate-300 rounded-[2rem] flex flex-col items-center justify-center p-8 text-slate-400 hover:border-blue-400 hover:bg-blue-50/30 transition-all group cursor-pointer bg-slate-50"
                            >
                                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-blue-600 transition-all">
                                    <PlusCircle size={32} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-600 mb-1 group-hover:text-blue-700">Rejoindre un autre syndicat</h3>
                                <p className="text-sm text-center max-w-[200px] text-slate-400">Parcourez le réseau pour trouver de nouvelles opportunités.</p>
                            </motion.div>
                        </Link>
                    </div>
                ) : (
                    /* État vide (Aucun syndicat rejoint) */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />

                        <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600">
                            <Sparkles size={48} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">{t('no_syndicates')}</h2>
                        <p className="text-slate-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                            Votre espace est vide pour le moment. Rejoignez une communauté de professionnels pour accéder aux services, votes et événements.
                        </p>
                        <Link href="/explorer">
                            <button className="inline-flex items-center px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1">
                                {t('explore_cta')} <ArrowRight size={20} className="ml-3" />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\join\page.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import FileUpload from '@/components/ui/FileUpload';
import { toast } from 'react-hot-toast';
import {
    Loader2,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    ChevronLeft,
    UserCheck,
    FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/ utils';

export default function JoinSyndicatePage() {
    const searchParams = useSearchParams();
    const t = useTranslations('Membership');
    const { user, userType } = useAuthStore();

    const syndicatId = searchParams.get('syndicat');
    const branchId = searchParams.get('branch');

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);

    const [motivation, setMotivation] = useState('');
    const [docs, setDocs] = useState<{ [key: string]: File | null }>({
        cniRecto: null,
        cniVerso: null,
        license: null,
        cv: null
    });

    const isPartner = userType === 'PARTNER';

    const handleSubmit = async () => {
        if (!motivation || !syndicatId || !branchId) {
            toast.error("Veuillez remplir tous les champs");
            return;
        }

        setLoading(true);
        try {
            // Note: Envoi de la demande d'adhésion simple selon le swagger
            // Pour l'envoi des fichiers réels, cela se fait généralement via l'API de Compliance
            await ugateApi.post(`/syndicates/${syndicatId}/memberships/request`, {
                branchId: branchId,
                motivation: motivation
            });

            setSuccess(true);
            toast.success(t('success_title'));
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la soumission");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center"
                >
                    <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('success_title')}</h1>
                    <p className="text-slate-500 leading-relaxed mb-10">{t('success_message')}</p>
                    <Button onClick={() => window.location.href = '/dashboard'} className="w-full h-14 rounded-2xl bg-primary-800 hover:bg-primary-900 text-base font-bold transition-all shadow-xl">
                        Accéder à mon espace
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header & Stepper */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{t('title')}</h1>
                        <p className="text-slate-500 font-medium">{t('subtitle')}</p>
                    </div>

                    <div className="flex items-center bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-500",
                                    step === s ? "bg-primary-800 text-white shadow-lg" :
                                        step > s ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
                                )}>
                                    {step > s ? <CheckCircle2 size={20} /> : s}
                                </div>
                                {s < 3 && <div className="w-8 h-[2px] bg-slate-100 mx-2" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-16">
                        <AnimatePresence mode="wait">

                            {/* ÉTAPE 1 : INFOS PERSONNELLES */}
                            {step === 1 && (
                                <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary-50 text-primary-600 rounded-2xl">
                                            <UserCheck size={28} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">{t('steps.personal')}</h2>
                                            <p className="text-slate-500">Profil vérifié via TraMaSys Auth</p>
                                        </div>
                                    </div>

                                    {isPartner && (
                                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
                                            <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                                            <p className="text-sm text-blue-900 leading-relaxed font-medium">{t('partner_notice')}</p>
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 ml-1">
                                                {t('firstname_label')} & {t('lastname_label')}
                                            </label>
                                            <div className="relative">
                                                <Input
                                                    value={`${user?.firstName || ''} ${user?.lastName || ''}`}
                                                    disabled
                                                    className="bg-slate-100 border-slate-200 text-slate-900 font-semibold opacity-100 cursor-not-allowed shadow-inner"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                    <ShieldCheck size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 ml-1">
                                                {t('email_label')}
                                            </label>
                                            <div className="relative">
                                                <Input
                                                    value={user?.email || ''}
                                                    disabled
                                                    className="bg-slate-100 border-slate-200 text-slate-900 font-semibold opacity-100 cursor-not-allowed shadow-inner"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                    <ShieldCheck size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex justify-end border-t border-slate-50">
                                        <Button onClick={() => setStep(2)} className="h-14 px-10 rounded-2xl bg-primary-800 text-base font-bold shadow-lg">
                                            Continuer <ArrowRight className="ml-2" size={20} />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ÉTAPE 2 : DOCUMENTS LÉGAUX */}
                            {step === 2 && (
                                <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary-50 text-primary-600 rounded-2xl">
                                            <FileText size={28} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">{t('steps.documents')}</h2>
                                            <p className="text-slate-500">Documents requis pour la conformité</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FileUpload label={t('form.cni_recto')} onChange={(f) => setDocs({...docs, cniRecto: f})} />
                                        <FileUpload label={t('form.cni_verso')} onChange={(f) => setDocs({...docs, cniVerso: f})} />
                                        <FileUpload label={t('form.license_recto')} onChange={(f) => setDocs({...docs, license: f})} />
                                        <FileUpload label={t('form.cv_label')} accept="application/pdf" onChange={(f) => setDocs({...docs, cv: f})} />
                                    </div>

                                    <div className="pt-8 flex justify-between items-center border-t border-slate-50">
                                        <Button variant="ghost" onClick={() => setStep(1)} className="h-12 text-slate-500 font-bold hover:bg-slate-50">
                                            <ChevronLeft size={20} className="mr-1" /> Retour
                                        </Button>
                                        <Button onClick={() => setStep(3)} className="h-14 px-10 rounded-2xl bg-primary-800 font-bold">
                                            Continuer
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ÉTAPE 3 : MOTIVATION */}
                            {step === 3 && (
                                <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('steps.motivation')}</h2>
                                        <p className="text-slate-500">Présentez-vous brièvement à l'antenne locale.</p>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-700 ml-1">{t('form.motivation_label')}</label>
                                        <textarea
                                            className="w-full min-h-[200px] p-6 rounded-[2rem] border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-slate-900 text-lg shadow-inner"
                                            placeholder={t('form.motivation_placeholder')}
                                            value={motivation}
                                            onChange={(e) => setMotivation(e.target.value)}
                                        />
                                    </div>

                                    <div className="pt-8 flex justify-between items-center border-t border-slate-50">
                                        <Button variant="ghost" onClick={() => setStep(2)} className="h-12 text-slate-500 font-bold">
                                            <ChevronLeft size={20} className="mr-1" /> Retour
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={loading || !motivation}
                                            className="h-14 px-12 rounded-2xl bg-primary-800 font-bold shadow-xl"
                                        >
                                            {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                                            {t('form.submit')}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\layout.tsx`

```tsx
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Ici on utilise la Navbar existante, elle doit gérer le mode connecté */}

            {children}
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { Syndicate } from '@/lib/types/api';
import { Link } from '@/navigation';
import { Loader2, ArrowRight, Building2, LayoutGrid, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardHomePage() {
    const t = useTranslations('Dashboard');
    const [mySyndicates, setMySyndicates] = useState<Syndicate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMine = async () => {
            try {
                const response = await ugateApi.get('/syndicates/mine');
                setMySyndicates(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMine();
    }, []);

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary-600" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

                <header className="mb-12">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{t('my_syndicates')}</h1>
                    <p className="text-slate-500 font-medium">{t('my_syndicates_sub')}</p>
                </header>

                {mySyndicates.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mySyndicates.map((syndicate, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={syndicate.id}
                            >
                                <Link href={`/syndicate/${syndicate.id}`}>
                                    <div className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 hover:border-primary-500 hover:shadow-primary-900/5 transition-all cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:bg-primary-100 transition-colors" />

                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center mb-6 relative z-10">
                                            {syndicate.logoUrl ? (
                                                <img src={syndicate.logoUrl} className="w-full h-full object-cover rounded-2xl" />
                                            ) : (
                                                <span className="text-2xl font-black text-primary-800">{syndicate.name.charAt(0)}</span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-800 transition-colors">{syndicate.name}</h3>
                                        <p className="text-sm text-slate-500 mb-8 line-clamp-2 font-medium">{syndicate.description}</p>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                                                {syndicate.domain}
                                            </span>
                                            <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-lg shadow-slate-900/20">
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Card Ajouter/Explorer */}
                        <Link href="/explorer">
                            <div className="h-full border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-slate-400 hover:border-primary-400 hover:text-primary-500 hover:bg-primary-50/30 transition-all group">
                                <PlusCircle size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold">{t('explore_cta')}</span>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl">
                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                            <Building2 size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('no_syndicates')}</h2>
                        <Link href="/explorer" className="inline-flex items-center mt-6 text-primary-600 font-bold hover:underline">
                            {t('explore_cta')} <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\profile\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { ugateApi, authApi } from '@/lib/axios';
import { OfficialProfileResponse } from '@/lib/types/api';
import {
    User, Mail, Phone, ShieldCheck,
    Globe, Camera, Loader2, BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import DocumentCard from '@/components/profile/DocumentCard';
import PDFViewer from '@/components/ui/PDFViewer';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
    const t = useTranslations('Profile');
    const { user, updateUser } = useAuthStore();

    const [compliance, setCompliance] = useState<OfficialProfileResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, url: '', title: '' });

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!user?.id) return;
            try {
                // Récupération du Jumeau Numérique (Compliance)
                const res = await ugateApi.get(`/compliance/details/${user.id}`);
                setCompliance(res.data);
            } catch (error) {
                console.warn("Pas encore de données de conformité");
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, [user?.id]);

    const handleUploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0] || !user?.id) return;
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await authApi.post(`/api/users/${user.id}/picture`, formData);
            updateUser({ photoUri: res.data.photoUri });
            toast.success("Photo mise à jour");
        } catch (error) {
            toast.error("Erreur d'upload");
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary-600" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* --- HEADER PROFIL --- */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        {/* Avatar avec Upload */}
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-[2.5rem] bg-slate-100 border-4 border-white shadow-2xl overflow-hidden">
                                {user?.photoUri ? (
                                    <img src={user.photoUri} className="w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300 font-black text-5xl bg-primary-900">
                                        {user?.firstName.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <label className="absolute bottom-2 right-2 w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-xl">
                                <Camera size={18} />
                                <input type="file" className="hidden" onChange={handleUploadPicture} accept="image/*" />
                            </label>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                {compliance?.isVerified ? (
                                    <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
                                        <BadgeCheck size={14} /> {t('status.verified')}
                                    </div>
                                ) : (
                                    <div className="bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                                        <ShieldCheck size={14} /> {t('status.unverified')}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-500 font-medium text-sm">
                                <div className="flex items-center gap-2"><Mail size={16} className="text-primary-600" /> {user?.email}</div>
                                <div className="flex items-center gap-2"><Phone size={16} className="text-primary-600" /> {user?.phone || 'N/A'}</div>
                                <div className="flex items-center gap-2"><Globe size={16} className="text-primary-600" /> {user?.service}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- GRID DOCUMENTS & INFOS --- */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Colonne Gauche : Documents Légaux */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('sections.compliance')}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <DocumentCard
                                title={t('docs.cni')}
                                description="Pièce d'identité officielle (Recto/Verso)"
                                url={compliance?.cniRectoUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.cniRectoUrl, title: t('docs.cni') })}
                                onUpdate={() => toast("Redirection vers l'upload...")}
                            />
                            <DocumentCard
                                title={t('docs.license')}
                                description="Permis de conduire valide"
                                url={compliance?.licenseRectoUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.licenseRectoUrl, title: t('docs.license') })}
                                onUpdate={() => {}}
                            />
                            <DocumentCard
                                title={t('docs.cv')}
                                description="Votre parcours professionnel à jour"
                                url={compliance?.cvUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.cvUrl, title: t('docs.cv') })}
                                onUpdate={() => {}}
                            />
                        </div>
                    </div>

                    {/* Colonne Droite : Infos additionnelles */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('sections.identity')}</h2>

                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">{t('fields.cni_number')}</label>
                                <div className="text-slate-900 font-bold text-lg">{compliance?.cniNumber || '—'}</div>
                            </div>
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">{t('fields.license_number')}</label>
                                <div className="text-slate-900 font-bold text-lg">{compliance?.licenseNumber || '—'}</div>
                            </div>
                            <Button variant="outline" className="w-full h-12 rounded-xl text-primary-800 font-bold border-primary-100 hover:bg-primary-50">
                                Modifier mes informations
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Viewer PDF */}
            <PDFViewer
                isOpen={pdfViewer.isOpen}
                onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
                url={pdfViewer.url}
                title={pdfViewer.title}
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\events\page.tsx`

```tsx
"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Event } from '@/lib/types/api';
import EventCard from '@/components/social/EventCard';
import CreateEventModal from '@/components/social/CreateEventModal';
import { Loader2, Plus, CalendarSearch, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyndicateEventsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { user } = useAuthStore();

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('PRESIDENT') || user?.roles.includes('MODERATOR');

    const fetchEvents = async () => {
        try {
            const res = await ugateApi.get(`/events/branch/${id}`);
            const data = Array.isArray(res.data) ? res.data : (res.data.content || []);
            setEvents(data);
        } catch (e) {
            console.error("Erreur chargement événements", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [id]);

    return (
        // CONTENEUR DE CENTRAGE : max-w-5xl mx-auto
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* En-tête de section centré */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-2xl flex items-center justify-center shadow-sm">
                            <Calendar size={24} />
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Agenda</h1>
                    </div>
                    <p className="text-slate-500 font-medium text-lg max-w-xl leading-relaxed">
                        Retrouvez toutes les réunions, assemblées et activités organisées par votre branche.
                    </p>
                </div>

                {isAdmin && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-2xl h-14 px-8 bg-slate-900 hover:bg-black text-white shadow-xl transition-all hover:scale-105 active:scale-95 font-bold flex items-center gap-3"
                    >
                        <Plus size={20} />
                        Programmer un événement
                    </Button>
                )}
            </div>

            {/* Grille d'événements centrée */}
            {loading ? (
                <div className="flex justify-center py-32">
                    <Loader2 className="animate-spin text-primary-800 w-12 h-12" />
                </div>
            ) : events.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((evt) => (
                        <EventCard key={evt.id} event={evt} />
                    ))}
                </div>
            ) : (
                /* État vide centré */
                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl shadow-slate-200/50 mt-8">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <CalendarSearch size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-400 mb-2">Aucun événement à l'horizon</h2>
                    <p className="text-slate-400 font-medium">Revenez plus tard pour découvrir les prochaines dates.</p>

                    {isAdmin && (
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 border-dashed border-2 py-6 px-10 rounded-2xl"
                        >
                            Créer le premier événement
                        </Button>
                    )}
                </div>
            )}

            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={id}
                onSuccess={fetchEvents}
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\layout.tsx`

```tsx
"use client";

import { use, useEffect, useState } from 'react';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { ugateApi } from '@/lib/axios';
import { Syndicate, Branch } from '@/lib/types/api';
import { Loader2, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export default function WorkspaceLayout({ children, params }: { children: React.ReactNode, params: Promise<{ id: string, branchId: string }> }) {
    const { id: syndicateId, branchId } = use(params);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [branch, setBranch] = useState<Branch | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContext = async () => {
            try {
                const [syndRes, branchesRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${syndicateId}/details`),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`)
                ]);
                setSyndicate(syndRes.data);
                setBranch(branchesRes.data.find((b: Branch) => b.id === branchId));
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchContext();
    }, [syndicateId, branchId]);

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary-800" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            <MemberSidebar syndicateId={syndicateId} branchId={branchId} />

            <div className="flex-1  flex flex-col min-w-0">
                {/* HEADER UNIQUE - SYNDICAT FOCUS */}
                <header className="relative h-64 bg-slate-900 overflow-hidden shrink-0">
                    {syndicate?.documents?.logoUrl && (
                        <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover opacity-40 blur-[2px]" alt="Syndicate" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-black/20" />

                    <div className="absolute bottom-0 left-0 w-full pb-8">
                        <div className="max-w-5xl mx-auto px-8 flex items-end gap-6">
                            {/* Logo Syndicat */}
                            <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white shrink-0">
                                <span className="text-4xl font-black text-primary-900">{syndicate?.name.charAt(0)}</span>
                            </div>
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                    {syndicate?.name}
                                    <ChevronRight size={12} className="text-primary-400" />
                                    <span className="text-primary-700">Antenne</span>
                                </div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-3">
                                    {branch?.name}
                                </h1>
                                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 w-fit shadow-sm">
                                    <MapPin size={12} className="text-primary-600" />
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{branch?.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 w-full">
                    <div className="max-w-5xl mx-auto px-8 py-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\members\page.tsx`

```tsx
"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { MemberResponse } from '@/lib/types/api';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { Loader2, Search, User, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import {cn} from "@/lib/ utils";

export default function MembersPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [members, setMembers] = useState<MemberResponse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await ugateApi.get(`/admin/syndicates/${id}/members`);
                setMembers(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchMembers();
    }, [id]);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={id} />
            <main >
                <div className="max-w-5xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Membres de l'antenne</h1>
                        <p className="text-slate-500 font-medium">Communauté active de votre branche syndicale.</p>
                    </header>

                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                        {loading ? (
                            <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary-800" /></div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                    <th className="px-8 py-5">Membre</th>
                                    <th className="px-8 py-5">Rôle</th>
                                    <th className="px-8 py-5">Date d'adhésion</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                {members.map((m) => (
                                    <tr key={m.userId} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold border border-white shadow-sm overflow-hidden">
                                                    {m.profileImageUrl ? <img src={m.profileImageUrl} /> : m.firstName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{m.firstName} {m.lastName}</div>
                                                    <div className="text-xs text-slate-400">{m.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <Badge className={cn(
                                                "border-none px-3 py-1 font-black text-[10px]",
                                                m.role === 'ADMIN' ? "bg-primary-800 text-white" : "bg-slate-100 text-slate-600"
                                            )}>
                                                {m.role}
                                            </Badge>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-slate-500 font-medium">
                                            {new Date(m.joinedAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\page.tsx`

```tsx
"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { FeedItem, Branch } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import EventCard from '@/components/social/EventCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, Sparkles } from 'lucide-react';

export default function BranchFeedPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    const { branchId, id: syndicateId } = use(params);
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [branch, setBranch] = useState<Branch | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [feedRes, branchRes] = await Promise.all([
                    ugateApi.get('/api/v1/feed', { params: { page: 0, size: 20 } }),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`).then(r => ({ data: r.data.find((b: any) => b.id === branchId) }))
                ]);
                setFeed(Array.isArray(feedRes.data) ? feedRes.data : []);
                setBranch(branchRes.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchData();
    }, [branchId, syndicateId]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary-800" /></div>;

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
            {/* CreatePost personnalisé avec le nom de la branche */}
            <CreatePost syndicateId={branchId} branchName={branch?.name} />

            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Sparkles size={14} className="text-primary-600" /> Actualités
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            <div className="space-y-10">
                {feed.map((item, idx) => (
                    item.type === 'publication'
                        ? <PostCard key={idx} publication={item.data as any} />
                        : <EventCard key={idx} event={item.data as any} />
                ))}
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\publications\page.tsx`

```tsx
"use client";

import React, { useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { Publication } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, FileSearch } from 'lucide-react';

/**
 * COMPOSANT : Page des Publications uniquement
 */
function OnlyPublicationsPage({ params }: { params: React.Usable<{ id: string }> }) {
    // Unwrapping des params pour Next.js 15/16
    const { id } = React.use(params);

    const [pubs, setPubs] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPubs = async () => {
            try {
                // Utilisation de l'endpoint spécifique pour les publications de la branche
                const res = await ugateApi.get(`/publications/branch/${id}`);
                setPubs(Array.isArray(res.data) ? res.data : []);
            } catch (e) {
                console.error("Erreur lors du chargement des publications :", e);
            } finally {
                setLoading(false);
            }
        };
        fetchPubs();
    }, [id]);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Outil de création de post */}
            <CreatePost syndicateId={id} />

            {/* Séparateur sémantique */}
            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Publications de l'antenne
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            {/* État de chargement */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
                </div>
            ) : pubs.length > 0 ? (
                <div className="space-y-8">
                    {pubs.map((p) => (
                        <PostCard key={p.id} publication={p} />
                    ))}
                </div>
            ) : (
                /* État vide si pas de publications */
                <div className="bg-white rounded-[2.5rem] p-20 text-center border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                        <FileSearch size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-400">Aucune publication.</h2>
                    <p className="text-slate-400 text-sm mt-1">Les messages de la branche s'afficheront ici.</p>
                </div>
            )}
        </div>
    );
}

// EXPORT PAR DÉFAUT EXPLICITE
export default OnlyPublicationsPage;
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\branch\[branchId]\votes\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import VoteCard from '@/components/social/VoteCard';
import CreateVoteModal from '@/components/social/CreateVoteModal';
import { Plus, Vote as VoteIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyndicateVotesPage() {
    const { id: syndicateId } = useParams();
    const t = useTranslations('Votes');
    const { user } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Idéalement, on récupèrerait ici une liste d'IDs de votes actifs pour cette branche
    // Pour l'instant, on se base sur les votes présents dans le flux
    const [voteIds, setVoteIds] = useState<string[]>([]);

    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('PRESIDENT');

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={syndicateId as string} />

            <main >
                <div className="max-w-4xl mx-auto">

                    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{t('title')}</h1>
                            <p className="text-slate-500 font-medium">{t('subtitle')}</p>
                        </div>

                        {isAdmin && (
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-2xl h-14 px-8 bg-primary-800 hover:bg-primary-900 shadow-xl transition-all scale-105 active:scale-95 font-bold"
                            >
                                <Plus size={20} className="mr-2" />
                                {t('create_btn')}
                            </Button>
                        )}
                    </header>

                    <div className="grid gap-8">
                        {/* Exemple de vote actif */}
                        <VoteCard voteId="80ef205a-84ba-41a1-9eb5-6d2d3ae791ed" />

                        {/* État vide si aucun ID n'est trouvé */}
                        {voteIds.length === 0 && (
                            <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl mt-8">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                                    <VoteIcon size={40} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-400">Aucun autre sondage disponible.</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Modal de création */}
            <CreateVoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={syndicateId as string} // Ou branchId spécifique si disponible
                onSuccess={() => {
                    // Logique pour rafraîchir la liste
                }}
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\layout.tsx`

```tsx
"use client";

import { use } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import EventsWidget from '@/components/dashboard/widgets/EventsWidget'; // ✅ Vrai
import NetworkWidget from '@/components/dashboard/widgets/NetworkWidget'; // ✅ Vrai

export default function SyndicateLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const { id: syndicateId } = use(params);
    const pathname = usePathname();

    // Extraction robuste de l'ID de branche
    const segments = pathname.split('/');
    const branchIndex = segments.indexOf('branch');
    const branchId = branchIndex !== -1 && segments.length > branchIndex + 1
        ? segments[branchIndex + 1]
        : "";

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans">

            {/* Navigation Gauche (Fixe) */}
            <div className="hidden lg:block">
                <MemberSidebar syndicateId={syndicateId} branchId={branchId} />
            </div>

            {/* Zone Principale */}
            <div className="lg:ml-72 min-h-screen flex justify-center">
                <div className="w-full max-w-[1200px] px-4 sm:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 pt-24 lg:pt-8">

                    {/* COLONNE CENTRALE : FEED */}
                    <main className="xl:col-span-8 flex flex-col gap-6 min-w-0">
                        {children}
                    </main>

                    {/* COLONNE DROITE : WIDGETS RÉELS */}
                    <aside className="hidden xl:block xl:col-span-4 space-y-6">
                        <div className="sticky top-6 space-y-6">

                            {/* Widget 1 : Contrôle Réseau (Fonctionnel) */}
                            <NetworkWidget />

                            {/* Widget 2 : Événements Réels de la branche */}
                            {/* On ne l'affiche que si on est dans le contexte d'une branche */}
                            {branchId && (
                                <EventsWidget branchId={branchId} syndicateId={syndicateId} />
                            )}

                            {/* Footer Simple */}
                            <div className="text-[11px] text-slate-400 text-center px-4">
                                © 2026 U-Gate • <a href="#" className="hover:underline">Confidentialité</a>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\page.tsx`

```tsx
"use client";

import { use, useEffect } from 'react';
import { useRouter } from '@/navigation';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Loader2 } from 'lucide-react';

export default function SyndicateDispatcherPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const router = useRouter();
    const { user } = useAuthStore();

    useEffect(() => {
        const dispatch = async () => {
            try {
                const mineRes = await ugateApi.get('/syndicates/mine');
                const myRelation = mineRes.data.find((s: any) => s.id === syndicateId);

                if (myRelation) {
                    const isAdmin = ['ADMIN', 'PRESIDENT', 'MODERATOR'].includes(myRelation.userRole);

                    if (isAdmin) {
                        router.replace(`/syndicate/${syndicateId}/select-branch`);
                    } else if (myRelation.userBranchId) {
                        router.replace(`/syndicate/${syndicateId}/branch/${myRelation.userBranchId}`);
                    }
                }
            } catch (e) {
                router.replace('/dashboard');
            }
        };
        dispatch();
    }, [syndicateId, user?.id, router]);

    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\profile\page.tsx`

```tsx
"use client";

import { use, useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import { OfficialProfileResponse } from '@/lib/types/api';
import { ShieldCheck, Mail, Phone, BadgeCheck, FileText, Eye, AlertCircle } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import PDFViewer from '@/components/ui/PDFViewer';
import {cn} from "@/lib/ utils";

export default function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const { user } = useAuthStore();
    const [compliance, setCompliance] = useState<OfficialProfileResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [pdf, setPdf] = useState({ open: false, url: '', title: '' });

    useEffect(() => {
        const fetchCompliance = async () => {
            if (!user?.id) return;
            try {
                const res = await ugateApi.get(`/compliance/details/${user.id}`);
                setCompliance(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchCompliance();
    }, [user?.id]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>;

    const docs = [
        { label: "Carte d'Identité (Recto)", url: compliance?.cniRectoUrl, type: "CNI" },
        { label: "Permis de Conduire", url: compliance?.licenseRectoUrl, type: "Permis" },
        { label: "Curriculum Vitae", url: compliance?.cvUrl, type: "CV" },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl flex flex-col md:flex-row gap-10 items-center">
                <div className="w-32 h-32 rounded-[2.5rem] bg-primary-900 flex items-center justify-center text-white text-5xl font-black border-4 border-white shadow-2xl">
                    {user?.firstName.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                        <h2 className="text-3xl font-black text-slate-900">{user?.firstName} {user?.lastName}</h2>
                        {compliance?.isVerified && <BadgeCheck className="text-emerald-500" size={28} />}
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 font-bold text-sm uppercase tracking-tighter">
                        <span className="flex items-center gap-1"><Mail size={16} /> {user?.email}</span>
                        <span className="flex items-center gap-1"><Phone size={16} /> {user?.phone || 'Non renseigné'}</span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {docs.map((doc, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col h-full">
                        <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                            doc.url ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
                        )}>
                            {doc.url ? <FileText size={24} /> : <AlertCircle size={24} />}
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{doc.label}</h4>
                        <p className="text-xs text-slate-400 mb-8">Document de conformité</p>

                        {doc.url ? (
                            <button
                                onClick={() => setPdf({ open: true, url: doc.url!, title: doc.label })}
                                className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all"
                            >
                                <Eye size={16} /> Voir
                            </button>
                        ) : (
                            <button className="mt-auto w-full py-3 bg-primary-100 text-primary-700 rounded-xl font-bold text-sm">Action requise</button>
                        )}
                    </div>
                ))}
            </div>

            <PDFViewer
                isOpen={pdf.open}
                onClose={() => setPdf({ ...pdf, open: false })}
                url={pdf.url}
                title={pdf.title}
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\select-branch\page.tsx`

```tsx
"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { Branch, Syndicate } from '@/lib/types/api';
import { useRouter } from '@/navigation';
import { Loader2, ArrowRight, MapPin, Building2, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SelectBranchPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [branches, setBranches] = useState<Branch[]>([]);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                const [branchesRes, syndRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${id}/branches`),
                    ugateApi.get(`/syndicates/${id}/details`)
                ]);
                setBranches(branchesRes.data);
                setSyndicate(syndRes.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        init();
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-primary-800 w-12 h-12" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center mx-auto text-4xl font-black text-primary-900 border border-slate-100">
                        {syndicate?.name.charAt(0)}
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Espace Administration</h1>
                    <p className="text-slate-500 font-medium text-lg italic">"{syndicate?.name}"</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {branches.map((branch, idx) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => router.push(`/syndicate/${id}/branch/${branch.id}`)}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                        >
                            <div className="h-44 bg-slate-900 relative">
                                {branch.bannerUrl ? (
                                    <img src={branch.bannerUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt={branch.name} />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-primary-900 flex items-center justify-center">
                                        <GitBranch className="text-white/20" size={64} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                                    <MapPin size={14} className="text-primary-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{branch.location}</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary-800 transition-colors">{branch.name}</h3>
                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Gérer l'antenne</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary-600 transition-all shadow-lg shadow-slate-900/20">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\compliance\page.tsx`

```tsx
"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { ComplianceResponse } from '@/lib/types/api';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { ShieldCheck, ShieldAlert, BadgeCheck, FileText, Loader2 } from 'lucide-react';

export default function CompliancePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { user } = useAuthStore();
    const [compliance, setCompliance] = useState<ComplianceResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkCompliance = async () => {
            if (!user?.id) return;
            try {
                const res = await ugateApi.get(`/compliance/check/${user.id}`);
                setCompliance(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        checkCompliance();
    }, [user?.id]);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={id} />
            <main className="lg:ml-72 pt-32 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Vérification de Conformité</h1>
                        <p className="text-slate-500 font-medium">État de validité de votre dossier syndical.</p>
                    </header>

                    {loading ? (
                        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary-800" /></div>
                    ) : (
                        <div className="grid gap-8">
                            {/* Statut Global */}
                            <div className={cn(
                                "p-10 rounded-[3rem] border flex items-center gap-8 shadow-xl transition-all",
                                compliance?.globalStatus === 'VALID'
                                    ? "bg-emerald-50 border-emerald-100 text-emerald-900 shadow-emerald-900/5"
                                    : "bg-amber-50 border-amber-100 text-amber-900 shadow-amber-900/5"
                            )}>
                                <div className={cn(
                                    "w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg",
                                    compliance?.globalStatus === 'VALID' ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                                )}>
                                    {compliance?.globalStatus === 'VALID' ? <BadgeCheck size={40} /> : <ShieldAlert size={40} />}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black">Statut actuel : {compliance?.globalStatus}</h2>
                                    <p className="opacity-70 font-medium">Dernière vérification le {new Date(compliance?.verificationTimestamp || '').toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Détails des points de contrôle */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(compliance?.details || {}).map(([key, val]) => (
                                    <div key={key} className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center justify-between shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className={cn("p-3 rounded-xl", val ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600")}>
                                                <FileText size={20} />
                                            </div>
                                            <span className="font-bold text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        </div>
                                        <div className={cn("w-3 h-3 rounded-full shadow-sm", val ? "bg-emerald-500" : "bg-red-500")} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
```

## 📄 `app\[locale]\(public)\explorer\[id]\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from '@/navigation'; // Utilisation du router i18n
import { useTranslations } from 'next-intl';
import { ugateApi, authApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Syndicate, Branch, Product, User } from '@/lib/types/api';
import {
    Loader2, MapPin, FileText, ShoppingBag,
    Calendar, CheckCircle, Users, Mail, User as UserIcon,
    ShieldCheck, Eye, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import PDFViewer from '@/components/ui/PDFViewer';
import { toast } from 'react-hot-toast';

export default function SyndicateDetailsPage() {
    const { id: syndicateId } = useParams();
    const router = useRouter();
    const t = useTranslations('SyndicateDetails');
    const { isAuthenticated } = useAuthStore();

    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [creatorProfile, setCreatorProfile] = useState<User | null>(null);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'about' | 'branches' | 'products'>('about');

    const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; url: string | null; title: string }>({
        isOpen: false, url: null, title: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            if (!syndicateId) return;
            try {
                const [syndicateRes, branchesRes, productsRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${syndicateId}/details`),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`),
                    ugateApi.get(`/products/syndicates/${syndicateId}`)
                ]);

                const syndData = syndicateRes.data;
                setSyndicate(syndData);
                setBranches(branchesRes.data);
                setProducts(productsRes.data);

                if (syndData.creator?.id) {
                    try {
                        const userRes = await authApi.get(`/api/users/${syndData.creator.id}`);
                        setCreatorProfile(userRes.data);
                    } catch (e) {
                        console.warn("Profil créateur non enrichi");
                    }
                }
            } catch (error) {
                console.error(error);
                toast.error("Erreur lors du chargement");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [syndicateId]);

    // LOGIQUE DE ROUTAGE POUR REJOINDRE
    const handleJoinBranch = (branchId: string) => {
        const targetUrl = `/join?syndicat=${syndicateId}&branch=${branchId}`;

        if (!isAuthenticated) {
            toast.error("Veuillez vous connecter pour continuer");
            router.push(`/login?callback=${encodeURIComponent(targetUrl)}`);
        } else {
            router.push(targetUrl);
        }
    };

    const openPdf = (url: string | null, title: string) => {
        if (!url) return toast.error("Document indisponible");
        setPdfViewer({ isOpen: true, url, title });
    };

    if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-10 h-10 text-primary-600 animate-spin"/></div>;
    if (!syndicate) return <div className="h-screen flex items-center justify-center">Syndicat introuvable</div>;

    const hasStatus = !!syndicate.documents?.statusUrl;
    const hasCharte = !!syndicate.documents?.charteUrl;
    const bannerImage = syndicate.documents?.logoUrl || '/placeholder-banner.jpg';

    return (
        <div className="min-h-screen bg-slate-50">

            {/* --- HERO HEADER --- */}
            <div className="relative pt-32 pb-12 lg:pb-24 overflow-hidden bg-[#0F172A]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:items-end">
                        <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/10 text-4xl font-black text-primary-900 shrink-0">
                            {syndicate.documents?.logoUrl ? (
                                <img src={syndicate.documents.logoUrl} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                            ) : (
                                syndicate.name.charAt(0)
                            )}
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-primary-600 border-none text-white px-3 py-1 text-sm">{syndicate.domain}</Badge>
                                {syndicate.isActive && (
                                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/20 px-3 py-1 flex items-center gap-1">
                                        <ShieldCheck size={12} /> Actif & Vérifié
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{syndicate.name}</h1>
                            <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
                                <div className="flex items-center gap-2"><Users size={18} className="text-primary-400" /><span>{syndicate.stats?.totalMembers || 0} Membres</span></div>
                                <div className="flex items-center gap-2"><MapPin size={18} className="text-primary-400" /><span>{syndicate.stats?.totalBranches || 0} Antennes</span></div>
                                <div className="flex items-center gap-2"><Calendar size={18} className="text-primary-400" /><span>Depuis {new Date(syndicate.createdAt).getFullYear()}</span></div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 shadow-xl" onClick={() => setActiveTab('branches')}>
                                {t('join_btn')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- NAVIGATION --- */}
            <div className="sticky top-[80px] z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex gap-8">
                    {['about', 'branches', 'products'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`py-5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                                activeTab === tab ? "border-primary-600 text-primary-700" : "border-transparent text-slate-500 hover:text-slate-800"
                            }`}
                        >
                            {t(`tabs.${tab}`)}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- CONTENU --- */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* ABOUT & DOCUMENTS */}
                {activeTab === 'about' && (
                    <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle className="text-primary-500" size={24} /> Vision & Mission</h3>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap text-lg">{syndicate.description}</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">Administration</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 overflow-hidden">
                                        {creatorProfile?.photoUri ? <img src={creatorProfile.photoUri} alt="Admin" className="w-full h-full object-cover" /> : <UserIcon size={32} />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-lg">{creatorProfile?.firstName} {creatorProfile?.lastName}</div>
                                        <div className="text-primary-600 font-medium text-sm mb-1">Président Fondateur</div>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm"><Mail size={14} />{creatorProfile?.email || syndicate.creator.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full" />
                                <h3 className="text-lg font-bold mb-6 relative z-10">Documentation Officielle</h3>
                                <div className="space-y-3 relative z-10">
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">Statuts du Syndicat</div>
                                            {hasStatus ? <button onClick={() => openPdf(syndicate.documents.statusUrl, "Statuts Officiels")} className="text-xs text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic">Non disponible</span>}
                                        </div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">Règlement Intérieur</div>
                                            {hasCharte ? <button onClick={() => openPdf(syndicate.documents.charteUrl, "Règlement Intérieur")} className="text-xs text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic">Non disponible</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* BRANCHES AVEC ACTION DE ROUTAGE */}
                {activeTab === 'branches' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
                        {branches.map(branch => (
                            <div key={branch.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{branch.name}</h3>
                                <p className="text-slate-500 mb-6 flex items-center gap-2 text-sm"><MapPin size={14} /> {branch.location}</p>
                                <Button
                                    className="w-full justify-between"
                                    variant="outline"
                                    onClick={() => handleJoinBranch(branch.id)}
                                >
                                    Rejoindre cette antenne
                                    <ArrowRight size={16} />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                {/* PRODUITS */}
                {activeTab === 'products' && (
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in">
                        {products.map(product => (
                            <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                                <div className="h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                                    {product.image ? <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> : <ShoppingBag className="text-slate-300" size={40} />}
                                </div>
                                <div className="p-4">
                                    <div className="font-bold text-primary-600 text-lg mb-1">{product.price} FCFA</div>
                                    <h3 className="font-medium text-slate-900 truncate">{product.name}</h3>
                                    <Button className="w-full mt-4" size="sm">Acheter</Button>
                                </div>
                            </div>
                        ))}
                        {products.length === 0 && <p className="col-span-full text-center text-slate-500 py-12">Aucun produit disponible.</p>}
                    </div>
                )}
            </div>

            {/* MODAL PDF VIEWER */}
            <PDFViewer
                isOpen={pdfViewer.isOpen}
                onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
                url={pdfViewer.url}
                title={pdfViewer.title}
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(public)\explorer\page.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { Syndicate } from '@/lib/types/api';
import { Loader2, Search, SlidersHorizontal, Briefcase, Users } from 'lucide-react';
import SyndicateCard from '@/components/syndicate/SyndicateCard';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

// Image : Contexte réseau/communauté
const HEADER_BG = "https://images.unsplash.com/photo-1630266531677-52ee3825ec12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ExplorerPage() {
    const t = useTranslations('Explorer');
    const [syndicates, setSyndicates] = useState<Syndicate[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState('Tous');

    const quickFilters = ["Tous", "Transport", "Commerce", "Éducation", "Santé", "Numérique"];

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const response = await ugateApi.get('/syndicates', { params: { page: 0, size: 20 } });
                const data = response.data.content || response.data;
                setSyndicates(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchSyndicates();
    }, []);

    const filteredSyndicates = syndicates.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.domain.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeFilter === 'Tous' || s.domain.toLowerCase().includes(activeFilter.toLowerCase());
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-50">

            {/* --- HEADER --- */}
            {/* pt-52 : On pousse le contenu vers le bas pour dégager la navbar */}
            <div className="relative pt-24 pb-32 overflow-hidden min-h-[50vh] flex flex-col justify-center">

                {/* 1. ARRIÈRE-PLAN TRAITÉ */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HEADER_BG}
                        alt="Community Network"
                        className="w-full h-full object-cover"
                    />

                    {/* COUCHE 1 : Teinte Bleu Foncé (Le secret du look Premium) */}
                    {/* mix-blend-multiply permet au bleu de coloriser l'image sans la masquer totalement */}
                    <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply" />

                    {/* COUCHE 2 : Dégradé de Profondeur */}
                    {/* Plus sombre en haut pour la navbar, plus sombre en bas pour la transition */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/90 opacity-90" />

                    {/* COUCHE 3 : Texture Tech */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">

                    {/* Titre & Sous-titre */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
                            {t('title')}
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 opacity-90">
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    {/* Barre de Recherche */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="relative flex items-center p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl ring-1 ring-white/10 group focus-within:bg-white/20 transition-all">
                            <Search className="ml-4 text-blue-200 group-focus-within:text-white transition-colors" size={24} />
                            <input
                                type="text"
                                placeholder={t('search_placeholder')}
                                className="w-full h-12 px-4 bg-transparent text-white placeholder:text-blue-200/70 border-none outline-none text-lg font-medium"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/30 border-none">
                                <span className="hidden md:inline">{t('filter_btn')}</span>
                                <SlidersHorizontal size={18} className="md:ml-2" />
                            </Button>
                        </div>

                        {/* Tags / Filtres */}
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            {quickFilters.map((filter, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                        activeFilter === filter
                                            ? "bg-white text-slate-900 border-white shadow-lg scale-105"
                                            : "bg-blue-950/40 text-blue-100 border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- CONTENU (Grille) --- */}
            <div className="max-w-7xl mx-auto px-6 -mt-24 pb-20 relative z-20">

                {/* Stats Rapides */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white px-8 py-4 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-4 border border-slate-100"
                    >
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Briefcase size={20} /></div>
                        <div className="text-left">
                            <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Total Syndicats</div>
                            <div className="text-2xl font-black text-slate-900 leading-none mt-1">{syndicates.length}</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white px-8 py-4 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center gap-4 border border-slate-100"
                    >
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Users size={20} /></div>
                        <div className="text-left">
                            <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Membres Actifs</div>
                            <div className="text-2xl font-black text-slate-900 leading-none mt-1">50k+</div>
                        </div>
                    </motion.div>
                </div>

                {/* État de chargement et Grille */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32 bg-white/50 rounded-3xl border border-slate-200/50 backdrop-blur-sm">
                        <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                        <p className="text-slate-400 font-medium animate-pulse">Recherche des communautés...</p>
                    </div>
                ) : filteredSyndicates.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredSyndicates.map((syndicate, index) => (
                            <motion.div
                                key={syndicate.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <SyndicateCard syndicate={syndicate} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="text-slate-300" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun résultat</h3>
                        <p className="text-slate-500 max-w-md mx-auto">{t('empty_state')}</p>
                        <button
                            onClick={() => { setSearch(''); setActiveFilter('Tous'); }}
                            className="mt-8 text-primary-600 font-bold hover:underline"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(public)\layout.tsx`

```tsx
import Navbar from "@/components/layout/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            {/* Footer ici si tu veux */}
        </>
    );
}
```

## 📄 `app\[locale]\layout.tsx`

```tsx
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
```

## 📄 `app\[locale]\page.tsx`

```tsx
import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/landing/Features";
import TrustedPartners from "@/components/sections/landing/TrustedPartners";
import Stats from "@/components/sections/landing/Stats";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import CallToAction from "@/components/sections/landing/CallToAction";
import Footer from "@/components/layout/Footer";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-[#020617] selection:bg-primary-500/30 overflow-x-hidden">
            <Navbar />

            {/* 1. Hero: Immersion & Proposition de valeur */}
            <Hero />

            {/* 2. Preuve Sociale : Logos Partenaires */}
            <TrustedPartners />

            {/* 3. Preuve Sociale : Chiffres clés */}
            <Stats />

            {/* 4. Solution : Grille de fonctionnalités Premium */}
            <Features />

            {/* 5. Éducation : Comment ça marche (Créer vs Rejoindre) */}
            <HowItWorks />

            {/* 6. Conversion : Appel à l'action final */}
            <CallToAction />

            {/* 7. Footer complet */}
            <Footer />
        </main>
    );
}
```

## 📄 `app\[locale]\partner\entry\page.tsx`

```tsx
"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/navigation';
import { useAuthStore } from '@/lib/store';
import { authApi } from '@/lib/axios';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function PartnerEntryPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const setPartnerMode = useAuthStore((state) => state.setPartnerMode);
    const login = useAuthStore((state) => state.login);
    const [status, setStatus] = useState('Vérification du partenaire...');

    useEffect(() => {
        const handlePartnerEntry = async () => {
            const partnerUserId = searchParams.get('userId');
            const service = searchParams.get('service'); // ex: RIDE_AND_GO

            if (!partnerUserId) {
                toast.error("ID Partenaire manquant");
                router.push('/');
                return;
            }

            try {
                setStatus(`Synchronisation avec ${service || 'le partenaire'}...`);

                // 1. Récupérer les infos de l'utilisateur via son ID (API Auth Publique ou Sécurisée)
                // Note: Ici on suppose un endpoint qui nous donne les infos sans mdp car on vient d'un partenaire de confiance
                // En prod, cela devrait être sécurisé par un token d'échange ou une signature.
                // Pour ce projet, on utilise getById si accessible ou on simule.

                const response = await authApi.get(`/api/users/${partnerUserId}`);
                const userData = response.data;

                // 2. Créer une session "Partenaire" dans le store
                // On construit un objet AuthResponse artificiel car pas de token JWT classique ici
                // Ou alors le partenaire nous a passé un token dans l'URL.

                // HYPOTHÈSE: Le partenaire est déjà authentifié sur le même serveur Auth (TraMaSys).
                // Donc on doit juste récupérer son contexte.

                login({
                    user: userData,
                    accessToken: "PARTNER_SESSION_TOKEN", // Token placeholder ou réel si SSO
                    refreshToken: "PARTNER_REFRESH_TOKEN"
                }, true); // true = isPartnerMode

                toast.success(`Bienvenue ${userData.firstName}`);

                // 3. Redirection vers l'exploration pour rejoindre un syndicat
                router.push('/explorer');

            } catch (error) {
                console.error(error);
                toast.error("Impossible de vérifier le compte partenaire");
                router.push('/login');
            }
        };

        handlePartnerEntry();
    }, [searchParams, router, setPartnerMode, login]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-navy-950 text-white">
            <Loader2 className="w-16 h-16 text-primary-500 animate-spin mb-6" />
            <h2 className="text-xl font-medium">{status}</h2>
            <p className="text-slate-400 mt-2 text-sm">Veuillez patienter pendant que nous préparons votre espace.</p>
        </div>
    );
}
```

## 📄 `app\globals.css`

```css
@import "tailwindcss";

@theme {
  /* -- Couleurs Premium (Deep Navy & Electric Blue) -- */
  --color-background: #0F172A;
  --color-foreground: #F8FAFC;

  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  --color-secondary-50: #f8fafc;
  --color-secondary-900: #0f172a;

  /* -- Polices -- */
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  /* -- Animations personnalisées -- */
  --animate-fade-in-up: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  --animate-float: float 6s ease-in-out infinite;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
}

/* -- Utilitaires globaux -- */
:root {
  --font-inter: 'Inter', sans-serif;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* -- Classes utilitaires pour le Glassmorphism -- */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* -- Container centré -- */
.container-premium {
  max-width: 80rem; /* 1280px */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@layer utilities {
  .animate-gradient {
    background-size: 200% auto;
    animation: gradient 4s linear infinite;
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
}
```

## 📄 `app\layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

```

## 📄 `app\page.tsx`

```tsx
import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/landing/Features";
import TrustedPartners from "@/components/sections/landing/TrustedPartners";
import Stats from "@/components/sections/landing/Stats";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import CallToAction from "@/components/sections/landing/CallToAction";
import Footer from "@/components/layout/Footer";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
      <main className="min-h-screen bg-[#020617] selection:bg-primary-500/30 overflow-x-hidden">
        <Navbar />

        {/* 1. Hero: Immersion & Proposition de valeur */}
        <Hero />

        {/* 2. Preuve Sociale : Logos Partenaires */}
        <TrustedPartners />

        {/* 3. Preuve Sociale : Chiffres clés */}
        <Stats />

        {/* 4. Solution : Grille de fonctionnalités Premium */}
        <Features />

        {/* 5. Éducation : Comment ça marche (Créer vs Rejoindre) */}
        <HowItWorks />

        {/* 6. Conversion : Appel à l'action final */}
        <CallToAction />

        {/* 7. Footer complet */}
        <Footer />
      </main>
  );
}
```

## 📄 `components\AuthAside.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

interface AuthAsideProps {
    animatedTexts: string[];
}

export default function AuthAside({ animatedTexts }: AuthAsideProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % animatedTexts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [animatedTexts.length]);

    return (
        <div className="hidden lg:flex relative overflow-hidden bg-slate-900 items-center justify-center p-16">
            {/* Image de fond avec Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Tu peux changer l'URL de l'image ici */}
                <img
                    src="https://images.unsplash.com/photo-1610473068533-b68dbcd23543?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Office"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-900/50" />
            </div>

            {/* Contenu superposé */}
            <div className="relative z-10 w-full max-w-lg">
                <Logo className="mb-12" />

                <div className="h-1 w-20 bg-primary-500 rounded-full mb-8" />

                <div className="h-40"> {/* Hauteur fixe pour éviter le saut */}
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        >
                            {animatedTexts[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                <p className="text-slate-400 text-lg mt-4 font-light leading-relaxed">
                    Rejoignez la nouvelle ère de la gestion syndicale numérique. Sécurité, transparence et engagement membre.
                </p>

                {/* Indicateurs (points) */}
                <div className="flex gap-2 mt-12">
                    {animatedTexts.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === index ? "w-8 bg-primary-500" : "w-2 bg-slate-700"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
```

## 📄 `components\auth\AuthLayout.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    const t = useTranslations('Auth');

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-navy-950">

            <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative z-10">
                <Link href="/" className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <ArrowLeft size={16} />
                    {useTranslations('Nav')('home')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="mb-10">
                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                            <span className="text-white font-black text-xl">U</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{title}</h1>
                        <p className="text-slate-400">{subtitle}</p>
                    </div>

                    {children}
                </motion.div>
            </div>

            <div className="hidden lg:block relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-purple-900/40 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />

                <div className="absolute bottom-0 left-0 right-0 p-20 z-20 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <blockquote className="text-2xl font-medium text-white mb-6 leading-relaxed">
                            "U-Gate a transformé la gestion de notre syndicat. C'est l'outil indispensable pour la transparence et l'engagement."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-700" />
                            <div>
                                <div className="text-white font-bold">Jean M.</div>
                                <div className="text-primary-400 text-sm">Président Syndicat VTC</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
```

## 📄 `components\dashboard\MemberSidebar.tsx`

```tsx
"use client";

import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, Vote, UserCircle,
    ChevronLeft, LogOut, FileText, LayoutDashboard,
    ArrowLeftRight
} from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useAuthStore } from '@/lib/store';

interface MemberSidebarProps {
    syndicateId: string;
    branchId: string;
}

export default function MemberSidebar({ syndicateId, branchId }: MemberSidebarProps) {
    const t = useTranslations('Dashboard.sidebar');
    const pathname = usePathname();
    const { logout, user } = useAuthStore();

    // Construction de l'URL de base pour cette session
    const baseUrl = `/syndicate/${syndicateId}/branch/${branchId}`;

    const menuItems = [
        { icon: LayoutDashboard, label: "Fil d'actualité", href: baseUrl },
        { icon: FileText, label: "Publications", href: `${baseUrl}/publications` },
        { icon: Calendar, label: "Événements", href: `${baseUrl}/events` },
        { icon: Users, label: "Membres", href: `${baseUrl}/members` },
        { icon: Vote, label: "Votes & Sondages", href: `${baseUrl}/votes` },
        { icon: UserCircle, label: "Mon Profil", href: `${baseUrl}/profile` },
    ];

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-xl">
            <div className="p-8 flex-1 flex flex-col">

                {/* Branding U-Gate */}
                <div className="mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-primary-900/20">U</div>
                    <span className="font-black text-xl text-slate-900 tracking-tighter">U-Gate</span>
                </div>

                {/* Navigation de retour */}
                <div className="space-y-2 mb-8">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-slate-400 hover:text-primary-800 font-bold text-xs uppercase tracking-widest group transition-all px-2 py-1"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Quitter l'espace
                    </Link>

                    {/* Bouton pour changer d'antenne (Retour au sélecteur) */}
                    <Link
                        href={`/syndicate/${syndicateId}/select-branch`}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-bold text-xs uppercase tracking-widest group transition-all px-2 py-1"
                    >
                        <ArrowLeftRight size={16} />
                        Changer d'antenne
                    </Link>
                </div>

                {/* Menu Principal */}
                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        // Vérification stricte pour la racine, souple pour les sous-pages si besoin
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300",
                                    isActive
                                        ? "bg-primary-800 text-white shadow-xl shadow-primary-900/20 translate-x-1"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <item.icon size={20} className={isActive ? "text-white" : "text-slate-400"} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer Utilisateur */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <div className="flex items-center gap-3 px-4 py-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-black text-xs border-2 border-white shadow-sm overflow-hidden">
                        {user?.photoUri ? (
                            <img src={user.photoUri} alt="User" className="w-full h-full object-cover" />
                        ) : (
                            user?.firstName?.charAt(0)
                        )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-bold text-slate-900 truncate">{user?.firstName}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Connecté</div>
                    </div>
                </div>
                <button
                    onClick={() => logout()}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-all text-sm group"
                >
                    <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}
```

## 📄 `components\dashboard\widgets\EventsWidget.tsx`

```tsx
"use client";

import { useQuery } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';
import { EventResponseDTO } from '@/lib/types/api';
import { Calendar, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function EventsWidget({ branchId, syndicateId }: { branchId: string, syndicateId: string }) {
    // 🔥 Appel API Réel avec TanStack Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ['events', branchId],
        queryFn: async () => {
            if (!branchId) return [];
            const res = await ugateApi.get(`/events/branch/${branchId}`);
            // Gestion robuste du format de réponse (Tableau direct ou Page)
            const events = Array.isArray(res.data) ? res.data : (res.data.content || []);

            // Filtrer : Seulement futurs, Triés par date, Max 3
            return events
                .filter((e: EventResponseDTO) => new Date(e.date) >= new Date())
                .sort((a: EventResponseDTO, b: EventResponseDTO) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 3);
        },
        enabled: !!branchId, // Ne pas lancer si pas de branche
        staleTime: 1000 * 60 * 5 // Cache de 5 minutes
    });

    if (!branchId) return null;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Calendar size={16} className="text-primary-600" />
                    Agenda
                </h3>
            </div>

            <div className="p-4 space-y-4">
                {isLoading && (
                    <div className="flex justify-center py-4">
                        <Loader2 className="animate-spin text-slate-300" />
                    </div>
                )}

                {isError && (
                    <div className="text-xs text-red-400 flex items-center gap-2">
                        <AlertCircle size={12} /> Impossible de charger l'agenda
                    </div>
                )}

                {!isLoading && data?.length === 0 && (
                    <p className="text-xs text-slate-400 text-center py-2">Aucun événement prévu.</p>
                )}

                {data?.map((event: EventResponseDTO) => {
                    const eventDate = new Date(event.date);
                    return (
                        <Link key={event.id} href={`/syndicate/${syndicateId}/branch/${branchId}/events`} className="flex gap-3 items-start group">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:border-primary-200 transition-colors shrink-0">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">
                                    {format(eventDate, 'MMM', { locale: fr })}
                                </span>
                                <span className="text-lg font-black text-slate-800 leading-none">
                                    {format(eventDate, 'dd')}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 leading-tight truncate group-hover:text-primary-700 transition-colors">
                                    {event.title}
                                </h4>
                                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                    <MapPin size={10} />
                                    <span className="truncate">{event.location}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}

                <Link
                    href={`/syndicate/${syndicateId}/branch/${branchId}/events`}
                    className="block w-full py-2 text-center text-xs font-bold text-primary-600 hover:bg-primary-50 rounded-lg transition-colors border border-transparent hover:border-primary-100"
                >
                    Voir tout l'agenda
                </Link>
            </div>
        </div>
    );
}
```

## 📄 `components\dashboard\widgets\NetworkWidget.tsx`

```tsx
"use client";
import { useSettings } from '@/lib/context/SettingsContext';
import { Signal, Wifi, Zap, Info } from 'lucide-react';

export default function NetworkWidget() {
    const { networkQuality, setNetworkQuality } = useSettings();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Signal size={16} className="text-primary-600" />
                    Qualité Média
                </h3>
            </div>
            <div className="p-4">
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Ajustez le chargement des images selon votre connexion.
                </p>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        onClick={() => setNetworkQuality('high')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'high'
                                ? 'bg-primary-50 border-primary-500 text-primary-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Wifi size={16} className="mb-1" />
                        HD
                    </button>
                    <button
                        onClick={() => setNetworkQuality('auto')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'auto'
                                ? 'bg-blue-50 border-blue-500 text-blue-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Zap size={16} className="mb-1" />
                        Auto
                    </button>
                    <button
                        onClick={() => setNetworkQuality('low')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'low'
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Signal size={16} className="mb-1" />
                        Éco
                    </button>
                </div>
            </div>
        </div>
    );
}
```

## 📄 `components\layout\Footer.tsx`

```tsx
"use client";

import { Logo } from '@/components/ui/Logo';
import { Link } from '@/navigation';
import { Twitter, Linkedin, Facebook, Github } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                            La plateforme de référence pour la gestion syndicale 3.0.
                            Transparence, Sécurité et Démocratie au service des professionnels.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Plateforme</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/explorer" className="hover:text-primary-400 transition-colors">Explorer</Link></li>
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">À propos</Link></li>
                            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                            <li><a href="https://ugate-admin-frontend.vercel.app/" target="_blank" className="hover:text-primary-400 transition-colors">Espace Admin</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Légal</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Conditions d'utilisation</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Mentions légales</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {year} U-Gate. Tous droits réservés.</p>
                    <p>Fait avec passion au Cameroun.</p>
                </div>
            </div>
        </footer>
    );
}
```

## 📄 `components\layout\Navbar.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, LogIn } from 'lucide-react';

export default function Navbar() {
    const t = useTranslations('Nav');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                        <span className="text-white font-black text-xl">U</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">U-Gate</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="/explorer" className="hover:text-white transition-colors">{t('explorer')}</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/about" className="hover:text-white transition-colors">À Propos</Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-semibold text-white hover:opacity-80 transition">
                        {t('login')}
                    </Link>
                    <Link href="/register" className="bg-white text-navy-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-500 hover:text-white transition-all shadow-lg">
                        {t('register')}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-navy-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden glass"
                    >
                        <Link href="/explorer" onClick={() => setMobileMenu(false)}>{t('explorer')}</Link>
                        <Link href="/login" onClick={() => setMobileMenu(false)}>{t('login')}</Link>
                        <Link href="/register" className="bg-primary-600 text-white p-3 rounded-xl text-center" onClick={() => setMobileMenu(false)}>
                            {t('register')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
```

## 📄 `components\profile\DocumentCard.tsx`

```tsx
"use client";

import { FileText, Eye, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useTranslations } from 'next-intl';

interface Props {
    title: string;
    description: string;
    url: string | null;
    onView: () => void;
    onUpdate: () => void;
}

export default function DocumentCard({ title, description, url, onView, onUpdate }: Props) {
    const t = useTranslations('Profile.docs');
    const isUploaded = !!url;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center border",
                    isUploaded ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-500 border-red-100"
                )}>
                    {isUploaded ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                </div>
                {isUploaded && (
                    <button
                        onClick={onView}
                        className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                    >
                        <Eye size={20} />
                    </button>
                )}
            </div>

            <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-xs text-slate-500 mb-8 flex-grow">{description}</p>

            <button
                onClick={onUpdate}
                className={cn(
                    "w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all",
                    isUploaded
                        ? "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        : "bg-primary-800 text-white shadow-lg shadow-primary-900/10 hover:bg-primary-900"
                )}
            >
                <Upload size={16} />
                {isUploaded ? t('update_btn') : "Charger le document"}
            </button>
        </div>
    );
}
```

## 📄 `components\providers\QueryProvider.tsx`

```tsx
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60, // Les données restent fraîches 1 minute
                refetchOnWindowFocus: false,
                retry: 1,
            },
        },
    }));

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
```

## 📄 `components\sections\Hero.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Images haute qualité pour le slider (VTC, Logistique, Transport, Réunion)
const backgroundImages = [
    "https://images.unsplash.com/photo-1766330301961-6366c58297d0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    // 2. Digital & Mobilité : Femme professionnelle utilisant la technologie (cœur de U-Gate)
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",

    // 3. Communauté & Accord : Poignée de main ou collaboration (L'esprit syndical)
    "https://media.istockphoto.com/id/2221927313/fr/photo/des-partenaires-commerciaux-se-serrent-la-main-apr%C3%A8s-une-r%C3%A9union-r%C3%A9ussie-dans-un-bureau.jpg?s=1024x1024&w=is&k=20&c=DteM6a43cq4Vb8yEHpDERUAef43T5oVXcJDPbd3TcrY=",

    // 4. Innovation & Jeunesse : Équipe tech/startup africaine (Le futur de la gestion)
    "https://plus.unsplash.com/premium_photo-1664300108565-fdd8a6132123?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Hero() {
    const t = useTranslations('Hero');
    const [index, setIndex] = useState(0);

    // Rotation des images toutes les 5 secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

            {/* --- SLIDER D'ARRIÈRE-PLAN --- */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={backgroundImages[index]}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay Dégradé Premium (Navy Profond) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617] z-10" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-10 mix-blend-overlay" />
            </div>

            {/* --- CONTENU --- */}
            <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge "Nouveau" */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-primary-300 text-xs font-bold mb-8 backdrop-blur-md shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {t('tagline')}
                    </div>

                    {/* Titre Impactant */}
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
                        {t('title_part1')} <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-blue-200 to-primary-400 bg-[length:200%_auto] animate-gradient">
                            {t('title_part2')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        {t('description')}
                    </p>

                    {/* CTAs : Distinction Claire entre Créateur et Membre */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        {/* 1. Rejoindre (Public) */}
                        <Link href="/explorer" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full h-14 rounded-full text-base px-8 bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                {t('cta_secondary')} {/* "Explorer les syndicats" */}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        {/* 2. Créer (Admin - Lien Externe) */}
                        <a
                            href="https://ugate-admin-frontend.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button variant="outline" size="lg" className="w-full h-14 rounded-full text-base px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group">
                                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary-400 transition-colors" />
                                Créer mon syndicat
                            </Button>
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-emerald-500" size={18} />
                            Données Sécurisées
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-blue-500" size={18} />
                            Certifié conforme
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
```

## 📄 `components\sections\landing\CallToAction.tsx`

```tsx
"use client";

import { Link } from '@/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 blur-[100px] opacity-20 rounded-full" />

                <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Prêt à transformer votre <br/> expérience syndicale ?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        Rejoignez des milliers de professionnels qui utilisent U-Gate pour plus de transparence, de rapidité et d'impact.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/register">
                            <Button size="lg" className="h-16 px-10 rounded-2xl text-lg bg-white text-slate-900 hover:bg-slate-200 shadow-xl shadow-white/10">
                                Créer un compte membre
                            </Button>
                        </Link>
                        <a href="https://ugate-admin-frontend.vercel.app/" target="_blank" rel="noreferrer">
                            <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg border-white/20 text-white hover:bg-white/10">
                                Je veux créer un syndicat
                                <ArrowRight className="ml-2" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

## 📄 `components\sections\landing\Features.tsx`

```tsx
"use client";

import { useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/GlassCard';
import { Fingerprint, Vote, FileText, LayoutDashboard, ShoppingBag, Shield, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/ utils';

export default function Features() {
    const t = useTranslations('Features');

    // Configuration Bento Grid
    const features = [
        {
            icon: Fingerprint, key: "identity", colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        },
        {
            icon: Vote, key: "democracy", colSpan: "md:col-span-1", bg: "bg-slate-800/50"
        },
        {
            icon: LayoutDashboard, key: "member", colSpan: "md:col-span-1", bg: "bg-slate-800/50"
        },
        {
            icon: ShoppingBag, key: "market", colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
        },
        {
            icon: Shield, key: "compliance", colSpan: "md:col-span-3", bg: "bg-slate-800/50"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-900/20 blur-[120px] rounded-full -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Fonctionnalités Premium</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t('title_part2')}</span>
                    </h3>
                    <p className="text-slate-400 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard
                            key={index}
                            className={cn(
                                "p-8 group cursor-pointer relative overflow-hidden border-white/5 hover:border-white/10 transition-all duration-500",
                                feature.colSpan,
                                feature.bg
                            )}
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                <ArrowUpRight size={20} />
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300 shadow-xl">
                                <feature.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                                {t(`${feature.key}_title`)}
                            </h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">
                                {t(`${feature.key}_desc`)}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

## 📄 `components\sections\landing\HowItWorks.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';
import { UserPlus, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from '@/navigation';

const steps = [
    {
        num: "01",
        title: "Créer un Syndicat",
        desc: "Les leaders utilisent le Dashboard Admin pour créer leur entité. Une seule création autorisée par compte président.",
        icon: Building,
        action: "Lien Admin",
        link: "https://ugate-admin-frontend.vercel.app/"
    },
    {
        num: "02",
        title: "Validation & Certif.",
        desc: "Notre autorité vérifie les documents légaux. Une fois approuvé, le syndicat devient visible sur la plateforme publique.",
        icon: CheckCircle2,
        action: null
    },
    {
        num: "03",
        title: "Rejoindre & Participer",
        desc: "Les membres explorent les syndicats certifiés, adhèrent et accèdent à leurs outils (votes, events, marketplace).",
        icon: UserPlus,
        action: "Explorer",
        link: "/explorer"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-950 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Un écosystème, deux expériences</h2>
                        <p className="text-slate-400 text-lg">Que vous soyez un leader souhaitant structurer son organisation ou un membre cherchant à s'engager, U-Gate simplifie le processus.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Ligne de connexion (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-900 via-primary-500 to-primary-900 opacity-30" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-primary-500/30 transition-colors group">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors shadow-lg">
                                        <step.icon size={28} />
                                    </div>
                                    <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">{step.num}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{step.desc}</p>

                                {step.action && step.link && (
                                    step.link.startsWith('http') ? (
                                        <a href={step.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary-400 font-bold hover:text-white transition-colors mt-auto">
                                            {step.action === "Lien Admin" ? "Accéder au Portail Admin" : "Commencer"} <ArrowRight size={16} />
                                        </a>
                                    ) : (
                                        <Link href={step.link} className="flex items-center gap-2 text-primary-400 font-bold hover:text-white transition-colors mt-auto">
                                            Explorer les syndicats <ArrowRight size={16} />
                                        </Link>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

## 📄 `components\sections\landing\Stats.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';

const stats = [
    { label: "Syndicats Actifs", value: "120+", color: "text-blue-400" },
    { label: "Membres Connectés", value: "50k+", color: "text-emerald-400" },
    { label: "Votes Sécurisés", value: "15k+", color: "text-purple-400" },
    { label: "Taux de Satisfaction", value: "98%", color: "text-amber-400" },
];

export default function Stats() {
    return (
        <section className="relative py-12 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} tracking-tighter`}>
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

## 📄 `components\sections\landing\TrustedPartners.tsx`

```tsx
"use client";

import { useTranslations } from 'next-intl';

export default function TrustedPartners() {
    const t = useTranslations('Partners');

    return (
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
                    {t('title')}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white">TraMaSys</h3>
                    <h3 className="text-2xl font-bold text-white">Ride & Go</h3>
                    <h3 className="text-2xl font-bold text-white">Camer-VTC</h3>
                    <h3 className="text-2xl font-bold text-white">LogiTrans</h3>
                </div>
            </div>
        </section>
    );
}
```

## 📄 `components\social\CommentInput.tsx`

```tsx
"use client";

import { useState, useRef } from 'react';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import { Smile, Image as ImageIcon, Send, X, Sticker, Loader2 } from 'lucide-react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

interface Props {
    publicationId: string;
    parentId?: string;
    onSuccess: () => void;
    placeholder?: string;
    autoFocus?: boolean;
}

export default function CommentInput({ publicationId, parentId, onSuccess, placeholder = "Écrivez un commentaire...", autoFocus = false }: Props) {
    const { user } = useAuthStore();
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setImage(null);
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
    };

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setContent((prev) => prev + emojiData.emoji);
        setShowEmoji(false);
    };

    const handleSubmit = async () => {
        if (!content.trim() && !image) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('content', content);
        if (parentId) formData.append('parentId', parentId);
        if (image) formData.append('image', image); // Champ 'image' selon ton API

        try {
            await ugateApi.post(`/publications/${publicationId}/comments`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setContent('');
            removeImage();
            onSuccess();
            toast.success("Envoyé !");
        } catch (e) {
            console.error(e);
            toast.error("Erreur d'envoi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex gap-3 items-start w-full relative">
            {/* Avatar */}
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 overflow-hidden shrink-0 border border-slate-100">
                {user?.photoUri ? <img src={user.photoUri} className="w-full h-full object-cover" /> : user?.firstName?.charAt(0)}
            </div>

            <div className="flex-1 bg-slate-100 rounded-[1.5rem] p-2 relative transition-all focus-within:bg-white focus-within:shadow-md focus-within:ring-1 focus-within:ring-slate-200">

                {/* Prévisualisation Image */}
                {preview && (
                    <div className="relative w-fit mb-2 ml-2 mt-2">
                        <img src={preview} className="h-20 rounded-xl object-cover border border-slate-200" alt="Preview" />
                        <button onClick={removeImage} className="absolute -top-2 -right-2 bg-slate-900 text-white p-1 rounded-full hover:bg-red-500 transition-colors">
                            <X size={10} />
                        </button>
                    </div>
                )}

                {/* Input Texte */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    className="w-full bg-transparent border-none outline-none px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 resize-none min-h-[40px] max-h-[120px]"
                    rows={content.length > 50 ? 3 : 1}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                />

                {/* Toolbar */}
                <div className="flex justify-between items-center px-2 pb-1">
                    <div className="flex gap-1">
                        <button onClick={() => fileInputRef.current?.click()} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors" title="Ajouter une photo">
                            <ImageIcon size={18} />
                        </button>
                        <button onClick={() => setShowEmoji(!showEmoji)} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors relative" title="Emojis">
                            <Smile size={18} />
                        </button>
                        {/* Simulation Stickers */}
                        <button className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors" title="Stickers (Bientôt)">
                            <Sticker size={18} />
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || (!content.trim() && !image)}
                        className={cn(
                            "p-2 rounded-full transition-all",
                            (content.trim() || image) ? "text-primary-600 hover:bg-primary-50" : "text-slate-300 cursor-not-allowed"
                        )}
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                </div>

                {/* Emoji Picker Popover */}
                {showEmoji && (
                    <div className="absolute bottom-full left-0 mb-2 z-50 shadow-2xl rounded-2xl">
                        <div onClick={() => setShowEmoji(false)} className="fixed inset-0 z-40" /> {/* Overlay close */}
                        <div className="relative z-50">
                            <EmojiPicker onEmojiClick={onEmojiClick} width={300} height={400} />
                        </div>
                    </div>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageSelect}
                />
            </div>
        </div>
    );
}
```

## 📄 `components\social\CommentItem.tsx`

```tsx
"use client";

import { useState } from 'react';
import { CommentResponseDto } from '@/lib/types/api';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import CommentInput from './CommentInput';

interface Props {
    comment: CommentResponseDto;
    publicationId: string;
    allComments: CommentResponseDto[];
    depth?: number;
    refresh: () => void;
}

export default function CommentItem({ comment, publicationId, allComments, depth = 0, refresh }: Props) {
    const [isReplying, setIsReplying] = useState(false);
    const replies = allComments.filter(c => c.parentId === comment.id);

    return (
        <div className={`flex gap-3 ${depth > 0 ? 'mt-3' : 'mt-4'}`}>
            {/* Avatar */}
            <div className={`rounded-full bg-slate-200 flex items-center justify-center overflow-hidden shrink-0 border border-white shadow-sm ${depth > 0 ? 'w-6 h-6' : 'w-8 h-8'}`}>
                <span className="font-bold text-slate-500 text-xs">{comment.authorFullName.charAt(0)}</span>
            </div>

            <div className="flex-1">
                {/* Bulle */}
                <div className="inline-block bg-slate-100 rounded-2xl px-4 py-2.5 max-w-full">
                    <div className="font-bold text-slate-900 text-sm mb-0.5">{comment.authorFullName}</div>

                    {comment.content && <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>}

                    {comment.imageUrl && (
                        <img
                            src={comment.imageUrl}
                            alt="Comment attachment"
                            className="mt-2 rounded-xl max-h-60 object-cover border border-slate-200 cursor-pointer hover:opacity-90 transition-opacity"
                        />
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-1 ml-4">
                    <span className="text-[11px] font-medium text-slate-400">
                        {formatDistanceToNow(new Date(comment.createdAt), { locale: fr })}
                    </span>
                    <button
                        onClick={() => setIsReplying(!isReplying)}
                        className="text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                        Répondre
                    </button>
                    {/* Placeholder pour Like sur commentaire si API dispo */}
                    {/* <button className="text-[11px] font-bold text-slate-500 hover:text-slate-800">J'aime</button> */}
                </div>

                {/* Input Réponse */}
                {isReplying && (
                    <div className="mt-3">
                        <CommentInput
                            publicationId={publicationId}
                            parentId={comment.id}
                            onSuccess={() => { setIsReplying(false); refresh(); }}
                            autoFocus
                        />
                    </div>
                )}

                {/* Réponses imbriquées */}
                {replies.length > 0 && (
                    <div className="pl-2 border-l-2 border-slate-100 mt-2">
                        {replies.map(reply => (
                            <CommentItem
                                key={reply.id}
                                comment={reply}
                                publicationId={publicationId}
                                allComments={allComments}
                                depth={depth + 1}
                                refresh={refresh}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
```

## 📄 `components\social\CreateEventModal.tsx`

```tsx
"use client";

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import {
    X, Calendar, MapPin, Clock,
    Image as ImageIcon, Video, FileText,
    Loader2, UploadCloud, Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branchId: string;
    onSuccess: () => void;
}

export default function CreateEventModal({ isOpen, onClose, branchId, onSuccess }: Props) {
    const t = useTranslations('Event');
    const { user } = useAuthStore();
    const [loading, setLoading] = useState(false);

    // États du formulaire
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // État des médias
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'IMAGE' | 'VIDEO' | 'PDF') => {
        const selectedFiles = Array.from(e.target.files || []);
        const newFiles = selectedFiles.map(file => ({
            file,
            type,
            preview: URL.createObjectURL(file)
        }));
        setFiles(prev => [...prev, ...newFiles]);
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        URL.revokeObjectURL(newFiles[index].preview);
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    const handleSubmit = async () => {
        if (!title || !date || !startTime || !endTime || !location) {
            return toast.error("Veuillez remplir tous les champs obligatoires");
        }

        if (!user?.id) return toast.error("Erreur d'authentification");

        setLoading(true);
        const formData = new FormData();

        // Champs textes
        formData.append('title', title);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('eventDate', date);
        formData.append('startTime', startTime);
        formData.append('endTime', endTime);
        formData.append('branchId', branchId);
        formData.append('creatorId', user.id);

        // CORRECTION : Tous les médias sont envoyés dans le champ 'images'
        files.forEach(f => {
            formData.append('images', f.file);
        });

        try {
            await ugateApi.post('/events', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success("Événement créé avec succès !");

            // Réinitialisation
            setTitle(''); setDescription(''); setLocation('');
            setDate(''); setStartTime(''); setEndTime(''); setFiles([]);

            onSuccess();
            onClose();
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Erreur lors de la création");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/20">
                            <Calendar size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">{t('create_title')}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulaire */}
                <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-white">

                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Titre de l'événement</label>
                            <Input
                                placeholder="Ex: Réunion de branche"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="font-bold text-lg bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Description</label>
                            <textarea
                                className="w-full p-4 rounded-2xl border border-transparent bg-slate-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all min-h-[120px] text-sm font-medium text-slate-700 resize-none"
                                placeholder="Détails de l'événement..."
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Date</label>
                            <Input
                                type="date"
                                icon={Calendar}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Lieu</label>
                            <Input
                                placeholder="Localisation"
                                icon={MapPin}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Début</label>
                            <Input
                                type="time"
                                icon={Clock}
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Fin</label>
                            <Input
                                type="time"
                                icon={Clock}
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Médias & Documents</label>

                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <ImageIcon size={16} /> Photo
                                <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <Video size={16} /> Vidéo
                                <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-700 border border-red-100 rounded-xl cursor-pointer hover:bg-red-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <FileText size={16} /> PDF
                                <input type="file" className="hidden" accept="application/pdf" multiple onChange={(e) => handleFileSelect(e, 'PDF')} />
                            </label>
                        </div>

                        {files.length > 0 ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 animate-in fade-in">
                                {files.map((f, i) => (
                                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
                                        {f.type === 'IMAGE' && <img src={f.preview} className="w-full h-full object-cover" alt="preview" />}
                                        {f.type === 'VIDEO' && <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white"><Video size={20} /></div>}
                                        {f.type === 'PDF' && <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500"><FileText size={24} /></div>}

                                        <button
                                            onClick={() => removeFile(i)}
                                            className="absolute top-1 right-1 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[9px] p-1 truncate px-2 text-center backdrop-blur-sm">
                                            {f.file.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-400 bg-slate-50/50">
                                <UploadCloud className="mx-auto mb-3 opacity-50" size={32} />
                                <p className="text-xs font-medium">Glissez-déposez ou sélectionnez des fichiers</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3 z-10">
                    <Button variant="ghost" onClick={onClose} className="font-bold text-slate-500 hover:bg-slate-100">Annuler</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-8 bg-primary-800 hover:bg-primary-900 font-bold shadow-lg shadow-primary-900/20 rounded-xl"
                    >
                        {loading && <Loader2 size={18} className="animate-spin mr-2" />}
                        Publier l'événement
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
```

## 📄 `components\social\CreatePost.tsx`

```tsx
"use client";

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import {
    Image as ImageIcon, Video, FileText,
    Send, X, Loader2
} from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CreatePostProps {
    syndicateId: string;
    branchName?: string;
}

export default function CreatePost({ syndicateId, branchName }: CreatePostProps) {
    const t = useTranslations('Feed');
    const { user } = useAuthStore();

    // États
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

    // Gestion de la sélection de fichiers
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'IMAGE' | 'VIDEO' | 'PDF') => {
        const selectedFiles = Array.from(e.target.files || []);

        const newFiles = selectedFiles.map(file => ({
            file,
            type,
            preview: URL.createObjectURL(file)
        }));

        setFiles(prev => [...prev, ...newFiles]);
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        URL.revokeObjectURL(newFiles[index].preview);
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    // Envoi à l'API
    const handlePublish = async () => {
        if (!content.trim() && files.length === 0) return;
        if (!user?.id) return toast.error("Utilisateur non identifié");

        setLoading(true);
        const formData = new FormData();

        formData.append('content', content);
        formData.append('authorId', user.id);
        formData.append('branchId', syndicateId);

        // CORRECTION : Envoi via les champs spécifiques de l'API
        files.forEach(f => {
            if (f.type === 'IMAGE') formData.append('images', f.file);
            if (f.type === 'VIDEO') formData.append('videos', f.file);
            if (f.type === 'PDF') formData.append('files', f.file);
        });

        try {
            await ugateApi.post('/publications', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success("Publication réussie !");

            // Reset
            setContent('');
            setFiles([]);

            window.location.reload();
        } catch (error: any) {
            console.error("Erreur publication:", error);
            toast.error(error.response?.data?.message || "Erreur lors de la publication");
        } finally {
            setLoading(false);
        }
    };

    const placeholderText = branchName
        ? `Quoi de neuf à ${branchName}, ${user?.firstName} ?`
        : t('create_post_placeholder', { name: user?.firstName });

    return (
        <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">

            {/* Zone de Saisie */}
            <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-800 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-inner shrink-0">
                    {user?.firstName?.charAt(0) || 'U'}
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholderText}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-4 text-slate-700 font-medium outline-none border-none min-h-[100px] resize-none placeholder:text-slate-400"
                />
            </div>

            {/* Zone de Prévisualisation des fichiers */}
            {files.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6 animate-in zoom-in-95">
                    {files.map((f, i) => (
                        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
                            {f.type === 'IMAGE' && (
                                <img src={f.preview} className="w-full h-full object-cover" alt="preview" />
                            )}
                            {f.type === 'VIDEO' && (
                                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white">
                                    <Video size={24} />
                                </div>
                            )}
                            {f.type === 'PDF' && (
                                <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500">
                                    <FileText size={24} />
                                </div>
                            )}

                            <button
                                onClick={() => removeFile(i)}
                                className="absolute top-1 right-1 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Barre d'Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-slate-100 gap-4">
                <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-emerald-50 text-emerald-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <ImageIcon size={18} />
                        <span className="hidden md:inline">Photo</span>
                        <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                    </label>

                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <Video size={18} />
                        <span className="hidden md:inline">Vidéo</span>
                        <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                    </label>

                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-red-50 text-red-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <FileText size={18} />
                        <span className="hidden md:inline">PDF</span>
                        <input type="file" className="hidden" accept="application/pdf" multiple onChange={(e) => handleFileSelect(e, 'PDF')} />
                    </label>
                </div>

                <button
                    onClick={handlePublish}
                    disabled={loading || (!content.trim() && files.length === 0)}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-primary-900/20 disabled:opacity-50 disabled:grayscale"
                >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    {t('post_btn')}
                </button>
            </div>
        </div>
    );
}
```

## 📄 `components\social\CreateVoteModal.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { X, Plus, Trash2, Calendar, Loader2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branchId: string;
    onSuccess: () => void;
}

export default function CreateVoteModal({ isOpen, onClose, branchId, onSuccess }: Props) {
    const t = useTranslations('Votes');
    const [loading, setLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [closingAt, setClosingAt] = useState('');
    const [options, setOptions] = useState(['', '']); // Minimum 2 options

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index: number) => setOptions(options.filter((_, i) => i !== index));
    const updateOption = (index: number, val: string) => {
        const newOpts = [...options];
        newOpts[index] = val;
        setOptions(newOpts);
    };

    const handleSubmit = async () => {
        if (!title || options.some(o => !o) || !closingAt) {
            return toast.error("Veuillez remplir tous les champs");
        }

        setLoading(true);
        try {
            await ugateApi.post('/publication-votes', {
                title,
                description,
                branchId,
                closingAt: new Date(closingAt).toISOString(),
                type: 'SINGLE_CHOICE', // Par défaut
                choices: options // Note: Adapte si l'API attend un format différent pour les labels
            });

            toast.success(t('success_create'));
            onSuccess();
            onClose();
        } catch (error) {
            toast.error("Erreur lors de la création");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center">
                            <BarChart3 size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">{t('create_btn')}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors shadow-sm border border-transparent hover:border-slate-200">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulaire */}
                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Question du sondage</label>
                        <Input
                            placeholder="Ex: Quelle réforme prioriser pour 2025 ?"
                            value={title} onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Description (Optionnel)</label>
                        <textarea
                            className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all text-sm min-h-[100px]"
                            placeholder="Détails sur l'enjeu du vote..."
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-1">Options de réponse</label>
                        {options.map((opt, i) => (
                            <div key={i} className="flex gap-2">
                                <Input
                                    placeholder={`Option ${i + 1}`}
                                    value={opt} onChange={(e) => updateOption(i, e.target.value)}
                                />
                                {options.length > 2 && (
                                    <button onClick={() => removeOption(i)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={addOption}
                            className="flex items-center gap-2 text-primary-600 font-bold text-sm p-2 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                            <Plus size={16} /> Ajouter une option
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Date de clôture</label>
                        <div className="relative">
                            <Input
                                type="datetime-local"
                                value={closingAt} onChange={(e) => setClosingAt(e.target.value)}
                                className="pl-12"
                            />
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="font-bold text-slate-500">Annuler</Button>
                    <Button
                        onClick={handleSubmit} disabled={loading}
                        className="px-8 bg-primary-800 font-bold shadow-lg shadow-primary-900/20 rounded-xl"
                    >
                        {loading && <Loader2 size={18} className="animate-spin mr-2" />}
                        Lancer le vote
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
```

## 📄 `components\social\EventCard.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Event } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { Calendar, MapPin, Clock, CheckCircle2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';
import MediaGallery from './MediaGallery';

export default function EventCard({ event }: { event: Event }) {
    const t = useTranslations('Event');
    const [isJoined, setIsJoined] = useState(false);
    const [loading, setLoading] = useState(false);

    const formatTime = (time: any) => {
        if (!time?.hour && time?.hour !== 0) return "--:--";
        return `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
    };

    const handleJoin = async () => {
        setLoading(true);
        try {
            await ugateApi.post(`/events/${event.id}/join`);
            setIsJoined(true);
            toast.success(t('success_join'));
        } catch (error) {
            toast.error("Erreur de participation");
        } finally {
            setLoading(false);
        }
    };

    const eventDate = event.date ? new Date(event.date) : new Date();

    // Fusion de tous les médias pour MediaGallery (tout passe par images selon votre besoin)
    const mediaList = [
        ...(event.imageUrls || []),
        // @ts-ignore
        ...(event.videoUrls || []),
        // @ts-ignore
        ...(event.fileUrls || [])
    ];

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col h-full">

            {/* 1. Header avec Date & Titre */}
            <div className="p-8 pb-4 flex gap-6">
                {/* Bloc Date Premium */}
                <div className="w-16 h-16 bg-primary-800 rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg shadow-primary-900/20">
                    <span className="text-xl font-black leading-none">{eventDate.getDate()}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-80">
                        {eventDate.toLocaleString('fr', { month: 'short' })}
                    </span>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-md border border-red-100">
                            Événement
                        </span>
                        <button className="p-2 -mt-2 -mr-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all">
                            <Share2 size={18} />
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-primary-800 transition-colors">
                        {event.title}
                    </h3>
                </div>
            </div>

            {/* 2. Infos Pratiques (Lieu & Heure) */}
            <div className="px-8 py-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600">
                    <Clock size={14} className="text-primary-600" />
                    {formatTime(event.startTime)}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600 max-w-[200px]">
                    <MapPin size={14} className="text-primary-600" />
                    <span className="truncate">{event.location || "Lieu à définir"}</span>
                </div>
            </div>

            {/* 3. Description */}
            <div className="px-8 py-4 text-slate-600 text-sm leading-relaxed flex-grow">
                {event.description}
            </div>

            {/* 4. ZONE MÉDIA (Utilisation du composant universel) */}
            {mediaList.length > 0 && (
                <div className="w-full">
                    <MediaGallery media={mediaList} />
                </div>
            )}

            {/* 5. Footer avec Action */}
            <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/30 mt-auto">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-black text-slate-400">
                                U
                            </div>
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                        {event.participantCount || 0} participants
                    </span>
                </div>

                <Button
                    onClick={handleJoin}
                    disabled={isJoined || loading}
                    className={cn(
                        "rounded-xl px-8 h-12 font-bold shadow-lg transition-all text-sm",
                        isJoined
                            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20"
                            : "bg-primary-800 text-white hover:bg-primary-900 shadow-primary-900/20"
                    )}
                >
                    {isJoined ? <><CheckCircle2 size={18} className="mr-2" /> J'y vais</> : "Participer"}
                </Button>
            </div>
        </div>
    );
}
```

## 📄 `components\social\HorizontalPDFReader.tsx`

```tsx
"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, FileText } from 'lucide-react';
import PDFViewer from '@/components/ui/PDFViewer';

export default function HorizontalPDFReader({ url, title }: { url: string, title: string }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <div className="relative group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3] flex flex-col">
            {/* Header du mini-lecteur */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent z-10">
                <div className="flex items-center gap-2 text-white">
                    <FileText size={16} className="text-red-400" />
                    <span className="text-xs font-bold truncate max-w-[200px]">{title}</span>
                </div>
                <button
                    onClick={() => setIsFullScreen(true)}
                    className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-white transition-all"
                >
                    <Maximize2 size={14} />
                </button>
            </div>

            {/* Zone de contenu (Iframe avec focus sur la page) */}
            <div className="flex-1 w-full bg-slate-800">
                <iframe
                    src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full pointer-events-none"
                />
            </div>

            {/* Footer / Navigation Horizontale simulée (car l'iframe native gère souvent le scroll) */}
            {/* Pour une vraie navigation page par page sans scroll, on utiliserait react-pdf */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Aperçu du document</span>
            </div>

            <PDFViewer
                isOpen={isFullScreen}
                onClose={() => setIsFullScreen(false)}
                url={url}
                title={title}
            />
        </div>
    );
}
```

## 📄 `components\social\InfiniteFeed.tsx`

```tsx
"use client";
import { useInView } from 'react-intersection-observer';
import { useFeed } from '@/lib/hooks/useFeed';
import { useEffect } from 'react';
import PostCard from './PostCard';
import EventCard from './EventCard';
import VoteCard from './VoteCard'; // Si tu as un type 'poll' dans le feed
import { Loader2 } from 'lucide-react';
import CreatePost from './CreatePost';

export default function InfiniteFeed({ branchId, branchName }: { branchId: string, branchName?: string }) {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useFeed(branchId);

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage]);

    if (status === 'pending') return <FeedSkeleton />;
    if (status === 'error') return <div className="text-center py-10 text-red-500">Erreur de chargement du flux.</div>;

    return (
        <div className="space-y-6">
            <CreatePost syndicateId={branchId} branchName={branchName} />

            {data?.pages.map((page, i) => (
                <div key={i} className="space-y-6">
                    {page.map((item: any) => {
                        // Switch sur le type d'item renvoyé par /api/v1/feed
                        switch (item.type) {
                            case 'publication':
                                return <PostCard key={item.data.id} publication={item.data} />;
                            case 'event':
                                return <EventCard key={item.data.id} event={item.data} />;
                            case 'poll': // Si ton API feed inclut les votes
                                return <VoteCard key={item.data.id} voteId={item.data.id} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            ))}

            <div ref={ref} className="flex justify-center py-8">
                {isFetchingNextPage && <Loader2 className="animate-spin text-primary-500" />}
                {!hasNextPage && <p className="text-slate-400 text-sm">Vous avez tout vu !</p>}
            </div>
        </div>
    );
}

function FeedSkeleton() {
    return (
        <div className="space-y-6">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl p-6 h-64 animate-pulse shadow-sm" />
            ))}
        </div>
    );
}
```

## 📄 `components\social\MediaGallery.tsx`

```tsx
"use client";
import { cn } from '@/lib/ utils';
import { useState, useRef, useEffect } from 'react';
import HorizontalPDFReader from './HorizontalPDFReader';

interface MediaItem {
    url: string;
    type?: 'IMAGE' | 'VIDEO' | 'PDF' | 'AUDIO' | 'UNSUPPORTED';
}

type MediaType = 'IMAGE' | 'VIDEO' | 'PDF' | 'AUDIO' | 'UNSUPPORTED';

// Fonction pour détecter le type réel du média via les headers HTTP
export const detectMediaType = async (url: string): Promise<MediaType> => {
    try {
        // 1. Tentative HEAD
        const headResponse = await fetch(url, { method: 'HEAD' });
        const contentType = headResponse.headers.get('Content-Type')?.toLowerCase() || '';

        if (contentType.includes('application/pdf')) return 'PDF';
        if (contentType.startsWith('image/')) return 'IMAGE';
        if (contentType.startsWith('video/')) return 'VIDEO';
        if (contentType.startsWith('audio/')) return 'AUDIO';
    } catch (_) {
        // HEAD échoué → fallback
    }

    try {
        // 2. Fallback : GET partiel pour lire les magic bytes
        const response = await fetch(url, {
            headers: { Range: 'bytes=0-1023' },
        });
        const buffer = await response.arrayBuffer();
        const bytes = new Uint8Array(buffer);

        // PDF → "%PDF-" = 0x25 0x50 0x44 0x46 0x2D
        if (
            bytes[0] === 0x25 &&
            bytes[1] === 0x50 &&
            bytes[2] === 0x44 &&
            bytes[3] === 0x46 &&
            bytes[4] === 0x2d
        ) {
            return 'PDF';
        }

        // Images
        if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'IMAGE'; // JPEG
        if (bytes[0] === 0x89 && bytes[1] === 0x50) return 'IMAGE'; // PNG
        if (bytes[0] === 0x47 && bytes[1] === 0x49) return 'IMAGE'; // GIF
        if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) return 'IMAGE'; // WEBP

        // MP4 → "ftyp" at offset 4
        if (
            bytes[4] === 0x66 &&
            bytes[5] === 0x74 &&
            bytes[6] === 0x79 &&
            bytes[7] === 0x70
        ) {
            return 'VIDEO';
        }

        // MP3 → "ID3"
        if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return 'AUDIO';

    } catch (error) {
        console.warn('Impossible de détecter le type du média:', error);
    }

    return 'UNSUPPORTED';
};


function MediaContent({ url, type, index }: { url: string; type: MediaType; index: number }) {
    const [actualType, setActualType] = useState<MediaType>(type);
    const [attemptedTypes, setAttemptedTypes] = useState<Set<MediaType>>(new Set([type]));
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Observer pour la lecture automatique des vidéos
    useEffect(() => {
        if (actualType !== 'VIDEO' || !videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => {});
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, [actualType]);

    const handleError = () => {
        console.log(`Erreur pour ${actualType}, tentatives:`, attemptedTypes);

        // Définir l'ordre des tentatives
        const tryOrder: MediaType[] = ['IMAGE', 'VIDEO', 'AUDIO', 'PDF'];

        // Trouver le prochain type à essayer
        let nextType: MediaType | null = null;
        for (const tryType of tryOrder) {
            if (!attemptedTypes.has(tryType)) {
                nextType = tryType;
                break;
            }
        }

        if (nextType) {
            setAttemptedTypes(prev => new Set([...prev, nextType!]));
            setActualType(nextType);
        } else {
            // Tous les types ont été testés
            setActualType('UNSUPPORTED');
        }
    };

    if (actualType === 'UNSUPPORTED') {
        return (
            <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <div className="text-center p-6">
                    <svg
                        className="w-16 h-16 mx-auto text-slate-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <p className="text-slate-600 font-medium">Média non supporté</p>
                    <p className="text-slate-400 text-sm mt-1">Ce format ne peut pas être affiché</p>
                </div>
            </div>
        );
    }

    if (actualType === 'VIDEO') {
        return (
            <video
                ref={videoRef}
                src={url}
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={handleError}
                preload="metadata"
            >
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
        );
    }

    if (actualType === 'AUDIO') {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                <div className="w-full max-w-md">
                    <div className="mb-4 text-center">
                        <svg
                            className="w-16 h-16 mx-auto text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                            />
                        </svg>
                        <p className="text-white/60 text-sm mt-2">Fichier audio</p>
                    </div>
                    <audio
                        ref={audioRef}
                        src={url}
                        controls
                        className="w-full"
                        onError={handleError}
                        preload="metadata"
                    >
                        Votre navigateur ne supporte pas la lecture audio.
                    </audio>
                </div>
            </div>
        );
    }

    return (
        <img
            src={url}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt={`Media content ${index + 1}`}
            onError={handleError}
            loading="lazy"
        />
    );
}

export default function MediaGallery({ media }: { media: (MediaItem | string)[] }) {
    if (!media || media.length === 0) return null;

    const [normalizedMedia, setNormalizedMedia] = useState<{ url: string; type: MediaType }[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Détection asynchrone des types de médias
    useEffect(() => {
        const detectAllTypes = async () => {
            setIsLoading(true);

            const detected = await Promise.all(
                media.map(async (item) => {
                    const url = typeof item === 'string' ? item : item.url;
                    const explicitType = typeof item === 'object' ? item.type : undefined;

                    // Si le type est explicitement fourni, on l'utilise
                    if (explicitType) {
                        return { url, type: explicitType };
                    }

                    // Sinon, on détecte automatiquement
                    const detectedType = await detectMediaType(url);
                    return { url, type: detectedType };
                })
            );

            setNormalizedMedia(detected);
            setIsLoading(false);
        };

        detectAllTypes();
    }, [media]);

    if (isLoading) {
        return (
            <div className="w-full aspect-video bg-slate-100 animate-pulse flex items-center justify-center">
                <div className="text-slate-400">Chargement des médias...</div>
            </div>
        );
    }

    const visuals = normalizedMedia.filter(m => m.type === 'IMAGE' || m.type === 'VIDEO' || m.type === 'AUDIO' || m.type === 'UNSUPPORTED');
    const pdfs = normalizedMedia.filter(m => m.type === 'PDF');

    return (
        <div className="w-full">
            {/* Galerie Visuelle - Images, Vidéos, Audios et Non supportés */}
            {visuals.length > 0 && (
                <div className={cn(
                    "w-full overflow-hidden bg-black",
                    visuals.length === 1 && "aspect-[4/5] max-h-[600px]",
                    visuals.length === 2 && "grid grid-cols-2 gap-0.5 aspect-[16/9] max-h-[500px]",
                    visuals.length === 3 && "grid grid-cols-2 gap-0.5 aspect-[4/3] max-h-[500px]",
                    visuals.length >= 4 && "grid grid-cols-2 gap-0.5 aspect-square max-h-[500px]"
                )}>
                    {visuals.slice(0, 4).map((m, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative w-full h-full bg-black flex items-center justify-center overflow-hidden",
                                visuals.length === 3 && i === 0 && "row-span-2"
                            )}
                        >
                            <MediaContent url={m.url} type={m.type} index={i} />

                            {i === 3 && visuals.length > 4 && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">
                                        +{visuals.length - 4}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Documents PDF - Section séparée */}
            {pdfs.length > 0 && (
                <div className="px-4 py-4 space-y-3 bg-slate-50">
                    {pdfs.map((pdf, i) => (
                        <HorizontalPDFReader
                            key={i}
                            url={pdf.url}
                            title={`Document joint ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
```

## 📄 `components\social\PostCard.tsx`

```tsx
"use client";

import { useState, useRef } from 'react';
import { Publication } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import {
    MessageCircle, Share2, ThumbsUp, MoreHorizontal,
    Globe, CheckCircle2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

// Composants internes
import MediaGallery from './MediaGallery';
import PostModal from './PostModal';
import ReactionPicker, { REACTION_TYPES } from './ReactionPicker';
import UserAvatar from '@/components/ui/UserAvatar'; // ✅ Import du composant Avatar

interface PostCardProps {
    publication: Publication;
}

export default function PostCard({ publication }: PostCardProps) {
    const { user } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // --- GESTION DES RÉACTIONS ---
    const [showReactions, setShowReactions] = useState(false);
    const [currentReaction, setCurrentReaction] = useState<string | null>(null);
    const [likeCount, setLikeCount] = useState(publication.nlikes || 0);

    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // --- ⚡ LOGIQUE API STRICTE ---
    const handleReaction = async (type: string) => {
        // 1. Validation de l'utilisateur connecté
        if (!user?.id) {
            toast.error("Veuillez vous connecter pour réagir");
            return;
        }

        // Fermeture du picker
        setShowReactions(false);
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

        // Sauvegarde pour rollback
        const previousReaction = currentReaction;
        const previousCount = likeCount;

        // Mise à jour Optimiste (UX Instantanée)
        // Note: L'API ne gérant pas le "toggle" (suppression), on écrase juste la valeur.
        const isNew = currentReaction === null;
        setCurrentReaction(type);
        if (isNew) setLikeCount(prev => prev + 1);

        try {
            // 2. Appel API conforme au Swagger
            // POST /publications/{publicationId}/reactions
            // Body: CreateReactionRequest { userId: UUID, reactionType: Enum }

            const payload = {
                userId: user.id,      // UUID de l'utilisateur connecté
                reactionType: type    // "LIKE", "LOVE", "HAHA", etc.
            };

            await ugateApi.post(`/publications/${publication.id}/reactions`, payload);

            // Pas de toast de succès pour ne pas spammer l'utilisateur (comme FB)
        } catch (error: any) {
            console.error("Erreur réaction:", error.response?.data);

            // 3. Rollback en cas d'erreur
            setCurrentReaction(previousReaction);
            setLikeCount(previousCount);
            toast.error("Impossible d'enregistrer la réaction");
        }
    };

    // --- GESTION DU SURVOL ---
    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => setShowReactions(true), 400);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => setShowReactions(false), 300);
    };

    // --- VISUELS DU BOUTON PRINCIPAL ---
    const getReactionVisuals = () => {
        if (!currentReaction) {
            return {
                icon: <ThumbsUp size={18} />,
                label: "J'aime",
                colorClass: "text-slate-600 hover:bg-slate-50"
            };
        }

        const config = REACTION_TYPES.find(r => r.label === currentReaction);
        if (!config) return { icon: <ThumbsUp size={18} />, label: "J'aime", colorClass: "text-blue-600" };

        return {
            icon: <span className="text-xl leading-none -mt-1">{config.emoji}</span>,
            label: config.name,
            colorClass: `${config.color} bg-slate-50`
        };
    };

    const visuals = getReactionVisuals();

    // --- LOGIQUE D'AFFICHAGE DU TEXTE ---
    const textLimit = 200;
    const isLongText = publication.content && publication.content.length > textLimit;
    const displayContent = isExpanded || !isLongText
        ? publication.content
        : publication.content?.slice(0, textLimit) + "...";

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-visible mb-6"
            >
                {/* 1. EN-TÊTE AVEC AVATAR API AUTH */}
                <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                        {/* ✅ Utilisation du UserAvatar pour récupérer la photo depuis l'Auth API */}
                        <UserAvatar
                            userId={publication.authorId || ""} // Utilisation de l'authorId de la publi
                            fallbackName={publication.authorFullName}
                            className="w-11 h-11"
                        />

                        <div>
                            <h3 className="font-bold text-[15px] text-slate-900 leading-tight hover:underline cursor-pointer">
                                {publication.authorFullName}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                                <span className="font-medium text-slate-400">
                                    {publication.createdAt
                                        ? formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })
                                        : 'À l\'instant'}
                                </span>
                                <span className="text-slate-300">•</span>
                                <Globe size={10} className="text-slate-400" />
                            </div>
                        </div>
                    </div>

                    <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                {/* 2. CONTENU TEXTUEL */}
                {publication.content && (
                    <div className="px-4 pb-3">
                        <p className="text-[15px] leading-relaxed text-slate-800 whitespace-pre-wrap font-normal">
                            {displayContent}
                        </p>
                        {isLongText && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-slate-500 font-bold text-sm hover:underline mt-1 hover:text-primary-600"
                            >
                                {isExpanded ? "Voir moins" : "Voir plus"}
                            </button>
                        )}
                    </div>
                )}

                {/* 3. MÉDIAS (EDGE-TO-EDGE) */}
                {publication.fileUrlAndType?.length > 0 && (
                    <div
                        className="w-full bg-slate-50 cursor-pointer border-t border-slate-100"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <MediaGallery media={publication.fileUrlAndType} />
                    </div>
                )}

                {/* 4. BARRE DE STATISTIQUES */}
                <div className="px-4 py-3 flex items-center justify-between text-xs text-slate-500 border-b border-slate-50">
                    <div className="flex items-center gap-1.5 min-h-[20px]">
                        {likeCount > 0 && (
                            <div className="flex items-center gap-1 animate-in fade-in zoom-in duration-300">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ring-2 ring-white shadow-sm">
                                    <ThumbsUp size={10} fill="white" className="text-white" />
                                </div>
                                {/* Si une autre réaction que Like est dominante, on pourrait l'afficher ici */}
                                <span className="hover:underline cursor-pointer font-medium ml-1 text-slate-600">
                                    {likeCount}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3 font-medium text-slate-500">
                        <span onClick={() => setIsModalOpen(true)} className="hover:underline cursor-pointer hover:text-slate-700">
                            {publication.ncomments > 0 ? `${publication.ncomments} commentaires` : "0 commentaire"}
                        </span>
                    </div>
                </div>

                {/* 5. BARRE D'ACTIONS */}
                <div className="px-2 py-1 relative z-10">
                    <div className="grid grid-cols-3 gap-1">

                        {/* A. RÉACTION (HOVER & CLICK) */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <AnimatePresence>
                                {showReactions && (
                                    <ReactionPicker onSelect={handleReaction} />
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleReaction(currentReaction || 'LIKE')}
                                className={cn(
                                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 select-none",
                                    visuals.colorClass
                                )}
                            >
                                <motion.div
                                    key={currentReaction || 'default'}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {visuals.icon}
                                </motion.div>
                                <span className="hidden sm:inline">{visuals.label}</span>
                            </motion.button>
                        </div>

                        {/* B. COMMENTER */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-bold transition-colors active:scale-95"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden sm:inline">Commenter</span>
                        </button>

                        {/* C. PARTAGER */}
                        <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-bold transition-colors active:scale-95">
                            <Share2 size={18} />
                            <span className="hidden sm:inline">Partager</span>
                        </button>
                    </div>
                </div>

            </motion.article>

            {/* MODALE DÉTAILS */}
            <PostModal
                publication={publication}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
```

## 📄 `components\social\PostModal.tsx`

```tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Publication, CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { X, MoreHorizontal, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import MediaGallery from './MediaGallery';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Props {
    publication: Publication;
    isOpen: boolean;
    onClose: () => void;
}

export default function PostModal({ publication, isOpen, onClose }: Props) {
    const [comments, setComments] = useState<CommentResponseDto[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        setLoading(true);
        try {
            const res = await ugateApi.get(`/publications/${publication.id}/comments`);
            setComments(res.data);
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Bloquer le scroll
            fetchComments();
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    // Détection si c'est un post purement textuel ou avec média
    const hasMedia = publication.fileUrlAndType && publication.fileUrlAndType.length > 0;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
                {/* Backdrop Noir avec flou */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full h-full md:h-[90vh] md:max-w-[95vw] bg-white md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    <button onClick={onClose} className="absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 md:hidden">
                        <X size={20} />
                    </button>

                    {/* COLONNE GAUCHE : MÉDIAS (Noir) */}
                    {hasMedia && (
                        <div className="flex-1 bg-black flex items-center justify-center overflow-y-auto md:overflow-hidden relative min-h-[40vh]">
                            <div className="w-full max-w-4xl p-4">
                                <MediaGallery media={publication.fileUrlAndType} />
                            </div>
                        </div>
                    )}

                    {/* COLONNE DROITE : INFO & COMMENTAIRES (Blanc) */}
                    <div className={`flex flex-col bg-white h-full ${hasMedia ? 'w-full md:w-[450px] shrink-0' : 'w-full max-w-3xl mx-auto border-x border-slate-100'}`}>

                        {/* Header Post */}
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold">
                                    {publication.authorFullName.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">{publication.authorFullName}</h3>
                                    <div className="text-xs text-slate-500">
                                        {formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><MoreHorizontal size={20} /></button>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hidden md:block"><X size={20} /></button>
                            </div>
                        </div>

                        {/* Contenu Scrollable */}
                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                            <p className="text-slate-800 text-[15px] leading-relaxed mb-4 whitespace-pre-wrap">
                                {publication.content}
                            </p>

                            <div className="border-y border-slate-100 py-2 flex justify-between text-slate-500 text-sm mb-4">
                                <span>{publication.nlikes} J'aime</span>
                                <span>{comments.length} commentaires</span>
                            </div>

                            {/* Actions Rapides */}
                            <div className="flex gap-1 mb-4">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <ThumbsUp size={18} /> J'aime
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <MessageCircle size={18} /> Commenter
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <Share2 size={18} /> Partager
                                </button>
                            </div>

                            {/* Liste Commentaires */}
                            <div className="space-y-4 pb-4">
                                {comments.filter(c => !c.parentId).map(comment => (
                                    <CommentItem
                                        key={comment.id}
                                        comment={comment}
                                        publicationId={publication.id}
                                        allComments={comments}
                                        refresh={fetchComments}
                                    />
                                ))}
                                {comments.length === 0 && !loading && (
                                    <div className="text-center py-10 text-slate-400">
                                        Soyez le premier à commenter !
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer Input Fixe */}
                        <div className="p-4 border-t border-slate-100 bg-white">
                            <CommentInput
                                publicationId={publication.id}
                                onSuccess={fetchComments}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
```

## 📄 `components\social\ReactionPicker.tsx`

```tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Vos types de réactions
export const REACTION_TYPES = [
    { label: 'LIKE', emoji: '👍', color: 'text-blue-600', name: 'J\'aime' },
    { label: 'LOVE', emoji: '❤️', color: 'text-red-600', name: 'J\'adore' },
    { label: 'HAHA', emoji: '😂', color: 'text-yellow-500', name: 'Haha' },
    { label: 'WOW', emoji: '😮', color: 'text-amber-500', name: 'Wouah' },
    { label: 'SAD', emoji: '😢', color: 'text-blue-400', name: 'Triste' },
    { label: 'ANGRY', emoji: '😡', color: 'text-orange-600', name: 'Grrr' },
];

interface ReactionPickerProps {
    onSelect: (type: string) => void;
}

export default function ReactionPicker({ onSelect }: ReactionPickerProps) {
    // On suit quel émoji est survolé pour afficher son label
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10, transition: { duration: 0.2 } }}
            className="absolute bottom-full left-0 mb-3 z-50"
            // Important : on empêche le clic de se propager au post en dessous
            onClick={(e) => e.stopPropagation()}
        >
            {/* Conteneur Blanc (La "Dock") */}
            <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-1.5 flex gap-2 items-center">
                {REACTION_TYPES.map((reaction, i) => (
                    <div key={reaction.label} className="relative group">

                        {/* 1. Le Label (Tooltip) qui apparaît au survol */}
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -45, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap backdrop-blur-sm pointer-events-none"
                                >
                                    {reaction.name}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 2. Le Bouton Emoji Animé */}
                        <motion.button
                            // Animation d'entrée en cascade (stagger)
                            initial={{ opacity: 0, y: 20, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { delay: i * 0.05, type: "spring", stiffness: 400, damping: 15 }
                            }}

                            // Animation au survol (Gros zoom + oscillation)
                            whileHover={{
                                scale: 1.5,
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.9 }}

                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            onClick={() => onSelect(reaction.label)}

                            className="w-10 h-10 flex items-center justify-center text-3xl transition-colors relative"
                            style={{
                                // Permet aux emojis de ne pas être flous lors du scale
                                willChange: "transform",
                                filter: hoveredIndex === i ? "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" : "none"
                            }}
                        >
                            {/* L'Emoji */}
                            {reaction.emoji}
                        </motion.button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
```

## 📄 `components\social\VoteCard.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { PublicationVoteWithResultsDTO } from '@/lib/types/api';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Circle, Loader2, Info, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

export default function VoteCard({ voteId }: { voteId: string }) {
    const t = useTranslations('Votes');
    const { user } = useAuthStore();

    const [voteData, setVoteData] = useState<PublicationVoteWithResultsDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const fetchResults = async () => {
        try {
            const res = await ugateApi.get(`/publication-votes/${voteId}/results`);
            setVoteData(res.data);
        } catch (error) {
            console.error("Erreur chargement vote", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchResults(); }, [voteId]);

    const handleCastVote = async () => {
        if (!selectedChoice) return;
        setVoting(true);
        try {
            await ugateApi.post(`/publication-votes/${voteId}/cast`, {
                choiceLabel: selectedChoice
            });
            toast.success(t('success_vote'));
            fetchResults(); // Rafraîchir pour voir les résultats
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur");
        } finally {
            setVoting(false);
        }
    };

    if (loading) return <div className="p-8 bg-white rounded-3xl border border-slate-100 flex justify-center"><Loader2 className="animate-spin text-primary-600" /></div>;
    if (!voteData) return null;

    const isClosed = new Date(voteData.closingAt) < new Date();
    const canVote = !voteData.hasVoted && !isClosed;

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="p-8">
                {/* Header du Vote */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center">
                            <BarChart3 size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{voteData.title}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                                {isClosed ? t('closed') : t('closing_at', { date: new Date(voteData.closingAt).toLocaleDateString() })}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-slate-600 text-sm mb-8 leading-relaxed">{voteData.description}</p>

                {/* Options / Résultats */}
                <div className="space-y-3">
                    {voteData.results.map((result) => {
                        const percentage = voteData.totalVotes > 0
                            ? Math.round((result.count / voteData.totalVotes) * 100)
                            : 0;

                        return (
                            <div key={result.choiceLabel} className="relative">
                                {canVote ? (
                                    // Mode Vote
                                    <button
                                        onClick={() => setSelectedChoice(result.choiceLabel)}
                                        className={cn(
                                            "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left",
                                            selectedChoice === result.choiceLabel
                                                ? "border-primary-600 bg-primary-50/50 shadow-md shadow-primary-900/5"
                                                : "border-slate-100 hover:border-slate-300 bg-slate-50/50"
                                        )}
                                    >
                                        {selectedChoice === result.choiceLabel
                                            ? <CheckCircle2 className="text-primary-600 shrink-0" />
                                            : <Circle className="text-slate-300 shrink-0" />
                                        }
                                        <span className={cn("font-bold text-sm", selectedChoice === result.choiceLabel ? "text-primary-900" : "text-slate-700")}>
                                            {result.choiceLabel}
                                        </span>
                                    </button>
                                ) : (
                                    // Mode Résultats
                                    <div className="relative h-14 w-full bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                                        {/* Barre de progression animée */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, ease: "circOut" }}
                                            className={cn(
                                                "absolute inset-y-0 left-0 bg-primary-800/10 border-r-2 border-primary-800/20",
                                                voteData.hasVoted && "bg-emerald-500/10 border-emerald-500/20"
                                            )}
                                        />
                                        <div className="absolute inset-0 px-5 flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-800">{result.choiceLabel}</span>
                                            <span className="text-sm font-black text-primary-800">{percentage}%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-tighter">
                        <Info size={14} />
                        {t('total_votes', { count: voteData.totalVotes })}
                    </div>

                    {canVote && (
                        <Button
                            onClick={handleCastVote}
                            disabled={!selectedChoice || voting}
                            className="rounded-xl px-8 bg-primary-800 shadow-xl shadow-primary-900/20 font-bold"
                        >
                            {voting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                            {t('vote_now')}
                        </Button>
                    )}

                    {voteData.hasVoted && (
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                            <CheckCircle2 size={18} />
                            {t('already_voted')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
```

## 📄 `components\syndicate\BranchSelector.tsx`

```tsx
"use client";

import { useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { Branch } from '@/lib/types/api';
import { MapPin, ArrowRight, Building2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    syndicateId: string;
    onSelect: (branchId: string) => void;
}

export default function BranchSelector({ syndicateId, onSelect }: Props) {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const res = await ugateApi.get(`/syndicates/${syndicateId}/branches`);
                setBranches(res.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchBranches();
    }, [syndicateId]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin w-10 h-10 text-primary-800" /></div>;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-3">Choisissez une antenne</h2>
                <p className="text-slate-500 font-medium">
                    En tant qu'administrateur, vous avez accès à l'ensemble du réseau.
                    Sélectionnez l'antenne que vous souhaitez gérer ou consulter.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch, idx) => (
                    <motion.button
                        key={branch.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => onSelect(branch.id)}
                        className="group bg-white p-6 rounded-[2rem] border border-slate-200 text-left shadow-sm hover:shadow-xl hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-10 -mt-10 group-hover:bg-primary-50 transition-colors" />

                        <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 relative z-10 shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 size={24} />
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors relative z-10">
                            {branch.name}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wide mb-6 relative z-10">
                            <MapPin size={12} />
                            {branch.location}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50 relative z-10">
                            <span className="text-xs font-medium text-slate-400">Accéder à l'espace</span>
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
```

## 📄 `components\syndicate\SyndicateCard.tsx`

```tsx
"use client";

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Syndicate } from '@/lib/types/api';
import { Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface SyndicateCardProps {
    syndicate: Syndicate;
}

export default function SyndicateCard({ syndicate }: SyndicateCardProps) {
    const t = useTranslations('Explorer');

    return (
        <Link href={`/explorer/${syndicate.id}`} className="block h-full">
            <div className="group relative bg-white h-full rounded-2xl overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] hover:-translate-y-1">

                {/* BANNIÈRE (Utilisation du champ logo comme demandé) */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                    {syndicate.logoUrl ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${syndicate.logoUrl})` }}
                        />
                    ) : (
                        // Fallback joli si pas d'image
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black" />
                    )}

                    {/* Overlay dégradé pour lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge Statut Flottant */}
                    <div className="absolute top-4 right-4">
                        {syndicate.isActive && (
                            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white flex items-center gap-1">
                                <ShieldCheck size={12} className="text-emerald-400" />
                                {t('active_status')}
                            </Badge>
                        )}
                    </div>

                    {/* Domaine (Catégorie) */}
                    <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-primary-900/20">
                            {syndicate.domain}
                        </span>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-1">
                        {syndicate.name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {syndicate.description || "..."}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                            <Users size={16} className="text-primary-500" />
                            <span>{t('members_count', { count: syndicate.stats?.totalMembers || 0 })}</span>
                        </div>

                        <span className="flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                            {t('see_details')}
                            <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
```

## 📄 `components\ui\AdaptiveImage.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useSettings } from '@/lib/context/SettingsContext';
import { Image as ImageIcon, Loader2, DownloadCloud } from 'lucide-react';
import { cn } from '@/lib/ utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

export default function AdaptiveImage({ src, alt, className, ...props }: Props) {
    const { shouldLoadHighRes } = useSettings();

    // État local : est-ce que l'utilisateur a cliqué pour charger manuellement ?
    const [forceLoad, setForceLoad] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // On charge l'image si : Le réseau est bon OU l'utilisateur a forcé le chargement
    const shouldRenderImage = shouldLoadHighRes || forceLoad;

    if (!shouldRenderImage) {
        return (
            <div
                onClick={(e) => { e.stopPropagation(); setForceLoad(true); }}
                className={cn(
                    "bg-slate-100 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all group border border-slate-200 min-h-[200px]",
                    className
                )}
            >
                <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <DownloadCloud className="text-primary-600" size={24} />
                </div>
                <span className="text-xs text-slate-700 font-bold">Cliquer pour afficher</span>
                <span className="text-[10px] text-slate-400 font-medium mt-1">Mode Éco activé • {alt.substring(0, 20)}...</span>
            </div>
        );
    }

    return (
        <div className={cn("relative overflow-hidden bg-slate-50", className)}>
            <img
                src={src}
                alt={alt}
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    isLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={() => setIsLoading(false)}
                onError={() => { setIsLoading(false); setHasError(true); }}
                {...props}
            />

            {/* Spinner de chargement */}
            {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-sm">
                    <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
                </div>
            )}

            {/* Fallback erreur */}
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium">Image indisponible</span>
                </div>
            )}
        </div>
    );
}
```

## 📄 `components\ui\Badge.tsx`

```tsx
import { cn } from "@/lib/ utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    const variants = {
        default: "bg-primary-500/20 text-primary-400 border-primary-500/20",
        success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
        warning: "bg-amber-500/20 text-amber-400 border-amber-500/20",
        error: "bg-red-500/20 text-red-400 border-red-500/20",
        outline: "bg-transparent text-slate-400 border-slate-700"
    };

    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}
```

## 📄 `components\ui\Button.tsx`

```tsx
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/ utils'; // On créera cet utilitaire juste après

// Définition des variantes et des styles avec CVA (Class Variance Authority)
const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
    {
        variants: {
            variant: {
                primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20',
                secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-100',
                outline: 'border-2 border-slate-300 text-slate-700 hover:bg-slate-100',
                ghost: 'hover:bg-slate-100 hover:text-slate-900',
                destructive: 'bg-red-500 text-white hover:bg-red-600',
                link: 'text-primary-600 underline-offset-4 hover:underline',
            },
            size: {
                sm: 'h-9 px-4',
                md: 'h-11 px-6 py-3',
                lg: 'h-12 px-8 text-base',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

## 📄 `components\ui\FileUpload.tsx`

```tsx
"use client";

import { useState, useRef } from 'react';
import { Upload, FileCheck, X, FileText } from 'lucide-react';
import { cn } from '@/lib/ utils';

interface FileUploadProps {
    label: string;
    accept?: string;
    onChange: (file: File | null) => void;
    error?: string;
}

export default function FileUpload({ label, accept = "image/*,application/pdf", onChange, error }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (f: File) => {
        setFile(f);
        onChange(f);
    };

    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">{label}</label>
            <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
                }}
                className={cn(
                    "relative border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer flex flex-col items-center justify-center text-center",
                    isDragging ? "border-primary-500 bg-primary-50" : "border-slate-200 bg-slate-50 hover:bg-white hover:border-primary-300",
                    file ? "border-emerald-500 bg-emerald-50" : "",
                    error ? "border-red-300 bg-red-50" : ""
                )}
            >
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    accept={accept}
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />

                {file ? (
                    <div className="flex flex-col items-center animate-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                            <FileCheck size={24} />
                        </div>
                        <p className="text-sm font-bold text-emerald-900 truncate max-w-[200px]">{file.name}</p>
                        <button
                            onClick={(e) => { e.stopPropagation(); setFile(null); onChange(null); }}
                            className="mt-2 text-xs text-red-500 font-bold hover:underline"
                        >
                            Supprimer
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center mb-3 shadow-sm border border-slate-100">
                            <Upload size={20} />
                        </div>
                        <p className="text-sm text-slate-600 font-medium">
                            <span className="text-primary-600">Cliquez pour charger</span> ou glissez-déposez
                        </p>
                        <p className="text-xs text-slate-400 mt-1">PNG, JPG ou PDF jusqu'à 5MB</p>
                    </>
                )}
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}
```

## 📄 `components\ui\GlassCard.tsx`

```tsx
import { cn } from '@/lib/ utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                "bg-slate-900/40 backdrop-blur-xl border border-white/10",
                hoverEffect && "hover:bg-slate-800/60 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}
```

## 📄 `components\ui\Input.tsx`

```tsx
import * as React from 'react';
import { cn } from '@/lib/ utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon: Icon, error, ...props }, ref) => {
        return (
            <div className="relative group w-full">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary-600 pointer-events-none">
                        <Icon size={18} />
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        // Base styles
                        "flex h-12 w-full rounded-2xl border px-4 py-2 text-sm transition-all duration-300 outline-none",

                        // Couleurs (Light Mode Premium)
                        "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400",

                        // Focus states
                        "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10",

                        // Disabled state
                        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500",

                        // Icon padding
                        Icon && "pl-11",

                        // Error state
                        error && "border-red-300 focus:border-red-500 focus:ring-red-500/10",

                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <span className="text-xs text-red-500 mt-1.5 ml-1 block font-medium">{error}</span>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };
```

## 📄 `components\ui\Label.tsx`

```tsx
"use client";

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/ utils';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), 'text-slate-300 mb-2 block', className)}
        {...props}
    />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

## 📄 `components\ui\Logo.tsx`

```tsx
import { Link } from '@/navigation';
import { cn } from '@/lib/ utils'

interface LogoProps {
    className?: string;
    textClassName?: string;
    dark?: boolean; // Pour changer la couleur du texte
}

export function Logo({ className, textClassName, dark = false }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-black text-2xl">U</span>
            </div>
            <span
                className={cn(
                    "text-2xl font-bold tracking-tighter",
                    dark ? "text-slate-900" : "text-white",
                    textClassName
                )}
            >
        U-Gate
      </span>
        </Link>
    );
}
```

## 📄 `components\ui\PDFViewer.tsx`

```tsx
"use client";

import { X, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PDFViewerProps {
    isOpen: boolean;
    onClose: () => void;
    url: string | null;
    title: string;
}

export default function PDFViewer({ isOpen, onClose, url, title }: PDFViewerProps) {
    if (!isOpen || !url) return null;

    // Astuce : On utilise le viewer Google pour contourner les restrictions X-Frame-Options/CORS
    // Cela garantit l'affichage même si le serveur de fichiers est strict.
    const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

                {/* Backdrop sombre flouté (cliquer pour fermer) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-all"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700"
                >
                    {/* Header du Viewer Premium */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 shadow-sm">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm md:text-base line-clamp-1">{title}</h3>
                                <p className="text-xs text-slate-500 font-medium">Document certifié</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Bouton de Secours (Ouvrir l'original) */}
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-primary-600 transition-colors"
                            >
                                <ExternalLink size={14} />
                                Ouvrir l'original
                            </a>

                            {/* Bouton Fermer */}
                            <button
                                onClick={onClose}
                                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Zone de lecture avec Fallback */}
                    <div className="flex-1 bg-slate-100 relative w-full h-full">
                        <iframe
                            src={viewerUrl}
                            className="w-full h-full border-none"
                            title={title}
                            allowFullScreen
                        />

                        {/* Message si le chargement est long ou échoue (affiché derrière l'iframe) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-slate-400">
                            <div className="animate-pulse">Chargement du document...</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
```

## 📄 `components\ui\UserAvatar.tsx`

```tsx
"use client";

import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/lib/axios';
import { UserResponse } from '@/lib/types/api';
import { cn } from '@/lib/ utils';

interface UserAvatarProps {
    userId: string;
    fallbackName: string;
    className?: string;
}

export default function UserAvatar({ userId, fallbackName, className }: UserAvatarProps) {
    // 1. Récupération optimisée du profil utilisateur via l'API Auth
    const { data: userProfile, isLoading } = useQuery<UserResponse>({
        queryKey: ['user-profile', userId],
        queryFn: async () => {
            const res = await authApi.get(`/api/users/${userId}`);
            return res.data;
        },
        staleTime: 1000 * 60 * 60, // Cache de 1 heure (les photos changent rarement)
        enabled: !!userId, // Ne lance pas la requête si pas d'ID
    });

    const initial = fallbackName.charAt(0).toUpperCase();

    // Classes de base pour le conteneur
    const containerClass = cn(
        "relative flex items-center justify-center overflow-hidden rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-bold",
        className
    );

    if (isLoading) {
        return (
            <div className={containerClass}>
                <div className="animate-pulse bg-slate-200 w-full h-full" />
            </div>
        );
    }

    if (userProfile?.photoUri) {
        return (
            <div className={containerClass}>
                <img
                    src={userProfile.photoUri}
                    alt={fallbackName}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>
        );
    }

    return (
        <div className={containerClass}>
            {initial}
        </div>
    );
}
```

## 📄 `lib\ utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

## 📄 `lib\axios.ts`

```typescript
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/lib/store';

// Récupération des URLs distinctes
// Si la variable n'est pas dans le .env, on fallback sur localhost pour le débug
const AUTH_API_URL = process.env.NEXT_PUBLIC_API_AUTH_URL || 'https://auth-service.pynfi.com';
const UGATE_API_URL = process.env.NEXT_PUBLIC_API_UGATE_URL || 'https://ugate.pynfi.com';

// 1. Instance pour l'Authentification (TraMaSys)
export const authApi = axios.create({
    baseURL: AUTH_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// 2. Instance pour le Business (U-Gate)
export const ugateApi = axios.create({
    baseURL: UGATE_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// --- Intercepteur de Requête (Injecte le Token JWT partout) ---
const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken;
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

// On applique l'intercepteur aux DEUX instances
authApi.interceptors.request.use(authInterceptor);
ugateApi.interceptors.request.use(authInterceptor);

// --- Intercepteur de Réponse (Gère l'expiration de session 401) ---
const errorInterceptor = async (error: AxiosError) => {
    if (error.response?.status === 401) {
        const { isAuthenticated, logout } = useAuthStore.getState();
        if (isAuthenticated) {
            console.warn("Session expirée. Déconnexion...");
            logout();
            // Optionnel : Rediriger vers login si nécessaire via window.location
        }
    }
    return Promise.reject(error);
};

authApi.interceptors.response.use((response) => response, errorInterceptor);
ugateApi.interceptors.response.use((response) => response, errorInterceptor);
```

## 📄 `lib\context\SettingsContext.tsx`

```tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type NetworkQuality = 'high' | 'low' | 'auto';

interface SettingsContextType {
    networkQuality: NetworkQuality;
    setNetworkQuality: (q: NetworkQuality) => void;
    shouldLoadHighRes: boolean;
}

const SettingsContext = createContext<SettingsContextType>({} as any);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [networkQuality, setNetworkQuality] = useState<NetworkQuality>('auto');
    const [isHighRes, setIsHighRes] = useState(true);

    useEffect(() => {
        const checkConnection = () => {
            // Si l'utilisateur force un mode, on respecte son choix
            if (networkQuality === 'high') {
                setIsHighRes(true);
                return;
            }
            if (networkQuality === 'low') {
                setIsHighRes(false);
                return;
            }

            // Mode 'auto' : Détection via Network Information API (Chrome/Edge/Android)
            // @ts-ignore
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

            if (connection) {
                // Si c'est de la 4G, on charge la HD. Sinon (3g, 2g, slow-2g), on économise.
                const isFast = connection.effectiveType === '4g';
                // On vérifie aussi si l'utilisateur a activé "Data Saver" dans son OS
                const isDataSaver = connection.saveData;

                setIsHighRes(isFast && !isDataSaver);
            } else {
                // Par défaut HD si l'API n'est pas supportée
                setIsHighRes(true);
            }
        };

        checkConnection();

        // Écouter les changements de réseau
        // @ts-ignore
        const connection = navigator.connection;
        if (connection) {
            connection.addEventListener('change', checkConnection);
            return () => connection.removeEventListener('change', checkConnection);
        }
    }, [networkQuality]);

    return (
        <SettingsContext.Provider value={{ networkQuality, setNetworkQuality, shouldLoadHighRes: isHighRes }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);
```

## 📄 `lib\hooks\useFeed.ts`

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';

export const useFeed = (branchId: string) => {
    return useInfiniteQuery({
        queryKey: ['feed', branchId],
        queryFn: async ({ pageParam = 0 }) => {
            // Appel API feed mélangé
            const { data } = await ugateApi.get('/api/v1/feed', {
                params: { page: pageParam, size: 10, branchId } // Assure-toi que l'API filtre par branche si nécessaire
            });
            return data; // Supposons que l'API renvoie une liste directe ou un objet paginé
        },
        getNextPageParam: (lastPage, allPages) => {
            // Logique de pagination : si moins de 10 items, on est à la fin
            return lastPage.length === 10 ? allPages.length : undefined;
        },
        initialPageParam: 0,
    });
};
```

## 📄 `lib\hooks\useReaction.ts`

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';
import { toast } from 'react-hot-toast';

export const useReaction = (publicationId: string, currentLikes: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (type: string) => {
            return ugateApi.post(`/publications/${publicationId}/reactions`, { reactionType: type });
        },
        onMutate: async (newReaction) => {
            // 1. Annuler les refetchs en cours
            await queryClient.cancelQueries({ queryKey: ['feed'] });

            // 2. Snapshot de l'état précédent
            const previousFeed = queryClient.getQueryData(['feed']);

            // 3. Mise à jour optimiste du cache
            queryClient.setQueriesData({ queryKey: ['feed'] }, (old: any) => {
                if (!old) return old;
                return {
                    ...old,
                    pages: old.pages.map((page: any) =>
                        page.map((item: any) => {
                            if (item.type === 'publication' && item.data.id === publicationId) {
                                return {
                                    ...item,
                                    data: {
                                        ...item.data,
                                        nlikes: item.data.nlikes + 1, // Incrémenter artificiellement
                                        // userHasLiked: true (si tu as ce champ)
                                    }
                                };
                            }
                            return item;
                        })
                    )
                };
            });

            return { previousFeed };
        },
        onError: (err, newReaction, context) => {
            // Rollback en cas d'erreur
            queryClient.setQueryData(['feed'], context?.previousFeed);
            toast.error("Impossible de réagir");
        },
        onSettled: () => {
            // Refetch pour être sûr
            queryClient.invalidateQueries({ queryKey: ['feed'] });
        }
    });
};
```

## 📄 `lib\schemas.ts`

```typescript
import { z } from 'zod';

export const LoginSchema = z.object({
    identifier: z.string().min(1, 'required'),
    password: z.string().min(1, 'required'),
});

export const RegisterSchema = z.object({
    username: z.string().min(3, 'username_min'),
    email: z.string().email('email_invalid'),
    firstName: z.string().min(2, 'firstname_min'),
    lastName: z.string().min(2, 'lastname_min'),
    phone: z.string().min(9, 'phone_min'),
    password: z.string().min(8, 'password_min'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "passwords_mismatch",
    path: ["confirmPassword"],
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
```

## 📄 `lib\store.ts`

```typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, AuthResponse, UserType } from '@/lib/types/api';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    userType: UserType;
    isAuthenticated: boolean;

    // Actions
    login: (data: AuthResponse, isPartner?: boolean) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
    setPartnerMode: (userId: string) => void; // Pour le cas spécial "Partenaire"
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            userType: 'VISITOR',

            login: (data, isPartner = false) => {
                set({
                    user: data.user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                    isAuthenticated: true,
                    userType: isPartner ? 'PARTNER' : 'MEMBER',
                });
            },

            logout: () => {
                // Nettoyage manuel du localStorage au cas où
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('ugate-auth-storage');
                }
                set({
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    isAuthenticated: false,
                    userType: 'VISITOR'
                });
            },

            updateUser: (updates) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : null,
                }));
            },

            // Cas spécial : Utilisateur partenaire qui arrive sans login classique
            // On stocke un ID temporaire ou on gère via un token spécial fourni par l'URL
            setPartnerMode: (userId) => {
                // Logique à affiner selon comment le partenaire envoie l'info
                console.log("Mode partenaire activé pour", userId);
                // Ici on pourrait déclencher un fetch vers l'API Auth pour récupérer le token silencieusement
            }
        }),
        {
            name: 'ugate-auth-storage', // Clé dans le localStorage
            storage: createJSONStorage(() => localStorage), // Explicite pour Next.js
            partialize: (state) => ({
                // On choisit ce qu'on sauvegarde dans le navigateur
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
                userType: state.userType
            }),
        }
    )
);
```

## 📄 `lib\store\authStore.ts`

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthResponse } from '@/types/api';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    isPartner: boolean; // Pour savoir si c'est un utilisateur partenaire

    // Actions
    login: (data: AuthResponse, isPartner?: boolean) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isPartner: false,

            login: (data, isPartner = false) => {
                // Sauvegarde le token dans le localStorage pour Axios
                localStorage.setItem('accessToken', data.accessToken);

                set({
                    user: data.user,
                    accessToken: data.accessToken,
                    isAuthenticated: true,
                    isPartner: isPartner,
                });
            },

            logout: () => {
                localStorage.removeItem('accessToken');
                set({ user: null, accessToken: null, isAuthenticated: false, isPartner: false });
            },

            updateUser: (updates) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : null,
                }));
            },
        }),
        {
            name: 'ugate-auth-storage', // Nom de la clé dans le localStorage
        }
    )
);
```

## 📄 `lib\types\api.ts`

```typescript
// ==========================================
// 🔐 TRAMASYS AUTH API TYPES
// ==========================================

export interface User {
    id: string;
    username: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    service?: 'LETS_GO' | 'RIDE_AND_GO' | 'FLEET_MANAGEMENT' | 'SYNDICAT' | 'NAVIGOO' | 'PAYMENT' | 'FARE_CALCULATOR' | 'USER_DELETED';
    photoUri?: string;
    photoId?: string;
    roles: string[];
    permissions: string[];
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

// ==========================================
// 🏢 U-GATE : SYNDICATS & DÉTAILS
// ==========================================

export interface SyndicateDocuments {
    logoUrl: string | null;
    charteUrl: string | null;
    statusUrl: string | null;
    membersListUrl: string | null;
    commitmentCertificateUrl: string | null;
}

export interface OrganizationInfo {
    legalForm: string;
    socialNetwork: string | null;
    keywords: string;
    email: string | null;
    shortName: string | null;
    longName: string;
}

export interface CreatorInfo {
    id: string;
    fullName: string;
    email: string;
}

export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
}

// lib/types/api.ts

export interface Syndicate {
    id: string;
    name: string;
    description: string;
    domain: string;
    type: string;
    isApproved: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;

    documents: SyndicateDocuments;
    organization: OrganizationInfo;
    creator: CreatorInfo;
    stats: SyndicateStats;

    userBranchId?: string;     // ID de la branche du membre
    userBranchName?: string;   // Nom de la branche
    userRole?: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
}



export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

// ==========================================
// 🛒 U-GATE : MARKETPLACE (PRODUITS & SERVICES)
// ==========================================

export interface Product {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image: string;
    isActive: boolean;
}

export interface ServiceOffering {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
}

// ==========================================
// 📱 U-GATE : SOCIAL (FEED, POSTS, COMMENTS)
// ==========================================

export interface MediaInfo {
    url: string;
    type: 'IMAGE' | 'VIDEO' | 'PDF';
}

export interface Publication {
    id: string;
    branchId: string;
    authorFullName: string;
    content: string;
    createdAt: string;
    nlikes: number;
    ncomments: number;
    fileUrlAndType: MediaInfo[];
}

export interface CommentResponseDto {
    id: string;
    authorId: string;
    authorFullName: string;
    publicationId: string;
    parentId: string | null;
    imageUrl: string | null;
    content: string;
    createdAt: string;
}

export interface FeedItem {
    type: 'publication' | 'event';
    data: Publication | Event;
}

// ==========================================
// 📅 U-GATE : ÉVÉNEMENTS
// ==========================================

export interface LocalTime {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}

export interface MemberResponse {
    userId: string;         // UUID de l'utilisateur
    firstName: string;      // Prénom
    lastName: string;       // Nom
    email: string;          // Email de l'utilisateur
    profileImageUrl?: string; // URL de la photo de profil (optionnel)
    role: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
    branchId: string;       // C'est cet ID qui est crucial pour filtrer vos publications/événements
    joinedAt: string;       // Date d'adhésion au format ISO string
}

export interface Event {
    id: string;
    creatorId: string;
    branchId: string;
    title: string;
    description: string;
    location: string;
    date: string;
    startTime?: LocalTime;
    endTime?: LocalTime;
    createdAt: string;
    updatedAt: string;
    participantCount: number;
    imageUrls: string[];
    videoUrls?: string[]; // Ajouté
    fileUrls?: string[];  // Ajouté
}

// ==========================================
// 🗳️ U-GATE : VOTES & SONDAGES
// ==========================================

export interface VoteResultDTO {
    choiceLabel: string;
    count: number;
}

export interface PublicationVoteWithResultsDTO {
    id: string;
    title: string;
    description: string;
    closingAt: string;
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
    totalVotes: number;
    results: VoteResultDTO[];
    hasVoted: boolean;
}

// ==========================================
// 🛡️ U-GATE : CONFORMITÉ (COMPLIANCE)
// ==========================================

export interface OfficialProfileResponse {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl: string | null;
    cvUrl: string | null;
    cniNumber: string | null;
    cniRectoUrl: string | null;
    cniVersoUrl: string | null;
    licenseNumber: string | null;
    licenseRectoUrl: string | null;
    licenseVersoUrl: string | null;
    isVerified: boolean;
}

export interface MembershipRequest {
    id: string;
    userId: string;
    syndicatId: string;
    branchId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    motivation: string;
    rejectionReason: string | null;
    createdAt: string;
    updatedAt: string;
}

// ==========================================
// ⚙️ INTERNAL APP TYPES
// ==========================================

export type UserType = 'VISITOR' | 'MEMBER' | 'PARTNER';
```

## 📄 `messages\de.json`

```json
{
  "Common": {
    "loading": "Laden...",
    "error": "Ein Fehler ist aufgetreten",
    "copyright": "© {year} U-Gate Platform. Alle Rechte vorbehalten."
  },
  "Nav": {
    "home": "Startseite",
    "explorer": "Erkunden",
    "services": "Dienstleistungen",
    "about": "Über uns",
    "login": "Anmelden",
    "register": "Beitreten"
  },
  "Hero": {
    "tagline": "Gewerkschaftsplattform 3.0",
    "title_part1": "Vereinigen Sie Ihre Stimmen,",
    "title_part2": "Vereinfachen Sie das Handeln.",
    "description": "U-Gate revolutioniert das Gewerkschaftsmanagement. Mitgliederverwaltung, sichere Blockchain-Abstimmungen und exklusive Dienste für Profis.",
    "cta_primary": "Einer Gewerkschaft beitreten",
    "cta_secondary": "Angebote erkunden",
    "badge_secure": "100% Sicher",
    "badge_secure_sub": "Verschlüsselte Daten",
    "badge_members": "+50.000 Mitglieder",
    "badge_members_sub": "Aktiv auf der Plattform",
    "card_dashboard": "Mitglieder-Dashboard",
    "card_contributions": "Beiträge",
    "card_status_ok": "Aktuell",
    "card_votes": "Aktive Abstimmungen"
  },
  "Partners": {
    "title": "Sie vertrauen uns"
  },
  "Features": {
    "title_part1": "Alles was Sie brauchen, um",
    "title_part2": "Ihre Tätigkeit zu verwalten",
    "subtitle": "Eine komplette Suite von Tools zur Modernisierung der Interaktionen zwischen Gewerkschaften und ihren Mitgliedern.",
    "identity_title": "Digitale Identität",
    "identity_desc": "Ein einzigartiges und verifiziertes Profil für den Zugang zu allen Gewerkschafts- und Partnerdiensten.",
    "democracy_title": "Direkte Demokratie",
    "democracy_desc": "Teilnahme an wichtigen Entscheidungen über ein sicheres und transparentes Abstimmungssystem.",
    "docs_title": "Dokumentenmanagement",
    "docs_desc": "Jederzeit Zugriff auf Ihre Satzungen, Vorschriften und Zertifikate im PDF-Format.",
    "member_title": "Mitgliederbereich",
    "member_desc": "Ein interaktiver Newsfeed zum Austausch mit Ihrer Community und Verfolgung von Ereignissen.",
    "market_title": "Dedizierter Marktplatz",
    "market_desc": "Profitieren Sie von Produkten und Dienstleistungen, die speziell für Ihre Branche ausgehandelt wurden.",
    "compliance_title": "Automatisierte Compliance",
    "compliance_desc": "Automatische Überprüfung der Konformität für Partnerplattformen (VTC, Logistik)."
  },
  "Auth": {
    "login_title": "Willkommen zurück",
    "login_subtitle": "Zugang zu Ihrem U-Gate Mitgliederbereich",
    "register_title": "Exzellenz beitreten",
    "register_subtitle": "Erstellen Sie Ihr Konto zur Verwaltung Ihrer Mitgliedschaften",
    "email_label": "E-Mail-Adresse",
    "password_label": "Passwort",
    "confirm_password_label": "Passwort bestätigen",
    "firstname_label": "Vorname",
    "lastname_label": "Name",
    "phone_label": "Telefonnummer",
    "submit_login": "Anmelden",
    "submit_register": "Konto erstellen",
    "no_account": "Noch kein Konto?",
    "already_account": "Bereits Mitglied?",
    "forgot_password": "Passwort vergessen?",
    "or_continue_with": "Oder weiter mit",
    "login_success": "Anmeldung erfolgreich",
    "login_error": "Ungültige Anmeldeinformationen",
    "register_success": "Konto erfolgreich erstellt",
    "register_error": "Fehler bei der Kontoerstellung",
    "aside": {
      "tagline1": "Vereinfachtes Gewerkschaftsmanagement",
      "tagline2": "Sichere Blockchain-Abstimmungen",
      "tagline3": "Automatisierte VTC-Compliance",
      "tagline4": "Aktive Gemeinschaft"
    },
    "errors": {
      "required": "Dieses Feld ist erforderlich",
      "email_invalid": "Ungültige E-Mail",
      "password_min": "Das Passwort muss mindestens 8 Zeichen lang sein",
      "passwords_mismatch": "Passwörter stimmen nicht überein"
    }
  },
  "Explorer": {
    "title": "Gewerkschaften erkunden",
    "subtitle": "Schließen Sie sich der professionellen Elite an. Entdecken Sie Organisationen, die die Zukunft Ihrer Branche gestalten.",
    "search_placeholder": "Suche nach Name, Bereich...",
    "filter_btn": "Filter",
    "empty_state": "Keine Gewerkschaft entspricht Ihrer Suche.",
    "view_all": "Alle anzeigen",
    "members_count": "{count} Mitglieder",
    "see_details": "Profil ansehen",
    "active_status": "Verifiziert & Aktiv",
    "inactive_status": "Ausstehend"
  },
  "SyndicateDetails": {
    "created_in": "Gegründet {year}",
    "join_btn": "Dieser Gewerkschaft beitreten",
    "tabs": {
      "about": "Präsentation & Rechtliches",
      "branches": "Lokale Zweigstellen",
      "products": "Dienste & Shop"
    },
    "about_title": "Vision & Mission",
    "legal_docs_title": "Offizielle Dokumentation",
    "legal_doc_subtitle": "Zertifiziertes PDF-Dokument",
    "download": "Ansehen",
    "branches_title": "Wählen Sie Ihren Ankerpunkt",
    "branches_subtitle": "Wählen Sie die nächstgelegene Zweigstelle für Ihre Mitgliedschaft.",
    "contact": "Kontakt",
    "products_title": "Exklusiver Marktplatz",
    "buy_btn": "Bestellen",
    "out_of_stock": "Ausverkauft",
    "price_currency": "XAF"
  },
  "Dashboard": {
    "welcome": "Dashboard",
    "my_syndicates": "Meine Mitgliedschaften",
    "my_syndicates_sub": "Zugang zu Ihren Gewerkschafts- und Zweigstellenbereichen.",
    "enter_space": "Bereich betreten",
    "no_syndicates": "Sie sind derzeit kein Mitglied einer Gewerkschaft.",
    "explore_cta": "Gewerkschaften erkunden",
    "sidebar": {
      "feed": "Neuigkeiten",
      "members": "Mitglieder",
      "events": "Veranstaltungen",
      "votes": "Abstimmungen",
      "documents": "Meine Dokumente",
      "compliance": "Konformität"
    }
  },
  "Feed": {
    "create_post_placeholder": "Was gibt es Neues in der Community, {name}?",
    "post_btn": "Veröffentlichen",
    "reactions": {
      "like": "Gefällt mir",
      "love": "Liebe",
      "haha": "Haha",
      "wow": "Wow",
      "sad": "Traurig",
      "angry": "Wütend"
    },
    "comments": "Kommentare",
    "reply": "Antworten",
    "see_more": "Mehr sehen",
    "read_pdf": "PDF lesen"
  },
  "Event": {
    "join": "Teilnehmen",
    "joined": "Ich gehe hin",
    "participants": "{count} Teilnehmer",
    "location": "Ort",
    "date": "Datum & Uhrzeit",
    "create_title": "Veranstaltung erstellen",
    "success_join": "Ihre Teilnahme wurde registriert!"
  },
  "Comments": {
    "write_comment": "Einen Kommentar schreiben...",
    "reply": "Antworten",
    "view_replies": "{count} Antworten ansehen",
    "hide_replies": "Verbergen",
    "post": "Senden",
    "success_reply": "Antwort gesendet"
  },
  "Votes": {
    "title": "Umfragen & Entscheidungen",
    "subtitle": "Geben Sie Ihre Stimme zu den Ausrichtungen Ihrer Zweigstelle ab.",
    "total_votes": "{count} abgegebene Stimmen",
    "vote_now": "Abstimmen",
    "closing_at": "Schließt am {date}",
    "already_voted": "Sie haben bereits teilgenommen",
    "results_title": "Ergebnisse in Echtzeit",
    "create_btn": "Umfrage erstellen",
    "success_vote": "Ihre Stimme wurde registriert!",
    "success_create": "Umfrage erfolgreich erstellt",
    "closed": "Umfrage beendet"
  },
  "Profile": {
    "title": "Mein zertifiziertes Profil",
    "subtitle": "Verwalten Sie Ihre persönlichen Informationen und Konformitätsdokumente.",
    "sections": {
      "identity": "Identität",
      "compliance": "Gesetzliche Konformität",
      "account": "Kontosicherheit"
    },
    "status": {
      "verified": "Profil verifiziert",
      "pending": "Überprüfung läuft",
      "unverified": "Handlung erforderlich"
    },
    "fields": {
      "cni_number": "Ausweisnummer",
      "license_number": "Führerscheinnummer",
      "birth_date": "Geburtsdatum",
      "nationality": "Nationalität"
    },
    "docs": {
      "cni": "Personalausweis",
      "license": "Führerschein",
      "cv": "Lebenslauf",
      "update_btn": "Dokument aktualisieren",
      "view_btn": "Aktuelles ansehen"
    }
  },
  "Membership": {
    "title": "Mitgliedschaftsanfrage",
    "subtitle": "Sie treten der Zweigstelle {branch} der Gewerkschaft {syndicate} bei",
    "steps": {
      "personal": "Persönliche Infos",
      "documents": "Rechtliche Dokumente",
      "motivation": "Abschluss"
    },
    "partner_notice": "Willkommen Partner! Ihre Profilinformationen wurden automatisch abgerufen.",
    "firstname_label": "Vorname",
    "lastname_label": "Name",
    "email_label": "E-Mail-Adresse",
    "form": {
      "motivation_label": "Warum möchten Sie uns beitreten?",
      "motivation_placeholder": "Erklären Sie kurz Ihre Motivation...",
      "cni_recto": "Ausweis (Vorderseite)",
      "cni_verso": "Ausweis (Rückseite)",
      "license_recto": "Führerschein (Vorderseite)",
      "cv_label": "Lebenslauf (PDF)",
      "drop_files": "Dateien hier ablegen oder klicken zum Durchsuchen",
      "submit": "Anfrage senden",
      "submitting": "Verarbeitung läuft..."
    },
    "success_title": "Anfrage gesendet!",
    "success_message": "Ihre Akte wird von den Administratoren der Zweigstelle geprüft. Sie erhalten eine Benachrichtigung nach der Validierung."
  }
}
```

## 📄 `messages\en.json`

```json
{
  "Common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "copyright": "© {year} U-Gate Platform. All rights reserved."
  },
  "Nav": {
    "home": "Home",
    "explorer": "Explore",
    "services": "Services",
    "about": "About",
    "login": "Login",
    "register": "Join"
  },
  "Hero": {
    "tagline": "Union Platform 3.0",
    "title_part1": "Unite your voices,",
    "title_part2": "Simplify action.",
    "description": "U-Gate revolutionizes union management. Membership management, secure blockchain voting, and exclusive services for professionals.",
    "cta_primary": "Join a Union",
    "cta_secondary": "Explore Offers",
    "badge_secure": "100% Secure",
    "badge_secure_sub": "Encrypted Data",
    "badge_members": "+50,000 Members",
    "badge_members_sub": "Active on platform",
    "card_dashboard": "Member Dashboard",
    "card_contributions": "Contributions",
    "card_status_ok": "Up to date",
    "card_votes": "Active Votes"
  },
  "Partners": {
    "title": "Trusted by"
  },
  "Features": {
    "title_part1": "Everything you need to",
    "title_part2": "manage your activity",
    "subtitle": "A complete suite of tools designed to modernize interactions between unions and their members.",
    "identity_title": "Digital Identity",
    "identity_desc": "A unique and verified profile to access all your union and partner services.",
    "democracy_title": "Direct Democracy",
    "democracy_desc": "Participate in important decisions via a secure and transparent voting system.",
    "docs_title": "Document Management",
    "docs_desc": "Access your charters, regulations, and certificates in PDF format at any time.",
    "member_title": "Member Area",
    "member_desc": "An interactive news feed to engage with your community and follow events.",
    "market_title": "Dedicated Marketplace",
    "market_desc": "Enjoy products and services negotiated specifically for your professional branch.",
    "compliance_title": "Automated Compliance",
    "compliance_desc": "Automatic compliance verification for partner platforms (VTC, logistics)."
  },
  "Auth": {
    "login_title": "Welcome Back",
    "login_subtitle": "Access your U-Gate member area",
    "register_title": "Join Excellence",
    "register_subtitle": "Create your account to manage memberships",
    "email_label": "Email Address",
    "password_label": "Password",
    "confirm_password_label": "Confirm Password",
    "firstname_label": "First Name",
    "lastname_label": "Last Name",
    "phone_label": "Phone Number",
    "submit_login": "Sign In",
    "submit_register": "Create Account",
    "no_account": "No account yet?",
    "already_account": "Already a member?",
    "forgot_password": "Forgot password?",
    "or_continue_with": "Or continue with",
    "login_success": "Login successful",
    "login_error": "Invalid credentials",
    "register_success": "Account created successfully",
    "register_error": "Error creating account",
    "aside": {
      "tagline1": "Simplified Union Management",
      "tagline2": "Secure Blockchain Voting",
      "tagline3": "Automated Compliance",
      "tagline4": "Active Community"
    },
    "errors": {
      "required": "This field is required",
      "email_invalid": "Invalid email",
      "password_min": "Password must be at least 8 characters",
      "passwords_mismatch": "Passwords do not match"
    }
  },
  "Explorer": {
    "title": "Explore Syndicates",
    "subtitle": "Join the professional elite. Discover organizations shaping the future of your sector.",
    "search_placeholder": "Search by name, domain...",
    "filter_btn": "Filters",
    "empty_state": "No syndicate matches your search.",
    "view_all": "View all",
    "members_count": "{count} Members",
    "see_details": "View Profile",
    "active_status": "Verified & Active",
    "inactive_status": "Pending"
  },
  "SyndicateDetails": {
    "created_in": "Founded in {year}",
    "join_btn": "Join this Syndicate",
    "tabs": {
      "about": "Presentation & Legal",
      "branches": "Local Branches",
      "products": "Services & Shop"
    },
    "about_title": "Vision & Mission",
    "legal_docs_title": "Official Documentation",
    "legal_doc_subtitle": "Certified PDF Document",
    "download": "View",
    "branches_title": "Choose your anchor point",
    "branches_subtitle": "Select the nearest branch for your membership.",
    "contact": "Contact",
    "products_title": "Exclusive Marketplace",
    "buy_btn": "Order",
    "out_of_stock": "Out of Stock",
    "price_currency": "XAF"
  },
  "Dashboard": {
    "welcome": "Dashboard",
    "my_syndicates": "My Memberships",
    "my_syndicates_sub": "Access your union and branch member areas.",
    "enter_space": "Enter Space",
    "no_syndicates": "You are not a member of any union yet.",
    "explore_cta": "Explore Syndicates",
    "sidebar": {
      "feed": "News Feed",
      "members": "Members",
      "events": "Events",
      "votes": "Votes & Polls",
      "documents": "My Documents",
      "compliance": "Compliance"
    }
  },
  "Feed": {
    "create_post_placeholder": "What's new in the community, {name}?",
    "post_btn": "Post",
    "reactions": {
      "like": "Like",
      "love": "Love",
      "haha": "Haha",
      "wow": "Wow",
      "sad": "Sad",
      "angry": "Angry"
    },
    "comments": "Comments",
    "reply": "Reply",
    "see_more": "See more",
    "read_pdf": "Read PDF"
  },
  "Event": {
    "join": "Join",
    "joined": "Going",
    "participants": "{count} participants",
    "location": "Location",
    "date": "Date & Time",
    "create_title": "Create an Event",
    "success_join": "Your participation has been recorded!"
  },
  "Comments": {
    "write_comment": "Write a comment...",
    "reply": "Reply",
    "view_replies": "View {count} replies",
    "hide_replies": "Hide",
    "post": "Send",
    "success_reply": "Reply sent"
  },
  "Votes": {
    "title": "Polls & Decisions",
    "subtitle": "Express your voice on your branch orientations.",
    "total_votes": "{count} votes cast",
    "vote_now": "Vote",
    "closing_at": "Closes on {date}",
    "already_voted": "You have already participated",
    "results_title": "Real-time results",
    "create_btn": "Create Poll",
    "success_vote": "Your vote has been recorded!",
    "success_create": "Poll created successfully",
    "closed": "Poll closed"
  },
  "Profile": {
    "title": "My Certified Profile",
    "subtitle": "Manage your personal information and compliance documents.",
    "sections": {
      "identity": "Identity",
      "compliance": "Legal Compliance",
      "account": "Account Security"
    },
    "status": {
      "verified": "Verified Profile",
      "pending": "Verification Pending",
      "unverified": "Action Required"
    },
    "fields": {
      "cni_number": "ID Card Number",
      "license_number": "License Number",
      "birth_date": "Date of Birth",
      "nationality": "Nationality"
    },
    "docs": {
      "cni": "National ID Card",
      "license": "Driving License",
      "cv": "Curriculum Vitae",
      "update_btn": "Update Document",
      "view_btn": "View Current"
    }
  },
  "Membership": {
    "title": "Membership Request",
    "subtitle": "You are joining the {branch} branch of the {syndicate} union",
    "steps": {
      "personal": "Personal Info",
      "documents": "Legal Documents",
      "motivation": "Finalization"
    },
    "partner_notice": "Welcome Partner! Your profile information has been automatically retrieved.",
    "firstname_label": "First Name",
    "lastname_label": "Last Name",
    "email_label": "Email Address",
    "form": {
      "motivation_label": "Why do you want to join us?",
      "motivation_placeholder": "Briefly explain your motivations...",
      "cni_recto": "ID Card (Front)",
      "cni_verso": "ID Card (Back)",
      "license_recto": "Driving License (Front)",
      "cv_label": "Curriculum Vitae (PDF)",
      "drop_files": "Drop files here or click to browse",
      "submit": "Send Request",
      "submitting": "Processing..."
    },
    "success_title": "Request Sent!",
    "success_message": "Your file is being reviewed by branch administrators. You will be notified upon validation."
  }
}
```

## 📄 `messages\fr.json`

```json
{
  "Common": {
    "loading": "Chargement...",
    "error": "Une erreur est survenue",
    "copyright": "© {year} U-Gate Platform. Tous droits réservés."
  },
  "Nav": {
    "home": "Accueil",
    "explorer": "Explorer",
    "services": "Services",
    "about": "À Propos",
    "login": "Connexion",
    "register": "Rejoindre"
  },
  "Hero": {
    "tagline": "Plateforme Syndicale 3.0",
    "title_part1": "Unifiez vos voix,",
    "title_part2": "Simplifiez l'action.",
    "description": "U-Gate révolutionne le syndicalisme. Gestion d'adhésions, votes sécurisés sur la blockchain et services exclusifs pour les professionnels.",
    "cta_primary": "Rejoindre un syndicat",
    "cta_secondary": "Explorer les offres",
    "badge_secure": "100% Sécurisé",
    "badge_secure_sub": "Données chiffrées",
    "badge_members": "+50,000 Membres",
    "badge_members_sub": "Actifs sur la plateforme",
    "card_dashboard": "Dashboard Membre",
    "card_contributions": "Cotisations",
    "card_status_ok": "À jour",
    "card_votes": "Votes en cours"
  },
  "Partners": {
    "title": "Ils nous font confiance"
  },
  "Features": {
    "title_part1": "Tout ce dont vous avez besoin pour",
    "title_part2": "gérer votre activité",
    "subtitle": "Une suite d'outils complète conçue pour moderniser les interactions entre les syndicats et leurs membres.",
    "identity_title": "Identité Numérique",
    "identity_desc": "Un profil unique et vérifié pour accéder à tous vos services syndicaux et partenaires.",
    "democracy_title": "Démocratie Directe",
    "democracy_desc": "Participez aux décisions importantes via un système de vote sécurisé et transparent.",
    "docs_title": "Gestion Documentaire",
    "docs_desc": "Accédez à vos chartes, règlements et certificats en format PDF à tout moment.",
    "member_title": "Espace Membre",
    "member_desc": "Un fil d'actualité interactif pour échanger avec votre communauté et suivre les événements.",
    "market_title": "Marketplace Dédiée",
    "market_desc": "Profitez de produits et services négociés spécifiquement pour votre branche professionnelle.",
    "compliance_title": "Compliance Automatisée",
    "compliance_desc": "Vérification automatique de conformité pour les plateformes partenaires (VTC, logistique)."
  },
  "Auth": {
    "login_title": "Bon retour parmi nous",
    "login_subtitle": "Accédez à votre espace membre U-Gate",
    "register_title": "Rejoindre l'excellence",
    "register_subtitle": "Créez votre compte pour gérer vos adhésions",
    "email_label": "Adresse email",
    "password_label": "Mot de passe",
    "confirm_password_label": "Confirmer le mot de passe",
    "firstname_label": "Prénom",
    "lastname_label": "Nom",
    "phone_label": "Numéro de téléphone",
    "submit_login": "Se connecter",
    "submit_register": "Créer mon compte",
    "no_account": "Pas encore de compte ?",
    "already_account": "Déjà membre ?",
    "forgot_password": "Mot de passe oublié ?",
    "or_continue_with": "Ou continuer avec",
    "login_success": "Connexion réussie",
    "login_error": "Identifiants incorrects",
    "register_success": "Compte créé avec succès",
    "register_error": "Erreur lors de la création du compte",
    "aside": {
      "tagline1": "Gestion Syndicale Simplifiée",
      "tagline2": "Votes Sécurisés Blockchain",
      "tagline3": "Conformité VTC Automatisée",
      "tagline4": "Communauté Active"
    },
    "errors": {
      "required": "Ce champ est requis",
      "email_invalid": "Email invalide",
      "password_min": "Le mot de passe doit faire au moins 8 caractères",
      "passwords_mismatch": "Les mots de passe ne correspondent pas"
    }
  },
  "Explorer": {
    "title": "Explorer les Syndicats",
    "subtitle": "Rejoignez l'élite professionnelle. Découvrez les organisations qui façonnent l'avenir de votre secteur.",
    "search_placeholder": "Rechercher par nom, domaine...",
    "filter_btn": "Filtres",
    "empty_state": "Aucun syndicat ne correspond à votre recherche.",
    "view_all": "Voir tout",
    "members_count": "{count} Membres",
    "see_details": "Voir le profil",
    "active_status": "Vérifié & Actif",
    "inactive_status": "En attente"
  },
  "SyndicateDetails": {
    "created_in": "Fondé en {year}",
    "join_btn": "Rejoindre ce syndicat",
    "tabs": {
      "about": "Présentation & Légal",
      "branches": "Nos Antennes Locales",
      "products": "Services & Boutique"
    },
    "about_title": "Vision & Mission",
    "legal_docs_title": "Documentation Officielle",
    "legal_doc_subtitle": "Document PDF certifié",
    "download": "Consulter",
    "branches_title": "Choisissez votre point d'ancrage",
    "branches_subtitle": "Sélectionnez l'antenne la plus proche pour votre adhésion.",
    "contact": "Contact",
    "products_title": "Marketplace Exclusive",
    "buy_btn": "Commander",
    "out_of_stock": "Épuisé",
    "price_currency": "FCFA"
  },
  "Dashboard": {
    "welcome": "Tableau de bord",
    "my_syndicates": "Mes Adhésions",
    "my_syndicates_sub": "Accédez aux espaces membres de vos syndicats et antennes.",
    "enter_space": "Accéder à l'espace",
    "no_syndicates": "Vous n'êtes membre d'aucun syndicat pour le moment.",
    "explore_cta": "Explorer les syndicats",
    "sidebar": {
      "feed": "Fil d'actualité",
      "members": "Membres",
      "events": "Événements",
      "votes": "Votes & Sondages",
      "documents": "Mes Documents",
      "compliance": "Conformité"
    }
  },
  "Feed": {
    "create_post_placeholder": "Quoi de neuf dans la communauté, {name} ?",
    "post_btn": "Publier",
    "reactions": {
      "like": "J'aime",
      "love": "Adore",
      "haha": "Rire",
      "wow": "Waouh",
      "sad": "Triste",
      "angry": "En colère"
    },
    "comments": "Commentaires",
    "reply": "Répondre",
    "see_more": "Voir plus",
    "read_pdf": "Lire le PDF"
  },
  "Event": {
    "join": "Participer",
    "joined": "J'y vais",
    "participants": "{count} participants",
    "location": "Lieu",
    "date": "Date & Heure",
    "create_title": "Créer un événement",
    "success_join": "Votre participation est enregistrée !"
  },
  "Comments": {
    "write_comment": "Écrire un commentaire...",
    "reply": "Répondre",
    "view_replies": "Voir les {count} réponses",
    "hide_replies": "Masquer",
    "post": "Envoyer",
    "success_reply": "Réponse envoyée"
  },
  "Votes": {
    "title": "Sondages & Décisions",
    "subtitle": "Exprimez votre voix sur les orientations de votre antenne.",
    "total_votes": "{count} votes exprimés",
    "vote_now": "Voter",
    "closing_at": "Clôture le {date}",
    "already_voted": "Vous avez déjà participé",
    "results_title": "Résultats en temps réel",
    "create_btn": "Créer un vote",
    "success_vote": "Votre vote a été enregistré !",
    "success_create": "Vote créé avec succès",
    "closed": "Sondage terminé"
  },
  "Profile": {
    "title": "Mon Profil Certifié",
    "subtitle": "Gérez vos informations personnelles et vos documents de conformité.",
    "sections": {
      "identity": "Identité",
      "compliance": "Conformité Légale",
      "account": "Sécurité du compte"
    },
    "status": {
      "verified": "Profil Vérifié",
      "pending": "Vérification en cours",
      "unverified": "Action requise"
    },
    "fields": {
      "cni_number": "Numéro de CNI",
      "license_number": "Numéro de Permis",
      "birth_date": "Date de naissance",
      "nationality": "Nationalité"
    },
    "docs": {
      "cni": "Carte Nationale d'Identité",
      "license": "Permis de Conduire",
      "cv": "Curriculum Vitae",
      "update_btn": "Mettre à jour le document",
      "view_btn": "Consulter l'actuel"
    }
  },
  "Membership": {
    "title": "Demande d'adhésion",
    "subtitle": "Vous rejoignez l'antenne {branch} du syndicat {syndicate}",
    "steps": {
      "personal": "Infos Personnelles",
      "documents": "Documents Légaux",
      "motivation": "Finalisation"
    },
    "partner_notice": "Bienvenue partenaire ! Vos informations de profil ont été récupérées automatiquement.",
    "firstname_label": "Prénom",
    "lastname_label": "Nom",
    "email_label": "Adresse Email",
    "form": {
      "motivation_label": "Pourquoi souhaitez-vous nous rejoindre ?",
      "motivation_placeholder": "Expliquez brièvement vos motivations...",
      "cni_recto": "CNI (Recto)",
      "cni_verso": "CNI (Verso)",
      "license_recto": "Permis de conduire (Recto)",
      "cv_label": "Curriculum Vitae (PDF)",
      "drop_files": "Glissez vos fichiers ici ou cliquez pour parcourir",
      "submit": "Envoyer ma demande",
      "submitting": "Traitement en cours..."
    },
    "success_title": "Demande envoyée !",
    "success_message": "Votre dossier est en cours d'examen par les administrateurs de l'antenne. Vous recevrez une notification dès validation."
  }
}
```

---

## 📈 Statistiques

- **Fichiers traités**: 85
- **Taille totale**: 354KB
- **Date de génération**: 09/02/2026 08:15:06
