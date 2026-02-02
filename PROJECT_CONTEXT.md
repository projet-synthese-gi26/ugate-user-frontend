# 📦 Contexte Complet du Projet U-Gate Premium

> Généré automatiquement le 02/02/2026 10:22:47

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
│       │           ├── events/
│       │           │   └── page.tsx
│       │           ├── layout.tsx
│       │           ├── members/
│       │           │   └── page.tsx
│       │           ├── page.tsx
│       │           ├── profile/
│       │           │   └── page.tsx
│       │           ├── publications/
│       │           │   └── page.tsx
│       │           └── votes/
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
│   │   └── MemberSidebar.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── profile/
│   │   └── DocumentCard.tsx
│   ├── sections/
│   │   ├── auth/
│   │   ├── Hero.tsx
│   │   └── landing/
│   │       ├── Features.tsx
│   │       └── TrustedPartners.tsx
│   ├── social/
│   │   ├── CommentItem.tsx
│   │   ├── CreateEventModal.tsx
│   │   ├── CreatePost.tsx
│   │   ├── CreateVoteModal.tsx
│   │   ├── EventCard.tsx
│   │   ├── HorizontalPDFReader.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── PostCard.tsx
│   │   ├── ReactionPicker.tsx
│   │   └── VoteCard.tsx
│   ├── syndicate/
│   │   └── SyndicateCard.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── FileUpload.tsx
│       ├── GlassCard.tsx
│       ├── Input.tsx
│       ├── Label.tsx
│       ├── Logo.tsx
│       └── PDFViewer.tsx
├── eslint.config.mjs
├── generate.js
├── i18n.ts
├── lib/
│   ├──  utils.ts
│   ├── axios.ts
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
    "axios": "^1.13.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.29.2",
    "lucide-react": "^0.563.0",
    "next": "16.1.6",
    "next-intl": "^4.8.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "react-hot-toast": "^2.6.0",
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

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\events\page.tsx`

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
    // Dans Next.js 15, on déballe les params avec use()
    const { id } = use(params);
    const { user } = useAuthStore();

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Vérification basique des droits (à adapter selon vos rôles réels)
    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('PRESIDENT') || user?.roles.includes('MODERATOR');

    const fetchEvents = async () => {
        try {
            // Appel à l'API pour récupérer les événements de la branche
            const res = await ugateApi.get(`/events/branch/${id}`);
            // Gestion de la réponse (tableau direct ou contenu paginé)
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
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* En-tête de la section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-primary-100 text-primary-700 rounded-2xl">
                            <Calendar size={28} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Agenda</h1>
                    </div>
                    <p className="text-slate-500 font-medium text-lg max-w-lg">
                        Ne manquez aucun moment fort. Retrouvez ici toutes les réunions et activités de votre branche.
                    </p>
                </div>

                {/* Bouton Créer (Visible seulement pour les admins) */}
                {isAdmin && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-2xl h-14 px-8 bg-slate-900 hover:bg-black text-white shadow-xl transition-all hover:scale-105 active:scale-95 font-bold flex items-center gap-2"
                    >
                        <Plus size={20} />
                        Créer un événement
                    </Button>
                )}
            </div>

            {/* Contenu : Liste ou Vide */}
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
                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-sm mt-8">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <CalendarSearch size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-400 mb-2">Aucun événement programmé.</h2>
                    <p className="text-slate-400 font-medium">Revenez plus tard pour voir les nouvelles dates.</p>

                    {isAdmin && (
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 border-dashed border-2"
                        >
                            Programmer le premier événement
                        </Button>
                    )}
                </div>
            )}

            {/* Modale de Création */}
            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={id}
                onSuccess={fetchEvents} // Rafraîchit la liste après création réussie
            />
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\layout.tsx`

```tsx
"use client";

import { use, useEffect, useState } from 'react';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { ugateApi } from '@/lib/axios';
import { Syndicate } from '@/lib/types/api';
import { Loader2, MapPin, ShieldCheck } from 'lucide-react';

export default function SyndicateLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const { id } = use(params);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSyndicate = async () => {
            try {
                const res = await ugateApi.get(`/syndicates/${id}/details`);
                setSyndicate(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchSyndicate();
    }, [id]);

    if (loading) return (
        <div className="h-screen flex flex-col items-center justify-center bg-white">
            <Loader2 className="animate-spin text-primary-800 w-12 h-12 mb-4" />
            <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">Préparation de l'espace</span>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Sidebar Fixe */}
            <MemberSidebar syndicateId={id} />

            <div className="flex-1 lg:ml-72 flex flex-col">
                {/* BANNIÈRE & IDENTITÉ SYNDICALE */}
                <header className="relative h-64 bg-slate-900 overflow-hidden">
                    {syndicate?.documents?.logoUrl && (
                        <img
                            src={syndicate.documents.logoUrl}
                            className="w-full h-full object-cover opacity-50 blur-[1px]"
                            alt="Banner"
                        />
                    )}
                    {/* Overlay de fondu vers le fond de la page */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-10 flex items-end gap-8">
                        {/* Logo / Initiale */}
                        <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden shrink-0">
                            <span className="text-4xl font-black text-primary-900">{syndicate?.name.charAt(0)}</span>
                        </div>

                        <div className="mb-2 space-y-2">
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">{syndicate?.name}</h1>
                                <ShieldCheck className="text-primary-600" size={24} />
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest bg-white/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 w-fit shadow-sm">
                                <MapPin size={14} className="text-primary-600" />
                                {syndicate?.domain} • Antenne locale
                            </div>
                        </div>
                    </div>
                </header>

                {/* Zone de contenu variable (Feed, Membres, Profil, etc.) */}
                <main className="p-4 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
```

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\members\page.tsx`

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
            <main className="lg:ml-72 pt-32 pb-20 px-8">
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

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\page.tsx`

```tsx
"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { FeedItem } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import EventCard from '@/components/social/EventCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, Sparkles, MessageSquare } from 'lucide-react';

export default function BranchFeedPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                // On récupère le feed combiné (Publications + Events)
                const response = await ugateApi.get('/api/v1/feed', {
                    params: { page: 0, size: 20 }
                });
                setFeed(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Erreur Feed:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeed();
    }, [syndicateId]);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">

            {/* Zone de Création de Publication */}
            <CreatePost syndicateId={syndicateId} />

            {/* Séparateur Design */}
            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                    <Sparkles size={14} className="text-primary-600" />
                    Actualités de la branche
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            {/* Liste du Flux */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Chargement du flux...</p>
                </div>
            ) : feed.length > 0 ? (
                <div className="space-y-10">
                    {feed.map((item, idx) => (
                        <div key={`${item.type}-${idx}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                            {item.type === 'publication' ? (
                                <PostCard publication={item.data as any} />
                            ) : (
                                <EventCard event={item.data as any} />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                        <MessageSquare size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-400">Le fil d'actualité est vide.</h2>
                    <p className="text-slate-400 text-sm mt-1">Soyez le premier à publier quelque chose !</p>
                </div>
            )}
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

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\publications\page.tsx`

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

## 📄 `app\[locale]\(dashboard)\syndicate\[id]\votes\page.tsx`

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

            <main className="ml-72 pt-28 pb-20 px-10">
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
import { Loader2, Search, Filter } from 'lucide-react';
import SyndicateCard from '@/components/syndicate/SyndicateCard';
import { Button } from '@/components/ui/Button';

export default function ExplorerPage() {
    const t = useTranslations('Explorer');
    const [syndicates, setSyndicates] = useState<Syndicate[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

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

    const filteredSyndicates = syndicates.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.domain.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50">

            {/* --- HEADER SOMBRE (PREMIUM CONTRAST) --- */}
            <div className="bg-[#0F172A] pt-32 pb-20 relative overflow-hidden">
                {/* Background Pattern discret */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                        {t('subtitle')}
                    </p>

                    {/* Barre de Recherche Flottante (Glassmorphism sur fond sombre) */}
                    <div className="mt-10 flex gap-2 max-w-xl bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder={t('search_placeholder')}
                                className="w-full pl-12 h-12 rounded-xl bg-transparent text-white placeholder:text-slate-400 focus:bg-white/5 transition-all outline-none border-none"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button className="bg-primary-600 hover:bg-primary-500 text-white h-12 px-6 rounded-xl border-none shadow-lg shadow-primary-600/20">
                            {t('filter_btn')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* --- CONTENU SUR FOND CLAIR --- */}
            <div className="max-w-7xl mx-auto px-6 -mt-10 pb-20 relative z-20">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32">
                        <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                    </div>
                ) : filteredSyndicates.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSyndicates.map((syndicate) => (
                            <SyndicateCard key={syndicate.id} syndicate={syndicate} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-lg">{t('empty_state')}</p>
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
```

## 📄 `app\[locale]\page.tsx`

```tsx
import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/landing/Features";
import TrustedPartners from "@/components/sections/landing/TrustedPartners";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    // Note: Dans les server components Next 15, on await les params
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-navy-950 selection:bg-primary-500/30">
            <Navbar />

            <Hero />
            <TrustedPartners />
            <Features />

            <Footer />
        </main>
    );
}

// Petit composant Footer interne pour l'exemple (à extraire plus tard)
function Footer() {
    const t = useTranslations('Common');
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
                <p>{t('copyright', { year })}</p>
            </div>
        </footer>
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
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
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
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
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
    ChevronLeft, LogOut, FileText, LayoutDashboard
} from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useAuthStore } from '@/lib/store';

export default function MemberSidebar({ syndicateId }: { syndicateId: string }) {
    const t = useTranslations('Dashboard.sidebar');
    const pathname = usePathname();
    const { logout, user } = useAuthStore();

    const menuItems = [
        { icon: LayoutDashboard, label: "Fil d'actualité", href: `/syndicate/${syndicateId}` },
        { icon: FileText, label: "Publications", href: `/syndicate/${syndicateId}/publications` },
        { icon: Calendar, label: "Événements", href: `/syndicate/${syndicateId}/events` },
        { icon: Users, label: "Membres", href: `/syndicate/${syndicateId}/members` },
        { icon: Vote, label: "Votes & Sondages", href: `/syndicate/${syndicateId}/votes` },
        { icon: UserCircle, label: "Mon Profil", href: `/syndicate/${syndicateId}/profile` },
    ];

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-xl">
            <div className="p-8 flex-1">
                <div className="mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center text-white font-black">U</div>
                    <span className="font-black text-xl text-slate-900 tracking-tighter">U-Gate</span>
                </div>

                <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-primary-800 mb-10 font-bold text-xs uppercase tracking-widest group transition-all">
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Quitter l'espace
                </Link>

                <nav className="space-y-1.5">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300",
                                pathname === item.href
                                    ? "bg-primary-800 text-white shadow-lg shadow-primary-900/20 translate-x-1"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon size={20} className={pathname === item.href ? "text-white" : "text-slate-400"} />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <div className="flex items-center gap-3 px-4 py-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-black text-xs border-2 border-white shadow-sm">
                        {user?.firstName?.charAt(0)}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-bold text-slate-900 truncate">{user?.firstName}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase">Membre</div>
                    </div>
                </div>
                <button onClick={() => logout()} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-all text-sm">
                    <LogOut size={18} /> Déconnexion
                </button>
            </div>
        </aside>
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

## 📄 `components\sections\Hero.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ArrowRight, ShieldCheck, Users, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-grid-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617] pointer-events-none" />

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-md">
                        <Zap size={14} className="fill-current" />
                        {t('tagline')}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
                        {t('title_part1')}<br />
                        <span className="text-gradient">{t('title_part2')}</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/register">
                            <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14">
                                {t('cta_primary')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/explorer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white/5 border-white/10 hover:bg-white/10 text-white">
                                {t('cta_secondary')}
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{t('badge_secure')}</span>
                                <span className="text-xs text-slate-500">{t('badge_secure_sub')}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Users size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{t('badge_members')}</span>
                                <span className="text-xs text-slate-500">{t('badge_members_sub')}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <div className="relative z-10 animate-float">
                        <div className="glass-panel p-1 rounded-3xl shadow-2xl bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-slate-950 rounded-[22px] overflow-hidden border border-white/5 relative h-[500px]">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-slate-400">
                                        {t('card_dashboard')}
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                            U
                                        </div>
                                        <div>
                                            <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-2" />
                                            <div className="h-3 w-48 bg-white/5 rounded" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-slate-400 text-xs mb-1">{t('card_contributions')}</div>
                                            <div className="text-2xl font-bold text-white">{t('card_status_ok')}</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-slate-400 text-xs mb-1">{t('card_votes')}</div>
                                            <div className="text-2xl font-bold text-white">3</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                            <Globe size={16} className="text-primary-400" />
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-primary-500" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                            <Lock size={16} className="text-purple-400" />
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-1/2 bg-purple-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/20 blur-[100px] rounded-full" />
                </motion.div>
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
import { Fingerprint, FileText, Vote, LayoutDashboard, ShoppingBag, Shield } from 'lucide-react';

export default function Features() {
    const t = useTranslations('Features');

    const featureList = [
        {
            icon: Fingerprint,
            key: "identity"
        },
        {
            icon: Vote,
            key: "democracy"
        },
        {
            icon: FileText,
            key: "docs"
        },
        {
            icon: LayoutDashboard,
            key: "member"
        },
        {
            icon: ShoppingBag,
            key: "market"
        },
        {
            icon: Shield,
            key: "compliance"
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('title_part1')} <span className="text-gradient">{t('title_part2')}</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureList.map((feature, index) => (
                        <GlassCard key={index} className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t(`${feature.key}_title`)}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
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

## 📄 `components\social\CommentItem.tsx`

```tsx
"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MessageCircle, CornerDownRight, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Props {
    comment: CommentResponseDto;
    publicationId: string;
    allComments: CommentResponseDto[];
    depth?: number;
}

export default function CommentItem({ comment, publicationId, allComments, depth = 0 }: Props) {
    const t = useTranslations('Comments');
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [loading, setLoading] = useState(false);

    // Filtrer les réponses à ce commentaire précis
    const replies = allComments.filter(c => c.parentId === comment.id);

    const handleReply = async () => {
        if (!replyText.trim()) return;
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('content', replyText);
            formData.append('parentId', comment.id);

            await ugateApi.post(`/publications/${publicationId}/comments`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success(t('success_reply'));
            setReplyText('');
            setIsReplying(false);
            // Ici, idéalement, on rafraîchit la liste via un callback
        } catch (error) {
            toast.error("Erreur d'envoi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`group ${depth > 0 ? 'mt-4 ml-6 lg:ml-10' : 'mt-6'}`}>
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 text-xs shrink-0 border border-white shadow-sm">
                    {comment.authorFullName.charAt(0)}
                </div>

                <div className="flex-1">
                    {/* Bulle de commentaire */}
                    <div className="bg-slate-50 rounded-2xl rounded-tl-none p-3 lg:p-4 border border-slate-100 group-hover:border-primary-100 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-900 text-sm">{comment.authorFullName}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                {formatDistanceToNow(new Date(comment.createdAt), { locale: fr })}
                            </span>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">{comment.content}</p>
                        {comment.imageUrl && (
                            <img src={comment.imageUrl} className="mt-3 rounded-xl max-h-60 object-cover border border-slate-200" />
                        )}
                    </div>

                    {/* Actions de commentaire */}
                    <div className="flex items-center gap-4 mt-2 ml-1">
                        <button
                            onClick={() => setIsReplying(!isReplying)}
                            className="text-xs font-bold text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-1"
                        >
                            <MessageCircle size={14} />
                            {t('reply')}
                        </button>
                    </div>

                    {/* Zone de réponse (Formulaire) */}
                    {isReplying && (
                        <div className="mt-4 flex gap-2 animate-in slide-in-from-top-2 duration-300">
                            <div className="flex-1 relative">
                                <input
                                    autoFocus
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    placeholder={t('write_comment')}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500/20 outline-none"
                                />
                            </div>
                            <button
                                onClick={handleReply}
                                disabled={loading || !replyText.trim()}
                                className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center shadow-md disabled:opacity-50"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    )}

                    {/* Rendu récursif des réponses */}
                    {replies.length > 0 && (
                        <div className="relative">
                            {/* Ligne verticale de thread */}
                            <div className="absolute left-[-20px] lg:left-[-30px] top-0 bottom-0 w-px bg-slate-200" />
                            {replies.map(reply => (
                                <CommentItem
                                    key={reply.id}
                                    comment={reply}
                                    publicationId={publicationId}
                                    allComments={allComments}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    )}
                </div>
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
import { cn } from '@/lib/utils';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branchId: string;
    onSuccess: () => void;
}

export default function CreateEventModal({ isOpen, onClose, branchId, onSuccess }: Props) {
    // Si vous n'avez pas encore les traductions, remplacez t('...') par des chaînes en dur
    // const t = useTranslations('Event');
    const { user } = useAuthStore();
    const [loading, setLoading] = useState(false);

    // Form States
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // Media States
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'IMAGE' | 'VIDEO' | 'PDF') => {
        const selectedFiles = Array.from(e.target.files || []);
        const newFiles = selectedFiles.map(file => ({
            file,
            type,
            preview: URL.createObjectURL(file)
        }));
        setFiles(prev => [...prev, ...newFiles]);
        // Reset l'input pour permettre de sélectionner le même fichier si besoin
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
            return toast.error("Veuillez remplir tous les champs obligatoires (Titre, Date, Heures, Lieu)");
        }

        if (!user?.id) return toast.error("Erreur d'authentification");

        setLoading(true);
        const formData = new FormData();

        // Champs Texte
        formData.append('title', title);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('eventDate', date); // Format YYYY-MM-DD
        formData.append('startTime', startTime); // Format HH:MM
        formData.append('endTime', endTime);     // Format HH:MM
        formData.append('branchId', branchId);
        formData.append('creatorId', user.id);

        // Fichiers
        files.forEach(f => {
            if (f.type === 'IMAGE') formData.append('images', f.file);
            if (f.type === 'VIDEO') formData.append('videos', f.file);
            if (f.type === 'PDF') formData.append('files', f.file);
        });

        try {
            await ugateApi.post('/events', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success("Événement créé avec succès !");

            // Reset form
            setTitle('');
            setDescription('');
            setLocation('');
            setDate('');
            setStartTime('');
            setEndTime('');
            setFiles([]);

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
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
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
                        <h2 className="text-xl font-bold text-slate-900">Nouvel Événement</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulaire Scrollable */}
                <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-white">

                    {/* Titre & Description */}
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Titre de l'événement</label>
                            <Input
                                placeholder="Ex: Assemblée Générale 2026"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="font-bold text-lg bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Description</label>
                            <textarea
                                className="w-full p-4 rounded-2xl border border-transparent bg-slate-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all min-h-[120px] text-sm font-medium text-slate-700 resize-none"
                                placeholder="Détails, ordre du jour, instructions..."
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Date & Lieu */}
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
                                placeholder="Salle des fêtes, Zoom..."
                                icon={MapPin}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>

                    {/* Heures */}
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

                    {/* Zone Upload Médias */}
                    <div className="space-y-3 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Médias & Documents</label>

                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <ImageIcon size={16} /> Ajouter Image
                                <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <Video size={16} /> Ajouter Vidéo
                                <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-700 border border-red-100 rounded-xl cursor-pointer hover:bg-red-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <FileText size={16} /> Ajouter PDF
                                <input type="file" className="hidden" accept="application/pdf" multiple onChange={(e) => handleFileSelect(e, 'PDF')} />
                            </label>
                        </div>

                        {/* Preview Zone */}
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
                                <p className="text-xs font-medium">Aucun fichier sélectionné</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Actions */}
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
    Send, X, Loader2, Paperclip
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function CreatePost({ syndicateId }: { syndicateId: string }) {
    const t = useTranslations('Feed');
    const { user } = useAuthStore();

    // États
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [filterType, setFilterType] = useState<'IMAGE' | 'VIDEO' | 'PDF' | 'ALL'>('ALL');

    // Gestion de la sélection de fichiers
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'IMAGE' | 'VIDEO' | 'PDF') => {
        const selectedFiles = Array.from(e.target.files || []);

        const newFiles = selectedFiles.map(file => ({
            file,
            type,
            preview: URL.createObjectURL(file) // Créer une URL temporaire pour la miniature
        }));

        setFiles(prev => [...prev, ...newFiles]);
        // Reset l'input pour pouvoir sélectionner le même fichier deux fois si besoin
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        URL.revokeObjectURL(newFiles[index].preview); // Libérer la mémoire
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    // Envoi à l'API
    const handlePublish = async () => {
        if (!content.trim() && files.length === 0) return;
        if (!user?.id) return toast.error("Utilisateur non identifié");

        setLoading(true);
        const formData = new FormData();

        // Champs obligatoires selon ton Swagger
        formData.append('content', content);
        formData.append('authorId', user.id);
        formData.append('branchId', syndicateId); // On utilise l'ID de la branche/syndicat actuel

        // Ajout des fichiers par catégories
        files.forEach(f => {
            if (f.type === 'IMAGE') formData.append('images', f.file);
            if (f.type === 'VIDEO') formData.append('videos', f.file);
            if (f.type === 'PDF') formData.append('files', f.file);
        });

        try {
            await ugateApi.post('/publications', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success("Publication partagée avec succès !");
            // Reset
            setContent('');
            setFiles([]);
            window.location.reload(); // Recharger pour voir le nouveau post
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la publication");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">

            {/* Input Zone */}
            <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-800 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-inner shrink-0">
                    {user?.firstName?.charAt(0) || 'U'}
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={t('create_post_placeholder', { name: user?.firstName })}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-4 text-slate-700 font-medium outline-none border-none min-h-[100px] resize-none"
                />
            </div>

            {/* Previews Zone */}
            {files.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6 animate-in zoom-in-95">
                    {files.map((f, i) => (
                        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
                            {f.type === 'IMAGE' && <img src={f.preview} className="w-full h-full object-cover" />}
                            {f.type === 'VIDEO' && <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white"><Video size={20} /></div>}
                            {f.type === 'PDF' && <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500"><FileText size={24} /></div>}

                            <button
                                onClick={() => removeFile(i)}
                                className="absolute top-1 right-1 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Actions Zone */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-slate-100 gap-4">
                <div className="flex items-center gap-1">
                    {/* Bouton IMAGE */}
                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-emerald-50 text-emerald-600 rounded-xl transition-all cursor-pointer font-bold text-sm">
                        <ImageIcon size={18} />
                        <span className="hidden md:inline">Photo</span>
                        <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                    </label>

                    {/* Bouton VIDÉO */}
                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all cursor-pointer font-bold text-sm">
                        <Video size={18} />
                        <span className="hidden md:inline">Vidéo</span>
                        <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                    </label>

                    {/* Bouton PDF */}
                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-red-50 text-red-600 rounded-xl transition-all cursor-pointer font-bold text-sm">
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
import { Event, MediaInfo } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import {
    Calendar, MapPin, Clock,
    CheckCircle2, Share2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';
import MediaGallery from './MediaGallery';

export default function EventCard({ event }: { event: Event }) {
    const t = useTranslations('Event');
    const [isJoined, setIsJoined] = useState(false);
    const [loading, setLoading] = useState(false);

    const formatTime = (time: any) => {
        if (!time?.hour || !time?.minute) return "--:--";
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

    const mediaList: MediaInfo[] = [
        ...(event.imageUrls || []).map(url => ({ url, type: 'IMAGE' as const })),
        ...(event.videos || []).map(url => ({ url, type: 'VIDEO' as const })),
        ...(event.files || []).map(url => ({ url, type: 'PDF' as const })),
    ];

    return (
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500 max-w-2xl mx-auto">

            {/* Header : Date & Titre */}
            <div className="p-6 pb-2 flex gap-5">
                {/* Date Box */}
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex flex-col items-center justify-center text-primary-800 border border-primary-100 shrink-0 shadow-sm">
                    <span className="text-xl font-black leading-none">{eventDate.getDate()}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
                        {eventDate.toLocaleString('fr', { month: 'short' })}
                    </span>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-lg mb-2">
                            Événement
                        </span>
                        <button className="p-2 -mr-2 -mt-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                            <Share2 size={18} />
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                        {event.title || "Événement"}
                    </h3>
                </div>
            </div>

            {/* Infos Pratiques */}
            <div className="px-6 py-4">
                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100 text-xs font-bold text-slate-600">
                        <Clock size={14} className="text-primary-500" />
                        {formatTime(event.startTime)}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100 text-xs font-bold text-slate-600">
                        <MapPin size={14} className="text-primary-500" />
                        {event.location || "Lieu à définir"}
                    </div>
                </div>
            </div>

            {/* Description */}
            {event.description && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {event.description}
                </div>
            )}

            {/* ZONE MÉDIA - Taille standardisée */}
            {mediaList.length > 0 && (
                <div className="w-full">
                    <MediaGallery media={mediaList} />
                </div>
            )}

            {/* Footer : Participants & Action */}
            <div className="px-6 py-4 border-t border-slate-50 flex items-center justify-between bg-slate-50/30">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
                        ))}
                    </div>
                    {t('participants', { count: event.participantCount || 0 })}
                </div>

                <Button
                    onClick={handleJoin}
                    disabled={isJoined || loading}
                    className={cn(
                        "rounded-xl px-6 h-10 text-sm font-bold shadow-lg transition-all",
                        isJoined
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-primary-800 text-white hover:bg-primary-900 shadow-primary-900/20"
                    )}
                >
                    {isJoined ? (
                        <>
                            <CheckCircle2 size={16} className="mr-2" />
                            {t('joined')}
                        </>
                    ) : (
                        t('join')
                    )}
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

## 📄 `components\social\MediaGallery.tsx`

```tsx
"use client";
import { cn } from '@/lib/ utils';
import { useState, useRef, useEffect } from 'react';
import HorizontalPDFReader from './HorizontalPDFReader';

interface MediaItem {
    url: string;
    type?: 'IMAGE' | 'VIDEO' | 'PDF';
}

export const getMediaType = (url: string, explicitType?: 'IMAGE' | 'VIDEO' | 'PDF'): 'IMAGE' | 'VIDEO' | 'PDF' => {
    if (explicitType) return explicitType;

    const extension = url.split('.').pop()?.split('?')[0]?.toLowerCase();
    if (['mp4', 'webm', 'ogg', 'mov'].includes(extension || '')) return 'VIDEO';
    if (['pdf'].includes(extension || '')) return 'PDF';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension || '')) return 'IMAGE';

    return 'IMAGE';
};

function MediaContent({ url, type, index }: { url: string; type: 'IMAGE' | 'VIDEO' | 'PDF'; index: number }) {
    const [actualType, setActualType] = useState<'IMAGE' | 'VIDEO' | 'PDF'>(type);
    const [hasError, setHasError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Observer pour la lecture automatique des vidéos
    useEffect(() => {
        if (actualType !== 'VIDEO' || !videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => {
                            // Échec de lecture automatique (navigateur bloque)
                        });
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 } // Joue quand 50% de la vidéo est visible
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [actualType]);

    const handleError = () => {
        if (hasError) return;

        setHasError(true);

        if (actualType === 'IMAGE') {
            setActualType('VIDEO');
        } else if (actualType === 'VIDEO') {
            setActualType('IMAGE');
        }
    };

    if (actualType === 'VIDEO') {
        return (
            <video
                ref={videoRef}
                src={url}
                controls
                loop
                muted // Nécessaire pour l'autoplay sur la plupart des navigateurs
                playsInline // Important pour iOS
                className="w-full h-full object-cover"
                onError={handleError}
                preload="metadata"
            >
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
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

    const normalizedMedia = media.map(item => {
        const url = typeof item === 'string' ? item : item.url;
        const explicitType = typeof item === 'object' ? item.type : undefined;
        const type = getMediaType(url, explicitType);
        return { url, type };
    });

    const visuals = normalizedMedia.filter(m => m.type === 'IMAGE' || m.type === 'VIDEO');
    const pdfs = normalizedMedia.filter(m => m.type === 'PDF');

    return (
        <div className="w-full">
            {/* Galerie Visuelle - Taille standardisée type Facebook/Instagram */}
            {visuals.length > 0 && (
                <div className={cn(
                    "w-full overflow-hidden bg-black",
                    visuals.length === 1 && "aspect-[4/5] max-h-[600px]", // Style Instagram pour 1 média
                    visuals.length === 2 && "grid grid-cols-2 gap-0.5 aspect-[16/9] max-h-[500px]",
                    visuals.length === 3 && "grid grid-cols-2 gap-0.5 aspect-[4/3] max-h-[500px]",
                    visuals.length >= 4 && "grid grid-cols-2 gap-0.5 aspect-square max-h-[500px]"
                )}>
                    {visuals.slice(0, 4).map((m, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative w-full h-full bg-black flex items-center justify-center overflow-hidden",
                                visuals.length === 3 && i === 0 && "row-span-2" // Premier item plus grand si 3 médias
                            )}
                        >
                            <MediaContent url={m.url} type={m.type} index={i} />

                            {/* Overlay pour "plus de médias" */}
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

            {/* Documents PDF */}
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

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Publication, CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import {
    MessageCircle, Share2, MoreHorizontal,
    ThumbsUp, Heart, Clock, Send, Loader2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/ utils';
import { toast } from 'react-hot-toast';

import ReactionPicker from './ReactionPicker';
import HorizontalPDFReader from './HorizontalPDFReader';
import CommentItem from './CommentItem';

export default function PostCard({ publication }: { publication: Publication }) {
    const t = useTranslations('Feed');
    const ct = useTranslations('Comments');

    // États pour les Réactions
    const [showReactions, setShowReactions] = useState(false);
    const [myReaction, setMyReaction] = useState<string | null>(null);

    // États pour les Commentaires
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<CommentResponseDto[]>([]);
    const [newComment, setNewComment] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);

    // Séparation des médias
    const images = publication.fileUrlAndType.filter(m => m.type === 'IMAGE');
    const videos = publication.fileUrlAndType.filter(m => m.type === 'VIDEO');
    const pdfs = publication.fileUrlAndType.filter(m => m.type === 'PDF');

    // Charger les commentaires
    const fetchComments = async () => {
        setIsLoadingComments(true);
        try {
            const res = await ugateApi.get(`/publications/${publication.id}/comments`);
            setComments(res.data);
        } catch (e) {
            console.error("Erreur comments", e);
        } finally {
            setIsLoadingComments(false);
        }
    };

    const toggleComments = () => {
        if (!showComments) fetchComments();
        setShowComments(!showComments);
    };

    const handlePostComment = async () => {
        if (!newComment.trim()) return;
        setIsPosting(true);
        try {
            const formData = new FormData();
            formData.append('content', newComment);

            await ugateApi.post(`/publications/${publication.id}/comments`, formData);

            setNewComment('');
            fetchComments(); // Recharger la liste
            toast.success("Commentaire publié");
        } catch (e) {
            toast.error("Erreur lors de la publication");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden animate-in fade-in duration-500">

            {/* --- HEADER : AUTEUR --- */}
            <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-primary-800 rounded-full flex items-center justify-center text-white font-black border border-white shadow-sm shrink-0">
                        {publication.authorFullName.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-none mb-1.5">{publication.authorFullName}</h4>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                            <Clock size={12} />
                            {formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })}
                        </div>
                    </div>
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* --- CONTENU TEXTE --- */}
            <div className="px-6 pb-4 text-slate-700 leading-relaxed text-[15px]">
                {publication.content}
            </div>

            {/* --- ZONE MÉDIAS (Grille Facebook Style) --- */}
            <div className="px-2 pb-2">
                {(images.length > 0 || videos.length > 0) && (
                    <div className={cn(
                        "grid gap-1 rounded-2xl overflow-hidden",
                        (images.length + videos.length) >= 2 ? "grid-cols-2" : "grid-cols-1"
                    )}>
                        {images.map((img, i) => (
                            <img key={i} src={img.url} className="w-full h-full object-cover max-h-[500px] hover:brightness-95 transition-all cursor-pointer" alt="Post content" />
                        ))}
                        {videos.map((vid, i) => (
                            <video key={i} src={vid.url} controls className="w-full h-full object-cover max-h-[500px] bg-black" />
                        ))}
                    </div>
                )}

                {/* Lecteurs PDF intégrés */}
                {pdfs.length > 0 && (
                    <div className="mt-2 space-y-2">
                        {pdfs.map((pdf, i) => (
                            <HorizontalPDFReader key={i} url={pdf.url} title={`Document de la branche - ${i + 1}`} />
                        ))}
                    </div>
                )}
            </div>

            {/* --- STATS BAR --- */}
            <div className="px-6 py-3 flex items-center justify-between border-b border-slate-50">
                <div className="flex items-center -space-x-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        <ThumbsUp size={10} className="text-white fill-current" />
                    </div>
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        <Heart size={10} className="text-white fill-current" />
                    </div>
                    <span className="pl-3 text-xs font-bold text-slate-500">
                        {publication.nlikes + (myReaction ? 1 : 0)}
                    </span>
                </div>
                <button
                    onClick={toggleComments}
                    className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:underline"
                >
                    {publication.ncomments} {t('comments')}
                </button>
            </div>

            {/* --- ACTIONS BAR (LIKE / COMMENT / SHARE) --- */}
            <div className="px-2 py-1.5 flex gap-1 relative">
                <div
                    className="relative flex-1"
                    onMouseEnter={() => setShowReactions(true)}
                    onMouseLeave={() => setShowReactions(false)}
                >
                    <button className={cn(
                        "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all font-bold text-sm",
                        myReaction ? "text-primary-600 bg-primary-50/50" : "text-slate-600 hover:bg-slate-50"
                    )}>
                        <ThumbsUp size={18} className={myReaction ? "fill-current" : ""} />
                        {myReaction || t('reactions.like')}
                    </button>
                    {showReactions && (
                        <ReactionPicker onSelect={(type) => {
                            setMyReaction(type);
                            setShowReactions(false);
                            toast.success(`Réaction : ${type}`);
                        }} />
                    )}
                </div>

                <button
                    onClick={toggleComments}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors"
                >
                    <MessageCircle size={18} />
                    {t('comments')}
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors">
                    <Share2 size={18} />
                    Partager
                </button>
            </div>

            {/* --- SECTION COMMENTAIRES --- */}
            {showComments && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-50 bg-slate-50/40 animate-in slide-in-from-top-2 duration-300">

                    {/* Input principal */}
                    <div className="flex gap-3 mb-6">
                        <div className="w-9 h-9 bg-primary-800 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 shadow-sm">
                            U
                        </div>
                        <div className="flex-1 relative">
                            <input
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handlePostComment()}
                                placeholder={ct('write_comment')}
                                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-2.5 text-sm focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all shadow-sm"
                            />
                            <button
                                onClick={handlePostComment}
                                disabled={isPosting || !newComment.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-600 hover:bg-primary-50 rounded-xl transition-colors disabled:opacity-30"
                            >
                                {isPosting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Liste des commentaires (Uniquement les racines, les enfants sont gérés par récursion dans CommentItem) */}
                    {isLoadingComments ? (
                        <div className="flex justify-center py-4">
                            <Loader2 className="animate-spin text-slate-300" size={24} />
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {comments.filter(c => !c.parentId).map(comment => (
                                <CommentItem
                                    key={comment.id}
                                    comment={comment}
                                    publicationId={publication.id}
                                    allComments={comments}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
```

## 📄 `components\social\ReactionPicker.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';

const reactions = [
    { label: 'LIKE', emoji: '👍', color: 'text-blue-500' },
    { label: 'LOVE', emoji: '❤️', color: 'text-red-500' },
    { label: 'HAHA', emoji: '😆', color: 'text-yellow-500' },
    { label: 'WOW', emoji: '😮', color: 'text-blue-400' },
    { label: 'SAD', emoji: '😢', color: 'text-yellow-600' },
    { label: 'ANGRY', emoji: '😡', color: 'text-orange-600' },
];

export default function ReactionPicker({ onSelect }: { onSelect: (type: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute bottom-full left-0 mb-2 bg-white shadow-2xl border border-slate-100 rounded-full p-1.5 flex gap-1 z-50"
        >
            {reactions.map((res, i) => (
                <motion.button
                    key={res.label}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => onSelect(res.label)}
                    className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-slate-50 rounded-full transition-colors"
                >
                    {res.emoji}
                </motion.button>
            ))}
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

export interface Syndicate {
    id: string;
    name: string;
    description: string;
    domain: string;
    type: string;
    isApproved: boolean;
    isActive: boolean;
    documents: SyndicateDocuments;
    organization: OrganizationInfo;
    creator: CreatorInfo;
    stats: SyndicateStats;
    createdAt: string;
    updatedAt: string;
    // Fallbacks pour compatibilité avec les listes simples
    logoUrl?: string;
    statusUrl?: string;
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

export interface Event {
    id: string;
    creatorId: string;
    branchId: string;
    title: string;
    description: string;
    location: string;
    date: string;
    startTime?: LocalTime; // Ajoute le ?
    endTime?: LocalTime;
    createdAt: string;
    updatedAt: string;
    participantCount: number;
    imageUrls: string[];
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
    "error": "Ein Fehler ist aufgetreten"
  },
  "Nav": {
    "home": "Startseite",
    "explorer": "Erkunden",
    "login": "Anmelden",
    "register": "Beitreten"
  },
  "Hero": {
    "title": "Vereinigen Sie Ihre Stimmen, vereinfachen Sie das Handeln",
    "subtitle": "Die Gewerkschaftsplattform der nächsten Generation."
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
    "login_success": "Login successful",
    "login_error": "Invalid credentials",
    "register_success": "Account created successfully",
    "register_error": "Error creating account",
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
    "post": "Envoyer"
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

- **Fichiers traités**: 66
- **Taille totale**: 259KB
- **Date de génération**: 02/02/2026 10:22:47
