import {useEffect} from 'react';
import {useMap} from 'react-leaflet';
import type {Station} from "../../types/domain/station.types.ts";


interface MapControllerProps {
    selectedStation: Station | null;
}

export const MapController = ({selectedStation}: MapControllerProps) => {
    const map = useMap();

    useEffect(() => {
        if (selectedStation) {
            map.flyTo(
                [selectedStation.coordinates.lat, selectedStation.coordinates.lng],
                13,
                {duration: 1.5}
            );
        }
    }, [selectedStation, map]);

    return null;
};
