// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Calendar, MapPin, Users, UserPlus, UserMinus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { joinEventAPI, leaveEventAPI } from '@/lib/api/event';

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const [isJoining, setIsJoining] = useState(false);
    const [hasJoined, setHasJoined] = useState(event.hasJoined || false);
    const t = useTranslations('common');
    
    // Gestion de l'image avec STATIC_FILES_URL
    const imageUrl = event.imageUrl && event.imageUrl.startsWith('/') 
        ? `${STATIC_FILES_URL}${event.imageUrl}` 
        : event.imageUrl || (event.imageUrls && event.imageUrls[0]);
    
    // S'assurer que la date est valide
    const dateToUse = event.createdAt || event.startDate;
    const startDate = dateToUse ? new Date(dateToUse) : new Date();
    
    const participantsCount = Array.isArray(event.participants) ? event.participants.length : 0;
    
    // Formatage de la date
    const formattedDate = startDate.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    
    // Formatage de l'heure
    const formattedTime = startDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Gérer la participation à un événement
    const handleToggleParticipation = async () => {
        setIsJoining(true);
        try {
            if (hasJoined) {
                await leaveEventAPI(event.id);
                setHasJoined(false);
                toast.success('Vous avez quitté l\'événement');
                if (onUpdateEvent) {
                    onUpdateEvent({ ...event, participantCount: (event.participantCount || 0) - 1 });
                }
            } else {
                await joinEventAPI(event.id);
                setHasJoined(true);
                toast.success('Vous participez à l\'événement !');
                if (onUpdateEvent) {
                    onUpdateEvent({ ...event, participantCount: (event.participantCount || 0) + 1 });
                }
            }
        } catch (error) {
            toast.error('Une erreur est survenue');
            console.error('Erreur participation:', error);
        } finally {
            setIsJoining(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6 max-w-xl mx-auto"
        >
            {/* Header avec auteur et badge événement */}
            <div className="p-6 border-b border-slate-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            {event.author?.profileImage ? (
                                <Image
                                    src={event.author.profileImage}
                                    alt={event.author.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            ) : (
                                <SyndicatDefaultAvatar 
                                    name={event.author?.name || "User"}
                                    size={48}
                                />
                            )}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                                    {event.author?.name || 'Organisateur'}
                                </h3>
                                <span className="text-slate-500 dark:text-gray-400 text-sm">•</span>
                                <span className="text-slate-600 dark:text-gray-400 text-sm">Organisateur</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 dark:text-gray-400 text-sm">
                                <Clock className="h-4 w-4" />
                                <span>Événement créé</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                        Événement
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="p-6">
                {/* Encadré spécial pour les infos événement */}
                <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">{event.title}</h4>
                    <div className="flex flex-wrap items-center text-indigo-700 dark:text-indigo-300 text-sm gap-4">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formattedDate} à {formattedTime}
                        </div>
                        <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location || 'Lieu à définir'}
                        </div>
                        <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {participantsCount} participants
                        </div>
                    </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-700 dark:text-gray-300 mb-4 leading-relaxed text-base">
                    {event.description}
                </p>
                
                {/* Image de l'événement */}
                {imageUrl && (
                    <div className="-mx-6 mb-4">
                        <Image
                            src={imageUrl}
                            alt={event.title}
                            width={800}
                            height={400}
                            className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
            </div>

            {/* Footer avec boutons */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-gray-700/50 border-t border-slate-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    {/* Bouton voir participants */}
                    <motion.button
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium flex items-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onShowParticipants && onShowParticipants(event)}
                    >
                        <Users className="w-4 h-4" />
                        Voir les participants
                    </motion.button>

                    {/* Bouton participer/quitter */}
                    <motion.button
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                            hasJoined
                                ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400'
                                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleToggleParticipation}
                        disabled={isJoining}
                    >
                        {isJoining ? (
                            <span className="animate-spin">...</span>
                        ) : hasJoined ? (
                            <>
                                <UserMinus className="w-4 h-4" />
                                Quitter
                            </>
                        ) : (
                            <>
                                <UserPlus className="w-4 h-4" />
                                Participer
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}