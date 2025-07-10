// src/components/settings/ProfileHeader.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Edit, Mail, Phone } from 'lucide-react';
import { useFormContext } from 'react-hook-form'; // Pour interagir avec le formulaire

export default function ProfileHeader({ onAvatarClick }) {
    const { watch } = useFormContext(); // Récupère les données du formulaire en temps réel

    // On "watch" les champs pour que le header se mette à jour pendant la saisie
    const firstName = watch("firstName");
    const lastName = watch("lastName");
    const email = watch("email");
    const phone = watch("phone");
    const profilePicture = watch("profilePicture"); // La nouvelle image uploadée
    const initialProfilePicture = watch("initialProfilePicture"); // L'image initiale

    // Affiche l'aperçu de la nouvelle image ou l'image initiale
    const displayPicture = profilePicture instanceof File
        ? URL.createObjectURL(profilePicture)
        : initialProfilePicture;

    return (
        <motion.div
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                    <Image
                        src={displayPicture || "/default-avatar.png"}
                        alt="Photo de profil"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700"
                    />
                    <button
                        type="button"
                        onClick={onAvatarClick}
                        className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-transform transform hover:scale-110"
                        aria-label="Changer la photo de profil"
                    >
                        <Edit size={16} />
                    </button>
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {firstName} {lastName}
                    </h2>
                    <div className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Mail size={16} className="text-blue-500" />
                            {email}
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Phone size={16} className="text-green-500" />
                            {phone}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}