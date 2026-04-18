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
    withCredentials: true,
});


export const ugateApi = axios.create({
    baseURL: UGATE_BASE_URL || API_BASE_URL,
    withCredentials: true,
});


authApi.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

ugateApi.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});