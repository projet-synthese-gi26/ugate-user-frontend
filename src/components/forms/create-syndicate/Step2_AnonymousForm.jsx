"use client";

import { useForm, Controller } from 'react-hook-form';
import {
    ArrowLeft, Building2, Palette, TextCursorInput, Type, LayoutGrid,
    Globe, Share2, UserRound, Image as ImageIcon, Map, AtSign, CalendarCheck, History, ChevronRight
} from 'lucide-react';
import FileUploader from './FileUploader';

const activityDomains = [
    { id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "Technologie" },
    { id: "4fa85f64-5717-4562-b3fc-2c963f66afa7", name: "Santé" },
    { id: "5fa85f64-5717-4562-b3fc-2c963f66afa8", name: "Éducation" }
];
const syndicatTypes = [
    { value: "SOLE_PROPRIETORSHIP", label: "Entreprise individuelle" },
    { value: "CORPORATION", label: "Société anonyme" }
];

export default function Step2_AnonymousForm({ onNext, onBack, initialData, setFormData }) {
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: initialData
    });

    const handleFormSubmit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        onNext(data);
    };

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

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><Building2 className="w-6 h-6 mr-3 text-emerald-500" />Informations principales</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><TextCursorInput className="w-4 h-4 mr-2 text-emerald-500" />Nom complet du syndicat *</label>
                        <input {...register("name", { required: "Le nom complet est requis" })} placeholder="Ex: Syndicat National des Développeurs" className={inputClasses} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Type className="w-4 h-4 mr-2 text-emerald-500" />Nom court / Acronyme *</label>
                        <input {...register("shortName", { required: "L'acronyme est requis" })} placeholder="Ex: SND" className={inputClasses} />
                        {errors.shortName && <p className="text-red-500 text-xs mt-1">{errors.shortName.message}</p>}
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
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><History className="w-4 h-4 mr-2 text-emerald-500" />Date de fondation *</label>
                    <input type="date" {...register("foundedDate", { required: "La date de fondation est requise" })} className={inputClasses} />
                    {errors.foundedDate && <p className="text-red-500 text-xs mt-1">{errors.foundedDate.message}</p>}
                </div>
                <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"><Palette className="w-4 h-4 mr-2 text-emerald-500" />Description *</label>
                    <textarea {...register("description", { required: "La description est requise" })} rows={4} placeholder="Décrivez les objectifs et la mission de votre syndicat..." className={inputClasses}></textarea>
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center"><ImageIcon className="w-6 h-6 mr-3 text-emerald-500" />Logo du syndicat</h2>
                <Controller
                    name="logoFile"
                    control={control}
                    rules={{ required: "Le logo est obligatoire" }}
                    render={({ field: { onChange }, fieldState: { error } }) => (
                        <>
                            <FileUploader
                                label="Télécharger le logo"
                                onFileSelect={onChange}
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Format recommandé : carré, 512x512 pixels minimum, JPG ou PNG (max 5 Mo).</p>
            </div>

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