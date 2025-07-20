import { HeroSection } from '@/components/landing/HeroSection'; // Assurez-vous que l'import est correct
import { FeaturesSection } from '@/components/landing/FeaturesSection'; // Assurez-vous que l'import est correct
import { ActivityFeed } from '@/components/landing/ActivityFeed'; // Assurez-vous que l'import est correct
import { PopularSyndicates } from '@/components/landing/PopularSyndicates'; // Assurez-vous que l'import est correct
import { StatsSection } from '@/components/landing/StatsSection'; // Assurez-vous que l'import est correct
import { getTranslations } from 'next-intl/server';

export default async function LandingPage() {
    // Chargez les traductions pour chaque section/namespace
    const tHero = await getTranslations('heroComponent');
    const tFeatures = await getTranslations('featuresSection');
    const tActivity = await getTranslations('activityFeed');
    const tPopular = await getTranslations('popularSyndicates');
    const tStats = await getTranslations('statsSection');

    // Préparez les données pour le HeroSection comme vous le faisiez
    const heroData = {
        title_part1: tHero('title_part1'),
        title_highlighted: tHero('title_highlighted'),
        subtitle: tHero('subtitle'),
        cta_main: tHero('cta_main'),
        cta_secondary: tHero('cta_secondary'),
        image_alt: tHero('image_alt')
    };

    return (
        <div className="scroll-smooth">
            {/* Passez les données ou la fonction de traduction à chaque composant */}
            <HeroSection heroData={heroData} />
            <FeaturesSection t={tFeatures} />
            <ActivityFeed t={tActivity} />
            <PopularSyndicates t={tPopular} />
            <StatsSection t={tStats} />
        </div>
    );
}