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