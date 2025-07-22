// src/components/syndicate-space/section-exprimer/Post.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Flag, Heart, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from 'react-hot-toast';
import CommentModal from "./CommentModal";
import timeAgo from "@/lib/utils/timeAgo";
import { likePostAPI, addCommentAPI } from "@/lib/api/posts";
import { STATIC_FILES_URL } from '@/lib/constants';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';

/**
 * Affiche une publication complète avec ses actions et gère sa modale de commentaires.
 * @param {object} post - L'objet de la publication.
 * @param {function} onUpdatePost - Callback pour mettre à jour le post dans la liste parente.
 */
export default function Post({ post, onUpdatePost, syndicatId }) {
    const t = useTranslations('express_page');
    const { handleError, clearError } = useErrorHandler();
    const { executeWithRetry } = useApiWithRetry();
    
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

    const handleLike = async () => {
        const newLikedState = !liked;
        const originalLikes = post.likes;
        
        // Mise à jour optimiste
        setLiked(newLikedState);
        onUpdatePost({ ...post, likes: post.likes + (newLikedState ? 1 : -1) });
        
        try {
            await executeWithRetry(async () => {
                await likePostAPI(syndicatId, post.postId, newLikedState);
            }, `like-post-${post.postId}`, {
                maxRetries: 2,
                onError: () => {
                    // Reverser les changements optimistes
                    setLiked(!newLikedState);
                    onUpdatePost({ ...post, likes: originalLikes });
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    const handleAddComment = async (commentData) => {
        try {
            await executeWithRetry(async () => {
                await addCommentAPI(syndicatId, post.postId, commentData.content);
                // Mise à jour optimiste
                onUpdatePost({ ...post, comments: [...post.comments, commentData] });
            }, `add-comment-${post.postId}`, {
                maxRetries: 2,
                onSuccess: () => {
                    toast.success("Commentaire ajouté !");
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
            >
                <div className="p-6">
                    {/* --- Header du Post --- */}
                    <div className="flex items-center mb-6">
                        <Image 
                            src={post.authorAvatarUrl ? `${STATIC_FILES_URL}${post.authorAvatarUrl}` : "https://i.pravatar.cc/150"} 
                            alt={post.authorName} 
                            width={48} 
                            height={48} 
                            className="w-12 h-12 rounded-xl object-cover shadow-soft" 
                        />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-semibold text-lg text-neutral-800 dark:text-white">{post.authorName}</h3>
                            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                                <Clock className="w-4 h-4 mr-1.5 text-primary-500" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setBookmarked(!bookmarked)} 
                            className={`p-2 rounded-xl transition-colors ${
                                bookmarked 
                                    ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400' 
                                    : 'text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                            }`}
                        >
                            <Bookmark fill={bookmarked ? "currentColor" : "none"} className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* --- Contenu du Post --- */}
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 whitespace-pre-wrap">
                        {post.content}
                    </p>
                    
                    {post.imageUrl && (
                        <div className="rounded-xl overflow-hidden mb-6 shadow-soft">
                            <Image 
                                src={`${STATIC_FILES_URL}${post.imageUrl}`} 
                                alt="Contenu" 
                                width={800} 
                                height={600} 
                                className="w-full h-auto object-cover" 
                            />
                        </div>
                    )}

                    {/* --- Stats (Likes/Commentaires) --- */}
                    <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                        <span>{post.likes} {t('common.like', {count: post.likes})}</span>
                        <span>{post.comments.length} {t('common.comment', {count: post.comments.length})}</span>
                    </div>

                    {/* --- Barre d'actions --- */}
                    <div className="flex items-center justify-around border-t border-neutral-200 dark:border-neutral-700 pt-4 gap-2">
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLike} 
                            className={`flex items-center px-4 py-2.5 rounded-xl w-full justify-center font-medium transition-all duration-200 ${
                                liked 
                                    ? 'bg-primary-600 text-white shadow-soft' 
                                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                            }`}
                        >
                            <Heart className="w-5 h-5 mr-2" fill={liked ? "currentColor" : "none"} />
                            {t('common.like')}
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsCommentModalOpen(true)} 
                            className="flex items-center px-4 py-2.5 rounded-xl w-full justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-medium transition-all duration-200"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {t('common.comment')}
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center px-4 py-2.5 rounded-xl w-full justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-medium transition-all duration-200"
                        >
                            <Flag className="w-5 h-5 mr-2" />
                            {t('common.report')}
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