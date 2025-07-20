// src/components/syndicate-space/section-evenements/ParticipantsModal.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from "next-intl";
import { X, Users } from 'lucide-react';

export default function ParticipantsModal({ event, onClose }) {
    const t = useTranslations('events_page');

    return (
        <AnimatePresence>
            {event && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2"><Users />{t("events_page.participants_title")}</h3>
                            <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                            {event.participants.map((participant, index) => (
                                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">{participant.name.charAt(0)}</div>
                                    <span className="ml-3 font-medium text-gray-700 dark:text-gray-200">{participant.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}