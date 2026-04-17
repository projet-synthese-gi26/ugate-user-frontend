import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions d’utilisation | U-Gate",
};

export default function TermsPage() {
    return (
        <div className="text-slate-600 leading-relaxed text-lg">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Conditions d’utilisation</h1>

            <p className="mb-6">
                L’utilisation de la plateforme U-Gate implique l’acceptation pleine et
                entière des présentes conditions générales d'utilisation.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Accès au service</h2>
            <p className="mb-8">
                L’accès est strictement réservé aux utilisateurs disposant d’un compte valide, vérifié et approuvé par une antenne syndicale ou en cours de vérification par nos services de conformité.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Responsabilités</h2>
            <p className="mb-8">
                U-Gate agit comme plateforme technique de mise en relation et de gestion. Les
                syndicats restent entièrement responsables des contenus, publications, événements et votes émis sur leurs espaces respectifs.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Suspension de compte</h2>
            <p className="mb-6">
                Tout usage abusif, frauduleux ou contraire à l'éthique professionnelle de la plateforme (falsification de documents, harcèlement) entraînera la suspension immédiate ou la suppression définitive du compte incriminé.
            </p>
        </div>
    );
}