import axios from 'axios';

const syndicatesInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SYNDICATES_API_URL || 'https://ugate.pynfi.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour injecter le token dans chaque requête
syndicatesInstance.interceptors.request.use(
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
