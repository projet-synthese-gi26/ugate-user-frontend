import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://auth-service.pynfi.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour injecter le token dans chaque requête
axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken');
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


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            if (typeof window !== 'undefined' && !window.location.pathname.endsWith('/login')) {
                // Nettoyage complet du localStorage
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                localStorage.removeItem('email'); // Au cas où l'ancien est toujours là
                localStorage.removeItem('userId'); // Nettoyer aussi l'ancien userId

                // Redirection vers la page de connexion en gardant la locale
                const path = window.location.pathname;
                const locale = path.split('/')[1] || 'fr';
                window.location.href = `/${locale}/login`;
            }
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;