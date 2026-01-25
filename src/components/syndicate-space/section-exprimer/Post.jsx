"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, Send, Clock, ImageIcon } from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';
import { getCommentsAPI, addCommentAPI } from '@/lib/api/posts';
import { toast } from 'react-hot-toast';

export default function Post({ post }) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [isLoadingComments, setIsLoadingComments] = useState(false);

    // 1. Charger les commentaires quand on clique sur le bouton
    const toggleComments = async () => {
        if (!showComments) {
            setIsLoadingComments(true);
            try {
                const data = await getCommentsAPI(null, post.id); // branchId est null ici car non requis par ton Swagger
                setComments(Array.isArray(data) ? data : []);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoadingComments(false);
            }
        }
        setShowComments(!showComments);
    };

    // 2. Envoyer un nouveau commentaire
    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const created = await addCommentAPI(post.id, newComment.trim());
            setComments([created, ...comments]);
            setNewComment("");
            toast.success("Commentaire ajouté");
        } catch (e) {
            toast.error("Erreur lors de l'envoi");
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6 w-full max-w-2xl mx-auto">
            {/* ... (Garder le header et le contenu du post comme avant) ... */}
            <div className="p-4">
                <h4 className="font-bold text-sm">{post.authorFullName}</h4>
                <p className="text-gray-800 text-sm mt-1">{post.content}</p>
            </div>

            {/* BARRE D'ACTIONS */}
            <div className="px-2 py-1 flex items-center border-t border-gray-50">
                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm">
                    <Heart size={18} /> J'aime
                </button>

                <button 
                    onClick={toggleComments}
                    className={`flex-1 py-2 flex items-center justify-center gap-2 rounded-lg transition-colors text-sm ${showComments ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <MessageCircle size={18} /> Commenter
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm">
                    <Share2 size={18} /> Partager
                </button>
            </div>

            {/* SECTION COMMENTAIRES (AnimatePresence pour un effet fluide) */}
            <AnimatePresence>
                {showComments && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-50 border-t border-gray-100 overflow-hidden"
                    >
                        {/* Champ de saisie */}
                        <div className="p-4 flex gap-3">
                            <SyndicatDefaultAvatar name="Moi" size={32} />
                            <form onSubmit={handleAddComment} className="flex-1 relative">
                                <input 
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Écrivez un commentaire..."
                                    className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-blue-400 transition-all"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700">
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>

                        {/* Liste des commentaires */}
                        <div className="px-4 pb-4 space-y-4">
                            {isLoadingComments ? (
                                <p className="text-center text-xs text-gray-400 py-4">Chargement...</p>
                            ) : comments.length > 0 ? (
                                comments.map(comment => (
                                    <div key={comment.id} className="flex gap-3">
                                        <SyndicatDefaultAvatar name={comment.authorFullName} size={32} />
                                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-xs text-gray-900">{comment.authorFullName}</span>
                                                <span className="text-[10px] text-gray-400">
                                                    {new Date(comment.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700">{comment.content}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-xs text-gray-400 py-2">Soyez le premier à commenter !</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}