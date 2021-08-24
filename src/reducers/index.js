import { operatorReducer } from "./operator";
import { resultReducer } from "./result"
import { isCalAbleReducer } from "./isCalAble";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    operator: operatorReducer,
    result: resultReducer,
    isCalAble: isCalAbleReducer
})

export default allReducers