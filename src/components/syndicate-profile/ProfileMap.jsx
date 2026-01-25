"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes Leaflet dans Next.js
const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function ProfileMap({ antennes = [] }) {
    // Position par défaut (Cameroun / Yaoundé)
    const center = [3.848, 11.502];

    return (
        <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-inner mt-4">
            <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Version "Light" de la carte pour rester dans le design blanc
                    attribution='&copy; OpenStreetMap contributors'
                />
                
                {/* Exemple de marqueur - À dynamiser avec syndicate.branches */}
                <Marker position={center} icon={customIcon}>
                    <Popup>Siège National</Popup>
                </Marker>

                {antennes?.map((antenne, idx) => (
                    antenne.lat && antenne.lng && (
                        <Marker key={idx} position={[antenne.lat, antenne.lng]} icon={customIcon}>
                            <Popup>{antenne.name}</Popup>
                        </Marker>
                    )
                ))}
            </MapContainer>
        </div>
    );
}