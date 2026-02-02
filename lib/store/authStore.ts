import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthResponse } from '@/types/api';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    isPartner: boolean; // Pour savoir si c'est un utilisateur partenaire

    // Actions
    login: (data: AuthResponse, isPartner?: boolean) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isPartner: false,

            login: (data, isPartner = false) => {
                // Sauvegarde le token dans le localStorage pour Axios
                localStorage.setItem('accessToken', data.accessToken);

                set({
                    user: data.user,
                    accessToken: data.accessToken,
                    isAuthenticated: true,
                    isPartner: isPartner,
                });
            },

            logout: () => {
                localStorage.removeItem('accessToken');
                set({ user: null, accessToken: null, isAuthenticated: false, isPartner: false });
            },

            updateUser: (updates) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : null,
                }));
            },
        }),
        {
            name: 'ugate-auth-storage', // Nom de la clé dans le localStorage
        }
    )
);