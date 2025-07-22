"use client";

import { motion } from 'framer-motion';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { 
    Users, Calendar, MessageCircle, Vote,
    Home, ChevronLeft, ChevronRight, MessageSquare 
} from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar.jsx';
import { useParams } from 'next/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import Image from 'next/image';

export default function SyndicateSidebar({ isCollapsed, onToggle, syndicateData }) {
    const t = useTranslations('syndicate_space');
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const { syndicatId } = params;

    const handleNavigation = (route) => {
        const path = `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;
        router.push(path);
    };

    if (!syndicateData) {
        return (
            <motion.nav
                animate={{ width: isCollapsed ? 80 : 280 }}
                className="hidden lg:flex bg-white/80 dark:bg-gray-800/50 flex-col z-10 border-r"
            >
                <div className="p-4 border-b animate-pulse">
                    <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                </div>
                <div className="flex-grow p-4 space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </motion.nav>
        );
    }
    
    const imageUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    const navItems = [
        { id: 'accueil', icon: Home, label: t('sidebar.home'), route: null },
        { id: 'membres', icon: Users, label: t('sidebar.members'), route: 'membres' },
        { id: 'evenements', icon: Calendar, label: t('sidebar.events'), route: 'evenements' },
        { id: 'exprimer', icon: MessageCircle, label: t('sidebar.express'), route: 'exprimer' },
        { id: 'chat', icon: MessageSquare, label: t('sidebar.chat'), route: 'chat' },
        { id: 'votes', icon: Vote, label: t('sidebar.votes'), route: 'votes' },
    ];

    const buildLink = (route) => `/syndicat-space/${syndicatId}${route ? `/${route}` : ''}`;

    return (
        <motion.nav
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:flex bg-white dark:bg-neutral-900 flex-col z-10 border-r border-neutral-200 dark:border-neutral-700 shadow-soft transition-colors duration-300"
        >
            <div className={`p-4 flex items-center gap-4 border-b border-neutral-200 dark:border-neutral-700 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex-shrink-0">
                            {imageUrl ? (
                                 <Image 
                                    src={imageUrl} 
                                    alt={`${syndicateData.name} logo`} 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10 rounded-xl object-cover shadow-soft" 
                                />
                            ) : (
                                <SyndicatDefaultAvatar 
                                    name={syndicateData.name} 
                                    size={40} 
                                    className="rounded-xl shadow-soft"
                                />
                            )}
                        </div>
                        <div className="min-w-0">
                            <span className="font-bold text-base text-neutral-800 dark:text-white truncate block">
                                {t('member_space')}
                            </span>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate block">
                                {syndicateData.name}
                            </span>
                        </div>
                    </div>
                )}
                <motion.button 
                    onClick={onToggle} 
                    className="p-2 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200" 
                    aria-label={isCollapsed ? t('expand') : t('collapse')}
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || (item.route && pathname.startsWith(fullPath));
                    
                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => handleNavigation(item.route)}
                            className={`relative group flex items-center w-full px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                                isCollapsed ? 'justify-center' : ''
                            } ${
                                    isActive 
                                        ? 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20' 
                                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                                }`}
                                title={isCollapsed ? item.label : ''}
                            >
                                {isActive && (
                                    <motion.div 
                                        layoutId="active-sidebar-indicator" 
                                        className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800" 
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
                                    />
                                )}
                                
                            <div className="relative z-10 flex items-center">
                                <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-primary-600 dark:text-primary-400' : ''}`} />
                                {!isCollapsed && (
                                    <span className="font-medium truncate ml-3">{item.label}</span>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.nav>
    );
}