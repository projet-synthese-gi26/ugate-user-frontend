// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx

import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout';
import LoadingErrorPage from '@/components/syndicate-space/LoadingErrorPage';

async function getSyndicateData(syndicateId) {
    try {
        const data = await getSyndicateDetailsAPI(syndicateId);
        return { data, error: null };
    } catch (error) {
        console.error(`Failed to fetch syndicate data for ID ${syndicateId}:`, error);
        
        // 404 = syndicat n'existe pas
        if (error.response && error.response.status === 404) {
            notFound();
        }
        
        // Toutes les autres erreurs (timeout, réseau, etc.) = page d'erreur élégante
        return { data: null, error: 'loading_error' };
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = await params;
    const { data: syndicateData, error } = await getSyndicateData(syndicatId);

    // Erreur de chargement = page d'erreur élégante
    if (error === 'loading_error') {
        return <LoadingErrorPage />;
    }

    // Pas de données = 404
    if (!syndicateData) {
        notFound();
    }

    return (
        <SyndicateSpaceClientLayout syndicateData={syndicateData}>
            {children}
        </SyndicateSpaceClientLayout>
    );
}