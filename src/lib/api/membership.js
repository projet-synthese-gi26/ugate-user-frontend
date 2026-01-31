// src/lib/api/membership.js
import { ugateInstance, serverFetch } from './instance';

/**
 * Demande d'adhésion à un syndicat (Route USER)
 * POST /syndicates/{syndicatId}/memberships/request
 */
export const requestAdhesionAPI = async (syndicatId, requestData) => {
    try {
        const response = await ugateInstance.post(
            `/syndicates/${syndicatId}/memberships/request`,
            requestData
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la demande d'adhésion:", error.message);
        throw error;
    }
};

// ============================================================
// ROUTES ADMIN (compatibles avec le code existant)
// ============================================================

/**
 * Récupère tous les membres d'un syndicat
 * GET /admin/syndicates/{syndicatId}/members
 *
 * Note: L'ancienne route /memberships/members/{branchId} n'existe plus
 * Cette fonction utilise syndicatId au lieu de branchId
 */
export const getSyndicateMembersAPI = async (syndicatId) => {
    try {
        const response = await serverFetch('get', `/admin/syndicates/${syndicatId}/members`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération membres:", error.message);
        return [];
    }
};

/**
 * @deprecated Compatibilité - utilise getSyndicateMembersAPI en interne
 * L'ancienne route /memberships/members/{branchId} n'existe plus
 */
export const getBranchMembersAPI = async (branchId) => {
    // Cette route n'existe plus, on retourne un tableau vide
    // Le code doit migrer vers getSyndicateMembersAPI(syndicatId)
    console.warn('getBranchMembersAPI: Route obsolète. Utilisez getSyndicateMembersAPI(syndicatId)');
    return [];
};

/**
 * Récupère les demandes d'adhésion d'une branche
 * GET /admin/syndicates/{syndicatId}/branches/{branchId}/requests
 */
export const getAdhesionRequestsAPI = async (syndicatId, branchId) => {
    try {
        const response = await serverFetch(
            'get',
            `/admin/syndicates/${syndicatId}/branches/${branchId}/requests`
        );
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération demandes:", error.message);
        return [];
    }
};

/**
 * Traite une demande d'adhésion (approuver/rejeter)
 * POST /admin/syndicates/requests/{requestId}/process
 *
 * Signature compatible avec l'ancien code:
 * respondToAdhesionAPI(syndicatId, branchId, userId, approved)
 *
 * Note: Le Swagger attend un requestId, pas syndicatId/branchId/userId
 * Pour l'instant on garde l'ancienne signature mais il faudra adapter
 */
export const respondToAdhesionAPI = async (syndicatId, branchId, userId, approved) => {
    try {
        // L'API attend maintenant un requestId et non pas syndicatId/branchId/userId
        // On construit un requestId fictif ou on utilise userId comme requestId temporairement
        // TODO: Adapter quand on aura le vrai requestId depuis getAdhesionRequestsAPI
        const response = await ugateInstance.post(
            `/admin/syndicates/requests/${userId}/process`,
            { approved: approved }
        );
        return response.data;
    } catch (error) {
        console.error("Erreur traitement demande:", error.message);
        throw error;
    }
};

/**
 * Nouvelle signature pour respondToAdhesion (recommandée)
 * POST /admin/syndicates/requests/{requestId}/process
 */
export const processAdhesionRequestAPI = async (requestId, approvalData) => {
    const response = await ugateInstance.post(
        `/admin/syndicates/requests/${requestId}/process`,
        approvalData
    );
    return response.data;
};

/**
 * Récupère les détails d'une demande spécifique
 * GET /admin/syndicates/requests/{requestId}
 */
export const getAdhesionRequestDetailsAPI = async (requestId) => {
    const response = await ugateInstance.get(`/admin/syndicates/requests/${requestId}`);
    return response.data;
};

/**
 * Ajoute un membre à une branche
 * POST /admin/syndicates/{syndicatId}/branches/{branchId}/members/add
 */
export const addMemberToBranchAPI = async (syndicatId, branchId, memberData) => {
    const response = await ugateInstance.post(
        `/admin/syndicates/${syndicatId}/branches/${branchId}/members/add`,
        memberData
    );
    return response.data;
};

/**
 * Change le rôle d'un membre
 * PATCH /admin/syndicates/{syndicatId}/members/{userId}/role
 */
export const updateMemberRoleAPI = async (syndicatId, userId, roleData) => {
    const response = await ugateInstance.patch(
        `/admin/syndicates/${syndicatId}/members/${userId}/role`,
        roleData
    );
    return response.data;
};
