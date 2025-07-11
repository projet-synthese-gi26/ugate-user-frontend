"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Affiche une carte pour une seule notification.
 * @param {object} notification - L'objet de notification contenant icône, titre, etc.
 */
const NotificationCard = ({ icon: Icon, title, message, time, type }) => {
    const bgColors = {
        info: 'bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800',
        success: 'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-800',
        warning: 'bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-800',
    };

    const iconColors = {
        info: 'text-blue-500 dark:text-blue-400',
        success: 'text-green-500 dark:text-green-400',
        warning: 'text-yellow-500 dark:text-yellow-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`p-4 rounded-xl border ${bgColors[type] || bgColors.info} transition-all duration-300 hover:shadow-md`}
        >
            <div className="flex items-start">
                <div className={`p-2 rounded-full ${iconColors[type].replace('text-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
                    <Icon className={`w-5 h-5 ${iconColors[type]}`} />
                </div>
                <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{message}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">{time}</span>
                </div>
            </div>
        </motion.div>
    );
};

