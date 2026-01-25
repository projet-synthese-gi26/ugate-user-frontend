"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, X } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { toast } from 'react-hot-toast';

export default function NewPostModal({ isOpen, onClose, onNewPost, isLoading, userName, authorId, branchId }) {
    const t = useTranslations('express_page');
    const [content, setContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            setContent('');
            setImagePreview(null);
            setImageFile(null);
        }
    }, [isOpen]);

    const handlePublish = () => {
        // --- VÉRIFICATION TECHNIQUE ---
        console.log("Vérification avant publication :", { authorId, branchId, hasContent: !!content.trim() });

        if (!authorId) {
            toast.error("Erreur : Votre session a expiré. Reconnectez-vous.");
            return;
        }
        if (!branchId) {
            toast.error("Erreur : Impossible d'identifier l'antenne du syndicat.");
            return;
        }
        if (!content.trim() && !imageFile) {
            toast.error("Votre message est vide.");
            return;
        }

        const formData = new FormData();
        formData.append('content', content.trim());
        formData.append('authorId', authorId);
        formData.append('branchId', branchId);
        
        // N'ajouter l'image que si elle existe vraiment
        if (imageFile) {
            formData.append('images', imageFile);
        }
        
        onNewPost(formData);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4 text-gray-900">
                            <h2 className="text-2xl font-bold">Créer une publication</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder={`Quoi de neuf, ${userName || 'Jude'} ?`}  
                            className="w-full h-32 p-3 border-2 border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:border-blue-600 resize-none transition-all text-gray-900"
                        ></textarea>

                        {imagePreview && (
                            <div className="mt-4 relative rounded-xl overflow-hidden border border-gray-200">
                                <Image src={imagePreview} alt="Aperçu" width={500} height={300} className="w-full h-auto object-cover" />
                                <button onClick={() => {setImagePreview(null); setImageFile(null);}} className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"><X size={16} /></button>
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-6">
                            <button 
                                onClick={() => fileInputRef.current?.click()} 
                                className="p-3 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            >
                                <ImageIcon size={24} />
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                            
                            <div className="flex gap-3">
                                <button onClick={onClose} className="px-6 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-all">
                                    Annuler
                                </button>
                                <button 
                                    onClick={handlePublish} 
                                    disabled={(!content.trim() && !imageFile) || isLoading} 
                                    className="px-8 py-2 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 shadow-lg shadow-blue-100 transition-all flex items-center gap-2"
                                >
                                    {isLoading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send size={18} />}
                                    Publier
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}