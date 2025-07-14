import { getTranslations } from "next-intl/server";
import { getAllSyndicatesAPI } from "@/lib/api/syndicates";
import ExplorerClient from "@/components/explorer/ExplorerClient";
import ExploreHeader from "@/components/explorer/ExploreHeader";

// Cette fonction s'exécute sur le serveur pour pré-charger les données
async function getInitialSyndicates() {
    try {
        const initialSlice = await getAllSyndicatesAPI(0, 12);
        return initialSlice;
    } catch (error) {
        console.error("Failed to fetch initial syndicates:", error);
        return { content: [], hasNext: false }; // Retourne une structure valide en cas d'erreur
    }
}

export default async function ExplorerPage({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "translation" });
    const initialSyndicateSlice = await getInitialSyndicates();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ExploreHeader
                    syndicatesCount={initialSyndicateSlice.totalElements || 0} // Si le backend retourne le total
                    t={t}
                />
                <ExplorerClient
                    initialSyndicates={initialSyndicateSlice.content}
                    initialHasNextPage={initialSyndicateSlice.hasNext}
                />
            </div>
        </div>
    );
}