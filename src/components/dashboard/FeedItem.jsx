// src/components/dashboard/FeedItem.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart, Share2, MessageCircle, Clock, User, Bookmark, Send, X,
    Calendar, MapPin, Users
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from '@/navigation';

// Fonction utilitaire pour formater la date
const formatRelativeTime = (date) => {
    // Dans un vrai projet, utilisez une librairie comme date-fns
    return new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(date));
};

export default function FeedItem({ item }) {
    const t = useTranslations('dashboard');
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [comments, setComments] = useState(item.comments || []);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            // Idéalement, cet appel serait une requête API.
            // await api.post(`/publications/${item.id}/comments`, { content: newComment });
            const newCommentObj = {
                author: { name: "Vous", avatar: "/default-avatar.png" }, // Utiliser l'avatar de l'utilisateur connecté
                content: newComment.trim(),
            };
            setComments(prev => [...prev, newCommentObj]);
            setNewComment("");
        }
    };

    const isPublication = "content" in item;

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    if (isPublication) {
        // --- AFFICHAGE POUR UNE PUBLICATION ---
        return (
            <>
                <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl mx-auto"
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <Image src={item.author.avatar} alt={item.author.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h3 className="font-bold text-gray-800">{item.author.name}</h3>
                                <p className="text-sm text-gray-500">{item.syndicat.name}</p>
                                <div className="flex items-center text-xs text-gray-400 mt-1">
                                    <Clock size={14} className="mr-1" />
                                    <span>{item.timestamp}</span>
                                </div>
                            </div>
                            <button onClick={() => setBookmarked(!bookmarked)} className="ml-auto p-2 rounded-full hover:bg-gray-100">
                                <Bookmark size={20} className={bookmarked ? "text-blue-500 fill-current" : "text-gray-500"} />
                            </button>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">{item.content}</p>

                        {item.image && (
                            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                                <Image src={item.image} alt="Publication" fill style={{ objectFit: 'cover' }} />
                            </div>
                        )}

                        <div className="flex items-center justify-between border-t pt-4">
                            <motion.button onClick={() => setLiked(!liked)} className={`flex items-center space-x-2 text-gray-600 hover:text-red-500 p-2 rounded-lg transition-colors ${liked ? "text-red-500" : ""}`}>
                                <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                                <span className="font-medium">{item.likes + (liked ? 1 : 0)}</span>
                            </motion.button>
                            <button onClick={() => setShowCommentModal(true)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 p-2 rounded-lg transition-colors">
                                <MessageCircle size={20} />
                                <span className="font-medium">{comments.length}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 p-2 rounded-lg transition-colors">
                                <Share2 size={20} />
                                <span className="font-medium">{t("common.share")}</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* --- MODALE DE COMMENTAIRES (PARTIE COMPLÈTE) --- */}
                <AnimatePresence>
                    {showCommentModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowCommentModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-4 border-b flex justify-between items-center">
                                    <h3 className="text-xl font-bold">{t("comments.title")}</h3>
                                    <button onClick={() => setShowCommentModal(false)} className="p-2 rounded-full hover:bg-gray-100">
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                                    {comments.length > 0 ? comments.map((comment, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Image src={comment.author.avatar} alt={comment.author.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                                            <div className="flex-1 bg-gray-100 rounded-lg p-3">
                                                <p className="font-semibold text-sm">{comment.author.name}</p>
                                                <p className="text-gray-700">{comment.content}</p>
                                            </div>
                                        </div>
                                    )) : (
                                        <p className="text-center text-gray-500 py-8">{t("comments.no_comments")}</p>
                                    )}
                                </div>
                                <div className="p-4 border-t bg-gray-50 flex items-center space-x-3">
                                    <Image src="/default-avatar.png" alt="Votre avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                                            placeholder={t("comments.placeholder")}
                                            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <button
                                            onClick={handleAddComment}
                                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
                                            aria-label="Envoyer le commentaire"
                                        >
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    } else {
        // --- AFFICHAGE POUR UN ÉVÉNEMENT ---
        return (
            <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl mx-auto"
            >
                <div className="relative w-full h-48">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                        <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                        <p className="text-sm text-white/90">{item.syndicat.name}</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center"><Calendar size={16} className="mr-2 text-blue-500" /> <span>{formatRelativeTime(item.startDate)}</span></div>
                        <div className="flex items-center"><MapPin size={16} className="mr-2 text-blue-500" /> <span>{item.location}</span></div>
                        <div className="flex items-center"><Users size={16} className="mr-2 text-blue-500" /> <span>{item.participants.length} participants</span></div>
                    </div>
                    <Link href={`/events/${item.id}`} passHref>
                        <div className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center cursor-pointer">
                            {t('events.see_and_join')}
                        </div>
                    </Link>
                </div>
            </motion.div>
        );
    }
}