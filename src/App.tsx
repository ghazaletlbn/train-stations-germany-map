import {useState} from 'react';
import {useStations} from './hooks/useStations';
import {useStationFilter} from './hooks/useStationFilter';
import {StationSidebar} from './components/Station/StationSidebar';
import {StationMap} from './components/Map/StationMap';
import type {Station} from './types/domain/station.types';

function App() {
    const {stations, status, error, refetch} = useStations();
    const {searchTerm, setSearchTerm, filteredStations} = useStationFilter(stations);
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);

    const handleStationSelect = (station: Station) => {
        setSelectedStation(station);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">

            <StationSidebar
                status={status}
                error={error}
                onRetry={refetch}
                stations={filteredStations}
                selectedStationId={selectedStation?.id || null}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onStationSelect={handleStationSelect}
            />

            <div className="flex-1 relative h-[50vh] md:h-full">
                {status === 'success' ? (
                    <StationMap
                        stations={filteredStations}
                        selectedStation={selectedStation}
                    />
                ) : (
                    <div
                        className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
                        Map Placeholder
                    </div>
                )}
            </div>

        </div>
    );
}

export default App;
