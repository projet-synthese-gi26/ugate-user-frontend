"use client";

import { useState, useRef } from 'react';
import { Publication } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import {
    MessageCircle, Share2, ThumbsUp, MoreHorizontal,
    Globe, CheckCircle2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

// Composants internes
import MediaGallery from './MediaGallery';
import PostModal from './PostModal';
import ReactionPicker, { REACTION_TYPES } from './ReactionPicker';
import UserAvatar from '@/components/ui/UserAvatar'; // ✅ Import du composant Avatar

interface PostCardProps {
    publication: Publication;
}

export default function PostCard({ publication }: PostCardProps) {
    const { user } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // --- GESTION DES RÉACTIONS ---
    const [showReactions, setShowReactions] = useState(false);
    const [currentReaction, setCurrentReaction] = useState<string | null>(null);
    const [likeCount, setLikeCount] = useState(publication.nlikes || 0);

    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // --- ⚡ LOGIQUE API STRICTE ---
    const handleReaction = async (type: string) => {
        // 1. Validation de l'utilisateur connecté
        if (!user?.id) {
            toast.error("Veuillez vous connecter pour réagir");
            return;
        }

        // Fermeture du picker
        setShowReactions(false);
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

        // Sauvegarde pour rollback
        const previousReaction = currentReaction;
        const previousCount = likeCount;

        // Mise à jour Optimiste (UX Instantanée)
        // Note: L'API ne gérant pas le "toggle" (suppression), on écrase juste la valeur.
        const isNew = currentReaction === null;
        setCurrentReaction(type);
        if (isNew) setLikeCount(prev => prev + 1);

        try {
            // 2. Appel API conforme au Swagger
            // POST /publications/{publicationId}/reactions
            // Body: CreateReactionRequest { userId: UUID, reactionType: Enum }

            const payload = {
                userId: user.id,      // UUID de l'utilisateur connecté
                reactionType: type    // "LIKE", "LOVE", "HAHA", etc.
            };

            await ugateApi.post(`/publications/${publication.id}/reactions`, payload);

            // Pas de toast de succès pour ne pas spammer l'utilisateur (comme FB)
        } catch (error: any) {
            console.error("Erreur réaction:", error.response?.data);

            // 3. Rollback en cas d'erreur
            setCurrentReaction(previousReaction);
            setLikeCount(previousCount);
            toast.error("Impossible d'enregistrer la réaction");
        }
    };

    // --- GESTION DU SURVOL ---
    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => setShowReactions(true), 400);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => setShowReactions(false), 300);
    };

    // --- VISUELS DU BOUTON PRINCIPAL ---
    const getReactionVisuals = () => {
        if (!currentReaction) {
            return {
                icon: <ThumbsUp size={18} />,
                label: "J'aime",
                colorClass: "text-slate-600 hover:bg-slate-50"
            };
        }

        const config = REACTION_TYPES.find(r => r.label === currentReaction);
        if (!config) return { icon: <ThumbsUp size={18} />, label: "J'aime", colorClass: "text-blue-600" };

        return {
            icon: <span className="text-xl leading-none -mt-1">{config.emoji}</span>,
            label: config.name,
            colorClass: `${config.color} bg-slate-50`
        };
    };

    const visuals = getReactionVisuals();

    // --- LOGIQUE D'AFFICHAGE DU TEXTE ---
    const textLimit = 200;
    const isLongText = publication.content && publication.content.length > textLimit;
    const displayContent = isExpanded || !isLongText
        ? publication.content
        : publication.content?.slice(0, textLimit) + "...";

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-visible mb-6"
            >
                {/* 1. EN-TÊTE AVEC AVATAR API AUTH */}
                <div className="p-4 flex justify-between items-start">
                    <div className="flex gap-3">
                        {/* ✅ Utilisation du UserAvatar pour récupérer la photo depuis l'Auth API */}
                        <UserAvatar
                            userId={publication.authorId || ""} // Utilisation de l'authorId de la publi
                            fallbackName={publication.authorFullName}
                            className="w-11 h-11"
                        />

                        <div>
                            <h3 className="font-bold text-[15px] text-slate-900 leading-tight hover:underline cursor-pointer">
                                {publication.authorFullName}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                                <span className="font-medium text-slate-400">
                                    {publication.createdAt
                                        ? formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })
                                        : 'À l\'instant'}
                                </span>
                                <span className="text-slate-300">•</span>
                                <Globe size={10} className="text-slate-400" />
                            </div>
                        </div>
                    </div>

                    <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                {/* 2. CONTENU TEXTUEL */}
                {publication.content && (
                    <div className="px-4 pb-3">
                        <p className="text-[15px] leading-relaxed text-slate-800 whitespace-pre-wrap font-normal">
                            {displayContent}
                        </p>
                        {isLongText && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-slate-500 font-bold text-sm hover:underline mt-1 hover:text-primary-600"
                            >
                                {isExpanded ? "Voir moins" : "Voir plus"}
                            </button>
                        )}
                    </div>
                )}

                {/* 3. MÉDIAS (EDGE-TO-EDGE) */}
                {publication.fileUrlAndType?.length > 0 && (
                    <div
                        className="w-full bg-slate-50 cursor-pointer border-t border-slate-100"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <MediaGallery media={publication.fileUrlAndType} />
                    </div>
                )}

                {/* 4. BARRE DE STATISTIQUES */}
                <div className="px-4 py-3 flex items-center justify-between text-xs text-slate-500 border-b border-slate-50">
                    <div className="flex items-center gap-1.5 min-h-[20px]">
                        {likeCount > 0 && (
                            <div className="flex items-center gap-1 animate-in fade-in zoom-in duration-300">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ring-2 ring-white shadow-sm">
                                    <ThumbsUp size={10} fill="white" className="text-white" />
                                </div>
                                {/* Si une autre réaction que Like est dominante, on pourrait l'afficher ici */}
                                <span className="hover:underline cursor-pointer font-medium ml-1 text-slate-600">
                                    {likeCount}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3 font-medium text-slate-500">
                        <span onClick={() => setIsModalOpen(true)} className="hover:underline cursor-pointer hover:text-slate-700">
                            {publication.ncomments > 0 ? `${publication.ncomments} commentaires` : "0 commentaire"}
                        </span>
                    </div>
                </div>

                {/* 5. BARRE D'ACTIONS */}
                <div className="px-2 py-1 relative z-10">
                    <div className="grid grid-cols-3 gap-1">

                        {/* A. RÉACTION (HOVER & CLICK) */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <AnimatePresence>
                                {showReactions && (
                                    <ReactionPicker onSelect={handleReaction} />
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleReaction(currentReaction || 'LIKE')}
                                className={cn(
                                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 select-none",
                                    visuals.colorClass
                                )}
                            >
                                <motion.div
                                    key={currentReaction || 'default'}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {visuals.icon}
                                </motion.div>
                                <span className="hidden sm:inline">{visuals.label}</span>
                            </motion.button>
                        </div>

                        {/* B. COMMENTER */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-bold transition-colors active:scale-95"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden sm:inline">Commenter</span>
                        </button>

                        {/* C. PARTAGER */}
                        <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-bold transition-colors active:scale-95">
                            <Share2 size={18} />
                            <span className="hidden sm:inline">Partager</span>
                        </button>
                    </div>
                </div>

            </motion.article>

            {/* MODALE DÉTAILS */}
            <PostModal
                publication={publication}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}