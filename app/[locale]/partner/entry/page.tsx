"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/navigation';
import { useAuthStore } from '@/lib/store';
import { authApi } from '@/lib/axios';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function PartnerEntryPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const setPartnerMode = useAuthStore((state) => state.setPartnerMode);
    const login = useAuthStore((state) => state.login);
    const [status, setStatus] = useState('Vérification du partenaire...');

    useEffect(() => {
        const handlePartnerEntry = async () => {
            const partnerUserId = searchParams.get('userId');
            const service = searchParams.get('service'); // ex: RIDE_AND_GO

            if (!partnerUserId) {
                toast.error("ID Partenaire manquant");
                router.push('/');
                return;
            }

            try {
                setStatus(`Synchronisation avec ${service || 'le partenaire'}...`);

                // 1. Récupérer les infos de l'utilisateur via son ID (API Auth Publique ou Sécurisée)
                // Note: Ici on suppose un endpoint qui nous donne les infos sans mdp car on vient d'un partenaire de confiance
                // En prod, cela devrait être sécurisé par un token d'échange ou une signature.
                // Pour ce projet, on utilise getById si accessible ou on simule.

                const response = await authApi.get(`/api/users/${partnerUserId}`);
                const userData = response.data;

                // 2. Créer une session "Partenaire" dans le store
                // On construit un objet AuthResponse artificiel car pas de token JWT classique ici
                // Ou alors le partenaire nous a passé un token dans l'URL.

                // HYPOTHÈSE: Le partenaire est déjà authentifié sur le même serveur Auth (TraMaSys).
                // Donc on doit juste récupérer son contexte.

                login({
                    user: userData,
                    accessToken: "PARTNER_SESSION_TOKEN", // Token placeholder ou réel si SSO
                    refreshToken: "PARTNER_REFRESH_TOKEN"
                }, true); // true = isPartnerMode

                toast.success(`Bienvenue ${userData.firstName}`);

                // 3. Redirection vers l'exploration pour rejoindre un syndicat
                router.push('/explorer');

            } catch (error) {
                console.error(error);
                toast.error("Impossible de vérifier le compte partenaire");
                router.push('/login');
            }
        };

        handlePartnerEntry();
    }, [searchParams, router, setPartnerMode, login]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-navy-950 text-white">
            <Loader2 className="w-16 h-16 text-primary-500 animate-spin mb-6" />
            <h2 className="text-xl font-medium">{status}</h2>
            <p className="text-slate-400 mt-2 text-sm">Veuillez patienter pendant que nous préparons votre espace.</p>
        </div>
    );
}