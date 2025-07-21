"use client";

import { motion } from 'framer-motion';
import { Clock, Heart, MessageCircle, Share2, Users, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const activities = [
    {
        id: 1,
        type: 'publication',
        author: {
            name: "Marie Dubois",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            role: "Secrétaire Générale"
        },
        syndicate: {
            name: "Syndicat National des Enseignants",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Nous avons organisé une formation sur les nouveaux outils numériques pour l'enseignement. Plus de 200 enseignants ont participé à cette initiative.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
        timestamp: "Il y a 2 heures",
        likes: 156,
        comments: 23,
        shares: 12
    },
    {
        id: 2,
        type: 'event',
        author: {
            name: "Jean-Pierre Martin",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            role: "Président"
        },
        syndicate: {
            name: "Syndicat des Transporteurs",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        event: {
            title: "Forum sur la Sécurité Routière",
            date: "25 Mars 2025",
            location: "Palais des Congrès, Yaoundé",
            participants: 180
        },
        content: "Rejoignez-nous pour une journée de discussions sur l'amélioration de la sécurité routière. Inscription gratuite pour tous les membres.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
        timestamp: "Il y a 4 heures",
        likes: 89,
        comments: 15,
        shares: 8
    },
    {
        id: 3,
        type: 'publication',
        author: {
            name: "Sophie Kameni",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            role: "Déléguée Régionale"
        },
        syndicate: {
            name: "Syndicat des Agents de Santé",
            avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Lancement de notre campagne de vaccination gratuite dans les quartiers défavorisés. Nos équipes médicales seront présentes dans 15 centres de santé communautaires.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
        timestamp: "Il y a 6 heures",
        likes: 234,
        comments: 31,
        shares: 18
    },
    {
        id: 4,
        type: 'event',
        author: {
            name: "Paul Ngono",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            role: "Coordinateur"
        },
        syndicate: {
            name: "Syndicat des Agriculteurs",
            avatar: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        event: {
            title: "Salon de l'Agriculture Moderne",
            date: "15 Avril 2025",
            location: "Centre Expo, Douala",
            participants: 350
        },
        content: "Découvrez les dernières innovations en matière d'agriculture durable et de techniques modernes. Rencontrez des experts et échangez avec vos pairs.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop",
        timestamp: "Il y a 8 heures",
        likes: 127,
        comments: 22,
        shares: 14
    },
    {
        id: 5,
        type: 'publication',
        author: {
            name: "Aminata Diallo",
            avatar: "https://images.unsplash.com/photo-1594736797933-d0fb6c025b4e?w=100&h=100&fit=crop&crop=face",
            role: "Présidente"
        },
        syndicate: {
            name: "Syndicat des Commerçants",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            verified: true
        },
        content: "Félicitations à nos membres qui ont remporté le prix de la meilleure coopérative de l'année ! Leurs efforts pour promouvoir le commerce équitable sont remarquables.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=400&fit=crop",
        timestamp: "Il y a 1 jour",
        likes: 178,
        comments: 19,
        shares: 9
    }
];

function ActivityCard({ activity, index }) {
    const t = useTranslations('landing_page');
    const isEvent = activity.type === 'event';
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image
                                src={activity.author.avatar}
                                alt={activity.author.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            {activity.syndicate.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 text-base">{activity.author.name}</h3>
                                <span className="text-slate-500 text-sm">•</span>
                                <span className="text-slate-600 text-sm">{activity.author.role}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 text-sm">
                                <span>{activity.syndicate.name}</span>
                                <span>•</span>
                                <Clock className="h-4 w-4" />
                                <span>{activity.timestamp}</span>
                            </div>
                        </div>
                    </div>
                    {isEvent && (
                        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            {t('event_label')}
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6">
                {isEvent && activity.event && (
                    <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 mb-2">{activity.event.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 text-sm gap-4">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {activity.event.date}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {activity.event.location}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {activity.event.participants} {t('participants')}
                            </div>
                        </div>
                    </div>
                )}
                
                <p className="text-slate-700 mb-4 leading-relaxed text-base">{activity.content}</p>
                
                {activity.image && (
                    <div className="-mx-6 mb-4">
                        <Image
                            src={activity.image}
                            alt="Publication"
                            width={800}
                            height={400}
                            className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors">
                            <Share2 className="h-5 w-5" />
                            <span className="text-base font-medium">{activity.shares}</span>
                        </button>
                    </div>
                    {isEvent && (
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                            Participer
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ActivityFeed() {
    const t = useTranslations('landing_page');
    
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('activity_feed_title')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {t('activity_feed_subtitle')}
                    </p>
                </div>

                <div className="max-w-xl mx-auto space-y-6">
                    {activities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="group relative bg-blue-800 text-white px-14 py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 shadow-md transform hover:scale-105">
                        <span className="flex items-center space-x-3">
                            <span>{t('view_more_news')}</span>
                            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-blue-700 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-slate-600 mt-4 text-sm">
                        {t('stay_connected_message')}
                    </p>
                </div>
            </div>
        </section>
    );
}