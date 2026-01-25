// src/components/syndicate-space/section-exprimer/comments/EmojiPicker.jsx
"use client";

import { motion } from 'framer-motion';

export default function EmojiPicker({ onEmojiClick }) {
    const emojis = ['😊', '😂', '❤️', '👍', '🤔', '🎉', '🔥', '👏'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 left-0 bg-white bg-gray-700 shadow-xl rounded-2xl p-2 grid grid-cols-4 gap-1 border border-gray-600 z-10"
        >
            {emojis.map((emoji) => (
                <motion.button
                    key={emoji}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onEmojiClick(emoji)}
                    className="text-2xl hover:bg-gray-100 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                    aria-label={`Insérer l'emoji ${emoji}`}
                >
                    {emoji}
                </motion.button>
            ))}
        </motion.div>
    );
};