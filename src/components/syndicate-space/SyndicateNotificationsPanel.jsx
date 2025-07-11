import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {NotificationCard} from "./NotificationCard";


/**
 * Le panneau latéral qui affiche les notifications.
 * Il glisse depuis la droite de l'écran.
 * @param {boolean} isOpen - Contrôle la visibilité du panneau.
 * @param {function} onClose - Fonction pour fermer le panneau.
 */
export default function SyndicateNotificationsPanel({ isOpen, onClose }) {
    const { t } = useTranslation();

    // Données factices pour l'exemple
    const notifications = [
        { icon: Calendar, title: 'Nouvelle réunion', message: 'Réunion mensuelle prévue pour demain à 10h', time: 'Il y a 5 minutes', type: 'info' },
        { icon: CheckCircle, title: 'Cotisation reçue', message: 'Votre cotisation du mois a été validée avec succès.', time: 'Il y a 30 minutes', type: 'success' },
        { icon: AlertCircle, title: 'Rappel important', message: 'N\'oubliez pas de voter pour les nouvelles propositions.', time: 'Il y a 1 heure', type: 'warning' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Fond semi-transparent qui ferme le panneau au clic */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/30 z-30"
                    />

                    {/* Le panneau lui-même */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-800 shadow-2xl z-40 border-l dark:border-gray-700 flex flex-col"
                        aria-modal="true"
                        role="dialog"
                        aria-labelledby="notification-panel-title"
                    >
                        {/* Header du Panneau */}
                        <div className="p-4 sm:p-6 border-b dark:border-gray-700 flex justify-between items-center flex-shrink-0">
                            <h3 id="notification-panel-title" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Bell />
                                {t('notifications.title')}
                            </h3>
                            <motion.button 
                                onClick={onClose} 
                                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Fermer le panneau de notifications"
                            >
                                <X size={20} />
                            </motion.button>
                        </div>

                        {/* Contenu du Panneau */}
                        {notifications.length > 0 ? (
                            <div className="flex-grow p-4 sm:p-6 space-y-4 overflow-y-auto">
                                <AnimatePresence>
                                {notifications.map((notification, index) => (
                                    <NotificationCard key={index} {...notification} />
                                ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                                <Bell className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Aucune notification</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vous êtes à jour.</p>
                            </div>
                        )}
                        

                        {/* Pied de Panneau */}
                        <div className="p-4 sm:p-6 border-t dark:border-gray-700 flex-shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
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