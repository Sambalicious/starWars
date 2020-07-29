import Axios from "axios"

const { GET_PLANETS_REQUEST, GET_PLANETS_SUCCESS, GET_PLANETS_ERROR } = require("../Types")



const getPlanetRequest = () =>{
    return {
        type: GET_PLANETS_REQUEST
    }
}

const getPlanetSuccess = payload =>{
    return {
        type: GET_PLANETS_SUCCESS,
        payload
    }
}

const getPlanetError = payload =>{
  return {

   type: GET_PLANETS_ERROR,
    payload
}
} 
export const fetchPlanets = () => {
    return (dispatch) => {
        dispatch(getPlanetRequest);
        Axios.get("/planets")
        .then(response =>{
            const planets = response.data;
            getPlanetSuccess(planets);
        }).catch(error =>{
            const errors = error.message
            getPlanetError(errors);
        })
    }
}