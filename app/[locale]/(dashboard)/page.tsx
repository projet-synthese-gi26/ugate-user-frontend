"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { Syndicate } from '@/lib/types/api';
import { useAuthStore } from '@/lib/store';
import { Link } from '@/navigation';
import {
    Loader2, ArrowRight, Building2, Plus,
    ShieldCheck, User, CalendarDays, Compass,
    BriefcaseBusiness
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/ utils'; // Assure-toi que le chemin est correct (sans espace)

export default function DashboardHomePage() {
    const t = useTranslations('Dashboard');
    const { user } = useAuthStore();
    const[mySyndicates, setMySyndicates] = useState<Syndicate[]>([]);
    const[loading, setLoading] = useState(true);

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
    },[]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <Loader2 className="animate-spin text-primary-600 w-10 h-10" />
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col pb-20 font-sans">

            {/* --- 1. COCKPIT PREMIUM (En-tête) --- */}
            {/* pt-32 permet de laisser de la place à la Navbar fixed */}
            <div className="bg-[#0F172A] pt-32 pb-28 relative border-b border-slate-800">
                {/* Effets d'éclairage subtils en arrière-plan */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 text-primary-400 font-medium text-sm mb-4">
                            <CalendarDays size={16} />
                            {today}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                            Bonjour, {user?.firstName}
                        </h1>
                        <p className="text-slate-400 text-lg max-w-xl font-light">
                            Bienvenue sur votre espace. Retrouvez ici l'ensemble de vos réseaux et activités professionnelles.
                        </p>
                    </motion.div>

                    {/* Mini-Stats Résumé */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-4"
                    >
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 min-w-[120px] flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold text-white mb-1">{mySyndicates.length}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Adhésions</div>
                        </div>
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 min-w-[120px] flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">OK</div>
                            <div className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest">Statut</div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* --- 2. CONTENEUR PRINCIPAL (Remonté avec -mt-10) --- */}
            <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 w-full flex-1">

                {/* En-tête du conteneur (fond blanc garantit la lisibilité) */}
                <div className="bg-white rounded-t-[2rem] border-x border-t border-slate-200 p-6 sm:px-8 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                            <Building2 size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 leading-tight">{t('my_syndicates')}</h2>
                            <p className="text-sm font-medium text-slate-500">{t('my_syndicates_sub')}</p>
                        </div>
                    </div>
                    {mySyndicates.length > 0 && (
                        <Link href="/explorer">
                            <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 hover:bg-primary-50 px-4 py-2 rounded-lg transition-colors">
                                <Plus size={18} /> Rejoindre
                            </button>
                        </Link>
                    )}
                </div>

                {/* Corps du conteneur */}
                <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-[2rem] p-6 sm:p-8 shadow-sm min-h-[400px]">

                    {mySyndicates.length > 0 ? (
                        /* --- GRILLE DES SYNDICATS --- */
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mySyndicates.map((syndicate, index) => {
                                const userRole = syndicate.userRole || 'MEMBER';
                                const isAdmin =['ADMIN', 'PRESIDENT', 'MODERATOR'].includes(userRole);
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
                                            <div className="group bg-white h-full rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300 relative flex flex-col overflow-hidden">

                                                {/* Header Card */}
                                                <div className="h-24 bg-slate-900 relative">
                                                    {syndicate.documents?.logoUrl ? (
                                                        <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Cover" />
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-primary-900" />
                                                    )}

                                                    <div className="absolute top-4 right-4">
                                                        <span className={cn(
                                                            "text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 border shadow-sm backdrop-blur-sm",
                                                            isAdmin
                                                                ? "bg-purple-500/20 text-purple-100 border-purple-500/30"
                                                                : "bg-emerald-500/20 text-emerald-100 border-emerald-500/30"
                                                        )}>
                                                            {isAdmin ? <ShieldCheck size={12} /> : <User size={12} />}
                                                            {userRole}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Logo & Content */}
                                                <div className="px-6 -mt-8 relative z-10 flex-1 flex flex-col">
                                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md border-4 border-white flex items-center justify-center text-2xl font-black text-slate-900 mb-4 overflow-hidden">
                                                        {syndicate.documents?.logoUrl ? (
                                                            <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover" alt="Logo" />
                                                        ) : (
                                                            syndicate.name.charAt(0)
                                                        )}
                                                    </div>

                                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-1">
                                                        {syndicate.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed flex-1">
                                                        {syndicate.description || "Espace membre actif et sécurisé."}
                                                    </p>

                                                    <div className="mt-auto pt-4 pb-2 border-t border-slate-100 flex items-center justify-between">
                                                        <span className="text-sm font-semibold text-slate-600 group-hover:text-primary-600 transition-colors">
                                                            {t('enter_space')}
                                                        </span>
                                                        <ArrowRight size={18} className="text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        /* --- ÉTAT VIDE (STYLE SAAS PREMIUM) --- */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center py-12 md:py-20"
                        >
                            {/* Boîte pointillée élégante */}
                            <div className="w-full max-w-2xl border-2 border-dashed border-slate-200 bg-white/50 rounded-3xl p-10 md:p-16 text-center flex flex-col items-center hover:border-slate-300 transition-colors">

                                <div className="w-20 h-20 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center text-slate-400 mb-6">
                                    <BriefcaseBusiness size={36} strokeWidth={1.5} />
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {t('no_syndicates')}
                                </h2>

                                <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                                    Votre espace est vide pour le moment. Rejoignez une organisation professionnelle pour accéder aux services, votes et événements de votre secteur.
                                </p>

                                <Link href="/explorer">
                                    <button className="h-12 px-8 bg-slate-900 text-white rounded-xl font-medium hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/20 transition-all flex items-center gap-2 group">
                                        <Compass size={18} />
                                        {t('explore_cta')}
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}