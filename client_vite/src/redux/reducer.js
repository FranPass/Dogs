import { PREVIOUS_PAGE, NEXT_PAGE, CURRENT_PAGE, SET_ALL_DOGS, SET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENTS } from "./actions";

const initialState = {
    allDogs: [],
    filteredDogs: [],
    allTemperaments: [],
    currentPage: 1
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                filteredDogs: action.payload
            }

        case SET_ALL_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }

        case PREVIOUS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + action.payload
            }

        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + action.payload
            }

        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        
        case FILTER_BY_TEMPERAMENTS:
            return {
                ...state,
                filteredDogs: 
                action.payload === 'all'
                ? state.allDogs
                : state.allDogs.filter(dog => (dog.temperament || '').split(", ").includes(action.payload))
            }
        
        default:
            return {...state}
    }
}

export default reducer