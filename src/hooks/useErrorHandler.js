"use client";

import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

export const ERROR_TYPES = {
    NETWORK: 'NETWORK',
    AUTH: 'AUTH', 
    VALIDATION: 'VALIDATION',
    SERVER: 'SERVER',
    NOT_FOUND: 'NOT_FOUND',
    PERMISSION: 'PERMISSION',
    RATE_LIMIT: 'RATE_LIMIT',
    UNKNOWN: 'UNKNOWN'
};

export const ERROR_MESSAGES = {
    [ERROR_TYPES.NETWORK]: {
        title: 'Problème de connexion',
        message: 'Vérifiez votre connexion internet et réessayez.',
        action: 'Réessayer'
    },
    [ERROR_TYPES.AUTH]: {
        title: 'Session expirée',
        message: 'Votre session a expiré. Veuillez vous reconnecter.',
        action: 'Se reconnecter'
    },
    [ERROR_TYPES.VALIDATION]: {
        title: 'Données invalides',
        message: 'Certaines informations sont incorrectes. Vérifiez vos données.',
        action: 'Corriger'
    },
    [ERROR_TYPES.SERVER]: {
        title: 'Erreur serveur',
        message: 'Une erreur temporaire est survenue. Réessayez dans quelques instants.',
        action: 'Réessayer'
    },
    [ERROR_TYPES.NOT_FOUND]: {
        title: 'Ressource introuvable',
        message: 'La ressource demandée n\'existe pas ou a été supprimée.',
        action: 'Retour'
    },
    [ERROR_TYPES.PERMISSION]: {
        title: 'Accès refusé',
        message: 'Vous n\'avez pas les permissions nécessaires pour cette action.',
        action: 'Comprendre'
    },
    [ERROR_TYPES.RATE_LIMIT]: {
        title: 'Trop de requêtes',
        message: 'Vous faites trop de requêtes. Attendez un moment avant de réessayer.',
        action: 'Attendre'
    },
    [ERROR_TYPES.UNKNOWN]: {
        title: 'Erreur inattendue',
        message: 'Une erreur inattendue s\'est produite. Contactez le support si le problème persiste.',
        action: 'Signaler'
    }
};

const getErrorType = (error) => {
    if (!error?.response) {
        return ERROR_TYPES.NETWORK;
    }

    const status = error.response.status;
    
    switch (status) {
        case 400:
            return ERROR_TYPES.VALIDATION;
        case 401:
            return ERROR_TYPES.AUTH;
        case 403:
            return ERROR_TYPES.PERMISSION;
        case 404:
            return ERROR_TYPES.NOT_FOUND;
        case 429:
            return ERROR_TYPES.RATE_LIMIT;
        case 500:
        case 502:
        case 503:
        case 504:
            return ERROR_TYPES.SERVER;
        default:
            return ERROR_TYPES.UNKNOWN;
    }
};

const getErrorMessage = (error) => {
    const errorType = getErrorType(error);
    const baseMessage = ERROR_MESSAGES[errorType];
    
    // Essayer d'extraire un message plus spécifique du backend
    let specificMessage = baseMessage.message;
    
    if (error?.response?.data) {
        const data = error.response.data;
        if (typeof data === 'string') {
            specificMessage = data;
        } else if (data.message) {
            specificMessage = data.message;
        } else if (data.error) {
            specificMessage = data.error;
        } else if (data.details) {
            specificMessage = data.details;
        }
    }

    return {
        ...baseMessage,
        message: specificMessage,
        type: errorType,
        originalError: error
    };
};

export const useErrorHandler = () => {
    const [errors, setErrors] = useState({});
    const [retryCount, setRetryCount] = useState({});

    const handleError = useCallback((error, context = 'general', options = {}) => {
        const {
            showToast = true,
            showError = true,
            maxRetries = 3,
            onRetry = null,
            silent = false
        } = options;

        const errorInfo = getErrorMessage(error);
        
        // Enregistrer l'erreur dans l'état
        if (showError) {
            setErrors(prev => ({
                ...prev,
                [context]: errorInfo
            }));
        }

        // Afficher un toast si demandé
        if (showToast && !silent) {
            const toastMessage = `${errorInfo.title}: ${errorInfo.message}`;
            
            if (errorInfo.type === ERROR_TYPES.AUTH) {
                toast.error(toastMessage, { duration: 6000 });
                // Rediriger vers la page de login
                if (typeof window !== 'undefined') {
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 2000);
                }
            } else if (errorInfo.type === ERROR_TYPES.NETWORK && onRetry) {
                // Pour les erreurs réseau, proposer un retry
                const currentRetries = retryCount[context] || 0;
                if (currentRetries < maxRetries) {
                    toast.error(`${toastMessage}\nTentative ${currentRetries + 1}/${maxRetries}`, {
                        duration: 4000,
                        action: {
                            label: 'Réessayer',
                            onClick: () => {
                                setRetryCount(prev => ({
                                    ...prev,
                                    [context]: currentRetries + 1
                                }));
                                onRetry();
                            }
                        }
                    });
                } else {
                    toast.error(`${toastMessage}\nNombre maximum de tentatives atteint.`, { 
                        duration: 6000 
                    });
                }
            } else {
                toast.error(toastMessage, { duration: 4000 });
            }
        }

        // Logger l'erreur pour le debugging
        console.error(`[${context.toUpperCase()}] Error:`, {
            type: errorInfo.type,
            message: errorInfo.message,
            originalError: error,
            context
        });

        return errorInfo;
    }, [retryCount]);

    const clearError = useCallback((context) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[context];
            return newErrors;
        });
        setRetryCount(prev => {
            const newRetries = { ...prev };
            delete newRetries[context];
            return newRetries;
        });
    }, []);

    const clearAllErrors = useCallback(() => {
        setErrors({});
        setRetryCount({});
    }, []);

    const hasError = useCallback((context) => {
        return !!errors[context];
    }, [errors]);

    const getError = useCallback((context) => {
        return errors[context] || null;
    }, [errors]);

    return {
        handleError,
        clearError,
        clearAllErrors,
        hasError,
        getError,
        errors
    };
};

// Hook pour les requêtes avec retry automatique
export const useApiWithRetry = () => {
    const { handleError } = useErrorHandler();
    const [loading, setLoading] = useState(false);

    const executeWithRetry = useCallback(async (apiCall, context, options = {}) => {
        const {
            maxRetries = 3,
            retryDelay = 1000,
            backoffMultiplier = 2,
            onSuccess = null,
            onError = null
        } = options;

        setLoading(true);
        let lastError = null;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const result = await apiCall();
                
                if (onSuccess) {
                    onSuccess(result);
                }
                
                setLoading(false);
                return result;
            } catch (error) {
                lastError = error;
                
                // Ne pas retry pour certains types d'erreurs
                const shouldRetry = attempt < maxRetries && 
                    error?.response?.status !== 401 && 
                    error?.response?.status !== 403 && 
                    error?.response?.status !== 404 && 
                    error?.response?.status !== 422;

                if (!shouldRetry) {
                    break;
                }

                // Attendre avant le prochain essai
                const delay = retryDelay * Math.pow(backoffMultiplier, attempt);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        // Gérer l'erreur finale
        const errorInfo = handleError(lastError, context, {
            showToast: true,
            showError: false // On gère l'affichage nous-mêmes
        });

        if (onError) {
            onError(errorInfo);
        }

        setLoading(false);
        throw lastError;
    }, [handleError]);

    return {
        executeWithRetry,
        loading
    };
};