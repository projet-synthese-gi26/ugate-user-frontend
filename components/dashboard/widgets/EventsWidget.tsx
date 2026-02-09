"use client";

import { useQuery } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';
import { EventResponseDTO } from '@/lib/types/api';
import { Calendar, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function EventsWidget({ branchId, syndicateId }: { branchId: string, syndicateId: string }) {
    // 🔥 Appel API Réel avec TanStack Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ['events', branchId],
        queryFn: async () => {
            if (!branchId) return [];
            const res = await ugateApi.get(`/events/branch/${branchId}`);
            // Gestion robuste du format de réponse (Tableau direct ou Page)
            const events = Array.isArray(res.data) ? res.data : (res.data.content || []);

            // Filtrer : Seulement futurs, Triés par date, Max 3
            return events
                .filter((e: EventResponseDTO) => new Date(e.date) >= new Date())
                .sort((a: EventResponseDTO, b: EventResponseDTO) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 3);
        },
        enabled: !!branchId, // Ne pas lancer si pas de branche
        staleTime: 1000 * 60 * 5 // Cache de 5 minutes
    });

    if (!branchId) return null;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Calendar size={16} className="text-primary-600" />
                    Agenda
                </h3>
            </div>

            <div className="p-4 space-y-4">
                {isLoading && (
                    <div className="flex justify-center py-4">
                        <Loader2 className="animate-spin text-slate-300" />
                    </div>
                )}

                {isError && (
                    <div className="text-xs text-red-400 flex items-center gap-2">
                        <AlertCircle size={12} /> Impossible de charger l'agenda
                    </div>
                )}

                {!isLoading && data?.length === 0 && (
                    <p className="text-xs text-slate-400 text-center py-2">Aucun événement prévu.</p>
                )}

                {data?.map((event: EventResponseDTO) => {
                    const eventDate = new Date(event.date);
                    return (
                        <Link key={event.id} href={`/syndicate/${syndicateId}/branch/${branchId}/events`} className="flex gap-3 items-start group">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:border-primary-200 transition-colors shrink-0">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">
                                    {format(eventDate, 'MMM', { locale: fr })}
                                </span>
                                <span className="text-lg font-black text-slate-800 leading-none">
                                    {format(eventDate, 'dd')}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 leading-tight truncate group-hover:text-primary-700 transition-colors">
                                    {event.title}
                                </h4>
                                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                    <MapPin size={10} />
                                    <span className="truncate">{event.location}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}

                <Link
                    href={`/syndicate/${syndicateId}/branch/${branchId}/events`}
                    className="block w-full py-2 text-center text-xs font-bold text-primary-600 hover:bg-primary-50 rounded-lg transition-colors border border-transparent hover:border-primary-100"
                >
                    Voir tout l'agenda
                </Link>
            </div>
        </div>
    );
}