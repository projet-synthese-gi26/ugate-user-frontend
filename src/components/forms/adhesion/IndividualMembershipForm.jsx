// src/components/forms/adhesion/IndividualMembershipForm.jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import { motion } from "framer-motion";
import { FileText, Camera, CreditCard, Send, ArrowRight, User } from "lucide-react";
import { FileUploader } from "./file-uploader.jsx";
import { useTranslations } from 'next-intl';

export const IndividualForm = ({ onSubmit, formData, setFormData }) => {
    const t = useTranslations('adhesion_form');
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: formData
    });

    const handleFormSubmit = (data) => {
        setFormData(data);
        onSubmit(data);
    };

    const inputClasses = "w-full px-3 py-2 border rounded-lg bg-white text-gray-900 border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <motion.form
            onSubmit={handleSubmit(handleFormSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
                    {t('title')}
                </h2>
                <p className="text-lg text-gray-600">
                    {t('subtitle')}
                </p>
            </div>

            {/* Section Informations personnelles */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-500" />
                    {t('personal_info_title')}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('last_name')} *</label>
                        <input type="text" {...register("nom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('last_name_placeholder')} />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('first_name')} *</label>
                        <input type="text" {...register("prenom", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('first_name_placeholder')} />
                        {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('cni_number')} *</label>
                        <input type="text" {...register("numeroCNI", { required: t('errors.required_field') })} className={inputClasses} placeholder="Ex: 123456789" />
                        {errors.numeroCNI && <p className="text-red-500 text-xs mt-1">{errors.numeroCNI.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('dob')} *</label>
                        <input type="date" {...register("dateNaissance", { required: t('errors.required_field') })} className={inputClasses} />
                        {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('phone')} *</label>
                        <input type="tel" {...register("telephone", { required: t('errors.required_field') })} className={inputClasses} placeholder="+237 6XX XX XX XX" />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')} *</label>
                        <input type="email" {...register("email", { required: t('errors.required_field'), pattern: { value: /^\S+@\S+$/i, message: t('errors.invalid_email') } })} className={inputClasses} placeholder="votre.email@exemple.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('address')} *</label>
                    <textarea rows={3} {...register("adresse", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('address_placeholder')} />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profession')} *</label>
                    <input type="text" {...register("profession", { required: t('errors.required_field') })} className={inputClasses} placeholder={t('profession_placeholder')} />
                    {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('motivation')} *</label>
                    <textarea rows={4} {...register("motivation", { required: t('errors.required_field'), minLength: { value: 20, message: t('errors.min_length', { count: 20 }) } })} className={inputClasses} placeholder={t('motivation_placeholder')} />
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
                </div>
            </div>

            {/* Section Documents requis */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <Camera className="w-5 h-5 mr-3 text-blue-500" />
                    {t('documents_title')}
                </h3>
                <div className="space-y-6">
                    <Controller name="photoIdentite" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                        <FileUploader label={t('id_photo')} icon={<User />} onFileSelect={field.onChange} required />
                        {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                    </>)} />
                    <div className="grid gap-6 md:grid-cols-2">
                        <Controller name="pieceIdentiteFace" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('id_card_front')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                        <Controller name="pieceIdentiteDos" control={control} rules={{ required: t('errors.required_field') }} render={({ field, fieldState }) => (<>
                            <FileUploader label={t('id_card_back')} icon={<CreditCard />} onFileSelect={field.onChange} required />
                            {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                        </>)} />
                    </div>
                </div>
            </div>

            <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Send className="w-5 h-5 mr-2" /> {t('submit_button')} <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
        </motion.form>
    );
};
