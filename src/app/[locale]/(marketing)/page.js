import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import {getTranslations} from 'next-intl/server';

export default async function LandingPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations('heroComponent');
    
    const heroData = {
        title_part1: t('title_part1'),
        title_highlighted: t('title_highlighted'),
        subtitle: t('subtitle'),
        cta_main: t('cta_main'),
        cta_secondary: t('cta_secondary'),
        image_alt: t('image_alt')
    };
    
    return (
        <div className="scroll-smooth">
            <HeroSection heroData={heroData} />
            <FeaturesSection />
            <ActivityFeed />
            <PopularSyndicates />
            <StatsSection />
        </div>
    );
}