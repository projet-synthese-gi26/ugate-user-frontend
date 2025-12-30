export const FAKE_FEED = [
    {
        id: "post-1",
        type: "publication",
        content: "Grande victoire pour notre syndicat ! Nous avons obtenu une revalorisation de 5% sur les grilles tarifaires après les négociations d'hier. Merci à tous pour votre soutien indéfectible.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // Il y a 2 heures
        author: {
            name: "Pierre Kouassi",
            role: "Secrétaire Général",
            avatar: "https://i.pravatar.cc/150?u=pierre"
        },
        syndicate: {
            id: "syn-1",
            name: "Syndicat National des Transporteurs",
            verified: true
        },
        likes: 124,
        comments: 45,
        shares: 12,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
        id: "event-1",
        type: "event",
        title: "Assemblée Générale Ordinaire 2025",
        description: "Convocation de tous les membres pour l'assemblée générale annuelle. Ordre du jour : Bilan financier, élection du bureau, perspectives 2026.",
        location: "Palais des Congrès, Yaoundé",
        startDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(), // Dans 5 jours
        endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 60 * 60 * 4).toISOString(),
        isUpcoming: true,
        author: {
            name: "Secrétariat SNTR",
            avatar: null
        },
        syndicate: {
            id: "syn-1",
            name: "Syndicat National des Transporteurs",
            verified: true
        },
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        participants: [
            { name: "Paul" }, { name: "Jacques" }, { name: "Marie" }, { name: "Aminata" }
        ]
    },
    {
        id: "post-2",
        type: "publication",
        content: "Rappel : La date limite pour le paiement des cotisations du premier trimestre est fixée au 31 mars. Pensez à régulariser votre situation via l'onglet Finances.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // Hier
        author: {
            name: "Sophie Mengue",
            role: "Trésorière",
            avatar: "https://i.pravatar.cc/150?u=sophie"
        },
        syndicate: {
            id: "syn-2",
            name: "Fédération des Enseignants",
            verified: true
        },
        likes: 56,
        comments: 12,
        shares: 2
    }
];