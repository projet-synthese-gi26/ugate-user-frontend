// src/components/syndicate-space/notifications/NotificationCard.jsx
"use client";

import { motion } from 'framer-motion';

/**
 * Affiche une carte pour une seule notification avec un style adapté à son type.
 * @param {React.ComponentType} icon - Le composant icône de lucide-react.
 * @param {string} title - Le titre de la notification.
 * @param {string} message - Le corps du message.
 * @param {string} time - L'horodatage (ex: "Il y a 5 minutes").
 * @param {string} type - Le type de notification ('info', 'success', 'warning').
 */
export default function NotificationCard({ icon: Icon, title, message, time, type }) {
    const bgColors = {
        info: 'bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800/50',
        success: 'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-800/50',
        warning: 'bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-800/50',
    };

    const iconBgColors = {
        info: 'bg-blue-100 dark:bg-blue-800/50',
        success: 'bg-green-100 dark:bg-green-800/50',
        warning: 'bg-yellow-100 dark:bg-yellow-800/50',
    };
    
    const iconTextColors = {
        info: 'text-blue-600 dark:text-blue-300',
        success: 'text-green-600 dark:text-green-300',
        warning: 'text-yellow-600 dark:text-yellow-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`p-4 rounded-xl border ${bgColors[type] || bgColors.info} transition-all duration-300 hover:shadow-md hover:border-transparent`}
        >
            <div className="flex items-start">
                <div className={`flex-shrink-0 p-2 rounded-full ${iconBgColors[type] || iconBgColors.info}`}>
                    <Icon className={`w-5 h-5 ${iconTextColors[type] || iconTextColors.info}`} />
                </div>
                <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{message}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">{time}</span>
                </div>
            </div>
        </motion.div>
    );
};