"use client";
import { useState } from 'react';
import { useSettings } from '@/lib/context/SettingsContext';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export default function AdaptiveImage({ src, alt, className, ...props }: Props) {
    const { shouldLoadHighRes } = useSettings();
    const [isLoaded, setIsLoaded] = useState(shouldLoadHighRes);
    const [isLoading, setIsLoading] = useState(false);

    const loadStart = () => {
        setIsLoading(true);
        setIsLoaded(true);
    };

    if (!isLoaded) {
        return (
            <div className={`bg-slate-100 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors ${className}`} onClick={loadStart}>
                <ImageIcon className="text-slate-400 mb-2" />
                <span className="text-xs text-slate-500 font-bold">Cliquer pour charger</span>
                <span className="text-[10px] text-slate-400">(Économie de données)</span>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
                {...props}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                    <Loader2 className="animate-spin text-primary-500" />
                </div>
            )}
        </div>
    );
}