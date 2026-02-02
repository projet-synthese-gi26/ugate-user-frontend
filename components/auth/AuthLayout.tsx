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