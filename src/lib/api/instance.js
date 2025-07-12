import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://167.235.62.116:7014/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour ajouter le token JWT à chaque requête sortante.
axiosInstance.interceptors.request.use(
    (config) => {
        // Lecture du token depuis le localStorage
        const token = localStorage.getItem('token');
        
        console.log("Interceptor: Token from localStorage:", token);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log("Interceptor: Authorization header set.");
        } else {
            console.warn("Interceptor: No token found in localStorage.");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// L'intercepteur de réponse pour la redirection en cas de 401/403
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.error(`Interceptor: Authentication/Authorization error (${error.response.status}). Removing token and redirecting to login.`);
            localStorage.removeItem('token'); // Nettoie le token invalide
            if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;