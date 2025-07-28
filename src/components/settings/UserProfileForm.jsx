// src/components/settings/UserProfileForm.jsx
"use client";

import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { User, Phone, Mail, Camera, FileText, GraduationCap, Save } from 'lucide-react';
import FormSection from './FormSection';
import ProfileHeader from './ProfileHeader';
import DynamicFieldArray from './DynamicFieldArray';
import { FileUploader } from '../forms/adhesion/file-uploader'; // On réutilise ce composant

export default function UserProfileForm({ initialData }) {
    const t = useTranslations('settings_page');

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
            ...data,
            formations: data.formations.map(f => f.value)
        };
        console.log("Données soumises :", payload);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simule un appel API
        toast.success(t('settings_page.success_toast'));
    };

    return (
        // FormProvider permet aux composants enfants d'accéder aux méthodes du formulaire
        <FormProvider {...methods}>
            <ProfileHeader onAvatarClick={() => document.getElementById('profilePictureInput')?.click()} />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <FormSection title={t('settings_page.personal_info_title')} icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.first_name')}*</label>
                            <input {...register("firstName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.last_name')}*</label>
                            <input {...register("lastName", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.phone')}*</label>
                            <input type="tel" {...register("phone", { required: true })} className="w-full ..."/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.email')}*</label>
                            <input type="email" {...register("email", { required: true })} className="w-full ..." disabled />
                            <p className="text-xs text-gray-500 mt-1">{t('settings_page.email_disabled_info')}</p>
                        </div>
                    </div>
                </FormSection>

                <FormSection title={t('settings_page.professional_info_title')} icon={FileText}>
                    <div id="profilePictureInput">
                        <Controller name="profilePicture" control={control} render={({ field }) => <FileUploader label={t('adhesion_form.id_photo')} onFileSelect={field.onChange} />} />
                    </div>
                    <Controller name="cv" control={control} render={({ field }) => <FileUploader label="CV (.pdf, .doc)" onFileSelect={field.onChange} accept=".pdf,.doc,.docx" />} />
                </FormSection>

                <FormSection title={t('settings_page.formations_title')} icon={GraduationCap}>
                    <DynamicFieldArray name="formations" placeholder="Ex: Licence en Informatique" t={t} />
                </FormSection>

                <div className="flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                        <Save size={18} />
                        {isSubmitting ? t('settings_page.saving_button') : t('settings_page.save_button')}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}