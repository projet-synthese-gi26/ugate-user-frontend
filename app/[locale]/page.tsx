import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/landing/Features";
import TrustedPartners from "@/components/sections/landing/TrustedPartners";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    // Note: Dans les server components Next 15, on await les params
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-navy-950 selection:bg-primary-500/30">
            <Navbar />

            <Hero />
            <TrustedPartners />
            <Features />

            <Footer />
        </main>
    );
}

// Petit composant Footer interne pour l'exemple (à extraire plus tard)
function Footer() {
    const t = useTranslations('Common');
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
                <p>{t('copyright', { year })}</p>
            </div>
        </footer>
    );
}