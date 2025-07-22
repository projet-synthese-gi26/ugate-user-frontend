// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus } from 'lucide-react';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';
import CreateEventModal from './CreateEventModal';
import { SectionLoader, CardSkeleton } from '../SyndicateSpaceLoader';

export default function EventsFeed({ initialEvents }) {
    const t = useTranslations('common');
    const [events, setEvents] = useState(initialEvents);
    const [selectedEventForParticipants, setSelectedEventForParticipants] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    const handleCreateEvent = async (newEventData) => {
        setIsCreatingEvent(true);
        
        try {
            // Simuler un délai d'API
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const newEvent = {
                id: Date.now(),
                ...newEventData,
                author: { name: "Vous", profileImage: "https://i.pravatar.cc/150?img=1" },
                isUpcoming: new Date(newEventData.startDate) > new Date(),
                participants: [{ name: "Vous" }],
                images: newEventData.image ? [newEventData.image] : [],
            };
            
            setEvents([newEvent, ...events]);
            setIsCreateModalOpen(false);
            toast.success(t('event_form.success_toast'));
        } catch (error) {
            toast.error("Erreur lors de la création de l'événement");
        } finally {
            setIsCreatingEvent(false);
        }
    };

    return (
        <div>
            {/* === LE BOUTON EST MAINTENANT ICI === */}
            <div className="mb-8 flex justify-end">
                <button 
                    onClick={() => setIsCreateModalOpen(true)} 
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 flex items-center gap-2 transition-transform transform hover:scale-105"
                >
                    <Plus size={20} />
                    {t('events_page.create_button')}
                </button>
            </div>
            {/* === FIN DU BOUTON === */}

            {isLoadingEvents ? (
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={`event-skeleton-${index}`} />
                    ))}
                </div>
            ) : (
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
            )}

            <ParticipantsModal 
                event={selectedEventForParticipants} 
                onClose={() => setSelectedEventForParticipants(null)} 
            />
            
            <CreateEventModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreateEvent={handleCreateEvent}
                isLoading={isCreatingEvent}
            />
        </div>
    );
}