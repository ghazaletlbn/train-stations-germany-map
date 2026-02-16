import React from 'react';
import type {Station} from "../../types/domain/station.types.ts";

interface StationCardProps {
    station: Station;
    isSelected: boolean;
    onClick: (station: Station) => void;
}

export const StationCard: React.FC<StationCardProps> = ({ station, isSelected, onClick }) => {
    return (
        <div
            onClick={() => onClick(station)}
            className={`
                p-4 mb-3 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected
                ? 'bg-blue-50 border-blue-500 shadow-md transform scale-[1.02]'
                : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
            }
            `}
        >
            <h3 className="font-bold text-gray-800">{station.name}</h3>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                    {station.city}
                </span>
                <span className="text-xs">
                    ID: {station.id}
                </span>
            </div>
        </div>
    );
};
