"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { getAllSyndicatesAPI } from "@/lib/api/syndicates";
import ExplorerClient from "@/components/explorer/ExplorerClient";
import ExploreHeader from "@/components/explorer/ExploreHeader";

export default function ExplorerPage() {
    const { t } = useTranslation();

    const [syndicates, setSyndicates] = useState([]);
    const [page, setPage] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const loadSyndicates = async (pageNum) => {
        if (isLoading) return;
        
        // Empêche de charger plus si on sait qu'il n'y a plus de pages
        if (pageNum > 0 && !hasNextPage) {
            toast.success("Vous avez atteint la fin de la liste !");
            return;
        }

        setIsLoading(true);

        try {
            const data = await getAllSyndicatesAPI(pageNum, 12);
            if (pageNum === 0) {
                setSyndicates(data.content); // Pour une nouvelle recherche, on remplace
            } else {
                setSyndicates(prev => [...prev, ...data.content]); // Sinon, on ajoute
            }
            setHasNextPage(data.hasNext);
            setPage(pageNum + 1);
        } catch (error) {
            console.error("Impossible de charger plus de syndicats", error);
            toast.error("Une erreur est survenue lors du chargement.");
        } finally {
            setIsLoading(false);
            if (isInitialLoad) setIsInitialLoad(false);
        }
    };

    useEffect(() => {
        // Charge la première page au montage
        loadSyndicates(0);
    }, []);

    if (isInitialLoad) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <ExploreHeader syndicatesCount={syndicates.length} t={t} />

                <ExplorerClient initialSyndicates={syndicates} />

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
                                    Chargement...
                                </span>
                            ) : (
                                "Charger plus"
                            )}
                        </motion.button>
                    ) : (
                        syndicates.length > 0 && <p className="text-gray-500">Vous avez atteint la fin de la liste.</p>
                    )}
                </div>
            </div>
        </div>
    );
}