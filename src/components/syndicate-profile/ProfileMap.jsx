"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// =================================================================
// CORRECTION APPLIQUÉE CI-DESSOUS
// =================================================================

// On supprime les anciens imports d'images car ils ne sont pas fiables avec les bundlers modernes.
// import iconMarker from 'leaflet/dist/images/marker-icon.png';
// import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// On "répare" la configuration par défaut de l'icône de Leaflet.
// Cela garantit que la librairie sait où trouver ses propres images.
// C'est la méthode la plus robuste et recommandée.
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});
// =================================================================
// FIN DE LA CORRECTION
// =================================================================


export default function ProfileMap({ antennes = [] }) {
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);
    
    if (validAntennes.length === 0) {
        return <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">Aucune antenne géolocalisée.</p>;
    }

    // Le reste du composant n'a pas besoin de changer, car la configuration par défaut est maintenant correcte.
    const bounds = L.latLngBounds(validAntennes.map(a => [a.latitude, a.longitude]));
    const center = bounds.getCenter();

    return (
        <MapContainer center={center} zoom={6} bounds={bounds.pad(0.1)} scrollWheelZoom={false} className="h-[350px] w-full rounded-lg z-0">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {validAntennes.map((office) => (
                <Marker key={office.id} position={[office.latitude, office.longitude]}>
                    <Tooltip>{office.name}</Tooltip>
                    <Popup><div className="font-semibold">{office.name}</div></Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}