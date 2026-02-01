
import LandingPageHeader from '@/components/layout/LandingPageHeader';
import LandingPageFooter from '@/components/layout/LandingPageFooter';

export default function MarketingLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <LandingPageHeader />
            <main className="flex-grow">{children}</main>
            <LandingPageFooter />
        </div>
    );
}