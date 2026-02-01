"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Vote, BarChart3, Clock, CheckCircle2, RefreshCw } from 'lucide-react';
import { getVotesByBranchAPI } from '@/lib/api/vote';

export default function VotesPage() {
    const t = useTranslations('votes_page');
    const { syndicatId, branchId } = useParams();
    const [votes, setVotes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Charger les votes de la branche
    const loadVotes = async () => {
        if (!branchId) return;

        setLoading(true);
        try {
            const data = await getVotesByBranchAPI(branchId);
            const votesArray = Array.isArray(data) ? data : (data.content || []);
            setVotes(votesArray);
        } catch (error) {
            console.error("Erreur chargement des votes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (branchId) loadVotes();
    }, [branchId]);

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-1">
                        Votes & Sondages
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Participez aux décisions de votre syndicat
                    </p>
                </div>
                <button
                    onClick={loadVotes}
                    disabled={loading}
                    className="p-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all"
                >
                    <RefreshCw className={`w-5 h-5 text-neutral-600 dark:text-neutral-400 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </motion.div>

            {/* État de chargement */}
            {loading && (
                <div className="flex justify-center py-20">
                    <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
                </div>
            )}

            {/* État vide */}
            {!loading && votes.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-12 text-center"
                >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Vote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                        Aucun vote en cours
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                        Les sondages et votes créés par les administrateurs apparaîtront ici.
                    </p>
                </motion.div>
            )}

            {/* Liste des votes */}
            {!loading && votes.length > 0 && (
                <div className="space-y-4">
                    {votes.map((vote) => (
                        <motion.div
                            key={vote.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6"
                        >
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                                {vote.question || vote.title}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                {vote.options?.length || 0} options disponibles
                            </p>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
