import {combineReducers} from 'redux';
import { planetsReducer } from './Planets';
import { characterReducer } from './Characters';
import { StarshipReducer } from './Starships';


export const rootReducer = combineReducers({
    planets: planetsReducer,
    characters: characterReducer,
    starships: StarshipReducer
})