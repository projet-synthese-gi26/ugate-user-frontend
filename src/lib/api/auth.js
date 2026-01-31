import axios from './instance';
//import axios from 'axios';
import { getUserSyndicatesAPI } from './syndicates';
import { getMySyndicatesAPI } from './syndicates';
import { setCookie, deleteCookie } from '../utils/cookies';

export const loginWithIdentifier = async (identifier, password) => {
   // const response = await axios.post('/auth/login', { identifier, password });
   const response = await axios.post('https://auth-service.pynfi.com/api/auth/login', { 
    identifier, 
    password 
});
if (response.data?.accessToken) {
        const token = response.data.accessToken;
        
        // 2. STOCKAGE IMMÉDIAT
        localStorage.setItem('accessToken', token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setCookie('accessToken', token, 7);

        // 3. RÉCUPÉRATION DU SYNDICAT (OPTIONNEL ET SÉCURISÉ)
        try {
            const mySyndicates = await getMySyndicatesAPI();
            if (mySyndicates && mySyndicates.length > 0) {
                const assignedId = mySyndicates[0].id;
                localStorage.setItem('syndicatId', assignedId);
                response.data.assignedSyndicatId = assignedId;
            }
        } catch (e) {
            console.warn("L'utilisateur n'a pas encore de syndicat assigné.");
        }
    }
    return response.data;
};
export const registerWithEmail = async (userData, profileFile = null) => {
    const formData = new FormData();

    // 1. On prépare l'objet 'data' tel que demandé par Swagger
    // On le transforme en Blob JSON pour que le backend le reconnaisse comme du JSON
    const dataBlob = new Blob([JSON.stringify(userData)], {
        type: 'application/json'
    });
    
    formData.append('data', dataBlob);

    // 2. On ajoute le fichier s'il existe
    if (profileFile) {
        formData.append('file', profileFile);
    }

    // 3. Envoi avec axios
    const response = await axios.post('/auth/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    // Logique des cookies (inchangée)
    if (response.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setCookie('accessToken', response.data.accessToken, 7);
        setCookie('refreshToken', response.data.refreshToken, 30);
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
    localStorage.removeItem('syndicatId');
    localStorage.removeItem('email'); // Nettoyage de l'ancienne clé
    // Supprimer aussi les cookies
    deleteCookie('accessToken');
    deleteCookie('refreshToken');

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