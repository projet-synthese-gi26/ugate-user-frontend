import { getTranslations } from 'next-intl/server';
import VotesClient from "@/components/syndicate-space/section-votes/VotesClient";
import { getVotesAPI } from "@/lib/api/vote";
import { MOCK_VOTES } from '@/lib/fakeData/syndicateSpaceMock';

async function getVotes(syndicatId) {
    // Injection des données de test
    if (syndicatId === 'test-id') {
        return MOCK_VOTES;
    }

    try {
        const votes = await getVotesAPI(syndicatId);
        return votes || [];
    } catch (error) {
        console.error("Erreur lors de la récupération des votes:", error);
        return [];
    }
}

export default async function VotesPage({ params }) {
    const resolvedParams = await params;
    const { syndicatId } = resolvedParams;
    const t = await getTranslations();
    const initialVotes = await getVotes(syndicatId);

    return (
        <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t('votes_page.title')}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('votes_page.subtitle')}
                    </p>
                </div>
            </div>

            <VotesClient initialVotes={initialVotes} />
        </div>
    );
}