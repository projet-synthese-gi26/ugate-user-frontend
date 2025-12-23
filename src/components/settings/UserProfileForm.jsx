// src/components/settings/UserProfileForm.jsx
"use client";

import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Swal from 'sweetalert2';
import { User, Phone, Mail, Camera, FileText, GraduationCap, Save } from 'lucide-react';
import FormSection from './FormSection';
import ProfileHeader from './ProfileHeader';
import DynamicFieldArray from './DynamicFieldArray';
import { FileUploader } from '../forms/adhesion/file-uploader'; // On réutilise ce composant
import { updateUser } from "@/lib/api/auth";

export default function UserProfileForm({ initialData }) {
    const t = useTranslations('settings_page');
    const t_adhesion = useTranslations('adhesion_form');

    // On transforme la liste de strings en objets pour `useFieldArray`
    const transformedData = {
        ...initialData,
        formations: initialData.formations.map(f => ({ value: f })),
        initialProfilePicture: initialData.profilePicture // On sauvegarde l'URL initiale
    };

    const methods = useForm({ defaultValues: transformedData });
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = methods;

    const onSubmit = async (data) => {
        // On re-transforme les données avant de les envoyer
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            formations: data.formations.map(f => f.value).filter(f => f) // On garde que les valeurs non-vides
        };
        
        try {
            await updateUser(initialData.id, payload);
            Swal.fire({
                icon: "success",
                title: t("success_title"),
                text: t("success_message"),
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil:", error);
            const errorMessage = error.response?.data?.message || t("error_message");
            Swal.fire({
                icon: "error",
                title: t("error_title"),
                text: errorMessage,
            });
        }
    };

    return (
        // FormProvider permet aux composants enfants d'accéder aux méthodes du formulaire
        <FormProvider {...methods}>
            <ProfileHeader onAvatarClick={() => document.getElementById('profilePictureInput')?.click()} />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <FormSection title={t('personal_info_title')} icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('first_name')}*</label>
                            <input {...register("firstName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('last_name')}*</label>
                            <input {...register("lastName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('phone')}*</label>
                            <input type="tel" {...register("phone", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t_adhesion('email')}*</label>
                            <input type="email" {...register("email", { required: true })} className="w-full ..." disabled />
                            <p className="text-xs text-gray-500 mt-1">{t('email_disabled_info')}</p>
                        </div>
                    </div>
                </FormSection>

                <FormSection title={t('professional_info_title')} icon={FileText}>
                    <div id="profilePictureInput">
                        <Controller name="profilePicture" control={control} render={({ field }) => <FileUploader label={t_adhesion('id_photo')} onFileSelect={field.onChange} />} />
                    </div>
                    <Controller name="cv" control={control} render={({ field }) => <FileUploader label="CV (.pdf, .doc)" onFileSelect={field.onChange} accept=".pdf,.doc,.docx" />} />
                </FormSection>

                <FormSection title={t('formations_title')} icon={GraduationCap}>
                    <DynamicFieldArray name="formations" placeholder="Ex: Licence en Informatique" t={t} />
                </FormSection>

                <div className="flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                        <Save size={18} />
                        {isSubmitting ? t('saving_button') : t('save_button')}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}