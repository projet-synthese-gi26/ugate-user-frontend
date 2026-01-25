"use client";
import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import CreateSyndicateModal from "@/components/syndicats/CreateSyndicateModal";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function WelcomeSection() {
    const { user, isLoading } = useUser();
    const t = useTranslations('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    // Gestion du nom pour les visiteurs
    const fullName = isLoading 
        ? "..." 
        : user 
            ? `${user.firstName || ''} ${user.lastName || ''}`.trim() 
            : t('visitor', "Visiteur"); // Clé à ajouter dans fr.json

    const handleActionClick = () => {
        if (!user) {
            // Si pas connecté, on redirige vers le login
            const locale = window.location.pathname.split('/')[1] || 'fr';
            router.push(`/${locale}/login`);
        } else {
            // Si connecté, on ouvre la modale
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {/* Utilise un message générique si visiteur, sinon Bienvenue Nom */}
                        {user ? t('welcome', { name: fullName }) : t('public_welcome', "Bienvenue sur U-Gate")}
                    </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    {user ? t("portal_description") : t("public_description", "La plateforme centrale pour vos activités syndicales et citoyennes.")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleActionClick}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                        <Zap className="w-6 h-6 mr-2" />
                        {user ? t("launch_syndicate") : t("join_us", "Nous rejoindre")}
                    </button>

                    {!user && (
                        <button
                            onClick={() => router.push(`/${window.location.pathname.split('/')[1] || 'fr'}/explorer`)}
                            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center"
                        >
                            {t("explore_public", "Explorer sans compte")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    )}
                </div>
            </div>

            {user && (
                <CreateSyndicateModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}