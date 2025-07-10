// src/components/shared/ToastProvider.jsx
"use client"; // Cette directive est la raison d'être de ce composant.

import { Toaster } from 'react-hot-toast';

/**
 * Ce composant est un simple wrapper pour le <Toaster /> de react-hot-toast.
 * En l'isolant dans un Client Component, on peut l'utiliser dans le layout racine
 * sans forcer tout l'arbre de composants à devenir un client component.
 * Il centralise également la configuration du style des toasts pour toute l'application.
 */
export default function ToastProvider() {
    return (
        <Toaster
            position="top-right" // Position des notifications à l'écran
            gutter={8} // Espace entre les notifications
            toastOptions={{
                // Durée par défaut pour tous les toasts
                duration: 4000,

                // Style de base pour tous les toasts
                style: {
                    background: '#ffffff',
                    color: '#111827',
                    border: '1px solid #e5e7eb',
                },

                // Style spécifique pour chaque type de toast
                success: {
                    duration: 3000,
                    theme: {
                        primary: '#10b981', // Vert
                        secondary: '#ffffff',
                    },
                    iconTheme: {
                        primary: '#10b981',
                        secondary: '#ffffff',
                    },
                    style: {
                        background: '#f0fdf4', // Fond vert très clair
                        color: '#14532d', // Texte vert foncé
                        border: '1px solid #bbf7d0', // Bordure verte claire
                    },
                },
                error: {
                    duration: 5000,
                    theme: {
                        primary: '#ef4444', // Rouge
                        secondary: '#ffffff',
                    },
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#ffffff',
                    },
                    style: {
                        background: '#fef2f2', // Fond rouge très clair
                        color: '#991b1b', // Texte rouge foncé
                        border: '1px solid #fecaca', // Bordure rouge claire
                    },
                },
                // Vous pouvez ajouter des styles pour `toast.loading`, `toast.promise`, etc.
            }}
        />
    );
}