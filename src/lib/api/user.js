// src/lib/api/user.js
import axios from './instance'; // Ton instance Axios configurée avec les intercepteurs

/**
 * Récupère le profil de l'utilisateur actuellement connecté.
 * Nécessite un token JWT valide dans les cookies.
 * @returns {Promise<object>} Le DTO UserProfileResponse contenant les infos de l'utilisateur.
 */
export const getAuthenticatedUserProfile = async () => {
    try {
        const response = await axios.get('/me'); // Appel à l'endpoint /api/me
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du profil utilisateur :", error);
        throw error; // Propage l'erreur pour la gestion côté composant
    }
};