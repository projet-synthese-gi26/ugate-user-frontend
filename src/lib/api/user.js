import axios from './instance';

/**
 * Récupère le profil de l'utilisateur basé sur l'ID stocké dans le localStorage.
 * C'est une authentification "de confiance" pour la démo.
 * @returns {Promise<object>} Le DTO UserProfileResponse.
 */
export const getAuthenticatedUserProfile = async () => {
    const email = localStorage.getItem('email');

    if (!email) {
        console.error("Aucun email trouvé dans le localStorage. L'utilisateur doit se connecter.");
        return Promise.reject(new Error("Utilisateur non connecté."));
    }

    try {
        const response = await axios.get('/profile', {
            params: {
                email: email
            }
        });
        
        console.log("API a répondu avec le profil :", response);
        console.log("API a répondu avec le profil 2 :", response.data);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du profil pour l'utilisateur ${email}:`, error);
        throw error;
    }
};