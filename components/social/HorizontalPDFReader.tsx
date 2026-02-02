"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, FileText } from 'lucide-react';
import PDFViewer from '@/components/ui/PDFViewer';

export default function HorizontalPDFReader({ url, title }: { url: string, title: string }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <div className="relative group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3] flex flex-col">
            {/* Header du mini-lecteur */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent z-10">
                <div className="flex items-center gap-2 text-white">
                    <FileText size={16} className="text-red-400" />
                    <span className="text-xs font-bold truncate max-w-[200px]">{title}</span>
                </div>
                <button
                    onClick={() => setIsFullScreen(true)}
                    className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-white transition-all"
                >
                    <Maximize2 size={14} />
                </button>
            </div>

            {/* Zone de contenu (Iframe avec focus sur la page) */}
            <div className="flex-1 w-full bg-slate-800">
                <iframe
                    src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full pointer-events-none"
                />
            </div>

            {/* Footer / Navigation Horizontale simulée (car l'iframe native gère souvent le scroll) */}
            {/* Pour une vraie navigation page par page sans scroll, on utiliserait react-pdf */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Aperçu du document</span>
            </div>

            <PDFViewer
                isOpen={isFullScreen}
                onClose={() => setIsFullScreen(false)}
                url={url}
                title={title}
            />
        </div>
    );
}