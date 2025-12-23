import axios from './instance';

export const loginWithIdentifier = async (identifier, password) => {
    const response = await axios.post('/auth/login', { identifier, password });
    if (response.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const registerWithEmail = async (userData) => {
    // Note: This needs to be adapted if the registration endpoint has changed
    const response = await axios.post('/auth/register', userData);
    if (response.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const updateUser = async (userId, userData) => {
    // L'intercepteur Axios injectera automatiquement le token Bearer
    const response = await axios.put(`/users/${userId}`, userData);
    
    // Mettre à jour les informations utilisateur dans le localStorage si la réponse contient des données
    if (response.data) {
        // Récupérer l'objet utilisateur existant pour conserver les infos non modifiées (rôles, etc.)
        const existingUser = JSON.parse(localStorage.getItem('user')) || {};
        const updatedUser = { ...existingUser, ...response.data };
        localStorage.setItem('user', JSON.stringify(updatedUser));
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
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('email'); // Nettoyage de l'ancienne clé
    
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