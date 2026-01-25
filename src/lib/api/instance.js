import axios from 'axios';

const UGATE_URL = 'https://ugate.pynfi.com';
const AUTH_URL = 'https://auth-service.pynfi.com/api';

export const ugateInstance = axios.create({
    baseURL: UGATE_URL,
    timeout: 15000,
});

// Intercepteur unique et simple
ugateInstance.interceptors.request.use(async (config) => {
    let token = null;
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        token = (await cookies()).get('accessToken')?.value;
    } else {
        token = localStorage.getItem('accessToken');
    }
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const serverFetch = (method, url, data = null, config = {}) => {
    return ugateInstance.request({ method, url, data, ...config });
};

export default axios.create({ baseURL: AUTH_URL });