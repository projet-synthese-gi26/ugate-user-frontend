"use client";

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, AlertCircle, Camera, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { registerWithEmail } from '@/lib/api/auth';
import PasswordStrengthIndicator from './PasswordStrength';
import { Link, useRouter } from '@/navigation';
import Image from 'next/image';

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

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onTouched' });
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const fileInputRef = useRef(null);
    
    const router = useRouter();
    const t = useTranslations('register_page');
    const password = watch('password', '');

    // Gestion de la photo
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

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
            const userData = {
                username: rest.username,
                password: rest.password,
                email: rest.email,
                phone: rest.phone,
                firstName: rest.firstName,
                lastName: rest.lastName,
                service: "SYNDICAT", // Adapté au nouveau Swagger
                roles: ["USER"]
            };

            // On envoie les données ET le fichier
            await registerWithEmail(userData, profileFile);

            await Swal.fire({
                icon: 'success',
                title: t('success_title'),
                text: t('success_text', { name: `${data.firstName} ${data.lastName}` }),
            });
            router.push('/login');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: t('error_title'),
                text: error.response?.data?.message || t('generic_error'),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* --- SECTION PHOTO DE PROFIL --- */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative group">
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-24 h-24 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition-all bg-gray-50"
                    >
                        {imagePreview ? (
                            <Image src={imagePreview} alt="Aperçu" fill className="object-cover" />
                        ) : (
                            <Camera className="text-gray-400 group-hover:text-blue-500" size={32} />
                        )}
                    </div>
                    {imagePreview && (
                        <button 
                            type="button"
                            onClick={() => {setImagePreview(null); setProfileFile(null);}}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
                <p className="text-xs text-gray-500 mt-2">Photo de profil (optionnelle)</p>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageChange} 
                    className="hidden" 
                    accept="image/*" 
                />
            </div>

            {/* --- RESTE DES CHAMPS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    icon={User}
                    placeholder={t("last_name_placeholder")}
                    error={errors.lastName}
                    {...register("lastName", { required: t("last_name_required") })}
                />
                <Input
                    icon={User}
                    placeholder={t("first_name_placeholder")}
                    error={errors.firstName}
                    {...register("firstName", { required: t("first_name_required") })}
                />
            </div>
            
            <Input
                icon={User}
                placeholder={t("username_placeholder")}
                error={errors.username}
                {...register("username", { required: t("username_required") })}
            />

            <Input
                icon={Mail}
                type="email"
                placeholder={t("email_placeholder")}
                error={errors.email}
                {...register("email", { required: t("email_required") })}
            />

            <Input
                icon={Phone}
                type="tel"
                placeholder={t("phone_placeholder")}
                error={errors.phone}
                {...register("phone", { required: t("phone_required") })}
            />

            <div>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder={t("password_placeholder")}
                    error={errors.password}
                    {...register("password", { required: t("password_required"), validate: validatePassword })}
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
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-lg text-white bg-blue-900 hover:bg-blue-950 transition-all disabled:bg-blue-300 flex justify-center items-center"
                >
                    {isLoading ? "Inscription..." : t('register_button')}
                </button>
            </div>
        </form>
    );
}