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
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t("express_page.title")}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t("express_page.subtitle")}
                    </p>
                </div>
            </div>
            <PublicationsFeed initialPosts={initialPosts} syndicatId={syndicatId} />
        </div>
    );
}