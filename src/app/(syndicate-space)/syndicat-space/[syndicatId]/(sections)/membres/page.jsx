import initTranslations from "@/app/i18n"; // CORRECTION : On importe le bon helper
import { getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId) {
    try {
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails || !syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            // Dans le cas où il n'y a pas de branche, on ne peut rien récupérer.
            // On renvoie un état vide et gérable.
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }
        
        // On prend la première branche comme référence pour les membres et les demandes.
        // C'est une simplification, une logique plus complexe pourrait être nécessaire si un syndicat a plusieurs branches gérables.
        const mainBranchId = syndicateDetails.branches[0].id; 

        const [members, requests] = await Promise.all([
            getBranchMembersAPI(mainBranchId),
            getAdhesionRequestsAPI(syndicateId, mainBranchId)
        ]);

        const stats = {
            total: members.length + requests.length,
            active: members.length,
            pending: requests.length
        };

        return { members, requests, branches: syndicateDetails.branches, stats };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        // En cas d'erreur API, on renvoie également un état vide pour éviter un crash.
        return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId } = params;
    // CORRECTION : On utilise `initTranslations` au lieu de `getTranslations`
    const { t } = await initTranslations(locale, ['translation']);
    const data = await getMembersData(syndicatId);

    // Bien que getMembersData soit robuste, on garde le notFound au cas où
    // une logique future déciderait de le lancer (par ex. si syndicateDetails est null).
    if (!data) {
        notFound();
    }
    
    return (
        <div className="space-y-8">
            <MembersClient 
                initialMembers={data.members}
                initialRequests={data.requests}
                branches={data.branches}
                stats={data.stats}
                syndicatId={syndicatId}
            />
        </div>
    );
}