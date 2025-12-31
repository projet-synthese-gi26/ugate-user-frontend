// src/components/syndicate-space/section-exprimer/PublicationsFeed.jsx
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
            post?.author?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [posts, searchTerm]);

    // Fonction pour recharger les posts
    const refreshPosts = async (force = false) => {
        if (syndicatId === 'test-id') {
            if (force) toast.success("Flux actualisé (Simulation)");
            return;
        }

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

        // Mode Simulation
        if (syndicatId === 'test-id') {
            // CORRECTION ICI : Ajout de 'async' devant la fonction du setTimeout
            setTimeout(async () => {
                try {
                    // Récupération des données depuis le FormData
                    const contentJson = newPostData.get('postData');

                    // Lecture sécurisée du Blob ou de la chaîne JSON
                    let contentStr = contentJson;
                    if (contentJson instanceof Blob) {
                        contentStr = await contentJson.text();
                    }

                    const contentObj = typeof contentStr === 'string' ? JSON.parse(contentStr) : contentStr;

                    const imageFile = newPostData.get('imageFile');

                    const newPost = {
                        postId: `post-new-${Date.now()}`,
                        content: contentObj.content,
                        author: {
                            name: "Moi (Membre)",
                            avatar: "https://i.pravatar.cc/150?img=12",
                            role: "Membre"
                        },
                        createdAt: new Date().toISOString(),
                        likes: 0,
                        comments: [],
                        // Créer une URL blob pour l'aperçu immédiat
                        imageUrl: imageFile ? URL.createObjectURL(imageFile) : null,
                        syndicate: { verified: true }
                    };

                    setPosts(prev => [newPost, ...prev]);
                    setIsCreateModalOpen(false);
                    toast.success("Publication partagée !");
                } catch (error) {
                    console.error("Erreur simulation", error);
                    toast.error("Erreur lors de la simulation");
                } finally {
                    setIsCreatingPost(false);
                }
            }, 1000);
            return;
        }

        // Mode Réel
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
                                key={post.postId || post.id} // Fallback ID
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
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative flex-1 w-full sm:max-w-md">
                    <input
                        type="text"
                        placeholder={t('post_placeholder')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        {t('publish_button')}
                    </motion.button>
                    <button
                        onClick={() => refreshPosts(true)}
                        className="p-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
                    >
                        <RefreshCw size={20} className={apiLoading ? "animate-spin" : ""} />
                    </button>
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

            {/* Liste des publications */}
            <PostsList data={filteredPosts} />

            {/* Modal de création */}
            <NewPostModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onNewPost={handleCreatePost}
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