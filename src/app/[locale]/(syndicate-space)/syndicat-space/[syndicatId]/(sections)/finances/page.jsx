import { getTranslations } from 'next-intl/server';
import FinancesClient from "@/components/syndicate-space/section-finances/FinancesClient";

export default async function FinancesPage({ params }) {
    const resolvedParams = await params;
    // On n'a pas besoin de charger de données ici pour l'instant
    // car le FinancesClient a des données simulées en interne pour le design.

    return (
        <div className="h-full">
            <FinancesClient />
        </div>
    );
}