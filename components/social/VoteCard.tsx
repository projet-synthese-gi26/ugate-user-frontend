"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { PublicationVoteWithResultsDTO } from '@/lib/types/api';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Circle, Loader2, Info, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

export default function VoteCard({ voteId }: { voteId: string }) {
    const t = useTranslations('Votes');
    const { user } = useAuthStore();

    const [voteData, setVoteData] = useState<PublicationVoteWithResultsDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const fetchResults = async () => {
        try {
            const res = await ugateApi.get(`/publication-votes/${voteId}/results`);
            setVoteData(res.data);
        } catch (error) {
            console.error("Erreur chargement vote", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchResults(); }, [voteId]);

    const handleCastVote = async () => {
        if (!selectedChoice) return;
        setVoting(true);
        try {
            await ugateApi.post(`/publication-votes/${voteId}/cast`, {
                choiceLabel: selectedChoice
            });
            toast.success(t('success_vote'));
            fetchResults(); // Rafraîchir pour voir les résultats
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur");
        } finally {
            setVoting(false);
        }
    };

    if (loading) return <div className="p-8 bg-white rounded-3xl border border-slate-100 flex justify-center"><Loader2 className="animate-spin text-primary-600" /></div>;
    if (!voteData) return null;

    const isClosed = new Date(voteData.closingAt) < new Date();
    const canVote = !voteData.hasVoted && !isClosed;

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="p-8">
                {/* Header du Vote */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center">
                            <BarChart3 size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{voteData.title}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                                {isClosed ? t('closed') : t('closing_at', { date: new Date(voteData.closingAt).toLocaleDateString() })}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-slate-600 text-sm mb-8 leading-relaxed">{voteData.description}</p>

                {/* Options / Résultats */}
                <div className="space-y-3">
                    {voteData.results.map((result) => {
                        const percentage = voteData.totalVotes > 0
                            ? Math.round((result.count / voteData.totalVotes) * 100)
                            : 0;

                        return (
                            <div key={result.choiceLabel} className="relative">
                                {canVote ? (
                                    // Mode Vote
                                    <button
                                        onClick={() => setSelectedChoice(result.choiceLabel)}
                                        className={cn(
                                            "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left",
                                            selectedChoice === result.choiceLabel
                                                ? "border-primary-600 bg-primary-50/50 shadow-md shadow-primary-900/5"
                                                : "border-slate-100 hover:border-slate-300 bg-slate-50/50"
                                        )}
                                    >
                                        {selectedChoice === result.choiceLabel
                                            ? <CheckCircle2 className="text-primary-600 shrink-0" />
                                            : <Circle className="text-slate-300 shrink-0" />
                                        }
                                        <span className={cn("font-bold text-sm", selectedChoice === result.choiceLabel ? "text-primary-900" : "text-slate-700")}>
                                            {result.choiceLabel}
                                        </span>
                                    </button>
                                ) : (
                                    // Mode Résultats
                                    <div className="relative h-14 w-full bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                                        {/* Barre de progression animée */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, ease: "circOut" }}
                                            className={cn(
                                                "absolute inset-y-0 left-0 bg-primary-800/10 border-r-2 border-primary-800/20",
                                                voteData.hasVoted && "bg-emerald-500/10 border-emerald-500/20"
                                            )}
                                        />
                                        <div className="absolute inset-0 px-5 flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-800">{result.choiceLabel}</span>
                                            <span className="text-sm font-black text-primary-800">{percentage}%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-tighter">
                        <Info size={14} />
                        {t('total_votes', { count: voteData.totalVotes })}
                    </div>

                    {canVote && (
                        <Button
                            onClick={handleCastVote}
                            disabled={!selectedChoice || voting}
                            className="rounded-xl px-8 bg-primary-800 shadow-xl shadow-primary-900/20 font-bold"
                        >
                            {voting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                            {t('vote_now')}
                        </Button>
                    )}

                    {voteData.hasVoted && (
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                            <CheckCircle2 size={18} />
                            {t('already_voted')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}