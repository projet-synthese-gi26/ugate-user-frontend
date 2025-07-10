// src/components/shared/EventCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, Clock, Users, ChevronRight, ExternalLink } from "lucide-react";

export default function EventCard({ event }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden mb-6 relative w-full max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-lg"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill // Utiliser fill pour que l'image remplisse le conteneur parent
                    style={{ objectFit: 'cover' }} // Équivalent de object-cover
                    className="transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                    <div className="flex items-center text-white text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        <span>{event.time}</span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">
                    {isExpanded ? event.description : `${event.description.slice(0, 100)}...`}
                </p>
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isExpanded ? t("voir_moins") : t("lire_la_suite")}
                    <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-blue-500" />
                        <span>{event.participants} {t("participants")}</span>
                    </div>
                    {/* Lien vers une page d'inscription (externe ou interne) */}
                    <Link href={`/events/${event.id}/register`} passHref>
                        <motion.button
                            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("sinscrire")}
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}