"use client";

import { use, useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import { OfficialProfileResponse } from '@/lib/types/api';
import { ShieldCheck, Mail, Phone, BadgeCheck, FileText, Eye, AlertCircle } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import PDFViewer from '@/components/ui/PDFViewer';
import {cn} from "@/lib/ utils";

export default function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const { user } = useAuthStore();
    const [compliance, setCompliance] = useState<OfficialProfileResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [pdf, setPdf] = useState({ open: false, url: '', title: '' });

    useEffect(() => {
        const fetchCompliance = async () => {
            if (!user?.id) return;
            try {
                const res = await ugateApi.get(`/compliance/details/${user.id}`);
                setCompliance(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchCompliance();
    }, [user?.id]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>;

    const docs = [
        { label: "Carte d'Identité (Recto)", url: compliance?.cniRectoUrl, type: "CNI" },
        { label: "Permis de Conduire", url: compliance?.licenseRectoUrl, type: "Permis" },
        { label: "Curriculum Vitae", url: compliance?.cvUrl, type: "CV" },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl flex flex-col md:flex-row gap-10 items-center">
                <div className="w-32 h-32 rounded-[2.5rem] bg-primary-900 flex items-center justify-center text-white text-5xl font-black border-4 border-white shadow-2xl">
                    {user?.firstName.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                        <h2 className="text-3xl font-black text-slate-900">{user?.firstName} {user?.lastName}</h2>
                        {compliance?.isVerified && <BadgeCheck className="text-emerald-500" size={28} />}
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 font-bold text-sm uppercase tracking-tighter">
                        <span className="flex items-center gap-1"><Mail size={16} /> {user?.email}</span>
                        <span className="flex items-center gap-1"><Phone size={16} /> {user?.phone || 'Non renseigné'}</span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {docs.map((doc, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col h-full">
                        <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                            doc.url ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
                        )}>
                            {doc.url ? <FileText size={24} /> : <AlertCircle size={24} />}
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{doc.label}</h4>
                        <p className="text-xs text-slate-400 mb-8">Document de conformité</p>

                        {doc.url ? (
                            <button
                                onClick={() => setPdf({ open: true, url: doc.url!, title: doc.label })}
                                className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all"
                            >
                                <Eye size={16} /> Voir
                            </button>
                        ) : (
                            <button className="mt-auto w-full py-3 bg-primary-100 text-primary-700 rounded-xl font-bold text-sm">Action requise</button>
                        )}
                    </div>
                ))}
            </div>

            <PDFViewer
                isOpen={pdf.open}
                onClose={() => setPdf({ ...pdf, open: false })}
                url={pdf.url}
                title={pdf.title}
            />
        </div>
    );
}