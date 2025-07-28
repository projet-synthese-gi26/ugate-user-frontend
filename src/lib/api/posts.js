import axios from './instance';

/**
 * Récupère les publications d'un syndicat avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec publications
 */
export const getPostsAPI = async (syndicateId, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get(`/syndicates/${syndicateId}/posts`, {
        params: { page, size, sortBy, sortDirection }
    });
    return response.data;
};

export const createPostAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts`, formData);
    return response.data;
};

export const likePostAPI = async (syndicateId, postId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/like?liked=${liked}`);
};

export const addCommentAPI = async (syndicateId, postId, content) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments`, content, {
         headers: { 'Content-Type': 'text/plain' },
    });
    return response.data;
};

/**
 * Récupère les commentaires d'une publication avec pagination
 * @param {string} syndicateId - ID du syndicat
 * @param {string} postId - ID de la publication
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @returns {Promise<Array>} Liste des commentaires
 */
export const getCommentsAPI = async (syndicateId, postId, page = 0, size = 20) => {
    const response = await axios.get(`/syndicates/${syndicateId}/posts/${postId}/comments`, {
        params: { page, size }
    });
    return response.data;
};

export const likeCommentAPI = async (syndicateId, postId, commentId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments/${commentId}/like?liked=${liked}`);
};

/**
 * Récupère les publications publiques récentes de la plateforme (pour landing page)
 * @param {number} size - Nombre de publications à récupérer
 * @returns {Promise<Array>} Liste des publications récentes
 */
export const getRecentPublicPostsAPI = async (size = 5) => {
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
        
        // Filtrer seulement les publications (pas les événements)
        if (response.data && response.data.content) {
            return response.data.content.filter(item => !item.eventId && item.postId);
        }
        return [];
    } catch (error) {
        console.error('Erreur lors de la récupération des publications publiques:', error);
        return [];
    }
};