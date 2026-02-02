"use client";

import { useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/GlassCard';
import { Fingerprint, FileText, Vote, LayoutDashboard, ShoppingBag, Shield } from 'lucide-react';

export default function Features() {
    const t = useTranslations('Features');

    const featureList = [
        {
            icon: Fingerprint,
            key: "identity"
        },
        {
            icon: Vote,
            key: "democracy"
        },
        {
            icon: FileText,
            key: "docs"
        },
        {
            icon: LayoutDashboard,
            key: "member"
        },
        {
            icon: ShoppingBag,
            key: "market"
        },
        {
            icon: Shield,
            key: "compliance"
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('title_part1')} <span className="text-gradient">{t('title_part2')}</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureList.map((feature, index) => (
                        <GlassCard key={index} className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t(`${feature.key}_title`)}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {t(`${feature.key}_desc`)}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}