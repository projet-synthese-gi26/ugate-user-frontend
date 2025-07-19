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

const DynamicProfileMap = dynamic(() => import('./ProfileMap'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-[350px] bg-gray-100 dark:bg-gray-700 rounded-lg"><p>Chargement de la carte...</p></div>
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
    
    // Données factices pour les champs non gérés
    const fakeData = {
        activities: syndicate.activities || [{id: 1, title: "Assemblée Générale", date: "15/06", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"}],
        services: syndicate.services || [{id: 1, name: "Conseil Juridique", description: "Assistance pour les litiges."}],
        products: syndicate.products || [{id: 1, name: "T-shirt Officiel", price: 15.00, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"}],
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <ProfileHeader syndicate={syndicate} variants={itemVariants} />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 pt-28">
                <div className="lg:col-span-2 space-y-8">
                    <ProfileSectionCard title={t('profile_page.mission_title')} icon={HeartHandshake} variants={itemVariants}>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {syndicate.description || t('profile_page.no_description')}
                        </p>
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.activities_title')} icon={Calendar} variants={itemVariants}>
                        <ProfileActivities activities={fakeData.activities} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.shop_title')} icon={ShoppingBag} variants={itemVariants}>
                        <ProfileShop products={fakeData.products} />
                    </ProfileSectionCard>
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <ProfileKeyInfoCard syndicate={syndicate} variants={itemVariants} />
                    <ProfileContactCard syndicate={syndicate} variants={itemVariants} />
                    <ProfileSectionCard title={t('profile_page.locations_title')} icon={MapPin} variants={itemVariants}>
                        <DynamicProfileMap antennes={syndicate.branches} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.services_title')} icon={Package} variants={itemVariants}>
                        <ProfileServices services={fakeData.services} />
                    </ProfileSectionCard>
                    <ProfileSectionCard title={t('profile_page.team_title')} icon={Users} variants={itemVariants}>
                        <ProfileMembers members={syndicate.members} />
                    </ProfileSectionCard>
                </div>
            </div>
        </motion.div>
    );
}