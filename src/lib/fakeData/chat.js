export const FAKE_CHATS = [
    {
        id: "general",
        name: "Général - SNTR",
        type: "GROUP",
        isGroup: true,
        avatar: null, // Utilisera l'icône de groupe par défaut
        lastMessage: "Pierre: N'oubliez pas la réunion de demain !",
        lastMessageTime: "10:30",
        lastMessageAt: new Date().toISOString(),
        unreadCount: 3,
        memberCount: 154
    },
    {
        id: "bureau",
        name: "Bureau Exécutif",
        type: "GROUP",
        isGroup: true,
        avatar: null,
        lastMessage: "Document validé.",
        lastMessageTime: "Hier",
        lastMessageAt: new Date(Date.now() - 86400000).toISOString(),
        unreadCount: 0,
        memberCount: 8
    },
    {
        id: "dm-1",
        name: "Marie Dubois",
        type: "PRIVATE",
        isGroup: false,
        avatar: "https://i.pravatar.cc/150?u=marie",
        online: true,
        lastMessage: "Je t'envoie le dossier ce soir.",
        lastMessageTime: "09:15",
        lastMessageAt: new Date().toISOString(),
        unreadCount: 1
    }
];

export const FAKE_MESSAGES = {
    "general": [
        {
            id: 1,
            text: "Bonjour à tous, bienvenue dans le nouveau canal de communication !",
            sender: { name: "Admin", avatar: null },
            time: "Hier 10:00",
            sentAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
            id: 2,
            text: "Merci ! C'est beaucoup plus moderne.",
            sender: { name: "Jean", avatar: "https://i.pravatar.cc/150?u=jean" },
            time: "Hier 10:05",
            sentAt: new Date(Date.now() - 86000000).toISOString()
        },
        {
            id: 3,
            text: "N'oubliez pas la réunion de demain !",
            sender: { name: "Pierre", avatar: "https://i.pravatar.cc/150?u=pierre" },
            time: "10:30",
            sentAt: new Date().toISOString()
        }
    ]
};