import { deleteLastChar, isMatched } from "../functions"

/**
 ** OPERATOR REDUCER
 ** Manage the state of operator that show on the screen
 */
export const operatorReducer = (state = "0", action) => {

    const oldState = state
    const newState = state.concat(action.keyName)
    const newerState = deleteLastChar(state).concat(action.keyName)

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
                    return isMatched(newState, regexOperator1) ? oldState :
                    isMatched(newState, regexOperator2) ? newerState : newState
                case ".":
                    const regexDecial = new RegExp(/(\+|-|\*|\/)\.|\.{2}/, "g")
                    return  isMatched(newState, regexDecial) ? oldState : newState
                case "0":
                    const regexZero = new RegExp(/(\/00$)/, "g")
                    return (oldState === "0") || isMatched(newState, regexZero) ? oldState : newState
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    return oldState === "0" ? action.keyName : newState
                case "=":
                    return eval(state).toString()
                default:
                    return state
            }
        default:
            return state
    }
}