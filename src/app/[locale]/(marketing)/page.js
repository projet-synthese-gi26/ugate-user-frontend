import { HeroSection, FeaturesSection, StatsSection } from '@/components/landing/ModernLandingPage';
import ActivityFeed from '@/components/landing/ActivityFeed';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import {getTranslations} from 'next-intl/server';

export default async function LandingPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();

    const heroData = {
        title_part1: t('heroComponent.title_part1'),
        title_highlighted: t('heroComponent.title_highlighted'),
        subtitle: t('heroComponent.subtitle'),
        cta_main: t('heroComponent.cta_main'),
        cta_secondary: t('heroComponent.cta_secondary'),
        image_alt: t('heroComponent.image_alt')
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