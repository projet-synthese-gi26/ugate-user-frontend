"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { FeedItem } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import EventCard from '@/components/social/EventCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, Sparkles, MessageSquare } from 'lucide-react';

export default function BranchFeedPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                // On récupère le feed combiné (Publications + Events)
                const response = await ugateApi.get('/api/v1/feed', {
                    params: { page: 0, size: 20 }
                });
                setFeed(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Erreur Feed:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeed();
    }, [syndicateId]);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">

            {/* Zone de Création de Publication */}
            <CreatePost syndicateId={syndicateId} />

            {/* Séparateur Design */}
            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                    <Sparkles size={14} className="text-primary-600" />
                    Actualités de la branche
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            {/* Liste du Flux */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Chargement du flux...</p>
                </div>
            ) : feed.length > 0 ? (
                <div className="space-y-10">
                    {feed.map((item, idx) => (
                        <div key={`${item.type}-${idx}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                            {item.type === 'publication' ? (
                                <PostCard publication={item.data as any} />
                            ) : (
                                <EventCard event={item.data as any} />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                        <MessageSquare size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-400">Le fil d'actualité est vide.</h2>
                    <p className="text-slate-400 text-sm mt-1">Soyez le premier à publier quelque chose !</p>
                </div>
            )}
        </div>
    );
}