"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { Link, useRouter } from '@/navigation';
import { loginWithIdentifier } from '@/lib/api/auth';

// Composant Input réutilisable avec icône
const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative mb-4">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-800 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-800'
            }`} size={20} />
        </div>
        {error && (
            <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{error.message}</span>
            </div>
        )}
    </div>
));

Input.displayName = 'Input';

// Composant Button avec animations Framer Motion
const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 disabled:bg-blue-700 disabled:cursor-not-allowed transition-all duration-200"
        {...props}
    >
        {children}
    </motion.button>
);

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('login_page');
    const tErrors = useTranslations('errors');

    // Gestionnaire de soumission du formulaire
    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await loginWithIdentifier(data.email, data.password);
            await Swal.fire({
                icon: 'success',
                title: t("success_title"),
                text: t("success_text"),
                timer: 1500,
                showConfirmButton: false,
            });

            // Rediriger systématiquement vers la page "Mes Syndicats"
            // L'utilisateur choisira ensuite le syndicat et sera redirigé vers la bonne branche
            router.push('/syndicats');
        } catch (error) {
            console.error("Erreur de connexion:", error);
            let errorMessage = t('generic_error');
            if (error.response) {
                // Erreurs HTTP spécifiques de l'API (401 BadCredentialsException, 403 DisabledException)
                if (error.response.status === 401) {
                    errorMessage = t('invalid_credentials');
                } else if (error.response.status === 403) {
                    errorMessage = t('account_disabled');
                } else if (error.response.data && error.response.data.message) {
                    // Si le backend renvoie un DTO d'erreur avec un message spécifique
                    errorMessage = error.response.data.message;
                }
            } else if (error.message === tErrors('token_expired') || error.message === tErrors('token_invalid')) {
                // Erreur de token détectée côté client par l'intercepteur de requête
                errorMessage = t('token_invalid_expired');
            }
            Swal.fire({
                icon: 'error',
                title: t('error_title'),
                text: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input
                    icon={Mail}
                    type="email"
                    placeholder={t('email_placeholder')}
                    error={errors.email}
                    {...register("email", {
                        required: t('email_required'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('email_invalid'),
                        }
                    })}
                />
            </div>
            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t('password_placeholder')}
                    error={errors.password}
                    {...register("password", {
                        required: t('password_required'),
                    })}
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                {/* Checkbox "Se souvenir de moi" (logique non implémentée côté client/server pour le moment) */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                        {...register("remember")}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                        {t("remember_me")}
                    </label>
                </div>
                {/* Lien "Mot de passe oublié ?" */}
                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-900 hover:underline">
                        {t("forgot_password")}
                    </Link>
                </div>
            </div>
            {/* Bouton de soumission */}
            <Button type="submit" disabled={isLoading}>
                {isLoading ? t('login_button_loading') : t("login_button")}
            </Button>
        </form>
    );
}
