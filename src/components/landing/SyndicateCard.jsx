
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ChevronRight } from "lucide-react";

const t = (key) => key.replace(/_/g, ' ');

export function SyndicateCard({ syndicat }) {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="relative w-full h-48">
                <Image
                    src={syndicat.image}
                    alt={syndicat.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4 h-14">
                    {syndicat.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-5 w-5 mr-2 text-[#6BAED6]" />
                    <span>{syndicat.members.toLocaleString()} membres</span>
                </div>
                <Link href={`/syndicat/${syndicat.id}`} passHref>
                    <motion.button
                        className="w-full bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white py-2 rounded-md flex items-center justify-center transition duration-300 hover:opacity-90 shadow-md"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t("en_savoir_plus")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}