"use client";

import { useState, useEffect } from "react";
import MySyndicatesHeader from "@/components/syndicats/SyndicateHeader";
import SyndicateList from "@/components/syndicats/SyndicateList";
import { getMySyndicatesAPI } from "@/lib/api/syndicates";
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react'; // Import de l'icône de chargement

export default function MySyndicatesPage() { 
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log("MySyndicatesPage: Rendu du composant.");

    useEffect(() => {
        console.log("MySyndicatesPage: useEffect déclenché.");

        const fetchSyndicates = async () => {
            try {
                console.log("MySyndicatesPage: Appel de getMySyndicatesAPI...");
                const data = await getMySyndicatesAPI();
                console.log("MySyndicatesPage: Données reçues :", data);
                setSyndicates(data);
            } catch (error) {
                console.error("MySyndicatesPage: Erreur lors de la récupération des syndicats :", error.message);
                toast.error("Impossible de charger vos syndicats.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, []);

    if (isLoading) {
        return (
            // Conteneur centré pour le spinner
            <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
                <div className="text-center">
                    {/* Icône du spinner avec une animation de rotation */}
                    <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-500" />
                    <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        Chargement de vos syndicats...
                    </p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                <SyndicateList initialSyndicates={syndicates} />
            </div>
        </div>
    );
}