import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/landing/Features";
import TrustedPartners from "@/components/sections/landing/TrustedPartners";
import Stats from "@/components/sections/landing/Stats";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import CallToAction from "@/components/sections/landing/CallToAction";
import Footer from "@/components/layout/Footer";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
      <main className="min-h-screen bg-[#020617] selection:bg-primary-500/30 overflow-x-hidden">
        <Navbar />

        {/* 1. Hero: Immersion & Proposition de valeur */}
        <Hero />

        {/* 2. Preuve Sociale : Logos Partenaires */}
        <TrustedPartners />

        {/* 3. Preuve Sociale : Chiffres clés */}
        <Stats />

        {/* 4. Solution : Grille de fonctionnalités Premium */}
        <Features />

        {/* 5. Éducation : Comment ça marche (Créer vs Rejoindre) */}
        <HowItWorks />

        {/* 6. Conversion : Appel à l'action final */}
        <CallToAction />

        {/* 7. Footer complet */}
        <Footer />
      </main>
  );
}