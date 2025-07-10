
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ClientMotionWrapper } from '@/components/shared/ClientMotionWrapper';
import PublicationsList from '@/components/shared/PublicationsList';
import EventsList from '@/components/shared/EventsList';

const t = (key) => key.replace(/_/g, ' '); // Placeholder

export default function NewsAndEvents() {
    return (
        <ClientMotionWrapper delay={0.8} className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
                    {t("actualites_et_evenements")}
                </h2>
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">
                            {t("publications_recentes")}
                        </h3>
                        <PublicationsList limit={2} />
                        <div className="text-center mt-6">
                            <Link href="/publications" className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white px-6 py-2 rounded-full font-semibold inline-flex items-center transition duration-300 hover:opacity-90 shadow-md">
                                {t("voir_plus_de_publications")}
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">
                            {t("evenements_a_venir")}
                        </h3>
                        <EventsList limit={1} />
                        <div className="text-center mt-6">
                            <Link href="/events" className="bg-gradient-to-r from-[#6BAED6] to-indigo-700 text-white px-6 py-2 rounded-full font-semibold inline-flex items-center transition duration-300 hover:opacity-90 shadow-md">
                                {t("voir_plus_d_evenements")}
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ClientMotionWrapper>
    );
}