"use client";

import { use, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import {
    Wifi, Signal, Zap, Calendar,
    TrendingUp, ChevronRight, Info
} from 'lucide-react';
import { Link } from '@/navigation';

// Simulation du Context Settings (à déplacer dans un vrai provider plus tard)
// Cela permet au widget de droite de fonctionner immédiatement visuellement
const useNetworkQuality = () => {
    const [quality, setQuality] = useState<'high' | 'auto' | 'low'>('auto');
    return { quality, setQuality };
};

export default function SyndicateLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    // 1. Récupération des paramètres (Next.js 15+)
    const { id: syndicateId } = use(params);
    const pathname = usePathname();
    const { quality, setQuality } = useNetworkQuality();

    // 2. Logique pour extraire le branchId de l'URL pour la sidebar
    // Ex: /syndicate/123/branch/456/... -> branchId = 456
    const segments = pathname.split('/');
    const branchIndex = segments.indexOf('branch');
    const branchId = branchIndex !== -1 && segments.length > branchIndex + 1
        ? segments[branchIndex + 1]
        : "";

    // 3. Détection de scroll pour les effets sticky (Optionnel mais premium)
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans">

            {/* --- COLONNE GAUCHE : NAVIGATION (SIDEBAR) --- */}
            {/* MemberSidebar est déjà 'fixed' dans votre composant existant.
                On s'assure juste qu'il est bien affiché. */}
            <div className="hidden lg:block">
                <MemberSidebar
                    syndicateId={syndicateId}
                    branchId={branchId}
                />
            </div>

            {/* --- ZONE PRINCIPALE --- */}
            {/* On pousse le contenu vers la droite pour ne pas être caché par la sidebar (w-72 = 18rem) */}
            <div className="lg:ml-72 min-h-screen flex justify-center">

                <div className="w-full max-w-[1200px] px-4 sm:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 pt-24 lg:pt-8">

                    {/* --- COLONNE CENTRALE : FEED & CONTENU (Largeur ~600-700px) --- */}
                    <main className="xl:col-span-8 flex flex-col gap-6 min-w-0">
                        {children}
                    </main>

                    {/* --- COLONNE DROITE : WIDGETS (Visible uniquement sur grands écrans) --- */}
                    <aside className="hidden xl:block xl:col-span-4 space-y-6">
                        <div className="sticky top-6 space-y-6">

                            {/* WIDGET 1 : QUALITÉ RÉSEAU (Data Saver) */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                                    <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                                        <Signal size={16} className="text-primary-600" />
                                        Qualité Média
                                    </h3>
                                    <Info size={14} className="text-slate-400 cursor-help" />
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                                        Ajustez la qualité des images et vidéos selon votre connexion internet.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                        <button
                                            onClick={() => setQuality('high')}
                                            className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${quality === 'high' ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-slate-100 text-slate-500 hover:bg-slate-50'}`}
                                        >
                                            <Wifi size={16} className="mb-1" />
                                            HD
                                        </button>
                                        <button
                                            onClick={() => setQuality('auto')}
                                            className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${quality === 'auto' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-slate-100 text-slate-500 hover:bg-slate-50'}`}
                                        >
                                            <Zap size={16} className="mb-1" />
                                            Auto
                                        </button>
                                        <button
                                            onClick={() => setQuality('low')}
                                            className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${quality === 'low' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'border-slate-100 text-slate-500 hover:bg-slate-50'}`}
                                        >
                                            <Signal size={16} className="mb-1" />
                                            Éco
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* WIDGET 2 : AGENDA EXPRESS */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-4 flex items-center justify-between">
                                    <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                                        <Calendar size={16} className="text-primary-600" />
                                        À venir
                                    </h3>
                                </div>
                                <div className="px-4 pb-4 space-y-3">
                                    {/* Item Fake pour l'exemple (à remplacer par data réelle plus tard) */}
                                    <div className="flex gap-3 items-start group cursor-pointer">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:border-primary-200 transition-colors shrink-0">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase">Fév</span>
                                            <span className="text-lg font-black text-slate-800">12</span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-primary-700 transition-colors">
                                                Assemblée Générale
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-0.5">14:00 • Siège social</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={branchId ? `/syndicate/${syndicateId}/branch/${branchId}/events` : '#'}
                                        className="block w-full py-2 text-center text-xs font-bold text-primary-600 hover:bg-primary-50 rounded-lg transition-colors mt-2"
                                    >
                                        Voir tout l'agenda
                                    </Link>
                                </div>
                            </div>

                            {/* WIDGET 3 : SUGGESTIONS / TRENDING */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-4 border-b border-slate-50">
                                    <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                                        <TrendingUp size={16} className="text-primary-600" />
                                        Tendances Syndicales
                                    </h3>
                                </div>
                                <div className="p-4 space-y-4">
                                    {['#Réforme2026', '#Transports', '#Solidarité'].map((tag, i) => (
                                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                                            <div>
                                                <div className="text-sm font-bold text-slate-700 group-hover:text-primary-700 transition-colors">{tag}</div>
                                                <div className="text-xs text-slate-400">2.4k posts</div>
                                            </div>
                                            <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FOOTER MINI */}
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-400 px-2 justify-center text-center">
                                <a href="#" className="hover:underline">Confidentialité</a>
                                <a href="#" className="hover:underline">Conditions</a>
                                <a href="#" className="hover:underline">Publicité</a>
                                <a href="#" className="hover:underline">Cookies</a>
                                <span>© 2026 U-Gate Corp.</span>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}