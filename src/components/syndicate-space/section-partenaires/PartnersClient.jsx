"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    Handshake, Plus, ChevronDown, ChevronUp, MapPin,
    Phone, Mail, Globe, Gift, Star, X
} from 'lucide-react';
import Image from 'next/image';

const PartnerCard = ({ partner }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
        >
            <div className="p-5 flex items-center justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center p-2">
                        {partner.logo ? (
                            <Image src={partner.logo} alt={partner.name} width={64} height={64} className="object-contain" />
                        ) : (
                            <Handshake className="text-blue-500 w-8 h-8" />
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium mt-1">
                            {partner.category}
                        </span>
                    </div>
                </div>
                <button className="p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </button>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-100 dark:border-gray-700"
                    >
                        <div className="p-5 space-y-4 bg-gray-50/50 dark:bg-gray-800/50">
                            {/* Avantages */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800/30">
                                <h4 className="flex items-center font-semibold text-green-800 dark:text-green-300 mb-2">
                                    <Gift className="w-4 h-4 mr-2" /> Avantages membres
                                </h4>
                                <ul className="space-y-2">
                                    {partner.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start text-sm text-green-700 dark:text-green-400">
                                            <Star className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 fill-current" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                                    {partner.address}
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <Phone className="w-4 h-4 mr-3 text-blue-500" />
                                    {partner.phone}
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <Mail className="w-4 h-4 mr-3 text-blue-500" />
                                    {partner.email}
                                </div>
                                <a href={partner.website} target="_blank" className="flex items-center text-blue-600 hover:underline">
                                    <Globe className="w-4 h-4 mr-3" />
                                    Site web
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function PartnersClient() {
    const t = useTranslations('partners_page');
    // Données fictives
    const [partners] = useState([
        {
            id: 1,
            name: "MegaGym",
            category: "Santé et Bien-être",
            address: "123 Rue du Sport, Paris",
            phone: "+33 1 23 45 67 89",
            email: "contact@megagym.com",
            website: "https://www.megagym.com",
            benefits: ["20% de réduction annuelle", "1 séance coach offerte"]
        }
    ]);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <Handshake className="text-blue-600" />
                        {t('title')}
                    </h1>
                    <p className="text-gray-500 mt-2">{t('subtitle')}</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:bg-blue-700 flex items-center gap-2"
                >
                    <Plus size={20} />
                    {t('add_partner')}
                </motion.button>
            </div>

            <div className="grid gap-6">
                {partners.map(partner => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
            </div>
        </div>
    );
}