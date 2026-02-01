
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import UGateIcon from '@/components/shared/UGateIcon';
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

export default function LandingPageFooter() {
    const t = useTranslations('footer');

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { href: '/about', label: t("a_propos") },
        { href: '/services', label: t("services") },
        { href: '/contact', label: t("contact") },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Decorative gradient blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top section with CTA */}
                <div className="border-b border-white/10">
                    <div className="container mx-auto px-4 py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                        >
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Prêt à transformer votre syndicat ?
                                </h3>
                                <p className="text-blue-200">
                                    Rejoignez des milliers d'organisations qui nous font confiance.
                                </p>
                            </div>
                            <Link href="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                                >
                                    Commencer gratuitement
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Middle section with links */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-2 mb-6">
                                <UGateIcon className="h-8 w-8 text-white" showText={true} />
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {t("description_plateforme")}
                            </p>
                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">{t("liens_rapides")}</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-cyan-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">Ressources</h4>
                            <ul className="space-y-4">
                                {['Documentation', 'Guide d\'utilisation', 'FAQ', 'Support'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-cyan-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4 className="text-lg font-semibold text-white mb-6">{t("suivez_nous")}</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 text-slate-400">
                                    <MapPin className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                                    <span>Yaoundé, Cameroun</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-400">
                                    <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span>contact@ugate.cm</span>
                                </li>
                                <li className="flex items-center space-x-3 text-slate-400">
                                    <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span>+237 6XX XXX XXX</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-slate-500 text-sm text-center md:text-left">
                                © {new Date().getFullYear()} UGate. Tous droits réservés.
                            </p>
                            <p className="text-slate-500 text-sm flex items-center">
                                Fait avec <Heart className="w-4 h-4 mx-1 text-red-500" /> au Cameroun
                            </p>
                            <div className="flex items-center space-x-6 text-sm">
                                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                                    Politique de confidentialité
                                </Link>
                                <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                                    Conditions d'utilisation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}