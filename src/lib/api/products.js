// src/lib/api/products.js
import { ugateInstance } from './instance';


/**
 * Créer un nouveau produit
 * POST /products (multipart/form-data)
 */
export const createProductAPI = async (formData) => {
    try {
        const response = await ugateInstance.post('/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du produit:", error.response?.data || error.message);
        throw error;
    }
};


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
