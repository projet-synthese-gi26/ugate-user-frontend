"use client";

import { useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { Branch } from '@/lib/types/api';
import { MapPin, ArrowRight, Building2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    syndicateId: string;
    onSelect: (branchId: string) => void;
}

export default function BranchSelector({ syndicateId, onSelect }: Props) {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const res = await ugateApi.get(`/syndicates/${syndicateId}/branches`);
                setBranches(res.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchBranches();
    }, [syndicateId]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin w-10 h-10 text-primary-800" /></div>;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-3">Choisissez une antenne</h2>
                <p className="text-slate-500 font-medium">
                    En tant qu'administrateur, vous avez accès à l'ensemble du réseau.
                    Sélectionnez l'antenne que vous souhaitez gérer ou consulter.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch, idx) => (
                    <motion.button
                        key={branch.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => onSelect(branch.id)}
                        className="group bg-white p-6 rounded-[2rem] border border-slate-200 text-left shadow-sm hover:shadow-xl hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-10 -mt-10 group-hover:bg-primary-50 transition-colors" />

                        <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 relative z-10 shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 size={24} />
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors relative z-10">
                            {branch.name}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wide mb-6 relative z-10">
                            <MapPin size={12} />
                            {branch.location}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50 relative z-10">
                            <span className="text-xs font-medium text-slate-400">Accéder à l'espace</span>
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}