import { PREVIOUS_PAGE, FOUND_DOGS, NEXT_PAGE, CURRENT_PAGE, SET_ALL_DOGS, SET_ALL_TEMPERAMENTS, FILTER_BY_ORIGIN, FILTER_BY_TEMPERAMENTS, ORDER_BY_WEIGHT, ORDER_BY_NAME } from "./actions";

const initialState = {
    allDogs: [],
    filteredDogs: [],
    foundDogs: [],
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

        case FOUND_DOGS:
            return {
                ...state,
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
                : state.filteredDogs.filter(dog => (dog.temperament || '').split(", ").includes(action.payload))
            }
        
        case FILTER_BY_ORIGIN:
            return {
                ...state,
                filteredDogs: 
                action.payload === 'all'
                ? state.allDogs
                : action.payload === 'created'
                    ? state.filteredDogs.filter( dog => isNaN(Number(dog.id)))
                    : state.filteredDogs.filter( dog => !isNaN(Number(dog.id)))
            }
        
        case ORDER_BY_NAME:
            return {
                ...state,
                filteredDogs: 
                action.payload === 'none'
                ? state.filteredDogs
                : action.payload === 'A' 
                    ? [...state.filteredDogs].sort((a,b) => {
                        if (a.name < b.name) return -1
                        if (a.name > b.name) return 1
                    })
                    : [...state.filteredDogs].sort((a,b) => {
                        if (a.name > b.name) return -1
                        if (a.name < b.name) return 1
                    })
            }
        
        case ORDER_BY_WEIGHT:
            return {
                ...state,
                filteredDogs:  
                action.payload === 'none'
                ? state.filteredDogs
                : action.payload === 'A' 
                    ? [...state.filteredDogs].sort((a,b) => {
                        const aWeight = a.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                        const bWeight = b.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                        if ((aWeight[1] || aWeight[0]) > (bWeight[1] || bWeight[0])) return 1;
                        if ((aWeight[1] || aWeight[0]) < (bWeight[1] || bWeight[0])) return -1;
                    })
                    : action.payload === 'D' 
                        ? [...state.filteredDogs].sort((a,b) => {
                            const aWeight = a.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                            const bWeight = b.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                            if ((aWeight[1] || aWeight[0]) < (bWeight[1] || bWeight[0])) return 1;
                            if ((aWeight[1] || aWeight[0]) > (bWeight[1] || bWeight[0])) return -1;
                        })
                        : action.payload === 'a' 
                            ? [...state.filteredDogs].sort((a,b) => {
                                const aWeight = a.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                                const bWeight = b.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                                if (aWeight[0] > bWeight[0]) return 1;
                                if (aWeight[0] < bWeight[0]) return -1;
                            })
                            : [...state.filteredDogs].sort((a,b) => {
                                const aWeight = a.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                                const bWeight = b.weight.split(' - ').map(num => Number(num)).filter( num => !isNaN(num))
                                if (aWeight[0] < bWeight[0]) return 1;
                                if (aWeight[0] > bWeight[0]) return -1;
                            })
            }
        
        default:
            return {...state}
    }
}

export default reducer