export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const CURRENT_PAGE = 'CURRENT_PAGE';

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