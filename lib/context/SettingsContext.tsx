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
    const [effectiveType, setEffectiveType] = useState<string>('4g');

    useEffect(() => {
        // Détection automatique du réseau (Navigator API)
        const connection = (navigator as any).connection;
        if (connection) {
            setEffectiveType(connection.effectiveType); // '4g', '3g', '2g'
            const updateConnection = () => setEffectiveType(connection.effectiveType);
            connection.addEventListener('change', updateConnection);
            return () => connection.removeEventListener('change', updateConnection);
        }
    }, []);

    const shouldLoadHighRes =
        networkQuality === 'high' ||
        (networkQuality === 'auto' && effectiveType === '4g');

    return (
        <SettingsContext.Provider value={{ networkQuality, setNetworkQuality, shouldLoadHighRes }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);