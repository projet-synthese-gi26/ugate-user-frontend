"use client";

import { useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/GlassCard';
import { Fingerprint, Vote, FileText, LayoutDashboard, ShoppingBag, Shield, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/ utils';

export default function Features() {
    const t = useTranslations('Features');

    // Configuration Bento Grid
    const features = [
        {
            icon: Fingerprint, key: "identity", colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        },
        {
            icon: Vote, key: "democracy", colSpan: "md:col-span-1", bg: "bg-slate-800/50"
        },
        {
            icon: LayoutDashboard, key: "member", colSpan: "md:col-span-1", bg: "bg-slate-800/50"
        },
        {
            icon: ShoppingBag, key: "market", colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
        },
        {
            icon: Shield, key: "compliance", colSpan: "md:col-span-3", bg: "bg-slate-800/50"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-900/20 blur-[120px] rounded-full -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Fonctionnalités Premium</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t('title_part2')}</span>
                    </h3>
                    <p className="text-slate-400 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard
                            key={index}
                            className={cn(
                                "p-8 group cursor-pointer relative overflow-hidden border-white/5 hover:border-white/10 transition-all duration-500",
                                feature.colSpan,
                                feature.bg
                            )}
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                <ArrowUpRight size={20} />
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300 shadow-xl">
                                <feature.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                                {t(`${feature.key}_title`)}
                            </h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">
                                {t(`${feature.key}_desc`)}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}