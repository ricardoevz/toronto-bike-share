import axios from 'axios';
import { Stations, StationsStatus } from '../interfaces/interfaces';
import { types } from '../types/types';
import { startLoading, finishLoading } from './loadingActions';

export const loadingStations = () => {
    return async ( dispatch : any) => {
        const resp = await axios.get('https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_information');
        const data: Stations[] = resp.data.data.stations;
        dispatch(loadingStationStatus( data ));
    }
}

export const loadingStationStatus = ( stations: Stations[] ) => {
    return async (dispatch: any) => {
        // const {stations} = getState().bikes;
        dispatch( startLoading() );
        const data = await axios.get('https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_status');
        dispatch( setStationStatus( stations , data.data.data.stations )  );
        dispatch( finishLoading() );
    }
}

export const setStationStatus = ( stations : Stations[] , stationStatus : StationsStatus[]) => ({
    type : types.setStationsStatus,
    payload : {
        stations,
        stationStatus
    }
});