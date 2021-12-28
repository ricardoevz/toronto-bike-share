import { types } from '../types/types';
import { State, Action, Stations, StationsStatus } from '../interfaces/interfaces';



const inicialState: State = {
    loading: false,
    stations: []
}

export const BikeReducer = ( state = inicialState, action: Action) => {

    switch (action.type) {
        case types.setStationsStatus:

            const stations = action.payload.stations;
            const stationStatus = action.payload.stationStatus;

            const searchStatus = stations.map( (station: Stations) => {
                return {
                    ...station,
                    stationStatus : stationStatus.find( ( status: StationsStatus ) => station.station_id === status.station_id ) || {}
                }
            });

            return {
                ...state,
                stations: searchStatus.sort( ( a: Stations , b: Stations ) => a.name.localeCompare(b.name)  )
            };
        
        default:
            return state;
    }
}