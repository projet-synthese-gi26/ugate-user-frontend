// src/lib/api/chat.js
import apiInstance from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

// ===== GESTION DES SALLES =====

/**
 * Récupère toutes les salles de chat d'un syndicat
 * @param {string} syndicateId - ID du syndicat
 * @returns {Promise} Promesse contenant la liste des salles
 */
export const getChatRoomsAPI = async (syndicateId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les salles de chat');
    }
};

/**
 * Crée une nouvelle salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {Object} roomData - Données de la salle
 * @returns {Promise} Promesse contenant la salle créée
 */
export const createChatRoomAPI = async (syndicateId, roomData) => {
    try {
        const response = await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms`, roomData);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de créer la salle de chat');
    }
};

/**
 * Récupère les détails d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse contenant les détails de la salle
 */
export const getChatRoomDetailsAPI = async (syndicateId, roomId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les détails de la salle');
    }
};

/**
 * Supprime une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const deleteChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la salle de chat');
    }
};

// ===== GESTION DES MEMBRES =====

/**
 * Récupère les membres d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse contenant la liste des membres
 */
export const getChatRoomMembersAPI = async (syndicateId, roomId) => {
    try {
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members`);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les membres de la salle');
    }
};

/**
 * Rejoint une salle de chat publique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const joinChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/join`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de rejoindre la salle de chat');
    }
};

/**
 * Quitte une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @returns {Promise} Promesse vide
 */
export const leaveChatRoomAPI = async (syndicateId, roomId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/leave`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de quitter la salle de chat');
    }
};

/**
 * Ajoute un membre à une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} userId - ID de l'utilisateur à ajouter
 * @returns {Promise} Promesse vide
 */
export const addMemberToChatRoomAPI = async (syndicateId, roomId, userId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members/${userId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'ajouter le membre à la salle');
    }
};

/**
 * Supprime un membre d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} userId - ID de l'utilisateur à supprimer
 * @returns {Promise} Promesse vide
 */
export const removeMemberFromChatRoomAPI = async (syndicateId, roomId, userId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/members/${userId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer le membre de la salle');
    }
};

// ===== GESTION DES MESSAGES =====

/**
 * Récupère les messages d'une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getChatMessagesAPI = async (syndicateId, roomId, page = 0, size = 50) => {
    try {
        const params = { page, size };
        const response = await apiInstance.get(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages`, { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les messages');
    }
};

/**
 * Envoie un message dans une salle de chat
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {Object} messageData - Données du message
 * @returns {Promise} Promesse contenant le message envoyé
 */
export const sendChatMessageAPI = async (syndicateId, roomId, messageData) => {
    try {
        const response = await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages`, messageData);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'envoyer le message');
    }
};

/**
 * Édite un message existant
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} newContent - Nouveau contenu du message
 * @returns {Promise} Promesse contenant le message modifié
 */
export const editChatMessageAPI = async (syndicateId, roomId, messageId, newContent) => {
    try {
        const response = await apiInstance.put(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}`, newContent);
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de modifier le message');
    }
};

/**
 * Supprime un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @returns {Promise} Promesse vide
 */
export const deleteChatMessageAPI = async (syndicateId, roomId, messageId) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer le message');
    }
};

// ===== RÉACTIONS ET STATUTS =====

/**
 * Ajoute une réaction à un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} reaction - Emoji de réaction
 * @returns {Promise} Promesse vide
 */
export const addReactionToChatMessageAPI = async (syndicateId, roomId, messageId, reaction) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}/reactions`, null, {
            params: { reaction }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible d\'ajouter la réaction');
    }
};

/**
 * Supprime une réaction d'un message
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} messageId - ID du message
 * @param {string} reaction - Emoji de réaction
 * @returns {Promise} Promesse vide
 */
export const removeReactionFromChatMessageAPI = async (syndicateId, roomId, messageId, reaction) => {
    try {
        await apiInstance.delete(`/syndicates/${syndicateId}/chat/rooms/${roomId}/messages/${messageId}/reactions`, {
            params: { reaction }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la réaction');
    }
};

/**
 * Marque les messages comme lus
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {string} lastMessageId - ID du dernier message lu
 * @returns {Promise} Promesse vide
 */
export const markChatMessagesAsReadAPI = async (syndicateId, roomId, lastMessageId) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/read`, null, {
            params: { lastMessageId }
        });
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer les messages comme lus');
    }
};

/**
 * Met à jour le statut "en train d'écrire"
 * @param {string} syndicateId - ID du syndicat
 * @param {string} roomId - ID de la salle
 * @param {boolean} isTyping - Statut en train d'écrire
 * @returns {Promise} Promesse vide
 */
export const updateTypingStatusAPI = async (syndicateId, roomId, isTyping) => {
    try {
        await apiInstance.post(`/syndicates/${syndicateId}/chat/rooms/${roomId}/typing`, null, {
            params: { isTyping }
        });
    } catch (error) {
        // Ne pas lancer d'erreur pour le statut typing (non critique)
        console.warn('Impossible de mettre à jour le statut typing:', error);
    }
};