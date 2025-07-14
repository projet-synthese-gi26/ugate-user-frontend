import axios from './instance';

export const createSyndicateAPI = async (formData) => {
    const response = await axios.post('/syndicates', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const getMySyndicatesAPI = async () => {
    const response = await axios.get('/syndicates/my-syndicates');
    return response.data;
};

export const getAllSyndicatesAPI = async (page = 0, size = 12) => {
    const response = await axios.get('/syndicates', { params: { page, size } });
    return response.data;
};

export const getSyndicateDetailsAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}`);
    return response.data;
};