
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function FileUploader({ label, onFileSelect }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > 5 * 1024 * 1024) { // 5MB
                setError("Le fichier est trop volumineux (max 5 Mo).");
                setFile(null); onFileSelect(null);
            } else {
                setFile(selectedFile); setError(null); onFileSelect(selectedFile);
            }
        }
    };

    return (
        <div>
            <label className="mb-2 block text-lg font-semibold text-gray-700">{label}</label>
            <motion.div
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="bg-gray-50 border-gray-200 cursor-pointer rounded-lg border-2 border-dashed p-8 text-center"
                onClick={() => fileInputRef.current?.click()}
            >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                {file ? (
                    <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="mr-2" /><span>{file.name}</span>
                    </div>
                ) : (
                    <div>
                        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                        <p>Glissez un fichier ou cliquez pour sélectionner</p>
                    </div>
                )}
            </motion.div>
            {error && <p className="mt-2 flex items-center text-red-500"><AlertCircle className="mr-2" size={16} />{error}</p>}
        </div>
    );
}