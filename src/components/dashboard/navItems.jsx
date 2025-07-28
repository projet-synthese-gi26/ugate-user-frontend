import { Compass, Home, Settings, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export const getNavItems = () => {
    const t = useTranslations('dashboard.nav_items');

    return [
        {
            id: "dashboard",
            icon: Home,
            label: t('dashboard.label'),
            gradient: "from-blue-700 to-blue-800",
            description: t('dashboard.description'),
            route: "/home"
        },
        {
            id: "syndicats",
            icon: Users,
            label: t('syndicats.label'),
            gradient: "from-green-500 to-teal-600",
            description: t('syndicats.description'),
            route: "/syndicats"
        },
        {
            id: "explorer",
            icon: Compass,
            label: t('explorer.label'),
            gradient: "from-purple-500 to-pink-600",
            description: t('explorer.description'),
            route: "/explorer"
        },
        {
            id: "parametres",
            icon: Settings,
            label: t('parametres.label'),
            gradient: "from-gray-500 to-slate-600",
            description: t('parametres.description'),
            route: "/parametres"
        }
    ];
};
