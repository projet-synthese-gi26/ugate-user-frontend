import axios from 'axios';
import Cookies from 'js-cookie';

// Fonction utilitaire pour obtenir la langue courante
const getCurrentLocale = () => {
    if (typeof window === 'undefined') return 'fr'; // défaut côté serveur
    
    const path = window.location.pathname;
    const locale = path.split('/')[1];
    
    // Vérifier si c'est une langue supportée
    if (['fr', 'en', 'de'].includes(locale)) {
        return locale;
    }
    return 'fr'; // défaut
};

const axiosInstance = axios.create({
    baseURL: 'http://167.235.62.116:7014/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (typeof window !== 'undefined' && error.response && (error.response.status === 401 || error.response.status === 403)) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            const locale = getCurrentLocale();
            const currentPath = window.location.pathname;
            if (currentPath !== `/${locale}/login`) {
                window.location.href = `/${locale}/login`;
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;