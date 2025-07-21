// src/lib/api/feed.js
import apiInstance from './instance';
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
        
        const response = await apiInstance.get('/feed', { params });
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
export const getGlobalFeedAPI = async (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc') => {
    try {
        const params = createPaginationParams(page, size, sortBy, sortDirection);
        
        const response = await apiInstance.get('/feed/global', { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer le feed global');
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