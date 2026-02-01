// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/membres/page.jsx
import { getTranslations } from 'next-intl/server';
import { getSyndicateMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId, branchId) {
    try {
        // Récupérer les détails du syndicat
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails) {
            console.warn(`Syndicate ${syndicateId} not found`);
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }

        // Gérer le cas où il n'y a pas de branches définies
        if (!syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            console.warn(`No branches found for syndicate ${syndicateId}`);
            return {
                members: [],
                requests: [],
                branches: [],
                stats: { total: 0, active: 0, pending: 0 },
                syndicateDetails
            };
        }

        // Utiliser le branchId passé en paramètre, ou la première branche par défaut
        const activeBranchId = branchId || syndicateDetails.branches[0].id;

        // Vérifier que la branche existe dans le syndicat
        const branchExists = syndicateDetails.branches.some(b => b.id === activeBranchId);
        if (!branchExists && branchId) {
            console.warn(`Branch ${branchId} not found in syndicate ${syndicateId}`);
        }

        // Essayer de récupérer les membres et demandes, avec gestion d'erreur individuelle
        let members = [];
        let requests = [];

        try {
            members = await getSyndicateMembersAPI(syndicateId);
        } catch (error) {
            console.warn(`Failed to fetch members for syndicate ${syndicateId}:`, error.message);
            members = [];
        }

        try {
            requests = await getAdhesionRequestsAPI(syndicateId, activeBranchId);
        } catch (error) {
            console.warn(`Failed to fetch adhesion requests for branch ${activeBranchId}:`, error.message);
            requests = [];
        }

        const stats = {
            total: (members?.length || 0) + (requests?.length || 0),
            active: members?.length || 0,
            pending: requests?.length || 0
        };

        return {
            members: members || [],
            requests: requests || [],
            branches: syndicateDetails.branches || [],
            stats,
            syndicateDetails,
            activeBranchId
        };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        return {
            members: [],
            requests: [],
            branches: [],
            stats: { total: 0, active: 0, pending: 0 },
            error: error.message
        };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId, branchId } = await params;
    const t = await getTranslations();

    // Récupérer les données avec gestion d'erreur robuste
    const data = await getMembersData(syndicatId, branchId);

    // Si on n'arrive pas à récupérer les données de base du syndicat, alors 404
    if (!data || (data.error && !data.syndicateDetails)) {
        notFound();
    }

    return (
        <div className="space-y-8">
            {data.error && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-sm text-blue-800 font-medium">
                            Chargement en cours... Certaines données peuvent apparaître progressivement.
                        </p>
                    </div>
                </div>
            )}

            <MembersClient
                initialMembers={data.members || []}
                initialRequests={data.requests || []}
                branches={data.branches || []}
                stats={data.stats || { total: 0, active: 0, pending: 0 }}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}
