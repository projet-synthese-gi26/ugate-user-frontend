
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
        <ClientMotionWrapper delay={0.6} className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Animated decorations */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative mx-auto px-4 z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-white/10">
                        Découvrir
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('syndicats_populaires')}
                    </h2>
                    <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
                        {t('popular_syndicates_subtitle')}
                    </p>
                </div>

                <div className="relative">
                    {/* Bouton gauche */}
                    <button
                        onClick={scrollLeft}
                        className={`absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl rounded-2xl p-3 md:p-4 transition-all duration-300 border border-white/50 ${
                            canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
                        }`}
                        disabled={!canScrollLeft}
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
                    </button>

                    {/* Bouton droit */}
                    <button
                        onClick={scrollRight}
                        className={`absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl rounded-2xl p-3 md:p-4 transition-all duration-300 border border-white/50 ${
                            canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-30 cursor-not-allowed'
                        }`}
                        disabled={!canScrollRight}
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
                    </button>

                    {/* Gradient fades on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

                    {/* Container de défilement */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsAutoScrolling(false)}
                        onMouseLeave={() => setIsAutoScrolling(true)}
                    >
                        {loading ? (
                            // Skeleton loading avec meilleur design
                            [...Array(4)].map((_, index) => (
                                <div key={index} className="flex-shrink-0 w-80">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 animate-pulse">
                                        <div className="h-48 bg-gradient-to-br from-white/10 to-white/5"></div>
                                        <div className="p-6">
                                            <div className="h-6 bg-white/10 rounded-lg mb-4"></div>
                                            <div className="h-4 bg-white/10 rounded-lg w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : syndicates.length > 0 ? (
                            syndicates.map((syndicat, index) => (
                                <div
                                    key={syndicat.id}
                                    className="flex-shrink-0 w-80 transform transition-transform duration-300 hover:scale-105"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <SyndicateCard syndicat={syndicat} />
                                </div>
                            ))
                        ) : (
                            // Message si aucun syndicat avec meilleur design
                            <div className="flex-shrink-0 w-full text-center py-16">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white/50" />
                                </div>
                                <p className="text-white/80 text-lg font-medium">
                                    {error ? 'Erreur lors du chargement des syndicats' : 'Aucun syndicat disponible pour le moment'}
                                </p>
                                <p className="text-white/50 text-sm mt-2">Revenez bientôt pour découvrir nos syndicats</p>
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