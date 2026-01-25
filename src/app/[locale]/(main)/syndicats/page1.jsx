"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import MySyndicatesHeader from "@/components/syndicats/SyndicateHeader";
import SyndicateList from "@/components/syndicats/SyndicateList";
import { getMySyndicatesAPI } from "@/lib/api/syndicates";

export default function MySyndicatesPage() {
    const t = useTranslations();
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const data = await getMySyndicatesAPI();
                setSyndicates(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des syndicats :", error);
                toast.error(t('syndicats_page.load_error') || "Impossible de charger vos syndicats.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, [t]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600 text-gray-300">
                        {t('syndicats_page.loading_text') || "Chargement de vos syndicats..."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 from-gray-900 via-blue-900/20 to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                <SyndicateList initialSyndicates={syndicates} />
            </div>
        </div>
    );
}