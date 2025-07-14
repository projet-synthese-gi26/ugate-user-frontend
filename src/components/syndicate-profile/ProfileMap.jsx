"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const iconDefault = L.icon({
    iconRetinaUrl: iconRetina.src, iconUrl: iconMarker.src, shadowUrl: iconShadow.src,
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34],
    tooltipAnchor: [16, -28], shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

export default function ProfileMap({ antennes = [] }) {
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);
    if (validAntennes.length === 0) {
        return <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-8">Aucune antenne géolocalisée.</p>;
    }

    const bounds = L.latLngBounds(validAntennes.map(a => [a.latitude, a.longitude]));
    const center = bounds.getCenter();

    return (
        <MapContainer center={center} zoom={6} bounds={bounds} scrollWheelZoom={false} className="h-[350px] w-full rounded-lg z-0">
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