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