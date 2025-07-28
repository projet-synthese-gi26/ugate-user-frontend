import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';

export default async function LandingPage({ params }) {
    const { locale } = await params;

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