import axios from './instance';

export const loginWithEmail = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

export const registerWithEmail = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

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

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    // Rediriger l'utilisateur en préservant la langue
    if (typeof window !== 'undefined') {
        const locale = getCurrentLocale();
        window.location.href = `/${locale}/login`;
    }
};

export const loginWithGoogle = async (authCode) => {
    return Promise.reject(new Error("Login Google non implémenté."));
};

export const loginWithApple = async (authCode) => {
    return Promise.reject(new Error("Login Apple non implémenté."));
};