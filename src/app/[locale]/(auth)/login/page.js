
import LoginAside from "@/components/auth/LoginAside";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";
import {getTranslations} from 'next-intl/server';
import { Link } from '@/navigation';

export default async function LoginPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations();

    const animatedTexts = [
        t("login_page.welcome_message"),
        t("login_page.tagline_1"),
        t("login_page.tagline_2"),
        t("login_page.tagline_3"),
        t("login_page.tagline_4")
    ];

    return (
        <div className="min-h-screen flex bg-white">
            <LoginAside animatedTexts={animatedTexts} />

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        {t("login_page.title")}
                    </h2>

                    <LoginForm />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-4">{t("login_page.or_with")}</p>
                        <SocialLogins />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            {t("login_page.no_account")}{' '}
                            <Link href="/register" className="text-blue-500 hover:underline">
                                {t("login_page.register_here")}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}