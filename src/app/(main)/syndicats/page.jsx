// src/app/(main)/syndicats/page.jsx

import initTranslations from "@/app/i18n";
import MySyndicatesHeader from "@/components/syndicats/MySyndicatesHeader";
import SyndicateList from "@/components/syndicats/SyndicateList"; // <-- Assurez-vous d'appeler ce composant
import { fakeData } from "@/lib/fakeData/mySyndicatFake.js";

async function getUserSyndicates() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return fakeData;
}

export default async function MySyndicatesPage({ params: { locale } }) { // Le nom de la fonction n'a pas d'importance
    const { t } = await initTranslations(locale, ['translation']);
    const userSyndicates = await getUserSyndicates();

    return (
        <div className="min-h-screen ...">
            <div className="container ...">
                <MySyndicatesHeader />
                {/* On s'assure d'appeler SyndicateList et de lui passer la prop */}
                <SyndicateList initialSyndicates={userSyndicates} />
            </div>
        </div>
    );
}