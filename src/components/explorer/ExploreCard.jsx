"use client";

import { motion } from "framer-motion";
import { Users, MapPin, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ExploreCard({ syndicat, itemVariants, onDetails, onAdhere }) {
    const t = useTranslations('explorer_page');

    // On utilise le logoUrl comme image de couverture, sinon un placeholder
    const coverImage = syndicat.logoUrl || "/placeholder-cover.png";

    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
            {/* SECTION IMAGE (COVER) */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={coverImage}
                    alt={syndicat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized // Pour éviter les erreurs 500 de timeout en local
                />
                
                {/* Overlay dégradé pour que le badge ressorte bien */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Badge du Domaine (ex: Technologie) */}
                {syndicat.domain && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                            {syndicat.domain}
                        </span>
                    </div>
                )}

                {/* Badge de certification ou statut (optionnel) */}
                {syndicat.isApproved && (
                    <div className="absolute top-3 right-3 bg-green-500 p-1.5 rounded-full shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                )}
            </div>

            {/* SECTION CONTENU */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Titre du Syndicat */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {syndicat.name}
                </h3>

                {/* Description courte (si besoin) */}
                {syndicat.description && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                        {syndicat.description}
                    </p>
                )}

                {/* INFOS (Membres & Localisation) */}
                <div className="flex flex-col gap-2 mb-6">
                    {/* Membres */}
                    <div className="flex items-center text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                            <Users className="w-4 h-4 text-blue-500" />
                        </div>
                        <span className="text-sm font-medium">
                            {syndicat.memberCount || 0} {t('card.members', 'membres')}
                        </span>
                    </div>

                    {/* LOCALISATION (À activer quand l'API sera prête) */}
                    {/* 
                    <div className="flex items-center text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mr-3">
                            <MapPin className="w-4 h-4 text-orange-500" />
                        </div>
                        <span className="text-sm font-medium">
                            {syndicat.location || "Cameroun, Centre"}
                        </span>
                    </div> 
                    */}
                </div>

                {/* BOUTONS D'ACTION */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onDetails(syndicat)}
                        className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                    >
                        {t('card.details', 'Détails')}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <button
                        onClick={() => onAdhere(syndicat)}
                        className="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-200 transition-all active:scale-95"
                    >
                        {t('card.adhere', 'Adhérer')}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}