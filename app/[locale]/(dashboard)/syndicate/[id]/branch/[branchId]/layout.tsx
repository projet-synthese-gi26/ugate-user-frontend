"use client";

import { use, useEffect, useState } from 'react';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { ugateApi } from '@/lib/axios';
import { Syndicate, Branch } from '@/lib/types/api';
import { Loader2, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export default function WorkspaceLayout({ children, params }: { children: React.ReactNode, params: Promise<{ id: string, branchId: string }> }) {
    const { id: syndicateId, branchId } = use(params);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [branch, setBranch] = useState<Branch | null>(null);
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

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary-800" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            <MemberSidebar syndicateId={syndicateId} branchId={branchId} />

            <div className="flex-1  flex flex-col min-w-0">
                {/* HEADER UNIQUE - SYNDICAT FOCUS */}
                <header className="relative h-64 bg-slate-900 overflow-hidden shrink-0">
                    {syndicate?.documents?.logoUrl && (
                        <img src={syndicate.documents.logoUrl} className="w-full h-full object-cover opacity-40 blur-[2px]" alt="Syndicate" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-black/20" />

                    <div className="absolute bottom-0 left-0 w-full pb-8">
                        <div className="max-w-5xl mx-auto px-8 flex items-end gap-6">
                            {/* Logo Syndicat */}
                            <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border-4 border-white shrink-0">
                                <span className="text-4xl font-black text-primary-900">{syndicate?.name.charAt(0)}</span>
                            </div>
                            <div className="mb-2">
                                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                    {syndicate?.name}
                                    <ChevronRight size={12} className="text-primary-400" />
                                    <span className="text-primary-700">Antenne</span>
                                </div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-3">
                                    {branch?.name}
                                </h1>
                                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 w-fit shadow-sm">
                                    <MapPin size={12} className="text-primary-600" />
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{branch?.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 w-full">
                    <div className="max-w-5xl mx-auto px-8 py-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}