"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { toast } from 'react-hot-toast';
import { Mail, Lock, User, Phone, Loader2 } from 'lucide-react';
import { Link } from '@/navigation';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RegisterSchema, RegisterInput } from '@/lib/schemas';
import { authApi } from '@/lib/axios';

export default function RegisterPage() {
    const t = useTranslations('Auth');
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: zodResolver(RegisterSchema)
    });

    const onSubmit = async (data: RegisterInput) => {
        setIsLoading(true);
        try {
            const apiData = {
                data: {
                    username: data.username,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    password: data.password,
                    service: "SYNDICAT",
                    roles: ["USER"]
                }
            };

            const formData = new FormData();
            formData.append('data', new Blob([JSON.stringify(apiData.data)], { type: 'application/json' }));

            await authApi.post('/api/auth/register', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success(t('register_success'));
            router.push('/login');
        } catch (error: any) {
            toast.error(error.response?.data?.message || t('register_error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{t('register_title')}</h1>
                <p className="text-slate-400">{t('register_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="firstName">{t('firstname_label')}</Label>
                        <Input id="firstName" icon={User} error={errors.firstName?.message} {...register('firstName')} />
                    </div>
                    <div>
                        <Label htmlFor="lastName">{t('lastname_label')}</Label>
                        <Input id="lastName" icon={User} error={errors.lastName?.message} {...register('lastName')} />
                    </div>
                </div>

                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" icon={User} error={errors.username?.message} {...register('username')} />
                </div>

                <div>
                    <Label htmlFor="email">{t('email_label')}</Label>
                    <Input id="email" type="email" icon={Mail} error={errors.email?.message} {...register('email')} />
                </div>

                <div>
                    <Label htmlFor="phone">{t('phone_label')}</Label>
                    <Input id="phone" icon={Phone} error={errors.phone?.message} {...register('phone')} />
                </div>

                <div>
                    <Label htmlFor="password">{t('password_label')}</Label>
                    <Input id="password" type="password" icon={Lock} error={errors.password?.message} {...register('password')} />
                </div>

                <div>
                    <Label htmlFor="confirmPassword">{t('confirm_password_label')}</Label>
                    <Input id="confirmPassword" type="password" icon={Lock} error={errors.confirmPassword?.message} {...register('confirmPassword')} />
                </div>

                <Button type="submit" className="w-full mt-4 h-12" size="lg" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    {t('submit_register')}
                </Button>

                <div className="text-center text-sm text-slate-500 mt-6">
                    {t('already_account')}{' '}
                    <Link href="/login" className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                        {t('submit_login')}
                    </Link>
                </div>
            </form>
        </div>
    );
}