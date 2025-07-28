// src/app/(main)/parametres/page.jsx
import {getTranslations} from 'next-intl/server';
import UserProfileForm from "@/components/settings/UserProfileForm";
import { getFirstNameToken, getLastNameToken, getEmailToken, getProfilFromToken } from "@/lib/auth/accountService"; // On supposera que ce service est côté serveur

// Simule la récupération des données de l'utilisateur connecté côté serveur
async function getAuthenticatedUserData() {
    // Dans une vraie application, vous décoderiez un token JWT depuis un cookie ici
    await new Promise(resolve => setTimeout(resolve, 200)); // Simule la latence
    return {
        firstName: getFirstNameToken() || 'John',
        lastName: getLastNameToken() || 'Doe',
        email: getEmailToken() || 'john.doe@example.com',
        phone: "+237 679 39 04 71", // Donnée factice pour l'exemple
        profilePicture: getProfilFromToken(),
        formations: ["Master en Génie Logiciel", "Certification React Avancé"], // Données initiales
        cvUrl: "/path/to/existing/cv.pdf" // Donnée initiale
    };
}

export default async function SettingsPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();
    const userData = await getAuthenticatedUserData();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('settings_page.title')}
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        {t('settings_page.subtitle')}
                    </p>
                </div>

                {/* On passe les données utilisateur au composant client */}
                <UserProfileForm initialData={userData} />
            </div>
        </div>
    );
}