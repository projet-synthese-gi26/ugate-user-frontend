"use client";

import { use } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import EventsWidget from '@/components/dashboard/widgets/EventsWidget';
import NetworkWidget from '@/components/dashboard/widgets/NetworkWidget';

export default function SyndicateLayout({
                                            children,
                                            params
                                        }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const { id: syndicateId } = use(params);
    const pathname = usePathname();

    const isSelectBranch = pathname.includes('/select-branch');
    const isBaseRedirect = pathname.endsWith(`/syndicate/${syndicateId}`);

    // Si on est sur "Sélection d'antenne", on affiche juste la page plein écran sans Sidebar
    if (isSelectBranch || isBaseRedirect) {
        return <>{children}</>;
    }

    const segments = pathname.split('/');
    const branchIndex = segments.indexOf('branch');
    const branchId = branchIndex !== -1 && segments.length > branchIndex + 1
        ? segments[branchIndex + 1]
        : "";

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans flex">

            {/* Menu latéral (Sidebar) - Fixé à gauche */}
            <div className="hidden lg:block w-72 shrink-0">
                <MemberSidebar syndicateId={syndicateId} branchId={branchId} />
            </div>

            {/* Zone Principale de l'application */}
            <div className="flex-1 flex justify-center w-full min-w-0">

                {/* Grille Max-Width (Flux au centre, Widgets à droite) */}
                <div className="w-full max-w-[1200px] px-4 sm:px-6 py-6 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">

                    {/* COLONNE CENTRALE : Contenu de la page (Bannière, Posts, etc.) */}
                    <main className="xl:col-span-8 flex flex-col gap-6 min-w-0">
                        {children}
                    </main>

                    {/* COLONNE DROITE : Widgets contextuels */}
                    <aside className="hidden xl:block xl:col-span-4 space-y-6">
                        <div className="sticky top-6 space-y-6">
                            <NetworkWidget />
                            {branchId && (
                                <EventsWidget branchId={branchId} syndicateId={syndicateId} />
                            )}
                            <div className="text-[11px] text-slate-400 text-center px-4">
                                © {new Date().getFullYear()} U-Gate • <a href="#" className="hover:underline">Confidentialité</a>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}