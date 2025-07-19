
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CreateSyndicateWizard } from '../forms/create-syndicate/CreateSyndicateWizard';
import { useTranslation } from "react-i18next";

export default function CreateSyndicateModal({ isOpen, onClose }) {
    const t = useTranslations('syndicats_page');

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-50 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b flex justify-between items-center bg-white rounded-t-2xl">
                            <h3 className="text-xl font-bold">{t("syndicats.create_modal_title")}</h3>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {/* Le wizard est maintenant responsable de tout le contenu */}
                            <CreateSyndicateWizard onSuccess={onClose} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}