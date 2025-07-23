// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { STATIC_FILES_URL } from '@/lib/constants';

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const t = useTranslations('common');
    
    // Gestion de l'image avec STATIC_FILES_URL
    const imageUrl = event.imageUrl && event.imageUrl.startsWith('/') 
        ? `${STATIC_FILES_URL}${event.imageUrl}` 
        : event.imageUrl || (event.imageUrls && event.imageUrls[0]);
    
    // S'assurer que la date est valide
    const dateToUse = event.createdAt || event.startDate;
    const startDate = dateToUse ? new Date(dateToUse) : new Date();
    
    const participantsCount = Array.isArray(event.participants) ? event.participants.length : 0;

    return (
        <div className="bg-white dark:bg-gray-800/60 rounded-2xl shadow-xl border border-gray-200/50 dark:border-white/10 overflow-hidden mb-6">
            {imageUrl && (
                <div className="relative h-52 group">
                    <Image 
                        src={imageUrl} 
                        alt={event.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        className="transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-5">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{event.title}</h3>
                        <p className="text-sm text-white/90 drop-shadow-md">{event.description}</p>
                    </div>
                </div>
            )}
            <div className="p-5 sm:p-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-5">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{format(startDate, 'dd')}</p>
                        <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 uppercase">{format(startDate, 'MMM', { locale: fr })}</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/40 rounded-lg col-span-2">
                        <p className="font-semibold text-green-700 dark:text-green-300">{format(startDate, 'EEEE', { locale: fr })}</p>
                        <p className="text-xs text-green-600 dark:text-green-400">{format(startDate, 'HH:mm')}</p>
                    </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                    <p className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-500" /> {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                        <User size={16} className="text-purple-500" /> Organisé par <strong>{event.author?.name || 'Organisateur'}</strong>
                    </p>
                </div>
                <motion.button
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onShowParticipants && onShowParticipants(event)}
                >
                    Voir et rejoindre ({participantsCount} participants)
                </motion.button>
            </div>
        </div>
    );
};