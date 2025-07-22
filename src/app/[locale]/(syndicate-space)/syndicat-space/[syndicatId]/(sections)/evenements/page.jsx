// src/app/(main)/syndicat-space/[syndicatId]/(sections)/evenements/page.jsx
import {getTranslations} from 'next-intl/server';
import EventsFeed from "@/components/syndicate-space/section-evenements/EventsFeed";
import { getEventsAPI } from "@/lib/api/event";

async function getEvents(syndicatId) {
    try {
        console.log(`Récupération des événements pour le syndicat ${syndicatId}...`);
        
        const eventsData = await getEventsAPI(syndicatId, 0, 20);
        
        // Convertir les dates string en objets Date si nécessaire
        const eventsWithDates = eventsData.content.map(event => ({
            ...event,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
            createdAt: new Date(event.createdAt)
        }));
        
        return eventsWithDates;
    } catch (error) {
        console.error(`Erreur lors de la récupération des événements pour ${syndicatId}:`, error);
        // Fallback vers un tableau vide
        return [];
    }
}

export default async function EventsPage({ params }) {
    const { locale, syndicatId } = await params;
    const t = await getTranslations();
    const initialEvents = await getEvents(syndicatId);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
                    {t('events_page.title')}
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{t('events_page.subtitle')}</p>
            </div>
            
            <EventsFeed initialEvents={initialEvents} syndicatId={syndicatId} />
        </div>
    );
}