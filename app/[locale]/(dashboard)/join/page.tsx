"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ugateApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import FileUpload from '@/components/ui/FileUpload';
import { toast } from 'react-hot-toast';
import {
    Loader2,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    ChevronLeft,
    UserCheck,
    FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/ utils';

export default function JoinSyndicatePage() {
    const searchParams = useSearchParams();
    const t = useTranslations('Membership');
    const { user, userType } = useAuthStore();

    const syndicatId = searchParams.get('syndicat');
    const branchId = searchParams.get('branch');

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);

    const [motivation, setMotivation] = useState('');
    const [docs, setDocs] = useState<{ [key: string]: File | null }>({
        cniRecto: null,
        cniVerso: null,
        license: null,
        cv: null
    });

    const isPartner = userType === 'PARTNER';

    const handleSubmit = async () => {
        if (!motivation || !syndicatId || !branchId) {
            toast.error("Veuillez remplir tous les champs");
            return;
        }

        setLoading(true);
        try {
            // Note: Envoi de la demande d'adhésion simple selon le swagger
            // Pour l'envoi des fichiers réels, cela se fait généralement via l'API de Compliance
            await ugateApi.post(`/syndicates/${syndicatId}/memberships/request`, {
                branchId: branchId,
                motivation: motivation
            });

            setSuccess(true);
            toast.success(t('success_title'));
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la soumission");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center"
                >
                    <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('success_title')}</h1>
                    <p className="text-slate-500 leading-relaxed mb-10">{t('success_message')}</p>
                    <Button onClick={() => window.location.href = '/dashboard'} className="w-full h-14 rounded-2xl bg-primary-800 hover:bg-primary-900 text-base font-bold transition-all shadow-xl">
                        Accéder à mon espace
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header & Stepper */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{t('title')}</h1>
                        <p className="text-slate-500 font-medium">{t('subtitle')}</p>
                    </div>

                    <div className="flex items-center bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-500",
                                    step === s ? "bg-primary-800 text-white shadow-lg" :
                                        step > s ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
                                )}>
                                    {step > s ? <CheckCircle2 size={20} /> : s}
                                </div>
                                {s < 3 && <div className="w-8 h-[2px] bg-slate-100 mx-2" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-16">
                        <AnimatePresence mode="wait">

                            {/* ÉTAPE 1 : INFOS PERSONNELLES */}
                            {step === 1 && (
                                <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary-50 text-primary-600 rounded-2xl">
                                            <UserCheck size={28} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">{t('steps.personal')}</h2>
                                            <p className="text-slate-500">Profil vérifié via TraMaSys Auth</p>
                                        </div>
                                    </div>

                                    {isPartner && (
                                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
                                            <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                                            <p className="text-sm text-blue-900 leading-relaxed font-medium">{t('partner_notice')}</p>
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 ml-1">
                                                {t('firstname_label')} & {t('lastname_label')}
                                            </label>
                                            <div className="relative">
                                                <Input
                                                    value={`${user?.firstName || ''} ${user?.lastName || ''}`}
                                                    disabled
                                                    className="bg-slate-100 border-slate-200 text-slate-900 font-semibold opacity-100 cursor-not-allowed shadow-inner"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                    <ShieldCheck size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 ml-1">
                                                {t('email_label')}
                                            </label>
                                            <div className="relative">
                                                <Input
                                                    value={user?.email || ''}
                                                    disabled
                                                    className="bg-slate-100 border-slate-200 text-slate-900 font-semibold opacity-100 cursor-not-allowed shadow-inner"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                    <ShieldCheck size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex justify-end border-t border-slate-50">
                                        <Button onClick={() => setStep(2)} className="h-14 px-10 rounded-2xl bg-primary-800 text-base font-bold shadow-lg">
                                            Continuer <ArrowRight className="ml-2" size={20} />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ÉTAPE 2 : DOCUMENTS LÉGAUX */}
                            {step === 2 && (
                                <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary-50 text-primary-600 rounded-2xl">
                                            <FileText size={28} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">{t('steps.documents')}</h2>
                                            <p className="text-slate-500">Documents requis pour la conformité</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FileUpload label={t('form.cni_recto')} onChange={(f) => setDocs({...docs, cniRecto: f})} />
                                        <FileUpload label={t('form.cni_verso')} onChange={(f) => setDocs({...docs, cniVerso: f})} />
                                        <FileUpload label={t('form.license_recto')} onChange={(f) => setDocs({...docs, license: f})} />
                                        <FileUpload label={t('form.cv_label')} accept="application/pdf" onChange={(f) => setDocs({...docs, cv: f})} />
                                    </div>

                                    <div className="pt-8 flex justify-between items-center border-t border-slate-50">
                                        <Button variant="ghost" onClick={() => setStep(1)} className="h-12 text-slate-500 font-bold hover:bg-slate-50">
                                            <ChevronLeft size={20} className="mr-1" /> Retour
                                        </Button>
                                        <Button onClick={() => setStep(3)} className="h-14 px-10 rounded-2xl bg-primary-800 font-bold">
                                            Continuer
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ÉTAPE 3 : MOTIVATION */}
                            {step === 3 && (
                                <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('steps.motivation')}</h2>
                                        <p className="text-slate-500">Présentez-vous brièvement à l'antenne locale.</p>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-700 ml-1">{t('form.motivation_label')}</label>
                                        <textarea
                                            className="w-full min-h-[200px] p-6 rounded-[2rem] border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-slate-900 text-lg shadow-inner"
                                            placeholder={t('form.motivation_placeholder')}
                                            value={motivation}
                                            onChange={(e) => setMotivation(e.target.value)}
                                        />
                                    </div>

                                    <div className="pt-8 flex justify-between items-center border-t border-slate-50">
                                        <Button variant="ghost" onClick={() => setStep(2)} className="h-12 text-slate-500 font-bold">
                                            <ChevronLeft size={20} className="mr-1" /> Retour
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={loading || !motivation}
                                            className="h-14 px-12 rounded-2xl bg-primary-800 font-bold shadow-xl"
                                        >
                                            {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
                                            {t('form.submit')}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}