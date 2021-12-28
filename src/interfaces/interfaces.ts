export interface Stations {
    station_id:             string;
    name:                   string;
    lat:                    number;
    lon:                    number;
    address:                string;
    capacity:               number;
    stationStatus:          StationsStatus
}

export interface StationsStatus {
    station_id:                string;
    num_bikes_available:       number;
    status:                    string;
}


export interface Action {
    type: string,
    payload: any
}

export interface State{
    loading: boolean,
    stations :Stations[],

}