import { LOAD_PRODUCTS,REMOVE_PRODUCTS,SET_PRODUCTS } from "../type"


export const LOAD_DATA = (data) => {
    return async (dispatch) => {
        const res = await fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((data) => {
                dispatch(setProducts(data))
        })
    }  
}


export const setProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        data:data
    }
}


export const REMOVE_DATA = (data) => {
    return {
        type: REMOVE_PRODUCTS,
        data:data
    }
}
 