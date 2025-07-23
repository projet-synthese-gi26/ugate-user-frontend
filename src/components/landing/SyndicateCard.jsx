'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { Users, ChevronRight } from 'lucide-react';

export function SyndicateCard({ syndicat }) {
    const formatMembers = (count) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        } else if (count >= 1000) {
            return `${(count / 1000).toFixed(0)}k`;
        }
        return count.toString();
    };

    // Gestion de la compatibilité entre les données fake et les données réelles de l'API
    const imageUrl = syndicat.bannerUrl || syndicat.image || '/placeholder-image.jpg';
    const memberCount = syndicat.memberCount || syndicat.members || 0;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{formatMembers(memberCount)} membres</span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">
                    {syndicat.name}
                </h3>
                
                <Link href={`/explorer/${syndicat.id}`}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
                        En savoir plus
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </div>
    );
}