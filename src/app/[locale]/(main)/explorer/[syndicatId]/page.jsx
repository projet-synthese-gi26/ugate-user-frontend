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
                console.error("Erreur:", err);
                setError("Impossible de charger les détails.");
            } finally {
                setLoading(false);
            }
        };
        fetchSyndicate();
    }, [syndicatId]);

    if (loading) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error || !syndicate) {
        return (
            <div className="bg-gray-50 min-h-screen p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Syndicat non trouvé</h2>
            </div>
        );
    }

    return (
        // Suppression des classes bg-gray-900
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 hover:underline mb-6 group font-semibold">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span>{t('back_to_explorer')}</span>
                </Link>

                {/* Ici on appelle le client qui contient tout le design */}
                <SyndicateProfileClient syndicate={syndicate} />
            </div>
        </div>
    );
}