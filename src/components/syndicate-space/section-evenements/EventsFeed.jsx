// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';

export default function EventsFeed({ initialEvents }) {
    const [events, setEvents] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Fonction pour mettre à jour un événement (par ex. le nombre de participants)
    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    return (
        <div>
            <AnimatePresence>
                {events.map((event) => (
                    <EventCard 
                        key={event.id} 
                        event={event} 
                        onShowParticipants={setSelectedEvent}
                        onUpdateEvent={handleUpdateEvent}
                    />
                ))}
            </AnimatePresence>

            <AnimatePresence>
                {selectedEvent && (
                    <ParticipantsModal 
                        event={selectedEvent} 
                        onClose={() => setSelectedEvent(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
}