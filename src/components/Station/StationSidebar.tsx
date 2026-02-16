import React from 'react';
import {StationSearch} from './StationSearch';
import {StationList} from './StationList';
import {LoadingState} from '../UI/LoadingState';
import {ErrorState} from '../UI/ErrorState';
import type {Station} from "../../types/domain/station.types.ts";

interface StationSidebarProps {
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
    stations: Station[];
    selectedStationId: number | null;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    onStationSelect: (station: Station) => void;
    onRetry: () => void;
}

export const StationSidebar: React.FC<StationSidebarProps> = ({
                                                                  status,
                                                                  error,
                                                                  stations,
                                                                  selectedStationId,
                                                                  searchTerm,
                                                                  onSearchChange,
                                                                  onStationSelect,
                                                                  onRetry
                                                              }) => {
    return (
        <div
            className="w-full md:w-[400px] flex flex-col bg-white border-r border-gray-200 shadow-xl z-10 h-[50vh] md:h-full">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h1 className="text-xl font-bold text-gray-800 mb-4">🚆 Germany Stations</h1>
                <StationSearch
                    value={searchTerm}
                    onChange={onSearchChange}
                    disabled={status !== 'success'}
                />
            </div>

            <div className="flex-1 overflow-hidden flex flex-col relative">
                {status === 'loading' && <LoadingState/>}

                {status === 'error' && (
                    <ErrorState message={error || 'Unknown error'} onRetry={onRetry}/>
                )}

                {status === 'success' && (
                    <StationList
                        stations={stations}
                        selectedStationId={selectedStationId}
                        onStationSelect={onStationSelect}
                    />
                )}
            </div>

            <div className="p-2 text-center text-xs text-gray-400 border-t bg-gray-50">
                Showing {stations.length} stations
            </div>
        </div>
    );
};
