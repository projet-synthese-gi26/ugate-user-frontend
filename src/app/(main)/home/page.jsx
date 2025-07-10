
import initTranslations from "@/app/i18n";
import Feed from "@/components/dashboard/Feed";
import WelcomeSection from "@/components/dashboard/WelcomeSection"; // <-- On importe notre nouveau composant
import { fakePublications, fakeEvents } from '@/lib/fakeData';

async function getDashboardData() {
    await new Promise(resolve => setTimeout(resolve, 500));
    const combinedFeed = [...fakePublications, ...fakeEvents].sort(() => Math.random() - 0.5);
    return {
        feed: combinedFeed,
        fullName: "John Doe"
    };
}

export default async function HomePage({ params: { locale } }) {
    // 1. La page serveur récupère toujours les données
    const { feed, fullName } = await getDashboardData();
    const { t } = await initTranslations(locale, ['translation']);

    return (
        <div className="container mx-auto">
            {/*
                2. On appelle le composant client et on lui passe les données
                   dont il a besoin (juste le nom de l'utilisateur).
                   Ce composant gère maintenant sa propre interactivité.
            */}
            <WelcomeSection fullName={fullName} />

            {/* La section du fil d'actualité reste la même */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {t("dashboard.news_and_events")}
                </h2>
                <Feed initialFeed={feed} />
            </div>
        </div>
    );
}