🚆 Germany Train Stations Map
A React-based interactive web application to visualize and explore German train stations on a Leaflet map with real-time search and filtering capabilities.


🎯 Overview
This application fetches train station data from an API and displays them on an interactive map centered on Germany. Users can search stations by name or city, click on stations to view details, and interact with both the map and sidebar list seamlessly.

✨ Key Features
🗺️ Interactive Leaflet Map - All stations visualized with markers
🔍 Real-time Search - Filter stations by name or city with 300ms debouncing
📍 Station Selection - Click stations to highlight and auto-zoom on map
📱 Responsive Design - Optimized for mobile and desktop
⚡ Performance Optimized - Efficient filtering with React hooks and memoization
🧪 Unit Tested - Critical components tested with Vitest
🛠️ Tech Stack
React 18 with TypeScript
Leaflet + React-Leaflet for interactive maps
Tailwind CSS for styling
Vitest + React Testing Library for testing
Custom Hooks for state management
📂 Project Structure
src/

├── components/

│ ├── Station/

│ │ ├── StationSidebar.tsx # Main container with search & list

│ │ ├── StationSearch.tsx # Search input with clear button

│ │ ├── StationList.tsx # Scrollable station list

│ │ └── StationCard.tsx # Individual station card

│ ├── Map/

│ │ ├── StationMap.tsx # Leaflet map with markers

│ │ └── MapController.tsx # Auto-zoom controller

│ └── UI/

│ ├── LoadingState.tsx # Loading spinner

│ └── ErrorState.tsx # Error display with retry

├── hooks/

│ ├── useStations.ts # Fetch & manage stations data

│ ├── useStationFilter.ts # Search & filter logic

│ └── useDebounce.ts # Debounce utility hook

├── services/

│ └── station.service.ts # API service layer

├── mappers/

│ └── station.mapper.ts # API to domain model mapping

├── types/

│ ├── domain/station.types.ts # Domain types

│ └── api/station-api.types.ts # API response types

├── constants/

│ ├── api.constants.ts # API endpoints

│ └── ui.constants.ts # UI configuration

└── test/

└── setup.ts # Test configuration

🚀 Getting Started
Prerequisites
Node.js 16+
npm or yarn
Installation & Run
bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Testing
bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
📋 Assignment Requirements ✅
[x] Data Fetching - Fetch from GitHub Gist API with loading/error states
[x] Map Visualization - All stations displayed on Leaflet map centered on Germany
[x] Stations List - Display station name and city with filtering
[x] City Filter - Search input filters both list and map markers
[x] Interaction - Clicking station highlights marker and zooms map
[x] Testing - Unit tests for critical components
[x] Clean Code - TypeScript, modular architecture, separation of concerns
[x] Deployment - Ready for Vercel/Netlify deployment
🎨 Features in Detail
Data Fetching & State Management
Custom useStations hook handles API calls
Loading, error, and success states
Retry functionality on error
Type-safe API response mapping
Search & Filter
Debounced search (300ms) for performance
Filters by station name OR city
Real-time updates to both list and map
Clear button for quick reset
Map Interaction
OpenStreetMap tiles
Custom markers for each station
Popup with station info (name, city)
Smooth fly-to animation on selection
Synchronized with sidebar selection
Responsive Design
Mobile: Collapsible sidebar (50vh height)
Desktop: Fixed 400px sidebar, full height
Touch-friendly controls
Smooth transitions and animations
🔧 Configuration
Edit src/constants/ui.constants.ts:

typescript
export const UI_CONFIG = {
    SEARCH_DEBOUNCE_DELAY_MS: 300,
    MAP: {
        DEFAULT_CENTER: [51.1657, 10.4515], // Germany center
        DEFAULT_ZOOM: 6,
        TILE_LAYER_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    }
};
🧪 Testing Strategy
Component Tests: StationSearch interaction and behavior
Custom Hooks: Debounce and filter logic
Integration: User flows and state updates
Coverage: Focus on critical user paths
⚡ Performance Optimizations
Debounced Search: Reduces re-renders during typing
useMemo: Memoized filtered results
useCallback: Stable function references
Efficient Mapping: Single-pass filtering
Code Splitting: Ready for lazy loading
📦 Deployment
The app is deployment-ready for:

Vercel: vercel --prod
Netlify: netlify deploy --prod
GitHub Pages: Configure vite.config.ts base path
📄 API Endpoint
Station data source:

https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json

📝 License
MIT License
