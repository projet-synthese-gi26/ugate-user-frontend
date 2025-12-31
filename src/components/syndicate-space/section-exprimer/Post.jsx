"use client";

import { useState } from "react";
import { toast } from 'react-hot-toast';
import CommentModal from "./CommentModal";
import { likePostAPI, addCommentAPI } from "@/lib/api/posts";
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import UnifiedPostCard from "@/components/shared/UnifiedPostCard";

export default function Post({ post, onUpdatePost, syndicatId }) {
    const { executeWithRetry } = useApiWithRetry();
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    // On utilise une copie locale pour l'affichage immédiat
    // Cela permet de modifier le nombre de commentaires/likes sans attendre l'API
    const [localPost, setLocalPost] = useState(post);

    const handleLike = async (item, newLikedState) => {
        // Mise à jour Optimiste
        const updatedPost = {
            ...localPost,
            likes: localPost.likes + (newLikedState ? 1 : -1)
        };
        setLocalPost(updatedPost);

        if (syndicatId === 'test-id') return; // Stop ici pour la simulation

        // Appel API réel
        try {
            await executeWithRetry(async () => {
                await likePostAPI(syndicatId, post.postId, newLikedState);
            }, `like-post-${post.postId}`, {
                onError: () => setLocalPost(post) // Rollback
            });
        } catch (error) { }
    };

    const handleAddComment = async (commentData) => {
        // Mise à jour Optimiste : on ajoute le commentaire à la liste locale
        // Note: UnifiedPostCard utilise post.comments.length pour le compteur
        const updatedComments = [...(localPost.comments || []), commentData];
        const updatedPost = { ...localPost, comments: updatedComments };

        setLocalPost(updatedPost);
        // On remonte l'info au parent pour que le feed garde l'état si on scroll
        if (onUpdatePost) onUpdatePost(updatedPost);

        if (syndicatId === 'test-id') {
            toast.success("Commentaire ajouté !");
            return;
        }

        // Appel API réel
        try {
            await executeWithRetry(async () => {
                await addCommentAPI(syndicatId, post.postId, commentData.content);
            }, `add-comment-${post.postId}`, {
                onSuccess: () => toast.success("Commentaire ajouté !")
            });
        } catch (error) { }
    };

    return (
        <>
            <UnifiedPostCard
                item={localPost} // On passe la version locale qui contient les updates
                type="publication"
                variant="syndicate"
                onLike={handleLike}
                onComment={() => setIsCommentModalOpen(true)}
                onBookmark={() => toast('Sauvegardé', { icon: '🔖' })}
                onShare={() => toast('Lien copié', { icon: '🔗' })}
                syndicatId={syndicatId}
            />

            <CommentModal
                post={localPost} // La modale reçoit aussi les données à jour
                isOpen={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                onAddComment={handleAddComment}
            />
        </>
    );
}