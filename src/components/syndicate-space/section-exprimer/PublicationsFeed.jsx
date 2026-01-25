"use client";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { ugateInstance } from '@/lib/api/instance';
import { getPostsAPI, createPostAPI } from '@/lib/api/posts';
import Post from './Post';
import NewPostModal from './NewPostModal';
import { useUser } from '@/context/UserContext';
import { Plus, RefreshCw } from 'lucide-react';

export default function PublicationsFeed({ syndicatId }) {
    const { user } = useUser();
    const [posts, setPosts] = useState([]);
    const [activeBranchId, setActiveBranchId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // 1. Charger la branche ET les posts existants
    const loadData = async () => {
        setLoading(true);
        try {
            const resBranch = await ugateInstance.get(`/syndicates/${syndicatId}/branches`);
            if (resBranch.data && resBranch.data.length > 0) {
                const bId = resBranch.data[0].id;
                setActiveBranchId(bId);
                
                // On récupère les publications
                const resPosts = await getPostsAPI(bId);
                // On gère le fait que l'API renvoie un tableau direct
                const postsArray = Array.isArray(resPosts) ? resPosts : (resPosts.content || []);
                setPosts(postsArray);
            }
        } catch (e) {
            console.error("Erreur de chargement", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (syndicatId) loadData();
    }, [syndicatId]);

    const handleCreatePost = async (formData) => {
        try {
            const newPost = await createPostAPI(formData);
            // On ajoute le nouveau post en haut de la liste
            setPosts(prev => [newPost, ...prev]);
            setIsModalOpen(false);
            toast.success("Publication réussie !");
        } catch (e) {
            toast.error("Erreur lors de la publication");
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight text-white">Publications</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all active:scale-90"
                >
                    <Plus size={28} />
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20"><RefreshCw className="animate-spin text-blue-500" /></div>
            ) : posts.length > 0 ? (
                <div className="space-y-4">
                    {posts.map(p => <Post key={p.id} post={p} />)}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-400 font-medium">Aucune publication pour le moment.</p>
                </div>
            )}

            <NewPostModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                onNewPost={handleCreatePost}
                authorId={user?.id}
                branchId={activeBranchId}
                userName={user?.firstName}
            />
        </div>
    );
}