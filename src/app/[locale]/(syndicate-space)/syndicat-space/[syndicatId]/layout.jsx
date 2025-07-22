// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx

import { notFound } from 'next/navigation';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import SyndicateSpaceClientLayout from './SyndicateSpaceClientLayout';

async function getSyndicateData(syndicateId) {
    try {
        const data = await getSyndicateDetailsAPI(syndicateId);
        return data;
    } catch (error) {
        console.error(`Failed to fetch syndicate data for ID ${syndicateId}:`, error);
        if (error.response && error.response.status === 404) {
            notFound();
        }
        // Pour les erreurs de timeout ou autres, on retourne null au lieu de crasher
        if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
            console.warn(`Timeout loading syndicate ${syndicateId}, will show error page`);
            return null;
        }
        throw new Error("Impossible de charger les données du syndicat.");
    }
}

export default async function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = await params;
    const syndicateData = await getSyndicateData(syndicatId);

    if (!syndicateData) {
        notFound();
    }

    return (
        <SyndicateSpaceClientLayout syndicateData={syndicateData}>
            {children}
        </SyndicateSpaceClientLayout>
    );
}