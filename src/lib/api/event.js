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
    try {
        const response = await axios.get(`/syndicates/${syndicateId}/events`, {
            params: { page, size, sortBy, sortDirection }
        });
        return response.data;
    } catch (error) {
        // Si c'est une 404, on retourne une structure vide au lieu de fail
        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé pour ce syndicat');
            return {
                content: [],
                totalElements: 0,
                totalPages: 0,
                size: size,
                number: page
            };
        }
        // Pour les autres erreurs (401, 500, etc.), on les laisse remonter
        throw error;
    }
};

export const createEventAPI = async (syndicateId, eventData, imageFile = null) => {
    try {
        const formData = new FormData();
        
        // Préparer les données de l'événement
        const requestData = {
            title: eventData.title,
            description: eventData.description,
            location: eventData.location,
            startDate: new Date(eventData.startDate).toISOString(),
            endDate: new Date(eventData.endDate).toISOString()
        };
        
        // Ajouter les données JSON
        formData.append('eventData', new Blob([JSON.stringify(requestData)], {
            type: 'application/json'
        }));
        
        // Ajouter l'image si elle existe
        if (imageFile) {
            formData.append('imageFile', imageFile);
        }
        
        const response = await axios.post(`/syndicates/${syndicateId}/events`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'événement:', error);
        throw error;
    }
};