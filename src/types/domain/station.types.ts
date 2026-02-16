
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

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

