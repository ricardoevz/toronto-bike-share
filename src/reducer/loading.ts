import { types } from '../types/types';
import { Action } from '../interfaces/interfaces';

const initialState = {
    loading: false
}
export const loadinReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishtLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }

}