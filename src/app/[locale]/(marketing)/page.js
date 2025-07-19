import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import {useTranslations} from 'next-intl';

export default async function LandingPage({ params: { locale } }) {
    const t = useTranslations();
    
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