"use client";

import { Building, Bell, LogOut, Menu } from 'lucide-react';
import Link from 'next/link';
import { STATIC_FILES_URL } from '@/lib/constants';
import { SyndicatDefaultAvatar } from '../shared/SyndicatDefaultAvatar';
import Image from 'next/image';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle }) {
    
    const logoUrl = syndicateData.logoUrl ? `${STATIC_FILES_URL}${syndicateData.logoUrl}` : null;

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-30 sticky top-0 border-b border-gray-200/80 dark:border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4">
                        <button onClick={onSidebarToggle} className="text-gray-600 dark:text-gray-300 lg:hidden">
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center">
                            {logoUrl ? (
                                <Image src={logoUrl} alt={syndicateData.name} width={32} height={32} className="h-8 w-8 rounded-md object-cover" />
                            ) : (
                                <SyndicatDefaultAvatar name={syndicateData.name} size={32} className="rounded-md"/>
                            )}
                            
                            <h1 className="ml-3 text-xl font-bold text-gray-800 dark:text-white truncate">
                                {syndicateData.name}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={onNotificationToggle} className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50">
                            <Bell size={22} className="text-gray-600 dark:text-gray-300" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800" />
                        </button>
                        <Link href="/home" className="p-2 rounded-full text-red-500 bg-red-100/60 dark:bg-red-900/50 hover:bg-red-100 dark:hover:bg-red-900" aria-label="Quitter l'espace syndicat">
                            <LogOut size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}