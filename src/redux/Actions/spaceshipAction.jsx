import { GET_SPACESHIP_SUCCESS, GET_SPACESHIP_REQUEST, GET_SPACESHIP_ERROR } from "../Types"
import axios from 'axios';


 const getSpaceshipRequest = () => {
    return {
        type: GET_SPACESHIP_REQUEST
    }
}

const getSpaceshipSuccess = payload =>{
    return {
        type: GET_SPACESHIP_SUCCESS,
        payload
    }
}

const getSpaceshipError = payload =>{
    return {
        type: GET_SPACESHIP_ERROR,
        payload
    }
}

 export const fetchSpaceships = () =>{
    return (dispatch) =>{
        dispatch(getSpaceshipRequest());
        axios.get("/starships")
        .then(response =>{
            const spaceship = response.data;
            dispatch(getSpaceshipSuccess(spaceship));
        }).catch(error =>{
            const errors = error.message;
            dispatch(getSpaceshipError(errors));
        })
    }
}
