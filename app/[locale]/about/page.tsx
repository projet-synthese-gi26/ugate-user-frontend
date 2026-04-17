"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Users, Zap, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                <div className="max-w-6xl mx-auto relative z-10 text-center pt-20 pb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        Redéfinir le <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-200">Syndicalisme</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        U-Gate est la première plateforme premium dédiée à la gestion syndicale moderne. Nous unissons technologie et valeurs humaines pour redonner le pouvoir aux professionnels.
                    </motion.p>
                </div>
            </section>

            {/* Nos Valeurs */}
            <section className="py-24 px-6 relative z-20 -mt-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Transparence", desc: "Des processus clairs et des votes infalsifiables via blockchain." },
                        { icon: Users, title: "Communauté", desc: "Un espace d'échange sécurisé pour renforcer la cohésion." },
                        { icon: Zap, title: "Innovation", desc: "Des outils modernes pour une gestion administrative sans friction." },
                        { icon: Globe, title: "Accessibilité", desc: "Une plateforme disponible partout, sur tous vos appareils." }
                    ].map((valeur, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <valeur.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{valeur.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{valeur.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* L'Histoire */}
            <section className="py-20 px-6 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Né d'un besoin réel de modernisation.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Face à la complexité de la gestion administrative, aux défis de communication et au besoin croissant de transparence dans les processus de décision, U-Gate a été pensé comme la solution ultime.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Nous fournissons aux leaders les outils pour diriger efficacement, et aux membres la voix qu'ils méritent.
                        </p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Équipe U-Gate"
                            className="relative z-10 rounded-[3rem] shadow-2xl border border-slate-100 object-cover aspect-square md:aspect-[4/3]"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}