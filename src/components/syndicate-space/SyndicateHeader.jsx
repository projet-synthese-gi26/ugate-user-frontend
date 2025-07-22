"use client";

import { Bell, LogOut, Menu, Users, MapPin } from 'lucide-react';
import { Link } from '@/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle }) {
    const t = useTranslations();
    
    const bannerUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    return (
        <>
            {/* Bannière Header */}
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
                {bannerUrl && (
                    <Image 
                        src={bannerUrl} 
                        alt={`Bannière ${syndicateData.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-700/70"></div>
                
                {/* Contenu de la bannière */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    {/* Top bar avec contrôles */}
                    <div className="flex justify-between items-start">
                        <button 
                            onClick={onSidebarToggle} 
                            className="text-white lg:hidden p-2 rounded-xl hover:bg-white/20 transition-all duration-200"
                        >
                            <Menu size={22} />
                        </button>
                        
                        <div className="flex items-center space-x-2">
                            <button 
                                onClick={onNotificationToggle} 
                                className="relative p-2.5 rounded-xl hover:bg-white/20 transition-all duration-200 group"
                            >
                                <Bell size={20} className="text-white group-hover:text-blue-200 transition-colors duration-200" />
                                <span className="absolute -top-0.5 -right-0.5 block h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
                            </button>
                            <Link 
                                href="/home" 
                                className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200 group" 
                                aria-label="Quitter l'espace syndicat"
                            >
                                <LogOut size={20} className="text-white group-hover:text-blue-200 transition-colors duration-200" />
                            </Link>
                        </div>
                    </div>
                    
                    {/* Info syndicat */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white"
                    >
                        <h1 className="text-3xl font-bold mb-2">
                            {syndicateData.name}
                        </h1>
                        <div className="flex items-center space-x-6 text-blue-100">
                            <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    {syndicateData.memberCount || 0} membres
                                </span>
                            </div>
                            {syndicateData.address && (
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                        {syndicateData.address}
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Navigation tabs (optionnel) */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="px-6">
                    <div className="flex items-center space-x-8 h-12">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-700"></div>
                            <span className="text-sm font-semibold text-blue-700">
                                {t('syndicate_space.member_space')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}