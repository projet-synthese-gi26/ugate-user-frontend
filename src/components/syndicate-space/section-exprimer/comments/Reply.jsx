// src/components/syndicate-space/section-exprimer/comments/Reply.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Reply({ reply }) {
    const { t } = useTranslation();
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(reply.likes || 0);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-2"
        >
            <Image
                src={reply.author.avatar}
                alt={reply.author.name}
                width={32} height={32}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-3 py-2">
                    <p className="font-semibold text-xs text-gray-800 dark:text-gray-100">{reply.author.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-0.5 whitespace-pre-wrap">{reply.content}</p>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400 px-2">
                    <button onClick={handleLike} className={`flex items-center space-x-1 hover:text-blue-500 ${liked ? 'text-blue-500 font-medium' : ''}`}>
                        <Heart size={12} fill={liked ? 'currentColor' : 'none'} />
                        <span>{t('common.like')} {likes > 0 && `(${likes})`}</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}