import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/ utils'; // On créera cet utilitaire juste après

// Définition des variantes et des styles avec CVA (Class Variance Authority)
const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
    {
        variants: {
            variant: {
                primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20',
                secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-100',
                outline: 'border-2 border-slate-300 text-slate-700 hover:bg-slate-100',
                ghost: 'hover:bg-slate-100 hover:text-slate-900',
                destructive: 'bg-red-500 text-white hover:bg-red-600',
                link: 'text-primary-600 underline-offset-4 hover:underline',
            },
            size: {
                sm: 'h-9 px-4',
                md: 'h-11 px-6 py-3',
                lg: 'h-12 px-8 text-base',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };