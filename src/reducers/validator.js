import { isCalAble } from "../functions"

export const validateOperatorReducer = (state = true, action) => {
    switch(action.type) {
        case "VALIDATE_OPERATOR":
            return isCalAble(action.operator) ? true : false
        default:
            return state
    }
}