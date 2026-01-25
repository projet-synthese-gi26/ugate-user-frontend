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
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    if (!isMounted) return <div className="fixed inset-0 bg-white flex items-center justify-center">Chargement...</div>;

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <SyndicateSidebar 
                isCollapsed={!isSidebarOpen} 
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
                syndicateData={initialSyndicateData}
            />

            <div className="flex-1 flex flex-col relative min-w-0">
                {/* 
                   LE HEADER : 
                   Il est maintenant en position ABSOLUTE ou FIXED 
                   pour ne pas pousser le contenu.
                */}
                <SyndicateHeader 
                    syndicateData={initialSyndicateData}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                    isCollapsed={isHeaderCollapsed}
                    isSidebarOpen={isSidebarOpen}
                />

                {/* 
                   ZONE DE SCROLL :
                   On ajoute un padding-top (pt-[224px]) qui correspond à la hauteur 
                   MAX du header. Comme ce padding est FIXE, le contenu ne sautera jamais.
                */}
                <div 
                    className="flex-1 overflow-y-auto"
                    onScroll={(e) => {
                        const scrollTop = e.target.scrollTop;
                        // Hystérésis : on sépare les seuils pour éviter le scintillement
                        if (scrollTop > 120) setIsHeaderCollapsed(true);
                        if (scrollTop < 50) setIsHeaderCollapsed(false);
                    }}
                >
                    <main className="pt-[224px] min-h-screen"> 
                        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
                
                <SyndicateNotificationsPanel 
                    isOpen={isNotificationOpen} 
                    onClose={() => setIsNotificationOpen(false)} 
                />
            </div>
        </div>
    );
}