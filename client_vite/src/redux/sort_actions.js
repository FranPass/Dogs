export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';

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