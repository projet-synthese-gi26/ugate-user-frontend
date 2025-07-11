// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx
"use client";

import { useState } from "react";
// Importez les hooks nécessaires
import { usePathname, useParams } from 'next/navigation'; 
import { motion } from "framer-motion";
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";

const fakeSyndicateData = {
    name: "Syndicat National des Développeurs",
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&q=80&w=1200",
};

// Le layout ne reçoit plus `params` en prop car on va utiliser le hook
export default function SyndicateSpaceLayout({ children }) { 
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    // On utilise les hooks pour obtenir les informations de la route
    const pathname = usePathname();
    const params = useParams(); // <-- Ce hook retourne { syndicatId: '123' }
    const { syndicatId } = params; // <-- C'est maintenant sûr et synchrone

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
            <SyndicateHeader
                syndicateData={fakeSyndicateData}
                onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
            />
            <div className="flex flex-1 overflow-hidden">
                <SyndicateSidebar
                    isCollapsed={isSidebarCollapsed}
                    onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} // On peut ajouter le toggle ici
                    activeRoute={pathname}
                    syndicatId={syndicatId} // On passe l'ID récupéré du hook
                />
                <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
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