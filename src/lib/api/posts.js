// src/lib/api/posts.js
import { ugateInstance, serverFetch } from './instance'; 

/**
 * Récupérer les posts d'une branche
 */
export const getPostsAPI = async (branchId, page = 0, size = 20) => {
    try {
        if (!branchId) return { content: [] };

        if (typeof window === 'undefined') {
            const res = await serverFetch('get', `/publications/branch/${branchId}`, null, { params: { page, size } });
            return res.data || { content: [] };
        }
        const res = await ugateInstance.get(`/publications/branch/${branchId}`, { params: { page, size } });
        return res.data || { content: [] };
    } catch (error) {
        console.error("Erreur API Posts");
        return { content: [] };
    }
};

/**
 * Créer une publication
 */
export const createPostAPI = async (formData) => {
    // Utilise explicitement ugateInstance
    const res = await ugateInstance.post('/publications', formData, { 
        headers: { 'Content-Type': 'multipart/form-data' } 
    });
    return res.data;
};

/**
 * Like / Unlike
 */
export const likePostAPI = async (branchId, postId, liked) => {
    // Changé 'axios' par 'ugateInstance'
    return await ugateInstance.post(`/publications/${postId}/like?liked=${liked}`);
};

/**
 * Ajouter un commentaire (Format Multipart/Form-Data selon Swagger)
 */
export const addCommentAPI = async (publicationId, content, imageFile = null, parentId = null) => {
    try {
        const formData = new FormData();
        formData.append('content', content);

        // On n'ajoute parentId QUE s'il existe vraiment (réponse à un message)
        // Surtout ne pas envoyer "string" ou ""
        if (parentId) {
            formData.append('parentId', parentId);
        }

        // Ajout de l'image optionnelle
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const response = await ugateInstance.post(
            `/publications/${publicationId}/comments`, 
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        
        return response.data;
    } catch (error) {
        console.error("Erreur ajout commentaire:", error.message);
        throw error;
    }
};
/**
 * Récupérer les commentaires
 */
export const getCommentsAPI = async (branchId, publicationId, page = 0, size = 20) => {
    // Changé 'axios' par 'ugateInstance'
    const response = await ugateInstance.get(`/publications/${publicationId}/comments`, { 
        params: { page, size } 
    });
    return response.data;
};

/**
 * Posts récents pour la landing
 */
export const getRecentPublicPostsAPI = async (size = 5) => {
    try {
        const res = await ugateInstance.get('/feed/global', { 
            params: { page: 0, size, sortBy: 'createdAt', sortDirection: 'desc' } 
        });
        return res.data?.content?.filter(item => !item.eventId && item.postId) || [];
    } catch (error) {
        return [];
    }
};