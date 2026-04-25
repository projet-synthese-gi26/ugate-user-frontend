"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Event } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { Calendar, MapPin, Clock, CheckCircle2, Share2, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';
import MediaGallery from './MediaGallery';

export default function EventCard({ event }: { event: Event }) {
    const t = useTranslations('Event');
    const [isJoined, setIsJoined] = useState(false);
    const[loading, setLoading] = useState(false);

    const formatTime = (time: any) => {
        if (!time?.hour && time?.hour !== 0) return "--:--";
        return `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
    };

    const handleJoin = async () => {
        setLoading(true);
        try {
            await ugateApi.post(`/events/${event.id}/join`);
            setIsJoined(true);
            toast.success(t('success_join'));
        } catch (error) {
            toast.error("Erreur de participation");
        } finally {
            setLoading(false);
        }
    };

    const eventDate = event.date ? new Date(event.date) : new Date();

    const mediaList = [
        ...(event.imageUrls || []),
        // @ts-ignore
        ...(event.videoUrls ||[]),
        // @ts-ignore
        ...(event.fileUrls ||[])
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col mb-6">

            {/* 1. HEADER : Date & Titre */}
            <div className="p-5 flex gap-4">
                {/* Icône Calendrier type iOS/LinkedIn */}
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex flex-col items-center justify-center text-primary-700 border border-primary-100 shrink-0 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                        {eventDate.toLocaleString('fr', { month: 'short' })}
                    </span>
                    <span className="text-xl font-black leading-none mt-0.5">
                        {eventDate.getDate()}
                    </span>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-red-100">
                            Événement
                        </span>
                        <button className="text-slate-400 hover:text-primary-600 transition-colors p-1 -mt-1 -mr-1">
                            <Share2 size={16} />
                        </button>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight truncate hover:text-primary-700 transition-colors cursor-pointer">
                        {event.title}
                    </h3>

                    {/* Infos Rapides : Heure et Lieu */}
                    <div className="flex items-center gap-3 mt-2.5 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                            <Clock size={12} className="text-slate-400" />
                            {formatTime(event.startTime)}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 truncate max-w-[150px] sm:max-w-[200px]">
                            <MapPin size={12} className="text-slate-400 shrink-0" />
                            <span className="truncate">{event.location || "Lieu à définir"}</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="px-5 pb-4 text-sm text-slate-700 leading-relaxed">
                {event.description}
            </div>

            {/* 3. MÉDIAS (EDGE-TO-EDGE) */}
            {/* On supprime les paddings horizontaux pour que l'image colle aux bords gauche/droit */}
            {mediaList.length > 0 && (
                <div className="w-full">
                    <MediaGallery media={mediaList} />
                </div>
            )}

            {/* 4. FOOTER : Participants & Action */}
            <div className="px-5 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">

                {/* Avatars superposés simulant une activité */}
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-blue-600 z-30">A</div>
                        <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-emerald-600 z-20">M</div>
                        <div className="w-7 h-7 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-amber-600 z-10">P</div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                        {event.participantCount || 0} participants
                    </span>
                </div>

                <Button
                    onClick={handleJoin}
                    disabled={isJoined || loading}
                    className={cn(
                        "rounded-xl px-6 h-10 font-bold transition-all text-sm shadow-sm",
                        isJoined
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100"
                            : "bg-primary-700 text-white hover:bg-primary-800 hover:shadow-md"
                    )}
                >
                    {isJoined ? (
                        <><CheckCircle2 size={16} className="mr-1.5" /> Inscrit</>
                    ) : (
                        "Participer"
                    )}
                </Button>
            </div>
        </div>
    );
}