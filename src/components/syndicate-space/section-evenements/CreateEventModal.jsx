// src/components/syndicate-space/section-evenements/CreateEventModal.jsx

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { createEventAPI } from '@/lib/api/event';
import { ugateInstance } from '@/lib/api/instance'; // Pour récupérer les branches
import EventForm from './EventForm';

export default function CreateEventModal({ isOpen, onClose, onRefresh }) {
    const { user } = useUser(); 
    const params = useParams();
    const syndicatId = params.syndicatId; // ID global du syndicat depuis l'URL
    
    const t = useTranslations('create_event_modal');
    
    const [isLoading, setIsLoading] = useState(false);
    const [branches, setBranches] = useState([]);
    const [selectedBranchId, setSelectedBranchId] = useState(null);
    const [isLoadingBranches, setIsLoadingBranches] = useState(true);

    // 1. CHARGER LES BRANCHES AU DÉMARRAGE
    useEffect(() => {
        if (isOpen && syndicatId) {
            const fetchBranches = async () => {
                setIsLoadingBranches(true);
                try {
                    // On récupère les branches via l'API ugate
                    const response = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
                    const data = response.data || [];
                    setBranches(data);
                    
                    // Si des branches existent, on sélectionne la première par défaut
                    if (data.length > 0) {
                        setSelectedBranchId(data[0].id);
                    }
                } catch (error) {
                    console.error("Erreur branches:", error);
                    toast.error("Impossible de récupérer les antennes du syndicat.");
                } finally {
                    setIsLoadingBranches(false);
                }
            };
            fetchBranches();
        }
    }, [isOpen, syndicatId]);

    // 2. SOUMISSION DU FORMULAIRE
    const handleSubmit = async (formValues) => {
        if (!user?.id) {
            toast.error("Vous devez être connecté");
            return;
        }

        if (!selectedBranchId) {
            toast.error("Veuillez d'abord créer une antenne (branche) pour ce syndicat.");
            return;
        }

        setIsLoading(true);
        try {
            // On envoie le selectedBranchId au lieu du syndicatId
            await createEventAPI(
                selectedBranchId, 
                formValues, 
                formValues.imageFile ? [formValues.imageFile] : []
            );
            
            toast.success("Événement créé avec succès !");
            onClose();
            if (onRefresh) onRefresh();
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Erreur lors de la création";
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ scale: 0.9 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0.9 }} 
                        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-2xl">
                            <h2 className="text-xl font-bold text-gray-900">
                                {t('modal_title', "Créer un événement")}
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Contenu */}
                        <div className="flex-grow overflow-y-auto p-6">
                            {isLoadingBranches ? (
                                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                                    <Loader2 className="w-8 h-8 animate-spin mb-4 text-blue-600" />
                                    <p>Vérification des antennes du syndicat...</p>
                                </div>
                            ) : branches.length === 0 ? (
                                // Cas où aucune branche n'existe
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <AlertCircle className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Aucune antenne trouvée</h3>
                                    <p className="text-gray-600 mb-6 px-4">
                                        Vous devez créer au moins une implantation (branche) pour ce syndicat dans les paramètres avant de pouvoir organiser des événements.
                                    </p>
                                    <button 
                                        onClick={onClose}
                                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
                                    >
                                        Fermer
                                    </button>
                                </div>
                            ) : (
                                // Tout est OK, on affiche le formulaire
                                <EventForm 
                                    onSubmit={handleSubmit} 
                                    isLoading={isLoading} 
                                />
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}