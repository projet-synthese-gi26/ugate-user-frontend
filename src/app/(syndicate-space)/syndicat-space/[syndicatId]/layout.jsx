import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout'; 

async function getSyndicateHeaderData(syndicateId) {
    try {
        // Note: Pour un appel Serveur vers API, il faut s'assurer que l'authentification
        // passe si nécessaire (ex: via cookies), ou que l'endpoint est public.
        // Notre endpoint GET /api/syndicates/{id} est actuellement public.
        const data = await getSyndicateDetailsAPI(syndicateId);
        return {
            id: data.id,
            name: data.name,
            logoUrl: data.logoUrl,
            bannerUrl: data.bannerUrl
        };
    } catch (error) {
        console.error(`Failed to fetch syndicate data for layout (${syndicateId}):`, error);
        return null;
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = params;
    const syndicateData = await getSyndicateHeaderData(syndicatId);

    if (!syndicateData) {
        notFound();
    }

    // Passe les données chargées au composant client qui gère l'interface
    return (
        <SyndicateSpaceClientLayout syndicateData={syndicateData}>
            {children}
        </SyndicateSpaceClientLayout>
    );
}