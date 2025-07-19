import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import {getTranslations} from 'next-intl/server';

export default async function LandingPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();
    
    return (
        <div className="scroll-smooth">
            <HeroSection />
            <FeaturesSection />
            <ActivityFeed />
            <PopularSyndicates />
            <StatsSection />
        </div>
    );
}