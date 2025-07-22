"use client";

import { Bell, LogOut, Menu } from 'lucide-react';
import { Link } from '@/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '../shared/SyndicatDefaultAvatar';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle }) {
    const t = useTranslations();
    
    const imageUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    return (
        <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 z-30 sticky top-0 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={onSidebarToggle} 
                            className="text-neutral-600 dark:text-neutral-300 lg:hidden p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                        >
                            <Menu size={22} />
                        </button>
                        <div className="flex items-center min-w-0">
                            <div className="flex-shrink-0">
                                {imageUrl ? (
                                    <Image 
                                        src={imageUrl} 
                                        alt={`${syndicateData.name} logo`} 
                                        width={36} 
                                        height={36} 
                                        className="h-9 w-9 rounded-xl object-cover shadow-soft" 
                                    />
                                ) : (
                                    <SyndicatDefaultAvatar 
                                        name={syndicateData.name} 
                                        size={36} 
                                        className="rounded-xl shadow-soft"
                                    />
                                )}
                            </div>
                            
                            <div className="ml-3 min-w-0">
                                <h1 className="text-xl font-bold text-neutral-800 dark:text-white truncate">
                                    {syndicateData.name}
                                </h1>
                                <div className="flex items-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary-600 mr-2"></div>
                                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                        {t('syndicate_space.member_space')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={onNotificationToggle} 
                            className="relative p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 group"
                        >
                            <Bell size={20} className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 transition-colors duration-200" />
                            <span className="absolute -top-0.5 -right-0.5 block h-3 w-3 rounded-full bg-primary-600 border-2 border-white dark:border-neutral-900" />
                        </button>
                        <Link 
                            href="/home" 
                            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 group" 
                            aria-label="Quitter l'espace syndicat"
                        >
                            <LogOut size={20} className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 transition-colors duration-200" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}