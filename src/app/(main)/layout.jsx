"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import { getAuthenticatedUserProfile } from "@/lib/api/user";
import { toast } from 'react-hot-toast';
import UserContext from "@/context/UserContext";
import NavigationLoader from "@/components/shared/NavigationLoader";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getAuthenticatedUserProfile();
                setUserData(profile);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                toast.error("Impossible de charger les données de votre session.");
                // La redirection vers /login est gérée par l'intercepteur Axios
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loadingUser) {
        return <NavigationLoader />;
    }

    return (
        <UserContext.Provider value={{ user: userData, isLoading: loadingUser, setUser: setUserData }}>
            <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/5">
                <AppHeader
                    isSidebarOpen={isSidebarOpen}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                />

                <div className="flex flex-1 overflow-hidden">
                    <AppSidebar isOpen={isSidebarOpen} />
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        {children}
                    </main>
                    <NotificationsPanel
                        isOpen={isNotificationOpen}
                        onClose={() => setIsNotificationOpen(false)}
                    />
                </div>
            </div>
        </UserContext.Provider>
    );
}