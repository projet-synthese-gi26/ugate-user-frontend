"use client";

import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, Vote, UserCircle,
    ChevronLeft, LogOut, FileText, LayoutDashboard,
    ArrowLeftRight
} from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useAuthStore } from '@/lib/store';

interface MemberSidebarProps {
    syndicateId: string;
    branchId: string;
}

export default function MemberSidebar({ syndicateId, branchId }: MemberSidebarProps) {
    const t = useTranslations('Dashboard.sidebar');
    const pathname = usePathname();
    const { logout, user } = useAuthStore();

    // Construction de l'URL de base pour cette session
    const baseUrl = `/syndicate/${syndicateId}/branch/${branchId}`;

    const menuItems = [
        { icon: LayoutDashboard, label: "Fil d'actualité", href: baseUrl },
        { icon: FileText, label: "Publications", href: `${baseUrl}/publications` },
        { icon: Calendar, label: "Événements", href: `${baseUrl}/events` },
        { icon: Users, label: "Membres", href: `${baseUrl}/members` },
        { icon: Vote, label: "Votes & Sondages", href: `${baseUrl}/votes` },
        { icon: UserCircle, label: "Mon Profil", href: `${baseUrl}/profile` },
    ];

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-xl">
            <div className="p-8 flex-1 flex flex-col">

                {/* Branding U-Gate */}
                <div className="mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-primary-900/20">U</div>
                    <span className="font-black text-xl text-slate-900 tracking-tighter">U-Gate</span>
                </div>

                {/* Navigation de retour */}
                <div className="space-y-2 mb-8">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-slate-400 hover:text-primary-800 font-bold text-xs uppercase tracking-widest group transition-all px-2 py-1"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Quitter l'espace
                    </Link>

                    {/* Bouton pour changer d'antenne (Retour au sélecteur) */}
                    <Link
                        href={`/syndicate/${syndicateId}/select-branch`}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-bold text-xs uppercase tracking-widest group transition-all px-2 py-1"
                    >
                        <ArrowLeftRight size={16} />
                        Changer d'antenne
                    </Link>
                </div>

                {/* Menu Principal */}
                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        // Vérification stricte pour la racine, souple pour les sous-pages si besoin
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300",
                                    isActive
                                        ? "bg-primary-800 text-white shadow-xl shadow-primary-900/20 translate-x-1"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <item.icon size={20} className={isActive ? "text-white" : "text-slate-400"} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer Utilisateur */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <div className="flex items-center gap-3 px-4 py-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-black text-xs border-2 border-white shadow-sm overflow-hidden">
                        {user?.photoUri ? (
                            <img src={user.photoUri} alt="User" className="w-full h-full object-cover" />
                        ) : (
                            user?.firstName?.charAt(0)
                        )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-bold text-slate-900 truncate">{user?.firstName}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Connecté</div>
                    </div>
                </div>
                <button
                    onClick={() => logout()}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-all text-sm group"
                >
                    <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}