"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { ugateApi, authApi } from '@/lib/axios';
import { OfficialProfileResponse } from '@/lib/types/api';
import {
    User, Mail, Phone, ShieldCheck,
    Globe, Camera, Loader2, BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import DocumentCard from '@/components/profile/DocumentCard';
import PDFViewer from '@/components/ui/PDFViewer';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
    const t = useTranslations('Profile');
    const { user, updateUser } = useAuthStore();

    const [compliance, setCompliance] = useState<OfficialProfileResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, url: '', title: '' });

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!user?.id) return;
            try {
                // Récupération du Jumeau Numérique (Compliance)
                const res = await ugateApi.get(`/compliance/details/${user.id}`);
                setCompliance(res.data);
            } catch (error) {
                console.warn("Pas encore de données de conformité");
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, [user?.id]);

    const handleUploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0] || !user?.id) return;
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await authApi.post(`/api/users/${user.id}/picture`, formData);
            updateUser({ photoUri: res.data.photoUri });
            toast.success("Photo mise à jour");
        } catch (error) {
            toast.error("Erreur d'upload");
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary-600" /></div>;

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* --- HEADER PROFIL --- */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        {/* Avatar avec Upload */}
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-[2.5rem] bg-slate-100 border-4 border-white shadow-2xl overflow-hidden">
                                {user?.photoUri ? (
                                    <img src={user.photoUri} className="w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300 font-black text-5xl bg-primary-900">
                                        {user?.firstName.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <label className="absolute bottom-2 right-2 w-10 h-10 bg-primary-800 text-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-xl">
                                <Camera size={18} />
                                <input type="file" className="hidden" onChange={handleUploadPicture} accept="image/*" />
                            </label>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                {compliance?.isVerified ? (
                                    <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
                                        <BadgeCheck size={14} /> {t('status.verified')}
                                    </div>
                                ) : (
                                    <div className="bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                                        <ShieldCheck size={14} /> {t('status.unverified')}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-500 font-medium text-sm">
                                <div className="flex items-center gap-2"><Mail size={16} className="text-primary-600" /> {user?.email}</div>
                                <div className="flex items-center gap-2"><Phone size={16} className="text-primary-600" /> {user?.phone || 'N/A'}</div>
                                <div className="flex items-center gap-2"><Globe size={16} className="text-primary-600" /> {user?.service}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- GRID DOCUMENTS & INFOS --- */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Colonne Gauche : Documents Légaux */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('sections.compliance')}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <DocumentCard
                                title={t('docs.cni')}
                                description="Pièce d'identité officielle (Recto/Verso)"
                                url={compliance?.cniRectoUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.cniRectoUrl, title: t('docs.cni') })}
                                onUpdate={() => toast("Redirection vers l'upload...")}
                            />
                            <DocumentCard
                                title={t('docs.license')}
                                description="Permis de conduire valide"
                                url={compliance?.licenseRectoUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.licenseRectoUrl, title: t('docs.license') })}
                                onUpdate={() => {}}
                            />
                            <DocumentCard
                                title={t('docs.cv')}
                                description="Votre parcours professionnel à jour"
                                url={compliance?.cvUrl || null}
                                onView={() => setPdfViewer({ isOpen: true, url: compliance!.cvUrl, title: t('docs.cv') })}
                                onUpdate={() => {}}
                            />
                        </div>
                    </div>

                    {/* Colonne Droite : Infos additionnelles */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('sections.identity')}</h2>

                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">{t('fields.cni_number')}</label>
                                <div className="text-slate-900 font-bold text-lg">{compliance?.cniNumber || '—'}</div>
                            </div>
                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">{t('fields.license_number')}</label>
                                <div className="text-slate-900 font-bold text-lg">{compliance?.licenseNumber || '—'}</div>
                            </div>
                            <Button variant="outline" className="w-full h-12 rounded-xl text-primary-800 font-bold border-primary-100 hover:bg-primary-50">
                                Modifier mes informations
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Viewer PDF */}
            <PDFViewer
                isOpen={pdfViewer.isOpen}
                onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
                url={pdfViewer.url}
                title={pdfViewer.title}
            />
        </div>
    );
}