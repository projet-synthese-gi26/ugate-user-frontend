"use client";

import { useEffect, useState } from 'react';
import { Link } from '@/navigation';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';
import { useParams } from 'next/navigation';

export default function SyndicateProfilePage() {
    const params = useParams();
    const syndicatId = params.syndicatId;
    const t = useTranslations('profile_page');

    const [syndicate, setSyndicate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSyndicate = async () => {
            if (!syndicatId) return;

            try {
                setLoading(true);
                const data = await getSyndicateDetailsAPI(syndicatId);
                setSyndicate(data);
            } catch (err) {
                console.error("Erreur lors de la récupération du syndicat:", err);
                setError("Impossible de charger les détails du syndicat.");
            } finally {
                setLoading(false);
            }
        };

        fetchSyndicate();
    }, [syndicatId]);

    if (loading) {
        return (
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Chargement...</p>
                </div>
            </div>
        );
    }

    if (error || !syndicate) {
        return (
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                        <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span className="font-semibold">{t('back_to_explorer')}</span>
                    </Link>
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Syndicat non trouvé</h2>
                        <p className="text-gray-600 dark:text-gray-400">{error || "Ce syndicat n'existe pas ou a été supprimé."}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-semibold">{t('back_to_explorer')}</span>
                </Link>

                <SyndicateProfileClient syndicate={syndicate} />
            </div>
        </div>
    );
}
