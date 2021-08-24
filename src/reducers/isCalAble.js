import { isCalAble } from "../functions"

export const isCalAbleReducer = (state = true, action) => {
    switch(action.type) {
        case "isCalAble":
            return isCalAble(action.operator) ? true : false
        default:
            return state
    }
}