// src/components/shared/UnifiedPostCard.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Heart, MessageCircle, Share2, Flag, Calendar, MapPin, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import timeAgo from "@/lib/utils/timeAgo";
import { STATIC_FILES_URL } from '@/lib/constants';

/**
 * Composant de carte unifié pour les publications et événements
 * Utilisable à la fois dans l'espace syndicat et la landing page
 */
export default function UnifiedPostCard({
    item,
    type = 'publication',
    variant = 'landing',
    onLike,
    onComment,
    onBookmark,
    onShare,
    showActions = true,
    syndicatId
}) {
    // 1. Traducteur pour le contexte spécifique (express_page ou landing_page)
    const t = useTranslations(variant === 'syndicate' ? 'express_page' : 'landing_page');
    // 2. Traducteur pour les termes communs (report, like, etc.)
    const tCommon = useTranslations('common');

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [displayTimestamp, setDisplayTimestamp] = useState(() =>
        timeAgo(item.createdAt || item.startDate || item.timestamp)
    );

    const isEvent = type === 'event';

    // Mise à jour du timestamp
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTimestamp(timeAgo(item.createdAt || item.startDate || item.timestamp));
        }, 60000);
        return () => clearInterval(interval);
    }, [item.createdAt, item.startDate, item.timestamp]);

    // Gestion des actions
    const handleLike = async () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        if (onLike) {
            await onLike(item, newLikedState);
        }
    };

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        if (onBookmark) {
            onBookmark(item, !bookmarked);
        }
    };

    const handleComment = () => {
        if (onComment) {
            onComment(item);
        }
    };

    const handleShare = () => {
        if (onShare) {
            onShare(item);
        }
    };

    // Récupération des données selon le format
    const getAuthorInfo = () => {
        if (item.author) {
            return {
                name: item.author.name,
                avatar: item.author.avatar,
                role: item.author.role
            };
        }
        return {
            name: item.authorName,
            avatar: item.authorAvatarUrl,
            role: item.authorRole || ''
        };
    };

    const getSyndicateInfo = () => {
        if (item.syndicate) {
            return {
                name: item.syndicate.name,
                verified: item.syndicate.verified || false
            };
        }
        return {
            name: item.syndicateName || '',
            verified: false
        };
    };

    const getStats = () => {
        return {
            likes: item.likes || 0,
            comments: item.comments?.length || item.comments || 0,
            shares: item.shares || 0
        };
    };

    // --- GESTION SÉCURISÉE DES URLS ---

    /**
     * Vérifie si l'URL est absolue (http/https) ou relative.
     * Si relative, ajoute STATIC_FILES_URL.
     */
    const getSafeUrl = (url) => {
        if (!url) return null;
        if (url.startsWith('http') || url.startsWith('https')) return url;
        return `${STATIC_FILES_URL}${url}`;
    };

    const getImageUrl = () => {
        return getSafeUrl(item.imageUrl || item.image);
    };

    const getAvatarUrl = () => {
        const authorInfo = getAuthorInfo();
        // Utilise getSafeUrl pour l'avatar, avec fallback sur pravatar
        return getSafeUrl(authorInfo.avatar) || "https://i.pravatar.cc/150";
    };
    // -------------------------------------

    const authorInfo = getAuthorInfo();
    const syndicateInfo = getSyndicateInfo();
    const stats = getStats();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 dark:border-neutral-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image
                                src={getAvatarUrl()}
                                alt={authorInfo.name || "Auteur"}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            {syndicateInfo.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 dark:text-white text-base">{authorInfo.name}</h3>
                                {authorInfo.role && (
                                    <>
                                        <span className="text-slate-500 text-sm">•</span>
                                        <span className="text-slate-600 dark:text-neutral-400 text-sm">{authorInfo.role}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 dark:text-neutral-400 text-sm">
                                {syndicateInfo.name && (
                                    <>
                                        <span>{syndicateInfo.name}</span>
                                        <span>•</span>
                                    </>
                                )}
                                <Clock className="h-4 w-4" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {isEvent && (
                            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                {t('event_label')}
                            </div>
                        )}
                        {variant === 'syndicate' && onBookmark && (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleBookmark}
                                className={`p-2 rounded-xl transition-colors ${bookmarked
                                    ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400'
                                    : 'text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                    }`}
                            >
                                <Bookmark fill={bookmarked ? "currentColor" : "none"} className="w-5 h-5" />
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                {/* Informations événement */}
                {isEvent && item.event && (
                    <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800">
                        <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">{item.event.title || item.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 dark:text-indigo-400 text-sm gap-4">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {item.event.date || item.startDate}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {item.event.location || item.location}
                            </div>
                            {(item.event.participants || item.participants) && (
                                <div className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {item.event.participants || item.participants} {tCommon('participants')}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Contenu texte */}
                <p className="text-slate-700 dark:text-neutral-300 mb-4 leading-relaxed text-base whitespace-pre-wrap">
                    {item.content || item.description}
                </p>

                {/* Image */}
                {getImageUrl() && (
                    <div className="-mx-6 mb-4">
                        <Image
                            src={getImageUrl()}
                            alt="Contenu"
                            width={800}
                            height={400}
                            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
            </div>

            {/* Actions */}
            {showActions && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-neutral-700/50 border-t border-slate-100 dark:border-neutral-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLike}
                                className={`flex items-center space-x-2 transition-colors ${liked
                                    ? 'text-red-500'
                                    : 'text-slate-600 dark:text-neutral-300 hover:text-red-500'
                                    }`}
                            >
                                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                                <span className="text-base font-medium">{stats.likes}</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleComment}
                                className="flex items-center space-x-2 text-slate-600 dark:text-neutral-300 hover:text-blue-500 transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span className="text-base font-medium">{stats.comments}</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleShare}
                                className="flex items-center space-x-2 text-slate-600 dark:text-neutral-300 hover:text-green-500 transition-colors"
                            >
                                <Share2 className="h-5 w-5" />
                                <span className="text-base font-medium">{stats.shares}</span>
                            </motion.button>

                            {variant === 'syndicate' && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center space-x-2 text-slate-600 dark:text-neutral-300 hover:text-orange-500 transition-colors"
                                >
                                    <Flag className="h-5 w-5" />
                                    <span className="text-base font-medium">{tCommon('report')}</span>
                                </motion.button>
                            )}
                        </div>

                        {isEvent && (
                            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                                {tCommon('participate_button')}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
}