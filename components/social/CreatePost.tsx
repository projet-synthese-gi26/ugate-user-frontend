"use client";

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { ugateApi } from '@/lib/axios';
import {
    Image as ImageIcon, Video, FileText,
    Send, X, Loader2
} from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CreatePostProps {
    syndicateId: string;
    branchName?: string;
}

export default function CreatePost({ syndicateId, branchName }: CreatePostProps) {
    const t = useTranslations('Feed');
    const { user } = useAuthStore();

    // États
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

    // Gestion de la sélection de fichiers
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'IMAGE' | 'VIDEO' | 'PDF') => {
        const selectedFiles = Array.from(e.target.files || []);

        const newFiles = selectedFiles.map(file => ({
            file,
            type,
            preview: URL.createObjectURL(file)
        }));

        setFiles(prev => [...prev, ...newFiles]);
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        URL.revokeObjectURL(newFiles[index].preview);
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    // Envoi à l'API
    const handlePublish = async () => {
        if (!content.trim() && files.length === 0) return;
        if (!user?.id) return toast.error("Utilisateur non identifié");

        setLoading(true);
        const formData = new FormData();

        formData.append('content', content);
        formData.append('authorId', user.id);
        formData.append('branchId', syndicateId);

        // CORRECTION : Envoi via les champs spécifiques de l'API
        files.forEach(f => {
            if (f.type === 'IMAGE') formData.append('images', f.file);
            if (f.type === 'VIDEO') formData.append('videos', f.file);
            if (f.type === 'PDF') formData.append('files', f.file);
        });

        try {
            await ugateApi.post('/publications', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success("Publication réussie !");

            // Reset
            setContent('');
            setFiles([]);

            window.location.reload();
        } catch (error: any) {
            console.error("Erreur publication:", error);
            toast.error(error.response?.data?.message || "Erreur lors de la publication");
        } finally {
            setLoading(false);
        }
    };

    const placeholderText = branchName
        ? `Quoi de neuf à ${branchName}, ${user?.firstName} ?`
        : t('create_post_placeholder', { name: user?.firstName });

    return (
        <div className="bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">

            {/* Zone de Saisie */}
            <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-800 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-inner shrink-0">
                    {user?.firstName?.charAt(0) || 'U'}
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={placeholderText}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-4 text-slate-700 font-medium outline-none border-none min-h-[100px] resize-none placeholder:text-slate-400"
                />
            </div>

            {/* Zone de Prévisualisation des fichiers */}
            {files.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-6 animate-in zoom-in-95">
                    {files.map((f, i) => (
                        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
                            {f.type === 'IMAGE' && (
                                <img src={f.preview} className="w-full h-full object-cover" alt="preview" />
                            )}
                            {f.type === 'VIDEO' && (
                                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white">
                                    <Video size={24} />
                                </div>
                            )}
                            {f.type === 'PDF' && (
                                <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500">
                                    <FileText size={24} />
                                </div>
                            )}

                            <button
                                onClick={() => removeFile(i)}
                                className="absolute top-1 right-1 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Barre d'Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-slate-100 gap-4">
                <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-emerald-50 text-emerald-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <ImageIcon size={18} />
                        <span className="hidden md:inline">Photo</span>
                        <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                    </label>

                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 text-blue-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <Video size={18} />
                        <span className="hidden md:inline">Vidéo</span>
                        <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                    </label>

                    <label className="flex items-center gap-2 px-4 py-2.5 hover:bg-red-50 text-red-600 rounded-xl transition-all cursor-pointer font-bold text-sm whitespace-nowrap">
                        <FileText size={18} />
                        <span className="hidden md:inline">PDF</span>
                        <input type="file" className="hidden" accept="application/pdf" multiple onChange={(e) => handleFileSelect(e, 'PDF')} />
                    </label>
                </div>

                <button
                    onClick={handlePublish}
                    disabled={loading || (!content.trim() && files.length === 0)}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-primary-900/20 disabled:opacity-50 disabled:grayscale"
                >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    {t('post_btn')}
                </button>
            </div>
        </div>
    );
}