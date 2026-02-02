"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { ComplianceResponse } from '@/lib/types/api';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { ShieldCheck, ShieldAlert, BadgeCheck, FileText, Loader2 } from 'lucide-react';

export default function CompliancePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { user } = useAuthStore();
    const [compliance, setCompliance] = useState<ComplianceResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkCompliance = async () => {
            if (!user?.id) return;
            try {
                const res = await ugateApi.get(`/compliance/check/${user.id}`);
                setCompliance(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        checkCompliance();
    }, [user?.id]);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={id} />
            <main className="lg:ml-72 pt-32 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Vérification de Conformité</h1>
                        <p className="text-slate-500 font-medium">État de validité de votre dossier syndical.</p>
                    </header>

                    {loading ? (
                        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary-800" /></div>
                    ) : (
                        <div className="grid gap-8">
                            {/* Statut Global */}
                            <div className={cn(
                                "p-10 rounded-[3rem] border flex items-center gap-8 shadow-xl transition-all",
                                compliance?.globalStatus === 'VALID'
                                    ? "bg-emerald-50 border-emerald-100 text-emerald-900 shadow-emerald-900/5"
                                    : "bg-amber-50 border-amber-100 text-amber-900 shadow-amber-900/5"
                            )}>
                                <div className={cn(
                                    "w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg",
                                    compliance?.globalStatus === 'VALID' ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                                )}>
                                    {compliance?.globalStatus === 'VALID' ? <BadgeCheck size={40} /> : <ShieldAlert size={40} />}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black">Statut actuel : {compliance?.globalStatus}</h2>
                                    <p className="opacity-70 font-medium">Dernière vérification le {new Date(compliance?.verificationTimestamp || '').toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Détails des points de contrôle */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(compliance?.details || {}).map(([key, val]) => (
                                    <div key={key} className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center justify-between shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className={cn("p-3 rounded-xl", val ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600")}>
                                                <FileText size={20} />
                                            </div>
                                            <span className="font-bold text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        </div>
                                        <div className={cn("w-3 h-3 rounded-full shadow-sm", val ? "bg-emerald-500" : "bg-red-500")} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}