"use client";

import { useState, useRef } from 'react';
import { Upload, FileCheck, X, FileText } from 'lucide-react';
import { cn } from '@/lib/ utils';

interface FileUploadProps {
    label: string;
    accept?: string;
    onChange: (file: File | null) => void;
    error?: string;
}

export default function FileUpload({ label, accept = "image/*,application/pdf", onChange, error }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (f: File) => {
        setFile(f);
        onChange(f);
    };

    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">{label}</label>
            <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
                }}
                className={cn(
                    "relative border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer flex flex-col items-center justify-center text-center",
                    isDragging ? "border-primary-500 bg-primary-50" : "border-slate-200 bg-slate-50 hover:bg-white hover:border-primary-300",
                    file ? "border-emerald-500 bg-emerald-50" : "",
                    error ? "border-red-300 bg-red-50" : ""
                )}
            >
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    accept={accept}
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />

                {file ? (
                    <div className="flex flex-col items-center animate-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                            <FileCheck size={24} />
                        </div>
                        <p className="text-sm font-bold text-emerald-900 truncate max-w-[200px]">{file.name}</p>
                        <button
                            onClick={(e) => { e.stopPropagation(); setFile(null); onChange(null); }}
                            className="mt-2 text-xs text-red-500 font-bold hover:underline"
                        >
                            Supprimer
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center mb-3 shadow-sm border border-slate-100">
                            <Upload size={20} />
                        </div>
                        <p className="text-sm text-slate-600 font-medium">
                            <span className="text-primary-600">Cliquez pour charger</span> ou glissez-déposez
                        </p>
                        <p className="text-xs text-slate-400 mt-1">PNG, JPG ou PDF jusqu'à 5MB</p>
                    </>
                )}
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}