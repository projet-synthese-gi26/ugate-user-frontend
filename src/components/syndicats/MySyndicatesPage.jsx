
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, AlertCircle, PlusCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import SyndicateList from "./SyndicateList";
import CreateSyndicateModal from "./CreateSyndicateModal";

export default function MySyndicatesPage({ initialSyndicates }) {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const [syndicats, setSyndicats] = useState(initialSyndicates);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredSyndicats = useMemo(() => {
        return syndicats.filter((syndicat) =>
            syndicat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [syndicats, searchTerm]);

    return (
        <>

            <div className="mb-12 max-w-4xl mx-auto">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t("syndicats.search_placeholder")}
                        className="w-full pl-16 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
                </div>
            </div>


            <SyndicateList syndicats={filteredSyndicats} />


            {filteredSyndicats.length === 0 && (
                <div className="text-center py-20">
                    <div className="max-w-md mx-auto">
                        <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t("syndicats.empty_title")}</h3>
                        <p className="text-gray-600 mb-6">{t("syndicats.empty_description")}</p>
                        <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto">
                            <PlusCircle className="h-5 w-5 mr-2" />
                            {t("syndicats.create_button")}
                        </button>
                    </div>
                </div>
            )}


            <CreateSyndicateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}