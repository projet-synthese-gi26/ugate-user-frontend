// src/components/forms/create-syndicate/Step1_TypeSelection.jsx
"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Eye, Award, Shield, ChevronRight, CheckCircle, Users, Lock } from "lucide-react";

export default function Step1_TypeSelection({ handleTypeSelection }) {
    const t = useTranslations('create_syndicate');
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-6">{t('create_your_syndicate')}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">{t('choose_syndicate_type')}</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"><Shield className="w-4 h-4 mr-2" />{t('step_1_of_3')}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div onClick={() => handleTypeSelection("anonymous")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-xl border border-blue-200 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-blue-800 rounded-2xl shadow-lg">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <ChevronRight className="w-6 h-6 text-blue-800 group-hover:translate-x-2 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('anonymous_syndicate')}</h3>
                        <p className="text-blue-800 mb-6 leading-relaxed">{t('anonymous_description')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('immediate_creation')}</span>
                            </div>
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('no_verification_required')}</span>
                            </div>
                            <div className="flex items-center text-blue-800">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('basic_features')}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blue-300">
                            <span className="inline-flex items-center text-sm font-medium text-blue-800">
                                <Users className="w-4 h-4 mr-2" />
                                {t('perfect_to_start')}
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleTypeSelection("accredited")} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-xl border border-gray-200 cursor-pointer group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6"><div className="p-3 bg-blue-500 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-white" /></div><ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" /></div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">{t('accredited_syndicate')}</h3>
                        <p className="text-blue-700 mb-6 leading-relaxed">{t('accredited_description')}</p>
                        <div className="space-y-3">
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('complete_verification')}</span>
                            </div>
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('official_status')}</span>
                            </div>
                            <div className="flex items-center text-blue-600">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-sm">{t('advanced_features')}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-blue-200">
                            <span className="inline-flex items-center text-sm font-medium text-blue-700">
                                <Lock className="w-4 h-4 mr-2" />
                                {t('official_recognition')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}