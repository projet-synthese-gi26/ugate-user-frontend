// src/components/syndicate-space/section-exprimer/comments/Comment.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Eye, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Reply from './Reply';

export default function Comment({ comment, onReply }) {
    const t = useTranslations('comments');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(comment.likes || 0);
    const [showReplies, setShowReplies] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Image
                src={comment.author.avatar}
                alt={comment.author.name}
                width={40} height={40}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
                <div className="bg-gray-100 bg-gray-700 rounded-2xl px-4 py-3">
                    <p className="font-semibold text-sm text-gray-800 text-gray-100">{comment.author.name}</p>
                    <p className="text-gray-600 text-gray-300 text-sm mt-1 whitespace-pre-wrap">{comment.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 text-gray-400 px-2">
                    <button onClick={handleLike} className={`flex items-center space-x-1 hover:text-blue-500 ${liked ? 'text-blue-500 font-medium' : ''}`}>
                        <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
                        <span>{t('common.like')} {likes > 0 && `(${likes})`}</span>
                    </button>
                    <button onClick={() => onReply(comment)} className="flex items-center space-x-1 hover:text-blue-500">
                        <MessageCircle size={14} />
                        <span>Répondre</span>
                    </button>
                    {comment.replies?.length > 0 && (
                        <button onClick={() => setShowReplies(!showReplies)} className="flex items-center space-x-1 hover:text-blue-500">
                            {showReplies ? <X size={14} /> : <Eye size={14} />}
                            <span>{showReplies ? 'Masquer' : `${comment.replies.length} réponse(s)`}</span>
                        </button>
                    )}
                </div>
                <AnimatePresence>
                    {showReplies && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-4 space-y-4 border-l-2 border-gray-200 border-gray-600 pl-4"
                        >
                            {comment.replies.map((reply) => (
                                <Reply key={reply.id} reply={reply} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};