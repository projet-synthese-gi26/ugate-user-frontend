"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getRecentPublicPostsAPI } from '@/lib/api/posts';
import { getRecentPublicEventsAPI } from '@/lib/api/event';
import UnifiedPostCard from '@/components/shared/UnifiedPostCard';

// Données de fallback (fake data)
const fakeActivities = [
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

export default function ActivityFeed() {
    const t = useTranslations('landing_page');
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les données réelles
    const fetchRealData = async () => {
        try {
            setLoading(true);
            setError(null);

            // Récupérer séparément les publications et événements (max 5 de chaque)
            const [recentPosts, recentEvents] = await Promise.all([
                getRecentPublicPostsAPI(5),
                getRecentPublicEventsAPI(5)
            ]);

            // Convertir les données en format uniforme
            const publications = recentPosts.map(post => ({
                ...post,
                type: 'publication',
                id: post.postId || post.id
            }));

            const events = recentEvents.map(event => ({
                ...event,
                type: 'event',
                id: event.eventId || event.id
            }));

            // Combiner publications et événements
            const allActivities = [...publications, ...events];

            // Si aucune publication ET aucun événement, utiliser fake data
            if (allActivities.length === 0) {
                console.log('Aucune donnée réelle trouvée, utilisation des données factices');
                setActivities(fakeActivities);
            } else {
                // Trier par date de création (les plus récents en premier)
                const sortedActivities = allActivities.sort((a, b) => {
                    const dateA = new Date(a.createdAt || a.startDate);
                    const dateB = new Date(b.createdAt || b.startDate);
                    return dateB - dateA;
                });

                console.log(`Chargement de ${publications.length} publications et ${events.length} événements`);
                setActivities(sortedActivities);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du feed:', error);
            setError(error.message);
            // En cas d'erreur, utiliser les fake data
            setActivities(fakeActivities);
        } finally {
            setLoading(false);
        }
    };

    // Charger les données au montage
    useEffect(() => {
        fetchRealData();
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Actualités
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {t('activity_feed_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('activity_feed_subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-8">
                    {loading ? (
                        // Skeleton loading with improved design
                        [...Array(3)].map((_, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 overflow-hidden animate-pulse border border-slate-100">
                                <div className="p-6 border-b border-slate-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-2 w-32"></div>
                                            <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-48"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-3"></div>
                                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg mb-4 w-3/4"></div>
                                    <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl"></div>
                                </div>
                            </div>
                        ))
                    ) : activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="transform hover:scale-[1.01] transition-transform duration-300"
                            >
                                <UnifiedPostCard
                                    item={activity}
                                    type={activity.type}
                                    variant="landing"
                                    showActions={false}
                                />
                            </motion.div>
                        ))
                    ) : (
                        // Message d'erreur ou pas de données avec meilleur design
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 bg-white rounded-3xl shadow-lg border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <p className="text-slate-600 text-lg font-medium">
                                {error ? 'Erreur lors du chargement des activités' : 'Aucune activité disponible pour le moment'}
                            </p>
                            <p className="text-slate-400 text-sm mt-2">Revenez bientôt pour des nouvelles</p>
                        </motion.div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center space-x-3">
                            <span>{t('view_more_news')}</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                    <p className="text-slate-500 mt-4 text-sm">
                        {t('stay_connected_message')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}