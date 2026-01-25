"use client";

import { motion } from 'framer-motion';
import { 
    AlertTriangle, 
    Wifi, 
    Shield, 
    RefreshCw, 
    Home, 
    AlertCircle,
    Lock,
    Clock,
    Bug,
    CheckCircle2
} from 'lucide-react';

const getErrorIcon = (errorType) => {
    switch (errorType) {
        case 'NETWORK':
            return Wifi;
        case 'AUTH':
            return Lock;
        case 'PERMISSION':
            return Shield;
        case 'NOT_FOUND':
            return AlertTriangle;
        case 'RATE_LIMIT':
            return Clock;
        case 'SERVER':
            return AlertCircle;
        case 'VALIDATION':
            return AlertTriangle;
        default:
            return Bug;
    }
};

const getErrorColor = (errorType) => {
    switch (errorType) {
        case 'NETWORK':
            return 'text-orange-600 bg-orange-50 border-orange-200 text-orange-400 bg-orange-950 border-orange-800';
        case 'AUTH':
            return 'text-red-600 bg-red-50 border-red-200 text-red-400 bg-red-950 border-red-800';
        case 'PERMISSION':
            return 'text-yellow-600 bg-yellow-50 border-yellow-200 text-yellow-400 bg-yellow-950 border-yellow-800';
        case 'SERVER':
            return 'text-red-600 bg-red-50 border-red-200 text-red-400 bg-red-950 border-red-800';
        case 'RATE_LIMIT':
            return 'text-purple-600 bg-purple-50 border-purple-200 text-purple-400 bg-purple-950 border-purple-800';
        default:
            return 'text-neutral-600 bg-neutral-50 border-neutral-200 text-neutral-400 bg-neutral-900 border-neutral-700';
    }
};

// Composant d'erreur complet pour les sections
export const ErrorState = ({ 
    error, 
    onRetry, 
    onDismiss,
    variant = 'default',
    className = '' 
}) => {
    if (!error) return null;

    const Icon = getErrorIcon(error.type);
    const colorClasses = getErrorColor(error.type);

    const variants = {
        default: 'p-8 rounded-2xl border',
        compact: 'p-4 rounded-xl border',
        minimal: 'p-3 rounded-lg border'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${variants[variant]} ${colorClasses} ${className}`}
        >
            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-current/10">
                        <Icon className="w-8 h-8" />
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">
                    {error.title}
                </h3>
                
                <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
                    {error.message}
                </p>

                <div className="flex justify-center gap-3">
                    {onRetry && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onRetry}
                            className="px-4 py-2 bg-current/10 hover:bg-current/20 text-current rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            {error.action || 'Réessayer'}
                        </motion.button>
                    )}
                    
                    {onDismiss && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onDismiss}
                            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 bg-neutral-800 hover:bg-neutral-700 text-neutral-700 text-neutral-300 rounded-xl font-medium transition-all duration-200"
                        >
                            Fermer
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Composant d'erreur inline pour les formulaires
export const InlineError = ({ error, className = '' }) => {
    if (!error) return null;

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`flex items-center gap-2 p-3 bg-red-50 bg-red-950 border border-red-200 border-red-800 rounded-xl text-red-600 text-red-400 text-sm ${className}`}
        >
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error.message}</span>
        </motion.div>
    );
};

// Composant de fallback pour les erreurs critiques
export const ErrorFallback = ({ 
    error, 
    resetError, 
    title = "Quelque chose s'est mal passé",
    subtitle = "Une erreur inattendue s'est produite. Vous pouvez réessayer ou retourner à l'accueil."
}) => {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
            <div className="text-center max-w-md">
                <div className="mb-6">
                    <div className="w-20 h-20 bg-red-100 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-10 h-10 text-red-600 text-red-400" />
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold text-neutral-800 text-white mb-3">
                    {title}
                </h2>
                
                <p className="text-neutral-600 text-neutral-400 mb-8">
                    {subtitle}
                </p>

                <div className="flex justify-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetError}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Réessayer
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/home'}
                        className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 bg-neutral-800 hover:bg-neutral-700 text-neutral-700 text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Accueil
                    </motion.button>
                </div>

                {process.env.NODE_ENV === 'development' && error && (
                    <details className="mt-8 p-4 bg-neutral-100 bg-neutral-800 rounded-xl text-left">
                        <summary className="cursor-pointer text-sm font-medium text-neutral-700 text-neutral-300">
                            Détails de l'erreur (dev)
                        </summary>
                        <pre className="mt-2 text-xs text-neutral-600 text-neutral-400 overflow-auto">
                            {error?.stack || error?.toString()}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    );
};

// Composant d'état vide avec design amélioré
export const EmptyState = ({ 
    icon: Icon = CheckCircle2,
    title = "Aucune donnée",
    description = "Il n'y a rien à afficher pour le moment.",
    action = null,
    className = ''
}) => {
    return (
        <div className={`text-center p-12 ${className}`}>
            <div className="mb-6">
                <div className="w-16 h-16 bg-neutral-100 bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-neutral-400 text-neutral-500" />
                </div>
            </div>
            
            <h3 className="text-lg font-semibold text-neutral-800 text-white mb-2">
                {title}
            </h3>
            
            <p className="text-neutral-600 text-neutral-400 mb-6 max-w-sm mx-auto">
                {description}
            </p>

            {action && (
                <div className="flex justify-center">
                    {action}
                </div>
            )}
        </div>
    );
};

// Composant de notification de succès
export const SuccessState = ({ 
    title = "Succès !",
    message,
    onDismiss,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-4 bg-emerald-50 bg-emerald-950 border border-emerald-200 border-emerald-800 rounded-xl ${className}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-emerald-800 text-emerald-200">
                        {title}
                    </h4>
                    {message && (
                        <p className="text-sm text-emerald-700 text-emerald-300 mt-1">
                            {message}
                        </p>
                    )}
                </div>
                {onDismiss && (
                    <button
                        onClick={onDismiss}
                        className="flex-shrink-0 text-emerald-600 hover:text-emerald-800 text-emerald-400 hover:text-emerald-200"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
        </motion.div>
    );
};