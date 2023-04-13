import { ADD_CART, REMOVE_CART, UPDATE_CART } from "../type"

export const addToCart = (data) => {
    return {
        type: ADD_CART,
        data:data
    } 
}

export const removeToCart = (data) => {
    return {
        type: REMOVE_CART,
        data:data
    } 
}

export const updateToCart = (data) => {
    return {
        type: UPDATE_CART,
        data:data
    } 
}