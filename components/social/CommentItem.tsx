"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CommentResponseDto } from '@/lib/types/api';
import { ugateApi } from '@/lib/axios';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MessageCircle, CornerDownRight, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Props {
    comment: CommentResponseDto;
    publicationId: string;
    allComments: CommentResponseDto[];
    depth?: number;
}

export default function CommentItem({ comment, publicationId, allComments, depth = 0 }: Props) {
    const t = useTranslations('Comments');
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [loading, setLoading] = useState(false);

    // Filtrer les réponses à ce commentaire précis
    const replies = allComments.filter(c => c.parentId === comment.id);

    const handleReply = async () => {
        if (!replyText.trim()) return;
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('content', replyText);
            formData.append('parentId', comment.id);

            await ugateApi.post(`/publications/${publicationId}/comments`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success(t('success_reply'));
            setReplyText('');
            setIsReplying(false);
            // Ici, idéalement, on rafraîchit la liste via un callback
        } catch (error) {
            toast.error("Erreur d'envoi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`group ${depth > 0 ? 'mt-4 ml-6 lg:ml-10' : 'mt-6'}`}>
            <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 text-xs shrink-0 border border-white shadow-sm">
                    {comment.authorFullName.charAt(0)}
                </div>

                <div className="flex-1">
                    {/* Bulle de commentaire */}
                    <div className="bg-slate-50 rounded-2xl rounded-tl-none p-3 lg:p-4 border border-slate-100 group-hover:border-primary-100 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-900 text-sm">{comment.authorFullName}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                {formatDistanceToNow(new Date(comment.createdAt), { locale: fr })}
                            </span>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">{comment.content}</p>
                        {comment.imageUrl && (
                            <img src={comment.imageUrl} className="mt-3 rounded-xl max-h-60 object-cover border border-slate-200" />
                        )}
                    </div>

                    {/* Actions de commentaire */}
                    <div className="flex items-center gap-4 mt-2 ml-1">
                        <button
                            onClick={() => setIsReplying(!isReplying)}
                            className="text-xs font-bold text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-1"
                        >
                            <MessageCircle size={14} />
                            {t('reply')}
                        </button>
                    </div>

                    {/* Zone de réponse (Formulaire) */}
                    {isReplying && (
                        <div className="mt-4 flex gap-2 animate-in slide-in-from-top-2 duration-300">
                            <div className="flex-1 relative">
                                <input
                                    autoFocus
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    placeholder={t('write_comment')}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500/20 outline-none"
                                />
                            </div>
                            <button
                                onClick={handleReply}
                                disabled={loading || !replyText.trim()}
                                className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center shadow-md disabled:opacity-50"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    )}

                    {/* Rendu récursif des réponses */}
                    {replies.length > 0 && (
                        <div className="relative">
                            {/* Ligne verticale de thread */}
                            <div className="absolute left-[-20px] lg:left-[-30px] top-0 bottom-0 w-px bg-slate-200" />
                            {replies.map(reply => (
                                <CommentItem
                                    key={reply.id}
                                    comment={reply}
                                    publicationId={publicationId}
                                    allComments={allComments}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}