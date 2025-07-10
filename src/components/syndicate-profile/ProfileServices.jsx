// src/components/syndicate-profile/ProfileServices.jsx
"use client";

import { motion } from 'framer-motion';
import { Package } from 'lucide-react'; // Utilisation d'une icône pertinente

/**
 * Affiche la liste des services offerts par le syndicat.
 * @param {Array} services - Le tableau des objets de service.
 */
export default function ProfileServices({ services }) {
    if (!services || services.length === 0) {
        return <p className="text-gray-500 dark:text-gray-400">Aucun service n'est actuellement proposé.</p>;
    }

    return (
        <ul className="space-y-4">
            {services.map((service, index) => (
                <motion.li
                    key={service.id || index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {service.description}
                        </p>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}