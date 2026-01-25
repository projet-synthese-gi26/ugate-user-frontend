import axios from 'axios';

const UGATE_URL = 'https://ugate.pynfi.com';
const AUTH_URL = 'https://auth-service.pynfi.com/api';

export const ugateInstance = axios.create({
    baseURL: UGATE_URL,
    timeout: 15000,
});

export const getAuthToken = async () => {
    if (typeof window === 'undefined') {
        try {
            const { cookies } = await import('next/headers');
            const cookieStore = await cookies();
            // On essaie de récupérer 'accessToken'
            const token = cookieStore.get('accessToken')?.value;
            return token || null;
        } catch (e) {
            return null;
        }
    }
    return typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
};

// Intercepteur pour les appels navigateurs
ugateInstance.interceptors.request.use(async (config) => {
    const token = await getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const serverFetch = async (method, url, data = null, config = {}) => {
    try {
        const token = await getAuthToken();
        const headers = {
            ...config.headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        };
        return await ugateInstance.request({ method, url, data, ...config, headers });
    } catch (error) {
        // IMPORTANT : On rejette l'erreur pour qu'elle soit attrapée par le try/catch du composant
        return Promise.reject(error);
    }
};

export default axios.create({ baseURL: AUTH_URL, timeout: 15000 });