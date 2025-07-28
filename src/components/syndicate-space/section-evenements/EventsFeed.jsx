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
    
    const filteredEvents = useMemo(() => 
        (events || []).filter(event => 
            event?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event?.description?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);

    // Fonction pour recharger les événements avec pagination correcte
    const refreshEvents = async (force = false, page = 0, size = 20) => {
        try {
            await executeWithRetry(async () => {
                const eventsData = await getEventsAPI(syndicatId, page, size, 'startDate', 'DESC');
                
                // Gérer la structure de réponse paginée et convertir les dates
                let events = [];
                if (eventsData && eventsData.content) {
                    events = eventsData.content;
                } else if (Array.isArray(eventsData)) {
                    events = eventsData;
                }
                
                // Convertir les dates string en objets Date
                const eventsWithDates = events.map(event => ({
                    ...event,
                    startDate: new Date(event.startDate),
                    endDate: new Date(event.endDate),
                    createdAt: new Date(event.createdAt)
                }));
                
                setEvents(eventsWithDates);
                
                setLastRefresh(Date.now());
                clearError('events');
            }, 'refresh-events', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) {
                        toast.success("Événements mis à jour !");
                    }
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    // Charger les événements au montage si pas de données initiales
    useEffect(() => {
        if ((!initialEvents || initialEvents.length === 0) && syndicatId) {
            refreshEvents(false);
        }
    }, [syndicatId]);

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };

    const handleCreateEvent = async (newEventData) => {
        setIsCreatingEvent(true);
        
        try {
            await executeWithRetry(async () => {
                // Appel de l'API réelle de création d'événement
                const { createEventAPI } = await import('@/lib/api/event');
                const createdEvent = await createEventAPI(syndicatId, newEventData, newEventData.imageFile);
                
                // Convertir les dates de l'événement créé et l'ajouter à la liste
                const eventWithDates = {
                    ...createdEvent,
                    startDate: new Date(createdEvent.startDate),
                    endDate: new Date(createdEvent.endDate),
                    createdAt: new Date(createdEvent.createdAt)
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
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsCreatingEvent(false);
        }
    };

    const EventsList = ({ data }) => {
        // Gestion des erreurs
        if (hasError('events')) {
            return (
                <ErrorState 
                    error={getError('events')}
                    onRetry={() => refreshEvents(true)}
                    onDismiss={() => clearError('events')}
                />
            );
        }

        // État vide amélioré
        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={Calendar}
                    title={searchTerm ? "Aucun événement trouvé" : "Aucun événement"}
                    description={searchTerm ? "Aucun événement ne correspond à votre recherche." : "Aucun événement n'a été créé pour le moment."}
                    action={!searchTerm && (
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsCreateModalOpen(true)}
                                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Créer un événement
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => refreshEvents(true)}
                                className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Actualiser
                            </motion.button>
                        </div>
                    )}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 p-12"
                />
            );
        }

        return (
            <div className="space-y-6">
                {isLoadingEvents ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={`event-skeleton-${index}`} />
                    ))
                ) : (
                    <AnimatePresence>
                        {data.map((event) => (
                            <EventCard 
                                key={event.id} 
                                event={event} 
                                onShowParticipants={setSelectedEventForParticipants}
                                onUpdateEvent={handleUpdateEvent}
                            />
                        ))}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-8">
            {/* Header avec actions */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-2">
                            Événements
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Gérez et participez aux événements du syndicat
                        </p>
                    </div>
                    
                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshEvents(true)}
                            disabled={apiLoading}
                            className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
                        >
                            <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                            Actualiser
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Affichage des erreurs globales */}
            <AnimatePresence>
                {hasError('refresh-events') && (
                    <InlineError 
                        error={getError('refresh-events')}
                        className="mb-6"
                    />
                )}
                {hasError('create-event') && (
                    <InlineError 
                        error={getError('create-event')}
                        className="mb-6"
                    />
                )}
            </AnimatePresence>

            {/* Barre de recherche */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 p-6">
                <div className="relative max-w-md">
                    <input 
                        type="text" 
                        placeholder="Rechercher des événements..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 text-sm" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                </div>
            </div>

            {/* Liste des événements */}
            <EventsList data={filteredEvents} />

            {/* Bouton flottant pour créer un événement */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCreateModalOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center z-50 transition-all duration-200"
                title="Créer un événement"
            >
                <Plus className="w-6 h-6" />
            </motion.button>

            {/* Modals */}
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

// Wrapper avec ErrorBoundary
export default function EventsFeed(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Événements"
            subtitle="Une erreur s'est produite lors du chargement des événements."
        >
            <EventsFeedInner {...props} />
        </ErrorBoundary>
    );
}