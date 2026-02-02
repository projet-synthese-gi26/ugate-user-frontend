import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Ici on utilise la Navbar existante, elle doit gérer le mode connecté */}

            {children}
        </div>
    );
}