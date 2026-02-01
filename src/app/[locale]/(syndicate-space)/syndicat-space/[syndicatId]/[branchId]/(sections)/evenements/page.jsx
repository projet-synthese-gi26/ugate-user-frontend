// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/(sections)/evenements/page.jsx
import { getTranslations } from 'next-intl/server';
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";
import { getEventsAPI } from "@/lib/api/event";

async function getEvents(syndicatId, branchId) {
    try {
        console.log(`Récupération des événements pour le syndicat ${syndicatId}, branche ${branchId}...`);

        // Utiliser branchId car les événements sont rattachés à la branche
        const eventsData = await getEventsAPI(branchId, 0, 20);

        if (!eventsData || !eventsData.content) {
            console.log('Aucun événement trouvé (réponse vide)');
            return [];
        }

        // Convertir les dates string en objets Date si nécessaire
        const eventsWithDates = eventsData.content.map(event => ({
            ...event,
            startDate: event.date ? new Date(event.date) : new Date(),
            endDate: event.date ? new Date(event.date) : new Date(),
            createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
        }));

        console.log(`${eventsWithDates.length} événements récupérés`);
        return eventsWithDates;
    } catch (error) {
        console.error(`Erreur lors de la récupération des événements pour ${syndicatId}:`, error);

        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé (404)');
            return [];
        }

        if (error.response?.status === 401) {
            throw error;
        }

        return [];
    }
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId, branchId } = await params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId, branchId);

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        {t('events_page.title')}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('events_page.subtitle')}
                    </p>
                </div>
            </div>

            <EventsFeed
                initialEvents={initialEvents}
                syndicatId={syndicatId}
                branchId={branchId}
            />
        </div>
    );
}
