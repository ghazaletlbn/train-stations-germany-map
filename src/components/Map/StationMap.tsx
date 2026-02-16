import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type {Station} from '../../types/domain/station.types';

// --- Fix for default marker icon in React-Leaflet ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {MapController} from "./MapController.tsx";
import {UI_CONFIG} from "../../constants/ui.constants.ts";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// ----------------------------------------------------

interface StationMapProps {
    stations: Station[];
    selectedStation: Station | null;
}

export const StationMap: React.FC<StationMapProps> = ({stations, selectedStation}) => {
    return (
        <MapContainer
            center={UI_CONFIG.MAP.DEFAULT_CENTER}
            zoom={UI_CONFIG.MAP.DEFAULT_ZOOM}
            style={{height: "100%", width: "100%"}}
            className="z-0"
        >
            <TileLayer
                attribution={UI_CONFIG.MAP.TILE_LAYER_ATTRIBUTION}
                url={UI_CONFIG.MAP.TILE_LAYER_URL}
            />

            <MapController selectedStation={selectedStation}/>

            {stations.map((station) => (
                <Marker
                    key={station.id}
                    position={[station.coordinates.lat, station.coordinates.lng]}
                >
                    <Popup>
                        <strong>{station.name}</strong><br/>
                        {station.city}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};