import { SET_CRYPTO} from "../type"
import { getRequest } from "../../service/request"
export const getData = (data) => {
    return async (dispatch) => {
        // const res = await fetch("https://fakestoreapi.com/products/")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         dispatch(setProducts(data))
        // })
        const res = await getRequest({ url: 'coins' }).then((data) => {
            console.log(data.data)
            dispatch(setProducts(data.data))
        })
        
    }  
}

export const setProducts = (data) => {
    return {
        type: SET_CRYPTO,
        data:data
    }
}
