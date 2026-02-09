"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import VoteCard from '@/components/social/VoteCard';
import CreateVoteModal from '@/components/social/CreateVoteModal';
import { Plus, Vote as VoteIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyndicateVotesPage() {
    const { id: syndicateId } = useParams();
    const t = useTranslations('Votes');
    const { user } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Idéalement, on récupèrerait ici une liste d'IDs de votes actifs pour cette branche
    // Pour l'instant, on se base sur les votes présents dans le flux
    const [voteIds, setVoteIds] = useState<string[]>([]);

    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('PRESIDENT');

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={syndicateId as string} />

            <main >
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

                    <div className="grid gap-8">
                        {/* Exemple de vote actif */}
                        <VoteCard voteId="80ef205a-84ba-41a1-9eb5-6d2d3ae791ed" />

                        {/* État vide si aucun ID n'est trouvé */}
                        {voteIds.length === 0 && (
                            <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl mt-8">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                                    <VoteIcon size={40} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-400">Aucun autre sondage disponible.</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Modal de création */}
            <CreateVoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={syndicateId as string} // Ou branchId spécifique si disponible
                onSuccess={() => {
                    // Logique pour rafraîchir la liste
                }}
            />
        </div>
    );
}