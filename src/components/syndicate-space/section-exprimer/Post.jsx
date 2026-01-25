"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
    Heart, 
    MessageCircle, 
    Share2, 
    MoreHorizontal, 
    Clock,
    User
} from 'lucide-react';
import { SyndicatDefaultAvatar } from '@/components/shared/SyndicatDefaultAvatar';

export default function Post({ post }) {
    const [isLiked, setIsLiked] = useState(false);

    // --- LOGIQUE D'EXTRACTION DES DONNÉES (Basée sur ton JSON Swagger) ---
    const authorName = post.authorFullName || "Utilisateur";
    const content = post.content || "";
    const date = post.createdAt ? new Date(post.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
    }) : "À l'instant";

    // On cherche l'image dans le tableau fileUrlAndType
    const imageInfo = post.fileUrlAndType?.find(file => file.type === "IMAGE");
    const imageUrl = imageInfo?.url;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 w-full"
        >
            {/* 1. HEADER DU POST */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <SyndicatDefaultAvatar name={authorName} size={42} />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">{authorName}</h4>
                        <p className="text-[11px] text-gray-500 flex items-center gap-1">
                            <Clock size={10} /> {date}
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 hover:bg-gray-50 p-2 rounded-full transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* 2. TEXTE DU POST */}
            <div className="px-4 pb-3">
                <p className="text-[15px] text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {content}
                </p>
            </div>

            {/* 3. IMAGE DU POST (Si elle existe) */}
            {imageUrl && (
                <div className="px-4 mb-3">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                        <Image 
                            src={imageUrl} 
                            alt="Illustration de la publication" 
                            fill 
                            className="object-cover"
                            unoptimized // Pour éviter les timeouts sur ton PC
                        />
                    </div>
                </div>
            )}

            {/* 4. COMPTEURS (Likes / Comments) */}
            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-white">
                            <Heart size={10} className="text-white fill-current" />
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">{post.nlikes || 0} réactions</span>
                </div>
                <div className="text-xs text-gray-500">
                    {post.ncomments || 0} commentaires
                </div>
            </div>

            {/* 5. ACTIONS SOCIALES */}
            <div className="px-2 py-1 flex items-center justify-between">
                <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex-1 py-2 flex items-center justify-center gap-2 rounded-lg transition-colors ${isLiked ? 'text-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Heart size={18} className={isLiked ? "fill-current" : ""} />
                    <span className="text-sm">J'aime</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm">Commenter</span>
                </button>

                <button className="flex-1 py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm">Partager</span>
                </button>
            </div>
        </motion.div>
    );
}