"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Building2, Vote, FileCheck, MessageSquare,
    ShoppingBag, BarChart, CheckCircle2, ArrowRight,
    ThumbsUp, Heart
} from "lucide-react";
import { Link } from "@/navigation";

// Images sélectionnées (Professionnels noirs & VTC)
// 1. Réseau social / Échange entre professionnels
const IMAGE_SOCIAL = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop";
// 2. Chauffeur VTC / Transport
const IMAGE_DRIVER = "https://images.unsplash.com/photo-1569433295058-aaa6338e25c4?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Icônes unifiées en Bleu (Charte U-Gate)
const servicesList = [
    {
        title: "Réseau Social Privé",
        desc: "Un fil d'actualité sécurisé pour votre antenne. Partagez, commentez et interagissez comme sur vos réseaux préférés.",
        icon: MessageSquare,
    },
    {
        title: "Gestion Syndicale",
        desc: "Administrez vos membres depuis un tableau de bord unique. Fini les fichiers Excel éparpillés.",
        icon: Building2,
    },
    {
        title: "Votes Sécurisés",
        desc: "Organisez des assemblées générales et des sondages avec des résultats infalsifiables en temps réel.",
        icon: Vote,
    },
    {
        title: "Conformité Légale",
        desc: "Vérification intelligente des documents (CNI, Permis). Un jumeau numérique toujours à jour.",
        icon: FileCheck,
    },
    {
        title: "Marketplace Exclusive",
        desc: "Offrez à vos membres des avantages négociés : assurances, équipements, services partenaires.",
        icon: ShoppingBag,
    },
    {
        title: "Analytique & Rapports",
        desc: "Comprenez l'engagement de vos membres grâce à des statistiques détaillées sur votre syndicat.",
        icon: BarChart,
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
            <Navbar />

            {/* 1. HERO SECTION (Sombre & Premium) */}
            <div className="bg-[#020617] pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
                {/* Lueur bleue asymétrique */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-primary-600/15 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-xs font-bold mb-6 backdrop-blur-md">
                            Services U-Gate
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                            Plus qu'un outil de gestion, <br className="hidden md:block" />
                            un véritable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-200">réseau social</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Connectez vos membres, sécurisez vos décisions et automatisez votre conformité dans un espace privé conçu pour les professionnels.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. BLOC 1 : RÉSEAU SOCIAL (Image fondue à GAUCHE) */}
            <section className="relative py-32 overflow-hidden bg-slate-50">
                {/*
                  CONTENEUR FOND : Applique le masque de fondu (mask-image)
                  sur l'image ET sur son filtre bleu en même temps
                */}
                <div
                    className="absolute top-0 left-0 w-full md:w-3/5 h-full opacity-40 md:opacity-100"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
                    }}
                >
                    {/* L'image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${IMAGE_SOCIAL})` }}
                    />
                    {/* Le Filtre Bleu Premium (Multiply assombrit en teintant, Overlay redonne du contraste) */}
                    <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-end">
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                                Une communauté connectée au quotidien.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Finis les groupes WhatsApp saturés et désorganisés. U-Gate offre à votre syndicat un fil d'actualité premium où chaque voix compte, le tout dans un cadre sécurisé et professionnel.
                            </p>

                            <div className="space-y-6 mb-10">
                                {[
                                    "Publications, likes et commentaires en temps réel.",
                                    "Partage de documents PDF (Chartes, PV de réunions).",
                                    "Annonces officielles épinglées par les administrateurs."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="text-primary-600" size={16} />
                                        </div>
                                        <span className="text-slate-700 font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Éléments flottants animés (Fake UI Social) */}
                            <div className="flex gap-4">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-white rounded-full px-4 py-2 shadow-xl shadow-primary-900/10 flex items-center gap-2 border border-slate-100"
                                >
                                    <ThumbsUp size={16} className="text-primary-600" /> <span className="text-sm font-bold text-slate-700">124</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="bg-white rounded-full px-4 py-2 shadow-xl shadow-primary-900/10 flex items-center gap-2 border border-slate-100"
                                >
                                    <Heart size={16} className="text-red-500" /> <span className="text-sm font-bold text-slate-700">Adore</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. GRILLE DE SERVICES (Unifiée en Bleu) */}
            <section className="py-24 px-6 bg-white relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">L'arsenal complet du leader</h2>
                        <p className="text-slate-500 text-lg">Toutes les fonctionnalités dont vous avez besoin pour structurer votre réseau.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-900/5 hover:border-primary-200 transition-all duration-500 group"
                            >
                                {/* Icône unifiée en bleu */}
                                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BLOC 2 : MOBILITÉ & VTC (Image fondue à DROITE) */}
            <section className="relative py-32 overflow-hidden bg-slate-50 border-t border-slate-100">

                {/*
                  CONTENEUR FOND : Applique le masque de fondu (mask-image)
                  sur l'image ET sur son filtre bleu en même temps
                */}
                <div
                    className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-40 md:opacity-100"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${IMAGE_DRIVER})` }}
                    />
                    <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                                Conçu pour le terrain et la mobilité.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Que vous soyez chauffeur de taxi, VTC ou logisticien, votre métier vous garde en mouvement. U-Gate vous accompagne partout, transformant votre smartphone en véritable bureau syndical.
                            </p>

                            <ul className="space-y-5 mb-10">
                                {[
                                    "Jumeau numérique de vos pièces (Permis, CNI).",
                                    "Preuve de conformité instantanée pour les contrôles.",
                                    "Accès direct aux services partenaires (Ride & Go, TraMaSys)."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-3 rounded-2xl border border-white">
                                        <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                                            <span className="font-bold">{i + 1}</span>
                                        </div>
                                        <span className="text-slate-800 font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/register" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary-600 transition-all duration-300 shadow-xl shadow-slate-900/20 hover:scale-105 hover:pr-6 group">
                                Rejoindre le réseau
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}