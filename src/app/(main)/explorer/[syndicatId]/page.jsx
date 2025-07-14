import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getTranslations } from "next-intl/server";
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';

export async function generateMetadata({ params }) {
    try {
        const syndicate = await getSyndicateDetailsAPI(params.syndicatId);
        if (!syndicate) {
            return { title: 'Syndicat non trouvé' };
        }
        return {
            title: `${syndicate.name} | U-GATE`,
            description: syndicate.description,
        };
    } catch (error) {
        return { title: 'Erreur', description: 'Impossible de charger les données du syndicat.' };
    }
}

export default async function SyndicateProfilePage({ params }) {
    const { syndicatId, locale } = params;
    const t = await getTranslations({ locale, namespace: "translation" });

    try {
        const syndicateData = await getSyndicateDetailsAPI(syndicatId);

        if (!syndicateData) {
            notFound();
        }

        return (
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                        <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span className="font-semibold">{t('profile_page.back_to_explorer')}</span>
                    </Link>
                    <SyndicateProfileClient syndicate={syndicateData} />
                </div>
            </div>
        );
    } catch (error) {
        console.error(`Failed to load syndicate ${syndicatId}:`, error);
        // On pourrait afficher une page d'erreur plus explicite ici
        notFound();
    }
}