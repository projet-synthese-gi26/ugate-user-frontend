"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Chargement dynamique de la carte sans SSR
const MapComponent = dynamic(() => import("./LeafletMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 rounded-2xl border border-slate-200">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-primary-500" />
            <span className="text-sm font-medium">Chargement de la carte...</span>
        </div>
    )
});

interface Props {
    lat?: number | null;
    lng?: number | null;
    title?: string;
    className?: string;
}

export default function MapDisplay({ lat, lng, title, className = "h-64 w-full" }: Props) {
    if (!lat || !lng) {
        return (
            <div className={`bg-slate-50 flex items-center justify-center text-slate-400 rounded-2xl border border-dashed border-slate-300 ${className}`}>
                <p className="text-sm font-medium">Position géographique non renseignée.</p>
            </div>
        );
    }

    return (
        <div className={className}>
            <MapComponent lat={lat} lng={lng} title={title} />
        </div>
    );
}