// src/components/syndicate-profile/ProfileShop.jsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast'; // Pour une notification à l'utilisateur

/**
 * Affiche une grille de produits pour la boutique du syndicat.
 * @param {Array} [products=[]] - Le tableau des objets produits.
 */
export default function ProfileShop({ products = [] }) {
    const t = useTranslations('profile_page');

    const handleOrderClick = (productName) => {
        // Logique de commande future (ex: ajouter au panier, ouvrir une modale de paiement)
        // Pour l'instant, on affiche une notification.
        toast.success(`"${productName}" a été ajouté à votre panier ! (simulation)`);
    };

    if (!products || products.length === 0) {
        return (
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">
                {t('profile_page.no_products')}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product.id || index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700 overflow-hidden flex flex-col"
                    whileHover={{ y: -5, scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Image du produit */}
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <ShoppingCart className="w-12 h-12 text-gray-300 dark:text-gray-500" />
                            </div>
                        )}
                    </div>

                    {/* Contenu de la carte produit */}
                    <div className="p-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2">
                            {product.name}
                        </h4>

                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-4 flex-grow line-clamp-3">
                            {product.description}
                        </p>

                        {/* Pied de carte avec prix et bouton */}
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                {product.price ? `${product.price.toFixed(2)} €` : 'Prix sur demande'}
                            </span>
                            <motion.button
                                className="px-3 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-semibold hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors flex items-center gap-1.5"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleOrderClick(product.name)}
                            >
                                <ShoppingCart size={14} />
                                <span>{t('profile_page.order_button')}</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}