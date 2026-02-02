import * as React from 'react';
import { cn } from '@/lib/ utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon: Icon, error, ...props }, ref) => {
        return (
            <div className="relative group w-full">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary-600 pointer-events-none">
                        <Icon size={18} />
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        // Base styles
                        "flex h-12 w-full rounded-2xl border px-4 py-2 text-sm transition-all duration-300 outline-none",

                        // Couleurs (Light Mode Premium)
                        "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400",

                        // Focus states
                        "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10",

                        // Disabled state
                        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500",

                        // Icon padding
                        Icon && "pl-11",

                        // Error state
                        error && "border-red-300 focus:border-red-500 focus:ring-red-500/10",

                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <span className="text-xs text-red-500 mt-1.5 ml-1 block font-medium">{error}</span>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };