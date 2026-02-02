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