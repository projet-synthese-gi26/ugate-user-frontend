
"use client";

import { motion } from 'framer-motion';
import { Building, Users, TrendingUp, BarChart2 } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';

const statistics = [
    { id: 1, name: "Syndicats inscrits", value: 1500, icon: Building },
    { id: 2, name: "Utilisateurs actifs", value: 50000, icon: Users },
    { id: 3, name: "Taux de satisfaction", value: 98, icon: TrendingUp },
    { id: 4, name: "Événements organisés", value: 3200, icon: BarChart2 },
];

const t = (key) => key.replace(/_/g, ' '); // Placeholder

function StatCard({ stat }) {
    const Icon = stat.icon;
    return (
        <motion.div
            className="bg-white rounded-lg p-6 text-center shadow-md transition duration-300 hover:shadow-xl"
            whileHover={{ y: -5 }}
        >
            <Icon className="h-12 w-12 text-[#6BAED6] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                {stat.name === "Taux de satisfaction" ? `${stat.value}%` : stat.value.toLocaleString()}
            </h3>
            <p className="text-indigo-700">{stat.name}</p>
        </motion.div>
    );
}

export default function StatsSection() {
    return (
        <ClientMotionWrapper delay={1.0} className="py-16 bg-gradient-to-r from-[#6BAED6] to-indigo-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
                    {t("syndicmanager_en_chiffres")}
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {statistics.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>
            </div>
        </ClientMotionWrapper>
    );
}