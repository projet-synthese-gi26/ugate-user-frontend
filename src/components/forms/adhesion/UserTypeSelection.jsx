// src/components/forms/adhesion/UserTypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { User, Building2, CheckCircle } from "lucide-react";

export const UserTypeSelection = ({ onSelect, selectedType }) => {
    const userTypes = [
        { id: 'individual', title: 'Personne physique', description: 'Je souhaite adhérer en tant que personne individuelle.', icon: User, available: true },
        { id: 'organization', title: 'Organisation', description: 'Je représente une organisation ou une entreprise.', icon: Building2, available: false }
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    Type d'adhésion
                </h2>
                <p className="text-lg text-gray-600">Choisissez le type d'adhésion qui vous correspond.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {userTypes.map((type) => (
                    <motion.div
                        key={type.id}
                        onClick={() => type.available && onSelect(type.id)}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                            !type.available
                                ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                                : selectedType === type.id
                                    ? 'border-blue-500 bg-blue-50 shadow-lg cursor-pointer'
                                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md cursor-pointer'
                        }`}
                        whileHover={type.available ? { y: -5 } : {}}
                        whileTap={type.available ? { scale: 0.98 } : {}}
                    >
                        {!type.available && (
                            <div className="absolute top-4 right-4 px-2 py-1 bg-gray-400 text-white text-xs rounded-full">
                                Bientôt disponible
                            </div>
                        )}
                        {selectedType === type.id && type.available && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                                <CheckCircle className="w-4 h-4 text-white" />
                            </motion.div>
                        )}
                        <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                type.available ? 'bg-blue-100' : 'bg-gray-200'
                            }`}>
                                <type.icon className={`w-8 h-8 ${type.available ? 'text-blue-600' : 'text-gray-400'}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                            <p className="text-gray-600 text-sm">{type.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
