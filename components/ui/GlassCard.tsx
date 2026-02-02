import { cn } from '@/lib/ utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                "bg-slate-900/40 backdrop-blur-xl border border-white/10",
                hoverEffect && "hover:bg-slate-800/60 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}