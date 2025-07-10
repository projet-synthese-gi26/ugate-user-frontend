
import Image from 'next/image';
import Link from 'next/link';
import { Users, ChevronRight } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import { SyndicateCard } from './SyndicateCard'; // On importe la carte client

const popularSyndicats = [
    { id: 1, name: "Syndicat National de l'Éducation", members: 250000, image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, name: "Union des Travailleurs de la Santé", members: 180000, image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, name: "Fédération des Employés du Commerce", members: 150000, image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const t = (key) => key.replace(/_/g, ' ');


export default function PopularSyndicates() {
    return (
        <ClientMotionWrapper delay={0.6} className="py-16 bg-gradient-to-r from-[#6BAED6] to-indigo-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
                    {t("syndicats_populaires")}
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {popularSyndicats.map((syndicat) => (
                        <SyndicateCard key={syndicat.id} syndicat={syndicat} />
                    ))}
                </div>
            </div>
        </ClientMotionWrapper>
    );
}