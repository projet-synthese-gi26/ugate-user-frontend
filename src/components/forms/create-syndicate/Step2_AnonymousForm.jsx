// src/components/forms/create-syndicate/Step2_AnonymousForm.jsx
"use client";

import { useForm, Controller } from 'react-hook-form';
import {
    ArrowLeft, Building2, Palette, TextCursorInput, Type, LayoutGrid,
    Globe, Share2, UserRound, Image, Map, AtSign, CalendarCheck, History, ChevronRight
} from 'lucide-react';
import FileUploader from './FileUploader';

// Données statiques pour les sélections
const activityDomains = [
    { id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "Technologie" },
    { id: "4fa85f64-5717-4562-b3fc-2c963f66afa7", name: "Santé" },
    { id: "5fa85f64-5717-4562-b3fc-2c963f66afa8", name: "Éducation" }
];
const syndicatTypes = [
    { value: "SOLE_PROPRIETORSHIP", label: "Entreprise individuelle" },
    { value: "CORPORATION", label: "Société anonyme" }
];

export default function Step2_AnonymousForm({ onNext, onBack, initialData }) {
    const { register, handleSubmit, control, setValue, getValues, watch, formState: { errors } } = useForm({
        defaultValues: {
            ...initialData,
            business_domains: initialData.business_domains || [],
            registration_date: initialData.registration_date || new Date().toISOString().split('T')[0],
            year_founded: initialData.year_founded || new Date().toISOString().split('T')[0],
        }
    });

    const currentDomains = watch('business_domains');

    const handleFormSubmit = (data) => {
        onNext(data);
    };

    // Constante pour les classes CSS des champs de formulaire avec le placeholder corrigé
    const inputClasses = "w-full p-3 border rounded-xl bg-white text-gray-900 border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition";
    const selectClasses = `${inputClasses} appearance-none`;

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-5xl mx-auto space-y-8">
            <div className="mb-8">
                <button type="button" onClick={onBack} className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />Retour au choix du type
                </button>
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Informations du syndicat</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Remplissez les informations de base pour créer votre syndicat anonyme.</p>
                </div>
            </div>

            {/* Section Informations principales */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><Building2 className="w-6 h-6 mr-3 text-emerald-500" />Informations principales</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><TextCursorInput className="w-4 h-4 mr-2 text-emerald-500" />Nom complet du syndicat *</label>
                        <input {...register("long_name", { required: "Le nom complet est requis" })} placeholder="Ex: Syndicat National des Développeurs" className={inputClasses} />
                        {errors.long_name && <p className="text-red-500 text-xs mt-1">{errors.long_name.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Type className="w-4 h-4 mr-2 text-emerald-500" />Nom court / Acronyme *</label>
                        <input {...register("short_name", { required: "L'acronyme est requis" })} placeholder="Ex: SND" className={inputClasses} />
                        {errors.short_name && <p className="text-red-500 text-xs mt-1">{errors.short_name.message}</p>}
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><AtSign className="w-4 h-4 mr-2 text-emerald-500" />Email de contact *</label>
                        <input type="email" {...register("email", { required: "L'email est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })} placeholder="contact@syndicat.com" className={inputClasses} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Building2 className="w-4 h-4 mr-2 text-emerald-500" />Type d'organisation *</label>
                        <select {...register("type", { required: true })} className={selectClasses}>
                            {syndicatTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                        </select>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><History className="w-4 h-4 mr-2 text-emerald-500" />Année de fondation *</label>
                        <input type="date" {...register("year_founded", { required: "L'année de fondation est requise" })} className={inputClasses} />
                        {errors.year_founded && <p className="text-red-500 text-xs mt-1">{errors.year_founded.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><CalendarCheck className="w-4 h-4 mr-2 text-emerald-500" />Date d'enregistrement *</label>
                        <input type="date" {...register("registration_date", { required: "La date d'enregistrement est requise" })} className={inputClasses} />
                        {errors.registration_date && <p className="text-red-500 text-xs mt-1">{errors.registration_date.message}</p>}
                    </div>
                </div>
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Palette className="w-4 h-4 mr-2 text-emerald-500" />Description *</label>
                    <textarea {...register("description", { required: "La description est requise" })} rows={4} placeholder="Décrivez les objectifs et la mission de votre syndicat..." className={inputClasses}></textarea>
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                </div>
            </div>

            {/* Section Domaines d'activité */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><LayoutGrid className="w-6 h-6 mr-3 text-emerald-500" />Domaines d'activité</h2>
                <Controller
                    name="business_domains"
                    control={control}
                    render={({ field }) => (
                        <>
                            <select className={selectClasses} value="" onChange={(e) => { const newDomains = [...field.value, e.target.value]; field.onChange([...new Set(newDomains)]); }}>
                                <option value="" disabled>Sélectionnez un domaine à ajouter</option>
                                {activityDomains.map((domain) => (
                                    <option key={domain.id} value={domain.id} disabled={field.value.includes(domain.id)}>
                                        {domain.name}
                                    </option>
                                ))}
                            </select>
                            {field.value.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {field.value.map(domainId => {
                                        const domain = activityDomains.find(d => d.id === domainId);
                                        return domain ? (
                                            <div key={domainId} className="flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
                                                <span>{domain.name}</span>
                                                <button type="button" onClick={() => field.onChange(field.value.filter(id => id !== domainId))} className="ml-2 text-emerald-600 hover:text-emerald-800 font-bold">×</button>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>

            {/* Section Présence en ligne */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><Globe className="w-6 h-6 mr-3 text-emerald-500" />Présence en ligne</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Globe className="w-4 h-4 mr-2" />Site web</label>
                        <input type="url" {...register("web_site_url")} placeholder="https://www.votresyndicat.com" className={inputClasses} />
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Share2 className="w-4 h-4 mr-2" />Réseaux sociaux</label>
                        <input {...register("social_network")} placeholder="@syndicat_officiel" className={inputClasses} />
                    </div>
                </div>
            </div>

            {/* Section Informations du dirigeant */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><UserRound className="w-6 h-6 mr-3 text-emerald-500" />Informations du dirigeant</h2>
                <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><UserRound className="w-4 h-4 mr-2" />Nom du dirigeant *</label>
                    <input {...register("ceo_name", { required: "Le nom du dirigeant est requis" })} placeholder="Prénom et Nom" className={inputClasses} />
                    {errors.ceo_name && <p className="text-red-500 text-xs mt-1">{errors.ceo_name.message}</p>}
                </div>
            </div>

            {/* Section Logo */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><Image className="w-6 h-6 mr-3 text-emerald-500" />Logo du syndicat</h2>
                <Controller
                    name="logo_url"
                    control={control}
                    render={({ field }) => (
                        <FileUploader
                            label="Télécharger le logo"
                            onFileSelect={(file) => field.onChange(file)}
                        />
                    )}
                />
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Format recommandé : carré, 512x512 pixels minimum, JPG ou PNG (max 5 Mo).</p>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center mt-8">
                <button type="submit" className="w-full md:w-auto py-4 px-8 rounded-2xl font-bold text-white text-lg shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl hover:from-emerald-600 hover:to-teal-600 transition-transform transform hover:scale-105">
                    <span className="flex items-center justify-center">
                        <Map className="w-5 h-5 mr-3" />
                        Continuer vers les antennes
                        <ChevronRight className="w-5 h-5 ml-3" />
                    </span>
                </button>
            </div>
        </form>
    );
}