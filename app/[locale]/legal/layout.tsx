"use client";

import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link, usePathname } from "@/navigation";
import { ShieldCheck, FileText, Cookie, Scale, Users } from "lucide-react";
import { cn } from "@/lib/ utils";

const legalLinks = [
    { href: "/legal/privacy", label: "Confidentialité", icon: ShieldCheck },
    { href: "/legal/terms", label: "Conditions d'utilisation", icon: FileText },
    { href: "/legal/mentions", label: "Mentions légales", icon: Scale },
    { href: "/legal/cookies", label: "Politique cookies", icon: Cookie },
];

// Image très pertinente : Des mains unies (Syndicat, Union, Accord, Confiance)
const SYNDICATE_TRUST_IMAGE = "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop";

export default function LegalLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Header Premium - Épuré, Bleu Nuit intense pour faire ressortir la Navbar */}
            <div className="bg-[#020617] pt-40 pb-28 relative overflow-hidden">
                {/* Effet de lueur subtile bleu/primaire */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-bold mb-6 backdrop-blur-md">
                        <ShieldCheck size={14} /> Centre Légal U-Gate
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Espace de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-200">Confiance</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl font-light">
                        La gestion syndicale moderne exige une transparence absolue. Retrouvez ici nos engagements pour protéger vos organisations et vos membres.
                    </p>
                </div>
            </div>

            {/* Contenu Principal */}
            <div className="max-w-7xl mx-auto px-6 py-12 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Sidebar Légal (Gauche) */}
                    <aside className="lg:col-span-3">
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-4 sticky top-28">
                            <nav className="flex flex-col gap-2">
                                {legalLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300",
                                                isActive
                                                    ? "bg-primary-50 text-primary-700 shadow-sm"
                                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                            )}
                                        >
                                            <link.icon size={18} className={isActive ? "text-primary-600" : "text-slate-400"} />
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Zone de Texte + Image (Droite) */}
                    <main className="lg:col-span-9 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                        {/* Colonne du Texte (Le contenu légal) */}
                        <div className="flex-1 p-8 md:p-12 xl:p-14 overflow-y-auto">
                            {children}
                        </div>

                        {/* Colonne de l'Image Intégrée (Droite) */}
                        <div className="hidden md:flex w-2/5 relative bg-slate-900 flex-col justify-end overflow-hidden border-l border-slate-100">

                            {/* L'image avec effet "Premium Duotone" pour s'intégrer au thème de l'app */}
                            <img
                                src={SYNDICATE_TRUST_IMAGE}
                                alt="Union et Solidarité"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Overlay Bleu marine (Teinte l'image aux couleurs de U-Gate) */}
                            <div className="absolute inset-0 bg-primary-900/40 mix-blend-overlay" />

                            {/* Dégradé interne pour la douceur */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                            {/* Petit badge par-dessus l'image pour renforcer l'aspect syndical */}
                            <div className="relative z-10 p-10 text-white">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-4">
                                    <Users size={24} className="text-primary-300" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">La force du collectif.</h3>
                                <p className="text-sm text-slate-300 font-light leading-relaxed">
                                    Vos données et vos droits sont protégés par les standards de sécurité les plus stricts de l'industrie.
                                </p>
                            </div>
                        </div>
                    </main>

                </div>
            </div>

            <Footer />
        </div>
    );
}