"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import { toast } from 'react-hot-toast';
import UserContext from "@/context/UserContext";
import NavigationLoader from "@/components/shared/NavigationLoader";
import { logout } from "@/lib/api/auth"; // Importer la fonction de déconnexion

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        // Lire directement les données utilisateur depuis le localStorage
        try {
            const userJson = localStorage.getItem('user');
            if (userJson) {
                setUserData(JSON.parse(userJson));
            } else {
                // Si l'utilisateur n'est pas dans le localStorage, la session est invalide
                throw new Error("Données utilisateur non trouvées");
            }
        } catch (error) {
            console.error("Erreur de chargement de la session utilisateur:", error);
            toast.error("Votre session est invalide ou a expiré. Veuillez vous reconnecter.");
            // L'intercepteur Axios redirigera, mais on peut forcer ici pour plus de réactivité
            logout();
        } finally {
            setLoadingUser(false);
        }
    }, []);

    if (loadingUser) {
        return <NavigationLoader />;
    }
    
    // Si après le chargement, les données utilisateur ne sont toujours pas là, ne rien rendre.
    // La redirection via logout() aura déjà été initiée.
    if (!userData) {
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