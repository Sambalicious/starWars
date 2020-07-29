import { GET_PLANETS_REQUEST, GET_PLANETS_SUCCESS, GET_PLANETS_ERROR } from "../../Types";



const initialState = {
    planets: [],
    loading:false,
    error:[]
}


export const planetsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case  GET_PLANETS_REQUEST:
            return {
                ...state, loading:true
            }
            case GET_PLANETS_SUCCESS:
                return {
                    ...state, planets: action.payload
                }

                case GET_PLANETS_ERROR: 
                return {
                    ...state, error:action.payload
                }
    
        default: return state
    }
}