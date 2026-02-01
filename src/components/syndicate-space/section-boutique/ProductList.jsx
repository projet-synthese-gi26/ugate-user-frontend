// src/components/syndicate-space/section-boutique/ProductList.jsx
"use client";

import { useState, useEffect } from 'react';
import { ShoppingBag, Plus, RefreshCw, Loader2 } from 'lucide-react';
import { getSyndicateProductsAPI } from '@/lib/api/products';
import CreateProductModal from './CreateProductModal';

export default function ProductList({ syndicatId }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadProducts = async () => {
        setLoading(true);
        try {
            const data = await getSyndicateProductsAPI(syndicatId);
            setProducts(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (syndicatId) loadProducts();
    }, [syndicatId]);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Boutique</h1>
                    <p className="text-gray-500">Gérez les articles en vente pour vos membres</p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                    <Plus size={20} /> Ajouter un produit
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Loader2 className="animate-spin mb-4" size={40} />
                    <p>Chargement du catalogue...</p>
                </div>
            ) : products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group">
                            <div className="aspect-square relative bg-gray-50 overflow-hidden">
                                {product.imageUrl ? (
                                    <img src={product.imageUrl} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt="" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center"><ShoppingBag className="text-gray-200" size={48} /></div>
                                )}
                            </div>
                            <div className="p-4">
                                <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-md">{product.category}</span>
                                <h3 className="font-bold text-gray-900 mt-2 line-clamp-1">{product.name}</h3>
                                <p className="text-2xl font-black text-blue-600 mt-1">{product.price} <span className="text-sm">FCFA</span></p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-gray-400">Stock: <span className="font-bold text-gray-900">{product.stock}</span></span>
                                    <button className="text-xs font-bold text-gray-500 hover:text-blue-600 underline">Modifier</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                    <ShoppingBag className="mx-auto text-gray-200 mb-4" size={64} />
                    <h3 className="text-xl font-bold text-gray-900">Boutique vide</h3>
                    <p className="text-gray-500 mt-2">Commencez par ajouter votre premier article.</p>
                </div>
            )}

            <CreateProductModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                syndicatId={syndicatId} 
                onRefresh={loadProducts} 
            />
        </div>
    );
}