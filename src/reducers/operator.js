/**
 ** OPERATOR REDUCER
 ** Manage the state of operator that show on the screen
 */
export const operatorReducer = (state = "0", action) => {

    switch(action.type) {
        case "operator_1":
            let newStr = state.split("").slice(0, state.length - 1).join("")
            return newStr
        case "operatorString":
            return (state === "0" && action.keyName !== ".") ? action.keyName : state.concat(action.keyName)
        case "operatorReset":
            return "0"
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