// src/app/[locale]/(syndicate-space)/syndicat-space/[syndicatId]/[branchId]/layout.jsx

/**
 * Layout pour une branche spécifique d'un syndicat.
 * Ce layout passe simplement les enfants, car le layout parent [syndicatId]
 * gère déjà l'affichage global (sidebar, header, etc.)
 *
 * Les paramètres syndicatId et branchId sont disponibles via params
 * pour les pages enfants.
 */
export default async function BranchLayout({ children, params }) {
    const { syndicatId, branchId } = await params;

    // On peut ajouter ici une validation du branchId si nécessaire
    // Pour l'instant, on passe simplement les enfants

    return children;
}
