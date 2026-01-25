"use client";

import { useState, useEffect } from 'react';
import UserContext from './UserContext';

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Au chargement, on récupère l'utilisateur stocké au login
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Erreur parsing user", e);
            }
        }
        setIsLoading(false);
    }, []);

    // On fournit l'utilisateur et une fonction pour le mettre à jour
    const value = {
        user,
        setUser,
        isLoading
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};