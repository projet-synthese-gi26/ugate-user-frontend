"use client";

import { motion } from 'framer-motion';

export default function TabButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm ${
                active 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-900/60'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            {active && (
                <motion.div
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-md"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
            )}
            <span className="relative z-10 flex items-center">
                <Icon className="w-5 h-5 mr-2" />
                {label}
            </span>
        </motion.button>
    );
}