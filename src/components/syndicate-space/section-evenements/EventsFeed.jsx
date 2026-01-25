// src/components/syndicate-space/section-evenements/EventsFeed.jsx
"use client";

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus, RefreshCw, Calendar, Search } from 'lucide-react';
import EventCard from './EventCard';
import ParticipantsModal from './ParticipantsModal';
import CreateEventModal from './CreateEventModal';
import { CardSkeleton } from '../SyndicateSpaceLoader';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import { getEventsAPI } from '@/lib/api/event';
import { ugateInstance } from '@/lib/api/instance'; // IMPORT AJOUTÉ

function EventsFeedInner({ initialEvents = [], syndicatId }) {
    const t = useTranslations('common');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [events, setEvents] = useState(initialEvents || []);
    const [selectedEventForParticipants, setSelectedEventForParticipants] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [lastRefresh, setLastRefresh] = useState(Date.now());

    const [activeBranchId, setActiveBranchId] = useState(null);
    
    const filteredEvents = useMemo(() => 
        (events || []).filter(event => 
            event?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event?.description?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);

    // --- FONCTION REFRESH MODIFIÉE POUR UTILISER LA BRANCHE ---
    const refreshEvents = async (force = false, page = 0, size = 20, branchIdOverride = null) => {
        // On utilise l'ID passé en paramètre ou l'ID stocké dans l'état
        const targetId = branchIdOverride || activeBranchId;

        if (!targetId) {
            console.warn("Impossible de rafraîchir : ID de branche manquant");
            return;
        }

        try {
            await executeWithRetry(async () => {
                // APPEL API AVEC targetId (L'ID DE LA BRANCHE)
                const eventsData = await getEventsAPI(targetId, page, size, 'startDate', 'DESC');
                
                let fetchedEvents = [];
                if (eventsData && eventsData.content) {
                    fetchedEvents = eventsData.content;
                } else if (Array.isArray(eventsData)) {
                    fetchedEvents = eventsData;
                }
                
                const eventsWithDates = fetchedEvents.map(event => ({
                    ...event,
                    startDate: event.date ? new Date(event.date) : new Date(),
                    endDate: event.date ? new Date(event.date) : new Date(),
                    createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
                }));
                
                setEvents(eventsWithDates);
                setLastRefresh(Date.now());
                clearError('events');
            }, 'refresh-events', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) toast.success("Événements mis à jour !");
                }
            });
        } catch (error) {
            console.error("Erreur refreshEvents:", error);
        }
    };

    // --- CHARGEMENT INITIAL DES BRANCHES ---
    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
                const branches = response.data || [];
                
                if (branches.length > 0) {
                    const bId = branches[0].id;
                    setActiveBranchId(bId);
                    // On charge les événements de CETTE branche spécifiquement
                    refreshEvents(false, 0, 20, bId); 
                }
            } catch (err) {
                console.error("Erreur chargement branche pour le feed", err);
            }
        };
        if (syndicatId) loadInitialData();
    }, [syndicatId]);

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    const handleCreateEvent = async (newEventData) => {
        if (!activeBranchId) return;
        setIsCreatingEvent(true);
        
        try {
            await executeWithRetry(async () => {
                const { createEventAPI } = await import('@/lib/api/event');
                // Utilisation de activeBranchId pour la création
                const createdEvent = await createEventAPI(activeBranchId, newEventData, newEventData.imageFile ? [newEventData.imageFile] : []);
                
                const eventWithDates = {
                    ...createdEvent,
                    startDate: createdEvent.date ? new Date(createdEvent.date) : new Date(),
                    endDate: createdEvent.date ? new Date(createdEvent.date) : new Date(),
                    createdAt: createdEvent.createdAt ? new Date(createdEvent.createdAt) : new Date()
                };
                
                setEvents(prevEvents => [eventWithDates, ...prevEvents]);
                setIsCreateModalOpen(false);
                clearError('create-event');
            }, 'create-event', {
                maxRetries: 2,
                onSuccess: () => {
                    toast.success(t('event_form.success_toast') || 'Événement créé avec succès !');
                }
            });
        } catch (error) {
            // Géré par executeWithRetry
        } finally {
            setIsCreatingEvent(false);
        }
    };

    const EventsList = ({ data }) => {
        if (hasError('events')) {
            return <ErrorState error={getError('events')} onRetry={() => refreshEvents(true)} />;
        }

        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Calendar}
                    title={searchTerm ? "Aucun résultat" : "Aucun événement"}
                    description={searchTerm ? "Essayez d'autres mots-clés." : "Le fil d'actualité est vide."}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12"
                />
            );
        }

        return (
         // Remplacer grid-cols-2 par max-w-2xl mx-auto
       <div className="max-w-3xl mx-auto flex flex-col gap-8"> 
            {data.map((event) => (
                <EventCard 
                    key={event.id} 
                    event={event} 
                    onShowParticipants={setSelectedEventForParticipants}
                    onUpdateEvent={handleUpdateEvent}
                />
            ))}
        </div>

        );
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Événements</h1>
                    <p className="text-gray-500">Planifiez et gérez les activités de votre syndicat</p>
                </div>
                <button
                    onClick={() => refreshEvents(true)}
                    className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                    disabled={apiLoading}
                >
                    <RefreshCw className={`w-5 h-5 ${apiLoading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <EventsList data={filteredEvents} />

            <button
                onClick={() => setIsCreateModalOpen(true)}
                className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-40"
            >
                <Plus size={24} />
            </button>

            <ParticipantsModal event={selectedEventForParticipants} onClose={() => setSelectedEventForParticipants(null)} />
            
            <CreateEventModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onRefresh={() => refreshEvents(true)}
                isLoading={isCreatingEvent}
            />
        </div>
    );
}

export default function EventsFeed(props) {
    return (
        <ErrorBoundary title="Erreur section Événements">
            <EventsFeedInner {...props} />
        </ErrorBoundary>
    );
}