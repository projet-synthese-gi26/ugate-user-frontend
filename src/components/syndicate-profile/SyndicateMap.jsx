"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction pour les icônes Leaflet qui ne s'affichent pas par défaut dans Next.js
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function SyndicateMap({ positions = [] }) {
  // Position par défaut sur le Cameroun si aucune position n'est fournie
  const defaultCenter = [3.848, 11.502]; 

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-inner border border-gray-100">
      <MapContainer center={defaultCenter} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {/* Exemple de marqueur - À dynamiser avec tes données */}
        <Marker position={defaultCenter} icon={icon}>
          <Popup>Siège social du Syndicat</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}