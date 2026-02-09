"use client";

import { use, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import VoteCard from '@/components/social/VoteCard';
import CreateVoteModal from '@/components/social/CreateVoteModal';
import { Plus, Vote as VoteIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyndicateVotesPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    // Extraction des IDs de manière synchrone via use()
    const { id: syndicateId, branchId } = use(params);

    const t = useTranslations('Votes');
    const { user } = useAuthStore();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [voteIds, setVoteIds] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('CLIENT') || user?.roles.includes('MODERATOR');

    const fetchVotes = async () => {
        try {
            // Note: Adaptez l'endpoint si vous avez un service de liste de votes par branche
            const res = await ugateApi.get(`/publication-votes/branch/${branchId}`);
            // On extrait les IDs des votes pour les passer au VoteCard
            const data = Array.isArray(res.data) ? res.data : (res.data.content || []);
            setVoteIds(data.map((v: any) => v.id));
        } catch (error) {
            console.error("Erreur chargement votes", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVotes();
    }, [branchId]);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Sidebar avec le contexte complet */}
            <MemberSidebar syndicateId={syndicateId} branchId={branchId} />

            <main>
                <div className="max-w-4xl mx-auto">

                    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{t('title')}</h1>
                            <p className="text-slate-500 font-medium">{t('subtitle')}</p>
                        </div>

                        {isAdmin && (
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-2xl h-14 px-8 bg-primary-800 hover:bg-primary-900 shadow-xl transition-all scale-105 active:scale-95 font-bold"
                            >
                                <Plus size={20} className="mr-2" />
                                {t('create_btn')}
                            </Button>
                        )}
                    </header>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
                        </div>
                    ) : (
                        <div className="grid gap-8">
                            {voteIds.length > 0 ? (
                                voteIds.map(vId => (
                                    <VoteCard key={vId} voteId={vId} />
                                ))
                            ) : (
                                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl mt-8">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                                        <VoteIcon size={40} />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-400">Aucun scrutin en cours pour cette antenne.</h2>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Modal de création avec le branchId correct */}
            <CreateVoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={branchId}
                onSuccess={fetchVotes}
            />
        </div>
    );
}