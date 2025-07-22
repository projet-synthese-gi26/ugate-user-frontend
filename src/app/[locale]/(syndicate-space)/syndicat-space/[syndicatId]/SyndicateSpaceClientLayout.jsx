"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";
import { FullPageLoader } from "@/components/syndicate-space/SyndicateSpaceLoader";

export default function SyndicateSpaceClientLayout({ children, syndicateData: initialSyndicateData }) {
    const pathname = usePathname();
    
    // État pour savoir si la sidebar est ouverte ou fermée (non "collapsed")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    // État pour s'assurer que le composant est monté côté client avant de rendre des choses complexes
    // Cela prévient les problèmes d'hydratation
    const [isMounted, setIsMounted] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [previousPath, setPreviousPath] = useState(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Gérer le loading entre les pages
    useEffect(() => {
        if (previousPath && previousPath !== pathname) {
            setIsPageLoading(true);
            
            // Simuler un délai de chargement réaliste
            const timer = setTimeout(() => {
                setIsPageLoading(false);
            }, 500);

            return () => clearTimeout(timer);
        }
        setPreviousPath(pathname);
    }, [pathname, previousPath]);

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
        <div className="flex h-screen bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
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
                <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-800/50 transition-colors duration-300">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <AnimatePresence mode="wait">
                            {isPageLoading ? (
                                <FullPageLoader text="Chargement de la section..." />
                            ) : (
                                <div className="animate-fade-in max-w-7xl mx-auto">
                                    {children}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </main>
                <SyndicateNotificationsPanel 
                    isOpen={isNotificationOpen} 
                    onClose={() => setIsNotificationOpen(false)} 
                />
            </div>
        </div>
    );
}