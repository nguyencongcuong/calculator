import { deleteLastChar, isMatched } from "../functions"

/**
 ** OPERATOR REDUCER
 ** Manage the state of operator that show on the screen
 */
export const operatorReducer = (state = "0", action) => {

    switch(action.type) {
        case "operatorAction":
            switch(action.keyName) {
                case "AC":
                    return "0"
                case "<":
                    return state.length === 1 ? "0" : deleteLastChar(state) 
                case "+": 
                case "-":
                case "*":
                case "/":

                    const regexOperator1 = new RegExp(/(\*|\/)-(\+|-|\*|\/)/, "g") // Match: 6*-+, 6*--
                    const regexOperator2 = new RegExp(/(\+(\+|-|\*|\/))|(-((-)|(\+)|(\*)|(\/)))|(\*(\+|\*|\/))|(\/(\+|\*|\/))/, "g")
                    
                    const oldState = state
                    const newState = state.concat(action.keyName)
                    const newerState = deleteLastChar(state).concat(action.keyName)

                    return isMatched(newState, regexOperator1) ? oldState :
                    isMatched(newState, regexOperator2) ? newerState : newState

                case ".":
                    const regexDecimal = new RegExp(/(^\.)|[0-9]\.\.|([0-9]\.[0-9]\.)/, "g")
                    const regexDecimalTest = state.concat(".").match(regexDecimal)
                    return  regexDecimalTest !== null ? state : 
                            state === "0" ? action.keyName :
                            state.concat(action.keyName)
                case "0":
                    if (state === "0") {
                        return state
                    } else {
                        return state.concat(action.keyName)
                    }
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    return state === "0" ? action.keyName : state.concat(action.keyName)
                case "=":
                    return eval(state).toString()
                default:
                    return state
            }
        default:
            return state
    }
}