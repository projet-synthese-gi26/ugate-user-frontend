import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import SearchTrigger from '@/components/landing/SearchTrigger';
import PopularSyndicates from '@/components/landing/PopularSyndicates';
import NewsAndEvents from '@/components/landing/NewsAndEvents';
import StatsSection from '@/components/landing/StatsSection';

export default async function LandingPage() {
    return (
        <div className="scroll-smooth">



                <HeroSection />



                <FeaturesSection />



                <SearchTrigger />



                <PopularSyndicates />



                <NewsAndEvents />


                <StatsSection />

        </div>
    );
}