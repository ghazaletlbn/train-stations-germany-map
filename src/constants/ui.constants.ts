export const UI_CONFIG = {
    SEARCH_DEBOUNCE_DELAY_MS: 300,
    MAP: {
        DEFAULT_CENTER: [51.1657, 10.4515] as [number, number], //Germany
        DEFAULT_ZOOM: 6,
        TILE_LAYER_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        TILE_LAYER_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
} as const;