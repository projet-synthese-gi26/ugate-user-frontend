export const FAKE_MEMBERS = [
    {
        userId: "1",
        userName: "Thomas Nkono",
        userAvatarUrl: "https://i.pravatar.cc/150?u=thomas",
        role: "ROLE_PRESIDENT",
        status: "ACTIVE",
        joinDate: "2020-01-15"
    },
    {
        userId: "2",
        userName: "Sarah Biya",
        userAvatarUrl: "https://i.pravatar.cc/150?u=sarah",
        role: "ROLE_TREASURER",
        status: "ACTIVE",
        joinDate: "2020-02-20"
    },
    {
        userId: "3",
        userName: "Michel Tagne",
        userAvatarUrl: null, // Avatar par défaut
        role: "ROLE_MEMBER",
        status: "ACTIVE",
        joinDate: "2021-05-10"
    },
    {
        userId: "4",
        userName: "Esther Mballa",
        userAvatarUrl: "https://i.pravatar.cc/150?u=esther",
        role: "ROLE_MEMBER",
        status: "SUSPENDED",
        joinDate: "2022-11-05"
    }
];

export const FAKE_REQUESTS = [
    {
        userId: "101",
        userName: "Alain Prost",
        userAvatarUrl: null,
        requestTimestamp: new Date().toISOString(),
        motivation: "Je souhaite rejoindre le syndicat pour défendre nos droits.",
        status: "PENDING"
    },
    {
        userId: "102",
        userName: "Céline Dion",
        userAvatarUrl: "https://i.pravatar.cc/150?u=celine",
        requestTimestamp: new Date(Date.now() - 86400000).toISOString(),
        motivation: "Nouveau chauffeur dans la région, je veux m'affilier.",
        status: "PENDING"
    }
];