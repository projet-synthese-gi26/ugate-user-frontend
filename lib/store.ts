import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, AuthResponse, UserType } from '@/lib/types/api';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    userType: UserType;
    isAuthenticated: boolean;

    // Actions
    login: (data: AuthResponse, isPartner?: boolean) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
    setPartnerMode: (userId: string) => void; // Pour le cas spécial "Partenaire"
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            userType: 'VISITOR',

            login: (data, isPartner = false) => {
                set({
                    user: data.user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                    isAuthenticated: true,
                    userType: isPartner ? 'PARTNER' : 'MEMBER',
                });
            },

            logout: () => {
                // Nettoyage manuel du localStorage au cas où
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('ugate-auth-storage');
                }
                set({
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    isAuthenticated: false,
                    userType: 'VISITOR'
                });
            },

            updateUser: (updates) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : null,
                }));
            },

            // Cas spécial : Utilisateur partenaire qui arrive sans login classique
            // On stocke un ID temporaire ou on gère via un token spécial fourni par l'URL
            setPartnerMode: (userId) => {
                // Logique à affiner selon comment le partenaire envoie l'info
                console.log("Mode partenaire activé pour", userId);
                // Ici on pourrait déclencher un fetch vers l'API Auth pour récupérer le token silencieusement
            }
        }),
        {
            name: 'ugate-auth-storage', // Clé dans le localStorage
            storage: createJSONStorage(() => localStorage), // Explicite pour Next.js
            partialize: (state) => ({
                // On choisit ce qu'on sauvegarde dans le navigateur
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
                userType: state.userType
            }),
        }
    )
);