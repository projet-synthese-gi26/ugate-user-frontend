"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, X } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from 'next/image';

export default function NewPostModal({ isOpen, onClose, onNewPost, isLoading = false }) {
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
        if (content.trim() || imageFile) {
            const formData = new FormData();

            // Pour la simulation, on passe aussi l'objet brut si on veut faciliter la lecture
            // Mais ici on respecte le format API : un blob JSON + un fichier
            const postData = { content: content.trim() };
            const postDataBlob = new Blob([JSON.stringify(postData)], { type: 'application/json' });

            formData.append('postData', postDataBlob); // Important pour le backend Java

            if (imageFile) {
                formData.append('imageFile', imageFile);
            }

            // Note: Dans PublicationsFeed (simulation), nous devrons lire ce FormData manuellement
            // ou adapter la fonction de simulation pour accepter les arguments bruts.
            // Pour être propre, on envoie le FormData standard.
            onNewPost(formData);
        }
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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        className="relative bg-white dark:bg-neutral-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t('new_post_modal_title')}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"><X size={20} /></button>
                        </div>

                        <div className="p-4">
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder={t('post_placeholder')}
                                className="w-full h-32 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 resize-none text-base"
                                autoFocus
                            ></textarea>

                            {imagePreview && (
                                <div className="mt-4 relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                    <Image src={imagePreview} alt="Aperçu" width={500} height={300} className="w-full h-48 object-cover" />
                                    <button onClick={() => { setImagePreview(null); setImageFile(null); }} className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/80 transition-colors">
                                        <X size={14} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <div>
                                <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2.5 text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 rounded-xl transition-colors"
                                    title="Ajouter une image"
                                >
                                    <ImageIcon size={20} />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
                                    {t('cancel_button')}
                                </button>
                                <button
                                    onClick={handlePublish}
                                    disabled={(!content.trim() && !imageFile) || isLoading}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2"
                                >
                                    {isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={16} />}
                                    {isLoading ? '...' : t('publish_button')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}