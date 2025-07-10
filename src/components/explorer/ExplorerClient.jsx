// src/components/explorer/ExplorerClient.jsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';
import { Search, Filter, AlertCircle, RefreshCw } from "lucide-react";
import ExploreCard from "./ExploreCard";
import AdhesionModal from "./AdhesionModal";

// Variantes d'animation pour la grille et les cartes
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ExplorerClient({ initialSyndicates }) {
    const { t } = useTranslation();
    const router = useRouter();

    // États pour l'interactivité
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("members");
    const [selectedSyndicat, setSelectedSyndicat] = useState(null);
    const [isAdhesionModalOpen, setIsAdhesionModalOpen] = useState(false);

    // Dérive les types de syndicats uniques pour le menu déroulant du filtre
    const syndicatTypes = useMemo(() => [...new Set(initialSyndicates.map(s => s.type))], [initialSyndicates]);

    // Logique de filtrage et de tri, ré-exécutée uniquement quand les dépendances changent
    const filteredAndSortedSyndicates = useMemo(() => {
        let filtered = initialSyndicates.filter(s => {
            const term = searchTerm.toLowerCase();
            return (
                s.name.toLowerCase().includes(term) ||
                s.location.toLowerCase().includes(term) ||
                (s.specialties && s.specialties.some(spec => spec.toLowerCase().includes(term)))
            );
        });

        if (filterType !== "all") {
            filtered = filtered.filter(s => s.type === filterType);
        }

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "rating": return (b.rating || 0) - (a.rating || 0);
                case "name": return a.name.localeCompare(b.name);
                case "newest": return (b.founded || 0) - (a.founded || 0);
                case "members":
                default: return (b.members || 0) - (a.members || 0);
            }
        });
    }, [initialSyndicates, searchTerm, filterType, sortBy]);

    // Callbacks pour les interactions des cartes
    const handleAdhesion = (syndicat) => {
        setSelectedSyndicat(syndicat);
        setIsAdhesionModalOpen(true);
    };

    const handleDetails = (syndicat) => {
        // Redirige vers la page de profil dynamique
        router.push(`/explorer/${syndicat.id}`);
    };

    const resetFilters = () => {
        setSearchTerm("");
        setFilterType("all");
        setSortBy("members");
    };

    return (
        <>
            {/* Barre de recherche et filtres */}
            <motion.div
                className="mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder={t("explorer_page.search_placeholder")}
                        className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 transition-all text-lg placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6"/>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center space-x-2">
                            <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400"/>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</span>
                            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                                <option value="all">Tous</option>
                                {syndicatTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trier par:</span>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                                <option value="members">Membres</option>
                                <option value="rating">Note</option>
                                <option value="name">Nom (A-Z)</option>
                                <option value="newest">Plus récent</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        {filteredAndSortedSyndicates.length} résultat(s)
                    </div>
                </div>
            </motion.div>

            {/* Grille des syndicats */}
            <AnimatePresence>
                {filteredAndSortedSyndicates.length > 0 ? (
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredAndSortedSyndicates.map((syndicat) => (
                            <ExploreCard
                                key={syndicat.id}
                                syndicat={syndicat}
                                itemVariants={itemVariants}
                                onDetails={handleDetails}
                                onAdhere={handleAdhesion}
                            />
                        ))}
                    </motion.div>
                ) : (
                    // État vide quand aucun syndicat n'est trouvé après une recherche
                    <motion.div
                        key="empty-state"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {t("explorer_page.no_results_title")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {t("explorer_page.no_results_description")}
                        </p>
                        <motion.button
                            onClick={resetFilters}
                            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
                            whileHover={{ scale: 1.05 }}
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            {t("explorer_page.reset_filters")}
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modale d'adhésion */}
            <AdhesionModal
                isOpen={isAdhesionModalOpen}
                onClose={() => setIsAdhesionModalOpen(false)}
                syndicat={selectedSyndicat}
            />
        </>
    );
}