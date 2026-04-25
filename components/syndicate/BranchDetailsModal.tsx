"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Branch } from "@/lib/types/api";
import { X, MapPin, Phone, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import MapDisplay from "@/components/ui/MapDisplay";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    branch: Branch | null;
    onJoin: (branchId: string) => void;
}

export default function BranchDetailsModal({ isOpen, onClose, branch, onJoin }: Props) {
    if (!branch) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden max-h-[90vh]"
                    >
                        {/* Header Banner */}
                        <div className="h-48 sm:h-56 relative bg-slate-900 shrink-0">
                            {branch.bannerUrl ? (
                                <img src={branch.bannerUrl} alt={branch.name} className="w-full h-full object-cover opacity-80" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-primary-900" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all"
                            >
                                <X size={20} />
                            </button>

                            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg text-primary-600 border-2 border-white/20">
                                    <Building2 size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">{branch.name}</h2>
                                    <p className="text-primary-300 text-sm font-bold tracking-widest uppercase flex items-center gap-1.5 mt-1">
                                        <MapPin size={14} /> {branch.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Body Scrollable */}
                        <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Infos */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Contact & Localisation</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="text-primary-500 mt-0.5 shrink-0" size={20} />
                                                <div>
                                                    <span className="block font-bold text-slate-900">Adresse</span>
                                                    <span className="text-sm text-slate-600 leading-relaxed">{branch.location || "Adresse non spécifiée"}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Phone className="text-primary-500 mt-0.5 shrink-0" size={20} />
                                                <div>
                                                    <span className="block font-bold text-slate-900">Téléphone / Email</span>
                                                    <span className="text-sm text-slate-600 leading-relaxed">{branch.contact || "Aucun contact renseigné"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Emplacement GPS</h3>
                                    <MapDisplay
                                        lat={branch.latitude}
                                        lng={branch.longitude}
                                        title={branch.name}
                                        className="h-48 sm:h-full min-h-[200px] w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3 shrink-0">
                            <Button variant="ghost" onClick={onClose} className="font-bold text-slate-600 hover:bg-slate-200">
                                Fermer
                            </Button>
                            <Button
                                onClick={() => { onClose(); onJoin(branch.id); }}
                                className="bg-primary-800 hover:bg-primary-900 text-white font-bold shadow-lg shadow-primary-900/20 px-8"
                            >
                                Rejoindre l'antenne <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}