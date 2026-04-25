"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ugateApi, authApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';
import { Syndicate, Branch, Product, User } from '@/lib/types/api';
import {
    Loader2, MapPin, FileText, ShoppingBag,
    Calendar, CheckCircle, Users, Mail, User as UserIcon,
    ShieldCheck, Eye, ArrowRight, Building2, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import PDFViewer from '@/components/ui/PDFViewer';
import BranchDetailsModal from '@/components/syndicate/BranchDetailsModal'; // <-- Nouvel import
import { toast } from 'react-hot-toast';

export default function SyndicateDetailsPage() {
    const { id: syndicateId } = useParams();
    const router = useRouter();
    const t = useTranslations('SyndicateDetails');
    const { isAuthenticated } = useAuthStore();

    const[syndicate, setSyndicate] = useState<Syndicate | null>(null);
    const[creatorProfile, setCreatorProfile] = useState<User | null>(null);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const[loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'about' | 'branches' | 'products'>('about');

    const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; url: string | null; title: string }>({
        isOpen: false, url: null, title: ''
    });

    // <-- État pour la modale de l'antenne
    const[selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!syndicateId) return;
            try {
                const[syndicateRes, branchesRes, productsRes] = await Promise.all([
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
    const bannerImage = syndicate.documents?.logoUrl || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80';

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
                <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto no-scrollbar">
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

                {/* TAB 1: ABOUT & DOCUMENTS */}
                {activeTab === 'about' && (
                    <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle className="text-primary-500" size={24} /> Vision & Mission</h3>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap text-lg">{syndicate.description}</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">Administration</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200">
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
                            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] rounded-full" />
                                <h3 className="text-lg font-bold mb-6 relative z-10">Documentation Officielle</h3>
                                <div className="space-y-4 relative z-10">
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-bold text-sm">Statuts du Syndicat</div>
                                            {hasStatus ? <button onClick={() => openPdf(syndicate.documents.statusUrl, "Statuts Officiels")} className="text-xs font-medium text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic font-medium">Non disponible</span>}
                                        </div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/5 hover:bg-white/20 transition-all flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                        <div className="flex-1">
                                            <div className="font-bold text-sm">Règlement Intérieur</div>
                                            {hasCharte ? <button onClick={() => openPdf(syndicate.documents.charteUrl, "Règlement Intérieur")} className="text-xs font-medium text-primary-300 hover:text-white flex items-center gap-1 mt-1"><Eye size={12} /> Lire le document</button> : <span className="text-xs text-slate-500 italic font-medium">Non disponible</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: BRANCHES (REFONTE PREMIUM) */}
                {activeTab === 'branches' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in">
                        {branches.map(branch => (
                            <div
                                key={branch.id}
                                className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-primary-900/10 hover:border-primary-200 transition-all duration-500 flex flex-col"
                            >
                                {/* Bannière Antenne */}
                                <div className="h-40 bg-slate-900 relative overflow-hidden">
                                    {branch.bannerUrl ? (
                                        <img
                                            src={branch.bannerUrl}
                                            alt={branch.name}
                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-primary-900" />
                                    )}
                                    {/* Icone superposée */}
                                    <div className="absolute -bottom-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white text-primary-600">
                                        <Building2 size={24} />
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="pt-10 p-6 flex-1 flex flex-col">
                                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                                        {branch.name}
                                    </h3>
                                    <div className="space-y-2 mb-8">
                                        <p className="text-slate-500 flex items-center gap-2 text-sm font-medium">
                                            <MapPin size={16} className="text-primary-400" />
                                            <span className="truncate">{branch.location}</span>
                                        </p>
                                    </div>

                                    {/* Footer Actions */}
                                    <div className="mt-auto pt-6 border-t border-slate-50 flex gap-3">
                                        <Button
                                            variant="outline"
                                            className="flex-1 border-slate-200 text-slate-600 hover:text-primary-700 hover:border-primary-200 hover:bg-primary-50"
                                            onClick={() => setSelectedBranch(branch)}
                                        >
                                            <ExternalLink size={16} className="mr-2" /> Détails
                                        </Button>
                                        <Button
                                            className="flex-1 bg-primary-800 hover:bg-primary-900 text-white shadow-lg shadow-primary-900/20"
                                            onClick={() => handleJoinBranch(branch.id)}
                                        >
                                            Rejoindre <ArrowRight size={16} className="ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {branches.length === 0 && (
                            <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-slate-300">
                                <Building2 size={48} className="mx-auto text-slate-300 mb-4" />
                                <p className="text-slate-500 font-medium">Ce syndicat ne possède pas encore d'antenne.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* TAB 3: PRODUITS */}
                {activeTab === 'products' && (
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in">
                        {products.map(product => (
                            <div key={product.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                                <div className="h-52 bg-slate-50 flex items-center justify-center overflow-hidden p-4 relative">
                                    {product.image ? (
                                        <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                                    ) : (
                                        <ShoppingBag className="text-slate-200" size={48} />
                                    )}
                                    <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 border-none font-bold shadow-sm">
                                        {product.category}
                                    </Badge>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="font-black text-primary-700 text-xl mb-2">{product.price} FCFA</div>
                                    <h3 className="font-bold text-slate-900 leading-tight mb-2">{product.name}</h3>
                                    <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-1">{product.description}</p>
                                    <Button className="w-full bg-slate-900 hover:bg-black text-white rounded-xl shadow-lg mt-auto">Commander</Button>
                                </div>
                            </div>
                        ))}
                        {products.length === 0 && (
                            <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-slate-300">
                                <ShoppingBag size={48} className="mx-auto text-slate-300 mb-4" />
                                <p className="text-slate-500 font-medium">Aucun produit ou service disponible pour le moment.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* --- MODALES --- */}

            {/* Modal PDF */}
            <PDFViewer
                isOpen={pdfViewer.isOpen}
                onClose={() => setPdfViewer({ ...pdfViewer, isOpen: false })}
                url={pdfViewer.url}
                title={pdfViewer.title}
            />

            {/* Modal Détails Antenne */}
            <BranchDetailsModal
                isOpen={selectedBranch !== null}
                onClose={() => setSelectedBranch(null)}
                branch={selectedBranch}
                onJoin={handleJoinBranch}
            />

        </div>
    );
}