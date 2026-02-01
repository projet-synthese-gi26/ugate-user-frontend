
"use client";

import { useState, useEffect } from 'react';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, Globe, ChevronDown, Menu, X } from 'lucide-react';
import UGateIcon from '@/components/shared/UGateIcon';


export default function LandingPageHeader() {
    const t = useTranslations('header');
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Detect scroll for header background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (newLocale) => {
        router.push(pathname, { locale: newLocale });
        setOpenDropdown(false);
    };

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'}`}
                        >
                            <UGateIcon className="h-9 w-9" showText={true} />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <motion.button
                                onClick={() => setOpenDropdown(prev => !prev)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                                        : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
                                }`}
                            >
                                <Globe className="h-4 w-4" />
                                <span className="font-medium">{locale.toUpperCase()}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                            </motion.button>

                            <AnimatePresence>
                                {openDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl py-2 w-48 z-50 border border-slate-100 overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-blue-50 w-full text-left transition-colors duration-200 ${
                                                    locale === lang.code ? 'bg-blue-50 text-blue-700 font-semibold' : ''
                                                }`}
                                            >
                                                <span className="text-lg">{lang.flag}</span>
                                                <span>{lang.name}</span>
                                                {locale === lang.code && (
                                                    <motion.div
                                                        layoutId="activeLanguage"
                                                        className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Login Button */}
                        <Link href="/login">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-5 py-2.5 rounded-xl font-semibold flex items-center transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                                }`}
                            >
                                <LogIn className="mr-2 h-4 w-4" />
                                {t("seConnecter")}
                            </motion.button>
                        </Link>

                        {/* Register Button */}
                        <Link href="/register">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                            >
                                <UserPlus className="mr-2 h-4 w-4" />
                                {t("sinscrire")}
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-xl transition-colors ${
                            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                        }`}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-slate-100"
                        >
                            {/* Mobile Language Selector */}
                            <div className="mb-4 pb-4 border-b border-slate-100">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Langue</p>
                                <div className="flex space-x-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                                locale === lang.code
                                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.code.toUpperCase()}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Buttons */}
                            <div className="space-y-3">
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full px-4 py-3 rounded-xl font-semibold flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                                        <LogIn className="mr-2 h-4 w-4" />
                                        {t("seConnecter")}
                                    </button>
                                </Link>
                                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        {t("sinscrire")}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}