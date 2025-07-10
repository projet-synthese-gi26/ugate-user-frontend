
"use client";

import { useState } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";


const fakeUserData = {
    firstName: "John",
    lastName: "Doe",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
};

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <AppHeader
                isSidebarOpen={isSidebarOpen}
                userData={fakeUserData}
                onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                onNotificationToggle={() => setIsNotificationOpen(false)} // Ferme le panneau au clic sur la cloche
            />

            <div className="flex flex-1 overflow-hidden">
                <AppSidebar isOpen={isSidebarOpen} />

                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {/* `children` est l'endroit où le contenu de votre `home/page.jsx` sera rendu */}
                    {children}
                </main>

                <NotificationsPanel
                    isOpen={isNotificationOpen}
                    onClose={() => setIsNotificationOpen(false)}
                />
            </div>
        </div>
    );
}