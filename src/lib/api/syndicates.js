import axios from './instance';

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