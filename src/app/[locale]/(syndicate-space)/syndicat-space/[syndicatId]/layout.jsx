import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
// IMPORTANT : On importe les données fictives ici
import { MOCK_SYNDICATE } from '@/lib/fakeData/syndicateSpaceMock';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout'; // Note: le chemin relatif est correct ici car on est dans le même dossier
import LoadingErrorPage from '@/components/syndicate-space/LoadingErrorPage';

async function getSyndicateData(syndicateId) {
    // 1. INTERCEPTION POUR LE TEST
    // Si l'ID est 'test-id', on retourne immédiatement les fausses données
    // sans essayer d'appeler l'API (ce qui provoquerait une erreur).
    if (syndicateId === 'test-id') {
        return { data: MOCK_SYNDICATE, error: null };
    }

    // 2. LOGIQUE NORMALE (Appel API)
    try {
        const data = await getSyndicateDetailsAPI(syndicateId);
        return { data, error: null };
    } catch (error) {
        console.error(`Failed to fetch syndicate data for ID ${syndicateId}:`, error);

        // 404 = syndicat n'existe pas
        if (error.response && error.response.status === 404) {
            notFound();
        }

        // Toutes les autres erreurs (timeout, réseau, code, variable manquante)
        // déclenchent l'affichage de la LoadingErrorPage que vous voyez actuellement.
        return { data: null, error: 'loading_error' };
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    // Note : params est une Promise dans les versions récentes de Next.js, il faut l'attendre
    const resolvedParams = await params;
    const { syndicatId } = resolvedParams;

    const { data: syndicateData, error } = await getSyndicateData(syndicatId);

    // Si une erreur est survenue lors de la récupération (catch block)
    if (error === 'loading_error') {
        return <LoadingErrorPage />;
    }

    // Si aucune donnée n'est trouvée (mais pas d'erreur technique)
    if (!syndicateData) {
        notFound();
    }

    return (
        <SyndicateSpaceClientLayout syndicateData={syndicateData}>
            {children}
        </SyndicateSpaceClientLayout>
    );
}