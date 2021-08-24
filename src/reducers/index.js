import { operatorReducer } from "./operator";
import { resultReducer } from "./result"
import { isCalAbleReducer } from "./isCalAble";
import { isInputAbleReducer } from "./isInputAble";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    operator: operatorReducer,
    result: resultReducer,
    isCalAble: isCalAbleReducer,
    isInputAble: isInputAbleReducer
})

export default allReducers