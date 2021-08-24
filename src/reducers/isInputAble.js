import { isInputError } from "../functions"

export const isInputAbleReducer = (state = true, action) => {
    switch (action.type) {
        case "isInputAble":
            return ( isInputError(action.operator) ? false : true )
        default:
            return state
    }
}