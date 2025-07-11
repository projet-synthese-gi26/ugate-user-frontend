// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/exprimer/page.jsx
import initTranslations from "@/app/i18n";
import PublicationsFeed from "@/components/syndicate-space/section-exprimer/PublicationsFeed";
import { fakePublications } from "@/lib/fakeData/syndicateDetailsFake"; // On utilisera un fichier de données dédié

async function getPublications(syndicatId) {
    console.log(`Récupération des publications pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 300));
    return fakePublications; // Dans une vraie app, cet appel serait filtré par syndicatId
}

export default async function ExprimerPage({ params }) {
    const { locale, syndicatId } = params;
    const { t } = await initTranslations(locale, ['translation']);
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

            {/* Le composant client prend le relais pour l'affichage interactif */}
            <PublicationsFeed initialPosts={initialPosts} />
        </div>
    );
}