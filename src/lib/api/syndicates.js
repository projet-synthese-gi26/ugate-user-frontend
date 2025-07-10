

import api from './instance';

/**
 * Crée un nouveau syndicat en envoyant les données à l'API.
 * Gère le formatage des données et la gestion des erreurs.
 *
 * @param {object} syndicateData - Les données complètes du formulaire venant du wizard.
 * @returns {Promise<object>} - Les données du syndicat créé, retournées par l'API.
 * @throws {Error} - Lance une erreur en cas d'échec de la requête ou de réponse invalide.
 */
export const createSyndicate = async (syndicateData) => {
    try {

        const apiPayload = {
            // Informations de base
            long_name: syndicateData.long_name,
            short_name: syndicateData.short_name,
            email: syndicateData.email,
            description: syndicateData.description,
            type: syndicateData.type,
            ceo_name: syndicateData.ceo_name,

            // Domaines d'activité (on s'assure que c'est bien un tableau d'IDs)
            business_domains: syndicateData.business_domains || [],

            // Liens (on s'assure qu'ils existent)
            website_url: syndicateData.web_site_url || null,
            social_network: syndicateData.social_network || null,

            // Dates (on s'assure qu'elles sont au format ISO attendu par la plupart des backends)
            registration_date: new Date(syndicateData.registration_date).toISOString(),
            year_founded: new Date(syndicateData.year_founded).toISOString(),

            // Antennes
            antennes: syndicateData.antennes.map(antenne => ({
                name: antenne.name,
                latitude: antenne.latitude,
                longitude: antenne.longitude
            })),

            // Note : le logo (syndicateData.logo_url) est un objet File.
            // La gestion de l'upload de fichier est un cas spécial.
            // On le traitera séparément.
        };

        // 2. Gestion de l'upload du logo (si présent)
        // L'upload de fichiers se fait généralement via `FormData`.
        const formData = new FormData();

        // On ajoute les données JSON en tant que chaîne de caractères.
        // Le backend devra parser cette chaîne.
        formData.append('syndicateData', JSON.stringify(apiPayload));

        // On ajoute le fichier logo s'il existe.
        if (syndicateData.logo_url instanceof File) {
            formData.append('logo', syndicateData.logo_url);
        }

        // 3. Appel à l'API avec FormData
        // On utilise notre instance `api` et on spécifie le bon `Content-Type`.
        const response = await api.post('/organisation/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Indispensable pour l'upload de fichiers
            },
        });

        // 4. Validation de la réponse de l'API
        // Certains backends renvoient un statut 200 même en cas d'erreur métier.
        // On se base sur le champ `value` de votre réponse originale.
        if (response.data.value !== "200" && response.status === 200) {
            throw new Error(response.data.text || "Une erreur est survenue lors de la création.");
        }

        // Si tout va bien, on retourne les données utiles.
        return response.data;

    } catch (error) {
        // 5. Gestion centralisée des erreurs
        console.error("Erreur API - createSyndicate:", error);

        // On crée un message d'erreur plus clair pour l'utilisateur.
        // On privilégie le message d'erreur du backend s'il est disponible.
        const errorMessage = error.response?.data?.message || error.response?.data?.text || error.message || "Une erreur réseau est survenue. Veuillez réessayer.";

        // On propage l'erreur pour que le composant puisse l'attraper dans son bloc `catch`.
        throw new Error(errorMessage);
    }
};

// Vous pourriez ajouter d'autres fonctions ici à l'avenir :
// export const getSyndicateById = async (id) => { ... };
// export const updateUserSyndicates = async (userId, data) => { ... };