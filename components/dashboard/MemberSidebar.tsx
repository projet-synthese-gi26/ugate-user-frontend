"use client";

import { useState } from 'react'; // Ajouté
import { Link, usePathname, useRouter } from '@/navigation'; // useRouter ajouté
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, Vote, UserCircle,
    ChevronLeft, LogOut, FileText, LayoutDashboard, Loader2
} from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useAuthStore } from '@/lib/store';
import { authApi } from '@/lib/axios'; // Ajouté
import { toast } from 'react-hot-toast'; // Ajouté

export default function MemberSidebar({ syndicateId }: { syndicateId: string }) {
    const t = useTranslations('Dashboard.sidebar');
    const pathname = usePathname();
    const router = useRouter();
    const { logout, user } = useAuthStore();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: "Fil d'actualité", href: `/syndicate/${syndicateId}` },
        { icon: FileText, label: "Publications", href: `/syndicate/${syndicateId}/publications` },
        { icon: Calendar, label: "Événements", href: `/syndicate/${syndicateId}/events` },
        { icon: Users, label: "Membres", href: `/syndicate/${syndicateId}/members` },
        { icon: Vote, label: "Votes & Sondages", href: `/syndicate/${syndicateId}/votes` },
        { icon: UserCircle, label: "Mon Profil", href: `/syndicate/${syndicateId}/profile` },
    ];

    const handleLogout = async () => {
        setIsLoggingOut(true);
        const toastId = toast.loading("Déconnexion en cours...");

        try {
            // 1. Appel au backend pour révoquer les tokens (Optionnel mais recommandé)
            if (user?.id) {
                await authApi.post(`/api/auth/logout/${user.id}`);
            }
        } catch (error) {
            console.error("Erreur lors de la déconnexion API", error);
        } finally {
            // 2. Nettoyage du store local quoi qu'il arrive
            logout();
            toast.success("À bientôt !", { id: toastId });

            // 3. Redirection vers le login
            router.push('/login');
        }
    };

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-50 shadow-xl">
            <div className="p-8 flex-1">
                <div className="mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center text-white font-black">U</div>
                    <span className="font-black text-xl text-slate-900 tracking-tighter">U-Gate</span>
                </div>

                <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-primary-800 mb-10 font-bold text-xs uppercase tracking-widest group transition-all">
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Quitter l'espace
                </Link>

                <nav className="space-y-1.5">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300",
                                pathname === item.href
                                    ? "bg-primary-800 text-white shadow-lg shadow-primary-900/20 translate-x-1"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon size={20} className={pathname === item.href ? "text-white" : "text-slate-400"} />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <div className="flex items-center gap-3 px-4 py-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-black text-xs border-2 border-white shadow-sm">
                        {user?.firstName?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-bold text-slate-900 truncate">{user?.firstName || 'Utilisateur'}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Membre</div>
                    </div>
                </div>

                {/* BOUTON DÉCONNEXION MIS À JOUR */}
                <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 font-bold hover:bg-red-50 transition-all text-sm disabled:opacity-50"
                >
                    {isLoggingOut ? (
                        <Loader2 size={18} className="animate-spin" />
                    ) : (
                        <LogOut size={18} />
                    )}
                    {isLoggingOut ? "Sortie..." : "Déconnexion"}
                </button>
            </div>
        </aside>
    );
}