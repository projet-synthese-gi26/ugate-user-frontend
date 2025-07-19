"use client";

import { useState, useEffect } from "react";
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";

export default function SyndicateSpaceClientLayout({ children, syndicateData: initialSyndicateData }) {
    // État pour savoir si la sidebar est ouverte ou fermée (non "collapsed")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    // État pour s'assurer que le composant est monté côté client avant de rendre des choses complexes
    // Cela prévient les problèmes d'hydratation
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Le handler pour basculer l'état de la sidebar
    const handleToggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // Le handler pour basculer les notifications
    const handleToggleNotifications = () => {
        setIsNotificationOpen(prev => !prev);
    };

    // Tant que le composant n'est pas monté côté client, on peut afficher un loader global
    // ou une version simplifiée pour éviter les erreurs.
    if (!isMounted) {
        // Retourner un loader ici peut être une bonne pratique
        return <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">Chargement de l'espace...</div>;
    }

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900/95 dark:to-black">
            {/* 
                CORRECTION : La prop pour SyndicateSidebar est `isCollapsed`.
                Sa valeur doit être l'inverse de `isSidebarOpen`.
            */}
            <SyndicateSidebar 
                isCollapsed={!isSidebarOpen} 
                onToggle={handleToggleSidebar} 
                syndicateData={initialSyndicateData}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <SyndicateHeader 
                    syndicateData={initialSyndicateData}
                    onSidebarToggle={handleToggleSidebar}
                    onNotificationToggle={handleToggleNotifications}
                />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
                <SyndicateNotificationsPanel 
                    isOpen={isNotificationOpen} 
                    onClose={() => setIsNotificationOpen(false)} 
                />
            </div>
        </div>
    );
}