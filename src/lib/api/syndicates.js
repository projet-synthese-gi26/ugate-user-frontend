import { ugateInstance as axios, serverFetch } from './instance';

/**
 * Création d'un syndicat
 */
export const createSyndicateAPI = async (formData) => {
    try {
        // Cette fonction utilisera 'ugateInstance' automatiquement grâce à l'alias ci-dessus
        const response = await axios.post('/syndicates', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur création syndicat :", error.message);
        throw error;
    }
};


/**
 * Récupère les syndicats de l'utilisateur connecté
 * @returns {Promise<Array>} Liste des syndicats de l'utilisateur
 */
export const getMySyndicatesAPI = async () => {
    try {
        // Cette requête partira avec "Authorization: Bearer <ton_token>"
        const response = await ugateInstance.get('/syndicates/mine');
        return response.data; // Renvoie [] ou [ {id: ...} ]
    } catch (error) {
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
 * RÉCUPÉRER LES SYNDICATS D'UN UTILISATEUR (Requis par auth.js)
 */
export const getUserSyndicatesAPI = async (userId) => {
    if (!userId) return [];
    try {
        const response = await axios.get(`/syndicates/user/${userId}`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur getUserSyndicatesAPI:", error.message);
        return [];
    }
};/**
 * RÉCUPÉRER LES DÉTAILS D'UN SYNDICAT (Pour le Layout)
 */
export const getSyndicateDetailsAPI = async (syndicateId) => {
    if (!syndicateId) return null;
    try {
        // 1. Essayer dans mes syndicats
        try {
            const mineResponse = await serverFetch('get', '/syndicates/mine');
            const syndicate = (mineResponse.data || []).find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {
            // On ignore le 401 ici pour tenter la recherche globale
        }

        // 2. Chercher globalement
        try {
            const allResponse = await serverFetch('get', '/syndicates', null, { params: { page: 0, size: 100 } });
            const allData = allResponse.data?.content || allResponse.data || [];
            const syndicate = allData.find(s => s.id === syndicateId);
            if (syndicate) return syndicate;
        } catch (e) {}

        return null;
    } catch (error) {
        // CORRECTION : Utilisation de syndicateId (avec un 'e') pour éviter le crash
        console.error(`Erreur critique récupération syndicat ${syndicateId}:`, error.message);
        return null; 
    }
};

/**
 * Récupère les branches d'un syndicat
 */
export const getSyndicateBranchesAPI = async (syndicatId) => {
    try {
        const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
        return response.data; // C'est un tableau d'objets
    } catch (error) {
        console.error("Erreur lors de la récupération des branches:", error);
        return [];
    }

    
}