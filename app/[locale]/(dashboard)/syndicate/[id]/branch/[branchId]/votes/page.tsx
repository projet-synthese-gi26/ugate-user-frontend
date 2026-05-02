"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import VoteCard from '@/components/social/VoteCard';
import CreateVoteModal from '@/components/social/CreateVoteModal';
import { Plus, BarChart3, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function SyndicateVotesPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    const { branchId } = use(params);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [voteIds, setVoteIds] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            // Plus besoin de charger les détails du syndicat
            const res = await ugateApi.get(`/publication-votes/branch/${branchId}`);
            const data = Array.isArray(res.data) ? res.data : (res.data.content || []);
            setVoteIds(data.map((v: any) => v.id));
        } catch (error) {
            console.error("Erreur chargement votes", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [branchId]);

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-20">

            {/* En-tête Premium Façon "Carte" */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                        <BarChart3 size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-slate-900">Votes & Sondages</h1>
                        <p className="text-sm font-medium text-slate-500">Prenez part aux décisions de l'antenne</p>
                    </div>
                </div>

                {/* Bouton affiché pour TOUS les utilisateurs */}
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-black text-white shadow-md transition-all active:scale-95 shrink-0"
                >
                    <Plus size={18} className="mr-2" />
                    Nouveau
                </Button>
            </div>

            {/* Liste des Votes */}
            {loading ? (
                <div className="flex justify-center py-10">
                    <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
                </div>
            ) : voteIds.length > 0 ? (
                <div className="space-y-6">
                    {voteIds.map((vId, idx) => (
                        <motion.div
                            key={vId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <VoteCard voteId={vId} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[2rem] p-12 text-center border border-slate-200 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                        <BarChart3 size={32} className="text-slate-300" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">Aucun scrutin en cours</h2>
                    <p className="text-slate-500 font-medium text-sm mb-6">
                        Les prochains votes et sondages de votre antenne apparaîtront ici.
                    </p>

                    {/* Bouton affiché pour TOUS les utilisateurs */}
                    <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(true)}
                        className="border-dashed border-2 border-slate-200 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl"
                    >
                        <Plus size={18} className="mr-2" /> Lancer un sondage
                    </Button>
                </div>
            )}

            <CreateVoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={branchId}
                onSuccess={fetchData}
            />
        </div>
    );
}