import axios from './instance';

/**
 * Récupère le profil de l'utilisateur basé sur l'ID stocké dans le localStorage.
 * C'est une authentification "de confiance" pour la démo.
 * @returns {Promise<object>} Le DTO UserProfileResponse.
 */
export const getAuthenticatedUserProfile = async () => {
    // Récupère l'ID de l'utilisateur depuis le localStorage
    const email = localStorage.getItem('email');

    // Si aucun ID n'est trouvé, l'utilisateur n'est pas "connecté".
    if (!email) {
        console.error("Aucun userId trouvé dans le localStorage. L'utilisateur doit se connecter.");
        // Rejette la promesse pour que le composant appelant sache qu'il y a une erreur.
        return Promise.reject(new Error("Utilisateur non connecté."));
    }

    try {
        // Construit l'URL avec l'ID de l'utilisateur.
        // Assure-toi que ton UserController backend est sur `/api/users`.
        const response = await axios.get(`/users/${email}/profile`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du profil pour l'utilisateur ${email}:`, error);
        throw error; // Propage l'erreur
    }
};