"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import { getAuthenticatedUserProfile } from "@/lib/api/user";
import { toast } from 'react-hot-toast';
import UserContext from "@/context/UserContext"; // Importe notre nouveau contexte

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
                toast.error("Impossible de charger votre profil.");
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loadingUser) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <p className="text-xl text-gray-700">Chargement du tableau de bord...</p>
            </div>
        );
    }

    // Fournit le contexte à tous les composants enfants.
    // La valeur du provider est un objet contenant les données et l'état de chargement.
    return (
        <UserContext.Provider value={{ user: userData, isLoading: loadingUser }}>
            <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <AppHeader
                    isSidebarOpen={isSidebarOpen}
                    userData={userData}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(false)}
                />

                <div className="flex flex-1 overflow-hidden">
                    <AppSidebar isOpen={isSidebarOpen} />

                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        {/* 
                            On affiche simplement les enfants. 
                            Ils utiliseront le hook `useUser` pour obtenir les données.
                            Plus besoin de `React.cloneElement`.
                        */}
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