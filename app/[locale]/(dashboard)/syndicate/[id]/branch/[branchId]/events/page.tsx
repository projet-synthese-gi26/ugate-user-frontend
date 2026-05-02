"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Event, Syndicate } from '@/lib/types/api';
import EventCard from '@/components/social/EventCard';
import CreateEventModal from '@/components/social/CreateEventModal';
import { Loader2, Plus, Calendar, Tent } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function SyndicateEventsPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    const { id: syndicateId, branchId } = use(params);
    const { user } = useAuthStore();

    const [events, setEvents] = useState<Event[]>([]);
    const [isCreator, setIsCreator] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchData = async () => {
        try {
            const [eventsRes, syndRes] = await Promise.all([
                ugateApi.get(`/events/branch/${branchId}`),
                ugateApi.get(`/syndicates/${syndicateId}/details`)
            ]);

            const data = Array.isArray(eventsRes.data) ? eventsRes.data : (eventsRes.data.content || []);
            setEvents(data);

            const syndicateData: Syndicate = syndRes.data;
            if (user?.id && syndicateData.creator?.id === user.id) {
                setIsCreator(true);
            }
        } catch (e) {
            console.error("Erreur chargement événements", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [branchId, syndicateId, user?.id]);

    return (
        // max-w-2xl permet d'aligner la largeur avec le fil d'actualité (PostCard)
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-20">

            {/* En-tête Premium Façon "Carte" */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-slate-900">Événements</h1>
                        <p className="text-sm font-medium text-slate-500">Rencontres et activités de l'antenne</p>
                    </div>
                </div>

                {isCreator && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-black text-white shadow-md transition-all active:scale-95 shrink-0"
                    >
                        <Plus size={18} className="mr-2" />
                        Créer
                    </Button>
                )}
            </div>

            {/* Liste des Événements (Stack Vertical) */}
            {loading ? (
                <div className="flex justify-center py-10">
                    <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
                </div>
            ) : events.length > 0 ? (
                <div className="space-y-6">
                    {events.map((evt, idx) => (
                        <motion.div
                            key={evt.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <EventCard event={evt} onJoinSuccess={fetchData} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[2rem] p-12 text-center border border-slate-200 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tent className="text-slate-300" size={32} />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">Aucun événement prévu</h2>
                    <p className="text-slate-500 font-medium text-sm mb-6">
                        Il n'y a pas encore de rassemblement organisé pour cette antenne.
                    </p>

                    {isCreator && (
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="border-dashed border-2 border-slate-200 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl"
                        >
                            <Plus size={18} className="mr-2" /> Organiser un événement
                        </Button>
                    )}
                </div>
            )}

            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={branchId}
                onSuccess={fetchData}
            />
        </div>
    );
}