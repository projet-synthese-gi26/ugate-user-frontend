// src/lib/api/syndicates.js

// On importe ugateInstance (pour le client) et serverFetch (pour le serveur)
import { ugateInstance, serverFetch } from './instance';

/**
 * Création d'un syndicat
 */
export const createSyndicateAPI = async (formData) => {
    try {
        const response = await ugateInstance.post('/syndicates', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur création syndicat :", error.message);
        throw error;
    }
};

/**
 * Récupère le syndicat lié à l'utilisateur connecté (Route /mine)
 * C'est cette fonction qui permet de rediriger JUDE vers son propre syndicat.
 */
export const getMySyndicatesAPI = async () => {
    try {
        // Cette requête partira avec "Authorization: Bearer <ton_token>"
        const response = await ugateInstance.get('/syndicates/mine');
        return response.data || []; 
    } catch (error) {
        console.error("Erreur lors de la récupération de mon syndicat (mine):", error);
        return [];
    }
};

/**
 * Récupère tous les syndicats (pour la page Explorer)
 */
export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    try {
        const response = await ugateInstance.get('/syndicates', {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des syndicats paginés :", error);
        throw error;
    }
};

/**
 * Récupère les syndicats d'un utilisateur spécifique par son ID
 */
export const getUserSyndicatesAPI = async (userId) => {
    if (!userId) return [];
    try {
        const response = await ugateInstance.get(`/syndicates/user/${userId}`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur getUserSyndicatesAPI:", error.message);
        return [];
    }
};

/**
 * Récupère les détails d'un syndicat (utilisé dans le Layout)
 * Gère le cas Serveur (Next.js 15) et Client
 */
export const getSyndicateDetailsAPI = async (syndicateId) => {
    if (!syndicateId) return null;
    try {
        // 1. Essayer d'abord dans /mine (via serverFetch pour le serveur)
        try {
            const mineResponse = await serverFetch('get', '/syndicates/mine');
            const mySyndicates = mineResponse.data || [];
            const syndicate = mySyndicates.find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {
            // Ignorer l'erreur et tenter la recherche globale
        }

        // 2. Chercher globalement
        try {
            const allResponse = await serverFetch('get', '/syndicates', null, { 
                params: { page: 0, size: 100 } 
            });
            const allData = allResponse.data?.content || allResponse.data || [];
            const syndicate = allData.find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {}

        return null;
    } catch (error) {
        console.error(`Erreur critique récupération syndicat ${syndicateId}:`, error.message);
        return null; 
    }
};

/**
 * Récupère les branches (antennes) d'un syndicat
 */
export const getSyndicateBranchesAPI = async (syndicateId) => {
    try {
        const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
        return response.data || []; 
    } catch (error) {
        console.error("Erreur lors de la récupération des branches:", error);
        return [];
    }
};