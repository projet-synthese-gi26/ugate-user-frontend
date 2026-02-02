"use client";

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import {
    X, Calendar, MapPin, Clock,
    Image as ImageIcon, Video, FileText,
    Loader2, UploadCloud, Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/ utils';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branchId: string;
    onSuccess: () => void;
}

export default function CreateEventModal({ isOpen, onClose, branchId, onSuccess }: Props) {
    const t = useTranslations('Event');
    const { user } = useAuthStore();
    const [loading, setLoading] = useState(false);

    // États du formulaire
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // État des médias
    const [files, setFiles] = useState<{ file: File, type: 'IMAGE' | 'VIDEO' | 'PDF', preview: string }[]>([]);

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

    const handleSubmit = async () => {
        if (!title || !date || !startTime || !endTime || !location) {
            return toast.error("Veuillez remplir tous les champs obligatoires");
        }

        if (!user?.id) return toast.error("Erreur d'authentification");

        setLoading(true);
        const formData = new FormData();

        // Champs textes
        formData.append('title', title);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('eventDate', date);
        formData.append('startTime', startTime);
        formData.append('endTime', endTime);
        formData.append('branchId', branchId);
        formData.append('creatorId', user.id);

        // CORRECTION : Tous les médias sont envoyés dans le champ 'images'
        files.forEach(f => {
            formData.append('images', f.file);
        });

        try {
            await ugateApi.post('/events', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success("Événement créé avec succès !");

            // Réinitialisation
            setTitle(''); setDescription(''); setLocation('');
            setDate(''); setStartTime(''); setEndTime(''); setFiles([]);

            onSuccess();
            onClose();
        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Erreur lors de la création");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/20">
                            <Calendar size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">{t('create_title')}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulaire */}
                <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-white">

                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Titre de l'événement</label>
                            <Input
                                placeholder="Ex: Réunion de branche"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="font-bold text-lg bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Description</label>
                            <textarea
                                className="w-full p-4 rounded-2xl border border-transparent bg-slate-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all min-h-[120px] text-sm font-medium text-slate-700 resize-none"
                                placeholder="Détails de l'événement..."
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Date</label>
                            <Input
                                type="date"
                                icon={Calendar}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Lieu</label>
                            <Input
                                placeholder="Localisation"
                                icon={MapPin}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Début</label>
                            <Input
                                type="time"
                                icon={Clock}
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Fin</label>
                            <Input
                                type="time"
                                icon={Clock}
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="bg-slate-50 border-transparent focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Médias & Documents</label>

                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <ImageIcon size={16} /> Photo
                                <input type="file" className="hidden" accept="image/*" multiple onChange={(e) => handleFileSelect(e, 'IMAGE')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <Video size={16} /> Vidéo
                                <input type="file" className="hidden" accept="video/*" multiple onChange={(e) => handleFileSelect(e, 'VIDEO')} />
                            </label>
                            <label className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-700 border border-red-100 rounded-xl cursor-pointer hover:bg-red-100 transition-colors font-bold text-xs whitespace-nowrap">
                                <FileText size={16} /> PDF
                                <input type="file" className="hidden" accept="application/pdf" multiple onChange={(e) => handleFileSelect(e, 'PDF')} />
                            </label>
                        </div>

                        {files.length > 0 ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 animate-in fade-in">
                                {files.map((f, i) => (
                                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
                                        {f.type === 'IMAGE' && <img src={f.preview} className="w-full h-full object-cover" alt="preview" />}
                                        {f.type === 'VIDEO' && <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white"><Video size={20} /></div>}
                                        {f.type === 'PDF' && <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500"><FileText size={24} /></div>}

                                        <button
                                            onClick={() => removeFile(i)}
                                            className="absolute top-1 right-1 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[9px] p-1 truncate px-2 text-center backdrop-blur-sm">
                                            {f.file.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-400 bg-slate-50/50">
                                <UploadCloud className="mx-auto mb-3 opacity-50" size={32} />
                                <p className="text-xs font-medium">Glissez-déposez ou sélectionnez des fichiers</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3 z-10">
                    <Button variant="ghost" onClick={onClose} className="font-bold text-slate-500 hover:bg-slate-100">Annuler</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-8 bg-primary-800 hover:bg-primary-900 font-bold shadow-lg shadow-primary-900/20 rounded-xl"
                    >
                        {loading && <Loader2 size={18} className="animate-spin mr-2" />}
                        Publier l'événement
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}