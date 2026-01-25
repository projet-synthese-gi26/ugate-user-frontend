import axios, { serverFetch } from './instance';

export const requestAdhesionAPI = async (adhesionData) => {
    const response = await axios.post('/memberships/request', adhesionData);
    return response.data;
};

export const getAdhesionRequestsAPI = async (syndicateId, branchId) => {
    // Utiliser serverFetch pour supporter les appels côté serveur (Server Components)
    const response = await serverFetch('get', `/memberships/requests/${syndicateId}/${branchId}`);
    return response.data;
};

export const respondToAdhesionAPI = async (syndicateId, branchId, userId, approved) => {
    const response = await axios.post(`/memberships/requests/${syndicateId}/${branchId}/${userId}/respond`, { approved });
    return response.data;
};

export const getBranchMembersAPI = async (branchId) => {
    // Utiliser serverFetch pour supporter les appels côté serveur (Server Components)
    const response = await serverFetch('get', `/memberships/members/${branchId}`);
    return response.data;
};