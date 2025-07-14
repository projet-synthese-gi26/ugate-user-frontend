import { getTranslations } from 'next-intl/server';
import { getBranchMembersAPI, getAdhesionRequestsAPI } from '@/lib/api/membership';
import { getSyndicateDetailsAPI } from '@/lib/api/syndicates';
import MembersClient from '@/components/syndicate-space/section-membres/MembersClient';
import { notFound } from 'next/navigation';

async function getMembersData(syndicateId) {
    try {
        const syndicateDetails = await getSyndicateDetailsAPI(syndicateId);
        if (!syndicateDetails || !syndicateDetails.branches || syndicateDetails.branches.length === 0) {
            return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
        }
        
        const mainBranchId = syndicateDetails.branches[0].id; // On prend la première branche comme référence

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
        return { members: [], requests: [], branches: [], stats: { total: 0, active: 0, pending: 0 } };
    }
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId } = params;
    const t = await getTranslations({ locale, namespace: "translation" });
    const data = await getMembersData(syndicatId);

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