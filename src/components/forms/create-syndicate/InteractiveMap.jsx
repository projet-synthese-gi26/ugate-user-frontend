// src/components/forms/create-syndicate/InteractiveMap.jsx
"use client";

import { useState, useEffect } from "react";
import { Loader2 } from 'lucide-react';

export default function InteractiveMap({ onLocationSelect, selectedLocation, height = "400px" }) {
    const [isMapReady, setIsMapReady] = useState(false);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'locationSelected') {
                onLocationSelect({ lat: event.data.lat, lng: event.data.lng });
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onLocationSelect]);

    const mapHTML = `
        <!DOCTYPE html><html><head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <style>body{margin:0}#map{height:100vh}</style></head>
        <body><div id="map"></div><script>
        var map = L.map('map').setView([3.848, 11.502], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        var marker=null;
        map.on('click',function(e){var lat=e.latlng.lat;var lng=e.latlng.lng;if(marker){map.removeLayer(marker);}marker=L.marker([lat,lng]).addTo(map);window.parent.postMessage({type:'locationSelected',lat:lat,lng:lng},'*');});
        ${selectedLocation ? `marker=L.marker([${selectedLocation.lat},${selectedLocation.lng}]).addTo(map);map.setView([${selectedLocation.lat},${selectedLocation.lng}],10);` : ''}
        </script></body></html>`;

    return (
        <div className="relative w-full rounded-xl overflow-hidden border-2 border-dashed border-blue-300 bg-blue-50" style={{ height }}>
            <iframe srcDoc={mapHTML} className="w-full h-full border-0" onLoad={() => setIsMapReady(true)} title="Carte interactive" />
            {!isMapReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded-xl">
                    <div className="text-center"><Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" /><p>Chargement...</p></div>
                </div>
            )}
        </div>
    );
};