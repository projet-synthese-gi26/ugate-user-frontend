"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, MessageCircle, Vote,
    Home, ChevronLeft, ChevronRight, MessageSquare,
    ShoppingBag // N'OUBLIE PAS D'AJOUTER CET IMPORT
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';

export default function SyndicateSidebar({ isCollapsed, onToggle, syndicateData }) {
    const t = useTranslations('syndicate_space');
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const { syndicatId, branchId } = params;

    // Cette fonction construit l'URL finale automatiquement
    const handleNavigation = (route) => {
        const path = `/syndicat-space/${syndicatId}/${branchId}${route ? `/${route}` : ''}`;
        if (pathname === path) return;
        router.push(path);
    };

    // --- NAV ITEMS HARMONISÉS ---
    const navItems = [
        { id: 'membres', icon: Users, label: t('sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('sidebar.votes'), route: 'votes' },
        // MAINTENANT C'EST IDENTIQUE AUX AUTRES :
        { id: 'boutique', icon: ShoppingBag, label: t('sidebar.boutique') || 'Boutique', route: 'boutique' },
    ];

    const buildLink = (route) => `/syndicat-space/${syndicatId}/${branchId}${route ? `/${route}` : ''}`;

    if (!syndicateData) {
        return <div className="p-4">Chargement...</div>; // Simplifié pour l'exemple
    }

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 80 : 280 }}
            className="hidden lg:flex bg-white flex-col z-10 border-r border-blue-100 shadow-lg"
        >
            {/* Header du menu */}
            <div className={`p-4 flex items-center border-b border-blue-100 bg-white ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex flex-col">
                        <span className="font-bold text-blue-900">{t('member_space')}</span>
                        <span className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">Navigation</span>
                    </div>
                )}
                <button onClick={onToggle} className="p-2 hover:bg-gray-100 rounded-xl">
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Liste des items */}
            <div className="flex-grow overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || pathname.startsWith(fullPath);
                    
                    return (
                        <div
                            key={item.id}
                            onClick={() => handleNavigation(item.route)}
                            className={`relative group flex items-center w-full px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-500 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                        >
                            <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : ''}`} />
                            {!isCollapsed && (
                                <span className="font-bold text-sm ml-3">{item.label}</span>
                            )}
                            {isActive && (
                                <motion.div layoutId="active-pill" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
                            )}
                        </div>
                    );
                })}
            </div>
        </motion.nav>
    );
}