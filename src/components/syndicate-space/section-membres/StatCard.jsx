"use client";

import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label, color }) {
    // We'll use a more consistent and professional color scheme based on blue.
    const blueColor = "blue";

    return (
        <motion.div
            className={`bg-white bg-neutral-800 p-5 rounded-xl shadow-soft border border-neutral-200/80 border-neutral-700/60 flex items-center gap-5`}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <div className={`p-3 rounded-lg bg-${blueColor}-100 bg-${blueColor}-900/20`}>
                <Icon className={`w-6 h-6 text-${blueColor}-600 text-${blueColor}-400`} />
            </div>
            <div>
                <div className="text-2xl font-bold text-neutral-800 text-white">{value}</div>
                <div className="text-sm text-neutral-500 text-neutral-400">{label}</div>
            </div>
        </motion.div>
    );
}