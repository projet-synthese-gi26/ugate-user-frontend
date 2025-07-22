"use client";

import { Bell, LogOut, Menu, Users, MapPin } from 'lucide-react';
import { Link } from '@/navigation';
import { STATIC_FILES_URL } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle, isCollapsed = false }) {
    const t = useTranslations();
    const bannerUrl = syndicateData.bannerUrl ? `${STATIC_FILES_URL}${syndicateData.bannerUrl}` : null;

    return (
        <>
            {/* Header principal avec animation */}
            <motion.div 
                className="bg-white shadow-lg"
                initial={false}
                animate={{
                    height: isCollapsed ? '60px' : 'auto'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {/* Bannière Header - Se cache quand rétracted */}
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.div 
                            className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden"
                            initial={{ height: 192, opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Barre de navigation compacte - Toujours visible */}
                <motion.div 
                    className="bg-white border-b border-gray-200 px-6 flex items-center justify-between"
                    animate={{
                        height: isCollapsed ? '60px' : '48px',
                        paddingTop: isCollapsed ? '12px' : '0px',
                        paddingBottom: isCollapsed ? '12px' : '0px'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center space-x-4">
                        {isCollapsed && (
                            <motion.button 
                                onClick={onSidebarToggle} 
                                className="text-blue-700 lg:hidden p-2 rounded-xl hover:bg-blue-50 transition-all duration-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Menu size={20} />
                            </motion.button>
                        )}
                        
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-700"></div>
                            <span className="text-sm font-semibold text-blue-700">
                                {t('syndicate_space.member_space')}
                            </span>
                            {isCollapsed && (
                                <motion.span 
                                    className="text-sm text-gray-500 ml-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    - {syndicateData.name}
                                </motion.span>
                            )}
                        </div>
                    </div>
                    
                    {isCollapsed && (
                        <motion.div 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <button 
                                onClick={onNotificationToggle} 
                                className="relative p-2 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                            >
                                <Bell size={16} className="text-blue-700 group-hover:text-blue-800 transition-colors duration-200" />
                                <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-red-500 border border-white" />
                            </button>
                            <Link 
                                href="/home" 
                                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 group" 
                                aria-label="Quitter l'espace syndicat"
                            >
                                <LogOut size={16} className="text-blue-700 group-hover:text-blue-800 transition-colors duration-200" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}