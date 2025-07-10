
import { Compass, Home, Settings, Users } from "lucide-react";

export const navItems = [
    { id: "dashboard", icon: Home, label: "Accueil", gradient: "from-blue-500 to-indigo-600", description: "Actualité", route: "/home" },
    { id: "syndicats", icon: Users, label: "Mes Syndicats", gradient: "from-green-500 to-teal-600", description: "Gérer vos organisations", route: "/syndicats" },
    { id: "explorer", icon: Compass, label: "Explorer", gradient: "from-purple-500 to-pink-600", description: "Découvrir de nouveaux syndicats", route: "/explorer" },
    { id: "parametres", icon: Settings, label: "Paramètres", gradient: "from-gray-500 to-slate-600", description: "Configuration du compte", route: "/parametres" },
];