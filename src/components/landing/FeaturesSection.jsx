"use client";

import { motion } from "framer-motion";
import { Shield, Users, Building, MessageSquare, Calendar, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "Sécurité & Conformité",
            description: "Plateforme sécurisée avec chiffrement des données et respect des réglementations."
        },
        {
            icon: Users,
            title: "Gestion des Membres",
            description: "Outils complets pour gérer les adhésions, cotisations et profils des membres."
        },
        {
            icon: Building,
            title: "Gouvernance Transparente",
            description: "Système de votes électroniques et tableaux de bord pour une gouvernance moderne."
        },
        {
            icon: MessageSquare,
            title: "Communication Intégrée",
            description: "Messagerie instantanée, forums et notifications pour une communication fluide."
        },
        {
            icon: Calendar,
            title: "Événements & Assemblées",
            description: "Organisation simplifiée d'événements avec gestion des inscriptions et rappels."
        },
        {
            icon: BarChart3,
            title: "Analyses & Reporting",
            description: "Tableaux de bord analytiques pour piloter votre organisation avec précision."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Une plateforme complète pour votre syndicat
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Découvrez les fonctionnalités qui transformeront la façon dont vous gérez 
                        votre organisation syndicale
                    </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
                        >
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6">
                                <feature.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}