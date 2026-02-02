"use client";

import { X, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PDFViewerProps {
    isOpen: boolean;
    onClose: () => void;
    url: string | null;
    title: string;
}

export default function PDFViewer({ isOpen, onClose, url, title }: PDFViewerProps) {
    if (!isOpen || !url) return null;

    // Astuce : On utilise le viewer Google pour contourner les restrictions X-Frame-Options/CORS
    // Cela garantit l'affichage même si le serveur de fichiers est strict.
    const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

                {/* Backdrop sombre flouté (cliquer pour fermer) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-all"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700"
                >
                    {/* Header du Viewer Premium */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 shadow-sm">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm md:text-base line-clamp-1">{title}</h3>
                                <p className="text-xs text-slate-500 font-medium">Document certifié</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Bouton de Secours (Ouvrir l'original) */}
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-primary-600 transition-colors"
                            >
                                <ExternalLink size={14} />
                                Ouvrir l'original
                            </a>

                            {/* Bouton Fermer */}
                            <button
                                onClick={onClose}
                                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Zone de lecture avec Fallback */}
                    <div className="flex-1 bg-slate-100 relative w-full h-full">
                        <iframe
                            src={viewerUrl}
                            className="w-full h-full border-none"
                            title={title}
                            allowFullScreen
                        />

                        {/* Message si le chargement est long ou échoue (affiché derrière l'iframe) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-slate-400">
                            <div className="animate-pulse">Chargement du document...</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}