
import { useStations } from './hooks/useStations';
import { useStationFilter } from './hooks/useStationFilter';

function App() {
    const { stations, status, error, refetch } = useStations();
    const { searchTerm, setSearchTerm, filteredStations } = useStationFilter(stations);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                German Train Stations
            </h1>

            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search by name or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    disabled={status !== 'success'}
                />
            </div>

            {status === 'loading' && (
                <div className="text-center text-blue-600 font-semibold">
                    Loading stations...
                </div>
            )}

            {status === 'error' && (
                <div className="text-center text-red-600">
                    <p>Error: {error}</p>
                    <button onClick={refetch} className="mt-2 underline">Retry</button>
                </div>
            )}

            {status === 'success' && (
                <>
                    <p className="text-center text-gray-500 mb-4">
                        Showing {filteredStations.length} of {stations.length} stations
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredStations.map((station) => (
                            <div key={station.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-800">{station.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        {station.city}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        ID: {station.id}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredStations.length === 0 && (
                        <div className="text-center text-gray-500 mt-8">
                            No stations found matching "{searchTerm}"
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
