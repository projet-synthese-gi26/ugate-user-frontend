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
import { cn } from '@/lib/ utils';

export default function DashboardHomePage() {
    const t = useTranslations('Dashboard');
    const { user } = useAuthStore();
    const [mySyndicates, setMySyndicates] = useState<Syndicate[]>([]);
    const [loading, setLoading] = useState(true);

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
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
            <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans pb-20">

            {/* --- 1. HEADER (Design SaaS Moderne) --- */}
            <div className="bg-[#0A0A0A] border-b border-white/10 pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-center gap-2 text-primary-400 font-medium text-xs uppercase tracking-widest mb-3">
                            <CalendarDays size={14} />
                            {today}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                            Bonjour, {user?.firstName}
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
                            Gérez vos adhésions, suivez l'actualité de vos antennes et prenez part aux décisions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl px-6 py-4 backdrop-blur-md shadow-2xl"
                    >
                        <div>
                            <div className="text-2xl font-semibold text-white leading-none mb-1">{mySyndicates.length}</div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Adhésions</div>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10"></div>
                        <div>
                            <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 leading-none mb-1.5">
                                <ShieldCheck size={14} /> À jour
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Statut Légal</div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* --- 2. CONTENEUR PRINCIPAL --- */}
            <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1 -mt-12 relative z-20">

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

                <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-[2rem] p-6 sm:p-8 shadow-sm min-h-[400px]">

                    {mySyndicates.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mySyndicates.map((syndicate, index) => {
                                const userRole = syndicate.userRole || 'MEMBER';
                                const isAdmin =['ADMIN', 'PRESIDENT', 'MODERATOR'].includes(userRole);
                                const targetUrl = isAdmin
                                    ? `/syndicate/${syndicate.id}/select-branch`
                                    : syndicate.userBranchId
                                        ? `/syndicate/${syndicate.id}/branch/${syndicate.userBranchId}`
                                        : `/syndicate/${syndicate.id}/select-branch`;

                                // 💡 CORRECTION DU LOGO : L'API `/syndicates/mine` renvoie 'logoUrl' à la racine de l'objet, pas dans documents.
                                // @ts-ignore (On cast en any au cas où le type TypeScript ne soit pas parfaitement à jour)
                                const imageUrl = syndicate.logoUrl || syndicate.documents?.logoUrl;

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        key={syndicate.id}
                                    >
                                        <Link href={targetUrl} className="block h-full outline-none">
                                            <div className="group bg-white h-full rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-400/50 transition-all duration-200 flex flex-col overflow-hidden">

                                                {/* Header Card (Bannière) */}
                                                <div className="h-28 bg-slate-900 relative">
                                                    {imageUrl ? (
                                                        <img src={imageUrl} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Cover" />
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-primary-900" />
                                                    )}

                                                    <div className="absolute top-4 right-4">
                                                        <span className={cn(
                                                            "text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 border shadow-sm backdrop-blur-sm",
                                                            isAdmin
                                                                ? "bg-purple-500/30 text-purple-50 border-purple-400/30"
                                                                : "bg-emerald-500/30 text-emerald-50 border-emerald-400/30"
                                                        )}>
                                                            {isAdmin ? <ShieldCheck size={12} /> : <User size={12} />}
                                                            {userRole}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Logo & Content */}
                                                <div className="px-6 -mt-8 relative z-10 flex-1 flex flex-col">

                                                    {/* 💡 FINI LE "S" ! On met une belle icône si pas d'image */}
                                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md border-4 border-white flex items-center justify-center mb-4 overflow-hidden relative">
                                                        {imageUrl ? (
                                                            <img src={imageUrl} className="w-full h-full object-cover bg-white" alt="Logo" />
                                                        ) : (
                                                            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                                                <Building2 size={24} className="text-slate-300" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors line-clamp-1">
                                                        {syndicate.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed flex-1">
                                                        {syndicate.description || "Espace membre actif et sécurisé de l'organisation."}
                                                    </p>
                                                </div>

                                                {/* Footer de la carte (Bouton d'action) */}
                                                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-primary-50/50 transition-colors mt-4">
                                                    <span className="text-sm font-medium text-slate-600 group-hover:text-primary-700 transition-colors">
                                                        {t('enter_space')}
                                                    </span>
                                                    <ArrowRight size={16} className="text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Carte "Explorer" */}
                            <Link href="/explorer" className="block h-full outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="h-full min-h-[220px] rounded-2xl border-2 border-dashed border-slate-200 hover:border-primary-400 hover:bg-primary-50/30 transition-all duration-200 flex flex-col items-center justify-center p-6 text-center group bg-slate-50/50"
                                >
                                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-primary-600 group-hover:border-primary-200 transition-all text-slate-400 shadow-sm">
                                        <Plus size={24} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-700 group-hover:text-primary-700 transition-colors">Explorer le réseau</h3>
                                    <p className="text-xs text-slate-500 mt-1">Trouver de nouvelles opportunités</p>
                                </motion.div>
                            </Link>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full bg-white border border-slate-200 rounded-2xl p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-sm"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 mb-6 shadow-inner">
                                <BriefcaseBusiness size={28} strokeWidth={1.5} />
                            </div>

                            <h2 className="text-xl font-semibold text-slate-900 mb-2">
                                {t('no_syndicates')}
                            </h2>

                            <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                                Votre espace est vide. Parcourez notre annuaire d'organisations certifiées pour accéder à vos services et participer aux décisions.
                            </p>

                            <Link href="/explorer">
                                <button className="h-10 px-6 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-all flex items-center gap-2 shadow-sm">
                                    <Compass size={16} />
                                    {t('explore_cta')}
                                    <ArrowRight size={16} />
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}