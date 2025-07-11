// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import initTranslations from "@/app/i18n";
import { Plus } from 'lucide-react';
import { fakeEvents } from "@/lib/fakeData/syndicateDetailsFake"; // Assurez-vous d'exporter fakeEvents
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";

async function getEvents(syndicatId) {
    console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 300));
    // Pour que les dates soient valides, on doit les recréer à chaque fois
    const eventsWithDates = fakeEvents.map(event => ({
        ...event,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate)
    }));
    return eventsWithDates;
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId } = params;
    const { t } = await initTranslations(locale, ['translation']);
    const initialEvents = await getEvents(syndicatId);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {t('events_page.title')}
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{t('events_page.subtitle')}</p>
                </div>
                <button className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 flex items-center gap-2">
                    <Plus size={20} />
                    {t('events_page.create_button')}
                </button>
            </div>
            
            <EventsFeed initialEvents={initialEvents} />
        </div>
    );
}