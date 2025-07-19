"use client";

import { motion } from 'framer-motion';
import { Users, Clock, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProfileKeyInfoCard({ syndicate, variants }) {
    const t = useTranslations('profile_page');

    const getYearFromDate = (isoDate) => isoDate ? new Date(isoDate).getFullYear() : "N/A";

    const keyInfo = [
        { label: t('profile_page.members'), value: syndicate.memberCount?.toLocaleString() || '0', icon: Users },
        { label: t('profile_page.founded'), value: getYearFromDate(syndicate.foundedDate), icon: Clock },
        { label: t('profile_page.type'), value: syndicate.type, icon: Briefcase },
    ];

    return (
        <motion.div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700" variants={variants}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('profile_page.key_info_title')}</h3>
            <div className="space-y-4 text-sm">
                {keyInfo.map((info) => (
                    <div key={info.label} className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 flex items-center">
                            <info.icon size={16} className="mr-2" />
                            {info.label}
                        </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{info.value}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}