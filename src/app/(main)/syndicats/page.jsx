// src/app/(main)/syndicats/page.jsx

import initTranslations from "@/app/i18n";
import MySyndicatesHeader from "@/components/syndicats/SyndicateHeader";
// On importe DIRECTEMENT le composant qui gère la liste et la recherche.
import SyndicateList from "@/components/syndicats/SyndicateList";
import { fakeData } from "@/lib/fakeData/mySyndicatFake.js";

async function getUserSyndicates() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Petit délai pour le réalisme
    return fakeData;
}

// Le nom de la fonction ici n'a pas d'importance, c'est le nom du fichier qui compte.
export default async function Page() { 
    // On récupère la locale via les props de la page
    const locale = 'fr'; // Placeholder, Next.js passera la vraie locale
    const { t } = await initTranslations(locale, ['translation']);
    const userSyndicates = await getUserSyndicates();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                
                {/* 
                  On passe les données directement au composant client.
                  Il n'y a plus d'intermédiaire.
                */}
                <SyndicateList initialSyndicates={userSyndicates} />
            </div>
        </div>
    );
}