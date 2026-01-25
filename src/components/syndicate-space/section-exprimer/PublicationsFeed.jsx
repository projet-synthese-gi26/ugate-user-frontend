"use client";

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { Plus, RefreshCw, MessageSquare, Search } from 'lucide-react';
import Post from './Post';
import NewPostModal from './NewPostModal';
import { useUser } from '@/context/UserContext';
import { getPostsAPI, createPostAPI } from '@/lib/api/posts';
import { ugateInstance } from '@/lib/api/instance'; 

export default function PublicationsFeed({ initialPosts = [], syndicatId }) {
    const t = useTranslations('express_page');
    const { user } = useUser();
    
    const [posts, setPosts] = useState(initialPosts || []);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCreatingPost, setIsCreatingPost] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeBranchId, setActiveBranchId] = useState(null);

    // 1. RÉCUPÉRER LA BRANCHE (Indispensable pour le branchId)
    useEffect(() => {
        const loadBranch = async () => {
            try {
                const res = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
                if (res.data && res.data.length > 0) {
                    const bId = res.data[0].id;
                    setActiveBranchId(bId);
                    // Charger les posts de la branche
                    const postsData = await getPostsAPI(bId);
                    setPosts(postsData?.content || []);
                }
            } catch (err) {
                console.error("Erreur récupération branche:", err);
            }
        };
        if (syndicatId) loadBranch();
    }, [syndicatId]);

    const handleCreatePost = async (formData) => {
        setIsCreatingPost(true);
        try {
            const newPost = await createPostAPI(formData);
            setPosts(prev => [newPost, ...prev]);
            setIsCreateModalOpen(false);
            toast.success("Publication créée !");
        } catch (error) {
            toast.error("Erreur lors de la publication");
        } finally {
            setIsCreatingPost(false);
        }
    };

    const filteredPosts = useMemo(() => 
        (posts || []).filter(post => 
            post?.content?.toLowerCase().includes(searchTerm.toLowerCase())
        ), [posts, searchTerm]);

    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold text-gray-900 text-white">Publications</h1>
                <button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all"
                >
                    <Plus size={24} />
                </button>
            </div>

            {/* Barre de recherche */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center">
                <Search className="text-gray-400 mr-2" size={20} />
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="flex-1 outline-none text-gray-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Liste des posts */}
            <div className="space-y-6">
                {filteredPosts.map((post) => (
                    <Post key={post.postId} post={post} syndicatId={syndicatId} />
                ))}
            </div>

            {/* MODALE DE CRÉATION */}
            <NewPostModal 
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onNewPost={handleCreatePost}
                isLoading={isCreatingPost}
                userName={user?.firstName}
                authorId={user?.id}        // L'ID de l'utilisateur
                branchId={activeBranchId}  // L'ID de l'antenne récupéré en haut
            />
        </div>
    );
}