/**
 ** OPERATOR REDUCER
 ** Manage the state of operator that show on the screen
 */
export const operatorReducer = (state = "", action) => {

    switch(action.type) {
        case "operatorString":
            return state.concat(action.keyName)
        case "operatorReset":
            return ""
        case "operatorBack":
            let x = state.split("")
            x.pop()
            let newState = x.join("")
            return newState
        case "operatorEqual":
            return eval(action.operatorString).toString()
        default:
            return state
    }
}