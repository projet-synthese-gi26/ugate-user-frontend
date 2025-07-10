// src/components/forms/adhesion/IndividualMembershipForm.jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import { motion } from "framer-motion";
import { FileText, Camera, CreditCard, Send, ArrowRight, User, Phone, Mail, Home, Briefcase, MessageSquare } from "lucide-react";
import { FileUploader } from "./file-uploader.jsx";
import { useTranslation } from 'react-i18next';

export const IndividualForm = ({ onSubmit, formData, setFormData }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        // Pré-remplit le formulaire avec les données existantes s'il y en a
        defaultValues: formData
    });

    const handleFormSubmit = (data) => {
        // Met à jour l'état centralisé dans le wizard parent
        setFormData(data);
        // Déclenche la soumission finale (qui passera à l'étape de confirmation)
        onSubmit(data);
    };

    // Constante pour les classes CSS des champs de formulaire
    const inputClasses = "w-full px-3 py-2 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <motion.form
            onSubmit={handleSubmit(handleFormSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
                    {t('adhesion_form.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    {t('adhesion_form.subtitle')}
                </p>
            </div>

            {/* Section Informations personnelles */}
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-500" />
                    {t('adhesion_form.personal_info_title')}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.last_name')} *</label>
                        <input type="text" {...register("nom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.last_name_placeholder')} />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.first_name')} *</label>
                        <input type="text" {...register("prenom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.first_name_placeholder')} />
                        {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.cni_number')} *</label>
                        <input type="text" {...register("numeroCNI", { required: t('errors.required_field') })} className={inputClasses} placeholder="Ex: 123456789" />
                        {errors.numeroCNI && <p className="text-red-500 text-xs mt-1">{errors.numeroCNI.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.dob')} *</label>
                        <input type="date" {...register("dateNaissance", { required: t('errors.required_field') })} className={inputClasses} />
                        {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.phone')} *</label>
                        <input type="tel" {...register("telephone", { required: t('errors.required_field') })} className={inputClasses} placeholder="+237 6XX XX XX XX" />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.email')} *</label>
                        <input type="email" {...register("email", { required: t('errors.required_field'), pattern: { value: /^\S+@\S+$/i, message: t('errors.invalid_email') } })} className={inputClasses} placeholder="votre.email@exemple.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.address')} *</label>
                    <textarea rows={3} {...register("adresse", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.address_placeholder')} />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.profession')} *</label>
                    <input type="text" {...register("profession", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('adhesion_form.profession_placeholder')} />
                    {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('adhesion_form.motivation')} *</label>
                    <textarea rows={4} {...register("motivation", { required: t('errors.required_field'), minLength: { value: 20, message: t('errors.min_length', { count: 20 }) } })} className={inputClasses} placeholder={t('adhesion_form.motivation_placeholder')} />
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>
            </div>

            {/* Section Documents requis */}
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Camera className="w-5 h-5 mr-3 text-blue-500" />
                    {t('adhesion_form.documents_title')}
                </h3>
                <div className="space-y-6">
                    <Controller name="photoIdentite" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                        <FileUploader label={t('adhesion_form.id_photo')} icon={<User />} onFileSelect={field.onChange} required />
                        {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                    </>)} />
                    <div className="grid gap-6 md:grid-cols-2">
                        <Controller name="pieceIdentiteFace" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('adhesion_form.id_card_front')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                        <Controller name="pieceIdentiteDos" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('adhesion_form.id_card_back')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                    </div>
                </div>
            </div>

            <motion.button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Send className="w-5 h-5 mr-2" /> {t('adhesion_form.submit_button')} <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
        </motion.form>
    );
};