// src/components/forms/adhesion/AntenneSelection.jsx
"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle, MapPin, Navigation, Users, Award } from "lucide-react";

export const AntenneSelection = ({ antennes, onSelect, selectedAntenne }) => {
    // Helper function to handle both API and fake data field names
    const getBranchName = (branch) => branch.nom || branch.name || 'Antenne';
    const getBranchLocation = (branch) => branch.localisation || branch.location || branch.address || '';
    const getBranchMemberCount = (branch) => branch.membres || branch.membersCount || branch.memberCount || 0;
    const getBranchSpecialties = (branch) => branch.specialites || branch.specialties || [];

    return (
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    Choisissez votre antenne
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Sélectionnez l'antenne la plus proche ou celle qui correspond à votre secteur.
                </p>
                <div className="mt-4 inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Navigation className="w-4 h-4 mr-2" /> {antennes.length} antennes disponibles
                </div>
            </motion.div>

            <motion.div
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                {antennes.map((antenne) => {
                    const isSelected = selectedAntenne?.id === antenne.id;
                    const memberCount = getBranchMemberCount(antenne);
                    const specialties = getBranchSpecialties(antenne);

                    return (
                        <motion.div
                            key={antenne.id}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ y: -5 }}
                            onClick={() => onSelect(antenne)}
                            className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                                isSelected
                                    ? 'ring-4 ring-blue-500 shadow-2xl'
                                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                            }`}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{getBranchName(antenne)}</h3>
                                {getBranchLocation(antenne) && (
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                        <span className="truncate">{getBranchLocation(antenne)}</span>
                                    </div>
                                )}
                                <div className="space-y-2">
                                    {memberCount > 0 && (
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Users className="w-4 h-4 mr-2 text-blue-500" />{memberCount} membres
                                        </div>
                                    )}
                                    {specialties.length > 0 && (
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Award className="w-4 h-4 mr-2 text-orange-500" />{specialties.length} spécialités
                                        </div>
                                    )}
                                </div>
                            </div>
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                                >
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};
