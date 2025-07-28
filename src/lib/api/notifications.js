// src/lib/api/notifications.js
import apiInstance from './instance';
import { createPaginationParams, processPaginatedResponse, handleAPIError } from './helpers';

/**
 * Récupère les notifications de l'utilisateur connecté
 * @param {number} page - Numéro de page (commence à 0)
 * @param {number} size - Taille de la page
 * @param {boolean} unreadOnly - Filtrer uniquement les notifications non lues
 * @returns {Promise} Promesse contenant la réponse paginée
 */
export const getNotificationsAPI = async (page = 0, size = 20, unreadOnly = false) => {
    try {
        const params = {
            page,
            size,
            unreadOnly
        };
        
        const response = await apiInstance.get('/notifications', { params });
        return processPaginatedResponse(response);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer les notifications');
    }
};

/**
 * Marque une notification comme lue
 * @param {string} notificationId - ID de la notification
 * @returns {Promise} Promesse vide
 */
export const markNotificationAsReadAPI = async (notificationId) => {
    try {
        await apiInstance.post(`/notifications/${notificationId}/mark-read`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer la notification comme lue');
    }
};

/**
 * Marque toutes les notifications comme lues
 * @returns {Promise} Promesse vide
 */
export const markAllNotificationsAsReadAPI = async () => {
    try {
        await apiInstance.post('/notifications/mark-all-read');
    } catch (error) {
        throw handleAPIError(error, 'Impossible de marquer toutes les notifications comme lues');
    }
};

/**
 * Obtient le nombre de notifications non lues
 * @returns {Promise} Promesse contenant le nombre
 */
export const getUnreadNotificationsCountAPI = async () => {
    try {
        const response = await apiInstance.get('/notifications/unread-count');
        return response.data;
    } catch (error) {
        throw handleAPIError(error, 'Impossible de récupérer le nombre de notifications non lues');
    }
};

/**
 * Supprime une notification
 * @param {string} notificationId - ID de la notification
 * @returns {Promise} Promesse vide
 */
export const deleteNotificationAPI = async (notificationId) => {
    try {
        await apiInstance.delete(`/notifications/${notificationId}`);
    } catch (error) {
        throw handleAPIError(error, 'Impossible de supprimer la notification');
    }
};