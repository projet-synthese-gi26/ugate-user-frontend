// src/components/syndicate-space/section-exprimer/Post.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Flag, Heart, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import CommentModal from "./CommentModal";
import timeAgo from "@/lib/utils/timeAgo"; // On supposera un utilitaire pour le temps

/**
 * Affiche une publication complète avec ses actions et gère sa modale de commentaires.
 * @param {object} post - L'objet de la publication.
 * @param {function} onUpdatePost - Callback pour mettre à jour le post dans la liste parente.
 */
export default function Post({ post, onUpdatePost }) {
    const t = useTranslations('express_page');
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    
    // Pour que le timestamp se mette à jour sans re-render de toute la page
    const [displayTimestamp, setDisplayTimestamp] = useState(() => timeAgo(post.createdAt));
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTimestamp(timeAgo(post.createdAt));
        }, 60000); // Met à jour chaque minute
        return () => clearInterval(interval);
    }, [post.createdAt]);

    const handleLike = () => {
        setLiked(!liked);
        // Simule la mise à jour des données
        onUpdatePost({
            ...post,
            likes: post.likes + (liked ? -1 : 1),
        });
    };

    const handleAddComment = (newComment) => {
        onUpdatePost({
            ...post,
            comments: [...post.comments, newComment],
        });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden mb-8 hover:shadow-2xl dark:shadow-black/20 transition-all duration-300 transform hover:scale-[1.01]"
            >
                <div className="p-6">
                    {/* --- Header du Post --- */}
                    <div className="flex items-center mb-6">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={48} height={48}
                            className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50"
                        />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{post.author.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-1.5 text-blue-500" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-full transition-colors duration-200 ${bookmarked ? 'text-blue-500 bg-blue-100 dark:bg-blue-900' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'}`}>
                            <Bookmark className="w-6 h-6" fill={bookmarked ? "currentColor" : "none"} />
                        </motion.button>
                    </div>

                    {/* --- Contenu du Post --- */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>

                    {post.image && (
                        <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                            <Image src={post.image} alt="Contenu de la publication" width={800} height={600} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    {/* --- Stats (Likes/Commentaires) --- */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2"><Heart className="w-4 h-4 text-red-500" /><span>{post.likes} {t('common.like', {count: post.likes})}</span></div>
                        <span>{post.comments.length} {t('common.comment', {count: post.comments.length})}</span>
                    </div>

                    {/* --- Barre d'actions --- */}
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700 pt-4">
                        <motion.button whileHover={{ scale: 1.05 }} onClick={handleLike} className={`flex items-center px-4 py-2 rounded-xl w-full justify-center ${liked ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-all`}>
                            <Heart className="w-5 h-5 mr-2" fill={liked ? "currentColor" : "none"} />{t('common.like')}
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsCommentModalOpen(true)} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                            <MessageCircle className="w-5 h-5 mr-2" />{t('common.comment')}
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                            <Flag className="w-5 h-5 mr-2" />{t('common.report')}
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <CommentModal
                post={post}
                isOpen={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                onAddComment={handleAddComment}
            />
        </>
    );
}