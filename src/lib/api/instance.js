// src/lib/api/instance.js
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Intercepteur pour ajouter le token à chaque requête sortante (côté client)
api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = Cookies.get('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;