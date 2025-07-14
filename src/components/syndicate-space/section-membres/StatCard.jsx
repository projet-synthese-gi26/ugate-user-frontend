"use client";

import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label, color }) {
    return (
        <motion.div
            className={`bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border-l-4 ${color}`}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center">
                <div className={`p-3 rounded-xl ${color.replace('border-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
                    <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
                </div>
                <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </div>
            </div>
        </motion.div>
    );
}