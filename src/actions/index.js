export const operatorAction = (keyName) => {
    return {
        type: "CALCULATE",
        keyName,
    }
}

export const resultAction = (data) => {
    return {
        type: "SET_RESULT",
        payload: data
    }
}

export const validateOperator = (operator) => {
    return {
        type: "VALIDATE_OPERATOR",
        operator,
    }
}