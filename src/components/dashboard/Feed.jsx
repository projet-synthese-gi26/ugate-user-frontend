"use client";
import UnifiedPostCard from '@/components/shared/UnifiedPostCard';
import { useTranslations } from 'next-intl';

/**
 * Affiche le fil d'actualité en mappant chaque item à un composant FeedCard.
 * @param {Array} initialFeed - Le tableau des publications et événements.
 */
export default function Feed({ initialFeed }) {
    const t = useTranslations('feed');

    if (!initialFeed || initialFeed.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                <p>{t('empty_feed')}</p>
                <p>{t('come_back_later')}</p>
            </div>
        );
    }
    return (
        <div className="space-y-6">
            {initialFeed.map(item => (
                <UnifiedPostCard 
                    key={`${item.id || item.postId || item.eventId}-${item.createdAt || item.startDate}`} 
                    item={item}
                    type={item.type || (item.postId ? 'publication' : 'event')}
                    variant="landing"
                    showActions={true}
                />
            ))}
        </div>
    );
}
