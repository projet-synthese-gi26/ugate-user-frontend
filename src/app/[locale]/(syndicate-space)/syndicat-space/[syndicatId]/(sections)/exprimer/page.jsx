import {getTranslations} from 'next-intl/server'; // CORRECTION : On importe le bon helper
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { getPostsAPI } from "@/lib/api/posts";

async function getPublications(syndicatId) {
    try {
        const posts = await getPostsAPI(syndicatId);
        return posts;
    } catch (error) {
        console.error(`Failed to fetch posts for syndicate ${syndicatId}:`, error);
        return [];
    }
}

export default async function ExprimerPage({ params }) {
    const { locale, syndicatId } = await params;
    // CORRECTION : On utilise `initTranslations`
    const t = await getTranslations();
    const initialPosts = await getPublications(syndicatId);

    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    {t("express_page.title")}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {t("express_page.subtitle")}
                </p>
            </div>
            <PublicationsFeed initialPosts={initialPosts} syndicatId={syndicatId} />
        </div>
    );
}