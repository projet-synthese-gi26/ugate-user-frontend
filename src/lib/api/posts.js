import axios from './instance';

export const getPostsAPI = async (syndicateId) => {
    const response = await axios.get(`/syndicates/${syndicateId}/posts`);
    return response.data;
};

export const createPostAPI = async (syndicateId, formData) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const likePostAPI = async (syndicateId, postId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/like?liked=${liked}`);
};

export const addCommentAPI = async (syndicateId, postId, content) => {
    const response = await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments`, content, {
         headers: { 'Content-Type': 'text/plain' },
    });
    return response.data;
};

export const likeCommentAPI = async (syndicateId, postId, commentId, liked) => {
    await axios.post(`/syndicates/${syndicateId}/posts/${postId}/comments/${commentId}/like?liked=${liked}`);
};