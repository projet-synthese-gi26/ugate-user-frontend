"use client";

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus, RefreshCw, MessageSquare, Search } from 'lucide-react';
import Post from './Post';
import NewPostModal from './NewPostModal';
import { CardSkeleton } from '../SyndicateSpaceLoader';
import { useErrorHandler, useApiWithRetry } from '@/hooks/useErrorHandler';
import { ErrorState, EmptyState, InlineError } from '../ErrorStates';
import ErrorBoundary from '../ErrorBoundary';
import { getPostsAPI, createPostAPI } from '@/lib/api/posts';

function PublicationsFeedInner({ initialPosts = [], syndicatId }) {
    const t = useTranslations('express_page');
    const { handleError, clearError, hasError, getError } = useErrorHandler();
    const { executeWithRetry, loading: apiLoading } = useApiWithRetry();
    
    const [posts, setPosts] = useState(initialPosts || []);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isCreatingPost, setIsCreatingPost] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    
    const filteredPosts = useMemo(() => 
        (posts || []).filter(post => 
            post?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post?.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [posts, searchTerm]);

    // Fonction pour recharger les posts
    const refreshPosts = async (force = false) => {
        try {
            await executeWithRetry(async () => {
                const postsData = await getPostsAPI(syndicatId);
                // Extraire le tableau de posts de la réponse paginée
                const postsArray = Array.isArray(postsData) ? postsData : (postsData?.content || []);
                setPosts(postsArray);
                setLastRefresh(Date.now());
                clearError('posts');
            }, 'refresh-posts', {
                maxRetries: 2,
                onSuccess: () => {
                    if (force) {
                        toast.success("Publications mises à jour !");
                    }
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        }
    };

    // Charger les posts au montage si pas de données initiales
    useEffect(() => {
        if ((!initialPosts || initialPosts.length === 0) && syndicatId) {
            refreshPosts(false);
        }
    }, [syndicatId]);

    const handleUpdatePost = (updatedPost) => {
        setPosts(posts.map(p => p.postId === updatedPost.postId ? updatedPost : p));
    };

    const handleCreatePost = async (newPostData) => {
        setIsCreatingPost(true);
        
        try {
            await executeWithRetry(async () => {
                const newPost = await createPostAPI(syndicatId, newPostData);
                setPosts([newPost, ...posts]);
                setIsCreateModalOpen(false);
                clearError('create-post');
            }, 'create-post', {
                maxRetries: 2,
                onSuccess: () => {
                    toast.success("Publication créée avec succès !");
                }
            });
        } catch (error) {
            // L'erreur est déjà gérée par executeWithRetry
        } finally {
            setIsCreatingPost(false);
        }
    };

    const PostsList = ({ data }) => {
        // Gestion des erreurs
        if (hasError('posts')) {
            return (
                <ErrorState 
                    error={getError('posts')}
                    onRetry={() => refreshPosts(true)}
                    onDismiss={() => clearError('posts')}
                />
            );
        }

        // État vide amélioré
        if (!data || data.length === 0) {
            return (
                <EmptyState
                    icon={MessageSquare}
                    title={searchTerm ? "Aucune publication trouvée" : "Aucune publication"}
                    description={searchTerm ? "Aucune publication ne correspond à votre recherche." : "Aucune publication n'a été créée pour le moment."}
                    action={!searchTerm && (
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsCreateModalOpen(true)}
                                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Créer une publication
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => refreshPosts(true)}
                                className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Actualiser
                            </motion.button>
                        </div>
                    )}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 p-12"
                />
            );
        }

        return (
            <div className="space-y-6">
                {isLoadingPosts ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={`post-skeleton-${index}`} />
                    ))
                ) : (
                    <AnimatePresence>
                        {data.map((post) => (
                            <Post 
                                key={post.postId} 
                                post={post} 
                                onUpdatePost={handleUpdatePost}
                                syndicatId={syndicatId}
                            />
                        ))}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-8">
            {/* Header avec actions */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white mb-2">
                            Publications
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Partagez vos idées et exprimez-vous dans la communauté
                        </p>
                    </div>
                    
                    <div className="flex gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => refreshPosts(true)}
                            disabled={apiLoading}
                            className="px-4 py-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
                        >
                            <RefreshCw className={`w-4 h-4 ${apiLoading ? 'animate-spin' : ''}`} />
                            Actualiser
                        </motion.button>
                        
                    </div>
                </div>
            </motion.div>

            {/* Affichage des erreurs globales */}
            <AnimatePresence>
                {hasError('refresh-posts') && (
                    <InlineError 
                        error={getError('refresh-posts')}
                        className="mb-6"
                    />
                )}
                {hasError('create-post') && (
                    <InlineError 
                        error={getError('create-post')}
                        className="mb-6"
                    />
                )}
            </AnimatePresence>

            {/* Barre de recherche */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 p-6">
                <div className="relative max-w-md">
                    <input 
                        type="text" 
                        placeholder="Rechercher des publications..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 text-sm" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                </div>
            </div>

            {/* Liste des publications */}
            <PostsList data={filteredPosts} />

            {/* Bouton flottant pour créer une publication */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCreateModalOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center z-50 transition-all duration-200"
                title="Créer une publication"
            >
                <Plus className="w-6 h-6" />
            </motion.button>

            {/* Modal de création */}
            <NewPostModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreatePost={handleCreatePost}
                isLoading={isCreatingPost}
            />
        </div>
    );
}

// Wrapper avec ErrorBoundary
export default function PublicationsFeed(props) {
    return (
        <ErrorBoundary
            title="Erreur dans la section Publications"
            subtitle="Une erreur s'est produite lors du chargement des publications."
        >
            <PublicationsFeedInner {...props} />
        </ErrorBoundary>
    );
}