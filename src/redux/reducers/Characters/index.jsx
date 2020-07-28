import { GET_CHARACTERS_ERROR , GET_CHARACTERS_SUCCESS, GET_CHARACTERS_REQUEST} from "../../Types";


const initialState = {
    loading: false,
    characters: [],
    error: ""
}

export const characterReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_CHARACTERS_REQUEST:
            return {
                ...state, loading: true
            }
            case GET_CHARACTERS_SUCCESS: 
            return {
                ...state,
                 characters: action.payload,
                 loading:false
            }
                case GET_CHARACTERS_ERROR:
                return {
                    ...state, 
                    error:action.payload,
                    loading:false
                }
        
    
        default: return state
    }
}