"use client";

import { Logo } from '@/components/ui/Logo';
import { Link } from '@/navigation';
import { Twitter, Linkedin, Facebook, Github } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                            La plateforme de référence pour la gestion syndicale 3.0.
                            Transparence, Sécurité et Démocratie au service des professionnels.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Plateforme</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/explorer" className="hover:text-primary-400 transition-colors">Explorer</Link></li>
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">À propos</Link></li>
                            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                            <li><a href="https://ugate-admin-frontend.vercel.app/" target="_blank" className="hover:text-primary-400 transition-colors">Espace Admin</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Légal</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Conditions d'utilisation</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Mentions légales</Link></li>
                            <li><Link href="#" className="hover:text-primary-400 transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {year} U-Gate. Tous droits réservés.</p>
                    <p>Fait avec passion au Cameroun.</p>
                </div>
            </div>
        </footer>
    );
}