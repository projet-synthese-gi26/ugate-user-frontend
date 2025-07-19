// src/app/(syndicate-space)/syndicat-space/[syndicatId]/page.jsx
import { redirect } from 'next/navigation';

/**
 * C'est la page d'accueil pour un espace syndicat.
 * Son seul rôle est de rediriger l'utilisateur vers la première section par défaut,
 * par exemple, la page "membres".
 */
export default function SyndicateRootPage({ params }) {
    const { syndicatId } = params;

    // Redirige de /syndicat-space/1 vers /syndicat-space/1/membres
    redirect(`/syndicat-space/${syndicatId}/membres`);

    // Comme redirect() lance une erreur spéciale, le code ci-dessous ne sera jamais exécuté.
    // Mais il est bon de retourner null pour la complétude.
    return null;
}