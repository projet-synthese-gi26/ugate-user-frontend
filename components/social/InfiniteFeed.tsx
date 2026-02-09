"use client";
import { useInView } from 'react-intersection-observer';
import { useFeed } from '@/lib/hooks/useFeed';
import { useEffect } from 'react';
import PostCard from './PostCard';
import EventCard from './EventCard';
import VoteCard from './VoteCard'; // Si tu as un type 'poll' dans le feed
import { Loader2 } from 'lucide-react';
import CreatePost from './CreatePost';

export default function InfiniteFeed({ branchId, branchName }: { branchId: string, branchName?: string }) {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useFeed(branchId);

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage]);

    if (status === 'pending') return <FeedSkeleton />;
    if (status === 'error') return <div className="text-center py-10 text-red-500">Erreur de chargement du flux.</div>;

    return (
        <div className="space-y-6">
            <CreatePost syndicateId={branchId} branchName={branchName} />

            {data?.pages.map((page, i) => (
                <div key={i} className="space-y-6">
                    {page.map((item: any) => {
                        // Switch sur le type d'item renvoyé par /api/v1/feed
                        switch (item.type) {
                            case 'publication':
                                return <PostCard key={item.data.id} publication={item.data} />;
                            case 'event':
                                return <EventCard key={item.data.id} event={item.data} />;
                            case 'poll': // Si ton API feed inclut les votes
                                return <VoteCard key={item.data.id} voteId={item.data.id} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            ))}

            <div ref={ref} className="flex justify-center py-8">
                {isFetchingNextPage && <Loader2 className="animate-spin text-primary-500" />}
                {!hasNextPage && <p className="text-slate-400 text-sm">Vous avez tout vu !</p>}
            </div>
        </div>
    );
}

function FeedSkeleton() {
    return (
        <div className="space-y-6">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl p-6 h-64 animate-pulse shadow-sm" />
            ))}
        </div>
    );
}