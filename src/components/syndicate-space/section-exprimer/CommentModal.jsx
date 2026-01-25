// src/components/syndicate-space/section-exprimer/CommentModal.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Image as ImageIcon, Send, X, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Comment from './comments/Comment';
import EmojiPicker from './comments/EmojiPicker';

export default function CommentModal({ post, isOpen, onClose, onAddComment }) {
    const t = useTranslations('comments');
    
    // Initialise l'état des commentaires avec les données du post
    // On ajoute 'showReplies' pour contrôler l'affichage des réponses localement
    const [comments, setComments] = useState(post.comments.map(c => ({ ...c, showReplies: false })));
    
    // États pour la saisie d'un nouveau commentaire
    const [newComment, setNewComment] = useState('');
    const [commentImage, setCommentImage] = useState(null);
    const [commentImagePreview, setCommentImagePreview] = useState(null);
    const [replyTo, setReplyTo] = useState(null); // Pour savoir à quel commentaire on répond
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
    
    const commentInputRef = useRef(null);
    const fileInputRef = useRef(null);

    // Synchronise les commentaires si le post parent est mis à jour
    useEffect(() => {
        setComments(post.comments.map(c => ({ ...c, showReplies: c.showReplies || false })));
    }, [post.comments]);

    const handleSubmitComment = () => {
        if (!newComment.trim() && !commentImage) return;

        const newCommentObj = {
            id: Date.now(),
            author: { name: 'Vous', avatar: 'https://i.pravatar.cc/150?img=1' },
            content: newComment,
            image: commentImagePreview,
            timestamp: "À l'instant",
            liked: false,
            likes: 0,
            replies: []
        };
        
        onAddComment(newCommentObj);
        setNewComment('');
        setCommentImage(null);
        setCommentImagePreview(null);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCommentImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setCommentImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleEmojiClick = (emoji) => {
        setNewComment((prev) => prev + emoji);
        setIsEmojiPickerVisible(false);
    };

    const handleReply = (comment) => {
        setReplyTo(comment);
        commentInputRef.current?.focus();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white bg-gray-800 rounded-2xl w-full max-w-2xl h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                            <h2 className="text-xl font-bold text-gray-800 text-white">Publication de {post.author.name}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 hover:bg-gray-700 rounded-full"><X/></button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div>
                                <p className="text-gray-700 text-gray-300 whitespace-pre-wrap">{post.content}</p>
                                {post.image && <div className="mt-4 rounded-lg overflow-hidden"><Image src={post.image} alt="Post content" width={600} height={400} className="w-full h-auto" /></div>}
                            </div>
                            <hr className="border-gray-700"/>
                            <div className="space-y-6">
                                {comments.map(comment => <Comment key={comment.id} comment={comment} onReply={handleReply} />)}
                            </div>
                        </div>

                        <div className="relative p-4 border-t border-gray-700 bg-gray-50 bg-gray-900/50 rounded-b-2xl flex-shrink-0">
                            {replyTo && (
                                <div className="mb-2 p-2 bg-blue-100 bg-blue-900/50 rounded-lg flex justify-between items-center text-xs">
                                    <span className="text-blue-600 text-blue-400">Répondre à <strong>{replyTo.author.name}</strong></span>
                                    <button onClick={() => setReplyTo(null)} className="font-bold p-1"><X size={14} /></button>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <Image src="https://i.pravatar.cc/150?img=1" alt="Votre avatar" width={40} height={40} className="w-10 h-10 rounded-full" />
                                <div className="relative flex-1">
                                    <input
                                        ref={commentInputRef}
                                        type="text"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder={t('comments.placeholder')}
                                        className="w-full p-3 pr-28 rounded-full bg-white bg-gray-700 border-2 border-gray-200 border-gray-600 text-gray-900 text-gray-200"
                                        onKeyPress={(e) => { if (e.key === 'Enter') handleSubmitComment(); }}
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                        <button onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)} className="p-2 hover:bg-gray-100 hover:bg-gray-600 rounded-full"><Smile className="w-5 h-5 text-yellow-500" /></button>
                                        <button onClick={() => fileInputRef.current?.click()} className="p-2 hover:bg-gray-100 hover:bg-gray-600 rounded-full"><ImageIcon className="w-5 h-5 text-green-500" /></button>
                                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                                        <button onClick={handleSubmitComment} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-400" disabled={!newComment.trim()}><Send size={16} /></button>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {isEmojiPickerVisible && <EmojiPicker onEmojiClick={handleEmojiClick} />}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}