export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'

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