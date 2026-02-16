import { API_CONFIG } from '../constants/api.constants.ts';
import type { StationsApiResponse } from '../types/api/station-api.types.ts';
import type { Station } from '../types/domain/station.types.ts';
import {mapStationsFromApi} from "../mappers/station.mapper.ts";


export const fetchStations = async (): Promise<Station[]> => {
    try {
        const response = await fetch(API_CONFIG.STATIONS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data: StationsApiResponse = await response.json();

        return mapStationsFromApi(data);
    } catch (error) {
        console.error('Failed to fetch stations:', error);
        throw error;
    }
};
