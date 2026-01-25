"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import { useTranslations } from 'next-intl';
import { createSyndicateAPI } from '@/lib/api/syndicates';
import { useUser } from '@/context/UserContext';

// On garde uniquement les composants nécessaires
import Step2_AnonymousForm from './Step2_AnonymousForm';
import Step3_Antennes from './Step3_Antennes';

export function CreateSyndicateWizard({ onSuccess }) {
    const { user } = useUser();
    const t = useTranslations('create_syndicate');
    
    // MODIFICATION : On commence directement à l'étape 1 (qui est maintenant le formulaire)
    const [currentStep, setCurrentStep] = useState(1);
    
    // On force le type à "anonymous" par défaut
    const [syndicatType] = useState("anonymous");

    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        email: "",
        description: "",
        type: "SOLE_PROPRIETORSHIP",
        domain: "",
        foundedDate: new Date().toISOString().split('T')[0],
        logoFile: null,
        documentFile: null,
    });

    const [antennes, setAntennes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Navigation entre les étapes simplifiée
    const goToStep2 = (dataFromStep1) => {
        setFormData(prev => ({ ...prev, ...dataFromStep1 }));
        setCurrentStep(2);
    };
    
    const goBackToStep1 = () => setCurrentStep(1);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const submissionFormData = new FormData();

            submissionFormData.append('name', formData.name);
            submissionFormData.append('description', formData.description);
            submissionFormData.append('domain', formData.domain);

            if (formData.logoFile) {
                submissionFormData.append('logo', formData.logoFile);
            } else {
                throw new Error("Le logo est obligatoire.");
            }

            if (formData.documentFile) {
                submissionFormData.append('document', formData.documentFile);
            } else {
                throw new Error("Le document des statuts est obligatoire.");
            }

            const result = await createSyndicateAPI(submissionFormData);

            await Swal.fire({
                icon: 'success',
                title: 'Syndicat créé !',
                text: `Le syndicat "${result.name}" a été créé avec succès.`,
                timer: 2000,
                showConfirmButton: false,
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: err.response?.data?.message || err.message || "Une erreur est survenue.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const animationProps = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3, ease: "easeInOut" }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div key="step-form" {...animationProps}>
                        <Step2_AnonymousForm
                            initialData={formData}
                            onNext={goToStep2}
                            onBack={null} // Pas de retour possible car c'est la première étape
                            setFormData={setFormData}
                        />
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div key="step-antennes" {...animationProps}>
                        <Step3_Antennes
                            onBack={goBackToStep1}
                            onSubmit={handleSubmit}
                            antennes={antennes}
                            setAntennes={setAntennes}
                            isLoading={isLoading}
                        />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-2 sm:p-4 bg-white"> {/* Forcé en blanc */}
            <AnimatePresence mode="wait">
                {renderStep()}
            </AnimatePresence>
        </div>
    );
};