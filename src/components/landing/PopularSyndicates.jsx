
'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import { SyndicateCard } from './SyndicateCard'; // On importe la carte client
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { getAllSyndicatesAPI } from '@/lib/api/syndicate';

export default function PopularSyndicates() {
    const t = useTranslations('landing_page');
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [syndicates, setSyndicates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les syndicats
    const fetchSyndicates = async () => {
        try {
            setLoading(true);
            const response = await getAllSyndicatesAPI(0, 10); // Récupérer 10 syndicats
            setSyndicates(response.content || response || []);
            setError(null);
        } catch (err) {
            console.error('Erreur lors du chargement des syndicats:', err);
            setError(err.message);
            // En cas d'erreur, on garde un tableau vide
            setSyndicates([]);
        } finally {
            setLoading(false);
        }
    };

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
            setIsAutoScrolling(false);
        }
    };

    // Effect pour charger les syndicats au montage du composant
    useEffect(() => {
        fetchSyndicates();
    }, []);

    // Effect pour gérer le scroll et l'auto-scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container && syndicates.length > 0) {
            container.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();

            // Auto-scroll effect
            let autoScrollInterval;
            if (isAutoScrolling) {
                autoScrollInterval = setInterval(() => {
                    const { scrollLeft, scrollWidth, clientWidth } = container;
                    if (scrollLeft >= scrollWidth - clientWidth - 1) {
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: 1, behavior: 'smooth' });
                    }
                }, 30);
            }

            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
                if (autoScrollInterval) clearInterval(autoScrollInterval);
            };
        }
    }, [isAutoScrolling, syndicates.length]);

    return (
        <ClientMotionWrapper delay={0.6} className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('syndicats_populaires')}
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        {t('popular_syndicates_subtitle')}
                    </p>
                </div>
                
                <div className="relative">
                    {/* Bouton gauche */}
                    <button
                        onClick={scrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 border border-black/20 ${
                            canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!canScrollLeft}
                    >
                        <ChevronLeft className="w-6 h-6 text-blue-900" />
                    </button>

                    {/* Bouton droit */}
                    <button
                        onClick={scrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 border border-black/20 ${
                            canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!canScrollRight}
                    >
                        <ChevronRight className="w-6 h-6 text-blue-900" />
                    </button>

                    {/* Container de défilement */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsAutoScrolling(false)}
                        onMouseLeave={() => setIsAutoScrolling(true)}
                    >
                        {loading ? (
                            // Skeleton loading
                            [...Array(3)].map((_, index) => (
                                <div key={index} className="flex-shrink-0 w-80">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="p-6">
                                            <div className="h-6 bg-gray-300 rounded mb-4"></div>
                                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : syndicates.length > 0 ? (
                            syndicates.map((syndicat) => (
                                <div key={syndicat.id} className="flex-shrink-0 w-80">
                                    <SyndicateCard syndicat={syndicat} />
                                </div>
                            ))
                        ) : (
                            // Message si aucun syndicat
                            <div className="flex-shrink-0 w-full text-center py-12">
                                <p className="text-white/80 text-lg">
                                    {error ? 'Erreur lors du chargement des syndicats' : 'Aucun syndicat disponible pour le moment'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </ClientMotionWrapper>
    );
}