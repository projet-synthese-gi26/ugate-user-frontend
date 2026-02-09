"use client";

import { useState } from 'react';
import { CommentResponseDto } from '@/lib/types/api';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import CommentInput from './CommentInput';

interface Props {
    comment: CommentResponseDto;
    publicationId: string;
    allComments: CommentResponseDto[];
    depth?: number;
    refresh: () => void;
}

export default function CommentItem({ comment, publicationId, allComments, depth = 0, refresh }: Props) {
    const [isReplying, setIsReplying] = useState(false);
    const replies = allComments.filter(c => c.parentId === comment.id);

    return (
        <div className={`flex gap-3 ${depth > 0 ? 'mt-3' : 'mt-4'}`}>
            {/* Avatar */}
            <div className={`rounded-full bg-slate-200 flex items-center justify-center overflow-hidden shrink-0 border border-white shadow-sm ${depth > 0 ? 'w-6 h-6' : 'w-8 h-8'}`}>
                <span className="font-bold text-slate-500 text-xs">{comment.authorFullName.charAt(0)}</span>
            </div>

            <div className="flex-1">
                {/* Bulle */}
                <div className="inline-block bg-slate-100 rounded-2xl px-4 py-2.5 max-w-full">
                    <div className="font-bold text-slate-900 text-sm mb-0.5">{comment.authorFullName}</div>

                    {comment.content && <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>}

                    {comment.imageUrl && (
                        <img
                            src={comment.imageUrl}
                            alt="Comment attachment"
                            className="mt-2 rounded-xl max-h-60 object-cover border border-slate-200 cursor-pointer hover:opacity-90 transition-opacity"
                        />
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-1 ml-4">
                    <span className="text-[11px] font-medium text-slate-400">
                        {formatDistanceToNow(new Date(comment.createdAt), { locale: fr })}
                    </span>
                    <button
                        onClick={() => setIsReplying(!isReplying)}
                        className="text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                        Répondre
                    </button>
                    {/* Placeholder pour Like sur commentaire si API dispo */}
                    {/* <button className="text-[11px] font-bold text-slate-500 hover:text-slate-800">J'aime</button> */}
                </div>

                {/* Input Réponse */}
                {isReplying && (
                    <div className="mt-3">
                        <CommentInput
                            publicationId={publicationId}
                            parentId={comment.id}
                            onSuccess={() => { setIsReplying(false); refresh(); }}
                            autoFocus
                        />
                    </div>
                )}

                {/* Réponses imbriquées */}
                {replies.length > 0 && (
                    <div className="pl-2 border-l-2 border-slate-100 mt-2">
                        {replies.map(reply => (
                            <CommentItem
                                key={reply.id}
                                comment={reply}
                                publicationId={publicationId}
                                allComments={allComments}
                                depth={depth + 1}
                                refresh={refresh}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}