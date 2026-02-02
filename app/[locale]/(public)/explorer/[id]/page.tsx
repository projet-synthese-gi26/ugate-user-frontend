"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from '@/navigation'; // Utilisation du router i18n
import { useTranslations } from 'next-intl';
import { ugateApi, authApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Syndicate, Branch, Product, User } from '@/lib/types/api';
import {
    Loader2, MapPin, FileText, ShoppingBag,
    Calendar, CheckCircle, Users, Mail, User as UserIcon,
    ShieldCheck, Eye, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import PDFViewer from '@/components/ui/PDFViewer';
import { toast } from 'react-hot-toast';

export default function SyndicateDetailsPage() {
    const { id: syndicateId } = useParams();
    const router = useRouter();
    const t = useTranslations('SyndicateDetails');
    const { isAuthenticated } = useAuthStore();

    const [syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const [creatorProfile, setCreatorProfile] = useState<User | null>(null);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'about' | 'branches' | 'products'>('about');

    const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; url: string | null; title: string }>({
        isOpen: false, url: null, title: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            if (!syndicateId) return;
            try {
                const [syndicateRes, branchesRes, productsRes] = await Promise.all([
                    ugateApi.get(`/syndicates/${syndicateId}/details`),
                    ugateApi.get(`/syndicates/${syndicateId}/branches`),
                    ugateApi.get(`/products/syndicates/${syndicateId}`)
                ]);

                const syndData = syndicateRes.data;
                setSyndicate(syndData);
                setBranches(branchesRes.data);
                setProducts(productsRes.data);

                if (syndData.creator?.id) {
                    try {
                        const userRes = await authApi.get(`/api/users/${syndData.creator.id}`);
                        setCreatorProfile(userRes.data);
                    } catch (e) {
                        console.warn("Profil créateur non enrichi");
                    }
                }
            } catch (error) {
                console.error(error);
                toast.error("Erreur lors du chargement");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [syndicateId]);

    // LOGIQUE DE ROUTAGE POUR REJOINDRE
    const handleJoinBranch = (branchId: string) => {
        const targetUrl = `/join?syndicat=${syndicateId}&branch=${branchId}`;

        if (!isAuthenticated) {
            toast.error("Veuillez vous connecter pour continuer");
            router.push(`/login?callback=${encodeURIComponent(targetUrl)}`);
        } else {
            router.push(targetUrl);
        }
    };

    const openPdf = (url: string | null, title: string) => {
        if (!url) return toast.error("Document indisponible");
        setPdfViewer({ isOpen: true, url, title });
    };

    if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-10 h-10 text-primary-600 animate-spin"/></div>;
    if (!syndicate) return <div className="h-screen flex items-center justify-center">Syndicat introuvable</div>;

    const hasStatus = !!syndicate.documents?.statusUrl;
    const hasCharte = !!syndicate.documents?.charteUrl;
    const bannerImage = syndicate.documents?.logoUrl || '/placeholder-banner.jpg';

    return (
        <div className="min-h-screen bg-slate-50">

            {/* --- HERO HEADER --- */}
            <div className="relative pt-32 pb-12 lg:pb-24 overflow-hidden bg-[#0F172A]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:items-end">
                        <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/10 text-4xl font-black text-primary-900 shrink-0">
                            {syndicate.documents?.logoUrl ? (
                                <img src={syndicate.documents.logoUrl} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                            ) : (
                                syndicate.name.charAt(0)
                            )}
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-primary-600 border-none text-white px-3 py-1 text-sm">{syndicate.domain}</Badge>
                                {syndicate.isActive && (
                                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/20 px-3 py-1 flex items-center gap-1">
                                        <ShieldCheck size={12} /> Actif & Vérifié
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{syndicate.name}</h1>
                            <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
                                <div className="flex items-center gap-2"><Users size={18} className="text-primary-400" /><span>{syndicate.stats?.totalMembers || 0} Membres</span></div>
                                <div className="flex items-center gap-2"><MapPin size={18} className="text-primary-400" /><span>{syndicate.stats?.totalBranches || 0} Antennes</span></div>
                                <div className="flex items-center gap-2"><Calendar size={18} className="text-primary-400" /><span>Depuis {new Date(syndicate.createdAt).getFullYear()}</span></div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 shadow-xl" onClick={() => setActiveTab('branches')}>
                                {t('join_btn')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- NAVIGATION --- */}
            <div className="sticky top-[80px] z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex gap-8">
                    {['about', 'branches', 'products'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`py-5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                                activeTab === tab ? "border-primary-600 text-primary-700" : "border-transparent text-slate-500 hover:text-slate-800"
                            }`}
                        >
                            {t(`tabs.${tab}`)}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- CONTENU --- */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* ABOUT & DOCUMENTS */}
                {activeTab === 'about' && (
                    <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle className="text-primary-500" size={24} /> Vision & Mission</h3>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap text-lg">{syndicate.description}</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">Administration</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 overflow-hidden">
                                        {creatorProfile?.photoUri ? <img src={creatorProfile.photoUri} alt="Admin" className="w-full h-full object-cover" /> : <UserIcon size={32} />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-lg">{creatorProfile?.firstName} {creatorProfile?.lastName}</div>
                                        <div className="text-primary-600 font-medium text-sm mb-1">Président Fondateur</div>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm"><Mail size={14} />{creatorProfile?.email || syndicate.creator.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full" />
                                <h3 className="text-lg font-bold mb-6 relative z-10">Documentation Officielle</h3>
                                <div className="space-y-3 relative z-10">
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">Statuts du Syndicat</div>
                                            {hasStatus ? <button onClick={() => openPdf(syndicate.documents.statusUrl, "Statuts Officiels")} className="text-xs text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic">Non disponible</span>}
                                        </div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">Règlement Intérieur</div>
                                            {hasCharte ? <button onClick={() => openPdf(syndicate.documents.charteUrl, "Règlement Intérieur")} className="text-xs text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic">Non disponible</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* BRANCHES AVEC ACTION DE ROUTAGE */}
                {activeTab === 'branches' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
                        {branches.map(branch => (
                            <div key={branch.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{branch.name}</h3>
                                <p className="text-slate-500 mb-6 flex items-center gap-2 text-sm"><MapPin size={14} /> {branch.location}</p>
                                <Button
                                    className="w-full justify-between"
                                    variant="outline"
                                    onClick={() => handleJoinBranch(branch.id)}
                                >
                                    Rejoindre cette antenne
                                    <ArrowRight size={16} />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                {/* PRODUITS */}
                {activeTab === 'products' && (
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in">
                        {products.map(product => (
                            <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                                <div className="h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                                    {product.image ? <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> : <ShoppingBag className="text-slate-300" size={40} />}
                                </div>
                                <div className="p-4">
                                    <div className="font-bold text-primary-600 text-lg mb-1">{product.price} FCFA</div>
                                    <h3 className="font-medium text-slate-900 truncate">{product.name}</h3>
                                    <Button className="w-full mt-4" size="sm">Acheter</Button>
                                </div>
                            </div>
                        ))}
                        {products.length === 0 && <p className="col-span-full text-center text-slate-500 py-12">Aucun produit disponible.</p>}
                    </div>
                )}
            </div>

            {/* MODAL PDF VIEWER */}
            <PDFViewer
                isOpen={pdfViewer.isOpen}
                onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
                url={pdfViewer.url}
                title={pdfViewer.title}
            />
        </div>
    );
}