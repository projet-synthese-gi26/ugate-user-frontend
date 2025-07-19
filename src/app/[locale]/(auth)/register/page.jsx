
import LoginAside from "@/components/auth/LoginAside";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogins from "@/components/auth/SocialLogins";
import initTranslations from "@/app/i18n";
import Link from 'next/link';

export default async function RegisterPage({ params }) {
    const { locale } = await params;
    const { t } = await initTranslations(locale, ['translation']);

    const animatedTexts = [
        t("register_page.tagline_1"),
        t("register_page.tagline_2"),
        t("register_page.tagline_3"),
        t("register_page.tagline_4")
    ];

    return (
        <div className="min-h-screen flex bg-white">
            <LoginAside animatedTexts={animatedTexts} />

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        {t("register_page.title")}
                    </h2>

                    <RegisterForm />

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-4">{t("register_page.or_with")}</p>
                        <SocialLogins />
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            {t("register_page.already_registered")}{' '}
                            <Link href="/login" className="text-blue-500 hover:underline">
                                {t("register_page.login_here")}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}