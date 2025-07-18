"use client";

import { motion } from "framer-motion";
import { Heart, Share2, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ActivityFeed() {
    const activities = [
        {
            id: 1,
            syndicate: "Syndicat National des Enseignants",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            content: "Nous avons organisé une formation sur les nouveaux outils numériques pour l'enseignement. Plus de 200 enseignants ont participé à cette initiative.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
            timestamp: "Il y a 2 heures",
            likes: 156,
            comments: 23
        },
        {
            id: 2,
            syndicate: "Syndicat des Transporteurs",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            content: "Forum sur la Sécurité Routière - Rejoignez-nous le 25 Mars au Palais des Congrès pour une journée de discussions sur l'amélioration de la sécurité routière.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
            timestamp: "Il y a 4 heures",
            likes: 89,
            comments: 15,
            event: true
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Fil d'actualité des syndicats
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Restez informé des dernières actualités et événements de la communauté syndicale
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6 border-b border-slate-100">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src={activity.avatar}
                                            alt={activity.syndicate}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{activity.syndicate}</h3>
                                            <div className="flex items-center text-slate-500 text-sm">
                                                <Clock className="h-4 w-4 mr-1" />
                                                {activity.timestamp}
                                            </div>
                                        </div>
                                    </div>
                                    {activity.event && (
                                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                            Événement
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-slate-700 mb-4 leading-relaxed">{activity.content}</p>
                                
                                <div className="rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={activity.image}
                                        alt="Publication"
                                        width={800}
                                        height={400}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                                <div className="flex items-center space-x-6">
                                    <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                                        <Heart className="h-5 w-5" />
                                        <span className="text-sm font-medium">{activity.likes}</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors">
                                        <MessageSquare className="h-5 w-5" />
                                        <span className="text-sm font-medium">{activity.comments}</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors">
                                        <Share2 className="h-5 w-5" />
                                        <span className="text-sm">Partager</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}