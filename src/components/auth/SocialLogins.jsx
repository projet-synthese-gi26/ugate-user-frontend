"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import toast from 'react-hot-toast';
import { loginWithGoogle, loginWithApple } from '@/lib/api/auth';

// Le bouton de base pour les réseaux sociaux
const SocialButton = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-4 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center"
        {...props}
    >
        {children}
    </motion.button>
);

export default function SocialLogins() {
    const t = useTranslations('login_page');
    const router = useRouter();
    const [isAppleSDKLoaded, setIsAppleSDKLoaded] = useState(false);

    // --- Logique Google ---
    const googleLogin = useGoogleLogin({
        // La meilleure approche est "auth-code" pour la sécurité
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            toast.loading(t('common.loading'));
            try {
                // On envoie le code au backend via notre fonction API
                await loginWithGoogle(codeResponse.code);
                toast.dismiss();
                toast.success(t('success_title'));
                router.push('/home');
            } catch (error) {
                toast.dismiss();
                toast.error(error.response?.data?.message || t('generic_error'));
            }
        },
        onError: () => {
            toast.error(t('generic_error'));
        }
    });

    // --- Logique Apple ---
    useEffect(() => {
        // Charger le SDK Apple uniquement côté client
        const script = document.createElement('script');
        script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
        script.async = true;
        script.onload = () => {
            window.AppleID.auth.init({
                clientId: 'com.bandesoft.dev-gloswitch', // Votre Client ID Apple
                scope: 'name email',
                redirectURI: window.location.origin + '/login', // Doit correspondre à votre config Apple Dev
                usePopup: true
            });
            setIsAppleSDKLoaded(true);
        };
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    const handleAppleSignIn = async () => {
        if (!isAppleSDKLoaded) {
            toast.error(t('common.loading'));
            return;
        }
        try {
            const data = await window.AppleID.auth.signIn();
            toast.loading(t('common.loading'));
            await loginWithApple(data.authorization.code);
            toast.dismiss();
            toast.success(t('success_title'));
            router.push('/dashboard');
        } catch (error) {
            toast.dismiss();
            // Ne pas montrer d'erreur si l'utilisateur annule manuellement
            if (error.error !== "popup_closed_by_user") {
                toast.error(error.response?.data?.message || t('generic_error'));
            }
        }
    };

    return (
        <div className="w-full">
            <SocialButton onClick={() => googleLogin()}>
                <img src="/google-logo.svg" alt="Google" className="w-5 h-5 mr-3" />
                {t("with_google")}
            </SocialButton>
            <SocialButton onClick={handleAppleSignIn} disabled={!isAppleSDKLoaded}>
                <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5 mr-3" />
                {isAppleSDKLoaded ? t('with_apple') : t('common.loading_dots')}
            </SocialButton>
        </div>
    );
}
