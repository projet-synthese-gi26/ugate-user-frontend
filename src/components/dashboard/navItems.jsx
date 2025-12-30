import { Compass, Home } from "lucide-react";
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
            id: "explorer",
            icon: Compass,
            label: t('explorer.label'),
            gradient: "from-purple-500 to-pink-600",
            description: t('explorer.description'),
            route: "/explorer"
        }
    ];
};
