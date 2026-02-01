"use client";

import { motion } from 'framer-motion';
import { Users, ChevronRight, Loader2, MapPin } from 'lucide-react';
import { useRouter } from '@/navigation';
import { useState } from 'react';
import { getSyndicateBranchesAPI } from '@/lib/api/syndicates';
import { toast } from 'react-hot-toast';
import { useTranslations } from 'next-intl';

export default function SyndicateCard({ syndicat }) {
    const router = useRouter();
    const t = useTranslations('syndicats_page');
    const [isAccessing, setIsAccessing] = useState(false);

    const handleAccessSpace = async () => {
        setIsAccessing(true);
        try {
            // On récupère la branche
            const branches = await getSyndicateBranchesAPI(syndicat.id);
            
            if (branches && branches.length > 0) {
                const branchId = branches[0].id;
                // Redirection vers le format : /syndicat-space/ID_SYNDICAT/ID_BRANCHE/membres
                router.push(`/syndicat-space/${syndicat.id}/${branchId}/membres`);
            } else {
                toast.error(t('no_branch_found') || "Aucune antenne trouvée pour ce syndicat.");
            }
        } catch (error) {
            toast.error("Erreur d'accès à l'espace.");
        } finally {
            setIsAccessing(false);
        }
    };

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300"
        >
            {/* Bannière */}
            <div className="h-32 bg-gradient-to-br from-blue-600 to-indigo-700 relative">
                {syndicat.logoUrl && (
                    <img src={syndicat.logoUrl} className="w-full h-full object-cover opacity-30" alt="" />
                )}
                <div className="absolute -bottom-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border-4 border-white text-blue-600 font-bold text-xl">
                        {syndicat.name.substring(0, 2).toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="p-6 pt-10 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{syndicat.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{syndicat.description || "Pas de description"}</p>
                
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                        <Users size={14} className="text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">{syndicat.memberCount || 0} membres</span>
                    </div>
                </div>

                <button 
                    onClick={handleAccessSpace}
                    disabled={isAccessing}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-100"
                >
                    {isAccessing ? (
                        <Loader2 className="animate-spin" size={18} />
                    ) : (
                        <>
                            Accéder à l'espace
                            <ChevronRight size={18} />
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
}