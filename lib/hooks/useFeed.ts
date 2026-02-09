import { useInfiniteQuery } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';

export const useFeed = (branchId: string) => {
    return useInfiniteQuery({
        queryKey: ['feed', branchId],
        queryFn: async ({ pageParam = 0 }) => {
            // Appel API feed mélangé
            const { data } = await ugateApi.get('/api/v1/feed', {
                params: { page: pageParam, size: 10, branchId } // Assure-toi que l'API filtre par branche si nécessaire
            });
            return data; // Supposons que l'API renvoie une liste directe ou un objet paginé
        },
        getNextPageParam: (lastPage, allPages) => {
            // Logique de pagination : si moins de 10 items, on est à la fin
            return lastPage.length === 10 ? allPages.length : undefined;
        },
        initialPageParam: 0,
    });
};