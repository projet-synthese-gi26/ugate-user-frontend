// src/components/forms/create-syndicate/Step3_Antennes.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Voiçi la correction : on importe MapPin et on le renomme en MapIcon pour éviter tout conflit.
import { ArrowLeft, Loader2, Rocket, MapPin as MapIcon, Plus, Edit3, Trash2 } from "lucide-react";
import InteractiveMap from './InteractiveMap';

export default function Step3_Antennes({ onBack, onSubmit, antennes, setAntennes, isLoading }) {
    const [currentAntenne, setCurrentAntenne] = useState({ name: "", latitude: null, longitude: null });
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setCurrentAntenne(prev => ({ ...prev, latitude: location.lat, longitude: location.lng }));
    };

    const resetAntenneForm = () => {
        setCurrentAntenne({ name: "", latitude: null, longitude: null });
        setSelectedLocation(null);
        setEditingIndex(null);
    };

    const addOrUpdateAntenne = () => {
        if (!currentAntenne.name || currentAntenne.latitude === null) return;
        if (editingIndex !== null) {
            const updated = [...antennes];
            updated[editingIndex] = currentAntenne;
            setAntennes(updated);
        } else {
            setAntennes([...antennes, currentAntenne]);
        }
        resetAntenneForm();
    };

    const editAntenne = (index) => {
        const antenneToEdit = antennes[index];
        setCurrentAntenne(antenneToEdit);
        if (antenneToEdit.latitude !== null && antenneToEdit.longitude !== null) {
            setSelectedLocation({ lat: antenneToEdit.latitude, lng: antenneToEdit.longitude });
        }
        setEditingIndex(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const deleteAntenne = (index) => {
        if (editingIndex === index) {
            resetAntenneForm();
        }
        setAntennes(antennes.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <button type="button" onClick={onBack} className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />Retour aux informations
                </button>
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Antennes du syndicat</h1>
                    <p className="text-gray-600 text-lg">Ajoutez les différentes localisations de votre syndicat.</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            {/* On utilise notre alias MapIcon ici */}
                            <MapIcon className="w-5 h-5 mr-2 text-blue-500" />
                            Sélectionnez l'emplacement sur la carte
                        </h2>
                        <InteractiveMap onLocationSelect={handleLocationSelect} selectedLocation={selectedLocation} height="450px" />
                    </div>
                    <div className="space-y-4 pt-12">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                            <Plus className="w-5 h-5 mr-2 text-blue-500" />
                            {editingIndex !== null ? 'Modifier l\'antenne' : 'Nouvelle antenne'}
                        </h2>
                        <div>
                            <label htmlFor="antenne-name" className="text-sm font-medium text-gray-700">Nom de l'antenne *</label>
                            <input
                                id="antenne-name"
                                value={currentAntenne.name}
                                onChange={(e) => setCurrentAntenne({ ...currentAntenne, name: e.target.value })}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Ex: Siège social Yaoundé"
                            />
                        </div>
                        <div className="text-sm text-gray-600">
                            <p>Latitude: {currentAntenne.latitude ? currentAntenne.latitude.toFixed(4) : 'N/A'}</p>
                            <p>Longitude: {currentAntenne.longitude ? currentAntenne.longitude.toFixed(4) : 'N/A'}</p>
                        </div>
                        <button
                            onClick={addOrUpdateAntenne}
                            disabled={!currentAntenne.name || currentAntenne.latitude === null}
                            className="w-full py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            {editingIndex !== null ? '✓ Mettre à jour l\'antenne' : '+ Ajouter l\'antenne'}
                        </button>
                        {editingIndex !== null && (
                            <button onClick={resetAntenneForm} className="w-full py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                Annuler la modification
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {antennes.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        {/* On utilise notre alias MapIcon ici aussi pour la cohérence */}
                        <MapIcon className="w-5 h-5 mr-2 text-green-500" />
                        Vos antennes ({antennes.length})
                    </h2>
                    <div className="space-y-3">
                        <AnimatePresence>
                            {antennes.map((antenne, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                    className="p-4 rounded-xl border flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{antenne.name}</h3>
                                        <p className="text-sm text-gray-600">Lat: {antenne.latitude?.toFixed(4)}, Lng: {antenne.longitude?.toFixed(4)}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <button onClick={() => editAntenne(index)} className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg" aria-label="Modifier l'antenne">
                                            <Edit3 size={16} />
                                        </button>
                                        <button onClick={() => deleteAntenne(index)} className="p-2 text-red-500 hover:bg-red-100 rounded-lg" aria-label="Supprimer l'antenne">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}

            <div className="text-center mt-12">
                <button
                    onClick={onSubmit}
                    disabled={isLoading}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg text-white shadow-lg transition transform hover:scale-105 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl'}`}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                            Création en cours...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <Rocket className="w-6 h-6 mr-3" />
                            Finaliser et Créer le syndicat
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}