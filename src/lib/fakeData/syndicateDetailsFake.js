// src/lib/fakeData/syndicateDetailsFake.js

// Données pour la section "Équipe Directrice"
export const fakeMembers = [
    { id: 1, name: "Marie Dubois", role: "Présidente", avatar: "https://i.pravatar.cc/150?img=25" },
    { id: 2, name: "Pierre Martin", role: "Secrétaire Général", avatar: "https://i.pravatar.cc/150?img=60" },
    { id: 3, name: "Sophie Lefebvre", role: "Trésorière", avatar: "https://i.pravatar.cc/150?img=27" },
    { id: 4, name: "Lucas Moreau", role: "Responsable Communication", avatar: "https://i.pravatar.cc/150?img=53" },
    { id: 5, name: "Camille Rousseau", role: "Déléguée Régionale", avatar: "https://i.pravatar.cc/150?img=33" },
    { id: 6, name: "Thomas Bernard", role: "Responsable Juridique", avatar: "https://i.pravatar.cc/150?img=12" },
];

// Données pour la section "Activités Récentes"
export const fakeActivities = [
    {
        id: 1,
        title: "Assemblée Générale Annuelle",
        date: "15 Juin 2024",
        type: "Événement",
        image: "https://images.unsplash.com/photo-1559829604-549c5c1a3a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 2,
        title: "Négociations tarifaires avec la Mairie",
        date: "22 Mai 2024",
        type: "Négociation",
        image: "https://images.unsplash.com/photo-1517436073-3b1b3d72b6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 3,
        title: "Campagne pour l'amélioration des conditions",
        date: "01 Mai 2024",
        type: "Campagne",
        image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 4,
        title: "Formation sur les nouvelles réglementations",
        date: "10 Avril 2024",
        type: "Formation",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
];

// Données pour la section "Nos Services"
export const fakeServices = [
    {
        id: 1,
        name: "Assistance Juridique",
        description: "Consultation et représentation légale pour les membres du syndicat.",
    },
    {
        id: 2,
        name: "Formation Continue",
        description: "Programmes pour améliorer les compétences et la sécurité.",
    },
    {
        id: 3,
        name: "Médiation Professionnelle",
        description: "Aide à la résolution de conflits entre membres et employeurs.",
    },
    {
        id: 4,
        name: "Centrale d'achats",
        description: "Accès à des tarifs préférentiels sur l'équipement professionnel.",
    }
];

// Données pour la section "Boutique"
export const fakeProducts = [
    {
        id: 1,
        name: "Kit de Sécurité Routière",
        description: "Ensemble complet d'équipements de sécurité pour votre véhicule.",
        price: 75.99,
    },
    {
        id: 2,
        name: "GPS Professionnel",
        description: "Système de navigation avancé pour les chauffeurs professionnels.",
        price: 199.99,
    },
    {
        id: 3,
        name: "Uniforme Officiel",
        description: "Tenue professionnelle aux couleurs du syndicat.",
        price: 89.99,
    },
];