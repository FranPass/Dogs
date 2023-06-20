import axios from "axios";

export const SET_ALL_DOGS = 'SET_ALL_DOGS';
export const FOUND_DOGS = 'FOUND_DOGS';
export const SET_ALL_TEMPERAMENTS = 'SET_ALL_TEMPERAMENTS'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';

export const setAllDogs = () => {
    const endpoint = 'http://localhost:3001/dogs/';
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
    const endpoint = `http://localhost:3001/dogs/?name=${name}`;
    return (dispatch) => {
        axios.get(endpoint)
        .then(({data}) => {
            return dispatch({
                type: FOUND_DOGS,
                payload: [...data]
            })
        })
    }
}
export const setAllTemperaments = () => {
    const endpoint = 'http://localhost:3001/temperaments/';
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
export const previousPage = () => {
    return {
        type: PREVIOUS_PAGE,
        payload: -1
    }
}
export const nextPage = () => {
    return {
        type: NEXT_PAGE,
        payload: +1
    }
}
export const setCurrentPage = (num) => {
    return {
        type: CURRENT_PAGE,
        payload: num
    }
}
export const filterByTemperaments = (temperament) => {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload: temperament
    }
}
export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}
export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order
    }
}
export const orderByWeight = (order) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload: order
    }
}