// src/components/explorer/AdhesionModal.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AdhereSyndicatForm } from "../forms/adhesion/AdhereSyndicatForm"; // Assurez-vous que le chemin est correct

/**
 * AdhesionModal est le composant "wrapper" qui affiche le wizard d'adhésion
 * dans une fenêtre modale.
 * @param {boolean} isOpen - État pour contrôler la visibilité de la modale.
 * @param {function} onClose - Fonction pour fermer la modale.
 * @param {object} syndicat - L'objet syndicat auquel l'utilisateur souhaite adhérer.
 */
export default function AdhesionModal({ isOpen, onClose, syndicat }) {
    const t = useTranslations('adhesion_modal');

    return (
        <AnimatePresence>
            {isOpen && syndicat && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    // Permet de fermer la modale en cliquant sur le fond
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-gray-50 dark:bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl"
                        // Empêche la propagation du clic pour ne pas fermer la modale en cliquant dessus
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header de la Modale */}
                        <div className="sticky top-0 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded-t-2xl z-10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('adhesion_modal.title', { syndicatName: syndicat.name })}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t('adhesion_modal.subtitle')}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                aria-label="Fermer la modale"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Contenu de la Modale (le wizard) */}
                        <div className="flex-grow overflow-y-auto">
                            <AdhereSyndicatForm
                                syndicat={syndicat}
                                // La fonction `onClose` est passée au wizard pour qu'il puisse
                                // fermer la modale lui-même une fois le processus terminé.
                                onComplete={onClose}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}