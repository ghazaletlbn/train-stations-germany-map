import {useStations} from './hooks/useStations';
import {useStationFilter} from './hooks/useStationFilter';
import {StationList} from './components/Station/StationList';
import {StationSearch} from './components/Station/StationSearch';
import {StationMap} from './components/Map/StationMap';
import type {Station} from "./types/domain/station.types.ts";
import {useState} from "react";

function App() {
    const {stations, status, error, refetch} = useStations();
    const {searchTerm, setSearchTerm, filteredStations} = useStationFilter(stations);
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);

    const handleStationSelect = (station: Station) => {
        setSelectedStation(station);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">

            <div
                className="w-full md:w-[400px] flex flex-col bg-white border-r border-gray-200 shadow-xl z-10 h-[50vh] md:h-full">

                <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">🚆 Germany Stations</h1>

                    <StationSearch
                        value={searchTerm}
                        onChange={setSearchTerm}
                        disabled={status !== 'success'}
                    />
                </div>

                <div className="flex-1 overflow-hidden flex flex-col relative">
                    {status === 'loading' && (
                        <div className="flex justify-center items-center h-full text-blue-600">Loading...</div>
                    )}

                    {status === 'error' && (
                        <div className="p-4 text-center text-red-500">
                            {error}
                            <button onClick={refetch} className="underline">Retry</button>
                        </div>
                    )}

                    {status === 'success' && (
                        <StationList
                            stations={filteredStations}
                            selectedStationId={selectedStation?.id || null}
                            onStationSelect={handleStationSelect}
                        />
                    )}
                </div>

                <div className="p-2 text-center text-xs text-gray-400 border-t bg-gray-50">
                    Showing {filteredStations.length} stations
                </div>
            </div>

            <div className="flex-1 relative h-[50vh] md:h-full">
                {status === 'success' ? (
                    <StationMap stations={filteredStations} selectedStation={selectedStation}/>
                ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse"/>
                )}
            </div>
        </div>
    );
}

export default App;
