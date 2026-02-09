"use client";
import { useSettings } from '@/lib/context/SettingsContext';
import { Signal, Wifi, Zap, Info } from 'lucide-react';

export default function NetworkWidget() {
    const { networkQuality, setNetworkQuality } = useSettings();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Signal size={16} className="text-primary-600" />
                    Qualité Média
                </h3>
            </div>
            <div className="p-4">
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Ajustez le chargement des images selon votre connexion.
                </p>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        onClick={() => setNetworkQuality('high')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'high'
                                ? 'bg-primary-50 border-primary-500 text-primary-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Wifi size={16} className="mb-1" />
                        HD
                    </button>
                    <button
                        onClick={() => setNetworkQuality('auto')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'auto'
                                ? 'bg-blue-50 border-blue-500 text-blue-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Zap size={16} className="mb-1" />
                        Auto
                    </button>
                    <button
                        onClick={() => setNetworkQuality('low')}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold transition-all ${
                            networkQuality === 'low'
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                                : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Signal size={16} className="mb-1" />
                        Éco
                    </button>
                </div>
            </div>
        </div>
    );
}