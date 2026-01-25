// src/lib/auth/accountService.js

import { cookies } from 'next/headers'; 
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'; 

// IMPORTANT : Doit être le même nom que dans ton fichier auth.js (accessToken)
const TOKEN_COOKIE_NAME = 'accessToken'; 

// =============================================
// == FONCTIONS DE GESTION DE SESSION (CLIENT) ==
// =============================================

export const saveSession = (token) => {
    if (typeof window === 'undefined') return;
    Cookies.set(TOKEN_COOKIE_NAME, token, {
        expires: 1,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
};

export const logout = () => {
    if (typeof window === 'undefined') return;
    Cookies.remove(TOKEN_COOKIE_NAME);
    localStorage.clear(); // On nettoie tout par sécurité
};

// =============================================
// == FONCTIONS DE LECTURE DU TOKEN (UNIVERSELLES) ==
// =============================================

/**
 * Récupère le token depuis les cookies.
 * CORRIGÉ POUR NEXT.JS 15
 */
export const getToken = async () => {
    if (typeof window === 'undefined') {
        // Côté Serveur : Utilisation obligatoire de await cookies() en Next.js 15
        try {
            const cookieStore = await cookies(); 
            return cookieStore.get(TOKEN_COOKIE_NAME)?.value;
        } catch (error) {
            console.error("Erreur serveur cookies:", error);
            return undefined;
        }
    } else {
        // Côté Client : On vérifie localStorage puis Cookie
        return localStorage.getItem(TOKEN_COOKIE_NAME) || Cookies.get(TOKEN_COOKIE_NAME);
    }
};

/**
 * Décode le token JWT pour obtenir le payload.
 */
export const getDecodedToken = async () => {
    const token = await getToken();
    if (!token) return null;
    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
};

// =============================================
// == FONCTIONS HELPERS ==
// =============================================

export const getUserIdFromToken = async () => {
    const decoded = await getDecodedToken();
    return decoded?.sub || decoded?.id || null;
};

export const getEmailToken = async () => {
    const decoded = await getDecodedToken();
    return decoded?.email || null;
};

export const getRoleFromToken = async () => {
    const decoded = await getDecodedToken();
    if (!decoded) return null;
    const roles = decoded.roles || decoded.authorities;
    return Array.isArray(roles) ? roles[0] : roles;
};

export const isAuthenticated = async () => {
    const token = await getToken();
    return !!token;
};