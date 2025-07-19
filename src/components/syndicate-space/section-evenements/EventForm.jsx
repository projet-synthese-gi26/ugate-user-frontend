// src/components/syndicate-space/section-evenements/EventForm.jsx
"use client";

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, Type, FileText, Image as ImageIcon, Send } from 'lucide-react';
import { FileUploader } from '@/components/forms/adhesion/file-uploader';

export default function EventForm({ onSubmit, initialData = {}, isLoading }) {
    const t = useTranslations('event_form');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: initialData.title || '',
            description: initialData.description || '',
            location: initialData.location || '',
            // Les dates doivent être au format YYYY-MM-DDTHH:mm pour les inputs datetime-local
            startDate: initialData.startDate ? new Date(initialData.startDate).toISOString().slice(0, 16) : '',
            endDate: initialData.endDate ? new Date(initialData.endDate).toISOString().slice(0, 16) : '',
        }
    });

    const inputClasses = "w-full p-3 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4 sm:p-6">
            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><Type className="mr-2"/>{t('event_form.title')} *</label>
                <input {...register("title", { required: t('errors.required_field') })} placeholder={t('event_form.title_placeholder')} className={inputClasses} />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><FileText className="mr-2"/>{t('event_form.description')} *</label>
                <textarea {...register("description", { required: t('errors.required_field') })} rows={5} placeholder={t('event_form.description_placeholder')} className={`${inputClasses} resize-none`}></textarea>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Calendar className="mr-2"/>{t('event_form.start_date')} *</label>
                    <input type="datetime-local" {...register("startDate", { required: t('errors.required_field') })} className={inputClasses} />
                    {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>}
                </div>
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Clock className="mr-2"/>{t('event_form.end_date')} *</label>
                    <input type="datetime-local" {...register("endDate", { required: t('errors.required_field') })} className={inputClasses} />
                    {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>}
                </div>
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><MapPin className="mr-2"/>{t('event_form.location')} *</label>
                <input {...register("location", { required: t('errors.required_field') })} placeholder={t('event_form.location_placeholder')} className={inputClasses} />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>

            <div>
                <FileUploader label={t('event_form.image')} icon={<ImageIcon />} onFileSelect={(file) => console.log(file)} />
            </div>

            <div className="pt-4 flex justify-end">
                <button type="submit" disabled={isLoading} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2">
                    <Send size={18} />
                    {isLoading ? t('common.loading') : t('event_form.submit_button')}
                </button>
            </div>
        </form>
    );
}