// src/components/layout/AppFooter.jsx
"use client";

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AppFooter() {
    const t = useTranslations('footer');

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:contact@u-gate.com', label: 'Email' },
    ];
    
    return (
        <footer className="bg-white/50 bg-gray-800/50 backdrop-blur-sm border-t border-gray-200/80 border-white/10 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 text-gray-400">
                        © {new Date().getFullYear()} U-Gate. {t('footer.all_rights_reserved')}
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="p-2 text-gray-500 text-gray-400 hover:text-blue-600 hover:text-blue-400 hover:bg-gray-100 hover:bg-gray-700 rounded-full transition-colors"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                <link.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}