"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function ProfileMap({ antennes = [] }) {
    const validAntennes = antennes.filter(a => a.latitude != null && a.longitude != null);
    
    if (validAntennes.length === 0) {
        return <div>Aucune antenne géolocalisée.</div>;
    }
    
    const bounds = L.latLngBounds(validAntennes.map(a => [a.latitude, a.longitude]));
    const center = bounds.getCenter();
    
    return (
        <MapContainer
            center={center}
            bounds={bounds}
            style={{ height: '400px', width: '100%' }}
            className="rounded-lg"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {validAntennes.map((office) => (
                <Marker
                    key={office.id}
                    position={[office.latitude, office.longitude]}
                    icon={customIcon}
                >
                    <Tooltip>{office.name}</Tooltip>
                    <Popup>
                        <div>{office.name}</div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}