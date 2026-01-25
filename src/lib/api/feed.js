// src/lib/api/feed.js
import { ugateInstance }  from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

/**
 * Récupère le feed personnalisé de l'utilisateur connecté
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getUserFeedAPI = async (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc') => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const response = await ugateInstance.get('/feed', { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer le feed personnalisé');
    }
};

/**
 * Récupère le feed global public
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getGlobalFeedAPI = async (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc', token = null) => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const config = { 
            params,
            // On augmente le timeout spécifiquement pour cet appel
            timeout: 20000 
        };

        if (token) {
            config.headers = { 'Authorization': `Bearer ${token}` };
        }

        const response = await ugateInstance.get('/feed/global', config);
        return processPaginatedResponse(response);

    } catch (error) {
        // ICI : On log l'erreur proprement au lieu de faire "throw"
        // Cela empêche l'apparition du gros bloc d'erreur rouge AggregateError
        console.error('⚠️ Le serveur API est injoignable par votre PC (Timeout).');
        
        // On renvoie une structure vide pour que le dashboard s'affiche quand même
        return { 
            content: [], 
            totalPages: 0, 
            totalElements: 0 
        };
    }
};

/**
 * Récupère le feed d'un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri (défaut: 'createdAt')
 * @param {string} sortDirection - Direction du tri ('asc' ou 'desc')
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getSyndicateFeedAPI = async (syndicateId, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc') => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const response = await apiInstance.get(`/syndicates/${syndicateId}/feed`, { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, `Impossible de récupérer le feed du syndicat ${syndicateId}`);
    }
};