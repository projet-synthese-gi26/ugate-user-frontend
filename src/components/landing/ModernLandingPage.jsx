"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, Building, MessageSquare, Calendar, BarChart3, Heart, Share2, Clock, MapPin, MessageCircle } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Hero Section Component
export function HeroSection() {
    const t = useTranslations('heroComponent');
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 text-white py-24 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {t('title_part1')}{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    {t('title_highlighted')}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                                {t('subtitle')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <motion.button
                                        className="bg-gradient-to-r from-blue-900 to-blue-950 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {t('cta_main')}
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </motion.button>
                                </Link>
                                <Link href="/explorer">
                                    <motion.button
                                        className="border border-slate-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {t('cta_secondary')}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt={t('image_alt')}
                                width={1350}
                                height={900}
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Features Section Component
export function FeaturesSection() {
    const t = useTranslations('landing_page');
    const features = [
        {
            icon: Shield,
            title: t('feature_security_title'),
            description: t('feature_security_desc')
        },
        {
            icon: Users,
            title: t('feature_members_title'),
            description: t('feature_members_desc')
        },
        {
            icon: Building,
            title: t('feature_governance_title'),
            description: t('feature_governance_desc')
        },
        {
            icon: MessageSquare,
            title: t('feature_communication_title'),
            description: t('feature_communication_desc')
        },
        {
            icon: Calendar,
            title: t('feature_events_title'),
            description: t('feature_events_desc')
        },
        {
            icon: BarChart3,
            title: t('feature_analytics_title'),
            description: t('feature_analytics_desc')
        }
    ];

    return (
        <section className="py-20 bg-slate-50 relative">
            {/* Ligne de séparation décorative */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('features_section_title')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {t('features_section_subtitle')}
                    </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-900"
                        >
                            <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6">
                                <feature.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Activity Feed Component
function ActivityCard({ activity, index }) {
    const isEvent = activity.type === 'event';
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="p-4 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Image
                                src={activity.author.avatar}
                                alt={activity.author.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-slate-900 text-sm">{activity.author.name}</h3>
                                <span className="text-slate-500 text-xs">•</span>
                                <span className="text-slate-600 text-xs">{activity.author.role}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500 text-xs">
                                <span>{activity.syndicate.name}</span>
                                {activity.syndicate.verified && (
                                    <div className="w-3 h-3 bg-blue-900 rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                )}
                                <span>•</span>
                                <span>{activity.timestamp}</span>
                                {isEvent && (
                                    <>
                                        <span>•</span>
                                        <span className="text-blue-900 font-medium">{t('event_label')}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="px-4 pb-0">
                <p className="text-slate-900 text-sm leading-relaxed mb-3">{activity.content}</p>
                
                {isEvent && activity.event && (
                    <div className="mb-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 mb-2 text-sm">{activity.event.title}</h4>
                        <div className="flex flex-wrap items-center text-indigo-700 text-xs gap-3">
                            <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {activity.event.date}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {activity.event.location}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {activity.event.participants} {t('participants')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {activity.image && (
                <div className="px-0 pb-0">
                    <div className="relative overflow-hidden">
                        <Image
                            src={activity.image}
                            alt="Publication"
                            width={800}
                            height={400}
                            className="w-full h-80 object-cover cursor-pointer hover:opacity-95 transition-opacity duration-200"
                        />
                    </div>
                </div>
            )}

            {/* Reactions summary */}
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-slate-500 text-xs">
                    <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-900 rounded-full flex items-center justify-center mr-1">
                                <Heart className="w-2 h-2 text-white fill-current" />
                            </div>
                            <span>{activity.likes}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>{activity.comments} {t('comments')}</span>
                        <span>{activity.shares} {t('shares')}</span>
                    </div>
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="px-4 py-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-full">
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('like_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('comment_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('share_button')}</span>
                        </button>
                        {isEvent && (
                            <button className="bg-gradient-to-r from-blue-900 to-blue-950 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-800 hover:to-blue-900 transition-all duration-300 ml-2">
                                {t('participate_button')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ActivityFeed() {
    const t = useTranslations('landing_page');
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
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
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
        }
    ];

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

                <div className="max-w-4xl mx-auto space-y-8">
                    {activities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        {t('view_more_news')}
                    </button>
                </div>
            </div>
        </section>
    );
}

// Stats Section Component
export function StatsSection() {
    const t = useTranslations('landing_page');
    const stats = [
        { label: t('stats_syndicates'), value: "1,500+" },
        { label: t('stats_members'), value: "50,000+" },
        { label: t('stats_satisfaction'), value: "98%" },
        { label: t('stats_events'), value: "3,200+" }
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('stats_section_title')}
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        {t('stats_section_subtitle')}
                    </p>
                </div>
                
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Main Landing Page Component
export default function ModernLandingPage() {
    return (
        <div className="scroll-smooth">
            <HeroSection />
            <FeaturesSection />
            <ActivityFeed />
            <StatsSection />
        </div>
    );
}

// Export des composants individuels pour réutilisation
export { HeroSection, FeaturesSection, ActivityFeed, StatsSection };