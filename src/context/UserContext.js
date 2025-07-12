"use client";

import { createContext, useContext } from 'react';

// 1. Crée le contexte avec une valeur par défaut.
const UserContext = createContext(null);

// 2. Crée un hook personnalisé pour faciliter l'utilisation du contexte.
// C'est une bonne pratique qui rend le code des composants plus lisible.
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      
        throw new Error("useUser doit être utilisé à l'intérieur d'un UserProvider");
    }
    return context;
};

// 3. Exporte le contexte lui-même pour pouvoir l'utiliser comme Provider.
export default UserContext;