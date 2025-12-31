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
    permissions: ["ADMIN"]
};

export const MOCK_MEMBERS = [
    {
        userId: "1",
        userName: "Alice Dev",
        role: "ROLE_PRESIDENT",
        status: "ACTIVE",
        userAvatarUrl: "https://i.pravatar.cc/150?img=1",
        email: "alice.dev@example.com",
        phone: "+237 699 00 11 22",

        documents: {
            cniFront: "https://images.unsplash.com/photo-1563225534-1c6674392693?w=500&q=80", // Image type carte
            cniBack: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
            licenseFront: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80",
            licenseBack: "https://images.unsplash.com/photo-1534612450893-b67ff9676e8a?w=500&q=80"
        }
    },
    {
        userId: "2",
        userName: "Bob Coder",
        role: "ROLE_SECRETARY",
        status: "ACTIVE",
        userAvatarUrl: "https://i.pravatar.cc/150?img=3",
        email: "bob.coder@example.com",
        phone: "+237 677 33 44 55",
        documents: {
            cniFront: null, // Test sans document
            cniBack: null,
            licenseFront: null,
            licenseBack: null
        }
    },
    {
        userId: "3",
        userName: "Charlie Design",
        role: "ROLE_MEMBER",
        status: "PENDING",
        userAvatarUrl: "https://i.pravatar.cc/150?img=11",
        email: "charlie.design@example.com",
        phone: "+237 655 66 77 88",
        documents: {
            cniFront: "https://images.unsplash.com/photo-1563225534-1c6674392693?w=500&q=80", // Image type carte
            cniBack: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
            licenseFront: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80",
            licenseBack: "https://images.unsplash.com/photo-1534612450893-b67ff9676e8a?w=500&q=80"
        }
    },
    {
        userId: "4",
        userName: "David Test",
        role: "ROLE_MEMBER",
        status: "ACTIVE",
        userAvatarUrl: null,
        email: "david.test@example.com", phone: "+237 690 99 88 77",
        documents: {
            cniFront: "https://images.unsplash.com/photo-1563225534-1c6674392693?w=500&q=80", // Image type carte
            cniBack: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
            licenseFront: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80",
            licenseBack: "https://images.unsplash.com/photo-1534612450893-b67ff9676e8a?w=500&q=80"
        }
    },


];



export const MOCK_REQUESTS = [
    { userId: "99", userName: "Eve Newbie", requestTimestamp: new Date().toISOString(), motivation: "Je veux rejoindre pour apprendre.", userAvatarUrl: "https://i.pravatar.cc/150?img=5" }
];

export const MOCK_EVENTS = [
    {
        id: "evt-1",
        title: "Assemblée Générale Annuelle",
        description: "Rejoignez-nous pour notre Assemblée Générale Annuelle où nous discuterons des réalisations de l'année écoulée et planifierons l'avenir de notre syndicat. C'est l'occasion idéale pour faire entendre votre voix et voter pour les prochaines initiatives stratégiques.",
        startDate: "2023-06-15T09:00:00",
        endDate: "2023-06-15T17:00:00",
        location: "Salle de conférence principale, 123 Rue du Syndicat",
        participants: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }, { name: "David" }],
        author: {
            name: "Marie Dupont",
            profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80",
        createdAt: "2023-06-01T10:00:00",
        isUpcoming: true,
        likes: 24,
        comments: 5
    },
    {
        id: "evt-2",
        title: "Atelier Formation Syndicale",
        description: "Une session intensive pour comprendre vos droits et devoirs en tant que membre actif. Au programme : négociation, cadre légal et ateliers pratiques.",
        startDate: "2025-07-20T14:00:00",
        endDate: "2025-07-20T16:00:00",
        location: "Centre de formation, Salle B",
        participants: [{ name: "Alice" }, { name: "Paul" }],
        author: {
            name: "Jean Martin",
            profileImage: "https://i.pravatar.cc/150?img=12"
        },
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
        createdAt: "2025-06-20T09:00:00",
        isUpcoming: true,
        likes: 12,
        comments: 2
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

export const MOCK_MESSAGES = {
    'general': [
        {
            id: 'msg-1',
            content: "Bienvenue à tous dans le nouvel espace numérique !",
            sender: { id: '2', name: "Bob Coder", avatar: "https://i.pravatar.cc/150?img=3" },
            sentAt: new Date(Date.now() - 86400000).toISOString(), // Hier
            isMe: false
        },
        {
            id: 'msg-2',
            content: "Merci Bob ! C'est super fluide.",
            sender: { id: '3', name: "Charlie Design", avatar: "https://i.pravatar.cc/150?img=11" },
            sentAt: new Date(Date.now() - 3600000).toISOString(), // Il y a 1h
            isMe: false
        }
    ],
    'bureau': [
        {
            id: 'msg-3',
            content: "On maintient la réunion de demain ?",
            sender: { id: '2', name: "Bob Coder", avatar: "https://i.pravatar.cc/150?img=3" },
            sentAt: new Date(Date.now() - 7200000).toISOString(),
            isMe: false
        }
    ]
};