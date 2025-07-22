// src/components/syndicate-space/SyndicateNotificationsPanel.jsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import NotificationCard from './NotificationCard'; // <-- Importation du composant isolé

/**
 * Le panneau latéral qui affiche les notifications.
 * @param {boolean} isOpen - Contrôle la visibilité du panneau.
 * @param {function} onClose - Fonction pour fermer le panneau.
 */
export default function SyndicateNotificationsPanel({ isOpen, onClose }) {
    const t = useTranslations('notifications');

    const notifications = [
        { icon: Calendar, title: 'Nouvelle réunion', message: 'Réunion mensuelle prévue pour demain à 10h', time: 'Il y a 5 minutes', type: 'info' },
        { icon: CheckCircle, title: 'Cotisation reçue', message: 'Votre cotisation du mois a été validée avec succès.', time: 'Il y a 30 minutes', type: 'success' },
        { icon: AlertCircle, title: 'Rappel important', message: 'N\'oubliez pas de voter pour les nouvelles propositions.', time: 'Il y a 1 heure', type: 'warning' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/30 z-30" />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-neutral-900 shadow-strong z-40 border-l border-neutral-200 dark:border-neutral-700 flex flex-col transition-colors duration-300"
                        aria-modal="true" role="dialog" aria-labelledby="notification-panel-title"
                    >
                        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center flex-shrink-0">
                            <h3 id="notification-panel-title" className="text-lg font-bold text-neutral-800 dark:text-white flex items-center gap-3">
                                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                                    <Bell size={18} className="text-primary-600 dark:text-primary-400" />
                                </div>
                                {t('notifications.title')}
                            </h3>
                            <motion.button 
                                onClick={onClose} 
                                className="p-2 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                aria-label="Fermer"
                            >
                                <X size={18} />
                            </motion.button>
                        </div>

                        {notifications.length > 0 ? (
                            <div className="flex-grow p-6 space-y-3 overflow-y-auto">
                                {notifications.map((notification, index) => (
                                    <NotificationCard key={index} {...notification} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                                <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl mb-4">
                                    <Bell className="w-12 h-12 text-neutral-400 dark:text-neutral-500" />
                                </div>
                                <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">Aucune notification</h4>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Vous êtes à jour.</p>
                            </div>
                        )}
                        
                        <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                            <motion.button 
                                whileHover={{ scale: 1.02 }} 
                                whileTap={{ scale: 0.98 }} 
                                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium shadow-soft hover:shadow-blue transition-all duration-200"
                            >
                                {t('notifications.see_all')}
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}