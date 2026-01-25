import axios from 'axios';
import { getCookie, getServerCookie } from '../utils/cookies';

// Côté serveur, on utilise les URLs complètes directement (pas de proxy)
// Côté client, on utilise /api qui passe par le proxy Next.js
const getBaseURL = () => {
    if (typeof window === 'undefined') {
        // Côté serveur - URL complète
        return 'https://ugate.pynfi.com';
    }
    // Côté client - proxy Next.js
    return '/api';
};

const syndicatesInstance = axios.create({
    baseURL: 'https://ugate.pynfi.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fonction pour obtenir le token (côté client ou serveur)
const getToken = async () => {
    if (typeof window !== 'undefined') {
        // Côté client: localStorage d'abord, puis cookie
        return localStorage.getItem('accessToken') || getCookie('accessToken');
    } else {
        // Côté serveur: lire depuis les cookies
        return await getServerCookie('accessToken');
    }
};

// Intercepteur pour injecter le token dans chaque requête (côté client uniquement)
syndicatesInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken') || getCookie('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Fonction wrapper pour les appels côté serveur
export const serverFetch = async (method, url, data = null, config = {}) => {
    const token = await getToken();
    const headers = {
        ...config.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    return syndicatesInstance.request({
        method,
        url,
        data,
        ...config,
        headers,
    });
};

syndicatesInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            if (typeof window !== 'undefined' && !window.location.pathname.endsWith('/login')) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                localStorage.removeItem('email');
                localStorage.removeItem('userId');

                const path = window.location.pathname;
                const locale = path.split('/')[1] || 'fr';
                window.location.href = `/${locale}/login`;
            }
        }
        return Promise.reject(error);
    }
);

export default syndicatesInstance;
