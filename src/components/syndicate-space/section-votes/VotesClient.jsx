"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Plus, BarChart, Users, TrendingUp, Calendar, CheckCircle } from 'lucide-react';

// Composant Carte de Vote interne (pour éviter les erreurs d'import)
const VoteCard = ({ vote }) => {
    const t = useTranslations('votes_page');
    const isClosed = new Date(vote.closingDate) < new Date();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${isClosed ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-700'
                            }`}>
                            {isClosed ? 'CLÔTURÉ' : 'EN COURS'}
                        </span>
                        <span className="text-xs text-gray-500">{vote.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{vote.title}</h3>
                </div>
                <div className="text-right text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(vote.closingDate).toLocaleDateString()}
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">{vote.description}</p>

            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${vote.totalVotes > 0 ? (vote.votesFor / vote.totalVotes) * 100 : 0}%` }}
                ></div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs">U{i}</div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">+{vote.totalVotes}</div>
                </div>
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                    Voir les détails
                </button>
            </div>
        </motion.div>
    );
};

// Composant Statistique
const StatBox = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`}>
            <Icon size={24} />
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);

export default function VotesClient({ initialVotes = [] }) {
    const t = useTranslations('votes_page');
    // Utiliser les données passées en props
    const [votes, setVotes] = useState(initialVotes);

    const activeVotesCount = votes.filter(v => new Date(v.closingDate) > new Date()).length;
    const totalVotesCount = votes.reduce((acc, v) => acc + (v.totalVotes || 0), 0);

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Tableau de bord
                    </h2>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg flex items-center gap-2"
                >
                    <Plus size={20} />
                    {t('new_vote')}
                </motion.button>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatBox icon={BarChart} label={t('active_votes')} value={activeVotesCount} color="blue" />
                <StatBox icon={Users} label={t('total_participants')} value={totalVotesCount} color="green" />
                <StatBox icon={TrendingUp} label={t('participation_rate')} value="78%" color="purple" />
            </div>

            <div className="grid gap-6">
                <AnimatePresence>
                    {votes.map((vote) => (
                        <VoteCard key={vote.id} vote={vote} />
                    ))}
                </AnimatePresence>
                {votes.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        Aucun vote en cours.
                    </div>
                )}
            </div>
        </div>
    );
}