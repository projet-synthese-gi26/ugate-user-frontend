// src/components/syndicate-profile/ProfileContactCard.jsx
"use client";

import { motion } from 'framer-motion';
import { Mail, Globe, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * Carte affichant les informations de contact d'un syndicat.
 * @param {object} syndicate - L'objet syndicat.
 * @param {object} variants - Les variantes d'animation framer-motion.
 */
export default function ProfileContactCard({ syndicate, variants }) {
    const t = useTranslations('profile_page');

    const formatUrl = (url) => {
        if (!url) return null;
        if (url.startsWith('http')) return url;
        return `https://${url}`;
    };

    return (
        <motion.div
            className="bg-white bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 border-gray-700"
            variants={variants}
        >
            <h3 className="text-xl font-bold text-gray-900 text-white mb-4">
                {t('contact_title')}
            </h3>
            <div className="space-y-4">
                {syndicate.email && (
                    <motion.a href={`mailto:${syndicate.email}`} className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Mail className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.email}</span>
                    </motion.a>
                )}
                {syndicate.web_site_url && (
                    <motion.a href={formatUrl(syndicate.web_site_url)} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50 hover:bg-blue-50 hover:bg-gray-700 transition-colors group" whileHover={{ x: 5 }}>
                        <Globe className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.web_site_url}</span>
                    </motion.a>
                )}
                {syndicate.social_network && (
                    <motion.div className="flex items-center p-3 rounded-lg bg-gray-50 bg-gray-700/50" whileHover={{ x: 5 }}>
                        <Share2 className="h-5 w-5 text-blue-500 mr-4" />
                        <span className="text-sm font-medium text-gray-700 text-gray-300 truncate">{syndicate.social_network}</span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}