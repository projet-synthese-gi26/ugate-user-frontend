"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, MapPin, Clock, Users, Heart, MessageCircle, Share2, CheckCircle } from "lucide-react";
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { toast } from 'react-hot-toast';
import { STATIC_FILES_URL } from '@/lib/constants';

// Fonction utilitaire pour gérer les URLs d'images

const getSafeUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('blob:')) return url;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${STATIC_FILES_URL}${url}`;
};

export default function EventCard({ event, onToggleParticipate }) {
    const t = useTranslations('events_page');
    const [isExpanded, setIsExpanded] = useState(false);

    // États locaux pour interaction immédiate
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(event.likes || 0);
    const [isParticipating, setIsParticipating] = useState(false);
    const [participantsCount, setParticipantsCount] = useState(event.participants?.length || 0);

    // Formatage des dates
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const dateString = startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeString = `${startDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;

    const handleLike = () => {
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
        if (!liked) toast.success("Vous aimez cet événement");
    };

    const handleParticipate = () => {
        const newState = !isParticipating;
        setIsParticipating(newState);
        setParticipantsCount(prev => newState ? prev + 1 : prev - 1);

        if (newState) {
            toast.success("Inscription validée !", { icon: '📅' });
        } else {
            toast("Inscription annulée", { icon: '❌' });
        }

        // Notifier le parent pour mettre à jour la liste globale si nécessaire
        if (onToggleParticipate) onToggleParticipate(event.id, newState);
    };

    const authorImage = getSafeUrl(event.author?.profileImage);
    const eventImage = getSafeUrl(event.imageUrl);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6 max-w-2xl mx-auto hover:shadow-md transition-all duration-300"
        >
            {/* --- HEADER --- */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                    <div className="relative">
                        {authorImage ? (
                            <Image
                                src={authorImage}
                                alt={event.author?.name}
                                width={48} height={48}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                        ) : (
                            <SyndicatDefaultAvatar name={event.author?.name} size={48} />
                        )}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                            {event.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                            <span className="font-medium text-gray-700 dark:text-gray-300 mr-2">{event.author?.name}</span>
                            <span className="text-gray-300 mr-2">•</span>
                            <Calendar size={14} className="mr-1" />
                            {dateString}
                        </div>
                    </div>
                </div>

                {event.isUpcoming && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm animate-pulse">
                        {t('upcoming')}
                    </span>
                )}
            </div>

            {/* --- DESCRIPTION --- */}
            <div className="mb-5">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {isExpanded ? event.description : (
                        <>
                            {event.description?.length > 120 ? `${event.description.substring(0, 120)}...` : event.description}
                            {event.description?.length > 120 && (
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="text-blue-600 font-medium ml-1 hover:underline focus:outline-none"
                                >
                                    {t('see_more')}
                                </button>
                            )}
                        </>
                    )}
                </p>
            </div>

            {/* --- INFO PILLS --- */}
            <div className="flex flex-wrap gap-3 mb-5">
                <div className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-700 dark:text-blue-300 text-sm font-medium">
                    <Clock size={18} className="mr-2 text-blue-600" />
                    {timeString}
                </div>
                <div className="flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl text-purple-700 dark:text-purple-300 text-sm font-medium">
                    <MapPin size={18} className="mr-2 text-purple-600" />
                    <span className="truncate max-w-[200px]">{event.location}</span>
                </div>
            </div>

            {/* --- IMAGE --- */}
            {eventImage && (
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 shadow-sm group">
                    <Image
                        src={eventImage}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            )}

            {/* --- FOOTER --- */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
                    <Users size={18} className="mr-2" />
                    {participantsCount} participants
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={handleLike}
                        className={`flex items-center gap-1 transition-colors ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    >
                        <Heart size={22} fill={liked ? "currentColor" : "none"} />
                        <span className="text-xs">{likesCount}</span>
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-1">
                        <MessageCircle size={22} />
                        <span className="text-xs">{event.comments}</span>
                    </button>
                    <button className="text-gray-400 hover:text-green-500 transition-colors">
                        <Share2 size={22} />
                    </button>
                </div>
            </div>

            {/* --- ACTION BUTTON --- */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleParticipate}
                className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${isParticipating
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                    }`}
            >
                {isParticipating ? (
                    <>
                        <CheckCircle size={20} />
                        {t('participating_cta')}
                    </>
                ) : (
                    <>
                        <Calendar size={20} />
                        {t('participate_cta')}
                    </>
                )}
            </motion.button>
        </motion.div>
    );
}