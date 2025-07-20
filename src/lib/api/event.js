import axios from './instance';

/**
 * Récupère les événements d'un syndicat avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec événements
 */
export const getEventsAPI = async (syndicateId, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get(`/syndicates/${syndicateId}/events`, {
        params: { page, size, sortBy, sortDirection }
    });
    return response.data;
};

export const createEventAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/events`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};