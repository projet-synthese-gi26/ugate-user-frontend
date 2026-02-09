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