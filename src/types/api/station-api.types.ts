
export interface StationApiResponse {
    id: number;
    name: string;
    city: string;
    lat: number;
    lng: number;
}

export type StationsApiResponse = StationApiResponse[];
