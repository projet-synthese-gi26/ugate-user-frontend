"use client";

import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/lib/axios';
import { UserResponse } from '@/lib/types/api';
import { cn } from '@/lib/ utils';

interface UserAvatarProps {
    userId: string;
    fallbackName: string;
    className?: string;
}

export default function UserAvatar({ userId, fallbackName, className }: UserAvatarProps) {
    // 1. Récupération optimisée du profil utilisateur via l'API Auth
    const { data: userProfile, isLoading } = useQuery<UserResponse>({
        queryKey: ['user-profile', userId],
        queryFn: async () => {
            const res = await authApi.get(`/api/users/${userId}`);
            return res.data;
        },
        staleTime: 1000 * 60 * 60, // Cache de 1 heure (les photos changent rarement)
        enabled: !!userId, // Ne lance pas la requête si pas d'ID
    });

    const initial = fallbackName.charAt(0).toUpperCase();

    // Classes de base pour le conteneur
    const containerClass = cn(
        "relative flex items-center justify-center overflow-hidden rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-bold",
        className
    );

    if (isLoading) {
        return (
            <div className={containerClass}>
                <div className="animate-pulse bg-slate-200 w-full h-full" />
            </div>
        );
    }

    if (userProfile?.photoUri) {
        return (
            <div className={containerClass}>
                <img
                    src={userProfile.photoUri}
                    alt={fallbackName}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>
        );
    }

    return (
        <div className={containerClass}>
            {initial}
        </div>
    );
}