"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    PieChart, TrendingUp, DollarSign, FileText,
    Download, Upload, Eye, EyeOff, Plus
} from 'lucide-react';

export default function FinancesClient() {
    const t = useTranslations('finances_page');
    const [activeTab, setActiveTab] = useState('overview');
    const [showBalance, setShowBalance] = useState(false);

    const tabs = [
        { id: 'overview', label: t('tabs.overview'), icon: PieChart },
        { id: 'income', label: t('tabs.income'), icon: TrendingUp },
        { id: 'expenses', label: t('tabs.expenses'), icon: DollarSign },
        { id: 'reports', label: t('tabs.reports'), icon: FileText },
    ];

    const financialData = {
        balance: 150000,
        income: 50000,
        expenses: 30000
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                        <Upload size={16} /> {t('import')}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium">
                        <Download size={16} /> {t('export')}
                    </button>
                </div>
            </div>

            {/* Cartes Résumé */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{t('current_balance')}</h3>
                        <button onClick={() => setShowBalance(!showBalance)} className="text-blue-600 dark:text-blue-400">
                            {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                        {showBalance ? `${financialData.balance.toLocaleString()} FCFA` : '•••••••'}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">{t('monthly_income')}</h3>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="text-green-500" size={24} />
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                            +{financialData.income.toLocaleString()} FCFA
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">{t('monthly_expenses')}</h3>
                    <div className="flex items-center gap-2">
                        <DollarSign className="text-red-500" size={24} />
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                            -{financialData.expenses.toLocaleString()} FCFA
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation des onglets */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl overflow-x-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                            }`}
                    >
                        <tab.icon size={16} className="mr-2" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Contenu dynamique */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 min-h-[400px] p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Ici vous intégrerez les composants spécifiques : TransactionTable, ExpenseForm, etc. */}
                        <div className="text-center text-gray-500 py-12">
                            Contenu pour {activeTab} (À implémenter)
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}