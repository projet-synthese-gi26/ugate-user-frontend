import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import Feed from "@/components/dashboard/Feed";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { getGlobalFeedAPI } from "@/lib/api/feed";
import { getToken } from "@/lib/auth/accountService";

async function getDashboardData() {
    try {
        // On essaie de récupérer le token, mais on ne bloque pas si c'est nul
        const token = await getToken().catch(() => null);

        // On appelle le feed global (qui est public, fonctionne avec ou sans token)
        const feedData = await getGlobalFeedAPI(0, 50, 'createdAt', 'desc', token);

        return {
            feed: feedData?.content || []
        };
    } catch (error) {
        console.error("Erreur lors du chargement du feed:", error);
        return { feed: [] };
    }
}

export default async function HomePage({ params }) {
    const { feed } = await getDashboardData();
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* WelcomeSection utilise le contexte utilisateur côté client */}
            <WelcomeSection />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("dashboard.news_and_events")}
                </h2>
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}