
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SearchModal from '@/components/shared/SearchModal'; // Le composant de modale partagé

export default function SearchTrigger() {
    const { t } = useTranslation();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
                        {t("trouver_votre_syndicat")}
                    </h2>
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder={t("placeholder_nom_syndicat")}
                            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#6BAED6] focus:border-indigo-700 focus:ring focus:ring-indigo-300 transition duration-300 shadow-sm cursor-pointer"
                            onClick={() => setIsSearchOpen(true)}
                            readOnly
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6BAED6]" />
                    </div>
                </div>
            </motion.section>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}