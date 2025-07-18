"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
    const stats = [
        { label: "Syndicats partenaires", value: "1,500+" },
        { label: "Membres actifs", value: "50,000+" },
        { label: "Satisfaction client", value: "98%" },
        { label: "Événements organisés", value: "3,200+" }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Une plateforme de confiance
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Rejoignez des milliers d'organisations qui nous font confiance
                    </p>
                </div>
                
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}