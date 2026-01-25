// src/components/syndicate-space/section-evenements/EventForm.jsx
"use client";

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, MapPin, Type, FileText, Image as ImageIcon, Send } from 'lucide-react';
import { FileUploader } from '@/components/forms/adhesion/file-uploader';
import { useState } from 'react';

// Utilitaire pour formater les dates pour les inputs datetime-local
const formatDateForInput = (date) => {
    if (!date) return '';
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return '';
        
        // Ajuster pour le timezone local
        const offset = d.getTimezoneOffset() * 60000;
        const localDate = new Date(d.getTime() - offset);
        return localDate.toISOString().slice(0, 16);
    } catch (error) {
        console.warn('Erreur lors du formatage de la date:', error);
        return '';
    }
};

// Validation personnalisée des dates
const validateDates = (startDate, endDate) => {
    const errors = {};
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start < now) {
        errors.startDate = "La date de début ne peut pas être dans le passé";
    }
    
    if (end <= start) {
        errors.endDate = "La date de fin doit être postérieure à la date de début";
    }
    
    return errors;
};

export default function EventForm({ onSubmit, initialData = {}, isLoading }) {
    const t = useTranslations();
    const [selectedImage, setSelectedImage] = useState(null);
    const [dateErrors, setDateErrors] = useState({});
    
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        defaultValues: {
            title: initialData.title || '',
            description: initialData.description || '',
            location: initialData.location || '',
            startDate: formatDateForInput(initialData.startDate),
            endDate: formatDateForInput(initialData.endDate),
        }
    });
    
    // Observer les changements de dates
    const watchedStartDate = watch('startDate');
    const watchedEndDate = watch('endDate');

    const inputClasses = "w-full p-3 border rounded-lg bg-white text-gray-900 border-gray-300 bg-gray-800 text-gray-200 border-gray-600 placeholder-gray-400 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";
    
    // Gestionnaire de soumission avec validation des dates
    const handleFormSubmit = (data) => {
        const dateValidationErrors = validateDates(data.startDate, data.endDate);
        
        if (Object.keys(dateValidationErrors).length > 0) {
            setDateErrors(dateValidationErrors);
            return;
        }
        
        setDateErrors({});
        
        // Ajouter l'image sélectionnée aux données
        const formData = {
            ...data,
            imageFile: selectedImage
        };
        
        onSubmit(formData);
    };
    
    // Gestionnaire de sélection d'image
    const handleImageSelect = (file) => {
        setSelectedImage(file);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 p-4 sm:p-6">
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
                    <input 
                        type="datetime-local" 
                        {...register("startDate", { required: t('errors.required_field') })} 
                        className={`${inputClasses} ${(errors.startDate || dateErrors.startDate) ? 'border-red-500' : ''}`}
                        min={new Date().toISOString().slice(0, 16)}
                    />
                    {(errors.startDate || dateErrors.startDate) && 
                        <p className="text-red-500 text-xs mt-1">{errors.startDate?.message || dateErrors.startDate}</p>
                    }
                </div>
                <div>
                    <label className="flex items-center text-sm font-semibold mb-1"><Clock className="mr-2"/>{t('event_form.end_date')} *</label>
                    <input 
                        type="datetime-local" 
                        {...register("endDate", { required: t('errors.required_field') })} 
                        className={`${inputClasses} ${(errors.endDate || dateErrors.endDate) ? 'border-red-500' : ''}`}
                        min={watchedStartDate || new Date().toISOString().slice(0, 16)}
                    />
                    {(errors.endDate || dateErrors.endDate) && 
                        <p className="text-red-500 text-xs mt-1">{errors.endDate?.message || dateErrors.endDate}</p>
                    }
                </div>
            </div>

            <div>
                <label className="flex items-center text-sm font-semibold mb-1"><MapPin className="mr-2"/>{t('event_form.location')} *</label>
                <input {...register("location", { required: t('errors.required_field') })} placeholder={t('event_form.location_placeholder')} className={inputClasses} />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>

            <div>
                <FileUploader 
                    label={t('event_form.image')} 
                    icon={<ImageIcon />} 
                    onFileSelect={handleImageSelect}
                    acceptedFileTypes="image/*"
                    maxSizeInMB={5}
                />
                {selectedImage && (
                    <p className="text-sm text-green-600 mt-2">
                        Image sélectionnée: {selectedImage.name}
                    </p>
                )}
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