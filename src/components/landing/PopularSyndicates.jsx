
'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import { SyndicateCard } from './SyndicateCard'; // On importe la carte client
import { useState, useEffect, useRef } from 'react';

const popularSyndicats = [
    { id: 1, name: "Syndicat National de l'Éducation", members: 250000, image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, name: "Union des Travailleurs de la Santé", members: 180000, image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, name: "Fédération des Employés du Commerce", members: 150000, image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 4, name: "Syndicat des Transporteurs", members: 120000, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1350&q=80" },
    { id: 5, name: "Alliance des Agriculteurs", members: 95000, image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1350&q=80" },
    { id: 6, name: "Syndicat des Artisans", members: 85000, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1350&q=80" },
    { id: 7, name: "Union des Techniciens", members: 110000, image: "https://images.unsplash.com/photo-1581092795442-4c93f4c7b3f1?w=1350&q=80" },
    { id: 8, name: "Fédération des Cuisiniers", members: 75000, image: "https://images.unsplash.com/photo-1556909114-b0d0c76b91b8?w=1350&q=80" },
    { id: 9, name: "Syndicat des Ingénieurs", members: 135000, image: "https://images.unsplash.com/photo-1581092795442-4c93f4c7b3f1?w=1350&q=80" },
    { id: 10, name: "Alliance des Commerçants", members: 90000, image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1350&q=80" },
];

const t = (key) => key.replace(/_/g, ' ');

export default function PopularSyndicates() {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

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

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
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
    }, [isAutoScrolling]);

    return (
        <ClientMotionWrapper delay={0.6} className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Les syndicats les plus actifs
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Rejoignez des milliers de membres dans les organisations syndicales 
                        les plus dynamiques et influentes
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
                        {popularSyndicats.map((syndicat) => (
                            <div key={syndicat.id} className="flex-shrink-0 w-80">
                                <SyndicateCard syndicat={syndicat} />
                            </div>
                        ))}
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