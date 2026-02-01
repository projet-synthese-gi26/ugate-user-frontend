"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import UserContext from "@/context/UserContext";
import NavigationLoader from "@/components/shared/NavigationLoader";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        // Lire les données utilisateur depuis le localStorage (si disponibles)
        try {
            const userJson = localStorage.getItem('user');
            if (userJson) {
                setUserData(JSON.parse(userJson));
            }
            // Si pas de données utilisateur, on reste en mode visiteur (userData = null)
            // On ne redirige PAS vers login pour permettre l'accès public
        } catch (error) {
            console.error("Erreur de chargement de la session utilisateur:", error);
            // En cas d'erreur, on continue en mode visiteur
        } finally {
            setLoadingUser(false);
        }
    }, []);

    if (loadingUser) {
        return <NavigationLoader />;
    }

    // On rend la page même sans userData (mode visiteur)
    return (
        <UserContext.Provider value={{ user: userData, isLoading: loadingUser, setUser: setUserData }}>
            <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <AppHeader
                    isSidebarOpen={isSidebarOpen}
                    onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    onNotificationToggle={() => setIsNotificationOpen(!isNotificationOpen)}
                    isAuthenticated={!!userData}
                />

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar visible uniquement pour les utilisateurs connectés */}
                    {userData && <AppSidebar isOpen={isSidebarOpen} />}
                    <main className={`flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 ${!userData ? 'w-full' : ''}`}>
                        {children}
                    </main>
                    {/* Notifications uniquement pour les utilisateurs connectés */}
                    {userData && (
                        <NotificationsPanel
                            isOpen={isNotificationOpen}
                            onClose={() => setIsNotificationOpen(false)}
                        />
                    )}
                </div>
            </div>
        </UserContext.Provider>
    );
}