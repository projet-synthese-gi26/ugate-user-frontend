"use client";

import { useTranslations } from 'next-intl';

export default function TrustedPartners() {
    const t = useTranslations('Partners');

    return (
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
                    {t('title')}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white">TraMaSys</h3>
                    <h3 className="text-2xl font-bold text-white">Ride & Go</h3>
                    <h3 className="text-2xl font-bold text-white">Camer-VTC</h3>
                    <h3 className="text-2xl font-bold text-white">LogiTrans</h3>
                </div>
            </div>
        </section>
    );
}