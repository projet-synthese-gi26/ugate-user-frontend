import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité | U-Gate",
};

export default function PrivacyPage() {
    return (
        <div className="text-slate-600 leading-relaxed text-lg">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Politique de confidentialité</h1>

            <p className="mb-6">
                Chez <strong className="text-slate-900">U-Gate</strong>, la protection de vos données personnelles est
                une priorité absolue. Cette politique explique comment nous collectons,
                utilisons et protégeons vos informations dans un cadre strictement confidentiel.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">1. Données collectées</h2>
            <ul className="list-disc pl-5 mb-8 space-y-3">
                <li>Informations d’identification (nom, email, téléphone)</li>
                <li>Données de navigation et d’utilisation sécurisée</li>
                <li>Documents légaux soumis volontairement pour certification</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. Utilisation des données</h2>
            <p className="mb-8">
                Les données sont utilisées exclusivement pour le fonctionnement de la
                plateforme, la conformité légale et l’amélioration des services. Aucune donnée n'est revendue à des tiers ou partenaires commerciaux.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">3. Sécurité</h2>
            <p className="mb-6">
                Nous mettons en œuvre des mesures techniques et organisationnelles
                avancées (chiffrement de bout en bout, contrôles d'accès stricts) afin de garantir la sécurité absolue de vos données hébergées sur nos serveurs.
            </p>
        </div>
    );
}