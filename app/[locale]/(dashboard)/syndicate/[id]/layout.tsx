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

            <div className="flex-1 lg:ml-72 flex flex-col min-w-0">
                {/* BANNIÈRE & IDENTITÉ SYNDICALE */}
                <header className="relative h-72 bg-slate-900 overflow-hidden shrink-0">
                    {syndicate?.documents?.logoUrl && (
                        <img
                            src={syndicate.documents.logoUrl}
                            className="w-full h-full object-cover opacity-50 blur-[1px]"
                            alt="Banner"
                        />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/10 to-black/30" />

                    {/* Contenu Header - Centré comme le reste */}
                    <div className="absolute bottom-0 left-0 w-full pb-8">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-end gap-6">
                            {/* Logo */}
                            <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden shrink-0">
                                <span className="text-4xl font-black text-primary-900">{syndicate?.name.charAt(0)}</span>
                            </div>

                            {/* Textes */}
                            <div className="mb-2 space-y-2">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none">
                                        {syndicate?.name}
                                    </h1>
                                    <ShieldCheck className="text-primary-600 shrink-0" size={24} />
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 w-fit shadow-sm">
                                    <MapPin size={12} className="text-primary-600" />
                                    {syndicate?.domain} • Antenne locale
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Zone de contenu variable - Alignement forcé */}
                <main className="flex-1">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}