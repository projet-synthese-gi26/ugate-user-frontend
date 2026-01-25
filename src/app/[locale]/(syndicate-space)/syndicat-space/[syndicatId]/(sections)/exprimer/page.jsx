import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";
import { serverFetch } from "@/lib/api/instance";

async function getPublicationsData(syndicatId) {
    // BLINDAGE TOTAL : Aucun crash ne doit sortir de cette fonction
    try {
        // 1. Récupérer la branche
        const branchesRes = await serverFetch('get', `/syndicates/${syndicatId}/branches`).catch(() => null);
        const branches = branchesRes?.data || [];

        if (branches.length === 0) return [];

        const activeBranchId = branches[0].id;

        // 2. Récupérer les posts
        const postsData = await getPostsAPI(activeBranchId).catch(() => ({ content: [] }));
        return postsData?.content || [];

    } catch (error) {
        console.error("Erreur silencieuse sur le serveur (401 ou autre)");
        return []; // On renvoie un tableau vide, JAMAIS d'erreur
    }
}

export default async function ExprimerPage({ params }) {
    const { syndicatId } = await params;
    
    // On attend les données mais on sait qu'elles renverront au pire un []
    const initialPosts = await getPublicationsData(syndicatId);

    return (
        <div className="w-full">
            <PublicationsFeed 
                initialPosts={initialPosts} 
                syndicatId={syndicatId} 
            />
        </div>
    );
}