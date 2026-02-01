// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/boutique/page.jsx
import ProductList from "@/components/syndicate-space/section-boutique/ProductList";

export default async function BoutiquePage({ params }) {
    // On récupère les deux IDs depuis l'URL
    const { syndicatId, branchId } = await params;

    return (
        <div className="animate-fade-in">
            {/* On affiche la liste des produits du syndicat parent */}
            <ProductList syndicatId={syndicatId} branchId={branchId} />
        </div>
    );
}