"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Users, Building, MessageSquare, Calendar, BarChart3, Heart, Share2, Clock, MapPin, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Floating animated shapes component
function FloatingShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Cercles animés */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Petits points lumineux */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 12}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                    }}
                />
            ))}
        </div>
    );
}

// Hero Section Component
function HeroSection() {
    const t = useTranslations('heroComponent');

    return (
        <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

            <FloatingShapes />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

            <div className="container relative mx-auto px-4 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-blue-100">Plateforme de gestion syndicale #1</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                                {t('title_part1')}{' '}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                        {t('title_highlighted')}
                                    </span>
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    />
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {t('subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <motion.button
                                        className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {t('cta_main')}
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                </Link>
                                <Link href="/explorer">
                                    <motion.button
                                        className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="flex items-center">
                                            {t('cta_secondary')}
                                            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold"
                                            >
                                                {i}K
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-blue-200 ml-2">+50K membres actifs</span>
                                </div>
                                <div className="h-6 w-px bg-white/20 hidden sm:block" />
                                <div className="flex items-center gap-2 text-sm text-blue-200">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span>Sécurisé & Fiable</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex-1 max-w-2xl z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: -10 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

                            {/* Main image with decorative frame */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt={t('image_alt')}
                                    width={1350}
                                    height={900}
                                    className="rounded-xl shadow-2xl"
                                    priority
                                />

                                {/* Floating card 1 */}
                                <motion.div
                                    className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Nouveaux membres</p>
                                            <p className="text-lg font-bold text-gray-800">+2,847</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating card 2 */}
                                <motion.div
                                    className="absolute -right-6 bottom-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.4, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Événements ce mois</p>
                                            <p className="text-lg font-bold text-gray-800">127</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
                </svg>
            </div>
        </section>
    );
}

// Features Section Component
function FeaturesSection() {
    const t = useTranslations('landing_page');
    const features = [
        {
            icon: Shield,
            title: t('feature_security_title'),
            description: t('feature_security_desc'),
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50"
        },
        {
            icon: Users,
            title: t('feature_members_title'),
            description: t('feature_members_desc'),
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            icon: Building,
            title: t('feature_governance_title'),
            description: t('feature_governance_desc'),
            gradient: "from-violet-500 to-purple-600",
            bgGradient: "from-violet-50 to-purple-50"
        },
        {
            icon: MessageSquare,
            title: t('feature_communication_title'),
            description: t('feature_communication_desc'),
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            icon: Calendar,
            title: t('feature_events_title'),
            description: t('feature_events_desc'),
            gradient: "from-pink-500 to-rose-600",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            icon: BarChart3,
            title: t('feature_analytics_title'),
            description: t('feature_analytics_desc'),
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-50 to-blue-50"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container relative mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        Fonctionnalités
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {t('features_section_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('features_section_subtitle')}
                    </p>
                </motion.div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
                        >
                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                                    {feature.description}
                                </p>

                                {/* Arrow indicator on hover */}
                                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-sm">En savoir plus</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
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
                                    <div className="w-3 h-3 bg-blue-700 rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                )}
                                <span>•</span>
                                <span>{activity.timestamp}</span>
                                {isEvent && (
                                    <>
                                        <span>•</span>
                                        <span className="text-blue-700 font-medium">{t('event_label')}</span>
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
                            <div className="w-4 h-4 bg-blue-700 rounded-full flex items-center justify-center mr-1">
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
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('like_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('comment_button')}</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors flex-1">
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('share_button')}</span>
                        </button>
                        {isEvent && (
                            <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ml-2">
                                {t('participate_button')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ActivityFeed() {
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

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            {value}{suffix}
        </motion.span>
    );
}

// Stats Section Component
function StatsSection() {
    const t = useTranslations('landing_page');
    const stats = [
        { label: t('stats_syndicates'), value: "1,500", suffix: "+", icon: Building },
        { label: t('stats_members'), value: "50,000", suffix: "+", icon: Users },
        { label: t('stats_satisfaction'), value: "98", suffix: "%", icon: Heart },
        { label: t('stats_events'), value: "3,200", suffix: "+", icon: Calendar }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

            {/* Animated background shapes */}
            <motion.div
                className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container relative mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-white/10">
                        Nos Chiffres
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('stats_section_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
                        {t('stats_section_subtitle')}
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Icon background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Value */}
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </h3>

                            {/* Label */}
                            <p className="text-blue-200 font-medium">{stat.label}</p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500" />
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