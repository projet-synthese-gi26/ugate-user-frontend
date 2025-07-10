
import SyndicateCard from "./SyndicateCard";

export default function SyndicateList({ syndicats }) {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {syndicats.map((syndicat) => (
                <SyndicateCard key={syndicat.id} syndicat={syndicat} />
            ))}
        </div>
    );
}