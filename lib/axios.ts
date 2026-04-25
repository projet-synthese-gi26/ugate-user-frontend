import axios from "axios";

export const ADMIN_DASHBOARD_URL =
    process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_URL ??
    "https://ugate-dev.yowyob.com/admin";

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;
const UGATE_BASE_URL = process.env.NEXT_PUBLIC_UGATE_API_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!AUTH_BASE_URL || !UGATE_BASE_URL) {
    console.warn("⚠️ Attention : Les variables d'environnement API ne sont pas configurées !");
}

export const authApi = axios.create({
    baseURL: AUTH_BASE_URL || API_BASE_URL,
    withCredentials: false,
});

export const ugateApi = axios.create({
    baseURL: UGATE_BASE_URL || API_BASE_URL,
    withCredentials: false,
});

// --- 🔐 FONCTION SÉCURISÉE POUR RÉCUPÉRER LE TOKEN ---
const getAccessToken = () => {
    if (typeof window === "undefined") return null;

    try {
        // 1. Lire le stockage généré par Zustand
        const storageStr = localStorage.getItem("ugate-auth-storage");
        if (storageStr) {
            const storageObj = JSON.parse(storageStr);
            // La structure de Zustand persist est { state: { accessToken: "..." }, version: 0 }
            if (storageObj?.state?.accessToken) {
                return storageObj.state.accessToken;
            }
        }
    } catch (error) {
        console.error("Erreur lors de l'extraction du token depuis Zustand", error);
    }

    // 2. Fallback (au cas où un vieux token traîne directement dans le localstorage)
    return localStorage.getItem("accessToken");
};

// --- INTERCEPTEUR AUTH API ---
authApi.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// --- INTERCEPTEUR U-GATE API ---
ugateApi.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});