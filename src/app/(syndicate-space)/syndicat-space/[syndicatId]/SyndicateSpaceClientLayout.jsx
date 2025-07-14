"use client";

import { useState } from "react";
import SyndicateHeader from "@/components/syndicate-space/SyndicateHeader";
import SyndicateSidebar from "@/components/syndicate-space/SyndicateSidebar";
import SyndicateNotificationsPanel from "@/components/syndicate-space/SyndicateNotificationsPanel";

export default function SyndicateSpaceClientLayout({ children, syndicateData }) { 
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
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
                    syndicateData={syndicateData}
                />
                <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800/50 p-4 sm:p-6">
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