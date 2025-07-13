"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';

export default function FeedItemHeader({ syndicat, branch }) {
    if (!syndicat) return null;
    
    const staticFilesUrl = 'http://167.235.62.116:7014';
    const logoUrl = syndicat.logoUrl ? `${staticFilesUrl}${syndicat.logoUrl}` : null;

    return (
        <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/80 border-b border-gray-200/80 dark:border-white/10">
            {logoUrl ? (
                <Image src={logoUrl} alt={syndicat.name} width={40} height={40} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            ) : (
                <SyndicatDefaultAvatar name={syndicat.name} size={40} className="rounded-lg shadow-sm" />
            )}
            <div className="ml-3">
                <Link href={`/syndicat-space/${syndicat.id}`} className="font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 transition-colors">
                    {syndicat.name}
                </Link>
                {branch && <p className="text-xs text-gray-500 dark:text-gray-400">{branch.name}</p>}
            </div>
        </div>
    );
};