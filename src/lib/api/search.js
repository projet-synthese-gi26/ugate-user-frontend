import axios from './instance';

/**
 * Recherche de syndicats avec filtres avancés
 * @param {string} query - Terme de recherche
 * @param {string} category - Catégorie de syndicate
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchSyndicatesAPI = async (query, category, location, page = 0, size = 12, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get('/search/syndicates', {
        params: { 
            query: query || '', 
            category: category || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche de publications dans un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} query - Terme de recherche
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchPostsInSyndicateAPI = async (syndicateId, query, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get(`/search/syndicates/${syndicateId}/posts`, {
        params: { 
            query: query || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche d'événements dans un syndicat spécifique
 * @param {string} syndicateId - ID du syndicat
 * @param {string} query - Terme de recherche
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchEventsInSyndicateAPI = async (syndicateId, query, location, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get(`/search/syndicates/${syndicateId}/events`, {
        params: { 
            query: query || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche globale de publications dans tous les syndicats accessibles
 * @param {string} query - Terme de recherche
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchAllPostsAPI = async (query, page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    const response = await axios.get('/search/posts', {
        params: { 
            query: query || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Recherche globale d'événements dans tous les syndicats accessibles
 * @param {string} query - Terme de recherche
 * @param {string} location - Localisation
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri (ASC/DESC)
 * @returns {Promise<Object>} Résultats de recherche paginés
 */
export const searchAllEventsAPI = async (query, location, page = 0, size = 20, sortBy = 'startDate', sortDirection = 'ASC') => {
    const response = await axios.get('/search/events', {
        params: { 
            query: query || '', 
            location: location || '', 
            page, 
            size, 
            sortBy, 
            sortDirection 
        }
    });
    return response.data;
};

/**
 * Utilitaire pour construire des paramètres de recherche avancée
 * @param {Object} filters - Filtres de recherche
 * @returns {Object} Paramètres formatés pour l'API
 */
export const buildSearchParams = (filters) => {
    const params = {};
    
    if (filters.query && filters.query.trim()) {
        params.query = filters.query.trim();
    }
    
    if (filters.category && filters.category !== 'Tous') {
        params.category = filters.category;
    }
    
    if (filters.location && filters.location.trim()) {
        params.location = filters.location.trim();
    }
    
    if (filters.dateRange) {
        if (filters.dateRange.start) {
            params.startDate = filters.dateRange.start;
        }
        if (filters.dateRange.end) {
            params.endDate = filters.dateRange.end;
        }
    }
    
    // Pagination
    params.page = filters.page || 0;
    params.size = filters.size || 20;
    params.sortBy = filters.sortBy || 'createdAt';
    params.sortDirection = filters.sortDirection || 'DESC';
    
    return params;
};

/**
 * Recherche universelle qui combine tous les types de contenu
 * @param {string} query - Terme de recherche
 * @param {Object} options - Options de recherche
 * @returns {Promise<Object>} Résultats agrégés
 */
export const universalSearchAPI = async (query, options = {}) => {
    const {
        includeSyndicates = true,
        includePosts = true,
        includeEvents = true,
        page = 0,
        size = 10
    } = options;
    
    const promises = [];
    
    if (includeSyndicates) {
        promises.push(
            searchSyndicatesAPI(query, '', '', page, size)
                .then(data => ({ type: 'syndicates', ...data }))
                .catch(() => ({ type: 'syndicates', content: [], totalElements: 0 }))
        );
    }
    
    if (includePosts) {
        promises.push(
            searchAllPostsAPI(query, page, size)
                .then(data => ({ type: 'posts', ...data }))
                .catch(() => ({ type: 'posts', content: [], totalElements: 0 }))
        );
    }
    
    if (includeEvents) {
        promises.push(
            searchAllEventsAPI(query, '', page, size)
                .then(data => ({ type: 'events', ...data }))
                .catch(() => ({ type: 'events', content: [], totalElements: 0 }))
        );
    }
    
    const results = await Promise.all(promises);
    
    return {
        query,
        results: results.reduce((acc, result) => {
            acc[result.type] = {
                content: result.content || [],
                totalElements: result.totalElements || 0,
                page: result.page || 0,
                size: result.size || size
            };
            return acc;
        }, {}),
        totalResults: results.reduce((sum, result) => sum + (result.totalElements || 0), 0)
    };
};