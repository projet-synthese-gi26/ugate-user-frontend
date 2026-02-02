"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Publication, CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import {
    MessageCircle, Share2, MoreHorizontal,
    ThumbsUp, Heart, Clock, Send, Loader2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/ utils';
import { toast } from 'react-hot-toast';

import ReactionPicker from './ReactionPicker';
import HorizontalPDFReader from './HorizontalPDFReader';
import CommentItem from './CommentItem';
import MediaGallery from './MediaGallery';

export default function PostCard({ publication }: { publication: Publication }) {
    const t = useTranslations('Feed');
    const ct = useTranslations('Comments');

    // États pour les Réactions
    const [showReactions, setShowReactions] = useState(false);
    const [myReaction, setMyReaction] = useState<string | null>(null);

    // États pour les Commentaires
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<CommentResponseDto[]>([]);
    const [newComment, setNewComment] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);

    // Charger les commentaires
    const fetchComments = async () => {
        setIsLoadingComments(true);
        try {
            const res = await ugateApi.get(`/publications/${publication.id}/comments`);
            setComments(res.data);
        } catch (e) {
            console.error("Erreur comments", e);
        } finally {
            setIsLoadingComments(false);
        }
    };

    const toggleComments = () => {
        if (!showComments) fetchComments();
        setShowComments(!showComments);
    };

    const handlePostComment = async () => {
        if (!newComment.trim()) return;
        setIsPosting(true);
        try {
            const formData = new FormData();
            formData.append('content', newComment);

            await ugateApi.post(`/publications/${publication.id}/comments`, formData);

            setNewComment('');
            fetchComments();
            toast.success("Commentaire publié");
        } catch (e) {
            toast.error("Erreur lors de la publication");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden animate-in fade-in duration-500 max-w-2xl mx-auto">

            {/* --- HEADER : AUTEUR --- */}
            <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-primary-800 rounded-full flex items-center justify-center text-white font-black border border-white shadow-sm shrink-0">
                        {publication.authorFullName.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 leading-none mb-1.5">
                            {publication.authorFullName}
                        </h4>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                            <Clock size={12} />
                            {formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })}
                        </div>
                    </div>
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* --- CONTENU TEXTE --- */}
            {publication.content && (
                <div className="px-6 pb-4 text-slate-700 leading-relaxed text-[15px]">
                    {publication.content}
                </div>
            )}

            {/* --- ZONE MÉDIAS (Utilisation du MediaGallery) --- */}
            {publication.fileUrlAndType && publication.fileUrlAndType.length > 0 && (
                <div className="w-full">
                    <MediaGallery media={publication.fileUrlAndType} />
                </div>
            )}

            {/* --- STATS BAR --- */}
            <div className="px-6 py-3 flex items-center justify-between border-b border-slate-50">
                <div className="flex items-center -space-x-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        <ThumbsUp size={10} className="text-white fill-current" />
                    </div>
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        <Heart size={10} className="text-white fill-current" />
                    </div>
                    <span className="pl-3 text-xs font-bold text-slate-500">
                        {publication.nlikes + (myReaction ? 1 : 0)}
                    </span>
                </div>
                <button
                    onClick={toggleComments}
                    className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:underline"
                >
                    {publication.ncomments} {t('comments')}
                </button>
            </div>

            {/* --- ACTIONS BAR (LIKE / COMMENT / SHARE) --- */}
            <div className="px-2 py-1.5 flex gap-1 relative">
                <div
                    className="relative flex-1"
                    onMouseEnter={() => setShowReactions(true)}
                    onMouseLeave={() => setShowReactions(false)}
                >
                    <button className={cn(
                        "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all font-bold text-sm",
                        myReaction ? "text-primary-600 bg-primary-50/50" : "text-slate-600 hover:bg-slate-50"
                    )}>
                        <ThumbsUp size={18} className={myReaction ? "fill-current" : ""} />
                        {myReaction || t('reactions.like')}
                    </button>
                    {showReactions && (
                        <ReactionPicker onSelect={(type) => {
                            setMyReaction(type);
                            setShowReactions(false);
                            toast.success(`Réaction : ${type}`);
                        }} />
                    )}
                </div>

                <button
                    onClick={toggleComments}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors"
                >
                    <MessageCircle size={18} />
                    {t('comments')}
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors">
                    <Share2 size={18} />
                    Partager
                </button>
            </div>

            {/* --- SECTION COMMENTAIRES --- */}
            {showComments && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-50 bg-slate-50/40 animate-in slide-in-from-top-2 duration-300">

                    {/* Input principal */}
                    <div className="flex gap-3 mb-6">
                        <div className="w-9 h-9 bg-primary-800 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 shadow-sm">
                            U
                        </div>
                        <div className="flex-1 relative">
                            <input
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handlePostComment()}
                                placeholder={ct('write_comment')}
                                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-2.5 text-sm focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all shadow-sm"
                            />
                            <button
                                onClick={handlePostComment}
                                disabled={isPosting || !newComment.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-600 hover:bg-primary-50 rounded-xl transition-colors disabled:opacity-30"
                            >
                                {isPosting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Liste des commentaires */}
                    {isLoadingComments ? (
                        <div className="flex justify-center py-4">
                            <Loader2 className="animate-spin text-slate-300" size={24} />
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {comments.filter(c => !c.parentId).map(comment => (
                                <CommentItem
                                    key={comment.id}
                                    comment={comment}
                                    publicationId={publication.id}
                                    allComments={comments}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}