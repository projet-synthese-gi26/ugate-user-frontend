"use client";
import { cn } from '@/lib/ utils';
import { useState, useRef, useEffect } from 'react';
import HorizontalPDFReader from './HorizontalPDFReader';

interface MediaItem {
    url: string;
    type?: 'IMAGE' | 'VIDEO' | 'PDF';
}

export const getMediaType = (url: string, explicitType?: 'IMAGE' | 'VIDEO' | 'PDF'): 'IMAGE' | 'VIDEO' | 'PDF' => {
    if (explicitType) return explicitType;

    const extension = url.split('.').pop()?.split('?')[0]?.toLowerCase();
    if (['mp4', 'webm', 'ogg', 'mov'].includes(extension || '')) return 'VIDEO';
    if (['pdf'].includes(extension || '')) return 'PDF';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension || '')) return 'IMAGE';

    return 'IMAGE';
};

function MediaContent({ url, type, index }: { url: string; type: 'IMAGE' | 'VIDEO' | 'PDF'; index: number }) {
    const [actualType, setActualType] = useState<'IMAGE' | 'VIDEO' | 'PDF'>(type);
    const [hasError, setHasError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Observer pour la lecture automatique des vidéos
    useEffect(() => {
        if (actualType !== 'VIDEO' || !videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => {
                            // Échec de lecture automatique
                        });
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [actualType]);

    const handleError = () => {
        if (hasError) return;

        setHasError(true);

        if (actualType === 'IMAGE') {
            setActualType('VIDEO');
        } else if (actualType === 'VIDEO') {
            setActualType('IMAGE');
        }
    };

    if (actualType === 'VIDEO') {
        return (
            <video
                ref={videoRef}
                src={url}
                controls
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={handleError}
                preload="metadata"
            >
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
        );
    }

    return (
        <img
            src={url}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt={`Media content ${index + 1}`}
            onError={handleError}
            loading="lazy"
        />
    );
}

export default function MediaGallery({ media }: { media: (MediaItem | string)[] }) {
    if (!media || media.length === 0) return null;

    const normalizedMedia = media.map(item => {
        const url = typeof item === 'string' ? item : item.url;
        const explicitType = typeof item === 'object' ? item.type : undefined;
        const type = getMediaType(url, explicitType);
        return { url, type };
    });

    const visuals = normalizedMedia.filter(m => m.type === 'IMAGE' || m.type === 'VIDEO');
    const pdfs = normalizedMedia.filter(m => m.type === 'PDF');

    return (
        <div className="w-full">
            {/* Galerie Visuelle - Images et Vidéos mélangées */}
            {visuals.length > 0 && (
                <div className={cn(
                    "w-full overflow-hidden bg-black",
                    visuals.length === 1 && "aspect-[4/5] max-h-[600px]",
                    visuals.length === 2 && "grid grid-cols-2 gap-0.5 aspect-[16/9] max-h-[500px]",
                    visuals.length === 3 && "grid grid-cols-2 gap-0.5 aspect-[4/3] max-h-[500px]",
                    visuals.length >= 4 && "grid grid-cols-2 gap-0.5 aspect-square max-h-[500px]"
                )}>
                    {visuals.slice(0, 4).map((m, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative w-full h-full bg-black flex items-center justify-center overflow-hidden",
                                visuals.length === 3 && i === 0 && "row-span-2"
                            )}
                        >
                            <MediaContent url={m.url} type={m.type} index={i} />

                            {/* Overlay pour médias supplémentaires */}
                            {i === 3 && visuals.length > 4 && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">
                                        +{visuals.length - 4}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Documents PDF - Section séparée */}
            {pdfs.length > 0 && (
                <div className="px-4 py-4 space-y-3 bg-slate-50">
                    {pdfs.map((pdf, i) => (
                        <HorizontalPDFReader
                            key={i}
                            url={pdf.url}
                            title={`Document joint ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}