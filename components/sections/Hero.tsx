"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ArrowRight, PlayCircle, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ADMIN_DASHBOARD_URL } from "@/lib/axios";
import { useAuthStore } from '@/lib/store';

const backgroundImages =[
    "https://images.unsplash.com/photo-1766330301961-6366c58297d0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    "https://media.istockphoto.com/id/2221927313/fr/photo/des-partenaires-commerciaux-se-serrent-la-main-apr%C3%A8s-une-r%C3%A9union-r%C3%A9ussie-dans-un-bureau.jpg?s=1024x1024&w=is&k=20&c=DteM6a43cq4Vb8yEHpDERUAef43T5oVXcJDPbd3TcrY=",
    "https://plus.unsplash.com/premium_photo-1664300108565-fdd8a6132123?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Hero() {
    const t = useTranslations('Hero');
    const [index, setIndex] = useState(0);

    // Vérifier l'état de connexion de l'utilisateur
    const { isAuthenticated } = useAuthStore();

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
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-primary-300 text-xs font-bold mb-8 backdrop-blur-md shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {t('tagline')}
                    </div>

                    {/* Titre */}
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
                        {t('title_part1')} <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-blue-200 to-primary-400 bg-[length:200%_auto] animate-gradient">
                            {t('title_part2')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        {t('description')}
                    </p>

                    {/* CTAs DYNAMIQUES SELON L'ÉTAT DE CONNEXION */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                        {isAuthenticated ? (
                            // --- BOUTONS POUR UTILISATEUR CONNECTÉ ---
                            <>
                                <Link href="/dashboard" className="w-full sm:w-auto outline-none">
                                    <Button size="lg" className="w-full h-14 rounded-full text-base px-8 bg-primary-600 text-white hover:bg-primary-500 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] border-none group">
                                        <LayoutDashboard className="mr-2 h-5 w-5" />
                                        Accéder à mon espace
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="/explorer" className="w-full sm:w-auto outline-none">
                                    <Button variant="outline" size="lg" className="w-full h-14 rounded-full text-base px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group">
                                        Explorer les réseaux
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            // --- BOUTONS POUR VISITEUR ---
                            <>
                                <Link href="/explorer" className="w-full sm:w-auto outline-none">
                                    <Button size="lg" className="w-full h-14 rounded-full text-base px-8 bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] group">
                                        {t('cta_secondary')}
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <a
                                    href={ADMIN_DASHBOARD_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto outline-none"
                                >
                                    <Button variant="outline" size="lg" className="w-full h-14 rounded-full text-base px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group">
                                        <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary-400 transition-colors" />
                                        Créer mon syndicat
                                    </Button>
                                </a>
                            </>
                        )}

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