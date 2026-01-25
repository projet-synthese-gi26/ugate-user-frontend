"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from '@/navigation';
import { Search } from "lucide-react";
import ExploreCard from "./ExploreCard";
import AdhesionModal from "./AdhesionModal";

// Variantes d'animation pour la grille
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ExplorerClient({ syndicates = [] }) {
    const t = useTranslations('explorer_page');
    const router = useRouter();

    // --- ÉTATS LOCAUX (Uniquement pour le filtrage et l'UI) ---
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("members");
    const [selectedSyndicat, setSelectedSyndicat] = useState(null);
    const [isAdhesionModalOpen, setIsAdhesionModalOpen] = useState(false);

    // --- LOGIQUE DE FILTRAGE ET TRI ---
    // On utilise directement "syndicates" provenant des props pour être toujours à jour
    const filteredAndSortedSyndicates = useMemo(() => {
        if (!syndicates) return [];

        // 1. Filtrage par recherche
        let filtered = syndicates.filter(s =>
            s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // 2. Filtrage par domaine
        if (filterType !== "all") {
            filtered = filtered.filter(s => s.domain === filterType);
        }

        // 3. Tri
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name": 
                    return (a.name || '').localeCompare(b.name || '');
                case "date": 
                    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
                case "members": 
                default: 
                    return (b.memberCount || 0) - (a.memberCount || 0);
            }
        });
    }, [syndicates, searchTerm, filterType, sortBy]);

    // --- ACTIONS ---
    const handleAdhesion = (syndicat) => {
        setSelectedSyndicat(syndicat);
        setIsAdhesionModalOpen(true);
    };

    const handleDetails = (syndicat) => {
        router.push(`/explorer/${syndicat.id}`);
    };

    return (
        <>
            {/* BARRE DE RECHERCHE ET FILTRES */}
            <motion.div 
                className="mb-12 max-w-4xl mx-auto" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative mb-4">
                    <input 
                        type="text" 
                        placeholder={t("search_placeholder")} 
                        className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg shadow-sm" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6"/>
                </div>

                {/* Tu peux remettre ici tes sélecteurs de Filtre et de Tri si nécessaire */}
            </motion.div>

            {/* GRILLE DES SYNDICATS */}
            <AnimatePresence mode="wait">
                {filteredAndSortedSyndicates.length > 0 ? (
                    <motion.div 
                        key="grid"
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
                    <motion.div 
                        key="empty-state" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {searchTerm ? t("no_results_title") : "Aucun syndicat disponible"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm ? t("no_results_description") : "La liste est actuellement vide."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MODALE D'ADHÉSION */}
            <AdhesionModal 
                isOpen={isAdhesionModalOpen} 
                onClose={() => setIsAdhesionModalOpen(false)} 
                syndicat={selectedSyndicat} 
            />
        </>
    );
}