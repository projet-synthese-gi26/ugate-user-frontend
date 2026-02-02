import { cn } from "@/lib/ utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    const variants = {
        default: "bg-primary-500/20 text-primary-400 border-primary-500/20",
        success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
        warning: "bg-amber-500/20 text-amber-400 border-amber-500/20",
        error: "bg-red-500/20 text-red-400 border-red-500/20",
        outline: "bg-transparent text-slate-400 border-slate-700"
    };

    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}