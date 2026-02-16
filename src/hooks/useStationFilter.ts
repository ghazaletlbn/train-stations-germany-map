import { useState, useMemo } from 'react';
import type { Station } from '../types/domain/station.types';
import { useDebounce } from './useDebounce';
import {UI_CONFIG} from "../constants/ui.constants.ts";

export const useStationFilter = (stations: Station[]) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, UI_CONFIG.SEARCH_DEBOUNCE_DELAY_MS);

    const filteredStations = useMemo(() => {
        if (!debouncedSearchTerm.trim()) {
            return stations;
        }

        const lowerCaseTerm = debouncedSearchTerm.toLowerCase();

        return stations.filter((station) =>
            station.name.toLowerCase().includes(lowerCaseTerm) ||
            station.city.toLowerCase().includes(lowerCaseTerm)
        );
    }, [stations, debouncedSearchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredStations,
    };
};
