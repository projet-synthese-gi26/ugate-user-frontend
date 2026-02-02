"use client";

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Syndicate } from '@/lib/types/api';
import { Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface SyndicateCardProps {
    syndicate: Syndicate;
}

export default function SyndicateCard({ syndicate }: SyndicateCardProps) {
    const t = useTranslations('Explorer');

    return (
        <Link href={`/explorer/${syndicate.id}`} className="block h-full">
            <div className="group relative bg-white h-full rounded-2xl overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] hover:-translate-y-1">

                {/* BANNIÈRE (Utilisation du champ logo comme demandé) */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                    {syndicate.logoUrl ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${syndicate.logoUrl})` }}
                        />
                    ) : (
                        // Fallback joli si pas d'image
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black" />
                    )}

                    {/* Overlay dégradé pour lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge Statut Flottant */}
                    <div className="absolute top-4 right-4">
                        {syndicate.isActive && (
                            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white flex items-center gap-1">
                                <ShieldCheck size={12} className="text-emerald-400" />
                                {t('active_status')}
                            </Badge>
                        )}
                    </div>

                    {/* Domaine (Catégorie) */}
                    <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-primary-900/20">
                            {syndicate.domain}
                        </span>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-1">
                        {syndicate.name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {syndicate.description || "..."}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                            <Users size={16} className="text-primary-500" />
                            <span>{t('members_count', { count: syndicate.stats?.totalMembers || 0 })}</span>
                        </div>

                        <span className="flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                            {t('see_details')}
                            <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}