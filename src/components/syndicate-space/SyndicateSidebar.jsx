"use client";

import { motion } from 'framer-motion';
import { Link, usePathname } from '@/navigation';
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
    const params = useParams();
    const { syndicatId } = params;

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
        { id: 'accueil', icon: Home, label: t('sidebar.home'), route: '' },
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
            className="hidden lg:flex bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm flex-col z-10 border-r border-gray-200/80 dark:border-white/10"
        >
            <div className={`p-4 flex items-center gap-4 border-b border-gray-200/80 dark:border-white/10 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {!isCollapsed && (
                    <div className="flex items-center gap-2 overflow-hidden">
                        {imageUrl ? (
                             <Image src={imageUrl} alt={`${syndicateData.name} logo`} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                            <SyndicatDefaultAvatar name={syndicateData.name} size={40} />
                        )}
                        <span className="font-bold text-lg text-gray-800 dark:text-white truncate">{t('member_space')}</span>
                    </div>
                )}
                <motion.button onClick={onToggle} className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" aria-label={isCollapsed ? t('expand') : t('collapse')}>
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => {
                    const fullPath = buildLink(item.route);
                    const isActive = pathname === fullPath || (item.route !== '' && pathname.startsWith(fullPath));
                    
                    return (
                        <Link href={fullPath} key={item.id} passHref>
                            <motion.div
                                className={`relative group flex items-center w-full px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                                    isCollapsed ? 'justify-center' : ''
                                } ${
                                    isActive 
                                        ? 'text-blue-600 dark:text-blue-300' 
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                }`}
                                title={isCollapsed ? item.label : ''}
                            >
                                {isActive && (
                                    <motion.div layoutId="active-sidebar-indicator" className="absolute inset-0 bg-blue-50 dark:bg-blue-900/50 rounded-xl" transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
                                )}
                                
                                <div className="relative z-10 flex items-center">
                                    <item.icon className="h-5 w-5 flex-shrink-0" />
                                    {!isCollapsed && (
                                        <span className="font-semibold truncate ml-3">{item.label}</span>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}