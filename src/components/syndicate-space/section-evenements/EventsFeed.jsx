// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';
import CreateEventModal from './CreateEventModal'; // <-- Importer la nouvelle modale
import { useTranslation } from 'react-i18next';

export default function EventsFeed({ initialEvents }) {
    const { t } = useTranslation();
    const [events, setEvents] = useState(initialEvents);
    const [selectedEventForParticipants, setSelectedEventForParticipants] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // <-- État pour la modale

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    // Fonction appelée par la modale après la création
    const handleCreateEvent = (newEventData) => {
        const newEvent = {
            id: Date.now(), // ID temporaire
            ...newEventData,
            author: { name: "Vous", profileImage: "https://i.pravatar.cc/150?img=1" },
            isUpcoming: new Date(newEventData.startDate) > new Date(),
            participants: [{ name: "Vous" }],
            images: [],
        };
        setEvents([newEvent, ...events]); // Ajoute le nouvel événement en haut de la liste (MAJ optimiste)
        setIsCreateModalOpen(false); // Ferme la modale
        toast.success(t('event_form.success_toast'));
    };

    return (
        <div>
            {/* Le bouton de création est maintenant ici, dans le composant client */}
            <div className="mb-8 flex justify-end">
                 <button onClick={() => setIsCreateModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 flex items-center gap-2">
                    {/* ... (déplacé de la page serveur) ... */}
                </button>
            </div>

            <AnimatePresence>
                {events.map((event) => (
                    <EventCard 
                        key={event.id} 
                        event={event} 
                        onShowParticipants={setSelectedEventForParticipants}
                        onUpdateEvent={handleUpdateEvent}
                    />
                ))}
            </AnimatePresence>

            <ParticipantsModal 
                event={selectedEventForParticipants} 
                onClose={() => setSelectedEventForParticipants(null)} 
            />
            
            {/* Appel de la nouvelle modale */}
            <CreateEventModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreateEvent={handleCreateEvent}
            />
        </div>
    );
}