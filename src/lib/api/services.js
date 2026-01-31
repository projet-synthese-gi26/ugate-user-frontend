// src/lib/api/services.js
import { ugateInstance } from './instance';

/**
 * Récupérer les détails d'un service
 * GET /service-offerings/{id}
 *
 * @param {string} serviceId - ID du service
 */
export const getServiceDetailsAPI = async (serviceId) => {
    try {
        const response = await ugateInstance.get(`/service-offerings/${serviceId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération service:", error.message);
        throw error;
    }
};

/**
 * Récupérer tous les services actifs
 * GET /service-offerings/active
 */
export const getActiveServicesAPI = async () => {
    try {
        const response = await ugateInstance.get('/service-offerings/active');
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération services actifs:", error.message);
        return [];
    }
};
