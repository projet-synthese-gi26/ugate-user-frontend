import axios from './instance';

/**
 * Récupère les publications d'une branche avec pagination
 * @param {string} branchId - ID de la branche (syndicat)
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats paginés avec publications
 */
export const getPostsAPI = async (branchId, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    try {
        const response = await axios.get(`/publications/branch/${branchId}`, {
            params: { page, size, sortBy, sortDirection }
        });
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            return { content: [], totalElements: 0, totalPages: 0 };
        }
        throw error;
    }
};

/**
 * Crée une nouvelle publication
 * @param {string} branchId - ID de la branche
 * @param {object|FormData} postData - Données de la publication
 * @returns {Promise<Object>} La publication créée
 */
export const createPostAPI = async (branchId, postData) => {
    // Récupérer l'utilisateur connecté pour l'authorId
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    // Préparer les données selon le format Swagger
    const requestData = {
        content: postData.content || postData.get?.('content') || '',
        authorId: user.id,
        branchId: branchId,
        images: [],
        videos: [],
        files: []
    };

    const response = await axios.post('/publications', requestData, {
        params: { request: JSON.stringify(requestData) }
    });
    return response.data;
};

/**
 * Like/Unlike une publication
 * @param {string} branchId - ID de la branche (pour compatibilité)
 * @param {string} postId - ID de la publication
 * @param {boolean} liked - État du like
 */
export const likePostAPI = async (branchId, postId, liked) => {
    await axios.post(`/publications/${postId}/like?liked=${liked}`);
};

/**
 * Ajoute un commentaire à une publication
 * @param {string} branchId - ID de la branche (pour compatibilité)
 * @param {string} publicationId - ID de la publication
 * @param {string} content - Contenu du commentaire
 * @param {string} imageUrl - URL de l'image (optionnel)
 * @param {string} parentId - ID du commentaire parent pour les réponses (optionnel)
 * @returns {Promise<Object>} Le commentaire créé
 */
export const addCommentAPI = async (branchId, publicationId, content, imageUrl = null, parentId = null) => {
    const commentData = {
        content: content,
        imageUrl: imageUrl,
        parentId: parentId
    };

    const response = await axios.post(`/publications/${publicationId}/comments`, commentData);
    return response.data;
};

/**
 * Récupère les commentaires d'une publication
 * @param {string} branchId - ID de la branche (pour compatibilité)
 * @param {string} publicationId - ID de la publication
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @returns {Promise<Array>} Liste des commentaires
 */
export const getCommentsAPI = async (branchId, publicationId, page = 0, size = 20) => {
    try {
        const response = await axios.get(`/publications/${publicationId}/comments`, {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            return [];
        }
        throw error;
    }
};

/**
 * Like/Unlike un commentaire
 * @param {string} branchId - ID de la branche (pour compatibilité)
 * @param {string} publicationId - ID de la publication
 * @param {string} commentId - ID du commentaire
 * @param {boolean} liked - État du like
 */
export const likeCommentAPI = async (branchId, publicationId, commentId, liked) => {
    await axios.post(`/publications/${publicationId}/comments/${commentId}/like?liked=${liked}`);
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