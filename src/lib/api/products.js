// src/lib/api/products.js
import { ugateInstance } from './instance';

/**
 * Récupérer les détails d'un produit
 * GET /products/{id}
 *
 * @param {string} productId - ID du produit
 */
export const getProductDetailsAPI = async (productId) => {
    try {
        const response = await ugateInstance.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Erreur récupération produit:", error.message);
        throw error;
    }
};

/**
 * Récupérer tous les produits d'un syndicat
 * GET /products/syndicates/{syndicatId}
 *
 * @param {string} syndicatId - ID du syndicat
 */
export const getSyndicateProductsAPI = async (syndicatId) => {
    try {
        const response = await ugateInstance.get(`/products/syndicates/${syndicatId}`);
        return response.data || [];
    } catch (error) {
        console.error("Erreur récupération produits du syndicat:", error.message);
        return [];
    }
};
