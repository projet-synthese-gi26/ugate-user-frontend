"use client";

import { FileText, Eye, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/ utils';
import { useTranslations } from 'next-intl';

interface Props {
    title: string;
    description: string;
    url: string | null;
    onView: () => void;
    onUpdate: () => void;
}

export default function DocumentCard({ title, description, url, onView, onUpdate }: Props) {
    const t = useTranslations('Profile.docs');
    const isUploaded = !!url;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col h-full hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center border",
                    isUploaded ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-500 border-red-100"
                )}>
                    {isUploaded ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                </div>
                {isUploaded && (
                    <button
                        onClick={onView}
                        className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                    >
                        <Eye size={20} />
                    </button>
                )}
            </div>

            <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-xs text-slate-500 mb-8 flex-grow">{description}</p>

            <button
                onClick={onUpdate}
                className={cn(
                    "w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all",
                    isUploaded
                        ? "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        : "bg-primary-800 text-white shadow-lg shadow-primary-900/10 hover:bg-primary-900"
                )}
            >
                <Upload size={16} />
                {isUploaded ? t('update_btn') : "Charger le document"}
            </button>
        </div>
    );
}