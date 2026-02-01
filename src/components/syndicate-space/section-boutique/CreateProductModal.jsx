// src/components/syndicate-space/section-boutique/CreateProductModal.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, DollarSign, Tag, Layers, Image as ImageIcon, Loader2 } from 'lucide-react';
import { createProductAPI } from '@/lib/api/products';
import { toast } from 'react-hot-toast';

export default function CreateProductModal({ isOpen, onClose, syndicatId, onRefresh }) {
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        sku: '',
        category: 'AUTRE',
        stock: '',
        isActive: true,
        imageFile: null
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, imageFile: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const fd = new FormData();
            fd.append('syndicatId', syndicatId);
            fd.append('name', formData.name);
            fd.append('description', formData.description);
            fd.append('price', formData.price);
            fd.append('sku', formData.sku);
            fd.append('category', formData.category);
            fd.append('stock', formData.stock);
            fd.append('isActive', formData.isActive.toString());

            if (formData.imageFile) {
                fd.append('image', formData.imageFile);
            }

            await createProductAPI(fd);
            toast.success("Produit ajouté avec succès !");
            onRefresh();
            onClose();
        } catch (error) {
            toast.error("Erreur lors de la création du produit");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                    
                    <div className="p-6 border-b flex justify-between items-center bg-white">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Package className="text-blue-600" /> Ajouter un produit
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X /></button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nom du produit */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Nom du produit *</label>
                                <div className="relative">
                                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="Ex: T-shirt du syndicat" />
                                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            {/* Prix */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Prix *</label>
                                <div className="relative">
                                    <input required type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="0.00" />
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            {/* SKU */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Référence (SKU) *</label>
                                <input required type="text" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="PROD-001" />
                            </div>

                            {/* Stock */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Stock initial *</label>
                                <div className="relative">
                                    <input required type="number" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="100" />
                                    <Layers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Description *</label>
                            <textarea required rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Décrivez votre produit..."></textarea>
                        </div>

                        {/* Upload Image */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Image du produit</label>
                            <div onClick={() => document.getElementById('product-image').click()} className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all overflow-hidden relative min-h-[150px]">
                                {imagePreview ? (
                                    <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <>
                                        <ImageIcon className="text-gray-400" size={32} />
                                        <span className="text-sm text-gray-500 text-center">Cliquez pour ajouter une photo</span>
                                    </>
                                )}
                            </div>
                            <input id="product-image" type="file" hidden accept="image/*" onChange={handleImageChange} />
                        </div>

                        <div className="pt-4 flex gap-4">
                            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-all">Annuler</button>
                            <button type="submit" disabled={isLoading} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2">
                                {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Créer le produit"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}