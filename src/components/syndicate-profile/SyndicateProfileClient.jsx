"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import ProfileHeader from './ProfileHeader';
import ProfileKeyInfoCard from './ProfileKeyInfoCard';
import ProfileContactCard from './ProfileContactCard';
import ProfileSectionCard from './ProfileSectionCard';
import ProfileActivities from './ProfileActivities';
import ProfileServices from './ProfileServices';
import ProfileMembers from './ProfileMembers';
import ProfileShop from './ProfileShop';
import { HeartHandshake, Calendar, Package, Users, ShoppingBag, MapPin } from 'lucide-react';

// Chargement dynamique de la carte pour éviter les erreurs SSR
const DynamicProfileMap = dynamic(() => import('./ProfileMap'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-[350px] bg-gray-50 rounded-2xl border border-dashed border-gray-300"><p className="text-gray-400">Chargement de la carte...</p></div>
});

export default function SyndicateProfileClient({ syndicate }) {
    const t = useTranslations('profile_page');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };
    
    const fakeData = {
        activities: syndicate.activities || [{id: 1, title: "Assemblée Générale", date: "15/06", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"}],
        services: syndicate.services || [{id: 1, name: "Conseil Juridique", description: "Assistance pour les litiges."}],
        products: syndicate.products || [{id: 1, name: "T-shirt Officiel", price: 15.0, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"}],
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="bg-gray-50 pb-20">
            {/* Header avec forçage du blanc à l'intérieur via CSS global ou props si possible */}
            <ProfileHeader syndicate={syndicate} variants={itemVariants} />

            <div className="container mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-8 pt-28 px-4">
                
                {/* COLONNE GAUCHE & CENTRE (Main Content) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Mission */}
                    <ProfileSectionCard title={t('mission_title')} icon={HeartHandshake} variants={itemVariants}>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {syndicate.description || t('no_description')}
                        </p>
                    </ProfileSectionCard>

                    {/* CARTE : Nos Implantations (Positionnée au centre comme sur l'image) */}
                    <ProfileSectionCard title={t('locations_title') || "Nos Implantations"} icon={MapPin} variants={itemVariants}>
                        <div className="space-y-4">
                            <DynamicProfileMap antennes={syndicate.branches} />
                            <div className="flex justify-end">
                                <button className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                                    Voir toutes les antennes
                                </button>
                            </div>
                        </div>
                    </ProfileSectionCard>

                    {/* Activités */}
                    <ProfileSectionCard title={t('activities_title')} icon={Calendar} variants={itemVariants}>
                        <ProfileActivities activities={fakeData.activities} />
                    </ProfileSectionCard>
                </div>

                {/* COLONNE DROITE (Sidebar) */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Infos clés */}
                    <ProfileKeyInfoCard syndicate={syndicate} variants={itemVariants} />
                    
                    {/* Services */}
                    <ProfileSectionCard title={t('services_title')} icon={Package} variants={itemVariants}>
                        <ProfileServices services={fakeData.services} />
                    </ProfileSectionCard>

                    {/* Boutique */}
                    <ProfileSectionCard title={t('shop_title')} icon={ShoppingBag} variants={itemVariants}>
                        <ProfileShop products={fakeData.products} />
                    </ProfileSectionCard>

                    {/* Contact */}
                    <ProfileContactCard syndicate={syndicate} variants={itemVariants} />
                </div>
            </div>
        </motion.div>
    );
}