// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/exprimer/page.jsx
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";

async function getPublicationsData(syndicatId, branchId) {
    // BLINDAGE TOTAL : Aucun crash ne doit sortir de cette fonction
    try {
        // Utiliser directement le branchId passé en paramètre
        if (!branchId) {
            console.warn('No branchId provided for publications');
            return [];
        }

        // Récupérer les posts pour cette branche
        const postsData = await getPostsAPI(branchId).catch(() => ({ content: [] }));
        return postsData?.content || [];

    } catch (error) {
        console.error("Erreur silencieuse sur le serveur (401 ou autre):", error);
        return []; // On renvoie un tableau vide, JAMAIS d'erreur
    }
}

export default async function ExprimerPage({ params }) {
    const { syndicatId, branchId } = await params;

    // On attend les données mais on sait qu'elles renverront au pire un []
    const initialPosts = await getPublicationsData(syndicatId, branchId);

    return (
        <div className="w-full">
            <PublicationsFeed
                initialPosts={initialPosts}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}
