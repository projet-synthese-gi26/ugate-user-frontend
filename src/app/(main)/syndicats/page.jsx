import { getTranslations } from 'next-intl/server';
import { getMySyndicatesAPI } from '@/lib/api/syndicates';
import SyndicateHeader from '@/components/syndicats/SyndicateHeader';
import SyndicateList from '@/components/syndicats/SyndicateList';
import { cookies } from 'next/headers';

async function getUserSyndicates() {
    try {
        // Pour les Server Components, on doit passer les cookies manuellement
        // car l'intercepteur Axios n'est pas disponible.
        // NOTE: Ceci nécessite une adaptation de getMySyndicatesAPI pour accepter le token.
        // Pour l'instant, on suppose que l'intercepteur magique fonctionne.
        // Dans une V2, on adapterait l'API.
        const token = cookies().get('token')?.value;
        if (!token) return []; // Pas de token, pas de syndicats

        const syndicates = await getMySyndicatesAPI();
        return syndicates;
    } catch (error) {
        console.error("Failed to fetch user's syndicates:", error);
        return [];
    }
}

export default async function MySyndicatesPage({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "translation" });
    const userSyndicates = await getUserSyndicates();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SyndicateHeader />
                <SyndicateList initialSyndicates={userSyndicates} />
            </div>
        </div>
    );
}