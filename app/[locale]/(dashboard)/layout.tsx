"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // 1. On identifie si l'utilisateur est entré dans l'espace privé d'un syndicat
    const isSyndicateSpace = pathname.includes('/syndicate/');
    // 2. On garde la Navbar visible UNIQUEMENT sur la page de sélection d'antenne
    const isSelectBranch = pathname.includes('/select-branch');
    // 3. Et sur la page de redirection de base
    const isBaseRedirect = pathname.match(/\/syndicate\/[a-zA-Z0-9-]+$/);

    // Résultat : On cache la Navbar globale si on est dans une antenne ou dans le profil
    const hideGlobalNav = isSyndicateSpace && !isSelectBranch && !isBaseRedirect;

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            {!hideGlobalNav && <Navbar />}

            <main className="flex-1 flex flex-col">
                {children}
            </main>


        </div>
    );
}