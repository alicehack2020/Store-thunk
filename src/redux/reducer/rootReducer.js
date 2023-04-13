import { combineReducers } from "redux";
import productsData from "./postReducer";
import getCartData from "./cart.Reducer";
const rootReducer = combineReducers({ productsData,getCartData })

export default rootReducer;