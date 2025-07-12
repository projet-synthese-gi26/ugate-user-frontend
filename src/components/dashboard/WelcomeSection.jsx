"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import CreateSyndicateModal from "@/components/syndicats/CreateSyndicateModal";
import { useUser } from "@/context/UserContext"; // Importe notre hook

export default function WelcomeSection() { // Plus besoin de props
    const { user, isLoading } = useUser(); // Récupère les données depuis le contexte
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Construit le nom complet. Gère le cas où `user` n'est pas encore chargé.
    const fullName = isLoading ? "..." : `${user?.firstName || ''} ${user?.lastName || ''}`.trim();

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('dashboard.welcome', { name: fullName || t('dashboard.dear_user') })}
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    {t("dashboard.portal_description")}
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto"
                >
                    <Zap className="w-6 h-6 inline-block mr-2" />
                    {t("dashboard.launch_syndicate")}
                </button>
            </div>

            <CreateSyndicateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}