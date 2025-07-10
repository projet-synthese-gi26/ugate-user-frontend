// src/lib/fakeData.js

import { Award, Bell, Calendar, Compass, Home, MessageCircle, Settings, Users, Zap } from 'lucide-react';

export const fakePublications = [
    {
        id: "pub_1",
        author: { name: "Jean Dupont", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
        content: "Aujourd'hui, nous avons eu une réunion productive sur les nouvelles mesures de sécurité. Qu'en pensez-vous ?",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
        timestamp: "Il y a 2 heures",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        likes: 15,
        comments: [
            { author: { name: "Marie Martin", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" }, content: "Excellente initiative ! J'ai hâte de voir les résultats." },
            { author: { name: "Luc Dubois", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" }, content: "Pouvons-nous avoir plus de détails sur ces mesures ?" }
        ],
        syndicat: { name: "Syndicat des Travailleurs de l'Industrie" }
    },
    {
        id: "pub_2",
        author: { name: "Sophie Lefebvre", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
        content: "Rappel : la formation sur les nouveaux outils de communication aura lieu demain à 14h. N'oubliez pas de vous inscrire !",
        timestamp: "Il y a 5 heures",
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
        likes: 8,
        comments: [],
        syndicat: { name: "Syndicat de l'Éducation Nationale" }
    },
    // ... Ajoutez d'autres publications si nécessaire
];

export const fakeEvents = [
    {
        id: "evt_1",
        title: "Assemblée Générale Annuelle",
        description: "Rejoignez-nous pour notre Assemblée Générale Annuelle où nous discuterons des réalisations de l'année écoulée et planifierons l'avenir de notre syndicat. Votre voix compte !",
        location: "Salle de conférence principale",
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Dans 5 jours
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 8h plus tard
        author: { name: "Marie Dupont", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
        image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&h=600&fit=crop",
        isUpcoming: true,
        participants: [
            { name: "Jean Dupont" }, { name: "Marie Curie" }, { name: "Pierre Martin" }, { name: "Sophie Lefebvre" }
        ],
        syndicat: { name: "Syndicat des Travailleurs de l'Industrie" }
    },
    {
        id: "evt_2",
        title: "Formation sur les Droits du Travail",
        description: "Ne manquez pas notre session de formation intensive sur les dernières mises à jour des lois du travail. Un expert juridique sera présent pour répondre à toutes vos questions.",
        location: "Salle de formation B",
        startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000),
        author: { name: "Pierre Martin", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop",
        isUpcoming: true,
        participants: [{ name: "Lucie Moreau" }, { name: "Thomas Bernard" }, { name: "Camille Roux" }],
        syndicat: { name: "Syndicat de l'Éducation Nationale" }
    },
    // ... Ajoutez d'autres événements si nécessaire
];

export const antennesData = [
    { id: 1, nom: 'Antenne de Yaoundé', localisation: 'Yaoundé, Centre', membres: 1250, specialites: ['Administration', 'Services Publics', 'Informatique'], responsable: 'M. Onana', telephone: '699 88 77 66', email: 'yaounde@syndic.com' },
    { id: 2, nom: 'Antenne de Douala', localisation: 'Douala, Littoral', membres: 2300, specialites: ['Commerce', 'Industrie', 'Transport'], responsable: 'Mme. Ekoa', telephone: '677 66 55 44', email: 'douala@syndic.com' },
    { id: 3, nom: 'Antenne de Garoua', localisation: 'Garoua, Nord', membres: 800, specialites: ['Agriculture', 'Élevage', 'Artisanat'], responsable: 'M. Bello', telephone: '655 44 33 22', email: 'garoua@syndic.com' },
    { id: 4, nom: 'Antenne de Bafoussam', localisation: 'Bafoussam, Ouest', membres: 1500, specialites: ['Agriculture', 'Commerce', 'Tourisme'], responsable: 'M. Kamdem', telephone: '666 55 44 33', email: 'bafoussam@syndic.com' },
];

export const syndicatsData = [
    { id: 1, name: "Syndicat National de l'Éducation" },
    { id: 2, name: "Union des Travailleurs de la Santé" },
    { id: 3, name: "Fédération des Employés du Commerce" }
];

export const notificationsData = [
    { id: 1, title: "Nouvelle publication", description: "Jean Dupont a publié dans 'Industrie'.", time: "2h", icon: MessageCircle, gradient: "from-blue-400 to-blue-600" },
    { id: 2, title: "Événement à venir", description: "L'Assemblée Générale est dans 5 jours.", time: "1j", icon: Calendar, gradient: "from-green-400 to-green-600" },
    { id: 3, title: "Nouveau membre", description: "Sophie Lefebvre a rejoint votre syndicat.", time: "3j", icon: Users, gradient: "from-purple-400 to-purple-600" },
    { id: 4, title: "Rappel de cotisation", description: "Votre cotisation annuelle arrive à échéance.", time: "1s", icon: Award, gradient: "from-yellow-400 to-yellow-600" }
];