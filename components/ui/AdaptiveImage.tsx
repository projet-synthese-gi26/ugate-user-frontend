"use client";

import { useState } from 'react';
import { useSettings } from '@/lib/context/SettingsContext';
import { Image as ImageIcon, Loader2, DownloadCloud } from 'lucide-react';
import { cn } from '@/lib/ utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

export default function AdaptiveImage({ src, alt, className, ...props }: Props) {
    const { shouldLoadHighRes } = useSettings();

    // État local : est-ce que l'utilisateur a cliqué pour charger manuellement ?
    const [forceLoad, setForceLoad] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // On charge l'image si : Le réseau est bon OU l'utilisateur a forcé le chargement
    const shouldRenderImage = shouldLoadHighRes || forceLoad;

    if (!shouldRenderImage) {
        return (
            <div
                onClick={(e) => { e.stopPropagation(); setForceLoad(true); }}
                className={cn(
                    "bg-slate-100 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-all group border border-slate-200 min-h-[200px]",
                    className
                )}
            >
                <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <DownloadCloud className="text-primary-600" size={24} />
                </div>
                <span className="text-xs text-slate-700 font-bold">Cliquer pour afficher</span>
                <span className="text-[10px] text-slate-400 font-medium mt-1">Mode Éco activé • {alt.substring(0, 20)}...</span>
            </div>
        );
    }

    return (
        <div className={cn("relative overflow-hidden bg-slate-50", className)}>
            <img
                src={src}
                alt={alt}
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    isLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={() => setIsLoading(false)}
                onError={() => { setIsLoading(false); setHasError(true); }}
                {...props}
            />

            {/* Spinner de chargement */}
            {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-sm">
                    <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
                </div>
            )}

            {/* Fallback erreur */}
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium">Image indisponible</span>
                </div>
            )}
        </div>
    );
}