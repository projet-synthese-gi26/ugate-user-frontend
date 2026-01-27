"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, Send, Clock, Bookmark, MoreHorizontal } from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { getCommentsAPI, addCommentAPI } from '@/lib/api/posts';
import { toast } from 'react-hot-toast';
import { useUser } from '@/context/UserContext';

export default function Post({ post }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // 1. EXTRACTION SÉCURISÉE DES DONNÉES
    const author = post.authorFullName || "Utilisateur";
    const content = post.content || "";
    
    // Récupération de l'image (Expert Mapping)
    const imageInfo = post.fileUrlAndType?.find(f => f.type === "IMAGE");
    const imageUrl = imageInfo?.url;

    const { user } = useUser();

    const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
    }) : "À l'instant";

    // 2. GESTION DES COMMENTAIRES
    const toggleComments = async () => {
        if (!showComments) {
            setIsLoadingComments(true);
            try {
                const data = await getCommentsAPI(null, post.id);
                setComments(Array.isArray(data) ? data : []);
            } catch (e) {
                console.error("Erreur chargement commentaires", e);
            } finally {
                setIsLoadingComments(false);
            }
        }
        setShowComments(!showComments);
    };

    const handleLike = async () => {
    if (!user?.id) return toast.error("Connectez-vous pour réagir");

    try {
        // Appel conforme au Swagger (URL + JSON Body)
        await addReactionAPI(post.id, user.id);
        
        setIsLiked(true);
        // Optionnel : incrémenter le compteur localement pour l'UI
        post.nlikes = (post.nlikes || 0) + 1;
        
        toast.success("Vous aimez cette publication");
    } catch (error) {
        toast.error("Impossible d'ajouter la réaction");
    }
};


    const handleAddComment = async (e) => {
    e.preventDefault();
    const commentText = newComment.trim();
    if (!commentText) return;

    try {
        // 1. Appel API
        const created = await addCommentAPI(post.id, commentText);

        // 2. ENRICHISSEMENT (C'est ici que ça se joue)
        // On crée un objet "propre" pour l'affichage immédiat
        // en utilisant les données de l'utilisateur connecté (user)
        const commentForUI = {
            ...created,
            // Si le serveur ne renvoie pas le nom tout de suite, on utilise le nôtre
            authorFullName: created.authorFullName || `${user?.firstName} ${user?.lastName}`.trim() || "Moi",
            content: created.content || commentText,
            createdAt: created.createdAt || new Date().toISOString(),
            id: created.id || Date.now() // Sécurité pour la clé (key)
        };

        // 3. Mise à jour de l'état
        // On l'ajoute en haut de la liste (index 0)
        setComments(prev => [commentForUI, ...prev]);
        
        // 4. Nettoyage du champ
        setNewComment("");
        toast.success("Commentaire publié !");
        
    } catch (error) {
        console.error(error);
        toast.error("Erreur lors de la publication du commentaire");
    }
};

    return (
        <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 w-full max-w-2xl mx-auto"
        >
            {/* HEADER */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <SyndicatDefaultAvatar name={author} size={42} />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">{author}</h4>
                        <p className="text-[11px] text-gray-400 flex items-center gap-1">
                            <Clock size={10} /> {formattedDate}
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 hover:bg-gray-50 p-2 rounded-full"><MoreHorizontal size={18}/></button>
            </div>

            {/* TEXTE */}
            <div className="px-4 pb-3 text-[15px] text-gray-800 leading-relaxed">
                {content}
            </div>

            {/* IMAGE (Correction Photo) */}
            {imageUrl && (
                <div className="px-4 mb-3">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                        <Image 
                            src={imageUrl} 
                            alt="Publication" 
                            fill 
                            className="object-cover" 
                            unoptimized // Evite les erreurs de proxy local
                        />
                    </div>
                </div>
            )}

            {/* ACTIONS */}
            <div className="px-2 py-1 flex items-center border-t border-gray-50">
                <button onClick={() => setIsLiked(!isLiked)} className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${isLiked ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                    <Heart size={18} className={isLiked ? "fill-current" : ""} /> J'aime
                </button>
                <button onClick={toggleComments} className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm ${showComments ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
                    <MessageCircle size={18} /> Commenter
                </button>
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-sm text-gray-600"><Share2 size={18} /> Partager</button>
            </div>

            {/* SECTION COMMENTAIRES (Correction Unique Key) */}
            <AnimatePresence>
                {showComments && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="bg-gray-50 border-t border-gray-100 overflow-hidden">
                        <div className="p-4 flex gap-3">
                            <SyndicatDefaultAvatar name="Moi" size={32} />
                            <form onSubmit={handleAddComment} className="flex-1 relative">
                                <input 
                                    value={newComment} 
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Écrivez un commentaire..."
                                    className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:border-blue-400 outline-none"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600"><Send size={16}/></button>
                            </form>
                        </div>

                        <div className="px-4 pb-4 space-y-4">
                            {isLoadingComments ? (
                                <div className="text-center py-4 text-xs text-gray-400">Chargement...</div>
                            ) : (
                                comments
                                .filter(comment => comment.content && comment.content !== "string") 
                                .map((comment) => (
                                    // LA CORRECTION DE LA KEY EST ICI
                                    <div key={comment.id || `comment-${Math.random()}`} className="flex gap-3 animate-fade-in">
                                        <SyndicatDefaultAvatar name={comment.authorFullName} size={32} />
                                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-xs text-gray-900">{comment.authorFullName|| "Utilisateur"}</span>
                                                <span className="text-[10px] text-gray-400">
                                                    {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "Maintenant"}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700">{comment.content}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                                {/* Petit message si après filtrage il n'y a plus rien */}
    {!isLoadingComments && comments.filter(c => c.content && c.content !== "string").length === 0 && (
        <p className="text-center text-[10px] text-gray-400 py-2">Aucun commentaire valide.</p>
    )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}