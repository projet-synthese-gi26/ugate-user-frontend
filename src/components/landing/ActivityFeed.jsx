"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getGlobalFeedAPI } from '@/lib/api/feed';
import { getAllSyndicatesAPI } from '@/lib/api/syndicate';
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

            // Essayer de récupérer le feed global (publications + événements)
            const globalFeed = await getGlobalFeedAPI(0, 5, 'createdAt', 'desc');
            
            if (globalFeed && globalFeed.content && globalFeed.content.length > 0) {
                // Convertir les données du feed en format attendu
                const convertedActivities = globalFeed.content.map((item) => ({
                    ...item,
                    type: item.eventId ? 'event' : 'publication', // Détecter si c'est un événement ou une publication
                    id: item.postId || item.eventId || item.id
                }));
                
                setActivities(convertedActivities);
            } else {
                // Si pas de données, utiliser les fake data
                console.log('Aucune donnée réelle trouvée, utilisation des données factices');
                setActivities(fakeActivities);
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
                    {loading ? (
                        // Skeleton loading
                        [...Array(3)].map((_, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                <div className="p-6 border-b border-slate-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                                    <div className="h-80 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        ))
                    ) : activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <UnifiedPostCard 
                                    item={activity}
                                    type={activity.type}
                                    variant="landing"
                                    showActions={false} // Pas d'actions interactives sur la landing page
                                />
                            </motion.div>
                        ))
                    ) : (
                        // Message d'erreur ou pas de données
                        <div className="text-center py-12">
                            <p className="text-slate-600 text-lg">
                                {error ? 'Erreur lors du chargement des activités' : 'Aucune activité disponible pour le moment'}
                            </p>
                        </div>
                    )}
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