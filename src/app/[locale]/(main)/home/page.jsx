import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import Feed from "@/components/dashboard/Feed"; // On réutilise le Feed existant
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { getGlobalFeedAPI } from "@/lib/api/feed";
import { getToken } from "@/lib/auth/accountService";

async function getDashboardData() {
    try {
        const token = await getToken(); // Récupère le token côté serveur
        
        // On passe le token à l'appel API
        const feedData = await getGlobalFeedAPI(0, 50, 'createdAt', 'desc', token);
        
        return {
            feed: feedData.content || [],
            totalPages: feedData.totalPages || 0,
            totalElements: feedData.totalElements || 0
        };
    } catch (error) {
        console.error('Erreur lors de la récupération du feed:', error);
        // Fallback vers un feed vide en cas d'erreur
        return {
            feed: [],
            totalPages: 0,
            totalElements: 0
        };
    }
}

export default async function HomePage({ params }) {
    const { locale } = await params;
    const { feed } = await getDashboardData();
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WelcomeSection />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    {t("dashboard.news_and_events")}
                </h2>
                {/* Le composant Feed utilise maintenant UnifiedPostCard pour la cohérence avec la landing page */}
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}