import { operatorReducer } from "./operator";
import { resultReducer } from "./result"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    operatorReducer,
    resultReducer
})

export default allReducers