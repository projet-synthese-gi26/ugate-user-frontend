"use client";

import { motion } from 'framer-motion';

export default function TabButton({ active, icon: Icon, label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center px-4 sm:px-5 py-2.5 rounded-lg font-semibold transition-colors duration-200 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-800 ${
                active 
                    ? 'text-white' 
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
            }`}
            whileHover={{ scale: active ? 1 : 1.03 }}
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