// src/components/syndicate-profile/ProfileMembers.jsx
"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Affiche les membres de l'équipe directrice avec pagination.
 * @param {Array} members - Le tableau des objets membres.
 */
export default function ProfileMembers({ members }) {
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 4;

    if (!members || members.length === 0) {
        return <p className="text-gray-500 dark:text-gray-400">Aucun membre de l'équipe à afficher.</p>;
    }

    const totalPages = Math.ceil(members.length / membersPerPage);
    const paginatedMembers = members.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginatedMembers.map((member, index) => (
                    <motion.div
                        key={member.id || index}
                        className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Image
                            src={member.avatar || "/default-avatar.png"}
                            alt={member.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                        />
                        <div className="ml-4">
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{member.name}</p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center items-center space-x-4">
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page précédente"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </motion.button>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Page {currentPage} / {totalPages}
                    </span>
                    <motion.button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Page suivante"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </motion.button>
                </div>
            )}
        </div>
    );
}