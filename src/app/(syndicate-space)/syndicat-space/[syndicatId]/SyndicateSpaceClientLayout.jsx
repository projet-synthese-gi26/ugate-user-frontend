// src/app/(syndicate-space)/syndicat-space/[syndicatId]/SyndicateSpaceClientLayout.jsx

"use client";

import { useState } from "react";
import { usePathname, useParams } from 'next/navigation';
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";

export default function SyndicateSpaceClientLayout({ children, syndicateData }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    const pathname = usePathname();
    const params = useParams();
    const { syndicatId } = params;

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
            <SyndicateHeader
                syndicateData={syndicateData}
                onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
            />
            <div className="flex flex-1 overflow-hidden">
                <SyndicateSidebar
                    isCollapsed={isSidebarCollapsed}
                    onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    activeRoute={pathname}
                    syndicatId={syndicatId}
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