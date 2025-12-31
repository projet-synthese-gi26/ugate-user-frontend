// src/components/syndicate-space/section-chat/NewChatModal.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import Image from 'next/image';
import { STATIC_FILES_URL } from '@/lib/constants';

// Utilitaire pour l'avatar
const getAvatarUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${STATIC_FILES_URL}${url}`;
};

export default function NewChatModal({ isOpen, onClose, users, onSelectUser }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Sécurisation : s'assurer que users est un tableau
    const safeUsers = Array.isArray(users) ? users : [];

    const filteredUsers = safeUsers.filter(user =>
        user.userName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nouvelle discussion</h3>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Search */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Chercher un membre..."
                                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* User List */}
                        <div className="flex-1 overflow-y-auto p-2">
                            {filteredUsers.length === 0 ? (
                                <p className="text-center text-gray-500 py-8 text-sm">Aucun membre trouvé.</p>
                            ) : (
                                filteredUsers.map(user => (
                                    <div
                                        key={user.userId}
                                        onClick={() => onSelectUser(user)}
                                        className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer transition-colors"
                                    >
                                        <div className="relative w-10 h-10 flex-shrink-0">
                                            {user.userAvatarUrl ? (
                                                <Image
                                                    src={getAvatarUrl(user.userAvatarUrl)}
                                                    alt={user.userName}
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                                    {user.userName?.charAt(0)}
                                                </div>
                                            )}
                                            {/* Status dot simulation */}
                                            {user.status === 'ACTIVE' && (
                                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{user.userName}</h4>
                                            <p className="text-xs text-gray-500">{user.role?.replace('ROLE_', '')}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}