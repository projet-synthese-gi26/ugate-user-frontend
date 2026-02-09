"use client";

import { use } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import EventsWidget from '@/components/dashboard/widgets/EventsWidget'; // ✅ Vrai
import NetworkWidget from '@/components/dashboard/widgets/NetworkWidget'; // ✅ Vrai

export default function SyndicateLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const { id: syndicateId } = use(params);
    const pathname = usePathname();

    // Extraction robuste de l'ID de branche
    const segments = pathname.split('/');
    const branchIndex = segments.indexOf('branch');
    const branchId = branchIndex !== -1 && segments.length > branchIndex + 1
        ? segments[branchIndex + 1]
        : "";

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans">

            {/* Navigation Gauche (Fixe) */}
            <div className="hidden lg:block">
                <MemberSidebar syndicateId={syndicateId} branchId={branchId} />
            </div>

            {/* Zone Principale */}
            <div className="lg:ml-72 min-h-screen flex justify-center">
                <div className="w-full max-w-[1200px] px-4 sm:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 pt-24 lg:pt-8">

                    {/* COLONNE CENTRALE : FEED */}
                    <main className="xl:col-span-8 flex flex-col gap-6 min-w-0">
                        {children}
                    </main>

                    {/* COLONNE DROITE : WIDGETS RÉELS */}
                    <aside className="hidden xl:block xl:col-span-4 space-y-6">
                        <div className="sticky top-6 space-y-6">

                            {/* Widget 1 : Contrôle Réseau (Fonctionnel) */}
                            <NetworkWidget />

                            {/* Widget 2 : Événements Réels de la branche */}
                            {/* On ne l'affiche que si on est dans le contexte d'une branche */}
                            {branchId && (
                                <EventsWidget branchId={branchId} syndicateId={syndicateId} />
                            )}

                            {/* Footer Simple */}
                            <div className="text-[11px] text-slate-400 text-center px-4">
                                © 2026 U-Gate • <a href="#" className="hover:underline">Confidentialité</a>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}