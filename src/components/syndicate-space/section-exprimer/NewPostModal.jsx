"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Send, X, Camera } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from 'next/image';

export default function NewPostModal({ isOpen, onClose, onNewPost }) {
    const t = useTranslations('express_page');
    const [content, setContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);

    const handlePublish = () => {
        if (content.trim() || imageFile) {
            onNewPost({ content, imageFile });
            resetAndClose();
        }
    };

    const resetAndClose = () => {
        setContent('');
        setImagePreview(null);
        setImageFile(null);
        onClose();
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={resetAndClose}>
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4"><h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('express_page.new_post_modal_title')}</h2><button onClick={resetAndClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><X /></button></div>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder={t('express_page.post_placeholder')} className="w-full h-32 p-3 border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 rounded-xl focus:outline-none resize-none transition-all"></textarea>
                        {imagePreview && (<div className="mt-4 relative rounded-xl overflow-hidden"><Image src={imagePreview} alt="Aperçu" width={500} height={300} className="w-full h-auto object-cover" /><button onClick={() => setImagePreview(null)} className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"><X size={16} /></button></div>)}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-1"><button onClick={() => fileInputRef.current?.click()} className="p-2 text-green-500 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-full"><ImageIcon /></button><input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" /></div>
                            <div className="flex space-x-3"><button onClick={resetAndClose} className="px-5 py-2 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">{t('express_page.cancel_button')}</button><button onClick={handlePublish} disabled={!content.trim() && !imageFile} className="px-5 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"><Send size={16} /> {t('express_page.publish_button')}</button></div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}