// src/components/syndicate-space/section-evenements/CreateEventModal.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import EventForm from './EventForm';

export default function CreateEventModal({ isOpen, onClose, onCreateEvent }) {
    const t = useTranslations('event_form');

    const handleFormSubmit = async (data) => {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        onCreateEvent(data); // Appelle la fonction du parent pour ajouter l'événement
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('event_form.modal_title')}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <EventForm onSubmit={handleFormSubmit} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}