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
        image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: 75.99,
    },
    {
        id: 2,
        name: "GPS Professionnel",
        description: "Système de navigation avancé pour les chauffeurs professionnels.",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3700e8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: 199.99,
    },
    {
        id: 3,
        name: "Uniforme Officiel",
        description: "Tenue professionnelle aux couleurs du syndicat.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: 89.99,
    },
];

// Données pour la section "S'exprimer" (le fil d'actualité)
export const fakePublications = [
    {
        id: 1,
        author: { 
            name: "Jean Dupont", 
            avatar: "https://i.pravatar.cc/150?img=60"
        },
        content: "Aujourd'hui, nous avons eu une réunion productive sur les nouvelles mesures de sécurité. Qu'en pensez-vous ?\nLes points clés abordés étaient :\n- La formation continue\n- L'équipement de protection individuel\n- Les horaires de repos",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        timestamp: "Il y a 2 heures",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // il y a 2h
        likes: 15,
        comments: [
            { id: 101, author: { name: "Marie Martin", avatar: "https://i.pravatar.cc/150?img=25" }, content: "Excellente initiative ! J'ai hâte de voir les résultats.", replies: [] },
            { id: 102, author: { name: "Luc Dubois", avatar: "https://i.pravatar.cc/150?img=53" }, content: "Pouvons-nous avoir plus de détails sur ces mesures ?", replies: [] }
        ]
    },
    {
        id: 2,
        author: { 
            name: "Sophie Lefebvre", 
            avatar: "https://i.pravatar.cc/150?img=27"
        },
        content: "Rappel : la formation sur les nouveaux outils de communication aura lieu demain à 14h. N'oubliez pas de vous inscrire !",
        image: null,
        timestamp: "Il y a 5 heures",
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // il y a 5h
        likes: 8,
        comments: []
    }
];

    export const fakeEvents = [
    {
        id: 1, title: "Assemblée Générale Annuelle", description: "Rejoignez-nous pour discuter des réalisations de l'année et planifier l'avenir. Votre voix compte !", location: "Salle de conférence principale", startDate: "2024-06-15T09:00:00", endDate: "2024-06-15T17:00:00", author: { name: "Marie Dupont", profileImage: "https://i.pravatar.cc/150?img=25" }, images: ["https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&h=600&fit=crop"], isUpcoming: true, participants: [{ name: "Jean Dupont" }, { name: "Pierre Martin" }]
    },
    {
        id: 2, title: "Formation sur les Droits du Travail", description: "Ne manquez pas notre session intensive sur les dernières mises à jour des lois du travail.", location: "Salle de formation B", startDate: "2024-07-10T14:00:00", endDate: "2024-07-10T18:00:00", author: { name: "Pierre Martin", profileImage: "https://i.pravatar.cc/150?img=60" }, images: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop"], isUpcoming: true, participants: [{ name: "Lucie Moreau" }]
    },
    {
        id: 3, title: "Barbecue Annuel du Syndicat", description: "C'est l'heure de notre barbecue annuel ! Venez vous détendre et rencontrer vos collègues.", location: "Parc Municipal", startDate: "2023-08-05T12:00:00", endDate: "2023-08-05T20:00:00", author: { name: "Sophie Lefebvre", profileImage: "https://i.pravatar.cc/150?img=27" }, images: ["https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=600&fit=crop"], isUpcoming: false, participants: [{ name: "Antoine Dubois" }, { name: "Émilie Lambert" }]
    },

];