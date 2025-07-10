// src/components/auth/LoginForm.jsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { loginWithEmail } from '@/lib/api/auth';

const Input = React.forwardRef(({ icon: Icon, ...props }, ref) => (
    <div className="relative mb-4">
        <input
            {...props}
            ref={ref}
            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 pl-12"
        />
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
    </div>
));
Input.displayName = 'Input'; // Important pour React DevTools

const Button = ({ children, ...props }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        {...props}
    >
        {children}
    </motion.button>
);

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { t } = useTranslation();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await loginWithEmail(data.email, data.password);

            await Swal.fire({
                icon: 'success',
                title: t("login_page.success_title"),
                text: t("login_page.success_text"),
                timer: 1500,
                showConfirmButton: false,
            });
            router.push('/dashboard'); // Ou la page d'accueil de l'utilisateur connecté

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur de connexion',
                text: error.response?.data?.message || 'Vos identifiants sont incorrects. Veuillez réessayer.',
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
                    placeholder={t('login_page.email_placeholder')}
                    {...register("email", {
                        required: t('login_page.email_required'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('login_page.email_invalid'),
                        }
                    })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t('login_page.password_placeholder')}
                    {...register("password", {
                        required: t('login_page.password_required'),
                    })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        {...register("remember")}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                        {t("login_page.remember_me")}
                    </label>
                </div>
                <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                        {t("login_page.forgot_password")} ?
                    </Link>
                </div>
            </div>

            <Button type="submit" disabled={isLoading}>
                {isLoading ? t('login_page.login_button_loading') : t("login_page.login_button")}
            </Button>
        </form>
    );
}