// src/components/forms/create-syndicate/CreateSyndicateWizard.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import { createSyndicate } from '@/lib/api/syndicates'; // Importation de la fonction API

// Importation des composants pour chaque étape
import Step1_TypeSelection from './Step1_TypeSelection';
import Step2_AnonymousForm from './Step2_AnonymousForm';
import Step3_Antennes from './Step3_Antennes';

// Ce composant est un placeholder pour l'étape de création de syndicat accrédité
const Step2Accredited = ({ goBackToStep1 }) => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalité à venir</h2>
        <p className="text-gray-600 mb-6">Le processus de création pour les syndicats accrédités est en cours de développement.</p>
        <button onClick={goBackToStep1} className="text-blue-600 font-semibold">Retour</button>
    </div>
);


/**
 * Le "wizard" ou assistant qui guide l'utilisateur à travers les étapes
 * de la création d'un syndicat.
 */
export function CreateSyndicateWizard({ onSuccess }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [syndicatType, setSyndicatType] = useState(""); // "anonymous" ou "accredited"

    // État centralisé pour toutes les données du formulaire
    const [formData, setFormData] = useState({
        long_name: "",
        short_name: "",
        email: "",
        description: "",
        type: "SOLE_PROPRIETORSHIP", // Valeur par défaut
        business_domains: [],
        web_site_url: "",
        social_network: "",
        logo_url: null,
        ceo_name: "",
    });

    const [antennes, setAntennes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fonctions de navigation entre les étapes
    const handleTypeSelection = (type) => {
        setSyndicatType(type);
        setCurrentStep(2);
    };

    const goBackToStep1 = () => setCurrentStep(1);
    const goToStep3 = (dataFromStep2) => {
        setFormData(prev => ({ ...prev, ...dataFromStep2 }));
        setCurrentStep(3);
    };
    const goBackToStep2 = () => setCurrentStep(2);

    // Soumission finale du formulaire
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const payload = { ...formData, antennes };

            // On peut ajouter une validation finale ici si besoin
            if (!payload.long_name || !payload.email) {
                throw new Error("Le nom et l'email du syndicat sont obligatoires.");
            }

            const result = await createSyndicate(payload);

            await Swal.fire({
                icon: 'success',
                title: 'Syndicat créé !',
                text: `Le syndicat "${result.long_name}" a été créé avec succès.`,
                timer: 2000,
                showConfirmButton: false,
            });

            if (onSuccess) {
                onSuccess(); // Appelle la fonction pour fermer la modale
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: err.message || "Une erreur est survenue lors de la création.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const animationProps = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.4, ease: "easeInOut" }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div key="step1" {...animationProps}>
                        <Step1_TypeSelection handleTypeSelection={handleTypeSelection} />
                    </motion.div>
                );
            case 2:
                if (syndicatType === "anonymous") {
                    return (
                        <motion.div key="step2-anon" {...animationProps}>
                            <Step2_AnonymousForm
                                initialData={formData}
                                onNext={goToStep3}
                                onBack={goBackToStep1}
                            />
                        </motion.div>
                    );
                }
                if (syndicatType === "accredited") {
                    return (
                        <motion.div key="step2-accred" {...animationProps}>
                            <Step2Accredited goBackToStep1={goBackToStep1} />
                        </motion.div>
                    );
                }
                // Fallback si le type n'est pas défini, retourne à l'étape 1
                return goBackToStep1();
            case 3:
                return (
                    <motion.div key="step3-antennes" {...animationProps}>
                        <Step3_Antennes
                            onBack={goBackToStep2}
                            onSubmit={handleSubmit}
                            antennes={antennes}
                            setAntennes={setAntennes}
                            isLoading={isLoading}
                        />
                    </motion.div>
                );
            default:
                return (
                    <motion.div key="default" {...animationProps}>
                        <Step1_TypeSelection handleTypeSelection={handleTypeSelection} />
                    </motion.div>
                );
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
                {renderStep()}
            </AnimatePresence>
        </div>
    );
};