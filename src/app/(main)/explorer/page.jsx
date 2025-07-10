// src/app/(main)/explorer/page.jsx

import initTranslations from "@/app/i18n";
import { exploresyndicat } from "@/lib/fakeData/exploreSyndicatFake.jsx";
import ExplorerClient from "@/components/explorer/ExplorerClient";
import ExploreHeader from "@/components/explorer/ExploreHeader";

/**
 * Fonction asynchrone pour récupérer les données côté serveur.
 * À l'avenir, cette fonction fera un appel `fetch` à votre API backend.
 * @returns {Promise<Array>} La liste des syndicats à explorer.
 */
async function getAllSyndicates() {
    // Simule un délai réseau pour que le loader de navigation soit visible si besoin.
    await new Promise(resolve => setTimeout(resolve, 300));

    // Pour l'instant, on retourne les données depuis un fichier local.
    return exploresyndicat;
}

/**
 * C'est le Server Component pour la page "/explorer".
 * Il gère le chargement initial des données et des traductions.
 */
export default async function ExplorerPage({ params: { locale } }) {
    // 1. Initialisation des traductions pour le rendu serveur.
    const { t } = await initTranslations(locale, ['translation']);

    // 2. Récupération des données. Le rendu de la page attendra la fin de cette opération.
    const allSyndicates = await getAllSyndicates();

    // On peut aussi définir les métadonnées de la page ici pour le SEO.
    // export const metadata = { title: "Explorer les Syndicats" };
    // (Note: pour que ça marche, il faudrait l'exporter en dehors de la fonction)

    return (
        // Conteneur principal avec les couleurs de fond pour les thèmes clair/sombre.
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* 3. Rendu du header statique côté serveur. On lui passe les props nécessaires. */}
                <ExploreHeader
                    syndicatesCount={allSyndicates.length}
                    t={t}
                />

                {/* 4. Le reste de la page interactive est délégué au composant client.
                       On lui passe les données pré-chargées. */}
                <ExplorerClient initialSyndicates={allSyndicates} />

            </div>
        </div>
    );
}