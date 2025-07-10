// src/components/dashboard/Feed.jsx
"use client";

import FeedCard from './FeedCard';

/**
 * Affiche le fil d'actualité en mappant chaque item à un composant FeedCard.
 * @param {Array} initialFeed - Le tableau des publications et événements.
 */
export default function Feed({ initialFeed }) {
    if (!initialFeed || initialFeed.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                <p>Le fil d'actualité est vide pour le moment.</p>
                <p>Revenez plus tard pour voir les dernières publications et événements.</p>
            </div>
        );
    }

    return (
        <div>
            {initialFeed.map(item => (
                <FeedCard key={`${item.id}-${item.createdAt}`} item={item} />
            ))}
        </div>
    );
}