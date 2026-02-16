
export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Station {
    id: number;
    name: string;
    city: string;
    coordinates: Coordinates;
}

export interface StationFilter {
    city?: string;
    searchQuery?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiError {
    message: string;
    code?: string;
    timestamp?: string;
}
