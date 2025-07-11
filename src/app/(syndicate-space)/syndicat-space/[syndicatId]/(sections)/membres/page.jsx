// src/app/(syndicate-space)/syndicat-space/[syndicatId]/(sections)/membres/page.jsx
import initTranslations from "@/app/i18n";
// Importer le composant client qui contient la logique
import MembersClient from "@/components/syndicate-space/section-membres/MembersClient";

// Simuler la récupération des données pour cette section
async function getMembersData(syndicatId) {
    // const res = await fetch(`/api/syndicates/${syndicatId}/members`);
    // return res.json();
    console.log("Fetching members for syndicate:", syndicatId);
    return { 
        members: [ /* ... données factices des membres ... */ ],
        requests: [ /* ... données factices des demandes ... */ ]
    };
}

export default async function MembersPage({ params }) {
    const { locale, syndicatId } = params;
    const { t } = await initTranslations(locale, ['translation']);
    const { members, requests } = await getMembersData(syndicatId);

    return (
        <div>
            {/* Le composant serveur passe les données au composant client */}
            <MembersClient initialMembers={members} initialRequests={requests} />
        </div>
    );
}