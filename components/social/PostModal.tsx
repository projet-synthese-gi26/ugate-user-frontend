"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Publication, CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { X, MoreHorizontal, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import MediaGallery from './MediaGallery';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Props {
    publication: Publication;
    isOpen: boolean;
    onClose: () => void;
}

export default function PostModal({ publication, isOpen, onClose }: Props) {
    const [comments, setComments] = useState<CommentResponseDto[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        setLoading(true);
        try {
            const res = await ugateApi.get(`/publications/${publication.id}/comments`);
            setComments(res.data);
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Bloquer le scroll
            fetchComments();
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    // Détection si c'est un post purement textuel ou avec média
    const hasMedia = publication.fileUrlAndType && publication.fileUrlAndType.length > 0;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
                {/* Backdrop Noir avec flou */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full h-full md:h-[90vh] md:max-w-[95vw] bg-white md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    <button onClick={onClose} className="absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 md:hidden">
                        <X size={20} />
                    </button>

                    {/* COLONNE GAUCHE : MÉDIAS (Noir) */}
                    {hasMedia && (
                        <div className="flex-1 bg-black flex items-center justify-center overflow-y-auto md:overflow-hidden relative min-h-[40vh]">
                            <div className="w-full max-w-4xl p-4">
                                <MediaGallery media={publication.fileUrlAndType} />
                            </div>
                        </div>
                    )}

                    {/* COLONNE DROITE : INFO & COMMENTAIRES (Blanc) */}
                    <div className={`flex flex-col bg-white h-full ${hasMedia ? 'w-full md:w-[450px] shrink-0' : 'w-full max-w-3xl mx-auto border-x border-slate-100'}`}>

                        {/* Header Post */}
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold">
                                    {publication.authorFullName.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">{publication.authorFullName}</h3>
                                    <div className="text-xs text-slate-500">
                                        {formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><MoreHorizontal size={20} /></button>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hidden md:block"><X size={20} /></button>
                            </div>
                        </div>

                        {/* Contenu Scrollable */}
                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                            <p className="text-slate-800 text-[15px] leading-relaxed mb-4 whitespace-pre-wrap">
                                {publication.content}
                            </p>

                            <div className="border-y border-slate-100 py-2 flex justify-between text-slate-500 text-sm mb-4">
                                <span>{publication.nlikes} J'aime</span>
                                <span>{comments.length} commentaires</span>
                            </div>

                            {/* Actions Rapides */}
                            <div className="flex gap-1 mb-4">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <ThumbsUp size={18} /> J'aime
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <MessageCircle size={18} /> Commenter
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg font-semibold text-slate-600 text-sm transition-colors">
                                    <Share2 size={18} /> Partager
                                </button>
                            </div>

                            {/* Liste Commentaires */}
                            <div className="space-y-4 pb-4">
                                {comments.filter(c => !c.parentId).map(comment => (
                                    <CommentItem
                                        key={comment.id}
                                        comment={comment}
                                        publicationId={publication.id}
                                        allComments={comments}
                                        refresh={fetchComments}
                                    />
                                ))}
                                {comments.length === 0 && !loading && (
                                    <div className="text-center py-10 text-slate-400">
                                        Soyez le premier à commenter !
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer Input Fixe */}
                        <div className="p-4 border-t border-slate-100 bg-white">
                            <CommentInput
                                publicationId={publication.id}
                                onSuccess={fetchComments}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}