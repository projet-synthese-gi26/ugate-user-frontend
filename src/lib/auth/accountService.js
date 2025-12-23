// src/lib/auth/accountService.js

import { cookies } from 'next/headers'; // Spécifique aux Server Components
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'; // Pour une utilisation côté client

const TOKEN_COOKIE_NAME = 'authToken';

// =============================================
// == FONCTIONS DE GESTION DE SESSION (CLIENT) ==
// =============================================

/**
 * Sauvegarde le token JWT dans un cookie sécurisé.
 * À appeler côté client après un login réussi.
 * @param {string} token - Le token JWT à sauvegarder.
 */
export const saveSession = (token) => {
    if (typeof window === 'undefined') {
        throw new Error('saveSession ne peut être appelé que côté client.');
    }
    // 'expires: 1' = expire dans 1 jour. Ajustez selon vos besoins.
    // 'secure: true' = n'envoyer que sur HTTPS en production.
    // 'sameSite: strict' = protection CSRF.
    Cookies.set(TOKEN_COOKIE_NAME, token, {
        expires: 1,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
};

/**
 * Supprime le cookie du token pour déconnecter l'utilisateur.
 * À appeler côté client lors de la déconnexion.
 */
export const logout = () => {
    if (typeof window === 'undefined') {
        throw new Error('logout ne peut être appelé que côté client.');
    }
    Cookies.remove(TOKEN_COOKIE_NAME);
    // Optionnel : rediriger l'utilisateur après la déconnexion
    // window.location.href = '/login';
};


// =============================================
// == FONCTIONS DE LECTURE DU TOKEN (UNIVERSELLES) ==
// =============================================

/**
 * Récupère le token depuis les cookies.
 * Fonctionne à la fois sur le serveur et le client.
 * @returns {Promise<string|undefined>} Le token JWT ou undefined.
 */
export const getToken = async () => {
    if (typeof window === 'undefined') {
        // Côté Serveur : on utilise 'next/headers'
        const cookieStore = cookies();
        return cookieStore.get(TOKEN_COOKIE_NAME)?.value;
    } else {
        // Côté Client : on utilise 'js-cookie'
        return Cookies.get(TOKEN_COOKIE_NAME);
    }
};

/**
 * Décode le token JWT pour obtenir le payload.
 * Retourne null si le token est invalide ou absent.
 * @returns {Promise<object|null>} Le payload du token décodé.
 */
const getDecodedToken = async () => {
    const token = await getToken();
    if (!token) return null;
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Erreur de décodage du token:", error);
        return null;
    }
};


// =============================================
// == FONCTIONS "HELPERS" (CE SONT CELLES QUE VOUS UTILISEREZ LE PLUS) ==
// =============================================
// Ces fonctions remplacent vos anciennes fonctions get...FromToken

/**
 * Récupère une information spécifique depuis le payload du token.
 * @param {string} claim - La clé de l'information à récupérer (ex: 'email', 'given_name').
 * @returns {Promise<any|null>} La valeur de l'information ou null.
 */
const getClaimFromToken = async (claim) => {
    const decoded = await getDecodedToken();
    return decoded ? decoded[claim] : null;
};

// --- Exemples de fonctions helpers spécifiques ---

export const getUserIdFromToken = async () => {
    // Les tokens utilisent souvent 'sub' pour l'ID utilisateur. À adapter selon votre backend.
    return getClaimFromToken('sub');
};

export const getFirstNameToken = async () => {
    // Les tokens utilisent souvent 'given_name'. À adapter.
    return getClaimFromToken('given_name');
};

export const getLastNameToken = async () => {
    // Les tokens utilisent souvent 'family_name'. À adapter.
    return getClaimFromToken('family_name');
};

export const getFullNameFromToken = async () => {
    const decoded = await getDecodedToken();
    if (!decoded) return null;
    // Tente de construire le nom complet de plusieurs manières possibles
    if (decoded.name) return decoded.name;
    if (decoded.given_name && decoded.family_name) return `${decoded.given_name} ${decoded.family_name}`;
    return null;
};

export const getEmailToken = async () => {
    return getClaimFromToken('email');
};

export const getProfilFromToken = async () => {
    // Les tokens utilisent souvent 'picture'. À adapter.
    return getClaimFromToken('picture');
};

export const getRoleFromToken = async () => {
    // La gestion des rôles peut être complexe.
    // Souvent 'roles' ou 'authorities' est un tableau.
    const roles = await getClaimFromToken('roles');
    return Array.isArray(roles) ? roles[0] : roles; // Retourne le premier rôle par défaut
};

/**
 * Vérifie si l'utilisateur est authentifié.
 * @returns {Promise<boolean>}
 */
export const isAuthenticated = async () => {
    const token = await getToken();
    // On pourrait ajouter une vérification de l'expiration ici
    return !!token;
};