"use client";

import { motion } from 'framer-motion';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
    Users, Calendar, MessageCircle, Vote,
    CreditCard, Handshake, ChevronLeft, ChevronRight, MessageSquare
} from 'lucide-react';
import { useParams } from 'next/navigation';

export default function SyndicateSidebar({ isCollapsed, onToggle, syndicateData }) {
    const t = useTranslations('syndicate_space.sidebar');
    const pathname = usePathname();
    const router = useRouter();
    const { syndicatId } = useParams();

    const navItems = [
        { id: 'membres', icon: Users, label: t('members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('votes'), route: 'votes' },
        { id: 'finances', icon: CreditCard, label: t('finances'), route: 'finances' },
        { id: 'partenaires', icon: Handshake, label: t('partners'), route: 'partenaires' },
    ];

    const handleNavigation = (route) => {
        router.push(`/syndicat-space/${syndicatId}/${route}`);
    };

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 80 : 260 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 shadow-xl"
        >
            {/* En-tête Sidebar */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
                {!isCollapsed && (
                    <span className="font-bold text-lg text-blue-600 dark:text-blue-400 truncate">
                        Menu
                    </span>
                )}
                <button
                    onClick={onToggle}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 transition-colors mx-auto"
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Liste de navigation */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname.includes(`/${item.route}`);

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => handleNavigation(item.route)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/50 hover:text-blue-600'
                                } ${isCollapsed ? 'justify-center' : ''}`}
                            title={isCollapsed ? item.label : ''}
                        >
                            <item.icon size={20} className={isActive ? 'text-white' : 'text-current'} />

                            {!isCollapsed && (
                                <span className="ml-3 font-medium text-sm truncate">
                                    {item.label}
                                </span>
                            )}

                            {/* Indicateur actif (point) si collapsé */}
                            {isCollapsed && isActive && (
                                <div className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full" />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
}