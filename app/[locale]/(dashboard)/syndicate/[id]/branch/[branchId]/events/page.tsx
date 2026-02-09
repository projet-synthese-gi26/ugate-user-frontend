"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Event } from '@/lib/types/api';
import EventCard from '@/components/social/EventCard';
import CreateEventModal from '@/components/social/CreateEventModal';
import { Loader2, Plus, CalendarSearch, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyndicateEventsPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    // Extraction des IDs
    const { id: syndicateId, branchId } = use(params);
    const { user } = useAuthStore();

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isAdmin = user?.roles.includes('ADMIN') || user?.roles.includes('PRESIDENT') || user?.roles.includes('MODERATOR');

    const fetchEvents = async () => {
        try {
            // Appel API ciblé sur la branche
            const res = await ugateApi.get(`/events/branch/${branchId}`);
            const data = Array.isArray(res.data) ? res.data : (res.data.content || []);
            setEvents(data);
        } catch (e) {
            console.error("Erreur chargement événements", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [branchId]);

    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* En-tête de section centré */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-2xl flex items-center justify-center shadow-sm">
                            <Calendar size={24} />
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Agenda</h1>
                    </div>
                    <p className="text-slate-500 font-medium text-lg max-w-xl leading-relaxed">
                        Retrouvez toutes les réunions, assemblées et activités organisées par votre branche.
                    </p>
                </div>

                {isAdmin && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-2xl h-14 px-8 bg-slate-900 hover:bg-black text-white shadow-xl transition-all hover:scale-105 active:scale-95 font-bold flex items-center gap-3"
                    >
                        <Plus size={20} />
                        Programmer un événement
                    </Button>
                )}
            </div>

            {/* Grille d'événements */}
            {loading ? (
                <div className="">
                    <Loader2 className="animate-spin text-primary-800 w-12 h-12" />
                </div>
            ) : events.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((evt) => (
                        <EventCard key={evt.id} event={evt} />
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl shadow-slate-200/50 mt-8">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <CalendarSearch size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-400 mb-2">Aucun événement à l'horizon</h2>
                    <p className="text-slate-400 font-medium">Revenez plus tard pour découvrir les prochaines dates.</p>

                    {isAdmin && (
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="mt-8 border-dashed border-2 py-6 px-10 rounded-2xl"
                        >
                            Créer le premier événement
                        </Button>
                    )}
                </div>
            )}

            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                branchId={branchId}
                onSuccess={fetchEvents}
            />
        </div>
    );
}