// src/components/syndicats/SyndicateList.jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, AlertCircle, PlusCircle } from "lucide-react";
import SyndicateCard from "./SyndicateCard";
import CreateSyndicateModal from "./CreateSyndicateModal";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

/**
 * Le composant client principal pour la page "Mes Syndicats".
 * Gère la recherche, le filtrage, l'affichage de la liste et la modale de création.
 * @param {Array} initialSyndicates - La liste des syndicats de l'utilisateur, passée par le serveur.
 */
export default function SyndicateList({ initialSyndicates }) {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredSyndicates = useMemo(() => {
        if (!searchTerm) {
            return initialSyndicates;
        }
        return initialSyndicates.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [initialSyndicates, searchTerm]);

    return (
        <>
            {/* Barre de recherche et actions */}
            <motion.div 
                className="mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t("syndicats_page.search_placeholder")}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 transition-all text-lg placeholder-gray-400 dark:placeholder-gray-500 shadow-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6 transition-colors group-focus-within:text-blue-500" />
                </div>
            </motion.div>

            {/* Grille des syndicats ou état vide */}
            <AnimatePresence>
                {filteredSyndicates.length > 0 ? (
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredSyndicates.map((syndicat) => (
                            <SyndicateCard key={syndicat.id} syndicat={syndicat} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty-state"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className="max-w-md mx-auto">
                            <AlertCircle className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {searchTerm ? t("syndicats_page.empty_search_title") : t("syndicats_page.empty_list_title")}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {searchTerm ? t("syndicats_page.empty_search_desc") : t("syndicats_page.empty_list_desc")}
                            </p>
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <PlusCircle className="h-5 w-5 mr-2" />
                                {t("syndicats_page.create_button")}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Le composant de la modale est appelé ici */}
            <CreateSyndicateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}