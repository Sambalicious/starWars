import {combineReducers} from 'redux';
import { planetsReducer } from './Planets';
import { characterReducer } from './Characters';


export const rootReducer = combineReducers({
    planets: planetsReducer,
    characters: characterReducer
})