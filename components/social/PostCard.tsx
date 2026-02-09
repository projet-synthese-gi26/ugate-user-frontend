"use client";

import { useState } from 'react';
import { Publication } from '@/lib/types/api';
import { MessageCircle, Share2, ThumbsUp, Heart, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import MediaGallery from './MediaGallery';
import PostModal from './PostModal'; // Import de la modale

export default function PostCard({ publication }: { publication: Publication }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden animate-in fade-in duration-500 max-w-2xl mx-auto">
                {/* ... Header et Contenu restent identiques ... */}
                <div className="p-5 flex items-center gap-3">
                    {/* ... Avatar et Nom ... */}
                    <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold">{publication.authorFullName.charAt(0)}</div>
                    <div>
                        <div className="font-bold text-slate-900">{publication.authorFullName}</div>
                        <div className="text-xs text-slate-400">{formatDistanceToNow(new Date(publication.createdAt), { addSuffix: true, locale: fr })}</div>
                    </div>
                </div>

                <div className="px-5 pb-3 text-slate-800 text-[15px] line-clamp-3">
                    {publication.content}
                </div>

                {/* Zone Media */}
                {publication.fileUrlAndType?.length > 0 && (
                    <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <MediaGallery media={publication.fileUrlAndType} />
                    </div>
                )}

                {/* Footer Stats & Actions */}
                <div className="px-5 py-3 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-bold">
                        <ThumbsUp size={14} className="text-blue-500 fill-current" />
                        {publication.nlikes}
                    </div>
                    <div className="text-slate-500 text-xs font-bold hover:underline cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        {publication.ncomments} commentaires
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-1 px-2 pb-2">
                    <button className="py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm flex items-center justify-center gap-2">
                        <ThumbsUp size={18} /> J'aime
                    </button>
                    {/* Le clic sur Commenter ouvre la Modale */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} /> Commenter
                    </button>
                    <button className="py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm flex items-center justify-center gap-2">
                        <Share2 size={18} /> Partager
                    </button>
                </div>
            </div>

            {/* La Modale Facebook-style */}
            <PostModal
                publication={publication}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}