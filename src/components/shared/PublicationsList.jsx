
import PublicationCard from "./PublicationCard";

const publicationsData = [
    {
        id: 1,
        author: {
            name: "Syndicat National des Transporteurs Routiers du Cameroun",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        },
        content: "Nous sommes heureux d'annoncer que suite à nos négociations...",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        timestamp: "Il y a 2 heures",
        likes: 245,
        comments: 37,
    },
    // ... autres publications
];


export default function PublicationsList({ limit = 3, publications = publicationsData }) {
    return (
        <div className="space-y-6">
            {publications.slice(0, limit).map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
            ))}
        </div>
    );
}