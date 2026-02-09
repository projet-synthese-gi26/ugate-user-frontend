"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type NetworkQuality = 'high' | 'low' | 'auto';

interface SettingsContextType {
    networkQuality: NetworkQuality;
    setNetworkQuality: (q: NetworkQuality) => void;
    shouldLoadHighRes: boolean;
}

const SettingsContext = createContext<SettingsContextType>({} as any);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [networkQuality, setNetworkQuality] = useState<NetworkQuality>('auto');
    const [isHighRes, setIsHighRes] = useState(true);

    useEffect(() => {
        const checkConnection = () => {
            // Si l'utilisateur force un mode, on respecte son choix
            if (networkQuality === 'high') {
                setIsHighRes(true);
                return;
            }
            if (networkQuality === 'low') {
                setIsHighRes(false);
                return;
            }

            // Mode 'auto' : Détection via Network Information API (Chrome/Edge/Android)
            // @ts-ignore
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

            if (connection) {
                // Si c'est de la 4G, on charge la HD. Sinon (3g, 2g, slow-2g), on économise.
                const isFast = connection.effectiveType === '4g';
                // On vérifie aussi si l'utilisateur a activé "Data Saver" dans son OS
                const isDataSaver = connection.saveData;

                setIsHighRes(isFast && !isDataSaver);
            } else {
                // Par défaut HD si l'API n'est pas supportée
                setIsHighRes(true);
            }
        };

        checkConnection();

        // Écouter les changements de réseau
        // @ts-ignore
        const connection = navigator.connection;
        if (connection) {
            connection.addEventListener('change', checkConnection);
            return () => connection.removeEventListener('change', checkConnection);
        }
    }, [networkQuality]);

    return (
        <SettingsContext.Provider value={{ networkQuality, setNetworkQuality, shouldLoadHighRes: isHighRes }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);