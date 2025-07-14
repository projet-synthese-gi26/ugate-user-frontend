"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// =================================================================
// CORRECTION ALTERNATIVE
// =================================================================

// On importe les objets d'image directement
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// On réinitialise la configuration de l'icône par défaut
// Ceci est nécessaire pour s'assurer que nos nouvelles options sont bien prises en compte
// dans certains environnements Next.js / Turbopack
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

// On configure l'icône par défaut en utilisant la propriété .src des objets importés
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

// =================================================================
// FIN DE LA CORRECTION
// =================================================================


export default function ProfileMap({ antennes = [] }) {
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);
    
    if (validAntennes.length === 0) {
        return <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">Aucune antenne géolocalisée.</p>;
    }

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