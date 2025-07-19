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

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={syndicat.image}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{formatMembers(syndicat.members)} membres</span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">
                    {syndicat.name}
                </h3>
                
                <Link
                    href={`/syndicats/${syndicat.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
                >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}