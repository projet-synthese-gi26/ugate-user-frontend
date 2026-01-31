// src/lib/api/vote.js
import { ugateInstance } from './instance';

/**
 * Créer un nouveau sondage/vote
 * POST /publication-votes
 *
 * @param {object} voteData - Données du sondage
 * @param {string} voteData.branchId - ID de la branche
 * @param {string} voteData.question - Question du sondage
 * @param {string[]} voteData.options - Options de réponse
 * @param {string} voteData.voteType - Type: "SINGLE_CHOICE" ou "MULTIPLE_CHOICE"
 * @param {string} [voteData.endDate] - Date de fin (optionnel)
 */
export const createVoteAPI = async (voteData) => {
    try {
        const response = await ugateInstance.post('/publication-votes', voteData);
        return response.data;
    } catch (error) {
        console.error("Erreur création sondage:", error.message);
        throw error;
    }
};

/**
 * Voter dans un sondage
 * POST /publication-votes/{publicationVoteId}/cast
 *
 * @param {string} voteId - ID du sondage
 * @param {object} castData - Données du vote
 * @param {string} castData.odtionId - ID de l'option choisie
 * @param {string} castData.odtionId - ID de l'option choisie (pour SINGLE_CHOICE)
 * @param {string[]} [castData.optionIds] - IDs des options choisies (pour MULTIPLE_CHOICE)
 */
export const castVoteAPI = async (voteId, castData) => {
    try {
        const response = await ugateInstance.post(
            `/publication-votes/${voteId}/cast`,
            castData
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors du vote:", error.message);
        throw error;
    }
};

/**
 * Récupérer les résultats d'un sondage
 * GET /publication-votes/{publicationVoteId}/results
 *
 * @param {string} voteId - ID du sondage
 */
export const getVoteResultsAPI = async (voteId) => {
    try {
        const response = await ugateInstance.get(`/publication-votes/${voteId}/results`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération résultats:", error.message);
        throw error;
    }
};

// ============================================================
// ANCIENNES FONCTIONS (pour compatibilité temporaire)
// ============================================================

/**
 * @deprecated Les routes /syndicates/{id}/votes n'existent pas dans l'API
 */
export const getVotesAPI = async (syndicateId) => {
    console.warn('getVotesAPI est déprécié. Utiliser getVoteResultsAPI avec un voteId.');
    return [];
};

/**
 * @deprecated Utiliser castVoteAPI à la place
 */
export const submitVoteAPI = async (syndicateId, voteId, choiceId) => {
    console.warn('submitVoteAPI est déprécié. Utiliser castVoteAPI.');
    return castVoteAPI(voteId, { optionId: choiceId });
};
