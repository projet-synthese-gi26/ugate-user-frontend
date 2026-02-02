"use client";

import { motion } from 'framer-motion';

const reactions = [
    { label: 'LIKE', emoji: '👍', color: 'text-blue-500' },
    { label: 'LOVE', emoji: '❤️', color: 'text-red-500' },
    { label: 'HAHA', emoji: '😆', color: 'text-yellow-500' },
    { label: 'WOW', emoji: '😮', color: 'text-blue-400' },
    { label: 'SAD', emoji: '😢', color: 'text-yellow-600' },
    { label: 'ANGRY', emoji: '😡', color: 'text-orange-600' },
];

export default function ReactionPicker({ onSelect }: { onSelect: (type: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute bottom-full left-0 mb-2 bg-white shadow-2xl border border-slate-100 rounded-full p-1.5 flex gap-1 z-50"
        >
            {reactions.map((res, i) => (
                <motion.button
                    key={res.label}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => onSelect(res.label)}
                    className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-slate-50 rounded-full transition-colors"
                >
                    {res.emoji}
                </motion.button>
            ))}
        </motion.div>
    );
}