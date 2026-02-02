"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ArrowRight, ShieldCheck, Users, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-grid-pattern">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617] pointer-events-none" />

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-md">
                        <Zap size={14} className="fill-current" />
                        {t('tagline')}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
                        {t('title_part1')}<br />
                        <span className="text-gradient">{t('title_part2')}</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/register">
                            <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14">
                                {t('cta_primary')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/explorer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white/5 border-white/10 hover:bg-white/10 text-white">
                                {t('cta_secondary')}
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{t('badge_secure')}</span>
                                <span className="text-xs text-slate-500">{t('badge_secure_sub')}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Users size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{t('badge_members')}</span>
                                <span className="text-xs text-slate-500">{t('badge_members_sub')}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <div className="relative z-10 animate-float">
                        <div className="glass-panel p-1 rounded-3xl shadow-2xl bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-slate-950 rounded-[22px] overflow-hidden border border-white/5 relative h-[500px]">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-slate-400">
                                        {t('card_dashboard')}
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                            U
                                        </div>
                                        <div>
                                            <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-2" />
                                            <div className="h-3 w-48 bg-white/5 rounded" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-slate-400 text-xs mb-1">{t('card_contributions')}</div>
                                            <div className="text-2xl font-bold text-white">{t('card_status_ok')}</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="text-slate-400 text-xs mb-1">{t('card_votes')}</div>
                                            <div className="text-2xl font-bold text-white">3</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                            <Globe size={16} className="text-primary-400" />
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-primary-500" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                            <Lock size={16} className="text-purple-400" />
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-1/2 bg-purple-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/20 blur-[100px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}