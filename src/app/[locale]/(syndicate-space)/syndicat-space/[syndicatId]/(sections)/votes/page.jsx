"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Vote, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

export default function VotesPage({ params }) {
    const t = useTranslations('votes_page');
    const [votes, setVotes] = useState([]);

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
            </motion.div>

            {/* État vide */}
            {votes.length === 0 && (
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
        </div>
    );
}
