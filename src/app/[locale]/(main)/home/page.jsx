import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import Feed from "@/components/dashboard/Feed"; // On réutilise le Feed existant
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { getGlobalFeedAPI } from "@/lib/api/feed";
import { getToken } from "@/lib/auth/accountService";

async function getDashboardData() {
    try {
        // 1. On essaie de récupérer le token, mais on ne bloque pas si c'est nul
        const token = await getToken().catch(() => null); 
        
        // 2. On appelle le feed global (qui est public)
        const feedData = await getGlobalFeedAPI(0, 50, 'createdAt', 'desc', token);
        
        return {
            feed: feedData?.content || [],
            // On récupère le nom de l'utilisateur seulement si le token existe
            userName: token ? await getFirstNameToken() : null 
        };
    } catch (error) {
        return { feed: [], userName: null };
    }
}
export default async function HomePage({ params }) {
    const { feed, userName } = await getDashboardData();
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4">
            {/* 3. On passe le nom au WelcomeSection, ou rien s'il n'est pas connecté */}
            <WelcomeSection userName={userName} />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("dashboard.news_and_events")}
                </h2>
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}