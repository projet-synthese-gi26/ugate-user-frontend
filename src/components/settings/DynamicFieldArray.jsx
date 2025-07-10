// src/components/settings/DynamicFieldArray.jsx
"use client";

import { useFieldArray, useFormContext } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

/**
 * Un composant réutilisable pour gérer un tableau de champs de formulaire dynamiques.
 * Doit être utilisé à l'intérieur d'un composant <FormProvider>.
 *
 * @param {string} name - Le nom du champ dans les données du formulaire (ex: "formations").
 * @param {string} placeholder - Le texte d'exemple pour les champs input.
 * @param {function} t - La fonction de traduction passée en prop.
 */
export default function DynamicFieldArray({ name, placeholder, t }) {
    // Récupère les méthodes du formulaire depuis le contexte fourni par <FormProvider>
    const { control, register, formState: { errors } } = useFormContext();

    // Le hook magique de react-hook-form pour gérer les tableaux de champs
    const { fields, append, remove } = useFieldArray({
        control, // Lie le tableau au contrôle du formulaire
        name: name  // Spécifie quel champ du formulaire est un tableau
    });

    // Constante pour les styles des inputs pour la cohérence
    const inputClasses = "flex-grow p-3 border rounded-lg bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

    return (
        <div>
            <div className="space-y-3">
                <AnimatePresence>
                    {fields.map((field, index) => {
                        // Accède aux erreurs spécifiques pour ce champ dans le tableau
                        const fieldError = errors[name]?.[index]?.value;

                        return (
                            <motion.div
                                key={field.id} // react-hook-form fournit un 'id' stable pour chaque champ
                                layout // Permet une animation fluide lors de la suppression d'un élément
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                className="flex items-start gap-3"
                            >
                                <div className="flex-grow">
                                    <input
                                        // Enregistre le champ avec un nom indexé, ex: "formations.0.value"
                                        {...register(`${name}.${index}.value`, {
                                            required: t('errors.field_cant_be_empty')
                                        })}
                                        placeholder={`${placeholder} #${index + 1}`}
                                        className={`${inputClasses} ${fieldError ? 'border-red-500' : ''}`}
                                    />
                                    {fieldError && <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>}
                                </div>
                                <motion.button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="p-3 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-lg transition-colors mt-px"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Supprimer la formation ${index + 1}`}
                                >
                                    <Trash2 size={20} />
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <motion.button
                type="button"
                onClick={() => append({ value: "" })}
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm mt-4 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Plus size={16} className="mr-2" />
                {t('settings_page.add_formation_button')}
            </motion.button>
        </div>
    );
}