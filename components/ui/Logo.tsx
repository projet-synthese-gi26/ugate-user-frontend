import { Link } from '@/navigation';
import { cn } from '@/lib/ utils'

interface LogoProps {
    className?: string;
    textClassName?: string;
    dark?: boolean; // Pour changer la couleur du texte
}

export function Logo({ className, textClassName, dark = false }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-black text-2xl">U</span>
            </div>
            <span
                className={cn(
                    "text-2xl font-bold tracking-tighter",
                    dark ? "text-slate-900" : "text-white",
                    textClassName
                )}
            >
        U-Gate
      </span>
        </Link>
    );
}