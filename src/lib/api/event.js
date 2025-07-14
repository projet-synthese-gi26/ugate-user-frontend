import axios from './instance';

export const getEventsAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}/events`);
    return response.data;
};

export const createEventAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/events`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};