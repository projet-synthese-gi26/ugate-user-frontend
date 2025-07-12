// src/lib/api/auth.js
import axios from './instance';
import Cookies from 'js-cookie';

/**
 * Appelle l'API de connexion et stocke le token JWT en cas de succès.
 */
export const loginWithEmail = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', { email, password });
        if (response.data && response.data.token) {
            // Stocke le token dans un cookie pour la persistance de la session.
            // `expires: 1` signifie 1 jour. `secure` et `sameSite` sont importants pour la sécurité.
            Cookies.set('token', response.data.token, { expires: 1, secure: process.env.NODE_ENV === 'production', sameSite: 'Lax' });
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Appelle l'API d'inscription et stocke le token JWT en cas de succès (si l'API le retourne).
 */
export const registerWithEmail = async (userData) => {
    try {
        const response = await axios.post('/auth/register', userData);
        if (response.data && response.data.token) {
            Cookies.set('token', response.data.token, { expires: 1, secure: process.env.NODE_ENV === 'production', sameSite: 'Lax' });
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Supprime le token JWT des cookies pour déconnecter l'utilisateur.
 */
export const logout = () => {
    Cookies.remove('token');
};