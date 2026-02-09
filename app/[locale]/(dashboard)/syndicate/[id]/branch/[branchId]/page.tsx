"use client";

import { use, useState, useEffect } from 'react';
import { ugateApi } from '@/lib/axios';
import { FeedItem, Branch } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import EventCard from '@/components/social/EventCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, Sparkles } from 'lucide-react';

export default function BranchFeedPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    const { branchId, id: syndicateId } = use(params);
    const [feed, setFeed] = useState<FeedItem[]>([]);
    const [branch, setBranch] = useState<Branch | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [feedRes, branchRes] = await Promise.all([
                    ugateApi.get('/api/v1/feed', { params: { page: 0, size: 20 } }),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`).then(r => ({ data: r.data.find((b: any) => b.id === branchId) }))
                ]);
                setFeed(Array.isArray(feedRes.data) ? feedRes.data : []);
                setBranch(branchRes.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchData();
    }, [branchId, syndicateId]);

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary-800" /></div>;

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
            {/* CreatePost personnalisé avec le nom de la branche */}
            <CreatePost syndicateId={branchId} branchName={branch?.name} />

            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Sparkles size={14} className="text-primary-600" /> Actualités
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            <div className="space-y-10">
                {feed.map((item, idx) => (
                    item.type === 'publication'
                        ? <PostCard key={idx} publication={item.data as any} />
                        : <EventCard key={idx} event={item.data as any} />
                ))}
            </div>
        </div>
    );
}