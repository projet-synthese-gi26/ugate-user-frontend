import axios from './syndicatesInstance';

export const createSyndicateAPI = async (formData) => {
    try {
        const response = await axios.post('/syndicates', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du syndicat :", error.response?.data || error.message);
        throw error;
    }
};

export const getMySyndicatesAPI = async () => {
    const userEmail = localStorage.getItem('email');
    if (!userEmail) {
        return Promise.reject(new Error("Utilisateur non connecté."));
    }
    try {
        const response = await axios.get('/syndicates/my-syndicates', {
            params: { userEmail }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'appel Axios:", error);
        throw error;
    }
};

export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    try {
        const response = await axios.get('/syndicates', {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des syndicats paginés :", error);
        throw error;
    }
};


/**
 * Récupère la liste des syndicats d'un utilisateur par son userId
 * @param {string} userId - UUID de l'utilisateur
 * @returns {Promise<Array>} Liste des syndicats
 */
export const getUserSyndicatesAPI = async (userId) => {
    if (!userId) {
        return Promise.reject(new Error("L'ID de l'utilisateur est requis."));
    }
    try {
        const response = await axios.get(`/syndicates/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des syndicats de l'utilisateur ${userId}:`, error);
        throw error;
    }
};

export const getSyndicateDetailsAPI = async (syndicateId) => {
    if (!syndicateId) {
        return Promise.reject(new Error("L'ID du syndicat est requis."));
    }
    try {
        // Note: L'endpoint exact côté backend devra peut-être être créé.
        // Je suppose qu'il s'appellera /api/syndicates/{id}
        const response = await axios.get(`/syndicates/${syndicateId}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des détails du syndicat ${syndicateId}:`, error);
        throw error;
    }
};