"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';

export default function FeedItemHeader({ syndicat, branch }) {
    // Si pas d'info de syndicat, on ne rend rien.
    if (!syndicat) return null;
    
    const staticFilesUrl = 'http://167.235.62.116:7014';
    const logoUrl = syndicat.logoUrl ? `${staticFilesUrl}${syndicat.logoUrl}` : null;

    return (
        <div className="flex items-center mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
            {logoUrl ? (
                <Image src={logoUrl} alt={syndicat.name} width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
            ) : (
                <SyndicatDefaultAvatar name={syndicat.name} size={40} className="rounded-lg" />
            )}
            <div className="ml-3">
                <Link href={`/syndicat-space/${syndicat.id}`} className="font-bold text-gray-800 dark:text-gray-100 hover:underline">
                    {syndicat.name}
                </Link>
                {branch && <p className="text-xs text-gray-500 dark:text-gray-400">{branch.name}</p>}
            </div>
        </div>
    );
};