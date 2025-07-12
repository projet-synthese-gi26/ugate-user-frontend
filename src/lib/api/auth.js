// src/lib/api/auth.js
import axios from './instance';
import Cookies from 'js-cookie';

export const loginWithEmail = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', { email, password });
        
        // La réponse contient maintenant { token: "...", userId: "..." }
        if (response.data) {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            if (response.data.email) {
                localStorage.setItem('email', response.data.email);
                console.log("UserID a été stocké dans le localStorage:", response.data.userId);
            }
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Appelle l'API d'inscription et stocke les informations reçues.
 */
export const registerWithEmail = async (userData) => {
    try {
        const response = await axios.post('/auth/register', userData);
        if (response.data) {
            if (response.data.token) localStorage.setItem('token', response.data.token);
            if (response.data.email) localStorage.setItem('email', response.data.email);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
};


export const loginWithGoogle = async (authCode) => {
    console.warn("Fonction loginWithGoogle non implémentée côté backend.");
    
    return Promise.reject(new Error("Login Google non implémenté pour l'instant.")); // Rejette pour que le toast d'erreur s'affiche
};

/**
 * Simule la connexion avec Apple. Nécessitera une implémentation backend réelle.
 * @param {string} authCode Le code d'autorisation d'Apple.
 * @returns {Promise<object>}
 */
export const loginWithApple = async (authCode) => {
    console.warn("Fonction loginWithApple non implémentée côté backend.");
   
    return Promise.reject(new Error("Login Apple non implémenté pour l'instant.")); // Rejette pour que le toast d'erreur s'affiche
};