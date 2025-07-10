// src/lib/fakeData/homeFeedFake.js

export const homeFeedFake = [
    {
        id: 1,
        author: {
            name: "Union des Travailleurs de la Santé",
            avatar: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=80&h=80&fit=crop",
        },
        content: "Grande nouvelle ! Suite à nos discussions, une prime de risque exceptionnelle a été validée pour tout le personnel soignant impliqué dans la gestion de la récente épidémie. Votre dévouement est reconnu et récompensé. 💪 #Solidarité #Santé",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=800&fit=crop",
        timestamp: "Il y a 2 heures",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        likes: 256,
        comments: [
            {
                author: { name: "Dr. Marie Claire", avatar: "https://i.pravatar.cc/150?img=25" },
                content: "Enfin une reconnaissance méritée ! Bravo à toute l'équipe de négociation.",
            },
            {
                author: { name: "Alain infirmier", avatar: "https://i.pravatar.cc/150?img=60" },
                content: "Excellente nouvelle pour le moral des troupes. Merci !",
            },
        ],
        syndicat: {
            name: "Santé Publique",
            coverImage: "...",
        },
    },
    {
        id: 2,
        title: "Assemblée Générale Annuelle",
        description: "Ordre du jour : bilan de l'année, élections du nouveau bureau et perspectives 2025. Votre présence est cruciale pour l'avenir de notre syndicat. Un pot de l'amitié clôturera la session.",
        startDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Dans 15 jours
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000 + 3*60*60*1000), // Durée de 3h
        location: "Palais des Congrès, Yaoundé",
        image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&h=600&fit=crop",
        author: {
            name: "Fédération des Artisans",
            avatar: "https://images.unsplash.com/photo-1595821733973-b14a94379b9f?w=80&h=80&fit=crop",
        },
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Posté hier
        likes: 78,
        comments: [
            {
                author: { name: "Paul Menuisier", avatar: "https://i.pravatar.cc/150?img=12" },
                content: "Je serai là ! Impatient de discuter des nouveaux projets.",
            },
        ],
        syndicat: {
            name: "Artisanat",
            coverImage: "...",
        },
    },
    {
        id: 3,
        author: {
            name: "Guilde des Développeurs",
            avatar: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=80&h=80&fit=crop",
        },
        content: "Nous organisons un workshop gratuit sur les nouvelles fonctionnalités de React 19 le mois prochain. Au programme : Actions, useFormState, et bien plus. Places limitées, lien d'inscription en commentaire ! 🚀 #React #Dev",
        image: null, // Publication sans image
        timestamp: "Il y a 1 jour",
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        likes: 112,
        comments: [
            {
                author: { name: "Sophie Frontend", avatar: "https://i.pravatar.cc/150?img=27" },
                content: "Inscrite ! Hâte d'y être.",
            },
        ],
        syndicat: {
            name: "Technologie",
            coverImage: "...",
        },
    },
];