// src/components/auth/RegisterForm.jsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { registerWithEmail } from '@/lib/api/auth';
import PasswordStrengthIndicator from './PasswordStrength';
import { Link, useRouter } from '@/navigation'; // Ajouté pour le lien "Déjà enregistré ?"

// Composant Alert pour les messages d'erreur de validation
const Alert = ({ children }) => (
    <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>{children}</span>
    </div>
);

// Composant Input réutilisable avec icône et gestion des erreurs
const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative">
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
        {error && <Alert>{error.message}</Alert>}
    </div>
));
Input.displayName = 'Input';

// Composant Button avec animations Framer Motion
const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 rounded-lg text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 transition-all duration-200 disabled:bg-blue-700 disabled:cursor-not-allowed"
        {...props}
    >
        {children}
    </motion.button>
);

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: 'onTouched' // Validation au blur
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('register_page');
    const password = watch('password', ''); // Surveille le champ password pour l'indicateur de force

    // Valide la complexité du mot de passe
    const validatePassword = (value) => {
        const passwordErrors = [];
        if (value.length < 8) passwordErrors.push(t('password_strength_8_chars'));
        if (!/[A-Z]/.test(value)) passwordErrors.push(t('password_strength_uppercase'));
        if (!/[0-9]/.test(value)) passwordErrors.push(t('password_strength_number'));
        if (!/[^A-Za-z0-9]/.test(value)) passwordErrors.push(t('password_strength_special'));

        return passwordErrors.length === 0 || passwordErrors.join(', ');
    };

    const onSubmit = async (data) => {
    setIsLoading(true);
    try {
        const { passwordConfirm, ...rest } = data;

        // On construit l'objet selon les clés EXACTES de Swagger
        const userData = {
            username: rest.username,
            password: rest.password,
            email: rest.email,
            phone: rest.phone,
            firstName: rest.firstName,
            lastName: rest.lastName,
            service: "SYNDICAT", // ATTENTION : Swagger montre LETS_GO, vérifie ton Enum
            roles: ["USER"]
        };

        // Si tu ajoutes un champ d'upload plus tard, tu passeras le fichier ici
        await registerWithEmail(userData, null); 

        await Swal.fire({
            icon: 'success',
            title: t('success_title'),
            text: t('success_text', { name: `${data.firstName} ${data.lastName}` }),
        });
        router.push('/login');

    } catch (error) {
        // ... gestion erreur (inchangée)
    } finally {
        setIsLoading(false);
    }
};
    
    console.log("Erreurs de validation du formulaire :", errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("last_name_placeholder")}
                    error={errors.lastName}
                    {...register("lastName", {
                        required: t("last_name_required"),
                        minLength: { value: 2, message: t("last_name_min_length") }
                    })}
                />
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("first_name_placeholder")}
                    error={errors.firstName}
                    {...register("firstName", {
                        required: t("first_name_required"),
                        minLength: { value: 2, message: t("first_name_min_length") }
                    })}
                />
            </div>
            <Input
                icon={User} // Assuming User icon for username as well, or we can choose another
                type="text"
                placeholder={t("username_placeholder")}
                error={errors.username}
                {...register("username", {
                    required: t("username_required"),
                    minLength: { value: 3, message: t("username_min_length") }
                })}
            />

            <Input
                icon={Mail}
                type="email"
                placeholder={t("email_placeholder")}
                error={errors.email}
                {...register("email", {
                    required: t("email_required"),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("email_invalid"),
                    }
                })}
            />
            <Input
                icon={Phone}
                type="tel" // Use type="tel" for phone numbers
                placeholder={t("phone_placeholder")}
                error={errors.phone}
                {...register("phone", {
                    required: t("phone_required"),
                    pattern: {
                        value: /^\+?[1-9]\d{1,14}$/, // E.164 format for international phone numbers
                        message: t("phone_invalid"),
                    }
                })}
            />

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t("password_placeholder")}
                    error={errors.password}
                    {...register("password", {
                        required: t("password_required"),
                        validate: validatePassword
                    })}
                />
                <PasswordStrengthIndicator password={password} />
            </div>

            <Input
                icon={Lock}
                type="password"
                placeholder={t("password_confirm_placeholder")}
                error={errors.passwordConfirm}
                {...register("passwordConfirm", {
                    required: t("password_confirm_required"),
                    validate: value => value === password || t("password_mismatch")
                })}
            />

            <div className="pt-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? t('register_button_loading') : t('register_button')}
                </Button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-600">
                    {t("already_registered")}{' '}
                    <Link href="/login" className="text-blue-900 hover:underline">
                        {t("login_here")}
                    </Link>
                </p>
            </div>
        </form>
    );
}