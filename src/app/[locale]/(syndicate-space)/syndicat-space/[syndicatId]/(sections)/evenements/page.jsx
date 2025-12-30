// src/app/(main)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import { getTranslations } from 'next-intl/server';
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";
import { getEventsAPI } from "@/lib/api/event";
import { MOCK_EVENTS } from '@/lib/fakeData/syndicateSpaceMock'; // <-- IMPORT

async function getEvents(syndicatId) {
    // AJOUT DE CETTE CONDITION
    if (syndicatId === 'test-id') {
        console.log('Chargement des événements MOCK');
        return MOCK_EVENTS;
    }

    try {
        console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);

        const eventsData = await getEventsAPI(syndicatId, 0, 20);

        // Vérifier si eventsData et eventsData.content existent
        if (!eventsData || !eventsData.content) {
            console.log('Aucun événement trouvé (réponse vide)');
            return [];
        }

        // Convertir les dates string en objets Date si nécessaire
        const eventsWithDates = eventsData.content.map(event => ({
            ...event,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
            createdAt: new Date(event.createdAt)
        }));

        console.log(`${eventsWithDates.length} événements récupérés`);
        return eventsWithDates;
    } catch (error) {
        console.error(`Erreur lors de la récupération des événements pour ${syndicatId}:`, error);

        // Si c'est une 404, c'est normal (pas d'événements)
        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé (404)');
            return [];
        }

        // Si c'est une 401, c'est un problème d'auth - on la laisse remonter
        if (error.response?.status === 401) {
            throw error;
        }

        // Pour les autres erreurs, fallback vers un tableau vide
        return [];
    }
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId);

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t('events_page.title')}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('events_page.subtitle')}</p>
                </div>
            </div>

            <EventsFeed initialEvents={initialEvents} syndicatId={syndicatId} />
        </div>
    );
}