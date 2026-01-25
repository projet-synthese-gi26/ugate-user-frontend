"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { STATIC_FILES_URL } from '@/lib/constants';

/**
 * Affiche les membres de l'équipe directrice avec pagination.
 * @param {Array} members - Le tableau des objets membres.
 */
export default function ProfileMembers({ members }) {
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 4;

    if (!members || members.length === 0) {
        return <p className="text-gray-500 text-gray-400">Aucun membre de l'équipe à afficher.</p>;
    }

    const totalPages = Math.ceil(members.length / membersPerPage);
    const paginatedMembers = members.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginatedMembers.map((member, index) => {
                    // CORRECTION : On s'assure que l'URL est complète.
                    const avatarUrl = member.userAvatarUrl ? `${STATIC_FILES_URL}${member.userAvatarUrl}` : null;
                    
                    return (
                        <motion.div
                            key={member.userId || index}
                            className="flex items-center p-3 rounded-xl bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* CORRECTION : On utilise avatarUrl et on ajoute un fallback robuste avec le composant SyndicatDefaultAvatar */}
                            {avatarUrl ? (
                                <Image
                                    src={avatarUrl}
                                    // CORRECTION : On utilise `userName` et on ajoute un fallback pour l'attribut alt.
                                    alt={member.userName || 'Avatar du membre'}
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white border-gray-600 shadow-sm"
                                />
                            ) : (
                                <SyndicatDefaultAvatar name={member.userName || '?'} size={56} className="w-14 h-14" />
                            )}
                            <div className="ml-4">
                                {/* CORRECTION : On utilise userName pour le nom. */}
                                <p className="font-semibold text-gray-900 text-gray-100">{member.userName}</p>
                                {/* CORRECTION : On nettoie le nom du rôle pour l'affichage. */}
                                <p className="text-sm text-blue-600 text-blue-400">{member.role.replace('ROLE_', '')}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center items-center space-x-4">
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page précédente"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600 text-gray-400" />
                    </motion.button>
                    <span className="text-sm font-medium text-gray-600 text-gray-400">
                        Page {currentPage} / {totalPages}
                    </span>
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page suivante"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600 text-gray-400" />
                    </motion.button>
                </div>
            )}
        </div>
    );
}