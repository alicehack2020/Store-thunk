import { ADD_CART, REMOVE_CART, UPDATE_CART } from "../type"
const getCartData = (data = [], action) => {
    switch (action.type)
    {
        case ADD_CART:
            return [data,...action.data];
        case REMOVE_CART:
            data.filter((e) => {
                return e.id!==action.data.id
            })
            return data;
        case UPDATE_CART:
            return data;
        default:
            return data;
    }
}

export default getCartData