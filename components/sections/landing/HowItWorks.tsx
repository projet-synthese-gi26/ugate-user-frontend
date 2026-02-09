"use client";

import { motion } from 'framer-motion';
import { UserPlus, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from '@/navigation';

const steps = [
    {
        num: "01",
        title: "Créer un Syndicat",
        desc: "Les leaders utilisent le Dashboard Admin pour créer leur entité. Une seule création autorisée par compte président.",
        icon: Building,
        action: "Lien Admin",
        link: "https://ugate-admin-frontend.vercel.app/"
    },
    {
        num: "02",
        title: "Validation & Certif.",
        desc: "Notre autorité vérifie les documents légaux. Une fois approuvé, le syndicat devient visible sur la plateforme publique.",
        icon: CheckCircle2,
        action: null
    },
    {
        num: "03",
        title: "Rejoindre & Participer",
        desc: "Les membres explorent les syndicats certifiés, adhèrent et accèdent à leurs outils (votes, events, marketplace).",
        icon: UserPlus,
        action: "Explorer",
        link: "/explorer"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-950 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Un écosystème, deux expériences</h2>
                        <p className="text-slate-400 text-lg">Que vous soyez un leader souhaitant structurer son organisation ou un membre cherchant à s'engager, U-Gate simplifie le processus.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Ligne de connexion (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-900 via-primary-500 to-primary-900 opacity-30" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-primary-500/30 transition-colors group">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors shadow-lg">
                                        <step.icon size={28} />
                                    </div>
                                    <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">{step.num}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{step.desc}</p>

                                {step.action && step.link && (
                                    step.link.startsWith('http') ? (
                                        <a href={step.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary-400 font-bold hover:text-white transition-colors mt-auto">
                                            {step.action === "Lien Admin" ? "Accéder au Portail Admin" : "Commencer"} <ArrowRight size={16} />
                                        </a>
                                    ) : (
                                        <Link href={step.link} className="flex items-center gap-2 text-primary-400 font-bold hover:text-white transition-colors mt-auto">
                                            Explorer les syndicats <ArrowRight size={16} />
                                        </Link>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}