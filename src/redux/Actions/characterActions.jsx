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

 export const fetchCharacters = (page) =>{
    return (dispatch) =>{
        dispatch(getCharacterRequest());
        axios.get(`/people/?page=${page}`)
        .then(response =>{
            const characters = response.data;
            dispatch(getCharacterSuccess(characters));
        }).catch(error =>{
            const errors = error.message;
            dispatch(getCharacterError(errors));
        })
    }
}
