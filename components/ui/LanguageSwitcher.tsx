"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/navigation"; // ✅ TOUT vient de @/navigation
import { cn } from "@/lib/ utils";

const LANGUAGES = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
];

interface LanguageSwitcherProps {
    variant?: "dark" | "light";
    className?: string;
}

export default function LanguageSwitcher({
                                             variant = "dark",
                                             className,
                                         }: LanguageSwitcherProps) {
    const pathname = usePathname(); // ✅ Retourne "/" sans le préfixe locale
    const router = useRouter();

    // next-intl expose la locale via le routing, pas via pathname.split
    // On la récupère correctement via useLocale
    const onChange = (locale: string) => {
        // pathname est déjà sans préfixe locale (ex: "/" ou "/dashboard")
        // router.replace va construire "/en/", "/fr/dashboard", etc.
        router.replace(pathname, { locale });
    };

    return (
        <Select.Root onValueChange={onChange}>
            <Select.Trigger
                aria-label="Changer la langue"
                className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition-all",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500",
                    variant === "dark"
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                    className
                )}
            >
                <Globe size={14} className="opacity-80" />
                <Select.Value placeholder="Langue" />
                <Select.Icon>
                    <ChevronDown size={14} />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className={cn(
                        "z-[100] min-w-[160px] rounded-xl border shadow-xl overflow-hidden",
                        variant === "dark"
                            ? "bg-slate-900 border-white/10 text-white"
                            : "bg-white border-slate-200 text-slate-900"
                    )}
                >
                    <Select.Viewport className="p-1">
                        {LANGUAGES.map((lang) => (
                            <Select.Item
                                key={lang.code}
                                value={lang.code}
                                className={cn(
                                    "relative flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none",
                                    "data-[highlighted]:bg-primary-500/20 data-[highlighted]:text-primary-400"
                                )}
                            >
                                <Select.ItemText>{lang.label}</Select.ItemText>
                                <Select.ItemIndicator className="absolute right-3">
                                    <Check size={14} />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}