"use client";

import { Link } from '@/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import {ADMIN_DASHBOARD_URL} from "@/lib/axios";

export default function CallToAction() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 blur-[100px] opacity-20 rounded-full" />

                <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Prêt à transformer votre <br/> expérience syndicale ?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        Rejoignez des milliers de professionnels qui utilisent U-Gate pour plus de transparence, de rapidité et d'impact.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/register">
                            <Button size="lg" className="h-16 px-10 rounded-2xl text-lg bg-white text-slate-900 hover:bg-slate-200 shadow-xl shadow-white/10">
                                Créer un compte membre
                            </Button>
                        </Link>
                        <a href={ADMIN_DASHBOARD_URL} target="_blank" rel="noreferrer">
                            <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg border-white/20 text-white hover:bg-white/10">
                                Je veux créer un syndicat
                                <ArrowRight className="ml-2" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}