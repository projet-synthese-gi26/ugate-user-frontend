// src/app/(syndicate-space)/syndicat-space/[syndicatId]/layout.jsx
"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";

// Dans une vraie app, ces infos viendraient d'un appel API basé sur syndicatId
const fakeSyndicateData = {
    name: "Syndicat National des Développeurs",
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&q=80&w=1200",
};

export default function SyndicateSpaceLayout({ children, params }) {
    const { syndicatId } = params;
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const pathname = usePathname();

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
                    activeRoute={pathname}
                    syndicatId={syndicatId} // On passe l'ID pour construire les liens
                />
                <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
                    {/* Le contenu de la page active sera inséré ici par Next.js */}
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