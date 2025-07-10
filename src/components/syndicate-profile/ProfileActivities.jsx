// src/components/syndicate-profile/ProfileActivities.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";

/**
 * Affiche la section des activités récentes sous forme de grille d'images.
 * @param {Array} activities - Le tableau des objets d'activité.
 */
export default function ProfileActivities({ activities }) {
    if (!activities || activities.length === 0) {
        return <p className="text-gray-500 dark:text-gray-400">Aucune activité récente à afficher.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
                <motion.div
                    key={activity.id || index}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                >
                    <Image
                        src={activity.image || "/placeholder-image.jpg"}
                        alt={activity.title}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                        <h3 className="font-semibold text-base text-white drop-shadow-md">
                            {activity.title}
                        </h3>
                        <div className="flex items-center mt-1 text-xs text-white/80">
                            <Calendar className="h-3 w-3 mr-1.5" />
                            {activity.date}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}