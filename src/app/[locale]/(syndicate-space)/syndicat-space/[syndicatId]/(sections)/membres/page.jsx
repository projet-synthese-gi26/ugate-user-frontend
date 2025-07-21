import {getTranslations} from 'next-intl/server'; // CORRECTION : On importe le bon helper
import { getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId) {
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
        
        // Prendre la première branche comme référence
        const mainBranchId = syndicateDetails.branches[0].id;

        // Essayer de récupérer les membres et demandes, avec gestion d'erreur individuelle
        let members = [];
        let requests = [];

        try {
            members = await getBranchMembersAPI(mainBranchId);
        } catch (error) {
            console.warn(`Failed to fetch members for branch ${mainBranchId}:`, error.message);
            // L'API peut ne pas être implémentée, on continue avec un tableau vide
            members = [];
        }

        try {
            requests = await getAdhesionRequestsAPI(syndicateId, mainBranchId);
        } catch (error) {
            console.warn(`Failed to fetch adhesion requests for branch ${mainBranchId}:`, error.message);
            // L'API peut ne pas être implémentée, on continue avec un tableau vide
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
            syndicateDetails 
        };

    } catch (error) {
        console.error(`Failed to fetch members data for syndicate ${syndicateId}:`, error);
        // En cas d'erreur critique, retourner un état vide mais valide
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
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    
    // Récupérer les données avec gestion d'erreur robuste
    const data = await getMembersData(syndicatId);

    // Si on n'arrive pas à récupérer les données de base du syndicat, alors 404
    // Mais si c'est juste les APIs membres qui échouent, on affiche quand même la page
    if (!data || (data.error && !data.syndicateDetails)) {
        notFound();
    }
    
    return (
        <div className="space-y-8">
            {data.error && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                <strong>Information:</strong> Certaines fonctionnalités peuvent être temporairement indisponibles.
                                {data.error && ` (${data.error})`}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            
            <MembersClient 
                initialMembers={data.members || []}
                initialRequests={data.requests || []}
                branches={data.branches || []}
                stats={data.stats || { total: 0, active: 0, pending: 0 }}
                syndicatId={syndicatId}
            />
        </div>
    );
}