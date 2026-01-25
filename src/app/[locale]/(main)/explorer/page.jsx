"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { getAllSyndicatesAPI } from "@/lib/api/syndicates";
import ExplorerClient from "@/components/explorer/ExplorerClient";
import ExploreHeader from "@/components/explorer/ExploreHeader";

export default function ExplorerPage() {
    const t = useTranslations();

    const [syndicates, setSyndicates] = useState([]);
    const [page, setPage] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [totalElements, setTotalElements] = useState(0);

    const loadSyndicates = async (pageNum) => {
        if (isLoading) return;

        if (pageNum > 0 && !hasNextPage) {
            toast.success(t('explorer_page.end_of_list_toast', "Vous avez atteint la fin de la liste !"));
            return;
        }

        setIsLoading(true);

        try {
            const data = await getAllSyndicatesAPI(pageNum, 12);
            if (pageNum === 0) {
                setSyndicates(data.content || []);
            } else {
                setSyndicates(prev => [...prev, ...(data.content || [])]);
            }
            // Vérifie s'il y a une page suivante basé sur totalPages et page actuelle
            const hasMore = (pageNum + 1) < (data.totalPages || 0);
            setHasNextPage(hasMore);
            setTotalElements(data.totalElements || 0);
            setPage(pageNum + 1);
        } catch (error) {
            console.error("Impossible de charger plus de syndicats", error);
            toast.error(t('explorer_page.load_more_error_toast', "Une erreur est survenue lors du chargement."));
        } finally {
            setIsLoading(false);
            if (isInitialLoad) setIsInitialLoad(false);
        }
    };

    useEffect(() => {
        loadSyndicates(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isInitialLoad) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <ExploreHeader syndicatesCount={totalElements} t={t} />

                <ExplorerClient syndicates={syndicates} />

                <div className="text-center mt-12">
                    {hasNextPage ? (
                        <motion.button
                            onClick={() => loadSyndicates(page)}
                            disabled={isLoading}
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    {t('common.loading_dots', "Chargement...")}
                                </span>
                            ) : (
                                t('explorer_page.load_more_button', "Charger plus")
                            )}
                        </motion.button>
                    ) : (
                        syndicates.length > 0 && <p className="text-gray-500">{t('explorer_page.end_of_list_message', "Vous avez atteint la fin de la liste.")}</p>
                    )}
                </div>
            </div>
        </div>
    );
}