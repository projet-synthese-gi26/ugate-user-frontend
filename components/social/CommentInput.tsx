"use client";

import { useState, useRef } from 'react';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import { Smile, Image as ImageIcon, Send, X, Sticker, Loader2 } from 'lucide-react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

interface Props {
    publicationId: string;
    parentId?: string;
    onSuccess: () => void;
    placeholder?: string;
    autoFocus?: boolean;
}

export default function CommentInput({ publicationId, parentId, onSuccess, placeholder = "Écrivez un commentaire...", autoFocus = false }: Props) {
    const { user } = useAuthStore();
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        setImage(null);
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
    };

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setContent((prev) => prev + emojiData.emoji);
        setShowEmoji(false);
    };

    const handleSubmit = async () => {
        if (!content.trim() && !image) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('content', content);
        if (parentId) formData.append('parentId', parentId);
        if (image) formData.append('image', image); // Champ 'image' selon ton API

        try {
            await ugateApi.post(`/publications/${publicationId}/comments`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setContent('');
            removeImage();
            onSuccess();
            toast.success("Envoyé !");
        } catch (e) {
            console.error(e);
            toast.error("Erreur d'envoi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex gap-3 items-start w-full relative">
            {/* Avatar */}
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 overflow-hidden shrink-0 border border-slate-100">
                {user?.photoUri ? <img src={user.photoUri} className="w-full h-full object-cover" /> : user?.firstName?.charAt(0)}
            </div>

            <div className="flex-1 bg-slate-100 rounded-[1.5rem] p-2 relative transition-all focus-within:bg-white focus-within:shadow-md focus-within:ring-1 focus-within:ring-slate-200">

                {/* Prévisualisation Image */}
                {preview && (
                    <div className="relative w-fit mb-2 ml-2 mt-2">
                        <img src={preview} className="h-20 rounded-xl object-cover border border-slate-200" alt="Preview" />
                        <button onClick={removeImage} className="absolute -top-2 -right-2 bg-slate-900 text-white p-1 rounded-full hover:bg-red-500 transition-colors">
                            <X size={10} />
                        </button>
                    </div>
                )}

                {/* Input Texte */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    className="w-full bg-transparent border-none outline-none px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 resize-none min-h-[40px] max-h-[120px]"
                    rows={content.length > 50 ? 3 : 1}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                />

                {/* Toolbar */}
                <div className="flex justify-between items-center px-2 pb-1">
                    <div className="flex gap-1">
                        <button onClick={() => fileInputRef.current?.click()} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors" title="Ajouter une photo">
                            <ImageIcon size={18} />
                        </button>
                        <button onClick={() => setShowEmoji(!showEmoji)} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors relative" title="Emojis">
                            <Smile size={18} />
                        </button>
                        {/* Simulation Stickers */}
                        <button className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors" title="Stickers (Bientôt)">
                            <Sticker size={18} />
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || (!content.trim() && !image)}
                        className={cn(
                            "p-2 rounded-full transition-all",
                            (content.trim() || image) ? "text-primary-600 hover:bg-primary-50" : "text-slate-300 cursor-not-allowed"
                        )}
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                </div>

                {/* Emoji Picker Popover */}
                {showEmoji && (
                    <div className="absolute bottom-full left-0 mb-2 z-50 shadow-2xl rounded-2xl">
                        <div onClick={() => setShowEmoji(false)} className="fixed inset-0 z-40" /> {/* Overlay close */}
                        <div className="relative z-50">
                            <EmojiPicker onEmojiClick={onEmojiClick} width={300} height={400} />
                        </div>
                    </div>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageSelect}
                />
            </div>
        </div>
    );
}