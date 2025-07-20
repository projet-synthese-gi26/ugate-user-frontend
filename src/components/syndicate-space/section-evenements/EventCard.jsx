// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { Calendar, MapPin, Clock, User, Users, Heart, Share2 } from 'lucide-react';

export default function EventCard({ event, onShowParticipants, onUpdateEvent }) {
    const t = useTranslations('common');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isParticipating, setIsParticipating] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleParticipate = () => {
        const newParticipationState = !isParticipating;
        setIsParticipating(newParticipationState);
        // On met à jour l'événement parent pour refléter le changement de participants
        const updatedParticipants = newParticipationState
            ? [...event.participants, { name: "Vous" }]
            : event.participants.filter(p => p.name !== "Vous");
        
        onUpdateEvent({ ...event, participants: updatedParticipants });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div layout variants={cardVariants} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 w-full mx-auto transform transition-all duration-300 hover:shadow-2xl dark:shadow-black/20">
            {event.isUpcoming && <div className="absolute top-4 right-4 z-10"><span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">{t("events_page.upcoming")}</span></div>}
            
            <div className="p-6 sm:p-8">
                {/* ... (Header avec auteur, titre, date) ... */}
                 <div className="flex items-start mb-6">
                    <Image src={event.author.profileImage} alt={event.author.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50" />
                    <div className="ml-4 flex-grow"><h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400"><User className="w-4 h-4 mr-1.5 text-blue-500"/><span className="font-medium">{event.author.name}</span><span className="mx-2">•</span><Calendar className="w-4 h-4 mr-1.5 text-blue-500"/><span>{event.startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span></div>
                    </div>
                 </div>

                {/* Description extensible */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{isExpanded ? event.description : `${event.description.slice(0, 150)}...`}
                    <button onClick={() => setIsExpanded(!isExpanded)} className="ml-2 text-blue-500 hover:underline font-medium">{isExpanded ? t("events_page.see_less") : t("events_page.see_more")}</button>
                </p>

                {/* ... (Infos: Heure, Lieu) ... */}
                
                {event.images && event.images[0] && <div className="relative rounded-xl overflow-hidden mb-6 h-64"><Image src={event.images[0]} alt="Event" fill style={{ objectFit: 'cover' }} /></div>}

                {/* Barre d'actions */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={() => onShowParticipants(event)} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600"><Users className="w-5 h-5 mr-2"/> <span className="font-medium">{event.participants.length} {t("participants")}</span></button>
                    <div className="flex items-center gap-2"><motion.button onClick={() => setIsLiked(!isLiked)} className={`p-2 rounded-full ${isLiked ? 'text-red-500 bg-red-100' : 'text-gray-400 hover:text-red-500 hover:bg-red-100'}`}><Heart fill={isLiked ? "currentColor" : "none"} /></motion.button><motion.button className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-100"><Share2 /></motion.button></div>
                </div>

                {/* Bouton Participer */}
                <motion.button onClick={handleParticipate} className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2 ${isParticipating ? 'bg-green-600' : 'bg-blue-600'}`} whileHover={{ scale: 1.02 }}><Calendar/>{isParticipating ? t("events_page.participating") : t("events_page.participate_button")}</motion.button>
            </div>
        </motion.div>
    );
};