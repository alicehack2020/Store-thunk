import { LOAD_PRODUCTS,SET_PRODUCTS } from "../type";

 
const productsData = (data = [], action) => {
    
 
    switch (action.type)
    {
        case SET_PRODUCTS:
            return action.data;
        default:
            return data;
    }
}

export default productsData