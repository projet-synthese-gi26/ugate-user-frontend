"use client";

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { cn } from '@/lib/ utils';

export default function Navbar() {
    const t = useTranslations('Nav');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Si on n'a pas scrollé, le fond derrière est sombre (sur toutes nos pages principales)
    // Donc le texte doit être clair.
    const isDarkBackground = !isScrolled;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-500",
            isScrolled ? "py-4" : "py-6"
        )}>
            <div className={cn(
                "max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500",
                isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 shadow-xl rounded-full py-3" : ""
            )}>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                        <span className="text-white font-black text-xl">U</span>
                    </div>
                    <span className={cn(
                        "text-2xl font-bold tracking-tighter transition-colors",
                        isDarkBackground ? "text-white" : "text-slate-900"
                    )}>
                        U-Gate
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold">
                    <Link href="/explorer" className={cn("transition-colors hover:text-primary-500", isDarkBackground ? "text-slate-300" : "text-slate-600")}>{t('explorer')}</Link>
                    <Link href="/services" className={cn("transition-colors hover:text-primary-500", isDarkBackground ? "text-slate-300" : "text-slate-600")}>Services</Link>
                    <Link href="/about" className={cn("transition-colors hover:text-primary-500", isDarkBackground ? "text-slate-300" : "text-slate-600")}>À Propos</Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher variant={isDarkBackground ? "dark" : "light"} />
                    <Link href="/login" className={cn(
                        "text-sm font-bold transition-colors hover:text-primary-500",
                        isDarkBackground ? "text-white" : "text-slate-800"
                    )}>
                        {t('login')}
                    </Link>
                    <Link href="/register" className={cn(
                        "px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105",
                        isDarkBackground ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-primary-600 text-white hover:bg-primary-700"
                    )}>
                        {t('register')}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden", isDarkBackground ? "text-white" : "text-slate-900")}
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-slate-900 rounded-3xl p-6 flex flex-col gap-4 md:hidden shadow-2xl border border-slate-800"
                    >
                        <LanguageSwitcher variant="dark" className="mb-2" />
                        <Link href="/explorer" className="text-white font-bold text-lg" onClick={() => setMobileMenu(false)}>{t('explorer')}</Link>
                        <Link href="/services" className="text-white font-bold text-lg" onClick={() => setMobileMenu(false)}>Services</Link>
                        <Link href="/about" className="text-white font-bold text-lg" onClick={() => setMobileMenu(false)}>À Propos</Link>
                        <hr className="border-slate-800 my-2" />
                        <Link href="/login" className="text-white font-bold text-lg" onClick={() => setMobileMenu(false)}>{t('login')}</Link>
                        <Link href="/register" className="bg-primary-600 text-white p-4 rounded-xl text-center font-bold" onClick={() => setMobileMenu(false)}>
                            {t('register')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}