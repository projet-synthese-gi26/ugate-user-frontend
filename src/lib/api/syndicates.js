// src/lib/api/syndicates.js
import axios from './instance'; // On utilise toujours notre instance configurée

/**
 * Crée un nouveau syndicat en envoyant les données et le logo.
 * @param {FormData} formData - L'objet FormData contenant 'syndicateData' (JSON) et 'logoFile' (fichier).
 * @returns {Promise<object>} La réponse de l'API avec les données du syndicat créé.
 */
export const createSyndicateAPI = async (formData) => {
    try {
        // CORRECTION : On surcharge l'en-tête Content-Type pour cet appel spécifique.
        // En passant 'multipart/form-data', on dit à Axios de NE PAS sérialiser en JSON
        // et de laisser le navigateur construire la requête multipart correctement avec le bon 'boundary'.
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
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        return Promise.reject(new Error("Utilisateur non connecté."));
    }

    try {
        const response = await axios.get('/syndicates/my-syndicates', {
            params: { userEmail } // Envoie l'email comme paramètre de requête
        });
        return response.data; // Renvoie la liste des syndicats
    } catch (error) {
        console.error("Erreur lors de la récupération de 'Mes Syndicats':", error);
        throw error;
    }
};