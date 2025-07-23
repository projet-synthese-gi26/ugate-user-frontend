// src/components/syndicate-space/section-exprimer/Post.jsx
"use client";

import { useState } from "react";
import { toast } from 'react-hot-toast';
import CommentModal from "./CommentModal";
import { likePostAPI, addCommentAPI } from "@/lib/api/posts";
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import UnifiedPostCard from "@/components/shared/UnifiedPostCard";

/**
 * Affiche une publication complète avec ses actions et gère sa modale de commentaires.
 * @param {object} post - L'objet de la publication.
 * @param {function} onUpdatePost - Callback pour mettre à jour le post dans la liste parente.
 */
export default function Post({ post, onUpdatePost, syndicatId }) {
    const { handleError, clearError } = useErrorHandler();
    const { executeWithRetry } = useApiWithRetry();
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    const handleLike = async (post, newLikedState) => {
        const originalLikes = post.likes;
        
        // Mise à jour optimiste
        onUpdatePost({ ...post, likes: post.likes + (newLikedState ? 1 : -1) });
        
        try {
            await executeWithRetry(async () => {
                await likePostAPI(syndicatId, post.postId, newLikedState);
            }, `like-post-${post.postId}`, {
                maxRetries: 2,
                onError: () => {
                    // Reverser les changements optimistes
                    onUpdatePost({ ...post, likes: originalLikes });
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    const handleComment = (post) => {
        setIsCommentModalOpen(true);
    };

    const handleAddComment = async (commentData) => {
        try {
            await executeWithRetry(async () => {
                await addCommentAPI(syndicatId, post.postId, commentData.content);
                // Mise à jour optimiste
                onUpdatePost({ ...post, comments: [...post.comments, commentData] });
            }, `add-comment-${post.postId}`, {
                maxRetries: 2,
                onSuccess: () => {
                    toast.success("Commentaire ajouté !");
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    return (
        <>
            <UnifiedPostCard 
                item={post}
                type="publication"
                variant="syndicate"
                onLike={handleLike}
                onComment={handleComment}
                onBookmark={(post, bookmarked) => {
                    // Gérer le bookmark si nécessaire
                }}
                syndicatId={syndicatId}
            />

            <CommentModal 
                post={post} 
                isOpen={isCommentModalOpen} 
                onClose={() => setIsCommentModalOpen(false)} 
                onAddComment={handleAddComment} 
            />
        </>
    );
}