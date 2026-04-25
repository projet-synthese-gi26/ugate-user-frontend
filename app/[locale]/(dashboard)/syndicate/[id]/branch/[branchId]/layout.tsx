"use client";

import { use, useEffect, useState } from 'react';
import { ugateApi } from '@/lib/axios';
import { Syndicate, Branch } from '@/lib/types/api';
import { Loader2, MapPin, ChevronRight } from 'lucide-react';

export default function WorkspaceLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string, branchId: string }>
}) {
    const { id: syndicateId, branchId } = use(params);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const[branch, setBranch] = useState<Branch | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContext = async () => {
            try {
                const [syndRes, branchesRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${syndicateId}/details`),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`)
                ]);
                setSyndicate(syndRes.data);
                setBranch(branchesRes.data.find((b: Branch) => b.id === branchId));
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchContext();
    }, [syndicateId, branchId]);

    if (loading) return (
        <div className="h-64 flex items-center justify-center bg-white rounded-[2rem] border border-slate-200">
            <Loader2 className="animate-spin text-primary-800" />
        </div>
    );

    return (
        <div className="flex flex-col gap-6 w-full min-w-0">

            {/* HEADER UNIQUE - Bannière de l'antenne (Intégrée dans la colonne centrale) */}
            <header className="relative h-56 sm:h-64 bg-slate-900 rounded-[2rem] overflow-hidden shrink-0 shadow-sm border border-slate-200">

                {syndicate?.documents?.logoUrl ? (
                    <img
                        src={syndicate.documents.logoUrl}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]"
                        alt="Syndicate"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900" />
                )}

                {/* Dégradé pour lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full pb-6 px-6 sm:px-8">
                    <div className="flex items-end gap-5">
                        {/* Logo Syndicat */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-[3px] border-white shrink-0 overflow-hidden">
                            {syndicate?.documents?.logoUrl ? (
                                <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover" alt="Logo" />
                            ) : (
                                <span className="text-3xl font-black text-slate-800">{syndicate?.name.charAt(0)}</span>
                            )}
                        </div>

                        <div className="mb-1">
                            <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                                <span className="truncate max-w-[150px] sm:max-w-[250px]">{syndicate?.name}</span>
                                <ChevronRight size={12} />
                                <span className="text-primary-400">Antenne</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-2.5 drop-shadow-md">
                                {branch?.name}
                            </h1>
                            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 w-fit">
                                <MapPin size={12} className="text-primary-300" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{branch?.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTENU DE LA PAGE (Fil d'actualité, Événements, etc.) */}
            <main className="w-full">
                {children}
            </main>
        </div>
    );
}