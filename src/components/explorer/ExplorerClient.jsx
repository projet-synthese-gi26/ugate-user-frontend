"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Search, Filter, AlertCircle, RefreshCw, Loader2 } from "lucide-react";
import ExploreCard from "./ExploreCard";
import AdhesionModal from "./AdhesionModal";
import { getAllSyndicatesAPI } from "@/lib/api/syndicates";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function ExplorerClient({ initialSyndicates, initialHasNextPage }) {
    const t = useTranslations('explorer_page');
    const router = useRouter();

    const [syndicates, setSyndicates] = useState(initialSyndicates);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("members");
    const [selectedSyndicat, setSelectedSyndicat] = useState(null);
    const [isAdhesionModalOpen, setIsAdhesionModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const filteredAndSortedSyndicates = useMemo(() => {
        let filtered = syndicates.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filterType !== "all") {
            filtered = filtered.filter(s => s.type === filterType);
        }
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "name": return a.name.localeCompare(b.name);
                case "members": default: return (b.memberCount || 0) - (a.memberCount || 0);
            }
        });
    }, [syndicates, searchTerm, filterType, sortBy]);

    const handleLoadMore = async () => {
        if (!hasNextPage || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const data = await getAllSyndicatesAPI(page, 12);
            setSyndicates(prev => [...prev, ...data.content]);
            setHasNextPage(data.hasNext);
            setPage(prev => prev + 1);
        } catch (error) {
            toast.error("Impossible de charger plus de syndicats.");
        } finally {
            setIsLoadingMore(false);
        }
    };

    const handleAdhesion = (syndicat) => {
        setSelectedSyndicat(syndicat);
        setIsAdhesionModalOpen(true);
    };

    const handleDetails = (syndicat) => {
        router.push(`/explorer/${syndicat.id}`);
    };

    return (
        <>
            <motion.div className="mb-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="relative mb-4">
                    <input type="text" placeholder={t("explorer_page.search_placeholder")} className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50 transition-all text-lg" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6"/>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    {/* Filtres... */}
                </div>
            </motion.div>
            <AnimatePresence>
                {filteredAndSortedSyndicates.length > 0 ? (
                    <motion.div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" variants={containerVariants} initial="hidden" animate="visible">
                        {filteredAndSortedSyndicates.map((syndicat) => (
                            <ExploreCard key={syndicat.id} syndicat={syndicat} itemVariants={itemVariants} onDetails={handleDetails} onAdhere={handleAdhesion} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div key="empty-state" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6"><Search className="w-12 h-12 text-gray-400 dark:text-gray-500" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("explorer_page.no_results_title")}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{t("explorer_page.no_results_description")}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="text-center mt-12">
                {hasNextPage && (
                    <motion.button onClick={handleLoadMore} disabled={isLoadingMore} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors" whileHover={{ scale: 1.05 }}>
                        {isLoadingMore ? <span className="flex items-center"><Loader2 className="w-5 h-5 mr-2 animate-spin" />Chargement...</span> : "Charger plus"}
                    </motion.button>
                )}
            </div>

            <AdhesionModal isOpen={isAdhesionModalOpen} onClose={() => setIsAdhesionModalOpen(false)} syndicat={selectedSyndicat} />
        </>
    );
}