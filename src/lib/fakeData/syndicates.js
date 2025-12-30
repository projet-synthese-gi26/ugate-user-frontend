export const FAKE_SYNDICATES = [
    {
        id: "syn-1",
        name: "Syndicat National des Transporteurs (SNTR)",
        shortName: "SNTR",
        description: "Le SNTR œuvre pour l'amélioration des conditions de travail des transporteurs routiers, la sécurité sur les routes et la modernisation de la flotte nationale.",
        type: "TRANSPORT",
        bannerUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        logoUrl: null, // Utilisera l'avatar par défaut
        memberCount: 15420,
        foundedDate: "1998-05-12",
        address: "Zone Industrielle, Douala",
        email: "contact@sntr-cam.org",
        website_url: "www.sntr-cam.org",
        phone: "+237 699 00 00 00",
        social_network: "@sntr_officiel",
        certified: true,
        rating: 4.8,
        branches: [
            { id: 1, name: "Siège Douala", latitude: 4.0511, longitude: 9.7679 },
            { id: 2, name: "Antenne Yaoundé", latitude: 3.8480, longitude: 11.5021 }
        ],
        members: [
            { userId: "u1", userName: "Jean Dupont", role: "ROLE_PRESIDENT", userAvatarUrl: null },
            { userId: "u2", userName: "Marie Claire", role: "ROLE_SECRETARY", userAvatarUrl: "https://i.pravatar.cc/150?u=marie" }
        ]
    },
    {
        id: "syn-2",
        name: "Fédération des Enseignants du Secondaire (FES)",
        shortName: "FES",
        description: "Défense des droits des enseignants, promotion de l'éducation de qualité et formation continue pour tous les professeurs du secondaire.",
        type: "EDUCATION",
        bannerUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        logoUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        memberCount: 8500,
        foundedDate: "2005-09-01",
        address: "Quartier Bastos, Yaoundé",
        certified: true,
        rating: 4.5,
        branches: [
            { id: 3, name: "Siège Yaoundé", latitude: 3.8480, longitude: 11.5021 }
        ],
        members: []
    },
    {
        id: "syn-3",
        name: "Union des Médecins Libéraux",
        shortName: "UML",
        description: "Regroupement des médecins exerçant en clientèle privée pour la défense de leurs intérêts professionnels et moraux.",
        type: "SANTE",
        bannerUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        logoUrl: null,
        memberCount: 3200,
        foundedDate: "2010-02-20",
        address: "Bonanjo, Douala",
        certified: false,
        rating: 4.2,
        branches: [],
        members: []
    }
];