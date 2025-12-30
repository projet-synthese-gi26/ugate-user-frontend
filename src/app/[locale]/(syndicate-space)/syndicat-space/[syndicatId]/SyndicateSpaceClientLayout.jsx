"use client";

import { useState } from 'react';
import SyndicateSidebar from '@/components/syndicate-space/SyndicateSidebar';
import SyndicateHeader from '@/components/syndicate-space/SyndicateHeader';
import SyndicateNotificationsPanel from '@/components/syndicate-space/SyndicateNotificationsPanel';



export default function SyndicateSpaceClientLayout({ children, syndicateData }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Sidebar de navigation */}
            <SyndicateSidebar
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                syndicateData={syndicateData}
            />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header avec Bannière */}
                <SyndicateHeader
                    syndicateData={syndicateData}
                    onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                    isCollapsed={isSidebarCollapsed}
                />

                {/* Contenu Principal (Pages) */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto h-full">
                        {children}
                    </div>
                </main>
            </div>

            {/* Panneau latéral de notifications */}
            <SyndicateNotificationsPanel
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
            />
        </div>
    );
}
