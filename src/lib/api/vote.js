import axios from './instance';

export const getVotesAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}/votes`);
    return response.data;
};

export const submitVoteAPI = async (syndicateId, voteId, choiceId) => {
    await axios.post(`/syndicates/${syndicateId}/votes/${voteId}/submit`, { choiceId });
};