
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ChevronRight } from "lucide-react";

const t = (key) => key.replace(/_/g, ' ');

export function SyndicateCard({ syndicat }) {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-blue-100"
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={syndicat.image}
                    alt={syndicat.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 h-14 leading-tight">
                    {syndicat.name}
                </h3>
                <div className="flex items-center text-blue-700 mb-6">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-semibold">{syndicat.members.toLocaleString()} membres</span>
                </div>
                <Link href={`/syndicat/${syndicat.id}`} passHref>
                    <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl flex items-center justify-center transition-all duration-300 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t("en_savoir_plus")}
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}