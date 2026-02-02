"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { toast } from 'react-hot-toast';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Link } from '@/navigation';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { LoginSchema, LoginInput } from '@/lib/schemas';
import { authApi } from '@/lib/axios';
import { useAuthStore } from '@/lib/store';

// NOTE: Plus d'import de AuthLayout ici !

export default function LoginPage() {
    const t = useTranslations('Auth');
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit = async (data: LoginInput) => {
        setIsLoading(true);
        try {
            const response = await authApi.post('/api/auth/login', data);
            login(response.data);
            toast.success(t('login_success'));
            router.push('/dashboard'); // Redirection vers le futur dashboard
        } catch (error: any) {
            toast.error(error.response?.data?.message || t('login_error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* En-tête du formulaire */}
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                    {t('login_title')}
                </h1>
                <p className="text-slate-400">
                    {t('login_subtitle')}
                </p>
            </div>

            {/* Le Formulaire */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <Label htmlFor="identifier">{t('email_label')}</Label>
                    <Input
                        id="identifier"
                        type="text"
                        placeholder="email@example.com"
                        icon={Mail}
                        error={errors.identifier && t('errors.required')}
                        {...register('identifier')}
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="password" classname="mb-0">{t('password_label')}</Label>
                        <Link href="/forgot-password" classname="text-xs text-primary-400 hover:text-primary-300 transition-colors">
                            {t('forgot_password')}
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        icon={Lock}
                        error={errors.password && t('errors.required')}
                        {...register('password')}
                    />
                </div>

                <Button type="submit" className="w-full h-12 text-base" size="lg" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    {t('submit_login')}
                </Button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-800" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-navy-950 px-2 text-slate-500">
                            {t('or_continue_with')}
                        </span>
                    </div>
                </div>

                {/* Bouton Social (Exemple) */}
                <button type="button" className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 h-12 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Google
                </button>

                <div className="text-center text-sm text-slate-500 mt-8">
                    {t('no_account')}{' '}
                    <Link href="/register" className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                        {t('submit_register')}
                    </Link>
                </div>
            </form>
        </div>
    );
}