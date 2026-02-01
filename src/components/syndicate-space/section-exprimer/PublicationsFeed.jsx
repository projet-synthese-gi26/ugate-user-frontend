"use client";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getPostsAPI, createPostAPI } from '@/lib/api/posts';
import Post from './Post';
import NewPostModal from './NewPostModal';
import { useUser } from '@/context/UserContext';
import { Plus, RefreshCw } from 'lucide-react';

export default function PublicationsFeed({ syndicatId, branchId }) {
    const { user } = useUser();
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Charger les posts de la branche
    const loadData = async () => {
        if (!branchId) {
            console.warn('branchId manquant pour charger les publications');
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            // On récupère les publications directement avec le branchId de l'URL
            const resPosts = await getPostsAPI(branchId);
            // On gère le fait que l'API renvoie un tableau direct
            const postsArray = Array.isArray(resPosts) ? resPosts : (resPosts.content || []);
            setPosts(postsArray);
        } catch (e) {
            console.error("Erreur de chargement des publications", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (branchId) loadData();
    }, [branchId]);

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
                branchId={branchId}
                userName={user?.firstName}
            />
        </div>
    );
}