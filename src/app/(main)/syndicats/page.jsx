// src/app/(main)/syndicats/page.jsx
// Note: Ce fichier est un Server Component. On ne peut pas utiliser de hooks comme `useEffect`.
// L'appel doit être direct. Mais comme l'appel dépend d'une donnée client (localStorage),
// on est obligé de le faire dans un Client Component.

// On va donc transformer la page en Client Component.
"use client";

import { useState, useEffect } from "react";
import MySyndicatesHeader from "@/components/syndicats/SyndicateHeader";
import SyndicateList from "@/components/syndicats/SyndicateList";
import { getMySyndicatesAPI } from "@/lib/api/syndicates"; // Import de la fonction API

export default function MySyndicatesPage() { 
    const [syndicates, setSyndicates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSyndicates = async () => {
            try {
                const data = await getMySyndicatesAPI();
                setSyndicates(data);
            } catch (error) {
                // Gérer l'erreur (ex: afficher un toast)
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyndicates();
    }, []);

    if (isLoading) {
        return <div>Chargement de vos syndicats...</div>; // Mettre un spinner ici
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <MySyndicatesHeader />
                
                {/* On passe les données récupérées au composant qui gère la liste */}
                <SyndicateList initialSyndicates={syndicates} />
            </div>
        </div>
    );
}