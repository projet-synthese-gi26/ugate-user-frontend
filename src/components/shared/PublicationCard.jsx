
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, MessageCircle, Clock, Share2 } from "lucide-react";

export default function PublicationCard({ publication }) {
    const t = useTranslations('common');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-md p-6 mb-6 relative w-full max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-lg"
        >
            <div className="flex items-center mb-4">
                <Image
                    src={publication.author.avatar || "/placeholder.svg"}
                    alt={publication.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                    <h4 className="font-semibold text-lg text-gray-800">{publication.author.name}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{publication.timestamp}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{publication.content}</p>
            {publication.image && (
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={publication.image}
                        alt="Publication content"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                    />
                </div>
            )}
            <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    {publication.likes} {t("jaime")}
                </span>
                <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                    {publication.comments} {t("commentaires")}
                </span>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-blue-600"
                >
                    <Share2 className="w-4 h-4 mr-1" />
                    {t("partager")}
                </motion.button>
            </div>
        </motion.div>
    );
};