"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Event } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { Calendar, MapPin, Clock, CheckCircle2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';
import MediaGallery from './MediaGallery';

export default function EventCard({ event }: { event: Event }) {
    const t = useTranslations('Event');
    const [isJoined, setIsJoined] = useState(false);
    const [loading, setLoading] = useState(false);

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

    // Fusion de tous les médias pour MediaGallery (tout passe par images selon votre besoin)
    const mediaList = [
        ...(event.imageUrls || []),
        // @ts-ignore
        ...(event.videoUrls || []),
        // @ts-ignore
        ...(event.fileUrls || [])
    ];

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden flex flex-col h-full">

            {/* 1. Header avec Date & Titre */}
            <div className="p-8 pb-4 flex gap-6">
                {/* Bloc Date Premium */}
                <div className="w-16 h-16 bg-primary-800 rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg shadow-primary-900/20">
                    <span className="text-xl font-black leading-none">{eventDate.getDate()}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-80">
                        {eventDate.toLocaleString('fr', { month: 'short' })}
                    </span>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-md border border-red-100">
                            Événement
                        </span>
                        <button className="p-2 -mt-2 -mr-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all">
                            <Share2 size={18} />
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-primary-800 transition-colors">
                        {event.title}
                    </h3>
                </div>
            </div>

            {/* 2. Infos Pratiques (Lieu & Heure) */}
            <div className="px-8 py-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600">
                    <Clock size={14} className="text-primary-600" />
                    {formatTime(event.startTime)}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600 max-w-[200px]">
                    <MapPin size={14} className="text-primary-600" />
                    <span className="truncate">{event.location || "Lieu à définir"}</span>
                </div>
            </div>

            {/* 3. Description */}
            <div className="px-8 py-4 text-slate-600 text-sm leading-relaxed flex-grow">
                {event.description}
            </div>

            {/* 4. ZONE MÉDIA (Utilisation du composant universel) */}
            {mediaList.length > 0 && (
                <div className="w-full">
                    <MediaGallery media={mediaList} />
                </div>
            )}

            {/* 5. Footer avec Action */}
            <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/30 mt-auto">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-black text-slate-400">
                                U
                            </div>
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                        {event.participantCount || 0} participants
                    </span>
                </div>

                <Button
                    onClick={handleJoin}
                    disabled={isJoined || loading}
                    className={cn(
                        "rounded-xl px-8 h-12 font-bold shadow-lg transition-all text-sm",
                        isJoined
                            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20"
                            : "bg-primary-800 text-white hover:bg-primary-900 shadow-primary-900/20"
                    )}
                >
                    {isJoined ? <><CheckCircle2 size={18} className="mr-2" /> J'y vais</> : "Participer"}
                </Button>
            </div>
        </div>
    );
}