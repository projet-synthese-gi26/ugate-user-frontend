import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique des cookies | U-Gate",
};

export default function CookiesPage() {
    return (
        <div className="text-slate-600 leading-relaxed text-lg">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Politique des cookies</h1>

            <p className="mb-6">
                U-Gate utilise des cookies afin d’améliorer l’expérience utilisateur, d'assurer le maintien de votre session et de
                garantir la sécurité globale de la plateforme.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Types de cookies utilisés</h2>
            <ul className="list-disc pl-5 mb-8 space-y-3">
                <li><strong className="text-slate-800">Cookies essentiels :</strong> Strictement nécessaires au fonctionnement du site et à la navigation sécurisée.</li>
                <li><strong className="text-slate-800">Cookies de performance :</strong> Pour analyser l'utilisation et optimiser la rapidité de la plateforme.</li>
                <li><strong className="text-slate-800">Cookies de préférences :</strong> Pour retenir vos choix (langue, thème, préférences d'affichage).</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Gestion et suppression</h2>
            <p className="mb-6">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou supprimer ceux déjà enregistrés. Attention, refuser les cookies essentiels peut rendre l'accès à votre espace syndical impossible.
            </p>
        </div>
    );
}