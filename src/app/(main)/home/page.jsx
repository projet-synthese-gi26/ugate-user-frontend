import initTranslations from "@/app/i18n";
import Feed from "@/components/dashboard/Feed"; // On réutilise le Feed existant
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { homeFeedFakeData } from "@/lib/fakeData/homeFeedFake";


async function getDashboardData() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        feed: homeFeedFakeData
    };
}

export default async function HomePage({ params: { locale } }) {
    const { feed } = await getDashboardData();
    const { t } = await initTranslations(locale, ['translation']);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WelcomeSection />

            <div className="max-w-3xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    {t("dashboard.news_and_events")}
                </h2>
                {/* Le composant Feed existant fonctionnera parfaitement avec le FeedCard amélioré */}
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}