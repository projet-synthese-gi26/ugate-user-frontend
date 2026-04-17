import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales | U-Gate",
};

export default function MentionsPage() {
    return (
        <div className="text-slate-600 leading-relaxed text-lg">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Mentions légales</h1>

            <p className="mb-8">
                Plateforme officielle : <strong className="text-slate-900">U-Gate Premium</strong>
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Éditeur du service</h2>
            <p className="mb-8">
                <strong>U-Gate Technologies</strong><br />
                Siège social : Yaoundé, Cameroun<br />
                Numéro de registre : [À compléter]
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Hébergement et Infrastructure</h2>
            <p className="mb-8">
                Hébergement certifié : Infrastructure cloud hautement sécurisée (Norme ISO 27001).<br />
                Les données sont stockées et traitées dans le respect le plus strict des normes internationales de protection des données (RGPD / Lois locales).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Contact Administratif</h2>
            <p className="mb-6">
                Pour toute réquisition légale, signalement ou question de conformité :<br />
                Email : <a href="mailto:legal@u-gate.app" className="text-primary-600 font-bold hover:underline">legal@u-gate.app</a>
            </p>
        </div>
    );
}