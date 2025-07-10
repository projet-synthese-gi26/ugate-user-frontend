// src/components/settings/FormSection.jsx
"use client";

import { motion } from 'framer-motion';

export default function FormSection({ title, icon: Icon, children }) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Icon className="w-6 h-6 mr-3 text-blue-500" />
                {title}
            </h3>
            <div className="space-y-6">
                {children}
            </div>
        </motion.div>
    );
}