// src/components/landing/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {t("gérerSyndicats")}
                    </h1>
                    <p className="text-xl mb-8">
                        {t("syndicmanager_description")}
                    </p>
                    <Link href="/register" passHref>
                        <motion.button
                            className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white px-8 py-3 rounded-full font-semibold flex items-center hover:opacity-90 transition duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("commencer_maintenant")}
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </motion.button>
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt={t("gestionSyndicale")}
                        width={1350}
                        height={900}
                        className="rounded-lg shadow-xl"
                        priority // Important for LCP (Largest Contentful Paint)
                    />
                </div>
            </div>
        </section>
    );
}