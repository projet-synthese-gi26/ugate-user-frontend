// src/app/(main)/layout.jsx
"use client";

import { useState, useEffect } from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import AppSidebar from "@/components/dashboard/AppSidebar";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import { getAuthenticatedUserProfile } from "@/lib/api/user"; // Import de la fonction API
import { toast } from 'react-hot-toast'; // Pour afficher des messages d'erreur si le profil ne charge pas

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData, setUserData] = useState(null); // État pour stocker les vraies données utilisateur
    const [loadingUser, setLoadingUser] = useState(true); // État de chargement

    // Effet pour charger les données de l'utilisateur une seule fois au montage
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getAuthenticatedUserProfile();
                setUserData(profile);
                toast.success(`Bienvenue, ${profile.firstName} !`);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                toast.error("Impossible de charger votre profil.");
                // Optionnel: rediriger vers /login si l'erreur est 401/403 (déjà géré par l'intercepteur Axios)
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUserProfile();
    }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois au montage

    // Si les données de l'utilisateur sont en cours de chargement, affiche un loader ou un état vide
    if (loadingUser) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <p className="text-xl text-gray-700">Chargement du tableau de bord...</p>
                {/* Ici tu pourrais mettre un spinner ou ton NavigationLoader si tu le passes en client component */}
            </div>
        );
    }

    // Fallback pour le cas où userData n'est pas chargé (même après loadingUser=false, si fetch échoue par exemple)
    const displayUserData = userData || {
        firstName: "Invité",
        lastName: "",
        profilePictureUrl: "/default-avatar.png", // Image par défaut si aucune donnée
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <AppHeader
                isSidebarOpen={isSidebarOpen}
                userData={displayUserData} // Passe les vraies données à AppHeader
                onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                onNotificationToggle={() => setIsNotificationOpen(false)}
            />

            <div className="flex flex-1 overflow-hidden">
                <AppSidebar isOpen={isSidebarOpen} />

                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {/* Passe les données de l'utilisateur à WelcomeSection aussi */}
                    {children && React.cloneElement(children, { userData: displayUserData })}
                </main>

                <NotificationsPanel
                    isOpen={isNotificationOpen}
                    onClose={() => setIsNotificationOpen(false)}
                />
            </div>
        </div>
    );
}