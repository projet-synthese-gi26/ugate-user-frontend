// src/lib/api/event.js
import { ugateInstance, serverFetch } from './instance'; // BIEN UTILISER ugateInstance

/**
 * Récupère les événements d'une branche avec pagination
 */
export const getEventsAPI = async (branchId, page = 0, size = 20, sortBy = 'date', sortDirection = 'ASC') => {
    try {
        if (typeof window === 'undefined') {
            const response = await serverFetch('get', `/events/branch/${branchId}`, null, {
                params: { page, size, sortBy, sortDirection },
                timeout: 15000 
            });
            const events = Array.isArray(response.data) ? response.data : [];
            return { content: events, totalElements: events.length, totalPages: 1, size, number: page };
        }

        const response = await ugateInstance.get(`/events/branch/${branchId}`, {
            params: { page, size, sortBy, sortDirection }
        });

        const events = Array.isArray(response.data) ? response.data : [];
        return { content: events, totalElements: events.length, totalPages: 1, size, number: page };

    } catch (error) {
        console.error(`⚠️ Erreur Events pour la branche ${branchId}:`, error.message);
        return { content: [], totalElements: 0, totalPages: 0, size, number: page };
    }
};

/**
 * Crée un nouvel événement (MULTIPART/FORM-DATA)
 */
export const createEventAPI = async (branchId, eventData, imageFiles = []) => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        // --- SÉCURITÉ : VÉRIFICATION DES IDS ---
        if (!user.id || !branchId) {
            throw new Error(`Identifiants manquants: creatorId=${user.id}, branchId=${branchId}`);
        }

        const formData = new FormData();

        // Ajout des champs en s'assurant qu'ils ne sont pas "null"
        formData.append('creatorId', user.id);
        formData.append('branchId', branchId);
        formData.append('title', eventData.title || "Sans titre");
        formData.append('description', eventData.description || "");
        formData.append('location', eventData.location || "Non spécifié");

        // Format Date (YYYY-MM-DD)
        const dateObj = new Date(eventData.startDate);
        const formattedDate = isNaN(dateObj) ? new Date().toISOString().split('T')[0] : dateObj.toISOString().split('T')[0];
        formData.append('eventDate', formattedDate);

        // Format Heure (HH:MM)
        const formatTime = (time) => {
            if (!time) return "09:00";
            const parts = time.split(':');
            return `${parts[0].padStart(2, '0')}:${(parts[1] || '00').padStart(2, '0')}`;
        };
        formData.append('startTime', formatTime(eventData.startTime));
        formData.append('endTime', formatTime(eventData.endTime));

        // Ajout des images (le champ doit s'appeler "images" selon ton Swagger)
        if (imageFiles && imageFiles.length > 0) {
            imageFiles.forEach(file => {
                if (file) formData.append('images', file);
            });
        }

        // --- APPEL DIRECT AU SERVEUR SANS PASSER PAR LE PROXY ---
        // On utilise ugateInstance mais on force l'URL complète pour tester
        const response = await ugateInstance.post('https://ugate.pynfi.com/events', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        return response.data;
    } catch (error) {
        console.error("Détail complet de l'erreur reçue du serveur :");
        console.error(error.response?.data); // C'est ici que tu verras le vrai message
        throw error;
    }
};

/**
 * Rejoindre un événement
 */
export const joinEventAPI = async (eventId) => {
    // Changé axios.post par ugateInstance.post
    const response = await ugateInstance.post(`/events/${eventId}/join`);
    return response.data;
};

/**
 * Quitter un événement
 */
export const leaveEventAPI = async (eventId) => {
    await ugateInstance.delete(`/events/${eventId}/leave`);
};

/**
 * Récupère les participants
 */
export const getEventParticipantsAPI = async (eventId) => {
    const response = await ugateInstance.get(`/events/${eventId}/participants`);
    return response.data;
};

/**
 * Feed global pour la landing page
 */
export const getRecentPublicEventsAPI = async (size = 5) => {
    try {
        const response = await ugateInstance.get('/feed/global', {
            params: { page: 0, size: size, sortBy: 'createdAt', sortDirection: 'desc' }
        });
        
        if (response.data?.content) {
            return response.data.content.filter(item => item.eventId && !item.postId);
        }
        return [];
    } catch (error) {
        return [];
    }
};