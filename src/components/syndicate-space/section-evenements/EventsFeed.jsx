"use client";

import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus, RefreshCw, Calendar, Search } from 'lucide-react';
import EventCard from './EventCard';
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

    // État local des événements (initialisé avec les props, modifiable par simulation)
    const [events, setEvents] = useState(initialEvents || []);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = useMemo(() =>
        (events || []).filter(event =>
            event?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event?.description?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);

    const refreshEvents = async (force = false) => {
        if (syndicatId === 'test-id') {
            if (force) toast.success("Données synchronisées (Simulation)");
            return;
        }
        // ... (Code API réel inchangé) ...
    };

    // LOGIQUE DE SIMULATION D'AJOUT
    const handleCreateEvent = (newEventData) => {
        setIsCreateModalOpen(false);

        // Simuler un délai réseau
        const loadingToast = toast.loading('Création de l\'événement...');

        setTimeout(() => {
            // Création d'un objet événement complet pour l'affichage
            const newEvent = {
                id: `evt-new-${Date.now()}`,
                title: newEventData.title,
                description: newEventData.description,
                startDate: newEventData.startDate,
                endDate: newEventData.endDate,
                location: newEventData.location,
                author: {
                    name: "Moi (Organisateur)",
                    profileImage: "https://i.pravatar.cc/150?img=12" // Avatar simulé
                },
                participants: [], // Commence vide
                likes: 0,
                comments: 0,
                isUpcoming: true,
                createdAt: new Date().toISOString(),
                // Image : soit celle uploadée (URL object), soit une par défaut
                imageUrl: newEventData.imageFile
                    ? URL.createObjectURL(newEventData.imageFile)
                    : "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
            };

            // Ajout en haut de la liste
            setEvents(prevEvents => [newEvent, ...prevEvents]);

            toast.dismiss(loadingToast);
            toast.success("Événement publié avec succès !");
        }, 1000);
    };

    const handleToggleParticipate = (eventId, isParticipating) => {
        // En simulation, on pourrait mettre à jour le tableau global ici
        // Mais EventCard gère déjà son affichage local, ce qui suffit pour la démo.
    };

    return (
        <div className="space-y-6">
            {/* Barre d'outils */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative flex-1 w-full sm:max-w-md">
                    <input
                        type="text"
                        placeholder="Rechercher un événement..."
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        Créer
                    </motion.button>
                    <button
                        onClick={() => refreshEvents(true)}
                        className="p-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
                    >
                        <RefreshCw size={20} className={apiLoading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* Liste */}
            <div className="space-y-8">
                {filteredEvents.length === 0 ? (
                    <EmptyState
                        icon={Calendar}
                        title="Aucun événement"
                        description="Aucun événement trouvé pour le moment."
                        className="bg-white dark:bg-neutral-800 p-12 rounded-3xl"
                    />
                ) : (
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onToggleParticipate={handleToggleParticipate}
                            />
                        ))}
                    </AnimatePresence>
                )}
            </div>

            {/* Modal */}
            <CreateEventModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreateEvent={handleCreateEvent}
            />
        </div>
    );
}

export default function EventsFeed(props) {
    return (
        <ErrorBoundary title="Erreur Événements">
            <EventsFeedInner {...props} />
        </ErrorBoundary>
    );
}