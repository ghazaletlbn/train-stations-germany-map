import type {StationApiResponse, StationsApiResponse} from "../types/api/station-api.types.ts";
import type {Station} from "../types/domain/station.types.ts";


export const mapStationFromApi = (apiStation: StationApiResponse): Station => ({
    id: apiStation.id,
    name: apiStation.name,
    city: apiStation.city,
    coordinates: {
        lat: apiStation.lat,
        lng: apiStation.lng,
    },
});

export const mapStationsFromApi = (
    apiStations: StationsApiResponse
): Station[] => apiStations.map(mapStationFromApi);
