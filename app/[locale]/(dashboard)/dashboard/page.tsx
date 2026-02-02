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