
import initTranslations from "@/app/i18n";
import MySyndicatesPage from "@/components/syndicats/MySyndicatesPage";
import SyndicateHeader from "@/components/syndicats/SyndicateHeader";


async function getUserSyndicates() {
    const { fakeData } = require('@/lib/fakeData/mySyndicatFake');
    await new Promise(resolve => setTimeout(resolve, 300));
    return fakeData;
}

export default async function SyndicatsPage({ params: { locale } }) {
    const { t } = await initTranslations(locale, ['translation']);
    const userSyndicates = await getUserSyndicates();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <SyndicateHeader />


            <MySyndicatesPage initialSyndicates={userSyndicates} />
        </div>
    );
}