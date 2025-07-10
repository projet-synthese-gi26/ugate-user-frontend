// src/components/forms/create-syndicate/Step1_TypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { Eye, Award, Shield, ChevronRight, CheckCircle, Users, Lock } from "lucide-react";

export default function Step1_TypeSelection({ handleTypeSelection }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">Créer votre syndicat</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">Choisissez le type de syndicat qui correspond à vos besoins.</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"><Shield className="w-4 h-4 mr-2" />Étape 1 sur 3</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div onClick={() => handleTypeSelection("anonymous")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-xl border border-emerald-100 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-emerald-500 rounded-2xl shadow-lg"><Eye className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-emerald-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-emerald-800 mb-4">Syndicat Anonyme</h3>
                        <p className="text-emerald-700 mb-6 leading-relaxed">Créez rapidement un syndicat sans vérification. Idéal pour commencer et rassembler vos collègues.</p>
                        <div className="space-y-3"><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Création immédiate</span></div><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Aucune vérification requise</span></div><div className="flex items-center text-emerald-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Fonctionnalités de base</span></div></div>
                        <div className="mt-6 pt-4 border-t border-emerald-200"><span className="inline-flex items-center text-sm font-medium text-emerald-700"><Users className="w-4 h-4 mr-2" />Parfait pour débuter</span></div>
                    </div>
                </div>
                <div onClick={() => handleTypeSelection("accredited")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-xl border border-violet-100 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-violet-500 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-violet-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-violet-800 mb-4">Syndicat Accrédité</h3>
                        <p className="text-violet-700 mb-6 leading-relaxed">Processus de vérification complet pour un syndicat officiel avec toutes les fonctionnalités.</p>
                        <div className="space-y-3"><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Vérification complète</span></div><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Statut officiel</span></div><div className="flex items-center text-violet-600"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /><span className="text-sm">Fonctionnalités avancées</span></div></div>
                        <div className="mt-6 pt-4 border-t border-violet-200"><span className="inline-flex items-center text-sm font-medium text-violet-700"><Lock className="w-4 h-4 mr-2" />Reconnaissance officielle</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}