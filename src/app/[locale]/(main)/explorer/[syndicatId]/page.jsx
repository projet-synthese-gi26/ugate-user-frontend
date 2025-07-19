import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import { ChevronLeft } from 'lucide-react';
import {getTranslations} from 'next-intl/server'; // L'import correct pour la traduction côté serveur
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates'; // L'appel API réel
import SyndicateProfileClient from '@/components/syndicate-profile/SyndicateProfileClient';

// Fonction pour récupérer les données d'un seul syndicat via l'API
async function getSyndicateDetails(id) {
    try {
        const syndicate = await getSyndicateDetailsAPI(id);
        return syndicate;
    } catch (error) {
        if (error.response?.status === 404) {
            return null; // Le syndicat n'a pas été trouvé, on gèrera le notFound() plus bas
        }
        // Pour les autres erreurs, on peut logger et renvoyer null aussi
        console.error(`Erreur lors de la récupération du syndicat ${id}`, error.message);
        return null;
    }
}

// Génération des métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }) {
    const syndicate = await getSyndicateDetails(params.syndicatId);
    if (!syndicate) {
        return { title: 'Syndicat non trouvé' };
    }
    return {
        title: `${syndicate.name} | U-Gate`,
        description: syndicate.description,
    };
}

export default async function SyndicateProfilePage({ params }) {
    const { syndicatId, locale } = params;
    const t = await getTranslations();

    const syndicateData = await getSyndicateDetails(syndicatId);

    // Si aucune donnée n'est retournée, on affiche la page 404 de Next.js
    if (!syndicateData) {
        notFound();
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/explorer" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-semibold">{t('profile_page.back_to_explorer', 'Retour à l\'exploration')}</span>
                </Link>

                {/* On délègue tout l'affichage au composant client en lui passant les vraies données */}
                <SyndicateProfileClient syndicate={syndicateData} />
            </div>
        </div>
    );
}