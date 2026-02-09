"use client";

import { motion } from 'framer-motion';

const stats = [
    { label: "Syndicats Actifs", value: "120+", color: "text-blue-400" },
    { label: "Membres Connectés", value: "50k+", color: "text-emerald-400" },
    { label: "Votes Sécurisés", value: "15k+", color: "text-purple-400" },
    { label: "Taux de Satisfaction", value: "98%", color: "text-amber-400" },
];

export default function Stats() {
    return (
        <section className="relative py-12 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} tracking-tighter`}>
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}