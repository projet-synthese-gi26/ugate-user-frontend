"use client";

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, LogIn } from 'lucide-react';

export default function Navbar() {
    const t = useTranslations('Nav');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                        <span className="text-white font-black text-xl">U</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">U-Gate</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="/explorer" className="hover:text-white transition-colors">{t('explorer')}</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/about" className="hover:text-white transition-colors">À Propos</Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-semibold text-white hover:opacity-80 transition">
                        {t('login')}
                    </Link>
                    <Link href="/register" className="bg-white text-navy-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-500 hover:text-white transition-all shadow-lg">
                        {t('register')}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-navy-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden glass"
                    >
                        <Link href="/explorer" onClick={() => setMobileMenu(false)}>{t('explorer')}</Link>
                        <Link href="/login" onClick={() => setMobileMenu(false)}>{t('login')}</Link>
                        <Link href="/register" className="bg-primary-600 text-white p-3 rounded-xl text-center" onClick={() => setMobileMenu(false)}>
                            {t('register')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}