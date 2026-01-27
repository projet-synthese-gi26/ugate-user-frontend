// src/components/syndicate-space/section-evenements/EventCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
    Heart, 
    MessageCircle, 
    Share2, 
    Bookmark, 
    MoreHorizontal, 
    Calendar, 
    MapPin,
    Users
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { joinEventAPI, leaveEventAPI } from '@/lib/api/event';

export default function EventCard({ event, onUpdateEvent, onShowParticipants }) {
    const [isJoining, setIsJoining] = useState(false);
    const [hasJoined, setHasJoined] = useState(event.hasJoined || false);
    const t = useTranslations('common');
    
    // Logique Image & Date
    const imageUrl = event.imageUrl && event.imageUrl.startsWith('/') 
        ? `${STATIC_FILES_URL}${event.imageUrl}` 
        : event.imageUrl || (event.imageUrls && event.imageUrls[0]);
    
    const startDate = event.startDate ? new Date(event.startDate) : new Date();
    const formattedDate = startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });

    // Fonction de participation liée au bouton "J'aime" (ou à adapter selon ton besoin)
    const handleLikeClick = async () => {
        setIsJoining(true);
        try {
            if (hasJoined) {
                await leaveEventAPI(event.id);
                setHasJoined(false);
            } else {
                await joinEventAPI(event.id);
                setHasJoined(true);
                toast.success('Inscrit à l\'événement !');
            }
            if (onUpdateEvent) onUpdateEvent({ ...event, hasJoined: !hasJoined });
        } catch (error) {
            toast.error('Erreur de connexion');
        } finally {
            setIsJoining(false);
        }
    };
            // À l'intérieur du composant EventCard
const handleJoinEvent = async () => {
    setIsJoining(true);
    try {
        // Appel conforme au Swagger (URL seule, authentifiée)
        await joinEventAPI(event.id);
        
        setHasJoined(true);
        toast.success("Inscription réussie !");
    } catch (error) {
        toast.error("Erreur lors de l'inscription");
    } finally {
        setIsJoining(false);
    }
};


    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-2 w-full mx-auto"
        >
            {/* 1. BANDEAU SYNDICAT (Gradient Mauve/Bleu) */}
            <div className="bg-gradient-to-r from-[#8E54E9] to-[#4776E6] px-4 py-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border border-white/50 overflow-hidden bg-white/20 flex items-center justify-center">
                    <Users size={14} className="text-white" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">
                    {event.branchName || "Syndicat National"}
                </span>
            </div>

            {/* 2. INFOS AUTEUR / ORGANISATEUR */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        {event.author?.profileImage ? (
                            <Image src={event.author.profileImage} alt="" width={40} height={40} className="rounded-full object-cover" />
                        ) : (
                            <SyndicatDefaultAvatar name={event.author?.name || "U"} size={40} />
                        )}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{event.author?.name || "Marie Dubois"}</h4>
                        <p className="text-[11px] text-gray-500 flex items-center gap-1">
                            <span className="text-blue-500">🕒</span> Il y a 6 heures
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><Bookmark size={20} /></button>
            </div>

            {/* 3. TEXTE DE L'ÉVÉNEMENT */}
            <div className="px-4 pb-3">
                <p className="text-[14px] text-gray-800 leading-relaxed">
                    <span className="font-bold block mb-1 text-indigo-700">{event.title}</span>
                    {event.description}
                </p>
            </div>

            {/* 4. IMAGE PRINCIPALE (Bords arrondis) */}
              {imageUrl && (
        <div className="px-4 mb-3">
            {/* aspect-[16/9] rend l'image plus large et moins "carrée" */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-100">
                <Image src={imageUrl} alt={event.title} fill className="object-cover" unoptimized />
            </div>
        </div>
    )}

            {/* 5. COMPTEURS RÉACTIONS & COMMENTAIRES */}
            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-white">
                            <Heart size={10} className="text-white fill-current" />
                        </div>
                        <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center border border-white">
                            <Heart size={10} className="text-white fill-current" />
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">42 réactions</span>
                </div>
                <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                    {event.commentsCount || 1} commentaires
                </div>
            </div>

            {/* 6. BARRE D'ACTIONS SOCIALES (J'aime, Commenter, Partager) */}
            <div className="px-2 py-1 flex items-center justify-between">
                <button 
                    onClick={handleLikeClick}
                    disabled={isJoining}
                    className={`flex-1 py-2 flex items-center justify-center gap-2 rounded-lg transition-colors ${hasJoined ? 'text-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Heart size={18} className={hasJoined ? "fill-current" : ""} />
                    <span className="text-sm font-medium">J'aime</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">Commenter</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm font-medium">Partager</span>
                </button>
            </div>

            {/* BLOC INFOS COMPLÉMENTAIRES (Date/Lieu - Très discret) */}
            <div className="px-4 py-2 bg-gray-50/50 flex gap-4 text-[10px] text-gray-400 font-semibold uppercase">
                <div className="flex items-center gap-1"><Calendar size={12}/> {formattedDate}</div>
                <div className="flex items-center gap-1"><MapPin size={12}/> {event.location || "Yaoundé"}</div>
            </div>
        </motion.div>
    );
}