"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { Branch, Syndicate } from '@/lib/types/api';
import { useRouter } from '@/navigation';
import { Loader2, ArrowRight, MapPin, Building2, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SelectBranchPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [branches, setBranches] = useState<Branch[]>([]);
    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                const [branchesRes, syndRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${id}/branches`),
                    ugateApi.get(`/syndicates/${id}/details`)
                ]);
                setBranches(branchesRes.data);
                setSyndicate(syndRes.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        init();
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-primary-800 w-12 h-12" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center mx-auto text-4xl font-black text-primary-900 border border-slate-100">
                        {syndicate?.name.charAt(0)}
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Espace Administration</h1>
                    <p className="text-slate-500 font-medium text-lg italic">"{syndicate?.name}"</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {branches.map((branch, idx) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => router.push(`/syndicate/${id}/branch/${branch.id}`)}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                        >
                            <div className="h-44 bg-slate-900 relative">
                                {branch.bannerUrl ? (
                                    <img src={branch.bannerUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt={branch.name} />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-primary-900 flex items-center justify-center">
                                        <GitBranch className="text-white/20" size={64} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                                    <MapPin size={14} className="text-primary-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{branch.location}</span>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary-800 transition-colors">{branch.name}</h3>
                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Gérer l'antenne</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary-600 transition-all shadow-lg shadow-slate-900/20">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}