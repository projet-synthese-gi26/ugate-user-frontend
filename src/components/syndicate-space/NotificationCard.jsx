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
        info: 'bg-primary-50 bg-primary-900/20 border-primary-100 border-primary-800/30',
        success: 'bg-emerald-50 bg-emerald-900/20 border-emerald-100 border-emerald-800/30',
        warning: 'bg-amber-50 bg-amber-900/20 border-amber-100 border-amber-800/30',
    };

    const iconBgColors = {
        info: 'bg-primary-100 bg-primary-800/30',
        success: 'bg-emerald-100 bg-emerald-800/30',
        warning: 'bg-amber-100 bg-amber-800/30',
    };
    
    const iconTextColors = {
        info: 'text-primary-600 text-primary-400',
        success: 'text-emerald-600 text-emerald-400',
        warning: 'text-amber-600 text-amber-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`p-4 rounded-xl border ${bgColors[type] || bgColors.info} transition-all duration-200 hover:shadow-soft cursor-pointer group`}
        >
            <div className="flex items-start">
                <div className={`flex-shrink-0 p-2.5 rounded-xl ${iconBgColors[type] || iconBgColors.info} group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className={`w-4 h-4 ${iconTextColors[type] || iconTextColors.info}`} />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-neutral-800 text-neutral-100 group-hover:text-neutral-900 group-hover:text-white transition-colors duration-200">
                        {title}
                    </h4>
                    <p className="text-sm text-neutral-600 text-neutral-300 mt-1 leading-relaxed">
                        {message}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-medium text-neutral-500 text-neutral-400">
                            {time}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-current opacity-20"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};