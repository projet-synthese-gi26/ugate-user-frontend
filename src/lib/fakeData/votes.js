export const FAKE_VOTES = [
    {
        id: 1,
        title: "Adoption du nouveau règlement intérieur",
        description: "Votez pour ou contre la modification de l'article 12 concernant les cotisations exceptionnelles.",
        status: "OPEN",
        closingDate: new Date(Date.now() + 86400000 * 3).toISOString(), // +3 jours
        votesFor: 45,
        votesAgainst: 12,
        votesAbstain: 5,
        userVoted: null // ou 'for', 'against', 'abstain'
    },
    {
        id: 2,
        title: "Élection du délégué régional",
        description: "Choisissez votre représentant pour la région du Littoral.",
        status: "CLOSED",
        closingDate: new Date(Date.now() - 86400000).toISOString(),
        votesFor: 120,
        votesAgainst: 80,
        votesAbstain: 10,
        userVoted: 'for'
    }
];