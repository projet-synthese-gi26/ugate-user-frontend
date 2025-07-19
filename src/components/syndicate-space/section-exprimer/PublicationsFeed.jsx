"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Bookmark, Clock, Flag, Heart, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from 'react-hot-toast';
import CommentModal from "./CommentModal";
import timeAgo from "@/lib/utils/timeAgo";
import { likePostAPI, addCommentAPI } from "@/lib/api/posts";
import { STATIC_FILES_URL } from '@/lib/constants';

export default function Post({ post, onUpdatePost, syndicatId }) {
    const t = useTranslations('express_page');
    const [liked, setLiked] = useState(false); // A améliorer avec l'état réel de l'utilisateur
    const [bookmarked, setBookmarked] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [displayTimestamp, setDisplayTimestamp] = useState(() => timeAgo(post.createdAt));

    useEffect(() => {
        const interval = setInterval(() => setDisplayTimestamp(timeAgo(post.createdAt)), 60000);
        return () => clearInterval(interval);
    }, [post.createdAt]);

    const handleLike = async () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        onUpdatePost({ ...post, likes: post.likes + (newLikedState ? 1 : -1) });
        try {
            await likePostAPI(syndicatId, post.postId, newLikedState);
        } catch (error) {
            toast.error("L'action a échoué.");
            setLiked(!newLikedState);
            onUpdatePost({ ...post, likes: post.likes });
        }
    };

    const handleAddComment = async (commentData) => {
        try {
            await addCommentAPI(syndicatId, post.postId, commentData.content);
            // Idéalement, l'API devrait renvoyer le nouveau post mis à jour.
            // Pour l'instant, on met à jour l'UI de manière optimiste.
            onUpdatePost({ ...post, comments: [...post.comments, commentData] });
            toast.success("Commentaire ajouté !");
        } catch (error) {
            toast.error("Impossible d'ajouter le commentaire.");
        }
    };
    
    const imageUrl = post.imageUrl ? `${STATIC_FILES_URL}${post.imageUrl}` : null;
    const authorAvatarUrl = post.authorAvatarUrl ? `${STATIC_FILES_URL}${post.authorAvatarUrl}` : "https://i.pravatar.cc/150";

    return (
        <>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden mb-8 hover:shadow-2xl dark:shadow-black/20">
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <Image src={authorAvatarUrl} alt={post.authorName} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/50" />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{post.authorName}</h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-1.5 text-blue-500" />
                                <span>{displayTimestamp}</span>
                            </div>
                        </div>
                        <motion.button onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-full transition-colors ${bookmarked ? 'text-blue-500 bg-blue-100 dark:bg-blue-900' : 'text-gray-400 hover:bg-blue-50'}`}><Bookmark fill={bookmarked ? "currentColor" : "none"} /></motion.button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>
                    {imageUrl && <div className="rounded-xl overflow-hidden mb-6 shadow-lg"><Image src={imageUrl} alt="Contenu" width={800} height={600} className="w-full h-auto object-cover" /></div>}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{post.likes} {t('common.like', {count: post.likes})}</span>
                        <span>{post.comments.length} {t('common.comment', {count: post.comments.length})}</span>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-100 dark:border-gray-700 pt-4">
                        <button onClick={handleLike} className={`flex items-center px-4 py-2 rounded-xl w-full justify-center ${liked ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'}`}><Heart className="w-5 h-5 mr-2" fill={liked ? "currentColor" : "none"} />{t('common.like')}</button>
                        <button onClick={() => setIsCommentModalOpen(true)} className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100"><MessageCircle className="w-5 h-5 mr-2" />{t('common.comment')}</button>
                        <button className="flex items-center px-4 py-2 rounded-xl w-full justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100"><Flag className="w-5 h-5 mr-2" />{t('common.report')}</button>
                    </div>
                </div>
            </motion.div>
            <CommentModal post={post} isOpen={isCommentModalOpen} onClose={() => setIsCommentModalOpen(false)} onAddComment={handleAddComment} />
        </>
    );
}