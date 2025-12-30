// src/lib/fakeData/syndicateSpaceMock.js

export const MOCK_SYNDICATE = {
    id: "test-id",
    name: "Syndicat des Développeurs Testeurs",
    shortName: "SDT",
    description: "Un syndicat fictif pour tester l'interface utilisateur sans backend.",
    memberCount: 142,
    bannerUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    logoUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?auto=format&fit=crop&w=300&q=80",
    address: "123 Rue du Code, TechVille",
    type: "PROFESSIONNEL",
    branches: [
        { id: "branch-1", name: "Siège Principal" },
        { id: "branch-2", name: "Antenne Nord" }
    ],
    permissions: ["ADMIN"] // Simule un admin
};

export const MOCK_MEMBERS = [
    { userId: "1", userName: "Alice Dev", role: "ROLE_PRESIDENT", status: "ACTIVE", userAvatarUrl: "https://i.pravatar.cc/150?img=1" },
    { userId: "2", userName: "Bob Coder", role: "ROLE_SECRETARY", status: "ACTIVE", userAvatarUrl: "https://i.pravatar.cc/150?img=3" },
    { userId: "3", userName: "Charlie Design", role: "ROLE_MEMBER", status: "PENDING", userAvatarUrl: "https://i.pravatar.cc/150?img=11" },
    { userId: "4", userName: "David Test", role: "ROLE_MEMBER", status: "ACTIVE", userAvatarUrl: null }, // Test sans avatar
];

export const MOCK_REQUESTS = [
    { userId: "99", userName: "Eve Newbie", requestTimestamp: new Date().toISOString(), motivation: "Je veux rejoindre pour apprendre.", userAvatarUrl: "https://i.pravatar.cc/150?img=5" }
];

export const MOCK_EVENTS = [
    {
        id: "evt-1",
        title: "Assemblée Générale 2025",
        description: "Réunion annuelle pour discuter des objectifs.",
        startDate: new Date("2025-06-15T09:00:00"),
        endDate: new Date("2025-06-15T17:00:00"),
        location: "Salle de conférence A",
        participants: [{ name: "Alice" }, { name: "Bob" }],
        author: { name: "Admin", profileImage: null },
        createdAt: new Date()
    },
    {
        id: "evt-2",
        title: "Atelier React",
        description: "Formation sur les hooks.",
        startDate: new Date("2025-07-20T14:00:00"),
        endDate: new Date("2025-07-20T16:00:00"),
        location: "En ligne",
        participants: [],
        author: { name: "Alice Dev", profileImage: "https://i.pravatar.cc/150?img=1" },
        createdAt: new Date()
    }
];

export const MOCK_POSTS = [
    {
        postId: "post-1",
        content: "Bienvenue sur notre nouvel espace numérique !",
        author: { name: "Alice Dev", avatar: "https://i.pravatar.cc/150?img=1", role: "Présidente" },
        syndicate: { name: "SDT", verified: true },
        createdAt: new Date().toISOString(),
        likes: 42,
        comments: [
            { id: 1, author: { name: "Bob", avatar: "https://i.pravatar.cc/150?img=3" }, content: "Super initiative !", likes: 2, replies: [] }
        ],
        shares: 5
    }
];

export const MOCK_CHATS = [
    {
        id: 'general',
        name: 'Général',
        description: 'Discussion générale',
        type: 'GENERAL',
        isPrivate: false,
        memberCount: 142,
        unreadCount: 3,
        lastMessageAt: new Date().toISOString(),
        lastMessagePreview: 'Alice: Bonjour tout le monde !',
        hasNotifications: true
    },
    {
        id: 'bureau',
        name: 'Bureau Exécutif',
        description: 'Privé',
        type: 'PRIVATE',
        isPrivate: true,
        memberCount: 5,
        unreadCount: 0,
        lastMessageAt: new Date(Date.now() - 86400000).toISOString(),
        lastMessagePreview: 'Réunion demain à 10h',
    }
];


export const MOCK_VOTES = [
    {
        id: "vote-1",
        title: "Élection du nouveau trésorier",
        description: "Veuillez choisir votre candidat préféré pour le poste de trésorier.",
        type: "ELECTION",
        closingDate: new Date(Date.now() + 86400000 * 5).toISOString(), // Dans 5 jours
        votesFor: 15,
        votesAgainst: 0,
        totalVotes: 37,
        status: "OPEN"
    },
    {
        id: "vote-2",
        title: "Approbation du budget 2025",
        description: "Votez pour ou contre le budget prévisionnel présenté lors de l'AG.",
        type: "REFERENDUM",
        closingDate: new Date(Date.now() - 86400000).toISOString(), // Hier
        votesFor: 45,
        votesAgainst: 5,
        totalVotes: 50,
        status: "CLOSED"
    }
];