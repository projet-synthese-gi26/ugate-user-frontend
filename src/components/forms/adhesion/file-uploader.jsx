// src/components/forms/adhesion/file-uploader.jsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, AlertCircle, X, FileImage, Eye } from "lucide-react";

export const FileUploader = ({ label, icon, accept = "image/*", onFileSelect, required = false }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    const processFile = (selectedFile) => {
        // Validation basique
        if (selectedFile.size > 5 * 1024 * 1024) { setError('Fichier trop volumineux (max 5Mo)'); return; }
        setFile(selectedFile); setError(null); onFileSelect(selectedFile);
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewUrl(e.target.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) processFile(selectedFile);
    };

    const removeFile = () => { setFile(null); setPreviewUrl(null); onFileSelect(null); if (fileInputRef.current) fileInputRef.current.value = ''; };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <motion.div onClick={() => fileInputRef.current?.click()} className={`relative cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all duration-300 ${file ? 'border-green-400 bg-green-50 dark:bg-green-900/50' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/50 hover:border-blue-400'}`}>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept={accept} className="hidden" />
                {file ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3"><CheckCircle className="w-6 h-6 text-green-500" /><p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{file.name}</p></div>
                        <button type="button" onClick={(e) => { e.stopPropagation(); removeFile(); }} className="p-1 text-red-500 hover:bg-red-100 rounded-full"><X className="w-4 h-4" /></button>
                    </div>
                ) : (
                    <div className="space-y-1 text-gray-500 dark:text-gray-400"><Upload className="mx-auto h-8 w-8" /><p className="text-sm font-semibold">Cliquer ou glisser un fichier</p><p className="text-xs">PNG, JPG, PDF (max 5Mo)</p></div>
                )}
            </motion.div>
            <AnimatePresence>{error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-500 text-xs mt-1">{error}</motion.p>}</AnimatePresence>
        </div>
    );
};