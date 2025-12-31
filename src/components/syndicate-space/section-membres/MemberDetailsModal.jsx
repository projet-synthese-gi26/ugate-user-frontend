"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Shield, FileText, CreditCard, Car } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { STATIC_FILES_URL } from '@/lib/constants';

// Utilitaire local pour les images
const getSafeUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${STATIC_FILES_URL}${url}`;
};

const DocumentCard = ({ title, imageUrl, icon: Icon }) => (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
            <Icon size={14} />
            {title}
        </div>
        <div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-600 group cursor-pointer">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <FileText size={24} className="mb-1" />
                    <span className="text-xs">Non fourni</span>
                </div>
            )}
        </div>
    </div>
);

export default function MemberDetailsModal({ member, onClose }) {
    const t = useTranslations('members_page.details_modal');

    if (!member) return null;

    const avatarUrl = getSafeUrl(member.userAvatarUrl) || "https://i.pravatar.cc/150";
    // Récupération sécurisée des documents (avec fallback objet vide)
    const docs = member.documents || {};

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    className="relative bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header avec fond coloré */}
                    <div className="relative h-24 bg-gradient-to-r from-blue-600 to-indigo-600">
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors z-10">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Contenu principal scrollable */}
                    <div className="px-6 pb-8 overflow-y-auto">

                        {/* Avatar et Infos Principales */}
                        <div className="relative -mt-12 mb-6 flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full border-4 border-white dark:border-neutral-800 shadow-md overflow-hidden bg-gray-200">
                                <Image src={avatarUrl} alt={member.userName} fill className="object-cover" />
                            </div>
                            <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{member.userName}</h2>
                            <span className="px-3 py-1 mt-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                {member.role.replace('ROLE_', '')}
                            </span>
                        </div>

                        {/* Grille Infos Contact */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600"><Mail size={18} /></div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{member.email || "N/A"}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600"><Phone size={18} /></div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Téléphone</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{member.phone || "N/A"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Section Documents */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Shield size={20} className="text-blue-600" />
                                {t('documents')}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <DocumentCard
                                    title={t('cni_front')}
                                    imageUrl={getSafeUrl(docs.cniFront)}
                                    icon={CreditCard}
                                />
                                <DocumentCard
                                    title={t('cni_back')}
                                    imageUrl={getSafeUrl(docs.cniBack)}
                                    icon={CreditCard}
                                />
                                <DocumentCard
                                    title={t('license_front')}
                                    imageUrl={getSafeUrl(docs.licenseFront)}
                                    icon={Car}
                                />
                                <DocumentCard
                                    title={t('license_back')}
                                    imageUrl={getSafeUrl(docs.licenseBack)}
                                    icon={Car}
                                />
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}