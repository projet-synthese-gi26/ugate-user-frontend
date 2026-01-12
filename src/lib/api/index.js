/**
 * Index centralisé pour tous les appels API
 * Facilite l'importation et la maintenance des endpoints
 */

// Authentification
export * from './auth';

// Syndicats
export * from './syndicate';

// Publications
export * from './posts';

// Événements
export * from './event';

// Adhésions/Membres
export * from './membership';

// Utilisateur
export * from './user';

// Votes
export * from './vote';

// Recherche
export * from './search';

// Utilitaires
export * from './helpers';

// Instance Axios
export { default as apiClient } from './instance';