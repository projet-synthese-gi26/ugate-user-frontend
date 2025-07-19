
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from'react-i18next';
import { Link } from '@/navigation';


function NotificationItem({ title, description, time, icon: Icon, gradient }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, x: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group"
        >
            <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
            <div className="p-4">
                <div className="flex items-start mb-2">
                    <div className={`p-2 mr-3 rounded-lg bg-gradient-to-br ${gradient} text-white`}>
                        <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800 leading-tight">{title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                    </div>
                    <span className="ml-auto text-xs text-gray-500 flex-shrink-0 pl-2">{time}</span>
                </div>
            </div>
        </motion.div>
    );
}


import { notificationsData } from '@/lib/fakeData';

export default function NotificationsPanel({ isOpen, onClose }) {
    const t = useTranslations('dashboard');

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay pour fermer en cliquant à côté */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 z-30"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 h-full w-full max-w-sm bg-gray-50 shadow-2xl z-40 flex flex-col"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="p-4 border-b bg-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-800">{t("notifications.title")}</h3>
                                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Fermer le panneau de notifications">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">{t("notifications.subtitle", { count: notificationsData.length })}</p>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-3">
                            {notificationsData.map((notification) => (
                                <NotificationItem key={notification.id} {...notification} />
                            ))}
                        </div>

                        <div className="p-4 border-t bg-white">
                            <Link href="/notifications" passHref>
                                <div className="w-full py-3 text-center bg-blue-600 text-white rounded-xl font-medium cursor-pointer transition hover:bg-blue-700">
                                    {t("notifications.see_all")}
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};