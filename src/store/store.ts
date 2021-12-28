
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { BikeReducer } from '../reducer/reducer';
import thunk from 'redux-thunk';
import { loadinReducer } from '../reducer/loading';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    bikes: BikeReducer,
    ui: loadinReducer
});

export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);