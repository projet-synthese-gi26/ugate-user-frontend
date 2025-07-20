// src/components/forms/adhesion/MembershipConfirmation.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Copy, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export const Confirmation = ({ membershipId, antenne, onComplete }) => {
    const t = useTranslations('confirmation');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(membershipId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 p-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" /></motion.div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('confirmation.title')}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{t('confirmation.subtitle', { antenneName: antenne.nom })}</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('confirmation.ref_number')}</h3>
                <div className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 rounded-lg p-4 border border-blue-200 dark:border-blue-600"><code className="text-xl font-mono font-bold text-blue-600 dark:text-blue-300">{membershipId}</code><motion.button onClick={copyToClipboard} className="p-2 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}</motion.button></div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t('confirmation.next_steps_title')}</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">{[1, 2, 3].map(step => (<li key={step} className="flex items-start"><span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">{step}</span><span>{t(`confirmation.step_${step}`)}</span></li>))}</ul>
            </div>
            <div className="flex gap-3 justify-center">
                <motion.button onClick={onComplete} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" whileHover={{ scale: 1.05 }}>{t('confirmation.back_to_home')}</motion.button>
            </div>
        </motion.div>
    );
};