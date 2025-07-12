"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from 'sweetalert2';
import { createSyndicateAPI } from '@/lib/api/syndicates';
import { useUser } from '@/context/UserContext';

import Step1_TypeSelection from './Step1_TypeSelection';
import Step2_AnonymousForm from './Step2_AnonymousForm';
import Step3_Antennes from './Step3_Antennes';

const Step2Accredited = ({ goBackToStep1 }) => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Fonctionnalité à venir</h2>
        <p className="text-gray-600 mb-6">Le processus de création pour les syndicats accrédités est en cours de développement.</p>
        <button onClick={goBackToStep1} className="text-blue-600 font-semibold">Retour</button>
    </div>
);

export function CreateSyndicateWizard({ onSuccess }) {
    const { user } = useUser();
    const [currentStep, setCurrentStep] = useState(1);
    const [syndicatType, setSyndicatType] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        email: "",
        description: "",
        type: "SOLE_PROPRIETORSHIP",
        foundedDate: new Date().toISOString().split('T')[0],
        logoFile: null,
    });

    const [antennes, setAntennes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const submissionFormData = new FormData();

            const syndicateData = {
                name: formData.name,
                shortName: formData.shortName,
                email: formData.email,
                description: formData.description,
                type: formData.type,
                foundedDate: formData.foundedDate,
                creatorEmail: user.email,
                branches: antennes.map(antenne => ({
                    name: antenne.name,
                    locationText: antenne.name,
                    latitude: antenne.latitude,
                    longitude: antenne.longitude
                }))
            };

            submissionFormData.append(
                'syndicateData', 
                new Blob([JSON.stringify(syndicateData)], { type: 'application/json' })
            );

            if (formData.logoFile) {
                submissionFormData.append('logoFile', formData.logoFile);
            } else {
                throw new Error("Le logo est obligatoire.");
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
                text: err.response?.data?.message || "Une erreur est survenue lors de la création.",
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
                                setFormData={setFormData}
                            />
                        </motion.div>
                    );
                }
                if (syndicatType === "accredited") {
                    return <Step2Accredited goBackToStep1={goBackToStep1} />;
                }
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
                return <Step1_TypeSelection handleTypeSelection={handleTypeSelection} />;
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