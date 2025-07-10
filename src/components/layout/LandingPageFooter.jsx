
"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function LandingPageFooter() {
    const { t } = useTranslation();

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white py-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Building className="h-6 w-6" />
                            <span className="text-xl font-semibold">SyndicManager</span>
                        </div>
                        <p className="text-indigo-100">{t("description_plateforme")}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("liens_rapides")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("a_propos")}</Link></li>
                            <li><Link href="/services" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("services")}</Link></li>
                            <li><Link href="/contact" className="text-indigo-100 hover:text-indigo-200 transition duration-300">{t("contact")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("suivez_nous")}</h4>
                        {/* Social links here */}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}