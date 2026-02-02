"use client";

import { useState, useEffect, use } from 'react';
import { ugateApi } from '@/lib/axios';
import { MemberResponse } from '@/lib/types/api';
import MemberSidebar from '@/components/dashboard/MemberSidebar';
import { Loader2, Search, User, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import {cn} from "@/lib/ utils";

export default function MembersPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [members, setMembers] = useState<MemberResponse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await ugateApi.get(`/admin/syndicates/${id}/members`);
                setMembers(res.data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        };
        fetchMembers();
    }, [id]);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MemberSidebar syndicateId={id} />
            <main >
                <div className="max-w-5xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Membres de l'antenne</h1>
                        <p className="text-slate-500 font-medium">Communauté active de votre branche syndicale.</p>
                    </header>

                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                        {loading ? (
                            <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary-800" /></div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                    <th className="px-8 py-5">Membre</th>
                                    <th className="px-8 py-5">Rôle</th>
                                    <th className="px-8 py-5">Date d'adhésion</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                {members.map((m) => (
                                    <tr key={m.userId} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold border border-white shadow-sm overflow-hidden">
                                                    {m.profileImageUrl ? <img src={m.profileImageUrl} /> : m.firstName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{m.firstName} {m.lastName}</div>
                                                    <div className="text-xs text-slate-400">{m.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <Badge className={cn(
                                                "border-none px-3 py-1 font-black text-[10px]",
                                                m.role === 'ADMIN' ? "bg-primary-800 text-white" : "bg-slate-100 text-slate-600"
                                            )}>
                                                {m.role}
                                            </Badge>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-slate-500 font-medium">
                                            {new Date(m.joinedAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}