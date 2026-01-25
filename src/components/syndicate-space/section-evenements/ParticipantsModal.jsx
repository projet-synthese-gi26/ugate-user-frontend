// src/components/syndicate-space/section-evenements/ParticipantsModal.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from "next-intl";
import { X, Users, Loader2 } from 'lucide-react';
import { getEventParticipantsAPI } from '@/lib/api/event';

export default function ParticipantsModal({ event, onClose }) {
    const t = useTranslations('events_page');
    const [participants, setParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Charger les participants quand l'événement change
    useEffect(() => {
        if (event?.id) {
            loadParticipants();
        }
    }, [event?.id]);

    const loadParticipants = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getEventParticipantsAPI(event.id);
            setParticipants(data || []);
        } catch (err) {
            console.error('Erreur chargement participants:', err);
            setError('Impossible de charger les participants');
            // Fallback sur les participants locaux si disponibles
            setParticipants(event.participants || []);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {event && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 text-white flex items-center gap-2">
                                <Users />
                                Participants ({participants.length})
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:bg-gray-100 hover:bg-gray-700 rounded-full"
                            >
                                <X />
                            </button>
                        </div>

                        {isLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-8 text-red-500">
                                {error}
                            </div>
                        ) : participants.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                Aucun participant pour le moment
                            </div>
                        ) : (
                            <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
                                {participants.map((participant, index) => (
                                    <motion.div
                                        key={participant.userId || index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center p-3 bg-gray-50 bg-gray-700/50 rounded-lg"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                                            {(participant.fullName || participant.name || 'U').charAt(0).toUpperCase()}
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700 text-gray-200">
                                            {participant.fullName || participant.name || 'Utilisateur'}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}