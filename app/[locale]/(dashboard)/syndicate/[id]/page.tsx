"use client";

import { use, useEffect } from 'react';
import { useRouter } from '@/navigation';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Loader2 } from 'lucide-react';

export default function SyndicateDispatcherPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: syndicateId } = use(params);
    const router = useRouter();
    const { user } = useAuthStore();

    useEffect(() => {
        const dispatch = async () => {
            try {
                const mineRes = await ugateApi.get('/syndicates/mine');
                const myRelation = mineRes.data.find((s: any) => s.id === syndicateId);

                if (myRelation) {
                    const isAdmin = ['ADMIN', 'PRESIDENT', 'MODERATOR'].includes(myRelation.userRole);

                    if (isAdmin) {
                        router.replace(`/syndicate/${syndicateId}/select-branch`);
                    } else if (myRelation.userBranchId) {
                        router.replace(`/syndicate/${syndicateId}/branch/${myRelation.userBranchId}`);
                    }
                }
            } catch (e) {
                router.replace('/dashboard');
            }
        };
        dispatch();
    }, [syndicateId, user?.id, router]);

    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
        </div>
    );
}