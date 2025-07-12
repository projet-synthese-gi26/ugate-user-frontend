import axios from './instance';

export const createSyndicateAPI = async (formData) => {
    try {
        const response = await axios.post('/syndicates', formData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du syndicat :", error.response?.data || error.message);
        throw error;
    }
};