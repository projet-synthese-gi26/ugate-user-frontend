// src/components/syndicate-profile/ProfileMap.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Configuration de l'icône par défaut de Leaflet pour fonctionner avec Next.js/Webpack
// Sans cela, les icônes du marqueur ne s'affichent pas.
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const iconDefault = L.icon({
    iconRetinaUrl: iconRetina.src,
    iconUrl: iconMarker.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = iconDefault;

/**
 * Affiche une carte interactive avec les localisations des antennes.
 * @param {Array} [antennes=[]] - Le tableau des objets d'antennes.
 */
export default function ProfileMap({ antennes = [] }) {

    // Si aucune antenne n'a de coordonnées, on affiche un message.
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);

    if (validAntennes.length === 0) {
        return <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">Aucune antenne n'a été géolocalisée.</p>;
    }

    // Calcule le centre de la carte en faisant la moyenne des coordonnées.
    // Ou utilise la première antenne comme centre si une seule.
    const bounds = L.latLngBounds(validAntennes.map(a => [a.latitude, a.longitude]));
    const center = bounds.getCenter();

    return (
        // Le conteneur de la carte doit avoir une hauteur définie.
        <MapContainer
            center={center}
            zoom={6}
            bounds={bounds} // Ajuste automatiquement le zoom pour voir toutes les antennes
            scrollWheelZoom={false} // Désactive le zoom à la molette pour une meilleure expérience de scroll de page
            className="h-[350px] w-full rounded-lg z-0" // z-0 est important pour que les contrôles de la carte s'affichent correctement
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {validAntennes.map((office) => (
                <Marker key={office.id || office.name} position={[office.latitude, office.longitude]}>
                    <Tooltip>
                        {office.name}
                    </Tooltip>
                    <Popup>
                        <div className="font-semibold">{office.name}</div>
                        {office.address && <div>{office.address}</div>}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}