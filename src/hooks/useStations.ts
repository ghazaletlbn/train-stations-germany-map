import { useState, useEffect, useCallback } from 'react';
import { fetchStations } from '../services/station.service.ts';
import type { Station, LoadingState } from '../types/domain/station.types.ts';

interface UseStationsResult {
    stations: Station[];
    status: LoadingState;
    error: string | null;
    refetch: () => void;
}

export const useStations = (): UseStationsResult => {
    const [stations, setStations] = useState<Station[]>([]);
    const [status, setStatus] = useState<LoadingState>('idle');
    const [error, setError] = useState<string | null>(null);

    const getStations = useCallback(async () => {
        setStatus('loading');
        setError(null);

        try {
            const data = await fetchStations();
            setStations(data);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        }
    }, []);

    useEffect(() => {
        getStations();
    }, [getStations]);

    return { stations, status, error, refetch: getStations };
};
