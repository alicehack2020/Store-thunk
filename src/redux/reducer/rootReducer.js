import { combineReducers } from "redux";
import productsData from "./postReducer";

const rootReducer = combineReducers({ productsData })

export default rootReducer;