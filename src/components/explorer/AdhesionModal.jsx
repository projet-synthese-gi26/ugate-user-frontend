"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import { getSyndicateBranchesAPI, requestMembershipAPI } from "@/lib/api/syndicates";

/**
 * AdhesionModal - Modale d'adhésion à un syndicat
 * Permet de sélectionner une branche et d'envoyer une demande d'adhésion
 *
 * @param {boolean} isOpen - État pour contrôler la visibilité de la modale
 * @param {function} onClose - Fonction pour fermer la modale
 * @param {object} syndicat - L'objet syndicat complet auquel l'utilisateur souhaite adhérer
 */
export default function AdhesionModal({ isOpen, onClose, syndicat }) {
    const t = useTranslations('adhesion_modal');

    // États
    const [branches, setBranches] = useState([]);
    const [selectedBranchId, setSelectedBranchId] = useState("");
    const [motivation, setMotivation] = useState("");
    const [isLoadingBranches, setIsLoadingBranches] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Charger les branches à l'ouverture de la modale
    useEffect(() => {
        const loadBranches = async () => {
            if (!isOpen || !syndicat?.id) return;

            setIsLoadingBranches(true);
            setError(null);

            try {
                const branchesData = await getSyndicateBranchesAPI(syndicat.id);
                setBranches(branchesData || []);

                // Si une seule branche, la sélectionner automatiquement
                if (branchesData && branchesData.length === 1) {
                    setSelectedBranchId(branchesData[0].id);
                }
            } catch (err) {
                console.error("Erreur chargement branches:", err);
                setError("Impossible de charger les branches du syndicat.");
            } finally {
                setIsLoadingBranches(false);
            }
        };

        loadBranches();
    }, [isOpen, syndicat?.id]);

    // Réinitialiser le formulaire à la fermeture
    useEffect(() => {
        if (!isOpen) {
            setSelectedBranchId("");
            setMotivation("");
            setError(null);
        }
    }, [isOpen]);

    // Validation du formulaire
    const isFormValid = selectedBranchId && motivation.trim().length >= 10;

    // Soumission de la demande
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid || isSubmitting) return;

        setIsSubmitting(true);
        setError(null);

        try {
            await requestMembershipAPI(syndicat.id, selectedBranchId, motivation.trim());

            toast.success(
                t('success_message') || "Demande envoyée, en attente de validation",
                { duration: 5000, icon: "✅" }
            );
            onClose();
        } catch (err) {
            console.error("Erreur soumission adhésion:", err);

            // Gestion des erreurs spécifiques
            if (err.response?.status === 400) {
                const errorMessage = err.response?.data?.message || "";
                if (errorMessage.toLowerCase().includes("already") || errorMessage.toLowerCase().includes("déjà")) {
                    setError(t('already_member_error') || "Vous avez déjà une demande en cours pour ce syndicat.");
                } else {
                    setError(errorMessage || "Une erreur est survenue. Veuillez réessayer.");
                }
            } else {
                setError(t('generic_error') || "Une erreur est survenue. Veuillez réessayer.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && syndicat && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget && !isSubmitting) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {t('title', { syndicatName: syndicat.name }) || `Rejoindre ${syndicat.name}`}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {t('subtitle') || "Complétez votre demande d'adhésion"}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    disabled={isSubmitting}
                                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                                    aria-label="Fermer"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Contenu */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* État de chargement des branches */}
                            {isLoadingBranches && (
                                <div className="flex items-center justify-center py-8">
                                    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                                </div>
                            )}

                            {/* Formulaire */}
                            {!isLoadingBranches && (
                                <>
                                    {/* Sélection de la branche */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            <Building2 className="w-4 h-4 inline mr-2 text-blue-600" />
                                            {t('branch_label') || "Choisir une branche (antenne)"}
                                        </label>

                                        {branches.length === 0 ? (
                                            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm">
                                                {t('no_branches') || "Ce syndicat n'a pas encore de branches disponibles."}
                                            </div>
                                        ) : branches.length === 1 ? (
                                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                                <div className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                                                    <span className="font-medium text-blue-900">{branches[0].name}</span>
                                                </div>
                                                {branches[0].location && (
                                                    <p className="text-sm text-blue-600 mt-1 ml-7">{branches[0].location}</p>
                                                )}
                                            </div>
                                        ) : (
                                            <select
                                                value={selectedBranchId}
                                                onChange={(e) => setSelectedBranchId(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer shadow-sm hover:border-gray-300"
                                                required
                                            >
                                                <option value="">{t('select_branch_placeholder') || "-- Sélectionnez une branche --"}</option>
                                                {branches.map((branch) => (
                                                    <option key={branch.id} value={branch.id}>
                                                        {branch.name} {branch.location ? `(${branch.location})` : ""}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>

                                    {/* Champ Motivation */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {t('motivation_label') || "Pourquoi souhaitez-vous rejoindre ce syndicat ?"}
                                            <span className="text-red-500 ml-1">*</span>
                                        </label>
                                        <textarea
                                            value={motivation}
                                            onChange={(e) => setMotivation(e.target.value)}
                                            placeholder={t('motivation_placeholder') || "Décrivez brièvement vos motivations (min. 10 caractères)..."}
                                            rows={4}
                                            minLength={10}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none shadow-sm hover:border-gray-300"
                                        />
                                        <p className="text-xs text-gray-400 text-right">
                                            {motivation.length}/10 caractères minimum
                                        </p>
                                    </div>

                                    {/* Message d'erreur */}
                                    {error && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start">
                                            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{error}</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </form>

                        {/* Footer avec boutons */}
                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isSubmitting}
                                className="px-5 py-2.5 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors disabled:opacity-50"
                            >
                                {t('cancel_button') || "Annuler"}
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!isFormValid || isSubmitting || branches.length === 0}
                                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        {t('submitting_button') || "Envoi en cours..."}
                                    </>
                                ) : (
                                    t('confirm_button') || "Confirmer l'adhésion"
                                )}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
