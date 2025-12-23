// src/app/(main)/parametres/page.jsx
import {getTranslations} from 'next-intl/server';
import UserProfileForm from "@/components/settings/UserProfileForm";
import { getUserIdFromToken, getFirstNameToken, getLastNameToken, getEmailToken, getProfilFromToken } from "@/lib/auth/accountService";

// Récupère les données de l'utilisateur connecté côté serveur
async function getAuthenticatedUserData() {
    // On attend les résultats des fonctions asynchrones
    const [userId, firstName, lastName, email, profilePicture] = await Promise.all([
        getUserIdFromToken(),
        getFirstNameToken(),
        getLastNameToken(),
        getEmailToken(),
        getProfilFromToken()
    ]);

    return {
        id: userId, // ID est crucial pour les appels API
        firstName: firstName || '',
        lastName: lastName || '',
        email: email || '',
        phone: "", // Ce champ sera probablement récupéré via un autre appel API ou stocké dans le token
        profilePicture: profilePicture,
        formations: [], // Données à récupérer plus tard
        cvUrl: ""
    };
}

export default async function SettingsPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();
    const userData = await getAuthenticatedUserData();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('settings_page.title')}
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {t('settings_page.subtitle')}
                    </p>
                </div>

                {/* On passe les données utilisateur au composant client */}
                <UserProfileForm initialData={userData} />
            </div>
        </div>
    );
}