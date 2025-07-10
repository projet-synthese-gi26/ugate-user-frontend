// src/app/(main)/explorer/[syndicatId]/page.jsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import initTranslations from '@/app/i18n';

// Import de tous les composants d'affichage
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';

// Import des données factices (à remplacer par un appel API)
import { exploresyndicat } from '@/lib/fakeData/exploreSyndicatFake';
import { fakeMembers, fakeActivities, fakeServices, fakeProducts } from '@/lib/fakeData/syndicateDetailsFake';

// Fonction pour récupérer les données d'un seul syndicat
async function getSyndicateDetails(id) {
    console.log(`Fetching data for syndicate ID: ${id}`);

    // Simule un appel API pour les infos de base
    const syndicate = exploresyndicat.find(s => s.id.toString() === id);
    if (!syndicate) {
        return null; // Le syndicat n'a pas été trouvé
    }

    // Simule d'autres appels API pour les détails
    await new Promise(resolve => setTimeout(resolve, 400)); // Simule la latence réseau

    // Dans une vraie app, ces données viendraient d'appels API spécifiques
    // exemple: fetch(`/api/syndicates/${id}/members`)
    return {
        ...syndicate,
        membersList: fakeMembers,
        activities: fakeActivities,
        services: fakeServices,
        products: fakeProducts
    };
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }) {
    const syndicate = await getSyndicateDetails(params.syndicatId);
    if (!syndicate) {
        return { title: 'Syndicat non trouvé' };
    }
    return {
        title: `${syndicate.name} | SyndicManager`,
        description: syndicate.description,
    };
}

export default async function SyndicateProfilePage({ params }) {
    const { syndicatId, locale } = params;
    const { t } = await initTranslations(locale, ['translation']);

    const syndicateData = await getSyndicateDetails(syndicatId);

    // Si aucune donnée n'est retournée, on affiche la page 404 de Next.js
    if (!syndicateData) {
        notFound();
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Lien de retour, utile pour la navigation */}
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-semibold">{t('profile_page.back_to_explorer')}</span>
                </Link>

                {/* On délègue tout l'affichage au composant client */}
                <SyndicateProfileClient syndicate={syndicateData} />
            </div>
        </div>
    );
}