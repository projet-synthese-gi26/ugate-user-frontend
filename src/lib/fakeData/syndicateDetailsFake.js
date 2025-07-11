// src/lib/fakeData/syndicateDetailsFake.js

// Données pour la section "Équipe Directrice" et les membres du syndicat
export const fakeMembers = [
    { id: 1, name: "Marie Dubois", role: "Présidente", avatar: "https://i.pravatar.cc/150?img=25" },
    { id: 2, name: "Pierre Martin", role: "Secrétaire Général", avatar: "https://i.pravatar.cc/150?img=60" },
    { id: 3, name: "Sophie Lefebvre", role: "Trésorière", avatar: "https://i.pravatar.cc/150?img=27" },
    { id: 4, name: "Lucas Moreau", role: "Responsable Communication", avatar: "https://i.pravatar.cc/150?img=53" },
    { id: 5, name: "Camille Rousseau", role: "Déléguée Régionale", avatar: "https://i.pravatar.cc/150?img=33" },
    { id: 6, name: "Thomas Bernard", role: "Responsable Juridique", avatar: "https://i.pravatar.cc/150?img=12" },
];

// Données pour la section "Activités Récentes" du profil syndicat
export const fakeActivities = [
    { id: 1, title: "Assemblée Générale Annuelle", date: "15 Juin 2024", type: "Événement", image: "https://images.unsplash.com/photo-1559829604-549c5c1a3a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 2, title: "Négociations tarifaires", date: "22 Mai 2024", type: "Négociation", image: "https://images.unsplash.com/photo-1517436073-3b1b3d72b6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 3, title: "Campagne de sensibilisation", date: "01 Mai 2024", type: "Campagne", image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { id: 4, title: "Formation réglementaire", date: "10 Avril 2024", type: "Formation", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

// Données pour la section "Nos Services"
export const fakeServices = [
    { id: 1, name: "Assistance Juridique", description: "Consultation et représentation légale pour les membres." },
    { id: 2, name: "Formation Continue", description: "Programmes pour améliorer les compétences et la sécurité." },
    { id: 3, name: "Médiation Professionnelle", description: "Aide à la résolution de conflits entre membres et employeurs." },
    { id: 4, name: "Centrale d'achats", description: "Accès à des tarifs préférentiels sur l'équipement." }
];

// Données pour la section "Boutique"
export const fakeProducts = [
    { id: 1, name: "Kit de Sécurité Routière", description: "Ensemble complet d'équipements de sécurité.", image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", price: 75.99 },
    { id: 2, name: "GPS Professionnel", description: "Système de navigation avancé pour chauffeurs.", image: "https://images.unsplash.com/photo-1581093458791-9f3c3700e8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", price: 199.99 },
    { id: 3, name: "Uniforme Officiel", description: "Tenue professionnelle aux couleurs du syndicat.", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", price: 89.99 },
];

// Données pour la section "S'exprimer" (le fil d'actualité)
export const fakePublications = [
    { id: 1, author: { name: "Jean Dupont", avatar: "https://i.pravatar.cc/150?img=60" }, content: "Réunion productive sur les nouvelles mesures de sécurité.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&q=80&w=800", timestamp: "Il y a 2 heures", createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), likes: 15, comments: [{ id: 101, author: { name: "Marie Martin", avatar: "https://i.pravatar.cc/150?img=25" }, content: "Excellente initiative !", replies: [] }] },
    { id: 2, author: { name: "Sophie Lefebvre", avatar: "https://i.pravatar.cc/150?img=27" }, content: "Rappel : formation sur les nouveaux outils de communication demain à 14h.", image: null, timestamp: "Il y a 5 heures", createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), likes: 8, comments: [] }
];

// Données pour la section "Événements" de l'espace syndicat
export const fakeEvents = [
    { id: 1, title: "Assemblée Générale Annuelle", description: "Rejoignez-nous pour discuter...", location: "Salle de conférence principale", startDate: "2024-06-15T09:00:00", endDate: "2024-06-15T17:00:00", author: { name: "Marie Dubois", profileImage: "https://i.pravatar.cc/150?img=25" }, images: ["https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&h=600&fit=crop"], isUpcoming: true, participants: [{ name: "Jean Dupont" }] },
    { id: 2, title: "Formation sur les Droits du Travail", description: "Ne manquez pas notre session intensive...", location: "Salle de formation B", startDate: "2024-07-10T14:00:00", endDate: "2024-07-10T18:00:00", author: { name: "Pierre Martin", profileImage: "https://i.pravatar.cc/150?img=60" }, images: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop"], isUpcoming: true, participants: [{ name: "Lucie Moreau" }] },
];

// === NOUVELLES DONNÉES POUR LA MESSAGERIE ===

// Liste des conversations existantes
export const fakeChats = [
    { id: 'group-1', name: 'Canal Général', avatar: 'https://i.pravatar.cc/150?u=group1', lastMessage: 'Alice: Bonjour à tous ! N\'oubliez pas la réunion.', lastMessageTime: '10:30', online: true, isGroup: true },
    { id: 2, name: 'Pierre Martin', avatar: 'https://i.pravatar.cc/150?img=60', lastMessage: 'Merci pour l\'information, c\'est noté.', lastMessageTime: '09:45', online: true, phone: '+33 1 23 45 67 89' },
    { id: 3, name: 'Sophie Lefebvre', avatar: 'https://i.pravatar.cc/150?img=27', lastMessage: 'À quelle heure est la réunion de demain ?', lastMessageTime: 'Hier', online: false, phone: '+33 9 87 65 43 21' },
];

// Contenu des messages pour chaque conversation
export const fakeMessages = {
    'group-1': [
        { id: 1, text: 'Bonjour à tous ! N\'oubliez pas la réunion de demain matin.', time: '10:30', sender: 'Marie Dubois', read: true, avatar: 'https://i.pravatar.cc/150?img=25' },
        { id: 2, text: 'Bien reçu, merci Marie !', time: '10:31', sender: 'Vous', read: true, avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 3, text: 'Je serai un peu en retard, je préviens.', time: '10:32', sender: 'Lucas Moreau', read: false, avatar: 'https://i.pravatar.cc/150?img=53' },
    ],
    2: [
        { id: 1, text: 'Salut Pierre, as-tu reçu le document que j\'ai envoyé ?', time: '09:30', sender: 'Vous', read: true },
        { id: 2, text: 'Oui, je l\'ai bien reçu. Merci pour l\'information, c\'est noté.', time: '09:45', sender: 'Pierre Martin', read: true, avatar: 'https://i.pravatar.cc/150?img=60' },
    ],
    3: [
        { id: 1, text: 'Bonjour Sophie, j\'espère que tu vas bien.', time: 'Hier', sender: 'Vous', read: true },
        { id: 2, text: 'Salut ! Ça va bien, merci. À quelle heure est la réunion de demain ?', time: 'Hier', sender: 'Sophie Lefebvre', read: true, avatar: 'https://i.pravatar.cc/150?img=27' },
    ],
};

// Liste de tous les membres du syndicat pour démarrer de nouvelles conversations
export const fakeSyndicateMembers = [
    ...fakeMembers, // On inclut les membres du bureau
    { id: 5, name: "Camille Rousseau", avatar: "https://i.pravatar.cc/150?img=33", online: true, phone: '+33 6 11 22 33 44' },
    { id: 6, name: "Thomas Bernard", avatar: "https://i.pravatar.cc/150?img=12", online: false, phone: '+33 6 55 66 77 88' },
    { id: 7, name: "Nathalie Petit", avatar: "https://i.pravatar.cc/150?img=32", online: true, phone: '+33 6 44 55 66 77' },
];