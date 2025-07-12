import axios from './instance';

/**
 * Crée un nouveau syndicat en envoyant les données et le logo.
 * @param {FormData} formData - L'objet FormData contenant 'syndicateData' (JSON) et 'logoFile' (fichier).
 * @returns {Promise<object>} La réponse de l'API avec les données du syndicat créé.
 */
export const createSyndicateAPI = async (formData) => {
    try {
        // CORRECTION : On ne spécifie PAS le Content-Type.
        // On laisse le navigateur le générer automatiquement pour multipart/form-data.
        const response = await axios.post('/syndicates', formData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du syndicat :", error.response?.data || error.message);
        throw error;
    }
};