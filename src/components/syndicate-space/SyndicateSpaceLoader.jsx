"use client";

import { motion } from 'framer-motion';

const SyndicateSpaceLoader = ({ 
    variant = 'full', 
    text = 'Chargement...',
    size = 'medium' 
}) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-6 h-6', 
        large: 'w-8 h-8'
    };

    const containerClasses = {
        full: 'fixed inset-0 bg-white dark:bg-neutral-900 flex items-center justify-center z-50',
        inline: 'flex items-center justify-center py-12',
        compact: 'flex items-center justify-center py-6'
    };

    const SpinnerDots = () => (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className={`${sizeClasses[size]} bg-primary-600 rounded-full`}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );

    const SpinnerCircle = () => (
        <motion.div
            className={`${sizeClasses[size]} border-3 border-neutral-200 dark:border-neutral-700 border-t-primary-600 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );

    const PulseLoader = () => (
        <motion.div
            className={`${sizeClasses[size]} bg-primary-600 rounded-full`}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={containerClasses[variant]}
        >
            <div className="flex flex-col items-center space-y-4">
                {variant === 'full' && (
                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700">
                        <SpinnerDots />
                    </div>
                )}
                {variant === 'inline' && <SpinnerCircle />}
                {variant === 'compact' && <PulseLoader />}
                
                {text && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                    >
                        {text}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

export default SyndicateSpaceLoader;

// Variations spécifiques pour différents contextes
export const SectionLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="inline" text={text} size="medium" />
);

export const CompactLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="compact" text={text} size="small" />
);

export const FullPageLoader = ({ text }) => (
    <SyndicateSpaceLoader variant="full" text={text} size="large" />
);

// Loader spécifique pour les cartes
export const CardSkeleton = ({ className = "" }) => (
    <div className={`bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 p-6 ${className}`}>
        <div className="animate-pulse">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl"></div>
                <div className="flex-1 space-y-3">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
                        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Loader pour les listes de membres
export const MemberRowSkeleton = () => (
    <tr className="animate-pulse">
        <td className="px-6 py-4">
            <div className="flex items-center">
                <div className="w-11 h-11 bg-neutral-200 dark:bg-neutral-700 rounded-xl"></div>
                <div className="ml-4">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-16"></div>
        </td>
        <td className="px-6 py-4">
            <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-20"></div>
        </td>
        <td className="px-6 py-4">
            <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-xl w-8"></div>
        </td>
    </tr>
);