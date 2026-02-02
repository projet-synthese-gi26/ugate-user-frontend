"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { X, Plus, Trash2, Calendar, Loader2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branchId: string;
    onSuccess: () => void;
}

export default function CreateVoteModal({ isOpen, onClose, branchId, onSuccess }: Props) {
    const t = useTranslations('Votes');
    const [loading, setLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [closingAt, setClosingAt] = useState('');
    const [options, setOptions] = useState(['', '']); // Minimum 2 options

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index: number) => setOptions(options.filter((_, i) => i !== index));
    const updateOption = (index: number, val: string) => {
        const newOpts = [...options];
        newOpts[index] = val;
        setOptions(newOpts);
    };

    const handleSubmit = async () => {
        if (!title || options.some(o => !o) || !closingAt) {
            return toast.error("Veuillez remplir tous les champs");
        }

        setLoading(true);
        try {
            await ugateApi.post('/publication-votes', {
                title,
                description,
                branchId,
                closingAt: new Date(closingAt).toISOString(),
                type: 'SINGLE_CHOICE', // Par défaut
                choices: options // Note: Adapte si l'API attend un format différent pour les labels
            });

            toast.success(t('success_create'));
            onSuccess();
            onClose();
        } catch (error) {
            toast.error("Erreur lors de la création");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center">
                            <BarChart3 size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">{t('create_btn')}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors shadow-sm border border-transparent hover:border-slate-200">
                        <X size={20} />
                    </button>
                </div>

                {/* Formulaire */}
                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Question du sondage</label>
                        <Input
                            placeholder="Ex: Quelle réforme prioriser pour 2025 ?"
                            value={title} onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Description (Optionnel)</label>
                        <textarea
                            className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all text-sm min-h-[100px]"
                            placeholder="Détails sur l'enjeu du vote..."
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-1">Options de réponse</label>
                        {options.map((opt, i) => (
                            <div key={i} className="flex gap-2">
                                <Input
                                    placeholder={`Option ${i + 1}`}
                                    value={opt} onChange={(e) => updateOption(i, e.target.value)}
                                />
                                {options.length > 2 && (
                                    <button onClick={() => removeOption(i)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={addOption}
                            className="flex items-center gap-2 text-primary-600 font-bold text-sm p-2 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                            <Plus size={16} /> Ajouter une option
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Date de clôture</label>
                        <div className="relative">
                            <Input
                                type="datetime-local"
                                value={closingAt} onChange={(e) => setClosingAt(e.target.value)}
                                className="pl-12"
                            />
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="font-bold text-slate-500">Annuler</Button>
                    <Button
                        onClick={handleSubmit} disabled={loading}
                        className="px-8 bg-primary-800 font-bold shadow-lg shadow-primary-900/20 rounded-xl"
                    >
                        {loading && <Loader2 size={18} className="animate-spin mr-2" />}
                        Lancer le vote
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}