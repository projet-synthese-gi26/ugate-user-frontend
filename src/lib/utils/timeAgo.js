// src/lib/utils/timeAgo.js

/**
 * Convertit une date (objet Date ou chaîne de caractères ISO) en une chaîne de temps relative.
 * Ex: "il y a 5 minutes", "hier", "le 12 mars 2023"
 * @param {Date|string} date - La date à formater.
 * @returns {string} La chaîne de caractères formatée.
 */
export default function timeAgo(date) {
    if (!date) return "date inconnue";

    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) return "date invalide";

    const now = new Date();
    const seconds = Math.floor((now - dateObj) / 1000);

    // Moins d'une minute
    if (seconds < 60) {
        return "à l'instant";
    }

    // Moins d'une heure
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    // Moins d'un jour
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    }

    // Moins de deux jours (hier)
    const days = Math.floor(hours / 24);
    if (days < 2) {
        return "hier";
    }

    // Moins d'une semaine
    if (days < 7) {
        return `il y a ${days} jours`;
    }
    
    // Plus d'une semaine, on affiche la date complète
    return dateObj.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}