import { GET_SPACESHIP_ERROR , GET_SPACESHIP_SUCCESS, GET_SPACESHIP_REQUEST} from "../../Types";


const initialState = {
    loading: false,
    starships: [],
    error: ""
}

export const StarshipReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_SPACESHIP_REQUEST:
            return {
                ...state, loading: true
            }
            case GET_SPACESHIP_SUCCESS: 
            return {
                ...state,
                 starships: action.payload,
                 loading:false
            }
                case GET_SPACESHIP_ERROR:
                return {
                    ...state, 
                    error:action.payload,
                    loading:false
                }
        
    
        default: return state
    }
}