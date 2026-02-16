import React from 'react';
import {StationCard} from './StationCard';
import type {Station} from "../../types/domain/station.types.ts";

interface StationListProps {
    stations: Station[];
    selectedStationId: number | null;
    onStationSelect: (station: Station) => void;
}

export const StationList: React.FC<StationListProps> = ({
                                                            stations,
                                                            selectedStationId,
                                                            onStationSelect
                                                        }) => {
    if (stations.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                No stations found.
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
            {stations.map((station) => (
                <StationCard
                    key={station.id}
                    station={station}
                    isSelected={station.id === selectedStationId}
                    onClick={onStationSelect}
                />
            ))}
        </div>
    );
};
