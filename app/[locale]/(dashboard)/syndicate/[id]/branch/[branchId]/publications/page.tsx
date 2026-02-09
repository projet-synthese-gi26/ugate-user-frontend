"use client";

import React, { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { Publication } from '@/lib/types/api';
import PostCard from '@/components/social/PostCard';
import CreatePost from '@/components/social/CreatePost';
import { Loader2, FileSearch } from 'lucide-react';

export default function OnlyPublicationsPage({ params }: { params: Promise<{ id: string, branchId: string }> }) {
    // Extraction des IDs comme dans le feed
    const { id: syndicateId, branchId } = use(params);

    const [pubs, setPubs] = useState<Publication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPubs = async () => {
            try {
                // On utilise branchId pour filtrer les publications de l'antenne
                const res = await ugateApi.get(`/publications/branch/${branchId}`);
                setPubs(Array.isArray(res.data) ? res.data : []);
            } catch (e) {
                console.error("Erreur lors du chargement des publications :", e);
            } finally {
                setLoading(false);
            }
        };
        fetchPubs();
    }, [branchId]);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Outil de création de post lié à la branche */}
            <CreatePost syndicateId={branchId} />

            {/* Séparateur sémantique */}
            <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Publications de l'antenne
                </span>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            {/* État de chargement */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-primary-800 w-10 h-10" />
                </div>
            ) : pubs.length > 0 ? (
                <div className="space-y-8">
                    {pubs.map((p) => (
                        <PostCard key={p.id} publication={p} />
                    ))}
                </div>
            ) : (
                /* État vide si pas de publications */
                <div className="bg-white rounded-[2.5rem] p-20 text-center border border-slate-100 shadow-sm">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                        <FileSearch size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-400">Aucune publication.</h2>
                    <p className="text-slate-400 text-sm mt-1">Les messages de la branche s'afficheront ici.</p>
                </div>
            )}
        </div>
    );
}