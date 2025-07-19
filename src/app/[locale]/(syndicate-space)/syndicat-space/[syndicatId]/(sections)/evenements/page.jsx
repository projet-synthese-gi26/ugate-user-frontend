// src/app/(main)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import initTranslations from "@/app/i18n";
import { fakeEvents } from "@/lib/fakeData/syndicateDetailsFake"; 
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";

async function getEvents(syndicatId) {
    console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);
    await new Promise(resolve => setTimeout(resolve, 300));
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
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t('events_page.title')}
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{t('events_page.subtitle')}</p>
            </div>
            
            <EventsFeed initialEvents={initialEvents} />
        </div>
    );
}