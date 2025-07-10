// src/components/auth/RegisterForm.jsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Calendar, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { registerWithEmail } from '@/lib/api/auth';
import PasswordStrengthIndicator from './PasswordStrength';


const Alert = ({ children }) => (
    <div className="flex items-center p-2 mt-1 text-xs text-red-700 bg-red-50 rounded-md">
        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>{children}</span>
    </div>
);


const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
    <div>
        <div className="relative">
            <input
                {...props}
                ref={ref}
                className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 pl-12 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                error ? 'text-red-500' : 'text-blue-400'
            }`} size={20} />
        </div>
        {error && <Alert>{error.message}</Alert>}
    </div>
));
Input.displayName = 'Input';


const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
        {...props}
    >
        {children}
    </motion.button>
);


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: 'onTouched' // La validation se déclenche quand on quitte un champ
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { t } = useTranslation();
    const password = watch('password', '');

    const validatePassword = (value) => {
        const passwordErrors = [];
        if (value.length < 8) passwordErrors.push(t('register_page.password_strength_8_chars'));
        if (!/[A-Z]/.test(value)) passwordErrors.push(t('register_page.password_strength_uppercase'));
        if (!/[0-9]/.test(value)) passwordErrors.push(t('register_page.password_strength_number'));
        if (!/[^A-Za-z0-9]/.test(value)) passwordErrors.push(t('register_page.password_strength_special'));

        // Retourne `true` si valide, ou la chaîne des erreurs sinon.
        return passwordErrors.length === 0 || passwordErrors.join(', ');
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const result = await registerWithEmail(data);

            await Swal.fire({
                icon: 'success',
                title: t('register_page.success_title'),
                text: t('register_page.success_text', { name: `${data.firstName} ${data.lastName}` }),
            });
            router.push('/login');

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: t('register_page.error_title'),
                text: error.response?.data?.errors?.email || 'Une erreur est survenue lors de l\'inscription.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("register_page.last_name_placeholder")}
                    error={errors.lastName}
                    {...register("lastName", {
                        required: t("register_page.last_name_required"),
                        minLength: { value: 2, message: t("register_page.last_name_min_length") }
                    })}
                />
                <Input
                    icon={User}
                    type="text"
                    placeholder={t("register_page.first_name_placeholder")}
                    error={errors.firstName}
                    {...register("firstName", {
                        required: t("register_page.first_name_required"),
                        minLength: { value: 2, message: t("register_page.first_name_min_length") }
                    })}
                />
            </div>

            <Input
                icon={Mail}
                type="email"
                placeholder={t("login_page.email_placeholder")} // Réutilisation de la clé de la page login
                error={errors.email}
                {...register("email", {
                    required: t("login_page.email_required"),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("login_page.email_invalid"),
                    }
                })}
            />

            <Input
                icon={Calendar}
                type="date"
                placeholder={t("register_page.dob_placeholder")}
                error={errors.dateOfBirth}
                {...register("dateOfBirth", {
                    required: t("register_page.dob_required"),
                    validate: value => {
                        const age = new Date().getFullYear() - new Date(value).getFullYear();
                        return age >= 18 || t("register_page.dob_age_validation");
                    }
                })}
            />

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t("login_page.password_placeholder")} // Réutilisation
                    error={errors.password}
                    {...register("password", {
                        required: t("login_page.password_required"),
                        validate: validatePassword
                    })}
                />
                <PasswordStrengthIndicator password={password} />
            </div>

            <Input
                icon={Lock}
                type="password"
                placeholder={t("register_page.password_confirm_placeholder")}
                error={errors.passwordConfirm}
                {...register("passwordConfirm", {
                    required: "Veuillez confirmer votre mot de passe",
                    validate: value => value === password || t("register_page.password_mismatch")
                })}
            />

            <div className="pt-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? t('register_page.register_button_loading') : t('register_page.register_button')}
                </Button>
            </div>
        </form>
    );
}