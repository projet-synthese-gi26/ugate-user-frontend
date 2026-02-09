import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ugateApi } from '@/lib/axios';
import { toast } from 'react-hot-toast';

export const useReaction = (publicationId: string, currentLikes: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (type: string) => {
            return ugateApi.post(`/publications/${publicationId}/reactions`, { reactionType: type });
        },
        onMutate: async (newReaction) => {
            // 1. Annuler les refetchs en cours
            await queryClient.cancelQueries({ queryKey: ['feed'] });

            // 2. Snapshot de l'état précédent
            const previousFeed = queryClient.getQueryData(['feed']);

            // 3. Mise à jour optimiste du cache
            queryClient.setQueriesData({ queryKey: ['feed'] }, (old: any) => {
                if (!old) return old;
                return {
                    ...old,
                    pages: old.pages.map((page: any) =>
                        page.map((item: any) => {
                            if (item.type === 'publication' && item.data.id === publicationId) {
                                return {
                                    ...item,
                                    data: {
                                        ...item.data,
                                        nlikes: item.data.nlikes + 1, // Incrémenter artificiellement
                                        // userHasLiked: true (si tu as ce champ)
                                    }
                                };
                            }
                            return item;
                        })
                    )
                };
            });

            return { previousFeed };
        },
        onError: (err, newReaction, context) => {
            // Rollback en cas d'erreur
            queryClient.setQueryData(['feed'], context?.previousFeed);
            toast.error("Impossible de réagir");
        },
        onSettled: () => {
            // Refetch pour être sûr
            queryClient.invalidateQueries({ queryKey: ['feed'] });
        }
    });
};