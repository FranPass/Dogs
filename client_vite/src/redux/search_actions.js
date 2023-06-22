import axios from "axios";

export const SET_ALL_DOGS = 'SET_ALL_DOGS';
export const FOUND_DOGS = 'FOUND_DOGS';
export const SET_ALL_TEMPERAMENTS = 'SET_ALL_TEMPERAMENTS'

export const setAllDogs = () => {
    const endpoint = '/dogs/';
    return (dispatch) => {
        axios.get(endpoint)
        .then(({data}) => {
            return dispatch({
                type: SET_ALL_DOGS,
                payload: [...data]
            })
        })
    }
}
export const findDogs = (name) => {
    const endpoint = `/dogs/?name=${name}`;
    return (dispatch) => {
        axios.get(endpoint)
        .then(({data}) => {
            return dispatch({
                type: FOUND_DOGS,
                payload: [...data]
            })
        }, )
    }
}
export const setAllTemperaments = () => {
    const endpoint = '/temperaments/';
    return (dispatch) => {
        axios.get(endpoint)
        .then(({data}) => {
            return dispatch({
                type: SET_ALL_TEMPERAMENTS,
                payload: [...data]
            })
        })
    }
}