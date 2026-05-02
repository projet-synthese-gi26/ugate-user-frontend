"use client";

import { useState } from 'react';
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
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [closingAt, setClosingAt] = useState('');
    const [options, setOptions] = useState(['', '']);

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index: number) => setOptions(options.filter((_, i) => i !== index));
    const updateOption = (index: number, val: string) => {
        const newOpts = [...options];
        newOpts[index] = val;
        setOptions(newOpts);
    };

    const handleSubmit = async () => {
        if (!title || options.some(o => !o.trim()) || !closingAt) {
            return toast.error("Remplissez la question, les options et la date");
        }

        setLoading(true);
        try {
            await ugateApi.post('/publication-votes', {
                title, description, branchId,
                closingAt: new Date(closingAt).toISOString(),
                type: 'SINGLE_CHOICE',
                choices: options
            });
            toast.success("Sondage lancé !");
            onSuccess();
            onClose();
            // Reset des champs après succès
            setTitle(''); setDescription(''); setClosingAt(''); setOptions(['', '']);
        } catch (error) {
            toast.error("Erreur lors de la création");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                >
                    <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center"><BarChart3 size={20} /></div>
                            <h2 className="text-xl font-black text-slate-900">Nouveau Sondage</h2>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"><X size={20} /></button>
                    </div>

                    <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Question & Contexte</label>
                            <Input placeholder="Ex: Quelle est la priorité pour ce trimestre ?" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-3 font-bold text-lg" />

                            {/* CORRECTION ICI : Ajout de text-slate-900, bg-slate-50 et focus:bg-white */}
                            <textarea
                                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-sm min-h-[80px] resize-none text-slate-900 transition-all"
                                placeholder="Donnez plus de détails (optionnel)..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Options de réponse</label>
                            <div className="space-y-3">
                                {options.map((opt, i) => (
                                    <div key={i} className="flex gap-2">
                                        <Input placeholder={`Choix ${i + 1}`} value={opt} onChange={(e) => updateOption(i, e.target.value)} className="bg-slate-50" />
                                        {options.length > 2 && (
                                            <button onClick={() => removeOption(i)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"><Trash2 size={18} /></button>
                                        )}
                                    </div>
                                ))}
                                <button onClick={addOption} className="flex items-center gap-2 text-primary-600 font-bold text-sm p-2 hover:bg-primary-50 rounded-lg transition-colors w-full justify-center border border-dashed border-primary-200">
                                    <Plus size={16} /> Ajouter une option
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Fin du vote</label>
                            <Input type="datetime-local" icon={Calendar} value={closingAt} onChange={(e) => setClosingAt(e.target.value)} />
                        </div>
                    </div>

                    <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                        <Button variant="ghost" onClick={onClose} className="font-bold text-slate-500">Annuler</Button>
                        <Button onClick={handleSubmit} disabled={loading} className="px-8 bg-primary-800 text-white hover:bg-primary-900 font-bold h-12 rounded-xl shadow-xl shadow-primary-900/20">
                            {loading && <Loader2 size={18} className="animate-spin mr-2" />} Lancer le vote
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}