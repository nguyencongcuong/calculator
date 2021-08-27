import { operatorReducer } from "./operator";
import { resultReducer } from "./result"
import { validateOperatorReducer } from "./validator";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    operator: operatorReducer,
    result: resultReducer,
    validation: validateOperatorReducer
})

export default allReducers