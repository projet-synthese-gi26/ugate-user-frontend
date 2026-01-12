import axios from './instance';

/**
 * Récupère les événements d'une branche avec pagination
 * @param {string} branchId - ID de la branche (syndicat)
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec événements
 */
export const getEventsAPI = async (branchId, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    try {
        const response = await axios.get(`/events/branch/${branchId}`, {
            params: { page, size, sortBy, sortDirection }
        });
        return response.data;
    } catch (error) {
        // Si c'est une 404, on retourne une structure vide au lieu de fail
        if (error.response?.status === 404) {
            console.log('Aucun événement trouvé pour cette branche');
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

/**
 * Crée un nouvel événement
 * @param {string} branchId - ID de la branche
 * @param {object} eventData - Données de l'événement
 * @param {File[]} imageFiles - Fichiers images (optionnel)
 * @param {File[]} videoFiles - Fichiers vidéos (optionnel)
 * @param {File[]} otherFiles - Autres fichiers (optionnel)
 * @returns {Promise<Object>} L'événement créé
 */
export const createEventAPI = async (branchId, eventData, imageFiles = [], videoFiles = [], otherFiles = []) => {
    try {
        // Récupérer l'utilisateur connecté pour le creatorId
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        // Préparer les données selon le format Swagger
        const requestData = {
            creatorId: user.id,
            branchId: branchId,
            title: eventData.title,
            description: eventData.description,
            eventDate: eventData.startDate ? new Date(eventData.startDate).toISOString().split('T')[0] : null,
            location: eventData.location,
            startTime: eventData.startTime || (eventData.startDate ? new Date(eventData.startDate).toTimeString().slice(0, 5) : '09:00'),
            endTime: eventData.endTime || (eventData.endDate ? new Date(eventData.endDate).toTimeString().slice(0, 5) : '18:00'),
            images: [],
            videos: [],
            files: []
        };

        const response = await axios.post('/events', requestData, {
            params: { request: JSON.stringify(requestData) }
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'événement:', error);
        throw error;
    }
};

/**
 * Rejoindre un événement
 * @param {string} eventId - ID de l'événement
 * @returns {Promise<void>}
 */
export const joinEventAPI = async (eventId) => {
    try {
        const response = await axios.post(`/events/${eventId}/join`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la participation à l\'événement:', error);
        throw error;
    }
};

/**
 * Quitter un événement
 * @param {string} eventId - ID de l'événement
 * @returns {Promise<void>}
 */
export const leaveEventAPI = async (eventId) => {
    try {
        await axios.delete(`/events/${eventId}/leave`);
    } catch (error) {
        console.error('Erreur lors du départ de l\'événement:', error);
        throw error;
    }
};

/**
 * Récupère les participants d'un événement
 * @param {string} eventId - ID de l'événement
 * @returns {Promise<Array>} Liste des participants {userId, fullName}
 */
export const getEventParticipantsAPI = async (eventId) => {
    try {
        const response = await axios.get(`/events/${eventId}/participants`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des participants:', error);
        throw error;
    }
};

/**
 * Récupère les événements publics récents de la plateforme (pour landing page)
 * @param {number} size - Nombre d'événements à récupérer
 * @returns {Promise<Array>} Liste des événements récents
 */
export const getRecentPublicEventsAPI = async (size = 5) => {
    try {
        // Utilise le feed global public qui ne nécessite pas d'authentification
        const response = await axios.get('/feed/global', {
            params: { 
                page: 0, 
                size: size, 
                sortBy: 'createdAt', 
                sortDirection: 'desc' 
            }
        });
        
        // Filtrer seulement les événements (pas les publications)
        if (response.data && response.data.content) {
            return response.data.content.filter(item => item.eventId && !item.postId);
        }
        return [];
    } catch (error) {
        console.error('Erreur lors de la récupération des événements publics:', error);
        return [];
    }
};