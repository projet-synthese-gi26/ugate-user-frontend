
import { TrendingUp, Users, Building } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';


const t = (key) => key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

export default function FeaturesSection() {
    return (
        <ClientMotionWrapper delay={0.2} className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
                    {t("pourquoi_choisir_syndicmanager")}
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="text-center">
                        <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
                            <TrendingUp className="h-8 w-8 text-indigo-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">{t("gestion_efficace")}</h3>
                        <p className="text-gray-600">{t("description_gestion_efficace")}</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
                            <Users className="h-8 w-8 text-indigo-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">{t("collaboration_simplifiee")}</h3>
                        <p className="text-gray-600">{t("description_collaboration_simplifiee")}</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
                            <Building className="h-8 w-8 text-indigo-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">{t("transparence_accrue")}</h3>
                        <p className="text-gray-600">{t("description_transparence_accrue")}</p>
                    </div>
                </div>
            </div>
        </ClientMotionWrapper>
    );
}