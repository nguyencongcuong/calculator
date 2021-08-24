/**
 ** OPERATOR REDUCER
 ** Manage the state of operator that show on the screen
 */

import { useSelector } from "react-redux"

export const operatorReducer = (state = "0", action) => {

    switch(action.type) {
        case "operatorAction":
            switch(action.keyName) {
                case "AC":
                    return "0"
                case "<":
                    if(state.length == 1) {
                        return "0"
                    } else {
                        let x = state.split("")
                        x.pop()
                        let newState = x.join("")
                        return newState
                    }
                case "+": 
                case "-":
                case "*":
                case "/":

                    const regexOperator1 = new RegExp(/(\+(\+|\*|\/))|\d(\-(\-|\+|\*|\/))|(\*(\+|\*|\/))|(\/(\+|\*|\/))/, "")
                    const regexOperator2 = new RegExp(/(\-|\+|\*|\/)\-(\-|\+|\*|\/)/, "g")
                    const regexOperator3 = new RegExp(/\+{2}|\-{2}|\*{2}|\/{2}/, "g")

                    if (state.match(/\+|\-|\*|\//, "g") !== null) {
                        // const regexOperator = new RegExp(/(\+(\+|\-|\*|\/))|(\-(\-|\+|\*|\/))|(\*(\+|\*|\/))|(\/(\+|\*|\/))/, "")
                        
                        if (state.concat(action.keyName).match(regexOperator1) !== null) {

                            console.log("rơi vào regex 1")
                            let newStr1 = state.split("").slice(0, state.length - 1).join("")

                            
                            if (newStr1.concat(action.keyName).match(regexOperator3) !== null) {
                                console.log("rơi vào regex 3")
                                return newStr1
                            } else {
                                return newStr1.concat(action.keyName)
                            }

                        }

                        
                        if (state.concat(action.keyName).match(regexOperator2) !== null) {
                            console.log("rơi vào regex 2")
                            let newStr2 = state.split("").slice(0, state.length - 1).join("")
                            if (newStr2.concat(action.keyName).match(regexOperator3) !== null) {
                                return newStr2
                            } else {
                                return newStr2.concat(action.keyName)
                            }
                            
                        }



                    } else {
                        return state.concat(action.keyName)
                    }
                case ".":
                    const regexDecimal = new RegExp(/(^\.)|[0-9]\.\.|([0-9]\.[0-9]\.)/, "g")
                    if (state.concat(".").match(regexDecimal) !== null) {
                        return state
                    } else {
                        return state === "0" ? state : state.concat(action.keyName)
                    }
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
                    return (state === "0") ? action.keyName : state.concat(action.keyName)
                case "=":
                    return eval(state).toString()
                default:
                    return state
            }
        default:
            return state
    }
}