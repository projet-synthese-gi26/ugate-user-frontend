import axios from './instance';

/**
 * Récupère le profil de l'utilisateur actuellement authentifié en appelant l'endpoint /api/profile.
 * L'identité de l'utilisateur est déterminée par le token JWT qui est automatiquement
 * ajouté à la requête par l'intercepteur Axios.
 * @returns {Promise<object>} Le DTO UserProfileResponse.
 */
export const getAuthenticatedUserProfile = async () => {
    // Appel de la route GET /api/profile, comme convenu.
    // L'endpoint est sécurisé côté backend et utilisera le Principal du token.
    const response = await axios.get('/profile');
    return response.data;
};

/**
 * Met à jour le profil de l'utilisateur authentifié via l'endpoint PUT /api/profile.
 * @param {object} profileData - Les données du profil à mettre à jour.
 * @returns {Promise<object>} Le DTO UserProfileResponse mis à jour.
 */
export const updateUserProfileAPI = async (profileData) => {
    // Appel de la route PUT /api/profile.
    const response = await axios.put('/profile', profileData);
    return response.data;
};

/**
 * Met à jour l'avatar de l'utilisateur authentifié via l'endpoint POST /api/profile/avatar.
 * @param {FormData} formData - L'objet FormData contenant le fichier de l'avatar.
 * @returns {Promise<string>} L'URL du nouvel avatar.
 */
export const updateUserAvatarAPI = async (formData) => {
    // Appel de la route POST /api/profile/avatar.
    const response = await axios.post('/profile/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};