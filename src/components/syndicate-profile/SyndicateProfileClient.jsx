// src/components/syndicate-profile/SyndicateProfileClient.jsx
"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

// Import de tous nos composants de profil modulaires
import ProfileHeader from './ProfileHeader';
import ProfileKeyInfoCard from './ProfileKeyInfoCard';
import ProfileContactCard from './ProfileContactCard';
import ProfileSectionCard from './ProfileSectionCard';
import ProfileActivities from './ProfileActivities';
import ProfileServices from './ProfileServices';
import ProfileMembers from './ProfileMembers';
import ProfileShop from './ProfileShop';

// Import des icônes pour les titres de section
import { HeartHandshake, Calendar, Package, Users, ShoppingBag, MapPin } from 'lucide-react';

// Chargement dynamique du composant Carte pour optimiser les performances
// Il ne sera chargé que côté client, et uniquement quand nécessaire.
const DynamicProfileMap = dynamic(() => import('./ProfileMap'), {
    ssr: false, // La carte ne doit jamais être rendue sur le serveur
    loading: () => (
        <div className="flex items-center justify-center h-[350px] bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Chargement de la carte...</p>
        </div>
    )
});

/**
 * Le composant client principal qui assemble toutes les parties de la page de profil.
 * Il reçoit les données pré-chargées du Server Component parent.
 * @param {object} syndicate - L'objet complet contenant toutes les données du syndicat.
 */
export default function SyndicateProfileClient({ syndicate }) {
    const { t } = useTranslation();

    // Variantes d'animation pour orchestrer l'apparition des éléments
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Applique un léger délai entre l'animation de chaque carte
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        // Le conteneur principal de framer-motion qui gère les animations en cascade
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>

            {/* 1. Le Header Visuel */}
            <ProfileHeader syndicate={syndicate} variants={itemVariants} />

            {/* 2. Le Layout principal en grille */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 pt-28">

                {/* --- COLONNE DE GAUCHE (PRINCIPALE) --- */}
                <div className="lg:col-span-2 space-y-8">

                    <ProfileSectionCard title={t('profile_page.mission_title')} icon={HeartHandshake} variants={itemVariants}>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {syndicate.description || t('profile_page.no_description')}
                        </p>
                    </ProfileSectionCard>

                    <ProfileSectionCard title={t('profile_page.activities_title')} icon={Calendar} variants={itemVariants}>
                        <ProfileActivities activities={syndicate.activities} />
                    </ProfileSectionCard>

                    <ProfileSectionCard title={t('profile_page.shop_title')} icon={ShoppingBag} variants={itemVariants}>
                        <ProfileShop products={syndicate.products} />
                    </ProfileSectionCard>
                </div>

                {/* --- COLONNE DE DROITE (SECONDAIRE) --- */}
                <div className="lg:col-span-1 space-y-8">

                    <ProfileKeyInfoCard syndicate={syndicate} variants={itemVariants} />

                    <ProfileContactCard syndicate={syndicate} variants={itemVariants} />

                    <ProfileSectionCard title={t('profile_page.locations_title')} icon={MapPin} variants={itemVariants}>
                        {/* La carte est chargée dynamiquement pour ne pas bloquer le rendu initial */}
                        <DynamicProfileMap antennes={syndicate.antennes} />
                    </ProfileSectionCard>

                    <ProfileSectionCard title={t('profile_page.services_title')} icon={Package} variants={itemVariants}>
                        <ProfileServices services={syndicate.services} />
                    </ProfileSectionCard>

                    <ProfileSectionCard title={t('profile_page.team_title')} icon={Users} variants={itemVariants}>
                        <ProfileMembers members={syndicate.membersList} />
                    </ProfileSectionCard>

                </div>
            </div>
        </motion.div>
    );
}