// src/components/forms/adhesion/AdhereSyndicatForm.jsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { AntenneSelection } from "./AntenneSelection.jsx";
import { UserTypeSelection } from "./UserTypeSelection.jsx";
import { IndividualForm } from "./IndividualMembershipForm.jsx";
import { Confirmation } from "./MembershipConfirmation.jsx";
import { getSyndicateBranchesAPI } from "@/lib/api/syndicates";

export const AdhereSyndicatForm = ({ syndicat, onComplete }) => {
    const t = useTranslations('adhesion_form');
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAntenne, setSelectedAntenne] = useState(null);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [formData, setFormData] = useState({});
    const [membershipId, setMembershipId] = useState(null);

    // États pour les branches dynamiques
    const [branches, setBranches] = useState([]);
    const [isLoadingBranches, setIsLoadingBranches] = useState(true);
    const [branchesError, setBranchesError] = useState(null);

    // Charger les branches du syndicat
    useEffect(() => {
        const loadBranches = async () => {
            if (!syndicat?.id) return;

            setIsLoadingBranches(true);
            setBranchesError(null);

            try {
                // D'abord vérifier si le syndicat a déjà ses branches
                if (syndicat.branches && syndicat.branches.length > 0) {
                    setBranches(syndicat.branches);
                } else {
                    // Sinon, les charger depuis l'API
                    const data = await getSyndicateBranchesAPI(syndicat.id);
                    setBranches(data || []);
                }
            } catch (error) {
                console.error("Erreur chargement branches:", error);
                setBranchesError("Impossible de charger les antennes");
            } finally {
                setIsLoadingBranches(false);
            }
        };

        loadBranches();
    }, [syndicat]);

    const generateMembershipId = () => {
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substr(2, 4).toUpperCase();
        return `ADH-${syndicat?.short_name || 'SYN'}-${timestamp}-${random}`;
    };

    const handleFormSubmit = (data) => {
        const id = generateMembershipId();
        setMembershipId(id);
        setCurrentStep(4);
    };

    const nextStep = () => { if (currentStep < 4) setCurrentStep(currentStep + 1); };
    const prevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

    const canProceed = () => {
        if (currentStep === 1) return selectedAntenne !== null;
        if (currentStep === 2) return selectedUserType !== null;
        return false;
    };

    const steps = [ t('adhesion_wizard.step1_name'), t('adhesion_wizard.step2_name'), t('adhesion_wizard.step3_name'), t('adhesion_wizard.step4_name') ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    {steps.map((name, index) => {
                        const step = index + 1;
                        return (
                            <div key={step} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${ currentStep >= step ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600' }`}>
                                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                                </div>
                                {step < steps.length && ( <div className={`w-12 sm:w-20 lg:w-32 h-1 mx-2 transition-colors duration-500 ${ currentStep > step ? 'bg-blue-600' : 'bg-gray-200' }`} /> )}
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-3">
                    <p className="font-semibold text-gray-800">{steps[currentStep - 1]}</p>
                    <p className="text-sm text-gray-500">{t('adhesion_wizard.step_of', { current: currentStep, total: steps.length })}</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    {currentStep === 1 && (
                        isLoadingBranches ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
                                <p className="text-gray-600">{t('adhesion_wizard.loading_branches')}</p>
                            </div>
                        ) : branchesError ? (
                            <div className="text-center py-12">
                                <p className="text-red-600 mb-4">{branchesError}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    {t('adhesion_wizard.retry')}
                                </button>
                            </div>
                        ) : branches.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-600">{t('adhesion_wizard.no_branches')}</p>
                            </div>
                        ) : (
                            <AntenneSelection antennes={branches} onSelect={setSelectedAntenne} selectedAntenne={selectedAntenne} />
                        )
                    )}
                    {currentStep === 2 && <UserTypeSelection onSelect={setSelectedUserType} selectedType={selectedUserType} />}
                    {currentStep === 3 && <IndividualForm onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />}
                    {currentStep === 4 && <Confirmation membershipId={membershipId} antenne={selectedAntenne} onComplete={onComplete} />}
                </motion.div>
            </AnimatePresence>

            {currentStep < 4 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <motion.button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-lg flex items-center font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={currentStep > 1 ? { scale: 1.05 } : {}}>
                        <ChevronLeft className="w-5 h-5 mr-2" /> {t('adhesion_wizard.previous')}
                    </motion.button>
                    {currentStep < 3 && (
                        <motion.button onClick={nextStep} disabled={!canProceed()} className="px-6 py-2 rounded-lg flex items-center font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed" whileHover={canProceed() ? { scale: 1.05 } : {}}>
                            {t('adhesion_wizard.next')} <ChevronRight className="w-5 h-5 ml-2" />
                        </motion.button>
                    )}
                </div>
            )}
        </div>
    );
};