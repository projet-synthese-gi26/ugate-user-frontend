"use client";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { Link } from '@/navigation';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";
import { getNavItems } from "./navItems.js";

export default function AppSidebar({ isOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('dashboard.sidebar');
    const navItems = getNavItems();

    const handleLogout = () => {
        router.push('/login');
    };

    const isActive = (route) => pathname.startsWith(route);

    return (
        <motion.nav
            animate={{ width: isOpen ? 256 : 80 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white shadow-xl flex flex-col z-20 h-full"
        >
            <div className="flex-grow overflow-y-auto p-4 space-y-2">
                {navItems.map((item) => (
                    <Link href={item.route} key={item.id} passHref>
                        <motion.div
                            whileHover={{ scale: isOpen ? 1.02 : 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full p-3 rounded-xl transition-all duration-300 group cursor-pointer ${
                                isActive(item.route)
                                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                                    : "bg-white text-gray-600 hover:bg-gray-50"
                            } ${isOpen ? "flex items-center" : "flex justify-center"}`}
                            title={isOpen ? '' : item.label}
                        >
                            <item.icon className={`h-6 w-6 flex-shrink-0 ${isOpen ? "mr-3" : ""}`} />
                            {isOpen && (
                                <div className="text-left overflow-hidden w-full">
                                    <p className="font-semibold truncate">{item.label}</p>
                                    <p className={`text-xs truncate ${isActive(item.route) ? "text-white/80" : "text-gray-500"}`}>{item.description}</p>
                                </div>
                            )}
                        </motion.div>
                    </Link>
                ))}
            </div>
            <div className="p-4 border-t border-gray-100">
                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: isOpen ? 1.02 : 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-lg flex items-center justify-center"
                    title={isOpen ? '' : t("logout")}
                >
                    <LogOut className="h-6 w-6" />
                    {isOpen && <span className="font-medium ml-2">{t("logout")}</span>}
                </motion.button>
            </div>
        </motion.nav>
    );
}
