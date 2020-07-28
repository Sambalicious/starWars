import { GET_CHARACTERS_SUCCESS, GET_CHARACTERS_REQUEST, GET_CHARACTERS_ERROR } from "../Types"
import axios from 'axios';


 const getCharacterRequest = () => {
    return {
        type: GET_CHARACTERS_REQUEST
    }
}

const getCharacterSuccess = payload =>{
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload
    }
}

const getCharacterError = payload =>{
    return {
        type: GET_CHARACTERS_ERROR,
        payload
    }
}

 export const fetchCharacters = () =>{
    return (dispatch) =>{
        dispatch(getCharacterRequest());
        axios.get("/people")
        .then(response =>{
            const characters = response.data;
            dispatch(getCharacterSuccess(characters.results));
        }).catch(error =>{
            const errors = error.message;
            dispatch(getCharacterError(errors));
        })
    }
}
