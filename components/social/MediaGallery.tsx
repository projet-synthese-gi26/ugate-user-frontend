"use client";
import { cn } from '@/lib/ utils';
import { useState, useRef, useEffect } from 'react';
import HorizontalPDFReader from './HorizontalPDFReader';

interface MediaItem {
    url: string;
    type?: 'IMAGE' | 'VIDEO' | 'PDF' | 'AUDIO' | 'UNSUPPORTED';
}

type MediaType = 'IMAGE' | 'VIDEO' | 'PDF' | 'AUDIO' | 'UNSUPPORTED';

// Fonction pour détecter le type réel du média via les headers HTTP
export const detectMediaType = async (url: string): Promise<MediaType> => {
    try {
        // 1. Tentative HEAD
        const headResponse = await fetch(url, { method: 'HEAD' });
        const contentType = headResponse.headers.get('Content-Type')?.toLowerCase() || '';

        if (contentType.includes('application/pdf')) return 'PDF';
        if (contentType.startsWith('image/')) return 'IMAGE';
        if (contentType.startsWith('video/')) return 'VIDEO';
        if (contentType.startsWith('audio/')) return 'AUDIO';
    } catch (_) {
        // HEAD échoué → fallback
    }

    try {
        // 2. Fallback : GET partiel pour lire les magic bytes
        const response = await fetch(url, {
            headers: { Range: 'bytes=0-1023' },
        });
        const buffer = await response.arrayBuffer();
        const bytes = new Uint8Array(buffer);

        // PDF → "%PDF-" = 0x25 0x50 0x44 0x46 0x2D
        if (
            bytes[0] === 0x25 &&
            bytes[1] === 0x50 &&
            bytes[2] === 0x44 &&
            bytes[3] === 0x46 &&
            bytes[4] === 0x2d
        ) {
            return 'PDF';
        }

        // Images
        if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'IMAGE'; // JPEG
        if (bytes[0] === 0x89 && bytes[1] === 0x50) return 'IMAGE'; // PNG
        if (bytes[0] === 0x47 && bytes[1] === 0x49) return 'IMAGE'; // GIF
        if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) return 'IMAGE'; // WEBP

        // MP4 → "ftyp" at offset 4
        if (
            bytes[4] === 0x66 &&
            bytes[5] === 0x74 &&
            bytes[6] === 0x79 &&
            bytes[7] === 0x70
        ) {
            return 'VIDEO';
        }

        // MP3 → "ID3"
        if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return 'AUDIO';

    } catch (error) {
        console.warn('Impossible de détecter le type du média:', error);
    }

    return 'UNSUPPORTED';
};


function MediaContent({ url, type, index }: { url: string; type: MediaType; index: number }) {
    const [actualType, setActualType] = useState<MediaType>(type);
    const [attemptedTypes, setAttemptedTypes] = useState<Set<MediaType>>(new Set([type]));
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Observer pour la lecture automatique des vidéos
    useEffect(() => {
        if (actualType !== 'VIDEO' || !videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => {});
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
        console.log(`Erreur pour ${actualType}, tentatives:`, attemptedTypes);

        // Définir l'ordre des tentatives
        const tryOrder: MediaType[] = ['IMAGE', 'VIDEO', 'AUDIO', 'PDF'];

        // Trouver le prochain type à essayer
        let nextType: MediaType | null = null;
        for (const tryType of tryOrder) {
            if (!attemptedTypes.has(tryType)) {
                nextType = tryType;
                break;
            }
        }

        if (nextType) {
            setAttemptedTypes(prev => new Set([...prev, nextType!]));
            setActualType(nextType);
        } else {
            // Tous les types ont été testés
            setActualType('UNSUPPORTED');
        }
    };

    if (actualType === 'UNSUPPORTED') {
        return (
            <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <div className="text-center p-6">
                    <svg
                        className="w-16 h-16 mx-auto text-slate-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <p className="text-slate-600 font-medium">Média non supporté</p>
                    <p className="text-slate-400 text-sm mt-1">Ce format ne peut pas être affiché</p>
                </div>
            </div>
        );
    }

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

    if (actualType === 'AUDIO') {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                <div className="w-full max-w-md">
                    <div className="mb-4 text-center">
                        <svg
                            className="w-16 h-16 mx-auto text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                            />
                        </svg>
                        <p className="text-white/60 text-sm mt-2">Fichier audio</p>
                    </div>
                    <audio
                        ref={audioRef}
                        src={url}
                        controls
                        className="w-full"
                        onError={handleError}
                        preload="metadata"
                    >
                        Votre navigateur ne supporte pas la lecture audio.
                    </audio>
                </div>
            </div>
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

    const [normalizedMedia, setNormalizedMedia] = useState<{ url: string; type: MediaType }[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Détection asynchrone des types de médias
    useEffect(() => {
        const detectAllTypes = async () => {
            setIsLoading(true);

            const detected = await Promise.all(
                media.map(async (item) => {
                    const url = typeof item === 'string' ? item : item.url;
                    const explicitType = typeof item === 'object' ? item.type : undefined;

                    // Si le type est explicitement fourni, on l'utilise
                    if (explicitType) {
                        return { url, type: explicitType };
                    }

                    // Sinon, on détecte automatiquement
                    const detectedType = await detectMediaType(url);
                    return { url, type: detectedType };
                })
            );

            setNormalizedMedia(detected);
            setIsLoading(false);
        };

        detectAllTypes();
    }, [media]);

    if (isLoading) {
        return (
            <div className="w-full aspect-video bg-slate-100 animate-pulse flex items-center justify-center">
                <div className="text-slate-400">Chargement des médias...</div>
            </div>
        );
    }

    const visuals = normalizedMedia.filter(m => m.type === 'IMAGE' || m.type === 'VIDEO' || m.type === 'AUDIO' || m.type === 'UNSUPPORTED');
    const pdfs = normalizedMedia.filter(m => m.type === 'PDF');

    return (
        <div className="w-full">
            {/* Galerie Visuelle - Images, Vidéos, Audios et Non supportés */}
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