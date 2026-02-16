export const API_CONFIG = {
    STATIONS_URL:
        'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json',
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
} as const;

export const MAP_CONFIG = {
    DEFAULT_CENTER: { lat: 51.1657, lng: 10.4515 }, // Germany center
    DEFAULT_ZOOM: 6,
    MARKER_ZOOM: 12,
} as const;