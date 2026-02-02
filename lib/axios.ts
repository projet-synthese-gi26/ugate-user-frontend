import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/lib/store';

// Récupération des URLs distinctes
// Si la variable n'est pas dans le .env, on fallback sur localhost pour le débug
const AUTH_API_URL = process.env.NEXT_PUBLIC_API_AUTH_URL || 'https://auth-service.pynfi.com';
const UGATE_API_URL = process.env.NEXT_PUBLIC_API_UGATE_URL || 'https://ugate.pynfi.com';

// 1. Instance pour l'Authentification (TraMaSys)
export const authApi = axios.create({
    baseURL: AUTH_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// 2. Instance pour le Business (U-Gate)
export const ugateApi = axios.create({
    baseURL: UGATE_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// --- Intercepteur de Requête (Injecte le Token JWT partout) ---
const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken;
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

// On applique l'intercepteur aux DEUX instances
authApi.interceptors.request.use(authInterceptor);
ugateApi.interceptors.request.use(authInterceptor);

// --- Intercepteur de Réponse (Gère l'expiration de session 401) ---
const errorInterceptor = async (error: AxiosError) => {
    if (error.response?.status === 401) {
        const { isAuthenticated, logout } = useAuthStore.getState();
        if (isAuthenticated) {
            console.warn("Session expirée. Déconnexion...");
            logout();
            // Optionnel : Rediriger vers login si nécessaire via window.location
        }
    }
    return Promise.reject(error);
};

authApi.interceptors.response.use((response) => response, errorInterceptor);
ugateApi.interceptors.response.use((response) => response, errorInterceptor);