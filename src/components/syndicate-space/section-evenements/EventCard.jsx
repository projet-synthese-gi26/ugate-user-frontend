// src/components/shared/EventCard.jsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, Clock, Users, User, CheckCircle } from "lucide-react";
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';

const InfoPill = ({ icon: Icon, text, colorClass = 'blue' }) => {
    const colorClasses = {
        blue: {
            bg: 'bg-blue-50 dark:bg-blue-900/50',
            text: 'text-blue-500 dark:text-blue-400',
            span: 'text-blue-800 dark:text-blue-200'
        },
        purple: {
            bg: 'bg-purple-50 dark:bg-purple-900/50',
            text: 'text-purple-500 dark:text-purple-400',
            span: 'text-purple-800 dark:text-purple-200'
        }
    };

    const colors = colorClasses[colorClass] || colorClasses.blue;

    return (
        <div className={`flex items-center px-3 py-1.5 ${colors.bg} rounded-full`}>
            <Icon className={`w-4 h-4 mr-2 ${colors.text}`} />
            <span className={`text-xs font-semibold ${colors.span}`}>{text}</span>
        </div>
    );
};

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isParticipating, setIsParticipating] = useState(
        event.participants?.some(p => p.name === "Vous") || false
    );
    const { t } = useTranslation();

    const { formattedDate, formattedTime } = useMemo(() => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        
        return {
            formattedDate: startDate.toLocaleDateString('fr-FR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            }),
            formattedTime: `${startDate.toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit' 
            })} - ${endDate.toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit' 
            })}`
        };
    }, [event.startDate, event.endDate]);

    const handleParticipate = () => {
        const newParticipationState = !isParticipating;
        setIsParticipating(newParticipationState);
        
        const currentParticipants = event.participants || []; 
        const updatedParticipants = newParticipationState
            ? [...currentParticipants, { name: "Vous" }]
            : currentParticipants.filter(p => p.name !== "Vous");
        
        if (onUpdateEvent) {
            onUpdateEvent({ ...event, participants: updatedParticipants });
        }
    };

    const hasValidImage = event.image && event.image.trim() !== "";
    const hasValidAuthor = event.author && event.author.profileImage && event.author.profileImage.trim() !== "";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/20 overflow-hidden mb-8 w-full max-w-xl mx-auto border border-gray-200/80 dark:border-white/10"
        >
            <div className="relative h-56 group">
                <Image
                    src={hasValidImage ? event.image : "/placeholder-cover.jpg"}
                    alt={event.title || "Image de l'événement"}
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {event.isUpcoming && (
                    <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                        {t('events_page.upcoming')}
                    </div>
                )}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-2xl font-bold drop-shadow-lg">{event.title}</h2>
                    <div className="flex items-center text-sm opacity-90 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formattedDate}</span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center mb-5">
                    {hasValidAuthor ? (
                        <Image 
                            src={event.author.profileImage} 
                            alt={event.author.name || "Auteur"} 
                            width={40} 
                            height={40} 
                            className="w-10 h-10 rounded-full object-cover" 
                        />
                    ) : (
                        <SyndicatDefaultAvatar 
                            name={event.author?.name || "User"} 
                            size={40} 
                            className="w-10 h-10" 
                        />
                    )}
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                            {event.author?.name || "Utilisateur inconnu"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Organisateur</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <InfoPill icon={Clock} text={formattedTime} colorClass="blue" />
                    <InfoPill icon={MapPin} text={event.location || "Lieu non spécifié"} colorClass="purple" />
                </div>

                <motion.p layout className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm">
                    {isExpanded 
                        ? event.description 
                        : (event.description?.length > 120 
                            ? `${event.description.slice(0, 120)}...` 
                            : event.description
                        )
                    }
                    {event.description?.length > 120 && (
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className="ml-1 text-blue-500 hover:underline font-semibold text-sm"
                        >
                            {isExpanded ? t("events_page.see_less") : t("events_page.see_more")}
                        </button>
                    )}
                </motion.p>
                
                <button 
                    onClick={() => onShowParticipants(event)} 
                    className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-400 mb-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                >
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-medium">
                            {(event.participants?.length || 0)} {t("participants", { count: (event.participants?.length || 0) })}
                        </span>
                    </div>
                    <div className="flex -space-x-3">
                        {(event.participants || []).slice(0, 4).map((p, i) => (
                            <div key={i} className="w-7 h-7 bg-gray-300 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold text-gray-600">
                                {p.name?.charAt(0) || "?"}
                            </div>
                        ))}
                        {(event.participants?.length || 0) > 4 && (
                            <div className="w-7 h-7 bg-gray-200 text-gray-600 text-xs font-bold rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                                +{event.participants.length - 4}
                            </div>
                        )}
                    </div>
                </button>

                <motion.button
                    onClick={handleParticipate}
                    className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                        isParticipating 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                            : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                >
                    {isParticipating ? <CheckCircle /> : <Calendar />}
                    {isParticipating ? t("events_page.participating") : t("events_page.participate_button")}
                </motion.button>
            </div>
        </motion.div>
    );
}