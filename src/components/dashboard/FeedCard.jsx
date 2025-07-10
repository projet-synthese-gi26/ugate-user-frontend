// src/components/dashboard/FeedCard.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Heart, MessageCircle, Share2, MoreHorizontal, MapPin, Calendar, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function FeedCard({ item }) {
    const { t } = useTranslation();
    const [liked, setLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);

    // On détermine si l'item est un événement en vérifiant la présence d'une clé spécifique
    const isEvent = 'startDate' in item;

    // Formatage de la date relative (ex: "il y a 5 heures")
    const timeAgo = formatDistanceToNow(new Date(item.createdAt), { addSuffix: true, locale: fr });

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {/* --- EN-TÊTE DE LA CARTE --- */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src={item.author.avatar} alt={item.author.name} width={48} height={48} className="rounded-full object-cover" />
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">{item.author.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {timeAgo} • via <span className="font-semibold text-blue-600 dark:text-blue-400">{item.syndicat.name}</span>
                        </p>
                    </div>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MoreHorizontal size={20} className="text-gray-500 dark:text-gray-400" />
                </button>
            </div>

            {/* --- CONTENU --- */}
            <div className="px-4 pb-2">
                <p className="text-gray-800 dark:text-gray-300 whitespace-pre-wrap">{item.description || item.content}</p>
            </div>

            {/* --- MÉDIA (IMAGE OU CARTE D'ÉVÉNEMENT) --- */}
            {item.image && !isEvent && (
                <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-700">
                    <Image src={item.image} alt="Contenu de la publication" fill style={{ objectFit: 'cover' }} />
                </div>
            )}

            {isEvent && (
                <div className="px-4 py-2">
                    <div className="relative rounded-lg overflow-hidden border dark:border-gray-600">
                        {item.image && <Image src={item.image} alt={item.title} width={800} height={400} className="w-full h-48 object-cover opacity-80" />}
                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 space-y-2">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 gap-2"><Calendar size={14} /><span>{new Date(item.startDate).toLocaleDateString('fr-FR', { dateStyle: 'full' })}</span></div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 gap-2"><Clock size={14} /><span>{new Date(item.startDate).toLocaleTimeString('fr-FR', { timeStyle: 'short' })}</span></div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 gap-2"><MapPin size={14} /><span>{item.location}</span></div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- STATS D'ENGAGEMENT --- */}
            <div className="px-4 py-2 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{item.likes} {t('common.like', { count: item.likes })}</span>
                <span>{item.comments?.length || 0} {t('common.comment', { count: item.comments?.length || 0 })}</span>
            </div>

            {/* --- BARRE D'ACTIONS --- */}
            <div className="border-t border-b border-gray-100 dark:border-gray-700 grid grid-cols-3">
                <button onClick={() => setLiked(!liked)} className={`py-2 flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${liked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`}>
                    <Heart size={20} fill={liked ? 'currentColor' : 'none'} /> {t('common.like')}
                </button>
                <button onClick={() => setShowComments(!showComments)} className="py-2 flex items-center justify-center gap-2 font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <MessageCircle size={20} /> {t('common.comment')}
                </button>
                <button className="py-2 flex items-center justify-center gap-2 font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Share2 size={20} /> {t('common.share')}
                </button>
            </div>

            {/* --- SECTION COMMENTAIRES --- */}
            {showComments && (
                <div className="p-4 space-y-4">
                    {/* Affichage des commentaires existants */}
                    {item.comments?.slice(0, 2).map((comment, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <Image src={comment.author.avatar} alt={comment.author.name} width={32} height={32} className="rounded-full" />
                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                                <p className="font-semibold text-sm text-gray-900 dark:text-white">{comment.author.name}</p>
                                <p className="text-sm text-gray-800 dark:text-gray-300">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                    {/* Champ pour ajouter un commentaire */}
                    <div className="flex items-center gap-2 pt-2">
                        <Image src="/default-avatar.png" alt="Votre avatar" width={32} height={32} className="rounded-full" />
                        <input type="text" placeholder={t('comments.placeholder')} className="w-full bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm border-transparent focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
            )}
        </motion.div>
    );
}