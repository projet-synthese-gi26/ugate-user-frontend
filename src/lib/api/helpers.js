/**
 * Utilitaires pour les appels API et la gestion des erreurs
 */

/**
 * Gère les erreurs d'API de manière standardisée
 * @param {Error} error - Erreur capturée
 * @param {string} context - Contexte de l'erreur pour le debug
 * @returns {Object} Objet d'erreur formaté
 */
export const handleAPIError = (error, context = 'API Call') => {
    console.error(`[${context}] Error:`, error);
    
    if (error.response) {
        // Erreur avec réponse du serveur
        const { status, data } = error.response;
        
        switch (status) {
            case 400:
                return {
                    type: 'VALIDATION_ERROR',
                    message: data.message || 'Données invalides',
                    details: data.errors || null
                };
            case 401:
                return {
                    type: 'UNAUTHORIZED',
                    message: 'Session expirée. Veuillez vous reconnecter.',
                    shouldRedirect: true
                };
            case 403:
                return {
                    type: 'FORBIDDEN',
                    message: 'Vous n\'avez pas les permissions nécessaires'
                };
            case 404:
                return {
                    type: 'NOT_FOUND',
                    message: 'Ressource non trouvée'
                };
            case 429:
                return {
                    type: 'RATE_LIMITED',
                    message: 'Trop de requêtes. Veuillez patienter.'
                };
            case 500:
                return {
                    type: 'SERVER_ERROR',
                    message: 'Erreur serveur. Veuillez réessayer.'
                };
            default:
                return {
                    type: 'UNKNOWN_ERROR',
                    message: data.message || 'Une erreur inattendue s\'est produite'
                };
        }
    } else if (error.request) {
        // Erreur réseau
        return {
            type: 'NETWORK_ERROR',
            message: 'Problème de connexion. Vérifiez votre connexion internet.'
        };
    } else {
        // Erreur dans la configuration de la requête
        return {
            type: 'REQUEST_ERROR',
            message: 'Erreur dans la requête'
        };
    }
};

/**
 * Wrapper pour les appels API avec gestion d'erreur standardisée
 * @param {Function} apiCall - Fonction d'appel API
 * @param {string} context - Contexte pour le debug
 * @returns {Promise} Résultat de l'API ou erreur formatée
 */
export const safeAPICall = async (apiCall, context) => {
    try {
        return await apiCall();
    } catch (error) {
        throw handleAPIError(error, context);
    }
};

/**
 * Crée des paramètres de pagination standardisés
 * @param {number} page - Numéro de page (0-based)
 * @param {number} size - Taille de la page
 * @param {string} sortBy - Champ de tri
 * @param {string} sortDirection - Direction du tri
 * @returns {Object} Paramètres de pagination
 */
export const createPaginationParams = (page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'DESC') => {
    return {
        page: Math.max(0, page),
        size: Math.min(Math.max(1, size), 100), // Limiter entre 1 et 100
        sortBy,
        sortDirection: ['ASC', 'DESC'].includes(sortDirection) ? sortDirection : 'DESC'
    };
};

/**
 * Traite les résultats paginés pour assurer la cohérence
 * @param {Object} response - Réponse de l'API
 * @returns {Object} Résultats paginés formatés
 */
export const processPaginatedResponse = (response) => {
    return {
        content: response.content || [],
        page: response.page || 0,
        size: response.size || 20,
        totalElements: response.totalElements || 0,
        totalPages: response.totalPages || Math.ceil((response.totalElements || 0) / (response.size || 20)),
        hasNext: response.hasNext || false,
        hasPrevious: response.hasPrevious || false,
        isFirst: response.isFirst !== undefined ? response.isFirst : response.page === 0,
        isLast: response.isLast !== undefined ? response.isLast : !response.hasNext
    };
};

/**
 * Valide les données avant envoi à l'API
 * @param {Object} data - Données à valider
 * @param {Object} schema - Schema de validation
 * @returns {Object} Résultat de validation
 */
export const validateData = (data, schema) => {
    const errors = {};
    
    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];
        
        if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
            errors[field] = `${field} est requis`;
            continue;
        }
        
        if (value && rules.minLength && value.length < rules.minLength) {
            errors[field] = `${field} doit contenir au moins ${rules.minLength} caractères`;
        }
        
        if (value && rules.maxLength && value.length > rules.maxLength) {
            errors[field] = `${field} ne peut pas dépasser ${rules.maxLength} caractères`;
        }
        
        if (value && rules.pattern && !rules.pattern.test(value)) {
            errors[field] = rules.message || `${field} n'est pas valide`;
        }
        
        if (value && rules.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errors[field] = `${field} doit être un email valide`;
        }
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Cache simple pour les appels API
 */
class APICache {
    constructor(ttl = 5 * 60 * 1000) { // 5 minutes par défaut
        this.cache = new Map();
        this.ttl = ttl;
    }
    
    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        
        return item.data;
    }
    
    set(key, data) {
        this.cache.set(key, {
            data,
            expiry: Date.now() + this.ttl
        });
    }
    
    clear() {
        this.cache.clear();
    }
    
    delete(key) {
        this.cache.delete(key);
    }
}

export const apiCache = new APICache();

/**
 * Wrapper pour les appels API avec cache
 * @param {string} key - Clé de cache
 * @param {Function} apiCall - Fonction d'appel API
 * @param {number} ttl - Durée de vie du cache en ms
 * @returns {Promise} Résultat de l'API (depuis le cache ou frais)
 */
export const cachedAPICall = async (key, apiCall, ttl) => {
    const cached = apiCache.get(key);
    if (cached) {
        return cached;
    }
    
    const result = await apiCall();
    apiCache.set(key, result);
    return result;
};

/**
 * Debounce pour les appels API de recherche
 * @param {Function} func - Fonction à debouncer
 * @param {number} delay - Délai en ms
 * @returns {Function} Fonction debouncée
 */
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
};

/**
 * Retry automatique pour les appels API qui échouent
 * @param {Function} apiCall - Fonction d'appel API
 * @param {number} maxRetries - Nombre maximum de tentatives
 * @param {number} delay - Délai entre les tentatives en ms
 * @returns {Promise} Résultat de l'API ou erreur finale
 */
export const retryAPICall = async (apiCall, maxRetries = 3, delay = 1000) => {
    let lastError;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await apiCall();
        } catch (error) {
            lastError = error;
            
            // Ne pas réessayer pour certains types d'erreurs
            if (error.response && [400, 401, 403, 404].includes(error.response.status)) {
                break;
            }
            
            if (i < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i))); // Backoff exponentiel
            }
        }
    }
    
    throw lastError;
};