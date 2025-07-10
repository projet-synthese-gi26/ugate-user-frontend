// src/components/dashboard/FeedCard.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
    Clock, Heart, MessageCircle, Share2, Bookmark, Calendar, User, Send 
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Variantes d'animation pour la carte elle-même
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FeedCard({ item }) {
    const { t } = useTranslation();
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    // --- CORRECTION CENTRALE ---
    // On détermine la date principale à utiliser.
    // 'createdAt' pour les publications, 'startDate' pour les événements.
    const dateToUse = item.createdAt || item.startDate;

    let timeAgo = t('common.unknown_date'); // Fallback text
    if (dateToUse) {
        try {
            // On s'assure que l'on passe un objet Date valide.
            const dateObject = new Date(dateToUse);
            if (!isNaN(dateObject.getTime())) {
                timeAgo = formatDistanceToNow(dateObject, { addSuffix: true, locale: fr });
            }
        } catch (e) {
            console.error("Erreur de formatage de date pour l'item :", item, e);
        }
    }
    // --- FIN DE LA CORRECTION ---

    // On détermine si l'item est une publication ou un événement
    // La présence de la propriété 'content' est un bon indicateur pour une publication.
    const isPublication = 'content' in item;

    if (isPublication) {
        // === RENDU POUR UNE PUBLICATION ===
        return (
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border dark:border-gray-700">
                <div className="flex items-center mb-4">
                    <Image src={item.author.avatar} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full mr-4 object-cover"/>
                    <div className="flex-grow">
                        <p className="font-bold text-gray-900 dark:text-white">{item.author.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><Clock size={12}/> {timeAgo}</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-full transition-colors ${bookmarked ? "text-blue-500 bg-blue-100 dark:bg-blue-900/50" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                        <Bookmark fill={bookmarked ? 'currentColor' : 'none'}/>
                    </motion.button>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">{item.content}</p>
                {item.image && <Image src={item.image} alt="Contenu de la publication" width={800} height={500} className="rounded-lg w-full h-auto mb-4"/>}
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                    <motion.button onClick={() => setLiked(!liked)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${liked ? "text-red-500 bg-red-100 dark:bg-red-900/50" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Heart fill={liked ? 'currentColor' : 'none'} size={18}/> {t('common.like')}
                    </motion.button>
                    <motion.button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <MessageCircle size={18}/> {t('common.comment')}
                    </motion.button>
                    <motion.button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Share2 size={18}/> {t('common.share')}
                    </motion.button>
                </div>
            </motion.div>
        );
    } else {
        // === RENDU POUR UN ÉVÉNEMENT ===
        return (
             <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border dark:border-gray-700 overflow-hidden">
                {item.image && <Image src={item.image} alt="Image de l'événement" width={800} height={400} className="w-full h-48 object-cover"/>}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-xs font-bold uppercase text-blue-500 dark:text-blue-400">{t('events.upcoming_event')}</p>
                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.title}</h3>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                            <p className="font-bold text-lg text-gray-800 dark:text-gray-200">{new Date(dateToUse).getDate()}</p>
                            <p className="text-sm uppercase text-gray-500 dark:text-gray-400">{new Date(dateToUse).toLocaleString('fr-FR', { month: 'short' })}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p className="flex items-center gap-2"><User size={14}/> Organisé par <strong>{item.author.name}</strong></p>
                        <p className="flex items-center gap-2 mt-1"><Clock size={14}/> Publié {timeAgo}</p>
                    </div>
                    <motion.button className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        {t('events.see_and_join')}
                    </motion.button>
                </div>
            </motion.div>
        );
    }
}