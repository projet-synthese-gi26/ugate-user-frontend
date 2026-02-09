"use client";

import { use } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from '@/components/dashboard/MemberSidebar';

export default function SyndicateRootLayout({
                                                children,
                                                params
                                            }: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const { id: syndicateId } = use(params);
    const pathname = usePathname();

    const segments = pathname.split('/');
    const branchIdIndex = segments.indexOf('branch') + 1;
    const branchId = branchIdIndex > 0 ? segments[branchIdIndex] : "";

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-stretch">
            <MemberSidebar
                syndicateId={syndicateId}
                branchId={branchId}
            />

            <div className="flex-1 lg:ml-72 flex flex-col min-w-0 w-full">
                {children}
            </div>
        </div>
    );
}