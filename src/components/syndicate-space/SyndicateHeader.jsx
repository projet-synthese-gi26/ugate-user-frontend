"use client";

import { Bell, LogOut, Menu, Users } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function SyndicateHeader({ syndicateData, onSidebarToggle, onNotificationToggle, isCollapsed, isSidebarOpen }) {
    const t = useTranslations();

    return (
        <header 
            className="fixed top-0 right-0 z-40 bg-white shadow-sm transition-all duration-300 ease-in-out"
            style={{ 
                // On ajuste la largeur en fonction de la sidebar
                left: typeof window !== 'undefined' && window.innerWidth > 1024 
                    ? (isSidebarOpen ? '280px' : '80px') 
                    : '0px' 
            }}
        >
            {/* Bannière (Hauteur 160px) */}
            <motion.div 
                className="relative bg-blue-700 overflow-hidden"
                animate={{ height: isCollapsed ? 0 : 160 }}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 p-6 flex flex-col justify-end">
                    <h1 className="text-2xl font-bold text-white">{syndicateData.name}</h1>
                    <div className="flex items-center text-blue-100 text-sm mt-1">
                        <Users className="w-4 h-4 mr-1" />
                        {syndicateData.memberCount || 0} membres
                    </div>
                </div>
            </motion.div>
            
            {/* Barre de navigation (Hauteur 64px) */}
            <div className="h-16 px-6 border-b flex items-center justify-between bg-white">
                <div className="flex items-center gap-4">
                    <button onClick={onSidebarToggle} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                        <Menu size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="font-bold text-gray-800">
                            {isCollapsed ? syndicateData.name : "Espace Membre"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={onNotificationToggle} className="relative p-2 hover:bg-gray-100 rounded-lg">
                        <Bell size={20} className="text-gray-600" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <Link href="/home" className="p-2 hover:bg-red-50 rounded-lg">
                        <LogOut size={20} className="text-gray-600" />
                    </Link>
                </div>
            </div>
        </header>
    );
}